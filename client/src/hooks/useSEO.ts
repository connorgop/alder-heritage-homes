/* useSEO — Dynamic meta tag injection for Alder Heritage Homes
   Sets title, description, canonical, OG tags, and JSON-LD schema per page
   ============================================================ */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[]; // deprecated — use SchemaMarkup component directly
  noIndex?: boolean;
}

const SITE_NAME = "Alder Heritage Homes";
const BASE_URL = "https://www.alderheritagehomes.com";
const DEFAULT_OG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";
const DEFAULT_DESCRIPTION_SUFFIX = " Get a written cash offer from a licensed Fresno direct buyer. No repairs, commissions, or wholesaling.";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function normalizeTitle(title: string): string {
  const unbranded = title.replace(/\s[|—]\s*Alder Heritage Homes.*$/i, "").trim();
  if (unbranded.length >= 30 && unbranded.length <= 65) return unbranded;
  if (/alder heritage homes/i.test(title) && title.length <= 70) return title;
  if (title.length > 70) {
    const beforeSeparator = title.split(/\s[—|]\s/)[0]?.trim();
    if (beforeSeparator && beforeSeparator.length >= 30 && beforeSeparator.length <= 65) return beforeSeparator;
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

export function useSEO({ title, description, canonical, ogImage, schema, noIndex }: SEOProps) {
  useEffect(() => {
    const fullTitle = normalizeTitle(title);
    const metaDescription = normalizeDescription(description);
    document.title = fullTitle;

    setMeta("description", metaDescription);
    if (noIndex) {
      setMeta("robots", "noindex, nofollow");
    } else {
      setMeta("robots", "index, follow");
    }

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", metaDescription, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:image", ogImage || DEFAULT_OG, "property");
    // Always set canonical and og:url — use provided path or fall back to current pathname
    const canonicalPath = canonical || window.location.pathname;
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;
    setMeta("og:url", canonicalUrl, "property");
    setLink("canonical", canonicalUrl);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", metaDescription);
    setMeta("twitter:image", ogImage || DEFAULT_OG);

    // JSON-LD Schema is handled by SchemaMarkup component in Layout and individual pages
    // Do NOT inject schema here — it causes duplicate structured data errors in Google Search Console
  }, [title, description, canonical, ogImage, noIndex]);
}

// ============================================================
// Pre-built schema generators
// ============================================================

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Alder Heritage Homes",
  "description": "Licensed California real estate agent (DRE #02219124) who buys homes directly for cash in Fresno and the Central Valley. Specializing in foreclosure, probate, inherited homes, and distressed properties. No wholesaling, no bait-and-switch.",
  "url": "https://www.alderheritagehomes.com",
  "telephone": "+15592818016",
  "email": "connor@alderheritagehomes.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fresno",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.7378,
    "longitude": -119.7871
  },
  "areaServed": [
    "Fresno, CA", "Clovis, CA", "Madera, CA", "Visalia, CA",
    "Hanford, CA", "Sanger, CA", "Selma, CA", "Reedley, CA",
    "Tulare County, CA", "Kings County, CA", "Madera County, CA"
  ],
  "openingHours": "Mo-Su 08:00-20:00",
  "priceRange": "Free consultation",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Real Estate License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "California Department of Real Estate",
      "url": "https://www.dre.ca.gov"
    },
    "identifier": "DRE #02219124"
  },
  "sameAs": [
    "https://www.alderheritagehomes.com"
  ]
};

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a
      }
    }))
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://www.alderheritagehomes.com${url}`,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "image": image || DEFAULT_OG,
    "author": {
      "@type": "Person",
      "name": "Connor Morris",
      "jobTitle": "Licensed California Real Estate Agent",
      "identifier": "DRE #02219124"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alder Heritage Homes",
      "url": "https://www.alderheritagehomes.com"
    }
  };
}
