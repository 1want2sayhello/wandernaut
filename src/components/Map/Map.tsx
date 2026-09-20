import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import type { UserCoordinates } from "../../utils/currentLocation";
import { fetchPlaces } from "../../services/placesService";
import { fetchEvents } from "../../services/eventsService";
import { markerIcons } from "../../utils/markerIcons";
import userLocationMarker from "../../assets/markers/user-marker.svg";
import { getUpcomingEvents } from "../../utils/eventFilters";
import MapCard, { type MapCardItem } from "../Cards/MapCard/MapCard";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import styles from "./Map.module.scss";

const Map = () => {
  const [selectedItem, setSelectedItem] = useState<MapCardItem | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const routerLocation = useLocation();
  const userLocation = routerLocation.state?.userLocation as
    | UserCoordinates
    | undefined;

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
      center: userLocation
        ? [userLocation.lng, userLocation.lat]
        : [-86.1581, 39.7684], // or else, center on Downtown Indianapolis
      zoom: userLocation ? 14 : 12,
    });

    mapRef.current = map;

    map.on("load", async () => {
      if (userLocation) {
        const markerElement = document.createElement("div");
        markerElement.className = styles.userMarker;

        const markerImage = document.createElement("img");
        markerImage.src = userLocationMarker;
        markerImage.alt = "Your current location";
        markerImage.draggable = false;

        markerElement.appendChild(markerImage);

        new mapboxgl.Marker({
          element: markerElement,
          anchor: "center",
        })
          .setLngLat([userLocation.lng, userLocation.lat])
          .addTo(map);
      }

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

          markerElement.addEventListener("click", () => {
            console.log("PLACE CLICKED:", place);

            setSelectedItem({
              image: place.image,
              name: place.name,
              description: place.description,
              attributes: place.attributes,
            });
          });

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

          markerElement.addEventListener("click", () => {
            console.log("EVENT CLICKED:", event);

            setSelectedItem({
              image: event.image,
              name: event.name,
              description: event.description,
              schedule: event.schedule,
              attributes: event.attributes,
            });
          });

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
  }, [userLocation]);

  return (
    <>
      <div ref={mapContainerRef} className={styles.Map} />
      {selectedItem && (
        <MapCard item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
};
export default Map;
