import { cityInstance } from "../cities/repositories/cityInstances";
import { verifyJWT } from "../../shared/middlewares/authMiddleware";
import { FastifyInstance } from "fastify";



export class CityRoutes {
  constructor(private readonly app: FastifyInstance) {}

  registerRoutes() {
    this.app.post('/cities', (req, res) => cityInstance.create(req, res));

    this.app.register((app) => {
      app.addHook('preHandler', verifyJWT);

      app.get('/cities', (req, res) => cityInstance.findAll(req, res));
      app.get('/cities/:id', (req, res) => cityInstance.findUnique(req, res));
      app.put('/cities/:id', (req, res) => cityInstance.update(req, res));
      app.delete('/cities/:id', (req, res) => cityInstance.delete(req, res));
    });
  }
}