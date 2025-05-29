import { Event } from "../entities/EventEntity";
import { EventRepository } from "../repositories/EventRepository";
import { parseImageInput } from "../../../shared/utils/parseImageInput";
import { ServerError } from "../../../shared/errors/serverError";
import { eventDTO } from "../dtos/eventDTO";
import { eventUpdateSchema } from "../schemas/eventUpdateSchema";

export class EventUpdateUseCase {
    constructor(private eventRepository: EventRepository) {}

    async execute(id: string, data: Partial<eventDTO>): Promise<Event> {
        const event = await this.eventRepository.findUnique(id);

        if (!event) {
            throw new ServerError("Event not found", 404);
        }

        const validation = eventUpdateSchema.safeParse(data);

        if (!validation.success) {
            console.log("Erro na validação:", validation.error.format());
            throw new ServerError(
                "Validation Error",
                400,
                validation.error.format()
            );
        }

        const validData = validation.data;

        const updatedEvent = new Event(
            event.id,
            validData.name ?? event.name,
            validData.description ?? event.description,
            parseImageInput(validData.imageUrl ?? event.imageUrl) ?? '',
            validData.location ?? event.location,
            validData.startDate ?? event.startDate,
            validData.endDate ?? event.endDate,
            validData.startTime ?? event.startTime,
            validData.endTime ?? event.endTime,
            validData.cityId ?? event.cityId
        );

        await this.eventRepository.update(id, updatedEvent);

        return updatedEvent;
    }
}
