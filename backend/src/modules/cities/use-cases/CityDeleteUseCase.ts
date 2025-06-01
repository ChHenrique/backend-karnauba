import { ServerError } from "../../../shared/errors/serverError";
import { CityRepository } from "../repositories/CityRepository";

export class CityDeleteUseCase {
    constructor(
        private cityRepository: CityRepository,
    ) {}

    async execute(id: string, userId: string): Promise<void> {
        const city = await this.cityRepository.findUnique(id);

        if (!city) throw new ServerError("City not found", 404);

        if (city.adminId !== userId) {
            throw new ServerError("You are not authorized to delete this city", 403);
        }

        const relations = await this.cityRepository.findPlacesAndEventsById(id);

        if (!relations) throw new ServerError("City relations not found", 404);

        const hasPlaces = relations.places && relations.places.length > 0;
        const hasEvents = relations.events && relations.events.length > 0;

        if (hasPlaces || hasEvents) {
            throw new ServerError("Cannot delete city with associated places or events", 400);
        }

        await this.cityRepository.delete(id);
    }
}
