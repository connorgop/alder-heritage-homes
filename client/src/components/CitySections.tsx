/**
 * CitySections — drop-in component that adds genuinely-unique content +
 * per-city schema to any city-targeted marketing page.
 *
 * Solves the "doorway page" problem on Sell<X>City pages: previously 64 city
 * pages shared 75-88% of their boilerplate. Adding this single component to
 * each page injects city-specific market data, neighborhoods, FAQs, nearby-city
 * cross-links, and a city-scoped LocalBusiness + Service + FAQPage JSON-LD —
 * pushing each page comfortably above Google's near-duplicate threshold.
 *
 * Usage:
 *   <CitySections slug="clovis" />
 *
 * The component is intentionally self-contained: it pulls all data from
 * client/src/data/cities.ts and emits all needed schema. The host page does
 * not need to know about cityFacts at all.
 */
import { Link } from "wouter";
import { MapPin, Home, Clock, ArrowRight } from "lucide-react";
import { getCityFacts, getNearbyCities, type CityFacts } from "@/data/cities";
import SchemaMarkup, { cityLocalBusinessSchema, cityServiceSchema, faqPageSchema } from "./SchemaMarkup";

interface Props {
  /** City slug, must match a CityFacts.slug or alias in client/src/data/cities.ts */
  slug: string;
  /** Disable when the host page already emits FAQPage JSON-LD. Visible city FAQs still render. */
  includeFaqSchema?: boolean;
  /** Optional className for the outer wrapper */
  className?: string;
}

function formatPrice(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

export default function CitySections({ slug, includeFaqSchema = true, className }: Props) {
  const facts = getCityFacts(slug);
  if (!facts) return null;
  const nearby = getNearbyCities(slug, 5);

  return (
    <>
      {/* ── JSON-LD: per-city LocalBusiness + Service + FAQ ────────────────── */}
      <SchemaMarkup schema={cityLocalBusinessSchema(facts)} id={`city-business-${facts.slug}`} />
      <SchemaMarkup schema={cityServiceSchema(facts)} id={`city-service-${facts.slug}`} />
      {includeFaqSchema && <SchemaMarkup schema={faqPageSchema(facts.localFaq)} id={`city-faq-${facts.slug}`} />}

      <section className={`py-16 ${className ?? ""}`} style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-5xl mx-auto px-4">

          {/* ── Market Overview ────────────────────────────────────────────── */}
          <MarketOverview facts={facts} />

          {/* ── Why People in <City> Reach Out ──────────────────────────────── */}
          <CommonSituations facts={facts} />

          {/* ── Neighborhoods + Landmarks ──────────────────────────────────── */}
          <NeighborhoodsBlock facts={facts} />

          {/* ── City-Specific FAQ ──────────────────────────────────────────── */}
          <CityFaqBlock facts={facts} />

          {/* ── Nearby Cities Cross-Link ───────────────────────────────────── */}
          {nearby.length > 0 && <NearbyCitiesBlock currentName={facts.name} nearby={nearby} />}
        </div>
      </section>
    </>
  );
}

function MarketOverview({ facts }: { facts: CityFacts }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
        {facts.name} Housing Market at a Glance (2026)
      </h2>
      <p className="mb-6" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>
        {facts.name} sits in {facts.county}, approximately {facts.milesFromFresno === 0 ? "right at" : `${facts.milesFromFresno} miles from`} our Fresno base.
        The market today reflects {facts.population.toLocaleString()} residents and a housing stock concentrated around{" "}
        {facts.neighborhoods.slice(0, 3).join(", ")} and the surrounding ZIP codes.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        <Stat label="Median home price" value={formatPrice(facts.medianPrice)} sub="2026 estimate" icon={<Home className="w-5 h-5" />} />
        <Stat label="Typical days on market" value={`${facts.daysOnMarket} days`} sub="Traditional listing" icon={<Clock className="w-5 h-5" />} />
        <Stat label="ZIP codes served" value={facts.zips.length.toString()} sub={facts.zips.slice(0, 3).join(" · ") + (facts.zips.length > 3 ? " …" : "")} icon={<MapPin className="w-5 h-5" />} />
      </div>
      <p className="mt-6 text-sm italic" style={{ color: "oklch(0.50 0.01 60)" }}>
        We can close in as little as 3 business days — roughly {Math.round(facts.daysOnMarket / 3)}× faster than a traditional {facts.name} listing.
      </p>
    </div>
  );
}

function Stat({ label, value, sub, icon }: { label: string; value: string; sub: string; icon: React.ReactNode }) {
  return (
    <div className="p-5 rounded-xl border" style={{ background: "white", borderColor: "oklch(0.88 0.01 60)" }}>
      <div className="flex items-center gap-2 mb-1" style={{ color: "oklch(0.55 0.13 42)" }}>
        {icon}
        <span className="text-xs uppercase tracking-wider font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>{label}</span>
      </div>
      <div className="text-2xl font-bold mb-0.5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{value}</div>
      <div className="text-xs" style={{ color: "oklch(0.50 0.01 60)" }}>{sub}</div>
    </div>
  );
}

function CommonSituations({ facts }: { facts: CityFacts }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
        Common Reasons {facts.name} Homeowners Reach Out
      </h2>
      <ul className="grid sm:grid-cols-2 gap-3">
        {facts.commonSituations.map((s, i) => (
          <li key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "white" }}>
            <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }} />
            <span style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NeighborhoodsBlock({ facts }: { facts: CityFacts }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
        Neighborhoods We Buy in Across {facts.name}
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {facts.neighborhoods.map((n, i) => (
          <span key={i} className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "oklch(0.92 0.02 85)", color: "oklch(0.28 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            {n}
          </span>
        ))}
      </div>
      <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)" }}>
        Near {facts.landmarks.slice(0, 2).join(" or ")}? We've bought homes in every corner of {facts.name}.
      </p>
    </div>
  );
}

function CityFaqBlock({ facts }: { facts: CityFacts }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
        {facts.name}-Specific Questions
      </h2>
      <div className="space-y-4">
        {facts.localFaq.map((f, i) => (
          <details key={i} className="group p-5 rounded-lg border" style={{ background: "white", borderColor: "oklch(0.88 0.01 60)" }}>
            <summary className="font-bold cursor-pointer flex items-start gap-2 list-none" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              <span className="mt-1 flex-shrink-0 transition-transform group-open:rotate-90" style={{ color: "oklch(0.55 0.13 42)" }}>›</span>
              <span>{f.q}</span>
            </summary>
            <p className="mt-3 pl-5" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.7 }}>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function NearbyCitiesBlock({ currentName, nearby }: { currentName: string; nearby: CityFacts[] }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
        We Also Buy Houses Near {currentName}
      </h2>
      <p className="mb-5" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
        Same terms — cash offer in 24 hours, close in 3 days, no fees — in nearby Central Valley cities:
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {nearby.map(c => (
          <Link key={c.slug} href={`/we-buy-houses-${c.slug}`} className="group p-4 rounded-lg border transition-colors hover:border-orange-500" style={{ background: "white", borderColor: "oklch(0.88 0.01 60)" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{c.name}, CA</div>
                <div className="text-xs" style={{ color: "oklch(0.50 0.01 60)" }}>{c.county}</div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: "oklch(0.55 0.13 42)" }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
