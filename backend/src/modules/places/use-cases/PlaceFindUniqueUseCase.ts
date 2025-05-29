import { ServerError } from "../../../shared/errors/serverError";
import { Place } from "../entities/Place";
import { PlaceRepository } from "../repositories/PlaceRepository";

export class PlaceFindUniqueUseCase {
  constructor(private placeRepository: PlaceRepository) {}

  async execute(placeId: string): Promise<Place | null> {
    if (!placeId) throw new ServerError("Place ID is required");

    const place = await this.placeRepository.findUnique(placeId);
    if (!place) throw new ServerError("Place not found", 404);


    return place;
  }
}