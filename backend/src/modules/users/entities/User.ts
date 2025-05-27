import { Role } from "@prisma/client";

export class User {
    constructor(
    public readonly id: string,
    public name: string,
    public password: string,
    public email: string,
    public role: Role,
){}
}