import { Readable } from "stream";

export interface UploadProvider {
  upload(file: {
    filename: string;
    mimetype: string;
    stream: Readable;
  }, folder?: string): Promise<string>;

  delete(file: string, folder?: string): Promise<void>;
}
