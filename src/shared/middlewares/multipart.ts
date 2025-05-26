import { FastifyRequest } from "fastify";
import { LocalUploadProvider } from "../providers/uploadProvider/localUploadProvider";

export async function handleMultipart(
  req: FastifyRequest,
  folder?: string
): Promise<Record<string, any>> {
  const parts = req.parts();
  const data: Record<string, any> = {}

  for await (const part of parts) {
    if (part.type === "file" && part.filename) {
      const uploadProvider = new LocalUploadProvider();

      const photoUrl = await uploadProvider.upload(
        {
          filename: part.filename,
          mimetype: part.mimetype,
          stream: part.file,
        },
        folder
      );

      data[part.fieldname] = photoUrl;
    } else if (part.type === "field") {
      data[part.fieldname] = part.value;
    }
  }

  return data;
}
