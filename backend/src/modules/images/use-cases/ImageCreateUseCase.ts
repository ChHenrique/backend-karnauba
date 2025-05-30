import { Image } from "../entities/Image";
import { ImageRepository } from "../repositories/ImageRepository";
import { randomUUID } from "crypto";
import { ImageDTO } from "../dtos/imageDTO";
import { ServerError } from "../../../shared/errors/serverError";

const allowedModelTypes = ["CITY", "EVENT", "PLACE"];

export class ImageCreateUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  async execute({ modelId, modelType, urls }: ImageDTO): Promise<Image[]> {
    if (!allowedModelTypes.includes(modelType.toUpperCase())) {
      throw new ServerError(`ModelType '${modelType}' não é válido.`);
    }

    const images: Image[] = urls.map((url) => ({
      id: randomUUID(),
      modelId,
      modelType: modelType.toUpperCase(),
      url,
    }));

    const createdImages = await this.imageRepository.createMany(images);

    return createdImages;
  }
}
