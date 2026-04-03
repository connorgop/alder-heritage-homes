/* ============================================================
   SCHEMA MARKUP — Alder Heritage Homes
   Injects JSON-LD structured data into the document head
   for Google rich results: LocalBusiness, FAQPage, Article, Person
   ============================================================ */
import { useEffect } from "react";

interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
  id: string; // unique id so multiple schemas don't conflict
}

/**
 * Injects a JSON-LD <script> tag into <head> and removes it on unmount.
 * Supports any schema.org type.
 */
export default function SchemaMarkup({ schema, id }: SchemaMarkupProps) {
  useEffect(() => {
    const scriptId = `schema-${id}`;
    // Remove existing script with same id to avoid duplicates on navigation
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [schema, id]);

  return null;
}

// ─── Pre-built schema factories ─────────────────────────────────────────────

/** LocalBusiness schema for Alder Heritage Homes */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": "https://www.alderheritagehomes.com/#business",
    name: "Alder Heritage Homes",
    alternateName: "Alder Heritage Homes — Cash Home Buyer Fresno",
    description:
      "Alder Heritage Homes is a licensed California real estate agency (DRE #02219124) that buys houses for cash in Fresno and the Central Valley. We buy homes in any condition — no repairs, no commissions, close in 5–7 days.",
    url: "https://www.alderheritagehomes.com",
    telephone: "+15592818016",
    email: "connor@alderheritagehomes.com",
    founder: {
      "@type": "Person",
      name: "Connor Alder",
      jobTitle: "Licensed California Real Estate Agent",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Real Estate License",
        recognizedBy: {
          "@type": "Organization",
          name: "California Department of Real Estate",
        },
        identifier: "DRE #02219124",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93720",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.7378,
      longitude: -119.7871,
    },
    areaServed: [
      { "@type": "City", name: "Fresno", sameAs: "https://en.wikipedia.org/wiki/Fresno,_California" },
      { "@type": "City", name: "Clovis", sameAs: "https://en.wikipedia.org/wiki/Clovis,_California" },
      { "@type": "City", name: "Madera", sameAs: "https://en.wikipedia.org/wiki/Madera,_California" },
      { "@type": "City", name: "Visalia", sameAs: "https://en.wikipedia.org/wiki/Visalia,_California" },
      { "@type": "City", name: "Bakersfield", sameAs: "https://en.wikipedia.org/wiki/Bakersfield,_California" },
      { "@type": "City", name: "Hanford" },
      { "@type": "City", name: "Lemoore" },
      { "@type": "City", name: "Tulare" },
      { "@type": "City", name: "Porterville" },
      { "@type": "City", name: "Merced" },
      { "@type": "City", name: "Stockton" },
      { "@type": "City", name: "Modesto" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    priceRange: "Free consultation",
    knowsAbout: [
      "Cash home buying",
      "Probate real estate",
      "Foreclosure prevention",
      "Distressed property sales",
      "Senior seller real estate",
      "Military PCS home sales",
      "Inherited property sales",
    ],
    sameAs: [
      "https://www.facebook.com/alderheritagehomes",
    ],
  };
}

/** FAQPage schema — pass in array of {q, a} objects */
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** Article schema for blog posts */
export function articleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  slug,
  category,
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    url: `https://www.alderheritagehomes.com/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.alderheritagehomes.com/blog/${slug}`,
    },
    author: {
      "@type": "Person",
      "@id": "https://www.alderheritagehomes.com/about#connor",
      name: "Connor Alder",
      jobTitle: "Licensed California Real Estate Agent",
      url: "https://www.alderheritagehomes.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Alder Heritage Homes",
      url: "https://www.alderheritagehomes.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.alderheritagehomes.com/favicon.ico",
      },
    },
    articleSection: category,
    inLanguage: "en-US",
  };
}

/** Person schema for Connor — used on the About page */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.alderheritagehomes.com/about#connor",
    name: "Connor Alder",
    jobTitle: "Licensed California Real Estate Agent",
    description:
      "Connor Alder is a licensed California real estate agent (DRE #02219124) and founder of Alder Heritage Homes. He buys homes in Fresno and the Central Valley with his own capital — not a wholesaler.",
    url: "https://www.alderheritagehomes.com/about",
    telephone: "+15592818016",
    worksFor: {
      "@type": "Organization",
      name: "Alder Heritage Homes",
      url: "https://www.alderheritagehomes.com",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      recognizedBy: {
        "@type": "Organization",
        name: "California Department of Real Estate",
      },
      identifier: "DRE #02219124",
    },
    knowsAbout: [
      "Cash home buying",
      "Probate real estate",
      "Foreclosure prevention",
      "Distressed property sales",
      "Senior seller real estate",
      "Central Valley real estate market",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fresno",
      addressRegion: "CA",
      addressCountry: "US",
    },
  };
}

/** WebSite schema with SearchAction — enables Google Sitelinks Search Box */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.alderheritagehomes.com/#website",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
    description: "Fresno's honest cash home buyer. Licensed CA agent. No repairs, no commissions, close in 5–7 days.",
    publisher: {
      "@id": "https://www.alderheritagehomes.com/#business",
    },
    inLanguage: "en-US",
  };
}
