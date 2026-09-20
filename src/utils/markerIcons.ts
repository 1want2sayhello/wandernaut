import restaurantIcon from "../assets/markers/restaurant.svg";
import barIcon from "../assets/markers/bar.svg";
import attractionsIcon from "../assets/markers/attractions.svg";
import nightLifeIcon from "../assets/markers/nightlife.svg";
import cafeIcon from "../assets/markers/cafe.svg";
import eventIcon from "../assets/markers/event.svg";
import placeIcon from "../assets/markers/place-flag.svg";

export type MarkerType =
  | "restaurant"
  | "bar"
  | "attractions"
  | "nightlife"
  | "cafe"
  | "event"
  | "place";

export const markerIcons: Record<MarkerType, string> = {
  restaurant: restaurantIcon,
  bar: barIcon,
  attractions: attractionsIcon,
  cafe: cafeIcon,
  event: eventIcon,
  place: placeIcon,
  nightlife: nightLifeIcon,
};
