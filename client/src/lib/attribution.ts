const ATTRIBUTION_KEY = "alder_lead_attribution";

const TRACKED_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type TrackedParam = (typeof TRACKED_PARAMS)[number];

export type LeadAttribution = Partial<Record<TrackedParam, string>> & {
  firstLandingPage?: string;
  landingPage?: string;
  currentPage?: string;
  referrer?: string;
  capturedAt?: string;
};

function readStoredAttribution(): LeadAttribution {
  if (typeof window === "undefined") return {};

  try {
    const stored = window.localStorage.getItem(ATTRIBUTION_KEY);
    return stored ? (JSON.parse(stored) as LeadAttribution) : {};
  } catch {
    return {};
  }
}

function writeStoredAttribution(attribution: LeadAttribution) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // Attribution is useful, but forms must never fail because localStorage is blocked.
  }
}

export function captureAttribution() {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  const stored = readStoredAttribution();
  const next: LeadAttribution = {
    ...stored,
    firstLandingPage: stored.firstLandingPage || `${url.pathname}${url.search}`,
    landingPage: `${url.pathname}${url.search}`,
    currentPage: `${url.pathname}${url.search}`,
    referrer: stored.referrer || document.referrer || "",
    capturedAt: new Date().toISOString(),
  };

  TRACKED_PARAMS.forEach((param) => {
    const value = url.searchParams.get(param);
    if (value) next[param] = value;
  });

  writeStoredAttribution(next);
}

export function getLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") return {};

  const url = new URL(window.location.href);
  return {
    ...readStoredAttribution(),
    currentPage: `${url.pathname}${url.search}`,
  };
}

export function createLeadConversionId() {
  if (typeof window === "undefined") return Date.now().toString();

  const id =
    typeof window.crypto?.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  try {
    window.sessionStorage.setItem("alder_lead_conversion_id", id);
  } catch {
    // Ignore blocked sessionStorage.
  }

  return id;
}

export function getLeadConversionId() {
  if (typeof window === "undefined") return Date.now().toString();

  try {
    const stored = window.sessionStorage.getItem("alder_lead_conversion_id");
    if (stored) return stored;
  } catch {
    // Ignore blocked sessionStorage.
  }

  return createLeadConversionId();
}

export function formatLeadAttribution(attribution = getLeadAttribution()) {
  const campaign =
    attribution.utm_campaign ||
    attribution.utm_term ||
    attribution.gclid ||
    attribution.gbraid ||
    attribution.wbraid ||
    "direct/organic";

  const source = [attribution.utm_source, attribution.utm_medium].filter(Boolean).join(" / ");
  const landing = attribution.firstLandingPage || attribution.landingPage || "unknown";
  const current = attribution.currentPage || "unknown";
  const referrer = attribution.referrer || "none";

  return [
    `Campaign: ${campaign}`,
    source ? `Source: ${source}` : "Source: direct/organic",
    `Landing: ${landing}`,
    `Current: ${current}`,
    `Referrer: ${referrer}`,
  ].join(" | ");
}

export function getAnalyticsAttributionParams() {
  const attribution = getLeadAttribution();

  return {
    gclid: attribution.gclid,
    gbraid: attribution.gbraid,
    wbraid: attribution.wbraid,
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_term: attribution.utm_term,
    utm_content: attribution.utm_content,
    landing_page: attribution.firstLandingPage || attribution.landingPage,
    current_page: attribution.currentPage,
    referrer: attribution.referrer,
  };
}
