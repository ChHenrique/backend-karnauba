import { cityDTO } from "../dtos/CityDTO"
import { CitySchema } from "../schemas/citySchema"

import { ServerError } from "../../../shared/errors/serverError"
import { randomUUID } from "crypto"
import { CityRepository } from "../repositories/CityRepository"
import { City } from "../entities/city"

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
        const { name, state, description, imageUrl, adminId, color01, color02 } = parsedData.data

        const city = new City(
            id,
            name,
            state,
            description ?? null,
            imageUrl ?? null,
            color01 ?? null,
            color02 ?? null,
            adminId
        )

        await this.cityRepository.create(city)

        return city
    }
}
