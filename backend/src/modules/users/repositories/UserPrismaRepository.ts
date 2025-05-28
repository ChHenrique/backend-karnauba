import { prisma } from "../../../config/prisma";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";


export class UserPrismaRepository implements UserRepository {
    async findAll(): Promise<User[]> {
        const users = await prisma.user.findMany()

        return users
    }

    async findById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {id: id}
        })

        return user
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {email: email}
        })

        return user
    }

    async create(user: User): Promise<User> {
        const data = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                id: user.id
            }
        })

        return data
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        const user = await prisma.user.update({
             where: { id: id },

             data: {
             name: data.name,
             email: data.email,
             password: data.password
                }
            }
        )
        
        return user
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: {id: id}
        })
    }
}