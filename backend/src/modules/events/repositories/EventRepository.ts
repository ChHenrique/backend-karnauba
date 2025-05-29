import { Event } from "../entities/EventEntity";

export interface EventRepository {
    findAll(limit?: number): Promise<Event[]>;
    findUnique(id: string): Promise<Event | null>;
    create(data: Event): Promise<Event>;
    update(id: string, data: Partial<Event>): Promise<Event | null>;
    delete(id: string): Promise<void>;
}