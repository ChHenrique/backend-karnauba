import path from "path";
import { ImageRepository } from "../repositories/ImageRepository";
import { LocalUploadProvider } from "../../../shared/providers/uploadProvider/localUploadProvider";
import { ServerError } from "../../../shared/errors/serverError";


export class ImageDeleteUseCase {
  constructor(
    private readonly imageRepository: ImageRepository,
    private readonly uploadProvider: LocalUploadProvider
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new ServerError("Image ID is required");
    }


    const image = await this.imageRepository.findById(id);

    if (!image) {
      throw new ServerError("Image not found");
    }


    const relativeUrl = image.url; 

    const filename = path.basename(relativeUrl);


    await this.uploadProvider.delete(filename, "images");

    await this.imageRepository.deleteById(id);
  }
}
