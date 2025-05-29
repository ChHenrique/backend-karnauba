import { Category } from "@prisma/client";

export class Place {
    constructor(
        public readonly id: string,
        public name: string,
        public description: string,
        public imageUrl: string,
        public address: string,
        public latitude: number | null,
        public longitude: number | null,
        public category: Category,
        public instagram: string | null,
        public whatsapp: string | null,
        public cityId: string,
    ){}
}
