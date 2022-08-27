import express from "express";
import { systemRoutes } from "./routes";

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.routing();
    this.server.on('listening', () => {
      console.log('ok');
    })
  }

  private middleware() {
    this.server.use(express.json());
  }

  private routing() {
    this.server.use(systemRoutes);
  }
}