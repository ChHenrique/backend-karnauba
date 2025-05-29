import { prisma } from "../../../config/prisma"
import { City } from "../entities/city"
import { CityRepository } from "./CityRepository"

export class CityPrismaRepository implements CityRepository {
    async findAll(): Promise<City[] | null> {
        const cities = await prisma.city.findMany({
            include: { 
                places: true,
                events: true
            }
        })

        return cities
    }

    async findUnique(id: string): Promise<City | null> {
        const city = await prisma.city.findUnique({
            where: { id: id },
            include: { 
                places: true,
                events: true
            }
        })

        return city
    }

    async create(city: City): Promise<City> {
        const data = await prisma.city.create({
            data: {
                name: city.name,
                state: city.state,
                description: city.description,
                imageUrl: city.imageUrl ?? '',
                adminId: city.adminId,
                id: city.id
            }
        })

        return data
    }

    async update(id: string, data: Partial<City>): Promise<City> {
        const city = await prisma.city.update({
            where: { id: id },

            data: {
                name: data.name,
                state: data.state,
                description: data.description,
                imageUrl: data.imageUrl
            }
        })

        return city
    }
    async delete(id: string): Promise<void> {
        await prisma.city.delete({
            where: { id: id }
        })
    }

}