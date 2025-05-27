import { FastifyReply, FastifyRequest } from "fastify";
import { CategoryCreateUseCase } from "../use-cases/CategoryCreateUseCase";
import { CategoryDeleteUseCase } from "../use-cases/CategoryDeleteUseCase";
import { CategoryFindAllUseCase } from "../use-cases/CategoryFindAllUseCase";
import { CategoryFindUniqueUseCase } from "../use-cases/CategoryFindUniqueUseCase";
import { CategoryUpdateUseCase } from "../use-cases/CategoryUpdateUseCase";
import { handleMultipart } from "../../../shared/middlewares/multipart";
import { categoryDTO } from "../dtos/categoryDTO";

export class CategoryControllers {
    constructor(
        private categoryCreateUseCase: CategoryCreateUseCase,
        private categoryUpdateUseCase: CategoryUpdateUseCase,
        private categoryDeleteUseCase: CategoryDeleteUseCase,
        private categoryFindUniqueUseCase: CategoryFindUniqueUseCase,
        private categoryFindAllUseCase: CategoryFindAllUseCase,

    ) { }

    async create(req: FastifyRequest, reply: FastifyReply) {
        const cityData = await handleMultipart(req, "categories") as categoryDTO;
        const category = await this.categoryCreateUseCase.execute(cityData);
        reply.status(201).send({ message: "Category created successfully", ...category });
    }

    async update(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const categoryData = await handleMultipart(req, "categories") as categoryDTO;
        const updatedCategory = await this.categoryUpdateUseCase.execute(id, categoryData);
        reply.send({ message: "Category updated successfully", ...updatedCategory });
    }

    async delete(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        await this.categoryDeleteUseCase.execute(id);
        reply.send({ message: "Category deleted" });
    }

    async findUnique(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const category = await this.categoryFindUniqueUseCase.execute(id);
        reply.send(category);
    }

    async findAll(req: FastifyRequest, reply: FastifyReply) {
        const categories = await this.categoryFindAllUseCase.execute();
        reply.send(categories);
    }

}