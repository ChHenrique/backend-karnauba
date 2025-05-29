import { ServerError } from "../../../shared/errors/serverError";
import { placeDTO } from "../dtos/placeDTO";
import { PlaceRepository } from "../repositories/PlaceRepository";
import { parseImageInput } from "../../../shared/utils/parseImageInput";

export class PlaceUpdateUseCase {
  constructor(private placeRepository: PlaceRepository) { }

  async execute(id: string, data: Partial<placeDTO>) {
    const place = await this.placeRepository.findUnique(id);

    if (!place) throw new ServerError("Place not found", 404);

    if (data.imageUrl) {
      const parsed = parseImageInput(data.imageUrl);
      data.imageUrl = parsed ?? undefined;
    }


    const updatedPlace = await this.placeRepository.update(id, data);

    return updatedPlace;
  }
}
