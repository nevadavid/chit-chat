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

  connect(key: string, name?: string) {
    return this.userService.create(key, name) as User;
  }

  message(name: string, content: string) {
    const timestamp = Date.now();
    const user = this.userService.getByName(name);

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
