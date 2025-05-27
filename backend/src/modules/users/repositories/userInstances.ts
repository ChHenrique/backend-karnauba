import { UserControllers } from "../controllers/UserControllers";

import { UserCreateUseCase } from "../use-cases/UserCreateUseCase";
import { UserDeleteUseCase } from "../use-cases/UserDeleteUseCase";
import { UserFindManyUseCase } from "../use-cases/UserFindManyUseCase";
import { UserFindUniqueUseCase } from "../use-cases/UserFindUniqueUseCase";
import { UserLoginUseCase } from "../use-cases/UserLoginUseCase";
import { UserUpdateUseCase } from "../use-cases/UserUpdateUseCase";
import { UserPrismaRepository } from "./UserPrismaRepository";

const userPrismaRepository = new UserPrismaRepository()
const userCreateUseCase = new UserCreateUseCase(userPrismaRepository)
const userUpdateUseCase = new UserUpdateUseCase(userPrismaRepository)
const userDeleteUseCase = new UserDeleteUseCase(userPrismaRepository)
const userFindUniqueUseCase = new UserFindUniqueUseCase(userPrismaRepository)
const userFindManyUseCase = new UserFindManyUseCase(userPrismaRepository)
const userLoginUseCase = new UserLoginUseCase(userPrismaRepository)

export const userInstance = new UserControllers(userFindUniqueUseCase, userFindManyUseCase, userCreateUseCase, userUpdateUseCase, userDeleteUseCase, userLoginUseCase)