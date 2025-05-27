import { ServerError } from "../../../shared/errors/serverError";
import { Category } from "../entities/Category";
import { CategoryPrismaRepository } from "../repositories/CategoryPrismaRepository";


export class CategoryFindAllUseCase {
  constructor(private categoryRepository: CategoryPrismaRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll();
    if (!categories) throw new ServerError("No categories found", 404);
  
    return categories;
  }
}