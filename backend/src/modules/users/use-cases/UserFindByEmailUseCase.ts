import { ServerError } from "../../../shared/errors/serverError";
import { UserRepository } from "../repositories/UserRepository";

export class UserFindByEmailUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string) {
    if (!email) throw new ServerError("Email is required", 400);
    console.log(email);

    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new ServerError("User Not Found", 404);

    return user;
  }
}
