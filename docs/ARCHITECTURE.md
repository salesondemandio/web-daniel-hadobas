# Architecture

## Overview

Static Astro site deployed to Cloudflare Pages. No server-side runtime — fully static output.

## Page Structure

```
/                          → Home (Las Vegas primary)
/solar-las-vegas/          → Las Vegas city page
/solar-henderson-nv/       → Henderson city page
/solar-north-las-vegas/    → North LV city page
/solar-california/         → California hub page
/solar-los-angeles/        → LA city page
/solar-san-diego/          → San Diego city page
/solar-riverside/          → Riverside city page
/blog/                     → Blog index
/blog/[slug]/              → Blog posts (MDX)
/about/                    → Daniel's bio + credentials
/contact/                  → Booking CTA page
```

## SEO Strategy

- City pages own the local pack intent
- Blog owns informational/long-tail queries
- Person schema ties Daniel's identity to every page
- LocalBusiness schema on city pages
- FAQ schema on relevant sections

## Review Integration

- Google reviews embedded via iframe (existing widget on danielhadobas.com)
- 174 reviews / 5.0 stars — surfaced prominently on every page

## Booking Flow

- All CTAs → `/sodsolarsavings` (GHL booking page)
- Phone: (702) 765-4527

## TODO

- [ ] Confirm CF Pages project name
- [ ] Connect danielhadobas.com DNS
- [ ] Set up GitHub repo under salesondemandio org
- [ ] Confirm CA cities Daniel serves
