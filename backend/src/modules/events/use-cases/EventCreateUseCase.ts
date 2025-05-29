import { randomUUID } from "crypto";
import { ServerError } from "../../../shared/errors/serverError";
import { eventDTO } from "../dtos/eventDTO";
import { EventRepository } from "../repositories/EventRepository";
import { eventSchema } from "../schemas/eventShema";
import { Event } from "../entities/EventEntity";
import { parseImageInput } from "../../../shared/utils/parseImageInput";

export class EventCreateUseCase {
    constructor(private eventRepository: EventRepository) {}

    async execute(data: eventDTO): Promise<Event> {
        const validation = eventSchema.safeParse(data);

        if (!validation.success) {
            console.log("Erro na validação:", validation.error.format());
            throw new ServerError(
                "Validation Error",
                400,
                validation.error.format()
            );
        }

        const {
            name,
            description,
            imageUrl,
            location,
            cityId,
            startDate,
            endDate,
            startTime,
            endTime
        } = validation.data;

        const parsedImage = parseImageInput(imageUrl) ?? '';

        const event = new Event(
            randomUUID(),
            name,
            description,
            parsedImage,
            location,
            startDate,
            endDate,
            startTime,
            endTime,
            cityId
        );

        await this.eventRepository.create(event);

        return event;
    }
}
