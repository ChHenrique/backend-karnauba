import type { cityDataDTO } from '../../../dto/City/cityDTO';
import { api } from '../../../lib/axios.config';

export async function GetCities(): Promise<cityDataDTO[]> {
    const response = await api.get('/cities?limit=3', {withCredentials: true});
    const cities: cityDataDTO[] = response.data.map((city: any) => ({
        id: city.id,
        name: city.name,
        description: city.description,
        imageUrl: city.imageUrl,
        color01: city.color01,
        color02: city.color02,
        places: city.places || [],
        events: city.events || []
    }));
    return cities;
}
