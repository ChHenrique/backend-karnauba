import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { ServerError } from "../errors/serverError";

export async function verifyJWT(req: FastifyRequest, reply: FastifyReply) {
  const token = req.cookies.token;

  if (!token) throw new ServerError("Token not provided", 401);
  
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    (req as any).user = decoded;
  } catch (err) {
    return reply.status(401).send({ error: "Unauthorized" });
  }
}

export async function verifyAdmin(req: FastifyRequest) {
  const user = (req as any).user;

  if (!user || user.role !== "ADMIN") throw new ServerError("User is not admin", 403);
}
