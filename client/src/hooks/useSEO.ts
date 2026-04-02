/* useSEO — Dynamic meta tag injection for Alder Heritage Homes
   Sets title, description, canonical, OG tags, and JSON-LD schema per page
   ============================================================ */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
}

const SITE_NAME = "Alder Heritage Homes";
const BASE_URL = "https://www.alderheritagehomes.com";
const DEFAULT_OG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

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

function setSchema(schema: Record<string, unknown> | Record<string, unknown>[]) {
  const existing = document.querySelector('script[data-schema="alder"]');
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-schema", "alder");
  script.textContent = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
  document.head.appendChild(script);
}

export function useSEO({ title, description, canonical, ogImage, schema, noIndex }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMeta("description", description);
    if (noIndex) {
      setMeta("robots", "noindex, nofollow");
    } else {
      setMeta("robots", "index, follow");
    }

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:image", ogImage || DEFAULT_OG, "property");
    if (canonical) {
      setMeta("og:url", `${BASE_URL}${canonical}`, "property");
      setLink("canonical", `${BASE_URL}${canonical}`);
    }

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage || DEFAULT_OG);

    // JSON-LD Schema
    if (schema) {
      setSchema(schema);
    }
  }, [title, description, canonical, ogImage, schema, noIndex]);
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
      "name": "Connor Alder",
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
