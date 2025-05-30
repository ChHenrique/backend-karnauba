import { FastifyReply, FastifyRequest } from "fastify";

import { ImageCreateUseCase } from "../use-cases/ImageCreateUseCase";
import { ImageFindAllUseCase } from "../use-cases/ImageFindAllUseCase";
import { ImageDeleteUseCase } from "../use-cases/ImageDeleteUseCase";
import { handleMultipart } from "../../../shared/middlewares/multipart";

export class ImageController {
  constructor(
    private readonly createUseCase: ImageCreateUseCase,
    private readonly findAllUseCase: ImageFindAllUseCase,
    private readonly deleteUseCase: ImageDeleteUseCase
  ) {}

  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = await handleMultipart(request, "images");

    const { modelId, modelType } = data;
    const imageUrls = data.images as string[] | undefined;

    if (!modelId || !modelType) {
      return reply.status(400).send({
        message: "Parâmetros 'modelId' e 'modelType' são obrigatórios no body.",
      });
    }

    if (!imageUrls || imageUrls.length === 0) {
      return reply.status(400).send({ message: "Nenhuma imagem enviada." });
    }

    const images = await this.createUseCase.execute({
      modelId,
      modelType,
      urls: imageUrls,
    });

    return reply.status(201).send({ message: "Imagens criadas com sucesso", images });
  }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    const { modelId, modelType } = request.query as { modelId: string; modelType: string };

    if (!modelId || !modelType) {
      return reply.status(400).send({
        message: "Parâmetros 'modelId' e 'modelType' são obrigatórios.",
      });
    }

    const images = await this.findAllUseCase.execute(modelId, modelType);

    if (!images || images.length === 0) {
      return reply.status(404).send({ message: "Nenhuma imagem encontrada." });
    }

    return reply.status(200).send(images);
  }

async delete(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };

  if (!id) {
    return reply.status(400).send({ message: "ID da imagem é obrigatório." });
  }

  // Só chama o use-case, deixa o erro propagar
  await this.deleteUseCase.execute(id);

  return reply.status(204).send();
}

}
