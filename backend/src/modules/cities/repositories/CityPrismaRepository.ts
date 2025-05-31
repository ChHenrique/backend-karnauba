import { prisma } from '../../../config/prisma';
import { handlePrismaError } from '../../../shared/errors/prismaErrorHandler';
import { ServerError } from '../../../shared/errors/serverError';
import { City } from '../entities/City';
import { CityRepository } from './CityRepository';
import slugify from 'slugify';

const cityRelations = {
  places: { include: { city: { select: { name: true } } } },
  events: { include: { city: { select: { name: true } } } }
};

export class CityPrismaRepository implements CityRepository {

  async findAll(limit?: number): Promise<City[] | null> {
    const cities = await prisma.city.findMany({
      take: limit,
      orderBy: { name: 'asc' },
      include: cityRelations
    });
    return cities.map(City.fromPrisma);
  }

  async findUnique(id: string): Promise<City | null> {
    const cityData = await prisma.city.findUnique({
      where: { id },
      include: cityRelations
    });
    if (!cityData) return null;
    return City.fromPrisma(cityData);
  }

  async findBySlug(slug: string): Promise<City | null> {
    const cityData = await prisma.city.findUnique({
      where: { slug },
      include: cityRelations
    });
    if (!cityData) return null;
    return City.fromPrisma(cityData);
  }

  async create(city: City): Promise<City> {
    const slug = slugify(`${city.name}-${city.state}`, { lower: true, strict: true });

    try {
      const created = await prisma.city.create({
        data: {
          id: city.id,
          name: city.name,
          state: city.state,
          description: city.description,
          imageUrl: city.imageUrl ?? '',
          adminId: city.adminId,
          color01: city.color01 ?? null,
          color02: city.color02 ?? null,
          slug,
        }
      });

      const completeCity = await prisma.city.findUnique({
        where: { id: created.id },
        include: cityRelations
      });

      return City.fromPrisma(completeCity);
    } catch (error: any) {
      handlePrismaError(error);
    }
  }

  async update(id: string, data: Partial<City>): Promise<City> {
    let slug;

    if (data.name || data.state) {
      const cityFromDb = await prisma.city.findUnique({ where: { id } });
      if (!cityFromDb) throw new ServerError('City not found', 404);

      const name = data.name ?? cityFromDb.name;
      const state = data.state ?? cityFromDb.state;

      slug = slugify(`${name}-${state}`, { lower: true, strict: true });
    }

    const updateData: any = {
      name: data.name,
      state: data.state,
      description: data.description,
      imageUrl: data.imageUrl ?? undefined,
      color01: data.color01 ?? undefined,
      color02: data.color02 ?? undefined,
      slug,
    };

    try {
      await prisma.city.update({
        where: { id },
        data: updateData,
      });
    } catch (error: any) {
      handlePrismaError(error);
    }

    const updatedCity = await prisma.city.findUnique({
      where: { id },
      include: cityRelations
    });

    if (!updatedCity) throw new ServerError('City not found after update', 404);

    return City.fromPrisma(updatedCity);
  }

  async delete(id: string): Promise<void> {
    await prisma.city.delete({ where: { id } });
  }

  async findPlacesAndEventsById(id: string): Promise<Pick<City, 'places' | 'events'> | null> {
    const city = await prisma.city.findUnique({
      where: { id },
      select: cityRelations
    });

    if (!city) return null;

    return {
      places: city.places.map((place: any) => ({ ...place, cityName: place.city.name })),
      events: city.events.map((event: any) => ({ ...event, cityName: event.city.name })),
    };
  }
}
