import { ServerError } from "../../../shared/errors/serverError";
import { UserRepository } from "../repositories/UserRepository";

export class UserDeleteUseCase{
    constructor(
        private userRepository: UserRepository
    ){}

    async execute(id: string){
        const user = this.userRepository.findById(id)
        if (!user) throw new ServerError('User not found', 404)

        await this.userRepository.delete(id)
    }
}