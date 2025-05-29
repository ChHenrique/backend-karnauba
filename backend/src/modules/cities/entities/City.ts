import { Place, Event } from "@prisma/client";

export class City {
    constructor(
        public readonly id: string,
        public name: string,
        public state: string,
        public description: string | null,
        public imageUrl: string | null,
        public color01: string | null,
        public color02: string | null,
        public readonly adminId: string,
        public places: Place[] = [],   
        public events: Event[] = []    
    ) {}

    static fromPrisma(data: any): City {
        return new City(
            data.id,
            data.name,
            data.state,
            data.description,
            data.imageUrl,
            data.color01,
            data.color02,
            data.adminId,
            data.places || [],
            data.events || []
        );
    }
}
