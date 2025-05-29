import { Image } from "../entities/Image";
import { ImageRepository } from "../repositories/ImageRepository";
import { randomUUID } from "crypto";
import { ImageDTO } from "../dtos/imageDTO";

export class ImageCreateUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  async execute({ modelId, modelType, urls }: ImageDTO): Promise<Image[]> {
    const images: Image[] = urls.map((url) => ({
      id: randomUUID(),
      modelId,
      modelType,
      url,
    }));

    const createdImages = await this.imageRepository.createMany(images);

    return createdImages;
  }
}
