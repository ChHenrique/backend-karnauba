import { z } from "zod";
import { CategorySchema } from "../schemas/categorySchema";

export type categoryDTO = z.infer<typeof CategorySchema>