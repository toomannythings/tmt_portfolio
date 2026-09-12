import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    category: z.string(),
    year: z.number(),
    role: z.string().optional(),
    video: z.string(),
    poster: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

export const collections = { work };
