import { Message } from "./MessageModel";

export class MessageRepository {
  #messages: Message[] = [];

  create(message: Message) {
    this.#messages.push(message);
  }

  getAll() {
    return Array.from(this.#messages).sort((a, b) => b.timestamp - a.timestamp);
  }

  removeAll() {
    this.#messages = [];
  }
}
