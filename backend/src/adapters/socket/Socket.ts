import { Server } from "socket.io";
import { Server as HttpServer } from "http";

export class Socket {
  readonly server: Server;

  constructor({ httpServer }: { httpServer: HttpServer }) {
    this.server = new Server(httpServer, {
      cors: { origin: "*", methods: ["GET", "POST"] },
      transports: ["websocket"],
    });
  }
}
