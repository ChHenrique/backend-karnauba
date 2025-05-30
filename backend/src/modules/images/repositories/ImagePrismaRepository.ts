import { ImageRepository } from "./ImageRepository";
import { Image } from "../entities/Image";
import { prisma } from "../../../config/prisma";

export class ImagePrismaRepository implements ImageRepository {
  async createMany(images: Image[]): Promise<Image[]> {
    await prisma.image.createMany({
      data: images,
      skipDuplicates: true,
    });

    const createdImages = await prisma.image.findMany({
      where: {
        id: { in: images.map((img) => img.id) },
      },
    });

    return createdImages;
  }

  async findAllImages(modelId: string, modelType: string): Promise<Image[]> {
    const images = await prisma.image.findMany({
      where: {
        modelId,
        modelType,
      },
    });

    return images;
  }

  async findById(id: string): Promise<Image | null> {
    const image = await prisma.image.findUnique({
      where: { id }
    });
    
    return image;
  }

    async deleteById(id: string): Promise<void> {
    await prisma.image.delete({
      where: { id },
    });
  }
}
