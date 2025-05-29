import { z } from "zod";
import { imageSchema } from "../schemas/imageSchema";

export type ImageDTO = z.infer<typeof imageSchema>;