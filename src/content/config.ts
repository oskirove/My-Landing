import { defineCollection, z } from "astro:content";

const proyects = defineCollection({

    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        year: z.string(),
    })

})

export const collections = { proyects }