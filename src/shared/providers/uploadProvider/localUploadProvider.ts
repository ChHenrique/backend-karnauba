import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { IUploadProvider } from "../uploadProvider/uploadProvider";

export class LocalUploadProvider implements IUploadProvider {
  async upload(file: { filename: string; mimetype: string; stream: NodeJS.ReadableStream }, folder: string): Promise<string> {
    const uploadFolder = path.resolve(__dirname, "..", "..", "..", "..", "uploads", folder);
    fs.mkdirSync(uploadFolder, { recursive: true });

    const filePath = path.join(uploadFolder, file.filename);
    const writeStream = fs.createWriteStream(filePath);

    await pipeline(file.stream, writeStream);

    return filePath;
  }

  async delete(file: string, folder: string): Promise<void> {
    const filePath = path.resolve(__dirname, "..", "..", "..", "..", "uploads", folder, file);
    fs.unlinkSync(filePath);
  }
}
