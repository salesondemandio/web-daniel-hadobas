# Daniel Hadobas Solar

Personal brand SEO site for Daniel Hadobas — licensed solar agent serving Las Vegas NV and California.

Built to rank for local solar keywords and convert organic traffic into consultation bookings.

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## Deploy

```bash
npm run build
wrangler pages deploy dist --branch=main
```

---

## Stack

- [Astro 6.4.8](https://astro.build) — static site generator
- [Tailwind CSS 4.2.3](https://tailwindcss.com) with `@tailwindcss/vite` 4.2.3 — styling
- Vite 7.3.6 (single resolved version via the `^7.3.2` package override) with vitefu 1.1.3
- TypeScript — strict mode
- Cloudflare Pages — hosting

---

## Folder Structure

```
src/pages/       # City pages, home, blog
src/components/  # Hero, CTA, Reviews, FAQ, Schema
src/layouts/     # BaseLayout with SEO head
src/content/     # Blog MDX
src/data/        # Cities, FAQs, testimonials
public/          # Images, favicon
docs/            # Architecture, decisions, setup
spec/            # Build plan
```

---

## Target Markets

- Las Vegas, NV + Henderson, North Las Vegas, Summerlin
- Los Angeles, San Diego, Riverside, Sacramento (CA)

---

*Built with Claude Code + Sales On Demand*
