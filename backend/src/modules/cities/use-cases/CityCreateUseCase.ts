import { CitySchema } from "../schemas/citySchema";
import { ServerError } from "../../../shared/errors/serverError";
import { randomUUID } from "crypto";
import { CityRepository } from "../repositories/CityRepository";
import { City } from "../entities/city";
import { cityDTO } from "../dtos/cityDTO";

import { parseImageInput } from "../../../shared/utils/parseImageInput";

export class CityCreateUseCase {
  constructor(private readonly cityRepository: CityRepository) {}

  async execute(data: cityDTO): Promise<City> {
    const validation = CitySchema.safeParse(data);

    if (!validation.success) {
      console.log("Erro na validação:", validation.error.format());
      throw new ServerError(
        "Validation Error",
        400,
        validation.error.format()
      );
    }

    const {
      name,
      state,
      description = null,
      imageUrl = null,
      adminId,
      color01 = null,
      color02 = null,
    } = validation.data;

    const city = new City(
      randomUUID(),
      name,
      state,
      description,
      parseImageInput(imageUrl),
      color01,
      color02,
      adminId
    );

    await this.cityRepository.create(city);

    return city;
  }
}
