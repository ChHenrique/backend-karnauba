import { randomUUID } from "crypto";
import { ServerError } from "../../../shared/errors/serverError";
import { categoryDTO } from "../dtos/categoryDTO";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategorySchema } from "../schemas/categorySchema";
import { CategoryPrismaRepository } from "../repositories/CategoryPrismaRepository";

export class CategoryCreateUseCase {
  constructor(private categoryRepository: CategoryPrismaRepository) {}

  async execute(data: categoryDTO): Promise<Category> {
    const parsedData = CategorySchema.safeParse(data); 

    if (!parsedData.success) throw new ServerError("Validation Error")

    const id = randomUUID() 

    const { name, icon } = parsedData.data!

    const category = new Category(id, name, icon ?? '')
    

    return category;
  }
}