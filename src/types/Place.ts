import type { MarkerType } from "../utils/markerIcons";

export type PlaceCategory =
  | "restaurant"
  | "bar"
  | "nightlife"
  | "cafe"
  | "place"
  | "attractions";

export type Place = {
  id: string;
  name: string;
  categories: PlaceCategory[];
  markerType: MarkerType;
  tags: string[];
  description: string;

  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };

  cost: {
    min: number;
    max: number;
  };

  website?: string;
  image?: string;
  featured: boolean;
};
