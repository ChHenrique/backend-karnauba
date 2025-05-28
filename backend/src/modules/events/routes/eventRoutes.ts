import { FastifyInstance } from "fastify";
import { eventInstance } from "../repositories/eventInstances";
import { verifyJWT, verifyAdmin } from "../../../shared/middlewares/authMiddleware";

export class EventRoutes {
  constructor(private readonly app: FastifyInstance) {}

  registerRoutes() {

    this.app.register((app) => {
      app.addHook('preHandler', verifyJWT);
      app.addHook('preHandler', verifyAdmin);

      app.post('/events', (req, res) => eventInstance.create(req, res));
      app.get('/events', (req, res) => eventInstance.findAll(req, res));
      app.get('/events/:id', (req, res) => eventInstance.findUnique(req, res));
      app.put('/events/:id', (req, res) => eventInstance.update(req, res));
      app.delete('/events/:id', (req, res) => eventInstance.delete(req, res));
    });
    
  }
}
