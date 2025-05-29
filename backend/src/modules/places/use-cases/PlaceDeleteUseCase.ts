import { PlaceRepository } from "../repositories/PlaceRepository";

export class PlaceDeleteUseCase {
  constructor(private placeRepository: PlaceRepository) {}

  async execute(placeId: string): Promise<void> {
    if (!placeId) {
      throw new Error("Place ID is required");
    }

    const placeExists = await this.placeRepository.findUnique(placeId);
    if (!placeExists) {
      throw new Error("Place not found");
    }

    await this.placeRepository.delete(placeId);
  }
}