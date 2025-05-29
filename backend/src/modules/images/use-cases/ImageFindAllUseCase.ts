import { Image } from "../entities/Image";
import { ImageRepository } from "../repositories/ImageRepository";

export class ImageFindAllUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  async execute(modelId: string, modelType: string): Promise<Image[]> {
    const images = await this.imageRepository.findAllImages(modelId, modelType);
    return images;
  }
}
