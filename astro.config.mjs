// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import agentReady from './agent-ready/integration.mjs';

const redirectedPaths = new Set([
  '/blog/best-solar-company-las-vegas',
  '/blog/best-solar-companies-las-vegas',
  '/blog/solar-cost-las-vegas-2025',
]);

export default defineConfig({
  site: 'https://danielhadobas.com',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !page.includes('/solarsavingsresults')
          && !page.includes('/og-render')
          && !redirectedPaths.has(pathname);
      },
    }),
    // AI-agent readiness: markdown copies, Content-Signal, Pages _routes.json. Client site, so ai-train=no.
    agentReady({
      aiTrain: 'no',
      platform: 'cloudflare',
      routesExclude: [
        '/images/*',
        '/favicon.svg',
        '/og-v2.jpg',
        '/robots.txt',
        '/llms.txt',
        '/ecf92cff56785e1d64d451c2f8b456e3.txt',
        '/sitemap-index.xml',
        '/sitemap-0.xml',
      ],
    }),
  ],
  trailingSlash: 'never',
  output: 'static',
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
