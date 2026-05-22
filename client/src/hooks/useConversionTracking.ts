/* ============================================================
   CONVERSION TRACKING HOOK — Alder Heritage Homes
   Fires Google Ads conversion events on:
   - Form submissions (lead capture)
   - Phone number clicks
   - Address submissions on LP pages

   Usage:
     const { trackFormSubmit, trackPhoneClick } = useConversionTracking();
     trackFormSubmit(); // call after successful form submit
     trackPhoneClick(); // call on phone link click

   SETUP: Replace conversion labels in Google Ads dashboard.
   Go to: Tools → Conversions → + New Conversion → Website
   ============================================================ */

import { getAnalyticsAttributionParams } from "@/lib/attribution";

declare global {
  interface Window {
    gtagConversion?: (label: string) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Conversion labels from Google Ads.
// Found in: Google Ads -> Goals -> Conversions -> click conversion -> Tag setup.
const CONVERSION_LABELS = {
  formSubmit: "do7rCPPsz5wcEMO7yaND",    // Contact Lead Form — AW-18059779523
  phoneClick: "do7rCPPsz5wcEMO7yaND",    // Replace with a dedicated call-click label when created
  addressSubmit: "do7rCPPsz5wcEMO7yaND", // Replace with a dedicated address-start label when created
};

function fireConversion(label: string, eventName: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const attribution = getAnalyticsAttributionParams();

    window.gtag("event", "conversion", {
      send_to: `AW-18059779523/${label}`,
      value: 150,
      currency: "USD",
    });
    window.gtag("event", eventName, {
      value: 150,
      currency: "USD",
      ...attribution,
    });
  }
}

export function useConversionTracking() {
  const trackFormSubmit = () => {
    fireConversion(CONVERSION_LABELS.formSubmit, "generate_lead");
    // Also push to dataLayer for GTM if used later
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "form_submit",
        event_category: "Lead",
        ...getAnalyticsAttributionParams(),
      });
    }
  };

  const trackPhoneClick = () => {
    fireConversion(CONVERSION_LABELS.phoneClick, "phone_click");
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "phone_click",
        event_category: "Lead",
        ...getAnalyticsAttributionParams(),
      });
    }
  };

  const trackAddressSubmit = () => {
    fireConversion(CONVERSION_LABELS.addressSubmit, "address_submit");
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "address_submit",
        event_category: "Lead",
        ...getAnalyticsAttributionParams(),
      });
    }
  };

  return { trackFormSubmit, trackPhoneClick, trackAddressSubmit };
}
