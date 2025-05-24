import bcrypt from 'bcryptjs';
import { Encrypter } from './Encrypter';

export class BcryptEncrypter implements Encrypter {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 8);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
