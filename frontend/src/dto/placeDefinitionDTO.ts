export type PlaceDefinition = {
  name: string,
  color02?: string,
  city: string,
  places: {
    name: string,
    city: string,
    imageUrl: string,
  }[],
}