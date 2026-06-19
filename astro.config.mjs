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
  integrations: [
    mdx(),
    // Keep unlisted client landing pages out of the sitemap (they also set
    // noindex): the per-system "<system>-enrichment" pages and the
    // "ats-crm-enrichment" overview all end in "-enrichment".
    sitemap({
      filter: (page) => !page.replace(/\/$/, '').endsWith('-enrichment'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
