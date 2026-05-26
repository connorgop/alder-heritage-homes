/* ============================================================
   PAGE META — Alder Heritage Homes
   Dynamically updates <title>, meta description, canonical,
   Open Graph, and Twitter Card tags on every page navigation.
   Usage: <PageMeta title="..." description="..." path="/..." />
   ============================================================ */
import { useEffect } from "react";

const BASE_URL = "https://www.alderheritagehomes.com";
const DEFAULT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
const SITE_NAME = "Alder Heritage Homes";
const DEFAULT_DESCRIPTION_SUFFIX = " Get a written cash offer from a licensed Fresno direct buyer. No repairs, commissions, or wholesaling.";

interface PageMetaProps {
  title: string;           // Page-specific title (without site name suffix)
  description: string;     // 150–160 char meta description
  path: string;            // Canonical path, e.g. "/sell-house-mold"
  image?: string;          // Optional OG image override
  type?: "website" | "article";
  noIndex?: boolean;       // Set true for /lp/* ad landing pages
}

function setMeta(property: string, content: string, isName = false) {
  const attr = isName ? "name" : "property";
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function normalizeTitle(title: string): string {
  const unbranded = title.replace(/\s[|—]\s*Alder Heritage Homes.*$/i, "").trim();
  if (unbranded.length >= 30 && unbranded.length <= 65) return unbranded;
  if (/alder heritage homes/i.test(title) && title.length <= 70) return title;
  if (title.length > 70) {
    const beforeSeparator = title.split(/\s[—|]\s/)[0]?.trim();
    if (beforeSeparator && beforeSeparator.length >= 30 && beforeSeparator.length <= 65) {
      return beforeSeparator;
    }

    const clipped = title.slice(0, 67);
    const breakAt = clipped.lastIndexOf(" ");
    return `${clipped.slice(0, breakAt > 45 ? breakAt : 67)}...`;
  }

  const branded = `${title} | ${SITE_NAME}`;
  return branded.length <= 70 ? branded : title;
}

function normalizeDescription(description: string): string {
  const clean = description.replace(/\s+/g, " ").trim();
  if (clean.length < 80) return `${clean}${DEFAULT_DESCRIPTION_SUFFIX}`.slice(0, 180);
  if (clean.length <= 180) return clean;
  const clipped = clean.slice(0, 177);
  const breakAt = Math.max(clipped.lastIndexOf("."), clipped.lastIndexOf(","), clipped.lastIndexOf(" "));
  return `${clipped.slice(0, breakAt > 120 ? breakAt : 177)}...`;
}

export default function PageMeta({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
}: PageMetaProps) {
  useEffect(() => {
    const fullTitle = normalizeTitle(title);
    const metaDescription = normalizeDescription(description);
    const canonicalUrl = `${BASE_URL}${path}`;

    // <title>
    document.title = fullTitle;

    // Basic meta
    setMeta("description", metaDescription, true);
    setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow", true);

    // Canonical
    setCanonical(canonicalUrl);

    // Open Graph
    setMeta("og:title", fullTitle);
    setMeta("og:description", metaDescription);
    setMeta("og:url", canonicalUrl);
    setMeta("og:type", type);
    setMeta("og:site_name", SITE_NAME);
    setMeta("og:image", image);
    setMeta("og:image:width", "1200");
    setMeta("og:image:height", "630");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image", true);
    setMeta("twitter:title", fullTitle, true);
    setMeta("twitter:description", metaDescription, true);
    setMeta("twitter:image", image, true);
  }, [title, description, path, image, type, noIndex]);

  return null;
}
