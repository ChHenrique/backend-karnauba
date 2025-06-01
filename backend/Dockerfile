FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["pnpm", "dev"]
