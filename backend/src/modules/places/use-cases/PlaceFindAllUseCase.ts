import { ServerError } from "../../../shared/errors/serverError";
import { Place } from "../entities/Place";
import { PlaceRepository } from "../repositories/PlaceRepository";

export class PlaceFindAllUseCase {
  constructor(private placeRepository: PlaceRepository) {}

  async execute(): Promise<Place[]> {
    const places = await this.placeRepository.findAll();
    if (!places || places.length === 0) throw new ServerError("No places found", 404);
  
    return places;
  }
}