import { Server } from "socket.io";

const CLIENT_URL = ["http://localhost:5173", "http://192.168.111.182:5173"];

export class Socket {
  readonly server: Server;

  constructor(port = 8080) {
    this.server = new Server(port, {
      cors: { origin: CLIENT_URL, methods: ["GET", "POST"] },
    });
  }
}
