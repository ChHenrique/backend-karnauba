import { z } from "zod";
import { forgotPasswordSchema, resetPasswordSchema } from "../schemas/passwordResetSchema";


export type forgotPasswordDTO = z.infer<typeof forgotPasswordSchema>
export type resetPasswordDTO = z.infer<typeof resetPasswordSchema>