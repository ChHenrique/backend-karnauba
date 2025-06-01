import dotenv from "dotenv";
dotenv.config();

export const env = {
    DATABASE_URL: process.env.DATABASE_URL as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    MAILER_USER: process.env.MAILER_USER as string,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD as string,
}