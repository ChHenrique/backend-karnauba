import { ServerError } from "../../../shared/errors/serverError";
import { City } from "../entities/city";
import { CityRepository } from "../repositories/CityRepository";

export class CityFindUniqueUseCase {
    constructor(
        private cityRepository: CityRepository
    ) {}

    async execute(id: string): Promise<City> {
        const city = await this.cityRepository.findUnique(id);

        if (!city) throw new ServerError("City not found", 404)

        return city;
    }
}