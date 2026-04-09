/* ============================================================
   usePlacesAutocomplete — Google Places Autocomplete hook
   Uses the Manus Maps proxy to load the Places library and
   attach autocomplete suggestions to an input ref.
   ============================================================ */
import { useEffect, useRef, useCallback } from "react";

const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
const FORGE_BASE_URL =
  import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

/* ── Singleton script loader (shared across all instances) ── */
let loaded = false;
let loadPromise: Promise<void> | null = null;

function loadPlacesScript(): Promise<void> {
  if (loaded && window.google?.maps?.places) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    if (window.google?.maps?.places) {
      loaded = true;
      resolve();
      return;
    }
    // Check if a Maps script is already on the page (from Map.tsx or ComparableSales)
    const existing = document.querySelector(
      'script[src*="maps/api/js"]'
    ) as HTMLScriptElement | null;
    if (existing) {
      // Wait for it to finish loading
      if (window.google?.maps?.places) {
        loaded = true;
        resolve();
        return;
      }
      existing.addEventListener("load", () => {
        loaded = true;
        resolve();
      });
      existing.addEventListener("error", () =>
        reject(new Error("Maps script failed"))
      );
      return;
    }

    const script = document.createElement("script");
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=places,geocoding`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      loaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
  return loadPromise;
}

interface UsePlacesAutocompleteOptions {
  /** Called when user selects a place from the dropdown */
  onSelect: (address: string) => void;
  /** Bias results toward this location (default: Fresno) */
  biasCenter?: google.maps.LatLngLiteral;
  /** Bias radius in meters (default: 80km / ~50 miles) */
  biasRadius?: number;
  /** Restrict to specific country (default: "us") */
  country?: string;
}

export function usePlacesAutocomplete({
  onSelect,
  biasCenter = { lat: 36.7378, lng: -119.7871 }, // Fresno
  biasRadius = 80000,
  country = "us",
}: UsePlacesAutocompleteOptions) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  const init = useCallback(async () => {
    try {
      await loadPlacesScript();
    } catch {
      console.error("Could not load Google Places");
      return;
    }

    if (!inputRef.current || autocompleteRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country },
        fields: ["formatted_address", "address_components", "geometry"],
      }
    );

    // Bias toward Fresno area
    const circle = new google.maps.Circle({
      center: biasCenter,
      radius: biasRadius,
    });
    autocomplete.setBounds(circle.getBounds()!);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place?.formatted_address) {
        onSelectRef.current(place.formatted_address);
      }
    });

    autocompleteRef.current = autocomplete;
  }, [biasCenter, biasRadius, country]);

  useEffect(() => {
    init();
  }, [init]);

  return { inputRef };
}
