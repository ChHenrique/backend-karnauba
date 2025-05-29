import { randomUUID } from "crypto";
import { ServerError } from "../../../shared/errors/serverError";
import { placeDTO } from "../dtos/placeDTO";
import { PlaceRepository } from "../repositories/PlaceRepository";
import { placeSchema } from "../schemas/placeSchema";
import { Place } from "../entities/Place";
import { Category } from "@prisma/client";

export class PlaceCreateUseCase {
  constructor(private placeRepository: PlaceRepository) { }

  async execute(data: placeDTO): Promise<Place> {
    const parsedData = placeSchema.safeParse(data);

    if (!parsedData) throw new ServerError("Validation Error");

    const {
      name,
      description,
      address,
      category,
      cityId,
      imageUrl,
      latitude,
      longitude,
      color01,
      color02,
      instagram,
      whatsapp,
    } = parsedData.data!;

    const id = randomUUID();
    const categoryEnum = Category[category as keyof typeof Category];

    const place = new Place(
      id,
      name,
      description,
      imageUrl ?? "",
      address,
      latitude ?? 0,
      longitude ?? 0,
      color01 ?? "",
      color02 ?? "",
      categoryEnum,
      instagram ?? "",
      whatsapp ?? "",
      cityId ?? ""
    );

    return place
  }
}
