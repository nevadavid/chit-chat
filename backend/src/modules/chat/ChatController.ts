import { Server, Socket } from "socket.io";
import { UserService } from "../user/UserService";
import { ChatService } from "./ChatService";

export class ChatController {
  server: Server;
  socket: Socket;
  userService: UserService;
  chatService: ChatService;

  constructor({
    server,
    socket,
    userService,
    chatService,
  }: {
    server: Server;
    socket: Socket;
    userService: UserService;
    chatService: ChatService;
  }) {
    this.server = server;
    this.socket = socket;
    this.userService = userService;
    this.chatService = chatService;
  }

  connect(name?: string) {
    const user = this.chatService.connect(this.socket.id, name);
    const users = this.userService.getAll();
    const messages = this.chatService.getAllMessages();

    this.socket.emit("registration", user);
    this.server.emit("online", users);
    this.socket.emit("message", messages);
  }

  message(content: string) {
    const messages = this.chatService.message(this.socket.id, content);

    this.server.emit("message", messages);
  }

  disconnect() {
    this.userService.remove(this.socket.id);

    const users = this.userService.getAll();

    this.server.emit("online", users);
  }
}
