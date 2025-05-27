import { z } from "zod";

export const AdminLogin = {
    email: z.string().email(),
    password: z.string().min(10).max(64)
}

