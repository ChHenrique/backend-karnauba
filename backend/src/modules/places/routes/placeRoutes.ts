import { FastifyInstance } from "fastify";
import { verifyJWT, verifyAdmin } from "../../../shared/middlewares/authMiddleware";
import { placeInstance } from "../repositories/placeInstance";


export class PlaceRoutes {
  constructor(private readonly app: FastifyInstance) {}

  registerRoutes() {

    this.app.register((app) => {
      app.addHook("preHandler", verifyJWT);
      app.addHook("preHandler", verifyAdmin);

      app.post("/places", (req, res) => placeInstance.create(req, res));
      app.get("/places", (req, res) => placeInstance.findAll(req, res));
      app.get("/places/:id", (req, res) => placeInstance.findUnique(req, res));
      app.put("/places/:id", (req, res) => placeInstance.update(req, res));
      app.delete("/places/:id", (req, res) => placeInstance.delete(req, res));
    });
  }
}
