import { FastifyRequest } from "fastify";
import { MultipartFile } from "@fastify/multipart";

export async function parseMultipartForm(req: FastifyRequest) {
  const parts = req.parts();

  const data: Record<string, any> = {};
  let filePart: MultipartFile | undefined;

  for await (const part of parts) {
    if (part.type === "file") {
      filePart = part as MultipartFile;
    } else {
      data[part.fieldname] = part.value;
    }
  }

  return { data, filePart };
}
