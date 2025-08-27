import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

const PORT = parseInt(process.env.PORT || "3000", 10);

export class Socket {
  readonly server: Server;

  constructor() {
    const app = express();
    const httpServer = createServer(app);

    this.server = new Server(httpServer, {
      cors: { origin: "*", methods: ["GET", "POST"] },
      transports: ["websocket"],
    });

    app.get("/health", (_req, res) => res.type("text/plain").send("OK"));

    httpServer.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}
