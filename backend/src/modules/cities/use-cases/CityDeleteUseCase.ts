import { ServerError } from "../../../shared/errors/serverError";
import { CityRepository } from "../repositories/cityRepository";


export class CityDeleteUseCase {
    constructor(
        private cityRepository: CityRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const city = await this.cityRepository.findUnique(id);

        if (!city) throw new ServerError("City not found", 404);

        await this.cityRepository.delete(id);
    }
}