import { prisma } from "../../../config/prisma";
import { Event } from "../entities/EventEntity";
import { EventRepository } from "./EventRepository";

export class EventPrismaRepository implements EventRepository {
    async findAll(): Promise<Event[]> {
        const events = await prisma.event.findMany({
            include: {
                city: true
            }
        });

        return events;
    }

    async findUnique(id: string): Promise<Event | null> {
        const event = await prisma.event.findUnique({
            where: { id: id },
            include: {
                city: true
            }
        });

        return event;
    }

    async create(data: Event): Promise<Event> {
        const event = await prisma.event.create({
            data: {
                name: data.name,
                description: data.description,
                imageUrl: data.imageUrl ?? '',
                location: data.location,
                cityId: data.cityId,
                id: data.id,
                startDate: data.startDate,
                endDate: data.endDate,
            
            }
        });

        return event;
    }

    async update(id: string, data: Partial<Event>): Promise<Event | null> {
        const event = await prisma.event.update({
            where: { id: id },
            data: {
                name: data.name,
                description: data.description,
                imageUrl: data.imageUrl,
                location: data.location,
                startDate: data.startDate,
                endDate: data.endDate,
            }
        });

        return event;
    }

    async delete(id: string): Promise<void> {
        await prisma.event.delete({
            where: { id: id }
        });
    }
}