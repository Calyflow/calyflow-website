# calyflow.ai — marketing website

> Calyflow is a set of open-source recruiting agents that run AI workflows on your own
> models, data, and tools.

This repo is the static marketing site for [calyflow.ai](https://calyflow.ai)
(the app lives at app.calyflow.ai). Built with [Astro](https://astro.build)
(SSG) + Tailwind CSS v4, deployed on **Cloudflare Pages**.

Hard rule: **no client-side rendering of content.** Everything SEO- and
LLM-relevant exists in the static HTML.

## Develop

```bash
npm install
npm run dev        # localhost:4321
npm run build      # static build → dist/
npm run preview    # serve dist/ locally
```

The build fetches the GitHub star count once (degrades gracefully offline)
and generates per-page OG images, `sitemap-index.xml`, `rss.xml`, `llms.txt`,
and `llms-full.txt`.

## Common edits

| Task | Where |
|---|---|
| Flip an integration to "Available now" | `src/data/integrations.json` (one-line PR) |
| Edit FAQ (page + JSON-LD + llms-full.txt) | `src/data/faq.ts` |
| Product description / URLs / author bio | `src/data/site.ts` |
| Publish a blog post | add `src/content/blog/<slug>.mdx`, open a PR, check the preview deploy, merge |
| Brand tokens (colors, radii, type scale) | `src/styles/global.css` |

Blog frontmatter (validated at build — the build fails on invalid posts):

```yaml
title: '…'            # ≤70 chars
description: '…'      # ≤160 chars
pubDate: 2026-06-09
updatedDate: 2026-06-10   # optional
topic: 'ai-workflows'     # ai-workflows | cv-screening | sourcing | open-source
author: 'Michal Juhas'    # optional, defaults to Michal
ogImage: '/custom.png'    # optional, defaults to generated /blog/<slug>/og.png
draft: false              # optional
```

## Deploy (Cloudflare Pages)

Git integration, no CI needed:

- **Build command:** `npm run build` · **Output directory:** `dist`
- Production deploys from `main`; every PR gets a preview deploy.
- Custom domain `calyflow.ai`; add a `www` → apex redirect (Cloudflare Bulk
  Redirects or a redirect rule).
- Optional env var `CF_BEACON_TOKEN` enables Cloudflare Web Analytics
  (cookieless; omitted = no analytics script at all).

Reserved future redirects (add in Cloudflare when needed): `/docs`,
`/pricing`, `/changelog`.

## Before launch (placeholders to replace)

- `public/images/michal-juhas.jpg` → founder portrait (blog + homepage quote)
- `public/hero-shortlist.svg` → supplement/replace with real product
  screenshots once the UI ships
- Confirm the LinkedIn URL in `src/data/site.ts`

## License

MIT (this website). The Calyflow platform itself is AGPL-3.0.
