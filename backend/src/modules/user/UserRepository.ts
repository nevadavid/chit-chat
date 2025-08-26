import { User } from "./UserModel";

export class UserRepository {
  #users = new Map<string, User>();

  create(key: string, data: User) {
    this.#users.set(key, data);

    return this.get(key) as User;
  }

  isExist(key: string) {
    return this.#users.has(key);
  }

  getByName(name: string) {
    return Array.from(this.#users.values()).find(
      ({ name: username }) => username === name
    );
  }

  get(key: string) {
    return this.#users.get(key);
  }

  getAll() {
    return Array.from(this.#users.values());
  }

  remove(key: string) {
    this.#users.delete(key);
  }
}
