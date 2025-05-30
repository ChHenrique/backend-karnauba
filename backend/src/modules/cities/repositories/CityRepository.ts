import { City } from "../entities/City"


export interface CityRepository {
    findAll(limit?: number): Promise<City[] | null>
    findUnique(id: string): Promise<City | null>
    findPlacesAndEventsById(id: string): Promise<Pick<City, 'places' | 'events'> | null>

    create(city: City): Promise<City | null> 
    update(id: string, data: Partial<City>): Promise<City | null>
    delete(id: string): Promise<void>
}