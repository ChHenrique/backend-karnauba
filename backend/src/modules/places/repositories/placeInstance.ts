import { PlaceControllers } from "../controllers/PlaceControllers";
import { PlacePrismaRepository } from "./PlacePrismaRepository";
import { PlaceCreateUseCase } from "../use-cases/PlaceCreateUseCase";
import { PlaceUpdateUseCase } from "../use-cases/PlaceUpdateUseCase";
import { PlaceDeleteUseCase } from "../use-cases/PlaceDeleteUseCase";
import { PlaceFindUniqueUseCase } from "../use-cases/PlaceFindUniqueUseCase";
import { PlaceFindAllUseCase } from "../use-cases/PlaceFindAllUseCase";


const placePrismaRepository = new PlacePrismaRepository();

const placeCreateUseCase = new PlaceCreateUseCase(placePrismaRepository);
const placeUpdateUseCase = new PlaceUpdateUseCase(placePrismaRepository);
const placeDeleteUseCase = new PlaceDeleteUseCase(placePrismaRepository);
const placeFindUniqueUseCase = new PlaceFindUniqueUseCase(placePrismaRepository);
const placeFindAllUseCase = new PlaceFindAllUseCase(placePrismaRepository);


export const placeInstance = new PlaceControllers(
    placeCreateUseCase,
    placeFindUniqueUseCase,
    placeFindAllUseCase,
    placeUpdateUseCase,
    placeDeleteUseCase
);
