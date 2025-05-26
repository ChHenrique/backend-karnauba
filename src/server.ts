import Fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import cookie from "@fastify/cookie";
import { UserRoutes } from "./modules/users/routes/userRoutes";
import dotenv from "dotenv";
import { CityRoutes } from "./modules/routes/cityRoutes";
import fastifyStatic from '@fastify/static';
import path from 'path';



const fastify = Fastify();
fastify.register(multipart)

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'uploads'), 
  prefix: '/uploads/', 
});

dotenv.config();
fastify.register(cors, {
  origin: true,
});
fastify.register(cookie)


new UserRoutes(fastify).registerRoutes();
new CityRoutes(fastify).registerRoutes();


fastify.listen({ port: 3000 })
  .then(() => {
    console.log("Server running: http://localhost:3000");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
