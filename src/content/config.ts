// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { blogSchema, projectSchema } from "../schemas";

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

const project = defineCollection({
  type: "content",
  schema: projectSchema,
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { blog, project };
