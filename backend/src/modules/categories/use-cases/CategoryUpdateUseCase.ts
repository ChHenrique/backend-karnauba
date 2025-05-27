import { ServerError } from "../../../shared/errors/serverError";
import { categoryDTO } from "../dtos/categoryDTO";
import { Category } from "../entities/Category";
import { CategoryPrismaRepository } from "../repositories/CategoryPrismaRepository";
import { CategoryRepository } from "../repositories/CategoryRepository";


export class CategoryUpdateUseCase {
  constructor(private categoryRepository: CategoryPrismaRepository) {}

  async execute(id: string, data: Partial<categoryDTO>): Promise<Category> {
    const category = await this.categoryRepository.findUnique(id);
    if (!category) throw new ServerError("Category not found", 404);

    const updatedCategory = this.categoryRepository.update(id, data);
    if (!updatedCategory) throw new ServerError("Failed to update category");

    return category;
  }
}