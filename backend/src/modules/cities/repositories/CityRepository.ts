import { City } from "../entities/City"


export interface CityRepository {
    findAll(limit?: number): Promise<City[] | null>
    findUnique(id: string): Promise<City | null>
    create(city: City): Promise<City | null> 
    update(id: string, data: Partial<City>): Promise<City | null>
    delete(id: string): Promise<void>
}