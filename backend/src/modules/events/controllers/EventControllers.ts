import { FastifyRequest, FastifyReply } from "fastify";
import { handleMultipart } from "../../../shared/middlewares/multipart";
import { eventDTO } from "../dtos/eventDTO";

import { EventCreateUseCase } from "../use-cases/EventCreateUseCase";
import { EventUpdateUseCase } from "../use-cases/EventUpdateUseCase";
import { EventDeleteUseCase } from "../use-cases/EventDeleteUseCase";
import { EventFindUniqueUseCase } from "../use-cases/EventFindUniqueUseCase";
import { EventFindAllUseCase } from "../use-cases/EventFindAllUseCase";

export class EventController {
    constructor(
        private findUniqueUseCase: EventFindUniqueUseCase,
        private findAllUseCase: EventFindAllUseCase,
        private createUseCase: EventCreateUseCase,
        private updateUseCase: EventUpdateUseCase,
        private deleteUseCase: EventDeleteUseCase
    ) {}

    async create(req: FastifyRequest, reply: FastifyReply) {
        const eventData = await handleMultipart(req, "events") as eventDTO;
        const event = await this.createUseCase.execute(eventData);
        reply.status(201).send({ message: "Event created successfully", ...event });
    }

    async update(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const eventData = await handleMultipart(req, "events") as Partial<eventDTO>;
        const updatedEvent = await this.updateUseCase.execute(id, eventData);
        reply.send({ message: "Event updated successfully", ...updatedEvent });
    }

    async delete(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        await this.deleteUseCase.execute(id);
        reply.send({ message: "Event deleted successfully" });
    }

    async findUnique(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const event = await this.findUniqueUseCase.execute(id);
        reply.send(event);
    }

    async findAll(req: FastifyRequest, reply: FastifyReply) {
        const events = await this.findAllUseCase.execute();
        reply.send(events);
    }
}
