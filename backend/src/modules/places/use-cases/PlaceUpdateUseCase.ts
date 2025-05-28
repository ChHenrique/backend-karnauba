import { ServerError } from "../../../shared/errors/serverError";
import { placeDTO } from "../dtos/placeDTO";
import { PlaceRepository } from "../repositories/PlaceRepository";

export class PlaceUpdateUseCase {
  constructor(private placeRepository: PlaceRepository) {}

  async execute(id: string, data: Partial<placeDTO>) {
    const place = await this.placeRepository.findUnique(id);

    if (!place) throw new ServerError("Place not found", 404);

    const updatedCity = this.placeRepository.update(id, data)

    return updatedCity
  }
}
