import { UserRepository } from "../repositories/UserRepository";
import { userDTO } from "../dtos/userDTO";
import { userSchema } from "../schemas/userSchema";
import { ServerError } from "../../../shared/errors/serverError";
import { randomUUID } from "crypto";
import bcrypt from "bcryptjs";
import { User } from "../entities/User";

export class UserCreateUseCase{
    constructor(private userRepository: UserRepository){}
    
    async execute(data: userDTO){
        const parsedData = userSchema.safeParse(data)
        if (!parsedData.success) throw new ServerError('Validation Error')

        const { email, password, name } = parsedData.data!

        const isEmailExist = await this.userRepository.findByEmail(email)
        if (isEmailExist) throw new ServerError("This email is already in use", 409);

        const id = randomUUID()
        const hashedPassword = await bcrypt.hash(password, 8)

        const user = new User(id, name, hashedPassword, email)
        this.userRepository.create(user)

        return user
    }
}
