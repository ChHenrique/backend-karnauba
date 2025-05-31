export type PlaceDefinition = {
  name: string,
  color02?: string,
  places: {
    name: string,
    cityName: string,
    imageUrl: string,
  }[],
}