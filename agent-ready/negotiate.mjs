// Vendored from dev/tools/astro-agent-ready v0.4.0. Edit there, then re-run bin/sync.mjs.
// Shared request helpers for the agent-ready middlewares. No dependencies.
export const MD_PREFIX = '/_md';

/** True only when the Accept header names text/markdown explicitly with q > 0. Browsers never do. */
export function wantsMarkdown(accept) {
  if (!accept) return false;
  return accept.split(',').some((part) => {
    const [type, ...params] = part.trim().toLowerCase().split(';').map((s) => s.trim());
    if (type !== 'text/markdown') return false;
    const q = params.find((p) => p.startsWith('q='));
    return q ? Number(q.slice(2)) > 0 : true;
  });
}

/** True for paths that are pages (no file extension, not an internal folder). */
export function isPagePath(pathname) {
  if (pathname.startsWith(MD_PREFIX + '/') || pathname.startsWith('/_astro/') || pathname.startsWith('/api/')) return false;
  const last = pathname.split('/').pop() || '';
  return !last.includes('.');
}

export function mdPathFor(pathname) {
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  return clean ? `${MD_PREFIX}/${clean}/index.md` : `${MD_PREFIX}/index.md`;
}

/** Link header advertised on every page. Only lists resources the site actually serves. */
export function linkHeader({ hasLlms = true, sitemap = '/sitemap-index.xml' } = {}) {
  const links = [`<${sitemap}>; rel="sitemap"; type="application/xml"`];
  if (hasLlms) links.push('</llms.txt>; rel="describedby"; type="text/plain"');
  return links.join(', ');
}

export function markdownHeaders(canonicalUrl, body) {
  return {
    'Content-Type': 'text/markdown; charset=utf-8',
    'Vary': 'Accept',
    'Link': `<${canonicalUrl}>; rel="canonical"`,
    'x-markdown-tokens': String(Math.ceil(body.length / 4)),
    'Cache-Control': 'public, max-age=0, must-revalidate',
  };
}
