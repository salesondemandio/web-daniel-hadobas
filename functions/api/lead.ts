interface Env {
  GHL_PIT: string;
  GHL_LOCATION_ID: string;
  TURNSTILE_SECRET?: string;
}

const ALLOWED_ORIGINS = new Set([
  "https://danielhadobas.com",
  "https://www.danielhadobas.com",
]);

const ALLOWED_CAMPAIGN_TAGS = new Set(["rate-hike-lp"]);

function getCorsHeaders(origin: string | null): Record<string, string> {
  const base: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    base["Access-Control-Allow-Origin"] = origin;
  }
  return base;
}

function sanitizeName(raw: unknown): string {
  return String(raw).trim().slice(0, 100);
}

function sanitizePhone(raw: unknown): { value: string; valid: boolean } {
  const stripped = String(raw).replace(/[^\d\s\-().+]/g, "").trim().slice(0, 20);
  const digitCount = (stripped.match(/\d/g) ?? []).length;
  return { value: stripped, valid: digitCount >= 10 };
}

function sanitizeEmail(raw: unknown): string {
  const s = String(raw).trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) ? s : "";
}

function sanitizeShort(raw: unknown, cap: number): string {
  return String(raw).trim().slice(0, cap);
}

export const onRequestOptions: PagesFunction = async (ctx) => {
  const origin = ctx.request.headers.get("Origin");
  return new Response(null, { headers: getCorsHeaders(origin) });
};

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const origin = ctx.request.headers.get("Origin");
  const cors = getCorsHeaders(origin);

  const pitToken = ctx.env.GHL_PIT;
  const locationId = ctx.env.GHL_LOCATION_ID;

  if (!pitToken || !locationId) {
    console.error("Missing GHL env vars");
    return new Response(JSON.stringify({ success: false, error: "Server misconfiguration." }), {
      status: 500, headers: { "Content-Type": "application/json", ...cors },
    });
  }

  let body: Record<string, unknown>;
  try {
    body = await ctx.request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Invalid request body." }), {
      status: 400, headers: { "Content-Type": "application/json", ...cors },
    });
  }

  // Honeypot: bots fill this hidden field; real users leave it empty
  if (body.website && String(body.website).trim() !== "") {
    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { "Content-Type": "application/json", ...cors },
    });
  }

  // Cloudflare Turnstile — verify the token whenever a secret is configured (prod).
  // Skipped automatically in local/preview envs that don't have TURNSTILE_SECRET set.
  if (ctx.env.TURNSTILE_SECRET) {
    const tsToken = body["cf-turnstile-response"] ? String(body["cf-turnstile-response"]) : "";
    let verified = false;
    try {
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: ctx.env.TURNSTILE_SECRET,
          response: tsToken,
          remoteip: ctx.request.headers.get("CF-Connecting-IP") || undefined,
        }),
      });
      const vr = await verify.json() as { success?: boolean };
      verified = vr.success === true;
    } catch {
      verified = false;
    }
    if (!verified) {
      return new Response(JSON.stringify({ success: false, error: "Verification failed. Please refresh and try again." }), {
        status: 400, headers: { "Content-Type": "application/json", ...cors },
      });
    }
  }

  const cleanName = sanitizeName(body.name ?? "");
  const { value: cleanPhone, valid: phoneValid } = sanitizePhone(body.phone ?? "");
  const cleanEmail = body.email ? sanitizeEmail(body.email) : "";
  const cleanAddress = body.address ? sanitizeShort(body.address, 200) : "";
  const cleanElectricBill = body.electricBill ? sanitizeShort(body.electricBill, 40) : "";

  // campaignTag: only pass through if in the allowlist
  const rawTag = body.campaignTag ? String(body.campaignTag) : "";
  const campaignTag = ALLOWED_CAMPAIGN_TAGS.has(rawTag) ? rawTag : "";

  if (!cleanName || !cleanPhone) {
    return new Response(JSON.stringify({ success: false, error: "Name and phone are required." }), {
      status: 400, headers: { "Content-Type": "application/json", ...cors },
    });
  }

  if (!phoneValid) {
    return new Response(JSON.stringify({ success: false, error: "A valid phone number is required." }), {
      status: 400, headers: { "Content-Type": "application/json", ...cors },
    });
  }

  const [firstName, ...rest] = cleanName.split(/\s+/);
  const lastName = rest.join(" ") || "";

  const tags = ["website-lead", "solar-consultation", ...(campaignTag ? [campaignTag] : [])];

  const ghlRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${pitToken}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      phone: cleanPhone,
      email: cleanEmail || undefined,
      locationId,
      source: "danielhadobas.com",
      tags,
      customFields: [
        ...(cleanAddress ? [{ key: "address", field_value: cleanAddress }] : []),
        ...(cleanElectricBill ? [{ key: "monthly_electric_bill", field_value: cleanElectricBill }] : []),
      ],
    }),
  });

  let ghlData: any;
  try {
    ghlData = await ghlRes.json();
  } catch {
    console.error("GHL non-JSON response, status:", ghlRes.status);
    return new Response(JSON.stringify({ success: false, error: "Submission failed. Please call us directly." }), {
      status: 500, headers: { "Content-Type": "application/json", ...cors },
    });
  }

  if (!ghlRes.ok) {
    // Duplicate contact — merge tags via PATCH then return success
    if (ghlRes.status === 400 && ghlData?.meta?.contactId) {
      const contactId = ghlData.meta.contactId as string;
      try {
        const patchRes = await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${pitToken}`,
            "Content-Type": "application/json",
            Version: "2021-07-28",
          },
          body: JSON.stringify({ tags }),
        });
        if (!patchRes.ok) {
          console.error("GHL tag merge PATCH failed, status:", patchRes.status);
        }
      } catch {
        console.error("GHL tag merge PATCH threw, contact tags may be stale");
      }
      return new Response(JSON.stringify({ success: true, contactId }), {
        headers: { "Content-Type": "application/json", ...cors },
      });
    }
    console.error("GHL contact create failed, status:", ghlRes.status);
    return new Response(JSON.stringify({ success: false, error: "Submission failed. Please call us directly." }), {
      status: 500, headers: { "Content-Type": "application/json", ...cors },
    });
  }

  return new Response(JSON.stringify({ success: true, contactId: ghlData.contact?.id }), {
    headers: { "Content-Type": "application/json", ...cors },
  });
};
