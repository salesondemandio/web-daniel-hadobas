# Daniel Hadobas Solar

Personal brand SEO site for Daniel Hadobas — licensed solar agent serving Las Vegas NV and California.

Built to rank for local solar keywords and convert organic traffic into consultation bookings.

---

## Quick Start

Requires Node.js 22.12.0 or newer.

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

GitHub Actions runs `npm ci` and `npm run build` on pushes to `main` and pull requests targeting `main`.

## Deploy

```bash
npm run deploy
```

This runs the canonical command from `package.json`:

```bash
astro build && wrangler pages deploy dist --branch=main --project-name=web-daniel-hadobas
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
