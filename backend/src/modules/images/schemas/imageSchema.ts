import { z } from "zod";

export const imageSchema = z.object({
  urls: z.string().array(),
  modelId: z.string(),
  modelType: z.string(),
});
