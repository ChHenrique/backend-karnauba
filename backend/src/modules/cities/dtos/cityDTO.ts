import { z } from "zod";
import { CitySchema } from "../schemas/citySchema";

export type cityDTO = z.infer<typeof CitySchema>;