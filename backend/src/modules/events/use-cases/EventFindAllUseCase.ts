import { EventRepository } from "../repositories/EventRepository";

export class EventFindAllUseCase {
    constructor(private eventRepository: EventRepository) {}

    async execute() {
        const events = await this.eventRepository.findAll();
        if (!events || events.length === 0) throw new Error("No events found");

        return events;
    }
} 