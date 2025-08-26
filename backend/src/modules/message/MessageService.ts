import { Message } from "./MessageModel";
import { MessageRepository } from "./MessageRepository";

export class MessageService {
  messageRepository: MessageRepository;

  constructor({ messageRepository }: { messageRepository: MessageRepository }) {
    this.messageRepository = messageRepository;
  }

  create(message: Message) {
    this.messageRepository.create(message);
  }

  getAll() {
    return this.messageRepository.getAll();
  }
}
