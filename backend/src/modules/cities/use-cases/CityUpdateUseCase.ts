import { ServerError } from "../../../shared/errors/serverError";
import { cityDTO } from "../dtos/CityDTO";
import { City } from "../entities/city";
import { CityRepository } from "../repositories/CityRepository";

export class CityUpdateUseCase {
    constructor(
        private cityRepository: CityRepository
    ) {}

    async execute(id: string, data: Partial<cityDTO>): Promise<City> {
        const city = await this.cityRepository.findUnique(id);
        
        if (!city) throw new ServerError("City not found", 404);
  
        const updatedCity = await this.cityRepository.update(id, data);

        if (!updatedCity) throw new ServerError("Failed to update city")

        return updatedCity;
    }
}