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

export default function PageMeta({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
}: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | Alder Heritage Homes`;
    const canonicalUrl = `${BASE_URL}${path}`;

    // <title>
    document.title = fullTitle;

    // Basic meta
    setMeta("description", description, true);
    setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow", true);

    // Canonical
    setCanonical(canonicalUrl);

    // Open Graph
    setMeta("og:title", fullTitle);
    setMeta("og:description", description);
    setMeta("og:url", canonicalUrl);
    setMeta("og:type", type);
    setMeta("og:site_name", SITE_NAME);
    setMeta("og:image", image);
    setMeta("og:image:width", "1200");
    setMeta("og:image:height", "630");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image", true);
    setMeta("twitter:title", fullTitle, true);
    setMeta("twitter:description", description, true);
    setMeta("twitter:image", image, true);
  }, [title, description, path, image, type, noIndex]);

  return null;
}
