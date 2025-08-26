import { MessageService } from "../message/MessageService";
import { User } from "../user/UserModel";
import { UserService } from "../user/UserService";

export class ChatService {
  messageService: MessageService;
  userService: UserService;

  constructor({
    messageService,
    userService,
  }: {
    messageService: MessageService;
    userService: UserService;
  }) {
    this.messageService = messageService;
    this.userService = userService;
  }

  connect(hash: string, name?: string) {
    return this.userService.create(hash, name) as User;
  }

  message(key: string, content: string) {
    const timestamp = Date.now();
    const user = this.userService.get(key);

    if (!user) {
      return;
    }

    this.messageService.create({
      id: `${user.id}-${timestamp}`,
      username: user.name,
      content,
      timestamp,
    });

    const messages = this.messageService.getAll();

    return messages;
  }

  getAllMessages() {
    return this.messageService.getAll();
  }
}
