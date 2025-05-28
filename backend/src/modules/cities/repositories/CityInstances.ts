import { CityControllers } from "../controllers/CityControllers";

import { CityCreateUseCase } from "../use-cases/CityCreateUseCase";
import { CityDeleteUseCase } from "../use-cases/CityDeleteUseCase";
import { CityFindAllUseCase } from "../use-cases/CityFindAllUseCase";
import { CityFindUniqueUseCase } from "../use-cases/CityFindUniqueUseCase";
import { CityUpdateUseCase } from "../use-cases/CityUpdateUseCase";

import { CityPrismaRepository } from "./CityPrismaRepository";

const cityPrismaRepository = new CityPrismaRepository();
const cityCreateUseCase = new CityCreateUseCase(cityPrismaRepository);
const cityUpdateUseCase = new CityUpdateUseCase(cityPrismaRepository);
const cityDeleteUseCase = new CityDeleteUseCase(cityPrismaRepository);
const cityFindUniqueUseCase = new CityFindUniqueUseCase(cityPrismaRepository);
const cityFindAllUseCase = new CityFindAllUseCase(cityPrismaRepository);

export const cityInstance = new CityControllers(
    cityFindUniqueUseCase,
    cityFindAllUseCase,
    cityCreateUseCase,
    cityUpdateUseCase,
    cityDeleteUseCase
);
