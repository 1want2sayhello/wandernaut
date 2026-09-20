export type EventCategory =
  | "live-music"
  | "concert"
  | "sports"
  | "festival"
  | "film"
  | "art"
  | "comedy"
  | "seasonal";

export type Event = {
  id: string;
  name: string;
  image: string;
  categories: EventCategory[];
  markerType: "event";
  attributes: string[];
  description: string;

  venue: {
    id: string;
    name: string;
    address?: string;
    city: string;
    zipCode?: string;

    coordinates: {
      lat: number;
      lng: number;
    };
  };

  schedule: {
    start: string;
    end: string | null;
  };

  cost: {
    min: number | null;
    max: number | null;
  };

  featured: boolean;
};
