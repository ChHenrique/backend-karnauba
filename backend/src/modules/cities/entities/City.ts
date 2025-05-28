export class City {
    constructor(
        public readonly id: string,
        public name: string,
        public state: string,
        public description: string | null,
        public imageUrl: string | null,
        public readonly adminId: string,
    ){}
}