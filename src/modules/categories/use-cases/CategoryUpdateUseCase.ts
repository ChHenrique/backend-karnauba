import { ServerError } from "../../../shared/errors/serverError";
import { categoryDTO } from "../dtos/categoryDTO";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategorySchema } from "../schemas/categorySchema";

export class CategoryUpdateUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string, data: Partial<categoryDTO>): Promise<Category> {
    const category = await this.categoryRepository.findUnique(id);
    if (!category) throw new ServerError("Category not found", 404);

    const updatedCategory = this.categoryRepository.update(id, data);
    if (!updatedCategory) throw new ServerError("Failed to update category");

    return category;
  }
}