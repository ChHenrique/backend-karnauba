import { ServerError } from "../../../shared/errors/serverError";
import { City } from "../entities/city";
import { CityRepository } from "../repositories/CityRepository";

export class CityFindAllUseCase {
    constructor(private  cityRepository: CityRepository) {}

    async execute(): Promise<City[]> {
        const cities = await this.cityRepository.findAll();

        if (!cities) throw new ServerError("Cities not found", 404);

        return cities;
    }
}