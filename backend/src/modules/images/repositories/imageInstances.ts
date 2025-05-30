import { ImageCreateUseCase } from "../use-cases/ImageCreateUseCase";
import { ImageFindAllUseCase } from "../use-cases/ImageFindAllUseCase";
import { ImageDeleteUseCase } from "../use-cases/ImageDeleteUseCase";

import { ImagePrismaRepository } from "../repositories/ImagePrismaRepository";
import { ImageController } from "../controllers/imageControllers";
import { LocalUploadProvider } from "../../../shared/providers/uploadProvider/localUploadProvider";

const imageRepository = new ImagePrismaRepository();
const localUploadProvider = new LocalUploadProvider();

const imageCreateUseCase = new ImageCreateUseCase(imageRepository);
const imageFindAllUseCase = new ImageFindAllUseCase(imageRepository);
const imageDeleteUseCase = new ImageDeleteUseCase(imageRepository, localUploadProvider);

export const imageInstance = new ImageController(
  imageCreateUseCase,
  imageFindAllUseCase,
  imageDeleteUseCase
);
