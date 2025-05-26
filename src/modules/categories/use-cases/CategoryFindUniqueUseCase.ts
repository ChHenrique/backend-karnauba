import { ServerError } from "../../../shared/errors/serverError";
import { Category } from "../entities/Category";
import { CategoryPrismaRepository } from "../repositories/CategoryPrismaRepository";


export class CategoryFindUniqueUseCase {
  constructor(private categoryRepository: CategoryPrismaRepository) {}

  async execute(id: string): Promise<Category> {
    const category = await this.categoryRepository.findUnique(id);
    if (!category) throw new ServerError("Category not found", 404);

    return category;
  }
}