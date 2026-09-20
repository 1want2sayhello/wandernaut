import type { Event } from "../types/Event";

export const getUpcomingEvents = (events: Event[], days = 14): Event[] => {
  const now = new Date();

  const endDate = new Date(now);
  endDate.setDate(endDate.getDate() + days);

  return events.filter((event) => {
    const eventDate = new Date(event.schedule.start);
    return eventDate >= now && eventDate <= endDate;
  });
};
