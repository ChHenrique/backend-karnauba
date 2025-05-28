export class Event {
    constructor(
        public readonly id: string,
        public name: string,
        public description: string,
        public imageUrl: string,
        public location: string,
        public startDate: Date,
        public endDate: Date,
        public readonly cityId: string,

    ){}
}