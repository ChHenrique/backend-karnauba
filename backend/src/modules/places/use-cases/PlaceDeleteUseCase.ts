import { ServerError } from "../../../shared/errors/serverError";
import { PlaceRepository } from "../repositories/PlaceRepository";
import { CityRepository } from "../../cities/repositories/CityRepository";

export class PlaceDeleteUseCase {
  constructor(
    private placeRepository: PlaceRepository,
    private cityRepository: CityRepository
  ) {}

  async execute(placeId: string): Promise<void> {
    if (!placeId) {
      throw new ServerError("Place ID is required", 400);
    }

    const place = await this.placeRepository.findUnique(placeId);
    if (!place) {
      throw new ServerError("Place not found", 404);
    }

    const city = await this.cityRepository.findUnique(place.cityId);
    if (!city) {
      throw new ServerError("City not found", 404);
    }

    await this.placeRepository.delete(placeId);
  }
}
