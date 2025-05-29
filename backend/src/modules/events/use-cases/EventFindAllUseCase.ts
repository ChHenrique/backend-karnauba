import { EventRepository } from "../repositories/EventRepository";

export class EventFindAllUseCase {
    constructor(private eventRepository: EventRepository) {}

    async execute(limit?: number) {
        const events = await this.eventRepository.findAll(limit);
        if (!events || events.length === 0) throw new Error("No events found");

        return events;
    }
} 