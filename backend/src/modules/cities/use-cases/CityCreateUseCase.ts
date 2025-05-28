import { cityDTO } from "../dtos/CityDTO"
import { CitySchema } from "../schemas/citySchema"
import { City } from "../entities/city"
import { ServerError } from "../../../shared/errors/serverError"
import { randomUUID } from "crypto"
import { CityRepository } from "../repositories/CityRepository"

export class CityCreateUseCase {
    constructor(
        private cityRepository: CityRepository
    ) { }

    async execute(data: cityDTO): Promise<City> {
        const parsedData = CitySchema.safeParse(data)
        if (!parsedData.success) {
            throw new ServerError('Validation Error')
        }

        const id = randomUUID()
        const { name, state, description, imageUrl, adminId } = parsedData.data

        const city = new City(
            id,
            name,
            state,
            description ?? null,
            imageUrl ?? null,
            adminId
        )

        await this.cityRepository.create(city)

        return city
    }
}
