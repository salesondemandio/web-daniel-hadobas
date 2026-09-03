// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
