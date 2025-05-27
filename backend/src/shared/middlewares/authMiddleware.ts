import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";

export async function verifyJWT(req: FastifyRequest, reply: FastifyReply) {
  const token = req.cookies.token;

  if (!token) {
    return reply.status(401).send({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    (req as any).user = decoded;
  } catch (err) {
    return reply.status(401).send({ error: "Unauthorized" });
  }
}
