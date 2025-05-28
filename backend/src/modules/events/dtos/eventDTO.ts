import { z } from "zod";
import { eventSchema } from "../schemas/eventShema";

export type eventDTO = z.infer<typeof eventSchema>;