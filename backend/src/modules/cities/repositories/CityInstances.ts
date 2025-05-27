import { CityControllers } from "../controllers/CityControllers";
import { CityPrismaRepository } from "./CityPrismaRepository";
import { CityCreateUseCase } from "../use-cases/CityCreateUseCase";
import { CityDeleteUseCase } from "../use-cases/CityDeleteUseCase";
import { CityFindAllUseCase } from "../use-cases/CityFindAllUseCase";
import { CityFindUniqueUseCase } from "../use-cases/CityFindUniqueUseCase";
import { CityUpdateUseCase } from "../use-cases/CityUpdateUseCase";

const cityPrismaRepository = new CityPrismaRepository();
const cityCreateUseCase = new CityCreateUseCase(cityPrismaRepository);
const cityDeleteUseCase = new CityDeleteUseCase(cityPrismaRepository);
const cityFindUniqueUseCase = new CityFindUniqueUseCase(cityPrismaRepository);
const cityFindAllUseCase = new CityFindAllUseCase(cityPrismaRepository);
const cityUpdateUseCase = new CityUpdateUseCase(cityPrismaRepository);

export const cityInstance = new CityControllers(cityFindUniqueUseCase, cityFindAllUseCase, cityCreateUseCase, cityUpdateUseCase, cityDeleteUseCase);
