import { useEffect, useRef } from "react";
import { fetchPlaces } from "../../services/placesService";
import { fetchEvents } from "../../services/eventsService";
import { markerIcons } from "../../utils/markerIcons";
import { getUpcomingEvents } from "../../utils/eventFilters";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import styles from "./Map.module.scss";

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const token = import.meta.env.VITE_MAPBOX_ACCESS_KEY;

    if (!token) {
      console.error("Missing VITE_MAPBOX_ACCESS_KEY");
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-86.1581, 39.7684], // Downtown Indianapolis
      zoom: 12,
    });

    mapRef.current = map;

    map.on("load", async () => {
      try {
        const places = await fetchPlaces();

        const events = await fetchEvents();
        const upcomingEvents = getUpcomingEvents(events);

        // Place markers
        places.forEach((place) => {
          const markerElement = document.createElement("button");

          markerElement.type = "button";
          markerElement.className = styles.marker;

          const markerImage = document.createElement("img");

          markerImage.src = markerIcons[place.markerType];
          markerImage.alt = "";
          markerImage.draggable = false;

          markerElement.appendChild(markerImage);

          new mapboxgl.Marker({
            element: markerElement,
            anchor: "bottom",
          })
            .setLngLat([
              place.location.coordinates.lng,
              place.location.coordinates.lat,
            ])
            .addTo(map);
        });

        // Event markers
        upcomingEvents.forEach((event) => {
          const markerElement = document.createElement("button");

          markerElement.type = "button";
          markerElement.className = styles.marker;

          const markerImage = document.createElement("img");

          markerImage.src = markerIcons[event.markerType];
          markerImage.alt = "";
          markerImage.draggable = false;

          markerElement.appendChild(markerImage);

          new mapboxgl.Marker({
            element: markerElement,
            anchor: "bottom",
          })
            .setLngLat([
              event.venue.coordinates.lng,
              event.venue.coordinates.lat,
            ])
            .addTo(map);
        });
      } catch (error) {
        console.error("Unable to load map data:", error);
      }
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={mapContainerRef} className={styles.Map} />;
};

export default Map;
