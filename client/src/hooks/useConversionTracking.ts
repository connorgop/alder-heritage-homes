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

declare global {
  interface Window {
    gtagConversion?: (label: string) => void;
    dataLayer?: unknown[];
  }
}

// Conversion labels — replace these with your actual labels from Google Ads
// Found in: Google Ads → Tools → Conversions → click your conversion → Tag setup
const CONVERSION_LABELS = {
  formSubmit: "do7rCPPsz5wcEMO7yaND",    // Contact Lead Form — AW-18059779523
  phoneClick: "do7rCPPsz5wcEMO7yaND",    // Reuse same label for phone clicks (same campaign goal)
  addressSubmit: "do7rCPPsz5wcEMO7yaND", // Reuse same label for address submissions
};

function fireConversion(label: string) {
  if (typeof window !== "undefined" && typeof window.gtagConversion === "function") {
    window.gtagConversion(label);
  }
}

export function useConversionTracking() {
  const trackFormSubmit = () => {
    fireConversion(CONVERSION_LABELS.formSubmit);
    // Also push to dataLayer for GTM if used later
    if (window.dataLayer) {
      window.dataLayer.push({ event: "form_submit", event_category: "Lead" });
    }
  };

  const trackPhoneClick = () => {
    fireConversion(CONVERSION_LABELS.phoneClick);
    if (window.dataLayer) {
      window.dataLayer.push({ event: "phone_click", event_category: "Lead" });
    }
  };

  const trackAddressSubmit = () => {
    fireConversion(CONVERSION_LABELS.addressSubmit);
    if (window.dataLayer) {
      window.dataLayer.push({ event: "address_submit", event_category: "Lead" });
    }
  };

  return { trackFormSubmit, trackPhoneClick, trackAddressSubmit };
}
