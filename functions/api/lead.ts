interface Env {
  GHL_PIT: string;
  GHL_LOCATION_ID: string;
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { headers: CORS });

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const pitToken = ctx.env.GHL_PIT;
  const locationId = ctx.env.GHL_LOCATION_ID;

  if (!pitToken || !locationId) {
    console.error("Missing GHL env vars");
    return new Response(JSON.stringify({ success: false, error: "Server misconfiguration." }), {
      status: 500, headers: { "Content-Type": "application/json", ...CORS },
    });
  }

  let body: Record<string, string>;
  try {
    body = await ctx.request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Invalid request body." }), {
      status: 400, headers: { "Content-Type": "application/json", ...CORS },
    });
  }

  const { name, phone, email, address, electricBill } = body;
  if (!name || !phone) {
    return new Response(JSON.stringify({ success: false, error: "Name and phone are required." }), {
      status: 400, headers: { "Content-Type": "application/json", ...CORS },
    });
  }

  const [firstName, ...rest] = name.trim().split(/\s+/);
  const lastName = rest.join(" ") || "";

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
      phone,
      email: email || undefined,
      locationId,
      source: "danielhadobas.com",
      tags: ["website-lead", "solar-consultation"],
      customFields: [
        ...(address ? [{ key: "address", field_value: address }] : []),
        ...(electricBill ? [{ key: "monthly_electric_bill", field_value: electricBill }] : []),
      ],
    }),
  });

  const ghlData = await ghlRes.json() as any;

  if (!ghlRes.ok) {
    // Duplicate contact — GHL already has them, treat as success
    if (ghlRes.status === 400 && ghlData?.meta?.contactId) {
      return new Response(JSON.stringify({ success: true, contactId: ghlData.meta.contactId }), {
        headers: { "Content-Type": "application/json", ...CORS },
      });
    }
    console.error("GHL error:", JSON.stringify(ghlData));
    return new Response(JSON.stringify({ success: false, error: "Submission failed. Please call us directly." }), {
      status: 500, headers: { "Content-Type": "application/json", ...CORS },
    });
  }

  return new Response(JSON.stringify({ success: true, contactId: ghlData.contact?.id }), {
    headers: { "Content-Type": "application/json", ...CORS },
  });
};
