import { Express } from "./adapters/express/Express";
import { Socket } from "./adapters/socket/Socket";
import { createChatModule } from "./modules/chat";
import { ChatSocket } from "./modules/chat/ChatSocket";
import { createMessageModule } from "./modules/message";
import { createUserModule } from "./modules/user";

const PORT = parseInt(process.env.PORT || "3000", 10) || 3000;

const express = new Express();
const httpServer = express.create();
const { server } = new Socket({ httpServer });
const { userService } = createUserModule();
const { messageService } = createMessageModule();
const { chatService } = createChatModule({ userService, messageService });

new ChatSocket({ server, userService, chatService });

httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
