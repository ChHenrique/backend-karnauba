import { FastifyInstance } from "fastify";

import { verifyJWT, verifyAdmin } from "../../../shared/middlewares/authMiddleware";
import { imageInstance } from "../repositories/imageInstances";


export class ImageRoutes {
  constructor(private readonly app: FastifyInstance) {}

  registerRoutes() {
    this.app.register((app) => {

      app.addHook("preHandler", verifyJWT);
      app.addHook("preHandler", verifyAdmin);

      app.post("/images", (req, res) => imageInstance.create(req, res));
      app.get("/images", (req, res) => imageInstance.findAll(req, res));
      

    });
  }
}
