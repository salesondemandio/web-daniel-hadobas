# Dev Environment Setup

## Prerequisites

- Node.js 18+
- npm 9+
- Wrangler CLI (`npm install -g wrangler`)
- Cloudflare account access (charles@salesondemand.io)

## First-Time Setup

```bash
cd C:\dev\sites\web-daniel-hadobas
npm install
```

## Environment Variables

No runtime env vars needed — fully static site.

Build-time vars (if needed for API calls during build):
```
# .env
# None required for MVP
```

## Dev Server

```bash
npm run dev
# Opens at http://localhost:4321
```

## Deploy to CF Pages

```bash
npm run build
wrangler pages deploy dist --branch=main --project-name=web-daniel-hadobas
```

## Domain

- Production: danielhadobas.com
- Preview: web-daniel-hadobas.pages.dev
