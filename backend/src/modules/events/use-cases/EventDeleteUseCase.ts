import { EventRepository } from "../repositories/EventRepository";

export class EventDeleteUseCase {
    constructor(private eventRepository: EventRepository){}

    async execute(id: string): Promise<void> {
        const event = await this.eventRepository.findUnique(id);
        if (!event) throw new Error("Event not found");

        await this.eventRepository.delete(id);
    }
}