import { EventController } from "../controllers/EventControllers";
import { EventPrismaRepository } from "./EventPrismaRepository";
import { EventCreateUseCase } from "../use-cases/EventCreateUseCase";
import { EventUpdateUseCase } from "../use-cases/EventUpdateUseCase";
import { EventDeleteUseCase } from "../use-cases/EventDeleteUseCase";
import { EventFindUniqueUseCase } from "../use-cases/EventFindUniqueUseCase";
import { EventFindAllUseCase } from "../use-cases/EventFindAllUseCase";



const eventPrismaRepository = new EventPrismaRepository();

const eventCreateUseCase = new EventCreateUseCase(eventPrismaRepository);
const eventUpdateUseCase = new EventUpdateUseCase(eventPrismaRepository);
const eventDeleteUseCase = new EventDeleteUseCase(eventPrismaRepository);
const eventFindUniqueUseCase = new EventFindUniqueUseCase(eventPrismaRepository);
const eventFindAllUseCase = new EventFindAllUseCase(eventPrismaRepository);


export const eventInstance = new EventController(
    eventFindUniqueUseCase,
    eventFindAllUseCase,
    eventCreateUseCase,
    eventUpdateUseCase,
    eventDeleteUseCase
);
