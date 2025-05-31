import { randomUUID } from "crypto";
import { ServerError } from "../../../shared/errors/serverError";
import { placeDTO } from "../dtos/placeDTO";
import { PlaceRepository } from "../repositories/PlaceRepository";
import { placeSchema } from "../schemas/placeSchema";
import { Place } from "../entities/Place";
import { Category } from "@prisma/client";
import { parseImageInput } from "../../../shared/utils/parseImageInput";
import { normalizePlaceInput } from "../utils/normalizePlaceInput";

export class PlaceCreateUseCase {
  constructor(private placeRepository: PlaceRepository) {}


  async execute(data: any): Promise<Place> {
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
