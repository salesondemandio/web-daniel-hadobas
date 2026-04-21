# Decision Log

| Date | Decision | Reasoning | Alternatives Considered |
|------|----------|-----------|------------------------|
| 2026-04-21 | Astro 4 over Next.js | Static site, no need for SSR, faster builds, better for CF Pages | Next.js (overkill), plain HTML (no component reuse) |
| 2026-04-21 | CF Pages over Vercel | Consistent with all other SOD client sites, zero cold starts on free tier | Vercel (works but not our default stack) |
| 2026-04-21 | Personal brand domain (danielhadobas.com) | Daniel is the product — personal brand outranks generic solar company names for agent SEO | danielhadobassolar.com (doesn't exist, harder to brand) |
| 2026-04-21 | Multi-city page architecture | Individual city pages rank independently vs. one page trying to serve all markets | Single page with sections (can't rank for multiple cities) |
