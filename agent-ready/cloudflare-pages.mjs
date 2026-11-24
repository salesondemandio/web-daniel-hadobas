// Vendored from dev/tools/astro-agent-ready v0.1.0. Edit there, then re-run bin/sync.mjs.
// Cloudflare Pages Functions handler. Chain it from functions/_middleware.ts:
//   import { agentReady } from '../agent-ready/cloudflare-pages.mjs';
//   export const onRequest = [existingHandler, agentReady];
import { wantsMarkdown, isPagePath, mdPathFor, linkHeader, markdownHeaders } from './negotiate.mjs';

export async function agentReady(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  if (!['GET', 'HEAD'].includes(request.method) || !isPagePath(url.pathname)) return context.next();

  if (wantsMarkdown(request.headers.get('accept')) && env?.ASSETS) {
    const md = await env.ASSETS.fetch(new URL(mdPathFor(url.pathname), url.origin));
    if (md.ok) {
      const body = await md.text();
      const canonical = url.origin + url.pathname;
      return new Response(request.method === 'HEAD' ? null : body, { status: 200, headers: markdownHeaders(canonical, body) });
    }
  }

  const res = await context.next();
  const type = res.headers.get('content-type') || '';
  if (!type.includes('text/html')) return res;
  const out = new Response(res.body, res);
  out.headers.append('Vary', 'Accept');
  out.headers.append('Link', linkHeader());
  return out;
}
