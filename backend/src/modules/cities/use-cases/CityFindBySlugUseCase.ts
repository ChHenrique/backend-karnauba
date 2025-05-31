import { ServerError } from "../../../shared/errors/serverError";
import { City } from "../entities/City";
import { CityRepository } from "../repositories/CityRepository";

export class CityFindBySlugUseCase {
  constructor(
    private cityRepository: CityRepository
  ) {}

  async execute(slug: string): Promise<City> {
    const city = await this.cityRepository.findBySlug(slug);

    if (!city) throw new ServerError("City not found", 404);

    return city;
  }
}
