import { api } from "../lib/axios.config";
import type { cityDataDTO } from "../dto/City/cityDTO";

export async function GetCityInfo(slug: string): Promise<cityDataDTO> {

  const response = await api.get(`/cities-slug/${slug}`, { withCredentials: true });
  const city: cityDataDTO = {
    id: response.data.id,
    name: response.data.name,
    description: response.data.description,
    imageUrl: response.data.imageUrl,
    color01: response.data.color01,
    color02: response.data.color02,
    places: response.data.places,
    events: response.data.events,
  };

  return city;
}
