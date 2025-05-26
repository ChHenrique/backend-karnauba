import "@fastify/cookie"
import { FastifyReply, FastifyRequest } from "fastify"
import { UserCreateUseCase } from "../use-cases/UserCreateUseCase"
import { UserDeleteUseCase } from "../use-cases/UserDeleteUseCase"
import { UserFindUniqueUseCase } from "../use-cases/UserFindUniqueUseCase"
import { UserLoginUseCase } from "../use-cases/UserLoginUseCase"
import { UserUpdateUseCase } from "../use-cases/UserUpdateUseCase"
import { userDTO } from "../dtos/userDTO";
import { handleMultipart } from "../../../shared/middlewares/multipart"
import { UserFindManyUseCase } from "../use-cases/UserFindManyUseCase"


export class UserControllers {
    constructor(
        private findUniqueUseCase: UserFindUniqueUseCase,
        private findManyUseCase: UserFindManyUseCase,
        private createUseCase: UserCreateUseCase,
        private updateUseCase: UserUpdateUseCase,
        private deleteUseCase: UserDeleteUseCase,
        private userLoginUseCase: UserLoginUseCase
    ) { }

    async register(req: FastifyRequest, reply: FastifyReply) {
        const userData = await handleMultipart(req, "users") as userDTO;
        const user = await this.createUseCase.execute(userData);
        reply.status(201).send({ message: "User created successfully", ...user });
    }

    async login(req: FastifyRequest, reply: FastifyReply) {
        const data = await handleMultipart(req) as userDTO;
        const token = await this.userLoginUseCase.execute(data);
        reply.status(200).setCookie("token", token, {
            httpOnly: true,
            path: '/'
        }).send({ message: "Login realized with success" });
    }

    async update(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string };
        const userData = await handleMultipart(req) as userDTO;
        const updatedUser = await this.updateUseCase.execute(id, userData);
        reply.send({ message: "User updated successfully", ...updatedUser });
    }

    async delete(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string }
        await this.deleteUseCase.execute(id)
        reply.send({ message: "User deleted" })
    }

    async findUnique(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string }
        const user = await this.findUniqueUseCase.execute(id)
        reply.send(user)
    }

    async findMany(req: FastifyRequest, reply: FastifyReply) {
        const users = await this.findManyUseCase.execute()

        reply.send(users)

    }


}




