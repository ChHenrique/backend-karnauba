<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man-autor">Autor</a>
</p>

---

# 🌴 Backend - Karnaúba

API desenvolvida para gerenciar os principais pontos turísticos e estabelecimentos da cidade de **Moraújo - CE**, facilitando a visualização e administração desses locais.

---

## :page_facing_up: Descrição
Esta API permite que administradores possam cadastrar, editar e remover locais e categorias, além de oferecer uma listagem pública dos pontos turísticos da cidade.

---

## 🛠 Tecnologias

> Esse projeto foi desenvolvido com as seguintes tecnologias:

### 🔗 Backend
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### 🗄️ Banco de Dados
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Redis](https://redis.io/) — (Cache)

### 🧪 Testes
- [Vitest](https://vitest.dev/)

---

## :clipboard: Funcionalidades

- 🔐 **Autenticação de administradores (JWT)**
- 🗺️ **Gerenciamento de locais** (criar, editar, deletar e listar)
- 📜 **Listagem pública de locais cadastrados**
- 🏷️ **Gestão de categorias** (criar, editar, deletar e listar)
- ⚡ **Cache com Redis para otimizar listagens públicas**

---

## :closed_book: Instalação

### ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/) (opcional, para cache)
- [Git](https://git-scm.com/)
- [PNPM](https://pnpm.io/) (ou npm/yarn)

---

### 🚀 Rodando o projeto

```bash
# Clone este repositório
git clone https://github.com/ChHenrique/backend-karnauba.git

# Acesse a pasta do projeto
cd backend-karnauba

# Instale as dependências
pnpm install

# Configure o banco de dados (arquivo .env)
cp .env.example .env
# Preencha as variáveis de ambiente

# Rode as migrations
npx prisma migrate dev

# Inicie o servidor
pnpm run dev
