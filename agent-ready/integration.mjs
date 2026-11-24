// Vendored from dev/tools/astro-agent-ready v0.4.0. Edit there, then re-run bin/sync.mjs.
// astro-agent-ready: build step. Canonical copy lives in dev/tools/astro-agent-ready;
// sites get a vendored copy in ./agent-ready/ via `node bin/sync.mjs <site>`.
// After `astro build` it:
//   1. writes a markdown copy of every HTML page to dist/_md/<route>/index.md
//   2. adds a Content-Signal line to dist/robots.txt (inside the `User-agent: *` group)
//   3. writes dist/llms.txt when the site does not ship one
//   4. (platform "cloudflare") appends _md headers to dist/_headers and writes dist/_routes.json
// Serving the markdown on `Accept: text/markdown` is done by the platform middleware
// (cloudflare-pages.mjs or vercel.mjs).
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'node-html-parser';
import TurndownService from 'turndown';

export const MD_PREFIX = '/_md';

const STRIP_SELECTORS = [
  'script', 'style', 'noscript', 'template', 'svg', 'iframe', 'form', 'button', 'nav',
  'header', 'footer', 'dialog', '[aria-hidden="true"]', '[hidden]', '[data-agent-ready="skip"]',
];

/**
 * @param {object} options
 * @param {'yes'|'no'} options.aiTrain  Content-Signal ai-train value. SOD sites: 'yes'. Client sites: 'no' unless the client agreed.
 * @param {'cloudflare'|'vercel'} options.platform
 * @param {string[]} [options.routesExclude]  Extra Cloudflare Pages _routes.json excludes (static asset folders).
 * @param {string} [options.llmsSummary]  One-paragraph summary for a generated llms.txt.
 * @param {string} [options.sitemap]  Sitemap path, default '/sitemap-index.xml'. Must match the middleware's option.
 */
export default function agentReady(options) {
  const { aiTrain, platform, routesExclude = [], llmsSummary, sitemap = '/sitemap-index.xml' } = options ?? {};
  if (aiTrain !== 'yes' && aiTrain !== 'no') throw new Error('agentReady: aiTrain must be "yes" or "no"');
  if (platform !== 'cloudflare' && platform !== 'vercel') throw new Error('agentReady: platform must be "cloudflare" or "vercel"');
  let site;
  return {
    name: 'astro-agent-ready',
    hooks: {
      'astro:config:done': ({ config }) => { site = config.site; },
      'astro:build:done': async ({ dir, logger }) => {
        const dist = fileURLToPath(dir);
        await checkSitemap(dist, sitemap, logger);
        const pages = await writeMarkdownCopies(dist, site, logger);
        await addContentSignal(dist, aiTrain, logger);
        await writeLlmsTxt(dist, site, pages, llmsSummary, logger);
        if (platform === 'cloudflare') await writeCloudflareFiles(dist, routesExclude, logger);
        logger.info(`agent-ready: ${pages.length} markdown copies, ai-train=${aiTrain}, platform=${platform}`);
      },
    },
  };
}

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_md' || entry.name === '_astro') continue;
      yield* walk(full);
    } else yield full;
  }
}

function routeFor(dist, file) {
  const rel = path.relative(dist, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel.replace(/\.html$/, '/');
}

export function mdPathFor(route) {
  const clean = ('/' + route.replace(/^\/+|\/+$/g, '')).replace(/\/+$/, '');
  return `${MD_PREFIX}${clean === '' ? '' : clean}/index.md`.replace('//', '/');
}

function makeTurndown() {
  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
  td.remove(['script', 'style', 'noscript', 'template', 'svg', 'iframe']);
  td.addRule('img', {
    filter: 'img',
    replacement: (_c, node) => {
      const alt = (node.getAttribute('alt') || '').trim();
      return alt ? `![${alt}](${node.getAttribute('src') || ''})` : '';
    },
  });
  // Card links that wrap headings or paragraphs: keep the content, put the link on its own line.
  td.addRule('blockLink', {
    filter: (node) => node.nodeName === 'A' && node.getAttribute('href')
      && !!node.querySelector('h1,h2,h3,h4,h5,h6,p,div,ul,ol,li,img'),
    replacement: (content, node) => `\n\n${content.trim()}\n\n[Open](${node.getAttribute('href')})\n\n`,
  });
  return td;
}

function absolutize(main, base) {
  if (!base) return;
  for (const el of main.querySelectorAll('a[href], img[src]')) {
    const attr = el.tagName === 'IMG' ? 'src' : 'href';
    const v = el.getAttribute(attr);
    if (!v || /^(#|mailto:|tel:|data:|javascript:)/i.test(v)) continue;
    try { el.setAttribute(attr, new URL(v, base).href); } catch { /* leave as is */ }
  }
}

async function writeMarkdownCopies(dist, site, logger) {
  const td = makeTurndown();
  const pages = [];
  for await (const file of walk(dist)) {
    if (!file.endsWith('.html')) continue;
    const route = routeFor(dist, file);
    if (/^\/(404|500)\/?$/.test(route)) continue;
    const html = await fs.readFile(file, 'utf8');
    const root = parse(html);
    const robots = root.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
    if (/noindex/i.test(robots)) continue;
    if (root.querySelector('meta[http-equiv="refresh"]')) continue; // redirect stubs
    const title = (root.querySelector('title')?.text || '').trim();
    const description = root.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '';
    const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute('href')
      || (site ? new URL(route, site).href : route);
    const main = root.querySelector('main') || root.querySelector('body');
    if (!main) continue;
    for (const sel of STRIP_SELECTORS) main.querySelectorAll(sel).forEach((n) => n.remove());
    absolutize(main, canonical);
    // Elements written back to back (<span>a.</span><span>b</span>) lose their gap in markdown; add one.
    const htmlIn = main.innerHTML.replace(/(<\/[a-z0-9]+>)(?=<[a-z])/gi, '$1 ');
    const body = td.turndown(htmlIn).replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
    if (!body) continue;
    const front = ['---', `title: ${JSON.stringify(title)}`];
    if (description) front.push(`description: ${JSON.stringify(description)}`);
    front.push(`url: ${canonical}`, '---', '');
    const out = path.join(dist, mdPathFor(route).slice(1));
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, front.join('\n') + '\n' + body + '\n');
    pages.push({ route, title, description, canonical });
  }
  if (pages.length === 0) logger.warn('agent-ready: no markdown copies written');
  return pages.sort((a, b) => a.route.localeCompare(b.route));
}

async function addContentSignal(dist, aiTrain, logger) {
  const file = path.join(dist, 'robots.txt');
  let text;
  try { text = await fs.readFile(file, 'utf8'); } catch { logger.warn('agent-ready: no robots.txt in dist; Content-Signal not added'); return; }
  await fs.writeFile(file, withContentSignal(text, aiTrain));
}

/**
 * Put a Content-Signal line in every user-agent group. A crawler with its own group
 * (User-agent: GPTBot) reads only that group, so a line in `User-agent: *` alone never reaches it.
 */
export function withContentSignal(text, aiTrain) {
  const signal = `Content-Signal: search=yes, ai-input=yes, ai-train=${aiTrain}`;
  const isUA = (l) => /^\s*user-agent\s*:/i.test(l);
  const isSignal = (l) => /^\s*content-signal\s*:/i.test(l);
  const lines = text.split('\n');
  const out = [];
  let sawStar = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    out.push(line);
    if (/^\s*user-agent\s*:\s*\*\s*$/i.test(line)) sawStar = true;
    if (!isUA(line) || isUA(lines[i + 1] ?? '')) continue; // insert after the group's last User-agent line
    let j = i + 1, has = false;
    for (; j < lines.length && !isUA(lines[j]); j++) if (isSignal(lines[j])) { has = true; break; }
    if (!has) out.push(signal);
  }
  if (!sawStar) out.push('', 'User-agent: *', signal, 'Allow: /');
  return out.join('\n');
}

async function writeLlmsTxt(dist, site, pages, summary, logger) {
  const file = path.join(dist, 'llms.txt');
  try { await fs.access(file); return; } catch { /* generate */ }
  const home = pages.find((p) => p.route === '/');
  const name = (home?.title || site || 'Site').split(/\s[|–—-]\s/)[0].trim();
  const lines = [`# ${name}`, '', `> ${summary || home?.description || ''}`.trimEnd(), '', '## Pages', ''];
  for (const p of pages) {
    if (p.route.includes('/lp/')) continue;
    lines.push(`- [${p.title || p.route}](${p.canonical})${p.description ? `: ${p.description}` : ''}`);
  }
  await fs.writeFile(file, lines.join('\n') + '\n');
  logger.info('agent-ready: generated llms.txt');
}

async function writeCloudflareFiles(dist, routesExclude, logger) {
  const headersFile = path.join(dist, '_headers');
  let headers = '';
  try { headers = await fs.readFile(headersFile, 'utf8'); } catch { /* new file */ }
  if (!headers.includes(`${MD_PREFIX}/*`)) {
    headers += `\n${MD_PREFIX}/*\n  Content-Type: text/markdown; charset=utf-8\n  X-Robots-Tag: noindex\n`;
    await fs.writeFile(headersFile, headers);
  }
  const routesFile = path.join(dist, '_routes.json');
  let existing = null;
  try { existing = JSON.parse(await fs.readFile(routesFile, 'utf8')); } catch { /* none, write ours */ }
  if (existing) {
    // The site ships its own routes: keep them, only make sure the markdown folder skips the function.
    const exclude = [...new Set([...(existing.exclude || []), `${MD_PREFIX}/*`, ...routesExclude])];
    if (exclude.length > 100) throw new Error('agent-ready: _routes.json would exceed the 100-rule limit');
    await fs.writeFile(routesFile, JSON.stringify({ ...existing, exclude }, null, 2) + '\n');
    logger.info('agent-ready: merged /_md/* into the existing _routes.json');
    return;
  }
  const exclude = [...new Set(['/_astro/*', `${MD_PREFIX}/*`, ...routesExclude])];
  await fs.writeFile(routesFile, JSON.stringify({ version: 1, include: ['/*'], exclude }, null, 2) + '\n');
}

async function checkSitemap(dist, sitemap, logger) {
  try { await fs.access(path.join(dist, sitemap.replace(/^\//, ''))); }
  catch {
    let found = null;
    for (const c of ['sitemap-index.xml', 'sitemap.xml']) { try { await fs.access(path.join(dist, c)); found = c; break; } catch { /* next */ } }
    throw new Error(`agent-ready: sitemap ${sitemap} is not in dist${found ? `; this site has /${found}. Pass sitemap: '/${found}' to agentReady() and to the middleware` : '; the site has no sitemap. Add @astrojs/sitemap first'}`);
  }
}
