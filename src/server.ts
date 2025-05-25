import Fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";

const fastify = Fastify();

fastify.register(cors, {
  origin: "*",
});

fastify.register(multipart);

fastify.listen({ port: 3000 })
  .then(() => {
    console.log("Server running on http://localhost:3000");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
