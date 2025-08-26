import { Socket } from "./adapters/socket/socket";
import { createChatModule } from "./modules/chat";
import { ChatSocket } from "./modules/chat/ChatSocket";
import { createMessageModule } from "./modules/message";
import { createUserModule } from "./modules/user";

const { server } = new Socket();
const { userService } = createUserModule();
const { messageService } = createMessageModule();
const { chatService } = createChatModule({ userService, messageService });

new ChatSocket({ server, userService, chatService });
