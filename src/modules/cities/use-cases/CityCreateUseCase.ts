
import { CityPrismaRepository } from "../repositories/CityPrismaRepository"
import { cityDTO } from "../dtos/CityDTO"
import { CitySchema } from "../schemas/citySchema"
import { City } from "../entities/city"
import { ServerError } from "../../../shared/errors/serverError"
import { randomUUID } from "crypto"

export class CityCreateUseCase {
    constructor(
        private cityRepository: CityPrismaRepository
    ) {}

    async execute(data: cityDTO): Promise<City> {
        const parsedData = CitySchema.safeParse(data)
        if (!parsedData.success) throw new ServerError('Validation Error')
        
            const id = randomUUID()
        const { name, state, description, imageUrl } = parsedData.data!
        const city = new City(id, name, state, description, imageUrl)

        this.cityRepository.create(city)
        return city
    }
}