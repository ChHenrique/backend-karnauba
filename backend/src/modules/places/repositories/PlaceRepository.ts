import { Place } from "../entities/Place";

export interface PlaceRepository {
      findAll(): Promise<Place[]>;
      findUnique(id: string): Promise<Place | null>
      create(Place: Place): Promise<Place>;
      update(id: string, data: Partial<Place>): Promise<Place>
      delete(id: string): Promise<void>;
}