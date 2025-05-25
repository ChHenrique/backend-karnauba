import bcrypt from "bcryptjs";
import { ServerError } from "../../../shared/errors/serverError";
import { userDTO } from "../dtos/userDTO";
import { userSchema } from "../schemas/userSchema";
import { UserRepository } from "../UserRepository";

export class UserUpdateUseCase {
    constructor(private userRepository: UserRepository){}

    async execute(id: string, data: userDTO){
        const parsed = userSchema.partial().safeParse(data);
        if (!parsed.success) throw new ServerError("Validation failed", 400);

        const { name, email, password } = parsed.data!;

        const user = await this.userRepository.findById(id);
        if(!user) throw new ServerError("User not found", 404);

        if (email && email !== user.email) {
            const emailExists = await this.userRepository.findByEmail(email);
            if (emailExists) throw new ServerError("This email is already in use", 409);
            user.email = email;
        }

        if (name) user.name = name;

        if (password) {
        user.password = await bcrypt.hash(password, 8)
        }

        const updatedUser = await this.userRepository.update(id, user);

       return updatedUser;

    }
}