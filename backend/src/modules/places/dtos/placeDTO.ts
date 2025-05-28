import { placeSchema } from "../schemas/placeSchema";
import { z } from 'zod'

export type placeDTO = z.infer<typeof placeSchema>