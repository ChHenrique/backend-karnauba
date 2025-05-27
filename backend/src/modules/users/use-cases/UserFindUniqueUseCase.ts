import { ServerError } from "../../../shared/errors/serverError";
import { UserRepository } from "../repositories/UserRepository";

export class UserFindUniqueUseCase{
    constructor(
        private useRepository: UserRepository
    ){}

    async execute(id: string){
        const user = await this.useRepository.findById(id)
        if (!user) throw new ServerError('User Not Found', 404)

        return user
    }
}