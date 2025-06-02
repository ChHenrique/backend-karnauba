import { PlaceControllers } from "../controllers/PlaceControllers";
import { PlacePrismaRepository } from "./PlacePrismaRepository";
import { PlaceCreateUseCase } from "../use-cases/PlaceCreateUseCase";
import { PlaceUpdateUseCase } from "../use-cases/PlaceUpdateUseCase";
import { PlaceDeleteUseCase } from "../use-cases/PlaceDeleteUseCase";
import { PlaceFindUniqueUseCase } from "../use-cases/PlaceFindUniqueUseCase";
import { PlaceFindAllUseCase } from "../use-cases/PlaceFindAllUseCase";
import { CityPrismaRepository } from "../../cities/repositories/CityPrismaRepository";


const placePrismaRepository = new PlacePrismaRepository();
const cityPrismaRepository = new CityPrismaRepository()

const placeCreateUseCase = new PlaceCreateUseCase(placePrismaRepository, cityPrismaRepository);
const placeUpdateUseCase = new PlaceUpdateUseCase(placePrismaRepository, cityPrismaRepository);
const placeDeleteUseCase = new PlaceDeleteUseCase(placePrismaRepository, cityPrismaRepository);
const placeFindUniqueUseCase = new PlaceFindUniqueUseCase(placePrismaRepository);
const placeFindAllUseCase = new PlaceFindAllUseCase(placePrismaRepository);


export const placeInstance = new PlaceControllers(
    placeCreateUseCase,
    placeFindUniqueUseCase,
    placeFindAllUseCase,
    placeUpdateUseCase,
    placeDeleteUseCase
);
