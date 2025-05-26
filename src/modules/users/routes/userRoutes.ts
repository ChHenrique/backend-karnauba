import { FastifyInstance } from "fastify";
import { userInstance } from "../repositories/userInstances";
import { verifyJWT } from "../../../shared/middlewares/authMiddleware";

export class UserRoutes {
  constructor(private readonly app: FastifyInstance) {}

  registerRoutes() {
    
    this.app.post('/users', (req, res) => userInstance.register(req, res));
    this.app.post('/users/login', (req, res) => userInstance.login(req, res));

    this.app.register((app) => {
      app.addHook('preHandler', verifyJWT);

      app.get('/users', (req, res) => userInstance.findMany(req, res));
      app.get('/users/:id', (req, res) => userInstance.findUnique(req, res));
      app.put('/users/:id', (req, res) => userInstance.update(req, res));
      app.delete('/users/:id', (req, res) => userInstance.delete(req, res));
    });
  }
}
