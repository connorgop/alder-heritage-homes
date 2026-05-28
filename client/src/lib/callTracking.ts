import { getLeadAttribution } from "@/lib/attribution";

export type TrackingPhone = {
  label: string;
  href: string;
  source: string;
};

const DEFAULT_PHONE: TrackingPhone = {
  label: "(559) 281-8016",
  href: "tel:5592818016",
  source: "default",
};

function envPhone(key: string): TrackingPhone | null {
  const raw = import.meta.env[key] as string | undefined;
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 10) return null;
  const local = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  const label = `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6, 10)}`;
  return { label, href: `tel:${digits}`, source: key };
}

const SOURCE_PHONE_KEYS: Array<[string, string]> = [
  ["google", "VITE_CALL_TRACKING_GOOGLE_ADS"],
  ["paid", "VITE_CALL_TRACKING_GOOGLE_ADS"],
  ["cpc", "VITE_CALL_TRACKING_GOOGLE_ADS"],
  ["gbp", "VITE_CALL_TRACKING_GBP"],
  ["business-profile", "VITE_CALL_TRACKING_GBP"],
  ["facebook", "VITE_CALL_TRACKING_SOCIAL"],
  ["instagram", "VITE_CALL_TRACKING_SOCIAL"],
  ["meta", "VITE_CALL_TRACKING_SOCIAL"],
];

const PAGE_PHONE_KEYS: Array<[RegExp, string]> = [
  [/foreclosure|behind-on-mortgage|pre-foreclosure/i, "VITE_CALL_TRACKING_FORECLOSURE"],
  [/probate|inherited|estate/i, "VITE_CALL_TRACKING_PROBATE"],
  [/tenant|landlord|rental/i, "VITE_CALL_TRACKING_LANDLORD"],
  [/squatter|unauthorized-occupants|vacant/i, "VITE_CALL_TRACKING_DISTRESSED"],
  [/title|deed|lien|tax/i, "VITE_CALL_TRACKING_TITLE"],
];

export function getTrackingPhone(): TrackingPhone {
  if (typeof window === "undefined") return DEFAULT_PHONE;

  const attribution = getLeadAttribution();
  const sourceBlob = [
    attribution.utm_source,
    attribution.utm_medium,
    attribution.utm_campaign,
    attribution.utm_content,
    attribution.referrer,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  for (const [needle, key] of SOURCE_PHONE_KEYS) {
    if (sourceBlob.includes(needle)) {
      const phone = envPhone(key);
      if (phone) return phone;
    }
  }

  const page = `${attribution.currentPage || ""} ${attribution.firstLandingPage || ""}`;
  for (const [pattern, key] of PAGE_PHONE_KEYS) {
    if (pattern.test(page)) {
      const phone = envPhone(key);
      if (phone) return phone;
    }
  }

  return envPhone("VITE_CALL_TRACKING_DEFAULT") ?? DEFAULT_PHONE;
}
