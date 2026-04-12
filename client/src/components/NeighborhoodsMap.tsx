/**
 * NeighborhoodsMap — Interactive Google Map showing all neighborhoods and cities
 * Alder Heritage Homes serves in the Central Valley.
 * Design: Warm earth tones, custom styled map, branded markers
 */

import { useRef, useState } from "react";
import { MapView } from "@/components/Map";
import { MapPin } from "lucide-react";

interface ServiceLocation {
  name: string;
  lat: number;
  lng: number;
  type: "city" | "neighborhood" | "deal";
  label?: string;
  href?: string;
}

const SERVICE_LOCATIONS: ServiceLocation[] = [
  // Major cities
  { name: "Fresno", lat: 36.7378, lng: -119.7871, type: "city", href: "/we-buy-houses-fresno" },
  { name: "Clovis", lat: 36.8252, lng: -119.7029, type: "city", href: "/we-buy-houses-clovis" },
  { name: "Bakersfield", lat: 35.3733, lng: -119.0187, type: "city", href: "/we-buy-houses-bakersfield" },
  { name: "Visalia", lat: 36.3302, lng: -119.2921, type: "city", href: "/we-buy-houses-visalia" },
  { name: "Madera", lat: 36.9613, lng: -120.0607, type: "city", href: "/we-buy-houses-madera" },
  { name: "Hanford", lat: 36.3274, lng: -119.6457, type: "city", href: "/we-buy-houses-hanford" },
  { name: "Stockton", lat: 37.9577, lng: -121.2908, type: "city", href: "/we-buy-houses-stockton" },
  { name: "Modesto", lat: 37.6391, lng: -120.9969, type: "city", href: "/we-buy-houses-modesto" },
  { name: "Sanger", lat: 36.7080, lng: -119.5551, type: "city", href: "/we-buy-houses-sanger" },
  // Fresno neighborhoods
  { name: "Tower District", lat: 36.7525, lng: -119.7921, type: "neighborhood" },
  { name: "Fig Garden", lat: 36.7784, lng: -119.8210, type: "neighborhood" },
  { name: "Sunnyside", lat: 36.7140, lng: -119.7530, type: "neighborhood" },
  { name: "Woodward Park", lat: 36.8020, lng: -119.7810, type: "neighborhood" },
  { name: "Bullard", lat: 36.8050, lng: -119.8250, type: "neighborhood" },
  { name: "McLane", lat: 36.7650, lng: -119.8050, type: "neighborhood" },
  { name: "Roosevelt", lat: 36.7280, lng: -119.8100, type: "neighborhood" },
  { name: "Hoover", lat: 36.7450, lng: -119.8350, type: "neighborhood" },
  // Real deals (approximate locations)
  { name: "Purchased: $200K Cash", lat: 36.8252, lng: -119.7029, type: "deal", label: "Clovis — Homicide/Squatter" },
  { name: "Purchased: Inherited Home", lat: 36.7378, lng: -119.7871, type: "deal", label: "Fresno — Inherited Property" },
];

const MAP_STYLES: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#f5f0e8" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5a4a3a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f0e8" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#8b5e3c" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#e8dcc8" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#d4c4a0" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#c8a87a" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#b8985a" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9dde8" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#7a9ab8" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#e8e0d0" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#d4e8c8" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#eee8d8" }] },
];

export function NeighborhoodsMap() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [activeLocation, setActiveLocation] = useState<ServiceLocation | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  function handleMapReady(map: google.maps.Map) {
    mapRef.current = map;

    // Apply custom styles
    map.setOptions({ styles: MAP_STYLES, mapTypeControl: false, streetViewControl: false });

    // Create info window
    infoWindowRef.current = new window.google.maps.InfoWindow();

    // Add markers for each location
    SERVICE_LOCATIONS.forEach((loc) => {
      const isCity = loc.type === "city";
      const isDeal = loc.type === "deal";

      // Create custom marker element
      const markerEl = document.createElement("div");
      markerEl.style.cssText = `
        width: ${isCity ? "14px" : isDeal ? "18px" : "10px"};
        height: ${isCity ? "14px" : isDeal ? "18px" : "10px"};
        border-radius: 50%;
        background: ${isCity ? "#8b5e3c" : isDeal ? "#c0392b" : "#c8a87a"};
        border: ${isCity ? "3px solid white" : isDeal ? "3px solid white" : "2px solid white"};
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: transform 0.15s ease;
      `;
      markerEl.addEventListener("mouseenter", () => { markerEl.style.transform = "scale(1.4)"; });
      markerEl.addEventListener("mouseleave", () => { markerEl.style.transform = "scale(1)"; });

      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: loc.lat, lng: loc.lng },
        title: loc.name,
        content: markerEl,
      });

      marker.addListener("click", () => {
        if (infoWindowRef.current) {
          const content = `
            <div style="font-family: 'Nunito Sans', sans-serif; padding: 4px 2px; min-width: 140px;">
              <div style="font-weight: 700; font-size: 14px; color: #3d2b1f; margin-bottom: 2px;">${loc.name}</div>
              ${loc.label ? `<div style="font-size: 12px; color: #8b5e3c; margin-bottom: 4px;">${loc.label}</div>` : ""}
              ${loc.href ? `<a href="${loc.href}" style="font-size: 12px; color: #8b5e3c; font-weight: 600; text-decoration: none;">View page →</a>` : ""}
            </div>
          `;
          infoWindowRef.current.setContent(content);
          infoWindowRef.current.open({ map, anchor: marker });
          setActiveLocation(loc);
        }
      });
    });
  }

  const cityCount = SERVICE_LOCATIONS.filter(l => l.type === "city").length;
  const neighborhoodCount = SERVICE_LOCATIONS.filter(l => l.type === "neighborhood").length;

  return (
    <div className="relative">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ background: "#8b5e3c" }} />
          <span style={{ color: "oklch(0.40 0.02 60)" }}>{cityCount} cities served</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm" style={{ background: "#c8a87a" }} />
          <span style={{ color: "oklch(0.40 0.02 60)" }}>{neighborhoodCount} Fresno neighborhoods</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ background: "#c0392b" }} />
          <span style={{ color: "oklch(0.40 0.02 60)" }}>Real purchases</span>
        </div>
      </div>

      {/* Map */}
      <div className="w-full rounded-2xl overflow-hidden shadow-lg" style={{ height: "420px" }}>
        <MapView
          initialCenter={{ lat: 36.7378, lng: -119.7871 }}
          initialZoom={9}
          onMapReady={handleMapReady}
          className="w-full h-full"
        />
      </div>

      {/* Mobile city chips below map */}
      <div className="mt-4 flex flex-wrap gap-2">
        {SERVICE_LOCATIONS.filter(l => l.type === "city").map(loc => (
          <a
            key={loc.name}
            href={loc.href || "#"}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{
              background: "white",
              border: "1px solid oklch(0.88 0.02 85)",
              color: "oklch(0.40 0.05 42)",
              fontFamily: "'Nunito Sans', sans-serif",
              textDecoration: "none",
            }}
          >
            <MapPin size={11} style={{ color: "oklch(0.55 0.13 42)" }} />
            {loc.name}
          </a>
        ))}
      </div>
    </div>
  );
}
