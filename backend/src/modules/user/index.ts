import { UserRepository } from "./UserRepository";
import { UserService } from "./UserService";

export function createUserModule() {
  const userRepository = new UserRepository();
  const userService = new UserService({ userRepository });

  return { userService };
}
