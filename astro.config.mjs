import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://calyflow.ai',
  // Clean URLs without trailing slashes: /blog/post, not /blog/post/.
  // build.format 'file' makes Cloudflare Pages 308 the slash variant to the
  // canonical slash-less URL, so there are no duplicate-content URLs.
  trailingSlash: 'never',
  build: { format: 'file' },
  // The Sourcing post was renamed to the Shortlist slug; keep the old URL alive.
  redirects: {
    '/blog/introducing-sourcing': '/blog/introducing-shortlist',
  },
  integrations: [
    mdx(),
    // Keep the unlisted per-system "<system>-enrichment" pages out of the
    // sitemap (they also set noindex). The "ats-crm-enrichment" overview is
    // public (linked in the nav, indexable), so let it through.
    sitemap({
      filter: (page) => {
        const path = page.replace(/\/$/, '');
        if (path.endsWith('/ats-crm-enrichment')) return true;
        return !path.endsWith('-enrichment');
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
