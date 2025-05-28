import { z } from 'zod';

export const placeSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string().min(1),
  imageUrl: z.string().url().optional(), 
  address: z.string().min(1),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  color01: z.string().optional(),
  color02: z.string().optional(),
   category: z.enum(["RESTAURANTE"]), 
  instagram: z.string().url().optional(),
  whatsapp: z.string().optional(),
  cityId: z.string().min(1),
});
