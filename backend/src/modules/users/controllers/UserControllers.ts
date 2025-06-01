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
import { PasswordResetUseCases } from "../use-cases/PasswordResetUseCases"
import { forgotPasswordSchema, resetPasswordSchema } from "../schemas/passwordResetSchema"
import { UserFindByEmailUseCase } from "../use-cases/UserFindByEmailUseCase"
import { ServerError } from "../../../shared/errors/serverError"


export class UserControllers {
    constructor(
        private findUniqueUseCase: UserFindUniqueUseCase,
        private findManyUseCase: UserFindManyUseCase,
        private createUseCase: UserCreateUseCase,
        private updateUseCase: UserUpdateUseCase,
        private deleteUseCase: UserDeleteUseCase,
        private userLoginUseCase: UserLoginUseCase,
        private passwordResetUseCases: PasswordResetUseCases,
        private findByEmailUseCase: UserFindByEmailUseCase

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

  async findByEmail(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { email } = req.params as { email: string };

      const user = await this.findByEmailUseCase.execute(email);

      return reply.send(user);
    } catch (error) {
      return reply
        .status(error instanceof ServerError ? error.statusCode : 500)
        .send({ message: error instanceof Error ? error.message : "Internal server error" });
    }
  }


    async findMany(req: FastifyRequest, reply: FastifyReply) {
        const users = await this.findManyUseCase.execute()

        reply.send(users)

    }

async requestPasswordReset(req: FastifyRequest, reply: FastifyReply) {
  const body = req.body as any;

  const email = body.email;

  if (!email) {
    return reply.status(400).send({ message: 'Email obrigatório' });
  }

  try {
    await this.passwordResetUseCases.requestPasswordReset(email);
    return reply.status(200).send({ message: 'Se o email existe, enviamos o link para redefinir a senha.' });
  } catch (error) {
    return reply.status(404).send({ message: error instanceof Error ? error.message : 'Erro inesperado' });
  }
}


    async resetPassword(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { token, newPassword } = resetPasswordSchema.parse(req.body);

            await this.passwordResetUseCases.resetPassword(token, newPassword);

            return reply.status(200).send({ message: 'Senha alterada com sucesso.' });
        } catch (error) {
            return reply.status(400).send({ message: error instanceof Error ? error.message : 'Erro inesperado' });
        }
    }


}




