# CLAUDE.md — web-daniel-hadobas

**Project:** Daniel Hadobas Solar — Personal brand SEO site
**Description:** Multi-location Astro site targeting residential solar leads in Las Vegas NV and California
**Target User:** Homeowners in NV + CA searching for solar installation
**Stack:** Astro 4, Tailwind CSS, TypeScript, Cloudflare Pages
**Repo:** salesondemandio/web-daniel-hadobas (TBD)
**Deploy:** CF Pages project `web-daniel-hadobas` → danielhadobas.com

---

## Folder Structure

```
src/
  pages/           # Astro pages — index, city pages, blog
  components/      # Reusable Astro/UI components
  layouts/         # Base layout, SEO layout
  content/         # Blog MDX files
  data/            # City data, FAQs, testimonials JSON
  styles/          # Global CSS
public/
  images/          # Photos of Daniel, installs, logos
docs/              # Architecture, decisions, setup
spec/              # Plan phases
tests/             # Smoke tests
```

---

## Key Commands

```bash
npm run dev        # Start dev server (localhost:4321)
npm run build      # Build to dist/
npm run preview    # Preview production build
npm run deploy     # wrangler pages deploy dist --branch=main
```

---

## Coding Conventions

- ES modules, TypeScript strict mode
- 2-space indentation
- Component files: PascalCase (Hero.astro, CityPage.astro)
- Page files: kebab-case (solar-las-vegas.astro)
- No inline styles — Tailwind only
- Every page needs: title, description, canonical, LocalBusiness schema

---

## SEO Rules

- Every city page targets one primary keyword + 3 supporting
- H1 must contain city name + "solar"
- LocalBusiness + Person schema on every page
- Canonical = apex domain (no www)
- Sitemap auto-generated via @astrojs/sitemap

---

## Always check /spec/plan.md before starting a new phase
