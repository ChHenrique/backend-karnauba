import { z } from "zod";

export const CitySchema = z.object({
    name: z.string(),
    state: z.string(),
    description: z.string().optional(),
    imageUrl: z.string().optional()
})

