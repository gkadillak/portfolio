import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const accent = z.enum(['blue', 'cyan', 'coral', 'ink']);

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      n: z.string(),
      title: z.string(),
      year: z.string(),
      accent,
      category: z.string(),
      status: z.enum(['Live', 'In progress', 'Archived']),
      tagline: z.string(),
      tags: z.array(z.string()),
      role: z.string(),
      stack: z.array(z.string()),
      timeline: z.string(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
      summary: z.string(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      cover: image().optional(),
      gallery: z
        .array(z.object({ label: z.string(), src: image().optional() }))
        .default([]),
    }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    n: z.string(),
    kicker: z.string(),
    title: z.string(),
    dek: z.string(),
    lede: z.string(),
    read: z.string(),
    date: z.string(),
    pubDate: z.coerce.date(),
    accent,
  }),
});

export const collections = { work, writing };
