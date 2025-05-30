
import { verifyAdmin, verifyJWT } from "../../../shared/middlewares/authMiddleware";
import { FastifyInstance } from "fastify";
import { cityInstance } from "../repositories/CityInstances";



export class CityRoutes {
  constructor(private readonly app: FastifyInstance) {}

  registerRoutes() {
      this.app.get('/cities-places-events/:id', (req, res) => cityInstance.findPlacesEventById(req, res))
      this.app.get('/cities', (req, res) => cityInstance.findAll(req, res));
      this.app.get('/cities/:id', (req, res) => cityInstance.findUnique(req, res));

    this.app.register((app) => {
      app.addHook('preHandler', verifyJWT);
      app.addHook('preHandler', verifyAdmin);

      app.post('/cities', (req, res) => cityInstance.create(req, res))
      app.put('/cities/:id', (req, res) => cityInstance.update(req, res));
      app.delete('/cities/:id', (req, res) => cityInstance.delete(req, res));
    });
  }
}