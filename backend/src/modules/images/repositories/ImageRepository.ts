import { Image } from "../entities/Image";

export interface ImageRepository {
  createMany(images: Image[]): Promise<Image[]>;
  findAllImages(modelId: string, modelType: string): Promise<Image[]>;
  findById(id: string): Promise<Image | null>;
  deleteById(id: string): Promise<void>; 
}
