import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const TOPICS = ['ai-workflows', 'cv-screening', 'sourcing', 'open-source'] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    topic: z.enum(TOPICS),
    author: z.string().default('Michal Juhas'),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
