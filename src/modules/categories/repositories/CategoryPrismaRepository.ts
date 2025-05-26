import { prisma } from "../../../config/prisma";
import { Category } from "../entities/Category";
import { CategoryRepository } from "./CategoryRepository";

export class CategoryPrismaRepository implements CategoryRepository {
    async findAll(): Promise<Category[] | null> {
        const categories = await prisma.category.findMany();

        return categories;
    }

    async findUnique(id: string): Promise<Category | null> {
        const category = await prisma.category.findUnique({
            where: { id: id }
        });

        return category;
    }

    async create(category: Category): Promise<Category> {
        const data = await prisma.category.create({
            data: {
                name: category.name,
                icon: category.icon,
                id: category.id
            }
        });

        return data;
    }

    async update(category: Category): Promise<Category> {
        const updatedCategory = await prisma.category.update({
            where: { id: category.id },
            data: {
                name: category.name,
                icon: category.icon
            }
        });

        return updatedCategory;
    }

    async delete(id: string): Promise<void> {
        await prisma.category.delete({
            where: { id: id }
        });
    }
}