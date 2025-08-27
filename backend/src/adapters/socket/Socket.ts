import { Server } from "socket.io";

export class Socket {
  readonly server: Server;

  constructor(port = 8080) {
    this.server = new Server(port, {
      cors: { origin: "*", methods: ["GET", "POST"] },
    });
  }
}
