import { eventDTO } from "../dtos/eventDTO";
import { Event } from "../entities/EventEntity";
import { EventRepository } from "../repositories/EventRepository";

export class EventUpdateUseCase {
    constructor(private eventRepository: EventRepository) {}

    async execute(id: string, data: Partial<eventDTO>): Promise<Event | null> {
        const event = await this.eventRepository.findUnique(id);
        if (!event) throw new Error("Event not found");

        const updateEvent = await this.eventRepository.update(id, data);

        if (!updateEvent) throw new Error("Failed to update event");
        
        return updateEvent;
    }
}