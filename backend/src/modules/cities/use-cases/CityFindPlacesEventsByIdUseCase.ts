import { ServerError } from "../../../shared/errors/serverError";
import { CityRepository } from "../repositories/CityRepository";

export class CityFindPlacesEventsByIdUseCase {
    constructor(private cityRepository: CityRepository){}

    async execute(id: string) {
    const cityData = await this.cityRepository.findPlacesAndEventsById(id);

    if (!cityData) throw new ServerError('Cidade não encontrada.', 404);

    return cityData;
}
}