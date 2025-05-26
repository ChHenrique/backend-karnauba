import { CategoryControllers } from '../controllers/categoryControllers'
import { CategoryCreateUseCase } from '../use-cases/CategoryCreateUseCase'
import { CategoryDeleteUseCase } from '../use-cases/CategoryDeleteUseCase'
import { CategoryFindAllUseCase } from '../use-cases/CategoryFindAllUseCase'
import { CategoryFindUniqueUseCase } from '../use-cases/CategoryFindUniqueUseCase'
import { CategoryUpdateUseCase } from '../use-cases/CategoryUpdateUseCase'
import { CategoryPrismaRepository } from './CategoryPrismaRepository'

const categoryPrismaRepository = new CategoryPrismaRepository()
const categoryCreateUseCase = new CategoryCreateUseCase(categoryPrismaRepository)
const categoryUpdateUseCase = new CategoryUpdateUseCase(categoryPrismaRepository)
const categoryDeleteUseCase = new CategoryDeleteUseCase(categoryPrismaRepository)
const categoryFindUniqueUseCase = new CategoryFindUniqueUseCase(categoryPrismaRepository)
const categoryFindAllUseCase = new CategoryFindAllUseCase(categoryPrismaRepository)

export const categoryInstances = new CategoryControllers(categoryCreateUseCase, categoryUpdateUseCase, categoryDeleteUseCase, categoryFindUniqueUseCase, categoryFindAllUseCase)