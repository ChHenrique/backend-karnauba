import { ServerError } from "../../../shared/errors/serverError";
import { CategoryPrismaRepository } from "../repositories/CategoryPrismaRepository";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class CategoryDeleteUseCase {
  constructor(private categoryRepository: CategoryPrismaRepository) {}

  async execute(id: string): Promise<void> {
    const category = await this.categoryRepository.findUnique(id);
    if (!category) throw new ServerError("Category not found", 404);

    const deleted = await this.categoryRepository.delete(id);
    
  }
}