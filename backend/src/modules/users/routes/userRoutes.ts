import { FastifyInstance } from "fastify";
import { userInstance } from "../repositories/userInstances";
import { verifyJWT, verifyAdmin } from "../../../shared/middlewares/authMiddleware";
export class UserRoutes {
  constructor(private readonly app: FastifyInstance) {}

  registerRoutes() {

    this.app.post('/users', (req, res) => userInstance.register(req, res));
    this.app.post('/users/login', (req, res) => userInstance.login(req, res));


    this.app.post('/users/forgot-password', (req, res) => userInstance.requestPasswordReset(req, res));
    this.app.post('/users/reset-password', (req, res) => userInstance.resetPassword(req, res));

  
    this.app.register((app) => {
      app.addHook('preHandler', verifyJWT);
      app.addHook('preHandler', verifyAdmin);

      app.get('/users-email/:email', (req, res) => userInstance.findByEmail(req, res));
      app.get('/users', (req, res) => userInstance.findMany(req, res));
      app.get('/users/:id', (req, res) => userInstance.findUnique(req, res));
      app.put('/users/:id', (req, res) => userInstance.update(req, res));
      app.delete('/users/:id', (req, res) => userInstance.delete(req, res));
    });
  }
}
