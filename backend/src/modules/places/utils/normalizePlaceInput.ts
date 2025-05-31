import { placeDTO } from "../dtos/placeDTO";

export function normalizePlaceInput(data: Partial<placeDTO>): Partial<placeDTO> {
  return {
    ...data,
    imageUrl: Array.isArray(data.imageUrl) ? data.imageUrl[0] : data.imageUrl,
    latitude: data.latitude !== undefined ? Number(data.latitude) : undefined,
    longitude: data.longitude !== undefined ? Number(data.longitude) : undefined,
  };
}
