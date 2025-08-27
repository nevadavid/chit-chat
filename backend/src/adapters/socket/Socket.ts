import { Server } from "socket.io";
import { createServer } from "http";

const PORT = process.env.PORT || 3000;

export class Socket {
  readonly server: Server;

  constructor() {
    const httpServer = createServer();

    this.server = new Server(httpServer, {
      cors: { origin: "*", methods: ["GET", "POST"] },
    });

    httpServer.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}
