import { ServerError } from "../../../shared/errors/serverError";
import { City } from "../entities/City";
import { CityRepository } from "../repositories/CityRepository";

export class CityFindAllUseCase {
    constructor(private cityRepository: CityRepository) {}

    async execute(limit?: number): Promise<City[]> {
        const cities = await this.cityRepository.findAll(limit);

        if (!cities || cities.length === 0) {
            throw new ServerError("Cities not found", 404);
        }

        return cities;
    }
}
