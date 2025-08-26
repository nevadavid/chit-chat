import { Server } from "socket.io";
import { ChatController } from "./ChatController";
import { UserService } from "../user/UserService";
import { ChatService } from "./ChatService";

export class ChatSocket {
  constructor({
    server,
    userService,
    chatService,
  }: {
    server: Server;
    userService: UserService;
    chatService: ChatService;
  }) {
    server.on("connection", (socket) => {
      const chatController = new ChatController({
        server,
        socket,
        userService,
        chatService,
      });

      chatController.connect(socket.handshake.auth.username);

      socket.on("message", (message) => chatController.message(message));
      socket.on("disconnect", () => chatController.disconnect());
    });
  }
}
