import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { UploadProvider } from "../uploadProvider/uploadProvider";
import { randomUUID } from "crypto";

export class LocalUploadProvider implements UploadProvider {
  async upload(
    file: { filename: string; mimetype: string; stream: NodeJS.ReadableStream },
    folder?: string
  ): Promise<string> {
    const baseUploadPath = path.resolve(__dirname, "..", "..", "..", "..", "uploads");
    const uploadFolder = folder ? path.join(baseUploadPath, folder) : baseUploadPath;

    fs.mkdirSync(uploadFolder, { recursive: true });

    // Extrair extensão do arquivo original
    const ext = path.extname(file.filename); // ex: ".jpg"
    // Gerar nome único usando UUID
    const uniqueName = randomUUID() + ext;

    const filePath = path.join(uploadFolder, uniqueName);
    const writeStream = fs.createWriteStream(filePath);

    await pipeline(file.stream, writeStream);

    const relativePath = folder ? `/uploads/${folder}/${uniqueName}` : `/uploads/${uniqueName}`;

    return relativePath;
  }

  async delete(file: string, folder?: string): Promise<void> {
    const baseUploadPath = path.resolve(__dirname, "..", "..", "..", "..", "uploads");
    const filePath = folder ? path.resolve(baseUploadPath, folder, file) : path.resolve(baseUploadPath, file);

    try {
      await fs.promises.unlink(filePath);
    } catch (err: any) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }
  }
}
