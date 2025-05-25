import { z } from "zod";

export const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8)
})

export const loginUserSchema = z.object({
    email: z.string(),
    password: z.string().min(8)
})