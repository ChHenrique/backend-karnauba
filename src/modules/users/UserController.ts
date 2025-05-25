import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { UserCreateUseCase } from "./use-cases/UserCreateUseCase";
import { UserDeleteUseCase } from "./use-cases/UserDeleteUseCase";
import { UserFindUniqueUseCase } from "./use-cases/UserFindUniqueUseCase";
import { UserLoginUseCase } from "./use-cases/UserLoginUseCase";
import { UserUpdateUseCase } from "./use-cases/UserUpdateUseCase";
import { userDTO } from "./dtos/userDTO";

export class UserController {
    constructor(
        private findUniqueUseCase: UserFindUniqueUseCase,
        private createUseCase: UserCreateUseCase,
        private updateUseCase: UserUpdateUseCase,
        private deleteUseCase: UserDeleteUseCase,
        private userLoginUseCase: UserLoginUseCase
    ){}

    async register(req: FastifyRequest<{ Body: userDTO }>, reply: FastifyReply){
        const data = req.body
        const patient = await this.createUseCase.execute(data);
        reply.status(201).send({message: "User created successfully", ...patient});
    }


}