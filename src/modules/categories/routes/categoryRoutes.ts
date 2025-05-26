import { FastifyInstance } from "fastify";
import { categoryInstances } from "../repositories/CategoryInstances";
import { verifyJWT } from "../../../shared/middlewares/authMiddleware";

export class CategoryRoutes {
  constructor(private readonly app: FastifyInstance) {}

  registerRoutes() {
    this.app.register((app) => {
      app.addHook('preHandler', verifyJWT);

      app.get('/categories', (req, res) => categoryInstances.findAll(req, res));
      app.get('/categories/:id', (req, res) => categoryInstances.findUnique(req, res));
      app.post('/categories', (req, res) => categoryInstances.create(req, res));
      app.put('/categories/:id', (req, res) => categoryInstances.update(req, res));
      app.delete('/categories/:id', (req, res) => categoryInstances.delete(req, res));
    });
  }
}