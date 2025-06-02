import { FastifyReply, FastifyRequest } from "fastify";
import { PlaceCreateUseCase } from "../use-cases/PlaceCreateUseCase";
import { PlaceDeleteUseCase } from "../use-cases/PlaceDeleteUseCase";
import { PlaceFindAllUseCase } from "../use-cases/PlaceFindAllUseCase";
import { PlaceFindUniqueUseCase } from "../use-cases/PlaceFindUniqueUseCase";
import { PlaceUpdateUseCase } from "../use-cases/PlaceUpdateUseCase";
import { placeDTO } from "../dtos/placeDTO";
import { handleMultipart } from "../../../shared/middlewares/multipart";

export class PlaceControllers {
    constructor(
        private createUseCase: PlaceCreateUseCase,
        private findUniqueUseCase: PlaceFindUniqueUseCase,
        private findAllUseCase: PlaceFindAllUseCase,
        private updateUseCase: PlaceUpdateUseCase,
        private deleteUseCase: PlaceDeleteUseCase,
    ) { }

    async create(req: FastifyRequest, reply: FastifyReply) {
        const placeData = await handleMultipart(req, "places") as placeDTO;

        const place = await this.createUseCase.execute(placeData);
        reply.status(201).send({ message: "Place created successfully", ...place });
    }

    async update(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };

        const placeData = await handleMultipart(req, "places") as Partial<placeDTO>;
        const updatedPlace = await this.updateUseCase.execute(id, placeData);
        reply.send({ message: "Place updated successfully", ...updatedPlace });
    }

    async delete(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };

        await this.deleteUseCase.execute(id);
        reply.send({ message: "Place deleted successfully" });
    }

    async findUnique(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const place = await this.findUniqueUseCase.execute(id);
        reply.send(place);
    }

    async findAll(req: FastifyRequest, reply: FastifyReply) {
        const { limit } = req.query as { limit?: string };

        const parsedLimit = limit ? Number(limit) : undefined;

        const places = await this.findAllUseCase.execute(parsedLimit);

        reply.send(places);
    }
}