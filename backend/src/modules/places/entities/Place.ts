import { Category } from "@prisma/client";

export class Place {
    constructor(
        public readonly id: string,
        public name: string,
        public description: string,
        public imageUrl: string,
        public address: string,
        public latitude: number,
        public longitude: number,
        public color01: string,
        public color02: string,
        public category: Category,
        public instagram: string,
        public whatsapp: string,
        public cityId: string,
    ){}
}