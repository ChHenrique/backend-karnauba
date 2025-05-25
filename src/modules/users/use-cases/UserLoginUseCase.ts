import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ServerError } from "../../../shared/errors/serverError";
import { loginUserDTO } from "../dtos/userDTO";
import { loginUserSchema } from "../schemas/userSchema";
import { UserRepository } from "../UserRepository";

export class UserLoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: loginUserDTO): Promise<string> {
    const parsed = loginUserSchema.safeParse(data);
    if (!parsed.success) throw new ServerError("Invalid data", 400);

    const { email, password } = parsed.data;
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new ServerError("Invalid credentials", 401);

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new ServerError("Invalid credentials", 401);

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new ServerError("Internal Server Error", 500);

    const token = jwt.sign({ id: user.id }, secret, {});

    return token
  }
}
