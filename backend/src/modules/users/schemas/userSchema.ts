import { z } from "zod";
import { Role } from "@prisma/client";

export const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters")
});

export const userUpdateSchema = userSchema
  .partial()
  .extend({
    role: z.nativeEnum(Role).optional(),
  });

export const loginUserSchema = z.object({
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters")
});
