
import { ImageCreateUseCase } from "../use-cases/ImageCreateUseCase";
import { ImageFindAllUseCase } from "../use-cases/ImageFindAllUseCase";

import { ImagePrismaRepository } from "../repositories/ImagePrismaRepository";
import { ImageController } from "../controllers/imageControllers";


const imageRepository = new ImagePrismaRepository();


const imageCreateUseCase = new ImageCreateUseCase(imageRepository);
const imageFindAllUseCase = new ImageFindAllUseCase(imageRepository);


export const imageInstance = new ImageController(imageCreateUseCase, imageFindAllUseCase);
