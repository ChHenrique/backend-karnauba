import { randomUUID } from "crypto";
import { ServerError } from "../../../shared/errors/serverError";
import { placeDTO } from "../dtos/placeDTO";
import { PlaceRepository } from "../repositories/PlaceRepository";
import { placeSchema } from "../schemas/placeSchema";
import { Place } from "../entities/Place";
import { Category } from "@prisma/client";
import { parseImageInput } from "../../../shared/utils/parseImageInput";
import { normalizePlaceInput } from "../utils/normalizePlaceInput";
import { CityRepository } from "../../cities/repositories/CityRepository";

export class PlaceCreateUseCase {
  constructor(
    private placeRepository: PlaceRepository,
    private cityRepository: CityRepository // 👉 necessário para verificar o admin da cidade
  ) {}

  async execute(data: any, userId: string): Promise<Place> {
    const normalizedData = normalizePlaceInput(data);

    const parsedData = placeSchema.safeParse(normalizedData);

    if (!parsedData.success) {
      console.log("Erro na validação:", parsedData.error.format());
      throw new ServerError(
        "Validation Error",
        400,
        parsedData.error.format()
      );
    }

    const {
      name,
      description,
      address,
      category,
      cityId,
      imageUrl,
      latitude,
      longitude,
      instagram,
      whatsapp,
    } = parsedData.data;

    const city = await this.cityRepository.findUnique(cityId);

    if (!city) {
      throw new ServerError("City not found", 404);
    }

    if (city.adminId !== userId) {
      throw new ServerError(
        "You are not authorized to create a place in this city",
        403
      );
    }

    const id = randomUUID();
    const categoryEnum = Category[category as keyof typeof Category];
    const parsedImage = parseImageInput(imageUrl) ?? "";

    const place = new Place(
      id,
      name,
      description,
      parsedImage,
      address,
      latitude ?? 0,
      longitude ?? 0,
      categoryEnum,
      instagram ?? "",
      whatsapp ?? "",
      cityId ?? ""
    );

    await this.placeRepository.create(place);

    return place;
  }
}
