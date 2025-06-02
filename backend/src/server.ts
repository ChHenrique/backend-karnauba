import Fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import cookie from "@fastify/cookie";
import dotenv from "dotenv";
import fastifyStatic from '@fastify/static';
import path from 'path';

import { UserRoutes } from "./modules/users/routes/userRoutes";
import { CityRoutes } from "./modules/cities/routes/cityRoutes";
import { EventRoutes } from "./modules/events/routes/eventRoutes";
import { ImageRoutes } from "./modules/images/routes/imageRoutes";
import { PlaceRoutes } from "./modules/places/routes/placeRoutes";


const fastify = Fastify();
fastify.register(cookie)
fastify.register(multipart)

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'uploads'), 
  prefix: '/uploads/', 
});

dotenv.config();
fastify.register(cors, {
  origin: 'http://localhost:5173',
  credentials: true, 
});

new UserRoutes(fastify).registerRoutes();
new CityRoutes(fastify).registerRoutes();
new EventRoutes(fastify).registerRoutes();
new PlaceRoutes(fastify).registerRoutes()
new ImageRoutes(fastify).registerRoutes();

fastify.listen({ port: 3000, host: '0.0.0.0' })
  .then(() => {
    console.log("Server running: http://localhost:3000");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

