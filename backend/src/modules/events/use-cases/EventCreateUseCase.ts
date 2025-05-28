import { randomUUID } from "crypto";
import { ServerError } from "../../../shared/errors/serverError";
import { eventDTO } from "../dtos/eventDTO";
import { EventRepository } from "../repositories/EventRepository";
import { eventSchema } from "../schemas/eventShema";
import { Event } from "../entities/EventEntity";

export class EventCreateUseCase {
    constructor(private eventRepository: EventRepository){}

    async execute(data: eventDTO): Promise<Event>{
        const parsedData = eventSchema.safeParse(data)
        if (!parsedData.success) throw new ServerError('Validation Error')

        const id = randomUUID()
        const { name, description, imageUrl, location, cityId, startDate, endDate } = parsedData.data!

        const event = new Event(id, name, description, imageUrl ?? '', location, startDate, endDate, cityId)
        await this.eventRepository.create(event)

        return event;
    }
}