import { EventRepository } from "../repositories/EventRepository";

export class EventFindUniqueUseCase {
    constructor(private eventRepository: EventRepository){}

    async execute(id: string) {
        const event = await this.eventRepository.findUnique(id);
        if (!event) throw new Error("Event not found");

        return event;
    }
}