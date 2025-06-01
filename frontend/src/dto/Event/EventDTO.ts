
export type EventDTO = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  city: string;
  latitude?: number;
  longitude?: number;
  startDate: string;
  endDate: string;
  adress?: string;
}
