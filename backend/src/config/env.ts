import dotenv from "dotenv";
dotenv.config();

export const env = {
    DATABASE_URL: process.env.DATABASE_URL as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
}