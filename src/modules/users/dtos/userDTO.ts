import { z } from "zod";
import { loginUserSchema, userSchema } from "../schemas/userSchema";

export type userDTO = z.infer<typeof userSchema>
export type loginUserDTO = z.infer<typeof loginUserSchema>