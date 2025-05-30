import { prisma } from '../../../config/prisma';
import { City } from '../entities/City';
import { CityRepository } from './CityRepository';

export class CityPrismaRepository implements CityRepository {
    async findAll(limit?: number): Promise<City[] | null> {
        const cities = await prisma.city.findMany({
            take: limit ?? undefined,
            orderBy: { name: 'asc' },
            include: {
                places: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                },
                events: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                }
            }
        });

        return cities.map(City.fromPrisma);
    }

    async findUnique(id: string): Promise<City | null> {
        const cityData = await prisma.city.findUnique({
            where: { id },
            include: {
                places: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                },
                events: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                }
            }
        });

        if (!cityData) return null;

        return City.fromPrisma(cityData);
    }

    async create(city: City): Promise<City> {
        const created = await prisma.city.create({
            data: {
                name: city.name,
                state: city.state,
                description: city.description,
                imageUrl: city.imageUrl ?? '',
                adminId: city.adminId,
                id: city.id,
                color01: city.color01 ?? null,
                color02: city.color02 ?? null
            }
        });

        const completeCity = await prisma.city.findUnique({
            where: { id: created.id },
            include: {
                places: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                },
                events: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                }
            }
        });

        return City.fromPrisma(completeCity);
    }

    async update(id: string, data: Partial<City>): Promise<City> {
        await prisma.city.update({
            where: { id },
            data: {
                name: data.name,
                state: data.state,
                description: data.description,
                imageUrl: data.imageUrl ?? undefined,
                color01: data.color01 ?? undefined,
                color02: data.color02 ?? undefined
            }
        });

        const updatedCity = await prisma.city.findUnique({
            where: { id },
            include: {
                places: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                },
                events: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                }
            }
        });

        if (!updatedCity) throw new Error('City not found after update');

        return City.fromPrisma(updatedCity);
    }

    async delete(id: string): Promise<void> {
        await prisma.city.delete({
            where: { id }
        });
    }

    async findPlacesAndEventsById(id: string): Promise<Pick<City, 'places' | 'events'> | null> {
        const city = await prisma.city.findUnique({
            where: { id },
            select: {
                places: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                },
                events: {
                    include: {
                        city: {
                            select: { name: true }
                        }
                    }
                }
            }
        });

        if (!city) return null;

        return {
            places: city.places.map((place: any) => ({
                ...place,
                cityName: place.city.name
            })),
            events: city.events.map((event: any) => ({
                ...event,
                cityName: event.city.name
            }))
        };
    }
}
