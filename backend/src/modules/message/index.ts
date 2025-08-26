import { MessageRepository } from "./MessageRepository";
import { MessageService } from "./MessageService";

export const createMessageModule = () => {
  const messageRepository = new MessageRepository();
  const messageService = new MessageService({ messageRepository });

  return { messageService };
};
