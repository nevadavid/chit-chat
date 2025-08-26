import { generateReadableName } from "../../utils";
import { User } from "./UserModel";
import { UserRepository } from "./UserRepository";

export class UserService {
  userRepository: UserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  create(key: string, name?: string) {
    if (!name) {
      const readableName = generateReadableName();
      const isExist = !!this.userRepository.getByName(readableName);

      return this.userRepository.create(key, {
        id: key,
        name: isExist ? `${readableName}-${key}` : readableName,
      });
    }

    const isExist = !!this.userRepository.getByName(name);

    if (name && isExist) {
      return this.userRepository.getByName(name) as User;
    }

    if (name && !isExist) {
      return this.userRepository.create(key, { id: key, name });
    }
  }

  get(key: string) {
    return this.userRepository.get(key);
  }

  getByName(name: string) {
    return this.userRepository.getByName(name);
  }

  getAll() {
    return this.userRepository.getAll();
  }

  remove(key: string) {
    this.userRepository.remove(key);
  }
}
