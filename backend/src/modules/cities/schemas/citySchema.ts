import { z } from "zod";

export const CitySchema = z.object({
    name: z.string().min(1, "Name is required"),
    state: z.string().min(1, "State is required"),
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    color01: z.string().optional(),
    color02: z.string().optional(),
    adminId: z.string().min(1, "Admin ID is required")
});
