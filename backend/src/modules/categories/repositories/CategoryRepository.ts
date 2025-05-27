import { Category } from "../entities/Category";

export interface CategoryRepository {
    findAll(): Promise<Category[] | null>;
    findUnique(id: string): Promise<Category | null>;
    create(category: Category): Promise<Category>;
    update(id: string, data: Partial<Category>): Promise<Category>
    delete(id: string): Promise<void>
}