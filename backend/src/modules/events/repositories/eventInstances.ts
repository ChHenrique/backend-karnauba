import { EventController } from "../controllers/EventControllers";
import { EventPrismaRepository } from "./EventPrismaRepository";
import { EventCreateUseCase } from "../use-cases/EventCreateUseCase";
import { EventUpdateUseCase } from "../use-cases/EventUpdateUseCase";
import { EventDeleteUseCase } from "../use-cases/EventDeleteUseCase";
import { EventFindUniqueUseCase } from "../use-cases/EventFindUniqueUseCase";
import { EventFindAllUseCase } from "../use-cases/EventFindAllUseCase";
import { CityPrismaRepository } from "../../cities/repositories/CityPrismaRepository";



const eventPrismaRepository = new EventPrismaRepository();
const cityPrismaRepository = new CityPrismaRepository()

const eventCreateUseCase = new EventCreateUseCase(eventPrismaRepository, cityPrismaRepository);
const eventUpdateUseCase = new EventUpdateUseCase(eventPrismaRepository, cityPrismaRepository);
const eventDeleteUseCase = new EventDeleteUseCase(eventPrismaRepository, cityPrismaRepository);
const eventFindUniqueUseCase = new EventFindUniqueUseCase(eventPrismaRepository);
const eventFindAllUseCase = new EventFindAllUseCase(eventPrismaRepository);


export const eventInstance = new EventController(
    eventFindUniqueUseCase,
    eventFindAllUseCase,
    eventCreateUseCase,
    eventUpdateUseCase,
    eventDeleteUseCase
);
