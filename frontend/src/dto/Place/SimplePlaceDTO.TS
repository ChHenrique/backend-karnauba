export type SimplePlaceDTO = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  city: string;
  startDate?: Date;
  endDate?: Date;
};

export type PlaceDTO = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  city: string;
  latitude?: number;
  longitude?: number;
  adress?: string;
  instagram?: string;
  whatsapp?: string;
}
