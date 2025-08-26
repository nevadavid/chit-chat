import { MessageService } from "../message/MessageService";
import { UserService } from "../user/UserService";
import { ChatService } from "./ChatService";

export const createChatModule = ({
  messageService,
  userService,
}: {
  messageService: MessageService;
  userService: UserService;
}) => {
  const chatService = new ChatService({ messageService, userService });

  return { chatService };
};
