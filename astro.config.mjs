// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://danielhadobas.com',
  integrations: [
    sitemap({
      lastmod: new Date(),
      filter: (page) => !page.includes('/solarsavingsresults') && !page.includes('/og-render'),
    }),
  ],
  trailingSlash: 'never',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
