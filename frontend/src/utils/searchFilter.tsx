type CategoryType = "GASTRONOMIA" | "HOTEL" | "EVENTO" | "PAISAGENS";

export type Place = {
  name: string;
  category: CategoryType;
  city: string;
  imageUrl: string;
  startDate?: string;
  endDate?: string;
};

type FilterProps = {
  search: string;
  categories: CategoryType[];
  places: Place[];
};

export function Filter({ search, categories, places }: FilterProps) {
  const normalSearch = search.toLocaleLowerCase().trim();

  const filteredPlaces: Place[] = places.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(normalSearch);
    const matchesCategory =
      categories.length === 0 || categories.includes(place.category);

    return matchesSearch && matchesCategory;
  });
  return filteredPlaces;
}

