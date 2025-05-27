import { ServerError } from "../../../shared/errors/serverError";
import { UserRepository } from "../repositories/UserRepository";

export class UserFindManyUseCase {
    constructor(private userRepository: UserRepository){}

    async execute(){
        const users = await this.userRepository.findAll()
        if (!users) throw new ServerError('Users not  found', 404)

        return users

    }
}