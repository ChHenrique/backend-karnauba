import { Place } from "@prisma/client"
import { prisma } from "../../../config/prisma"

export class PlacePrismaRepository implements PlacePrismaRepository {
    async findAll(limit?: number): Promise<Place[]> {
        const places = await prisma.place.findMany({
            take: limit,
            orderBy: {
                name: 'asc',
            },
        })

        return places
    }

    async findUnique(id: string): Promise<Place | null> {
        const place = await prisma.place.findUnique({
            where: { id: id }
        })

        return place
    }


    async create(place: Place): Promise<Place> {
        const data = await prisma.place.create({
            data: {
                id: place.id,
                name: place.name,
                description: place.description,
                imageUrl: place.imageUrl,
                address: place.address,
                latitude: place.latitude,
                longitude: place.longitude,
                category: place.category,
                instagram: place.instagram,
                whatsapp: place.whatsapp,
                city: {
                    connect: { id: place.cityId }
                }

            }
        })

        return data
    }

    async update(id: string, data: Partial<Place>): Promise<Place> {
        const updated = await prisma.place.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description,
                imageUrl: data.imageUrl,
                address: data.address,
                latitude: data.latitude,
                longitude: data.longitude,
                category: data.category,
                instagram: data.instagram,
                whatsapp: data.whatsapp,
                city: data.cityId ? { connect: { id: data.cityId } } : undefined,
            }
        });

        return updated;
    }


    async delete(id: string): Promise<void> {
        await prisma.place.delete({
            where: { id: id }
        })
    }
}