import type { Place } from "../types/Place";

export const fetchPlaces = async (): Promise<Place[]> => {
  const response = await fetch("/data/places/places.json");

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return response.json();
};
