import { createServer, Server } from "http";
import express, { Express as ExpressApp } from "express";

export class Express {
  server: Server | null = null;
  app: ExpressApp | null = null;

  create() {
    this.app = express();

    const httpServer = createServer(this.app);

    this.server = httpServer;

    this.createRoutes();

    return this.server;
  }

  createRoutes() {
    this.app.get("/health", (_req, res) => res.type("text/plain").send("OK"));
  }
}
