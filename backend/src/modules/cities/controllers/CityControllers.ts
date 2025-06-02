import { CityCreateUseCase } from "../use-cases/CityCreateUseCase";
import { CityDeleteUseCase } from "../use-cases/CityDeleteUseCase";
import { CityFindUniqueUseCase } from "../use-cases/CityFindUniqueUseCase";
import { CityUpdateUseCase } from "../use-cases/CityUpdateUseCase";
import { FastifyReply, FastifyRequest } from "fastify";


import { handleMultipart } from "../../../shared/middlewares/multipart";
import { CityFindAllUseCase } from "../use-cases/CityFindAllUseCase";
import { cityDTO } from "../dtos/cityDTO";
import { CityFindPlacesEventsByIdUseCase } from "../use-cases/CityFindPlacesEventsByIdUseCase";
import { CityFindBySlugUseCase } from "../use-cases/CityFindBySlugUseCase";

export class CityControllers {
  constructor(
    private findUniqueUseCase: CityFindUniqueUseCase,
    private findAllUseCase: CityFindAllUseCase,
    private findPlacesEventsUseCase: CityFindPlacesEventsByIdUseCase,
    private createUseCase: CityCreateUseCase,
    private updateUseCase: CityUpdateUseCase,
    private deleteUseCase: CityDeleteUseCase,
     private findBySlugUseCase: CityFindBySlugUseCase,
  ) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const cityData = (await handleMultipart(req, "cities")) as cityDTO;
    const city = await this.createUseCase.execute(cityData);
    reply.status(201).send({ message: "City created successfully", ...city });
  }

async update(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: string };
  const cityData = (await handleMultipart(req, "cities")) as cityDTO;

  const updatedCity = await this.updateUseCase.execute(id, cityData);

  reply.send({ 
    message: "City updated successfully", 
    ...updatedCity 
  });
}


  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string };

    await this.deleteUseCase.execute(id);
    reply.send({ message: "City deleted" });
  }

  async findUnique(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string };
    const city = await this.findUniqueUseCase.execute(id);
    reply.send(city);
  }

    async findBySlug(req: FastifyRequest, reply: FastifyReply) {
    const { slug } = req.params as { slug: string };
    const city = await this.findBySlugUseCase.execute(slug);
    reply.send(city);
  }

  async findAll(req: FastifyRequest, reply: FastifyReply) {
    const { limit } = req.query as { limit?: string };

    const parsedLimit = limit ? Number(limit) : undefined;

    const cities = await this.findAllUseCase.execute(parsedLimit);

    reply.send(cities);
  }

  async findPlacesEventById(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string };

    const placesEvents = await this.findPlacesEventsUseCase.execute(id);

    reply.send(placesEvents);
  }
}
