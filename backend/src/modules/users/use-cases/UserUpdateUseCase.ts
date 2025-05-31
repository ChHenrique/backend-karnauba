import bcrypt from "bcryptjs";
import { ServerError } from "../../../shared/errors/serverError";
import { userDTO } from "../dtos/userDTO";
import { userUpdateSchema } from "../schemas/userSchema";
import { UserRepository } from "../repositories/UserRepository";
import { Role } from "../entities/User";

export class UserUpdateUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(id: string, data: Partial<userDTO>) {
        const result = userUpdateSchema.safeParse(data);
        if (!result.success) throw new ServerError("Validation failed", 400);

        const { name, email, password, role } = result.data;

        const user = await this.userRepository.findById(id);
        if (!user) throw new ServerError("User not found", 404);

        if (email && email !== user.email) {
            const emailExists = await this.userRepository.findByEmail(email);
            if (emailExists) throw new ServerError("This email is already in use", 409);
        }

        const updateData: Partial<userDTO> & { password?: string; role?: Role } = {};

        if (name) updateData.name = name;
        if (email && email !== user.email) updateData.email = email;
        if (role) updateData.role = role;

        if (password) updateData.password = await bcrypt.hash(password, 8);

        const updatedUser = await this.userRepository.update(id, updateData);

        return updatedUser;
    }
}
