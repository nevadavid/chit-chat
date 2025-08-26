import { Message } from "./MessageModel";

export class MessageRepository {
  #messages: Message[] = [];

  create(message: Message) {
    this.#messages.push(message);
  }

  getAll() {
    return this.#messages;
  }

  removeAll() {
    this.#messages = [];
  }
}
