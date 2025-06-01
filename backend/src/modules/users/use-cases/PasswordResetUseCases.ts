import bcrypt from 'bcryptjs';
import { UserRepository } from '../repositories/UserRepository';
import { redis } from '../../../shared/providers/nodeMailer/redis';
import { transporter } from '../../../shared/providers/nodeMailer/mailer';
import { randomUUID } from 'crypto';
import { ServerError } from '../../../shared/errors/serverError';

const TOKEN_EXPIRATION_SECONDS = 60 * 15; 

export class PasswordResetUseCases {
  constructor(private userRepository: UserRepository) {}

async requestPasswordReset(email: string) {
  const user = await this.userRepository.findByEmail(email);

  if (!user) throw new ServerError('Email não encontrado');
  

  const token = randomUUID();

  await redis.set(`password-reset:${token}`, user.id, 'EX', TOKEN_EXPIRATION_SECONDS);

  const resetUrl = `http://localhost:5173/reset-password?token=${token}`;

  await transporter.sendMail({
    from: '"Cactour" <suportecactour@gmail.com>',
    to: email,
    subject: 'Recuperação de senha',
    html: `<p>Você pediu para recuperar sua senha. Clique no link para criar uma nova senha:</p>
           <a href="${resetUrl}">${resetUrl}</a>
           <p>Se não foi você, ignore este email.</p>`
  });


  return true;
}

async resetPassword(token: string, newPassword: string) {
  const userId = await redis.get(`password-reset:${token}`);

  if (!userId) throw new ServerError('Token inválido ou expirado');

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const userUpdated = await this.userRepository.update(userId, { password: hashedPassword });

  await redis.del(`password-reset:${token}`);

  return true;
}

}
