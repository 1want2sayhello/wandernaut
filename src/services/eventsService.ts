import type { Event } from "../types/Event";

export const fetchEvents = async (): Promise<Event[]> => {
  const response = await fetch("/data/events/events.json");

  if (!response.ok) {
    throw new Error("Failed to fetch local events");
  }

  return response.json();
};
