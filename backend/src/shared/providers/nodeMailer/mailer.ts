import nodemailer from 'nodemailer';
import { env }  from '../../../config/env';

export const transporter = nodemailer.createTransport({
    service: 'gmail', 
  auth: {
    user: env.MAILER_USER,
    pass: env.MAILER_PASSWORD,

  },
});
