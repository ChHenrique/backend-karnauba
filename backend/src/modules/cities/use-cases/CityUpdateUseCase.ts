import { ServerError } from "../../../shared/errors/serverError";
import { cityDTO } from "../dtos/cityDTO";
import { City } from "../entities/City";
import { CityRepository } from "../repositories/CityRepository";
import { parseImageInput } from "../../../shared/utils/parseImageInput";

export class CityUpdateUseCase {
    constructor(
        private cityRepository: CityRepository
    ) {}

    async execute(id: string, data: Partial<cityDTO>): Promise<City> {
        const city = await this.cityRepository.findUnique(id);
        
        if (!city) throw new ServerError("City not found", 404);

        // Trata a imagem
        const imageUrl = data.imageUrl !== undefined ? parseImageInput(data.imageUrl) : undefined;

        const updatedCity = await this.cityRepository.update(id, {
            ...data,
            imageUrl, // já tratado
        });

        if (!updatedCity) throw new ServerError("Failed to update city");

        return updatedCity;
    }
}
