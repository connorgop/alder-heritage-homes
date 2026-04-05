/* Before & After Gallery — Alder Heritage Homes
 * Design: Warm heritage palette — deep charcoal bg for dark sections, warm cream for light
 * Typography: Lora serif headings, Nunito Sans body, DM Mono labels
 * Layout: Full-width photo grid with case study narrative, asymmetric sections
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

// Real photos — Clovis case
const HAZMAT_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-hazmat-team-clovis_6f37d7da.webp";
const SELLER_HUG_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-hug_80f9b3b4.webp";
const SELLER_SIDE_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-side_d912ee39.webp";

// Illinois Ave flip video
const ILLINOIS_FLIP_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/illinois-ave-flip-fresno_924b59f9.mov";

const clovisTags = ["Murder scene", "2-yr squatter", "No utilities", "Hazmat cleanup", "Full renovation", "$200K cash"];
const illinoisTags = ["5 break-ins", "Vandalism", "Bed bugs", "Cockroaches", "Rats", "Full flip"];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Before & After — Real Property Transformations | Alder Heritage Homes",
  "description": "Real before and after photos from Alder Heritage Homes transactions in Fresno and Clovis, CA. See how we buy and transform properties nobody else will touch.",
  "url": "https://www.alderheritagehomes.com/before-after",
  "publisher": {
    "@type": "Organization",
    "name": "Alder Heritage Homes",
    "telephone": "+15592818016"
  }
};

export default function BeforeAfter() {
  useSEO({
    title: "Before & After — Real Property Transformations | Alder Heritage Homes",
    description: "Real before and after photos from Alder Heritage Homes transactions in Fresno and Clovis, CA. We buy properties nobody else will touch — murder scenes, squatters, hazmat, fire damage, and more.",
    canonical: "/before-after",
  });

  return (
    <Layout>
      <SchemaMarkup schema={schema} id="before-after-page" />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container relative z-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.3)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>
            Real Transactions · Real Results
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>
            Properties Nobody Else<br />Would Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "oklch(0.75 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            These are real transactions — real sellers, real properties, real results. We buy homes in any condition, regardless of their history. Here's the proof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-terracotta flex items-center justify-center gap-2 px-8 py-4 font-bold text-lg" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Cash Offer <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study 1: Clovis */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold mb-2 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}>Case Study 01</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              The Clovis Inherited Murder Home
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "oklch(0.42 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A mother inherited her daughter's Clovis home after her daughter was murdered by her husband. The murderer's mother had been squatting in the property for over 2 years. The seller never visited the property — not once. We handled everything.
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Hazmat — Day 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
              <img
                src={HAZMAT_PHOTO}
                alt="Connor and team in hazmat suits before entering the Clovis property — Day 1"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.15 0.01 60 / 0.85) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs font-bold mb-1 tracking-widest uppercase" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}>Day 1</div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Hazmat Entry — Before</div>
              </div>
            </div>

            {/* Seller hug — After */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
              <img
                src={SELLER_HUG_PHOTO}
                alt="Connor hugging the seller after seeing the renovated Clovis home for the first time"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.15 0.01 60 / 0.85) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs font-bold mb-1 tracking-widest uppercase" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}>Closing Day</div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Seller Sees Renovation — After</div>
              </div>
            </div>

            {/* Seller side — After */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
              <img
                src={SELLER_SIDE_PHOTO}
                alt="Connor with the seller outside the renovated Clovis home on closing day"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.15 0.01 60 / 0.85) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs font-bold mb-1 tracking-widest uppercase" style={{ color: "oklch(0.75 0.10 42)", fontFamily: "'DM Mono', monospace" }}>$200,000 Cash</div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Connor &amp; the Seller — Clovis, CA</div>
              </div>
            </div>
          </div>

          {/* Tags + stats */}
          <div className="flex flex-wrap gap-2 mb-6">
            {clovisTags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.12)", color: "oklch(0.45 0.10 42)", fontFamily: "'DM Mono', monospace" }}>{t}</span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Purchase Price", value: "$200,000 Cash" },
              { label: "Days to Close", value: "21 Days" },
              { label: "Seller Visits Required", value: "Zero" },
            ].map(s => (
              <div key={s.label} className="p-5 rounded-xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{s.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.01 60)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 pl-6 italic text-xl" style={{ borderColor: "oklch(0.55 0.13 42)", color: "oklch(0.35 0.02 60)", fontFamily: "'Lora', serif" }}>
            "I never had to see it the way it was. Connor handled everything. I just had to sign and show up to closing."
            <div className="mt-2 text-sm not-italic" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>— The Seller, Clovis CA</div>
          </blockquote>

          <div className="mt-6">
            <Link href="/blog/clovis-inherited-murder-home-cash-sale">
              <span className="inline-flex items-center gap-2 font-bold cursor-pointer" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Read the full story <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study 2: Illinois Ave */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold mb-2 tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.75 0.10 42)" }}>Case Study 02</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white" style={{ fontFamily: "'Lora', serif" }}>
              Illinois Ave — Fresno Full Flip
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: "oklch(0.72 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
              5 break-ins, vandalism, bed bugs, cockroaches, and rats. A property that had been abandoned and repeatedly targeted. We bought it as-is, completed a full renovation, and brought it back to life.
            </p>
          </div>

          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8" style={{ maxWidth: "720px", border: "2px solid oklch(1 0 0 / 0.1)" }}>
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full"
              style={{ background: "oklch(0.15 0.01 60)", display: "block" }}
            >
              <source src={ILLINOIS_FLIP_VIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Tags + stats */}
          <div className="flex flex-wrap gap-2 mb-6">
            {illinoisTags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(1 0 0 / 0.08)", color: "oklch(0.80 0.06 75)", fontFamily: "'DM Mono', monospace" }}>{t}</span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Condition", value: "Severe Damage" },
              { label: "Renovation", value: "Full Gut" },
              { label: "Result", value: "Fully Restored" },
            ].map(s => (
              <div key={s.label} className="p-5 rounded-xl text-center" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.10 42)" }}>{s.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.60 0.01 60)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Buy */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              No Property Is Too Difficult
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.42 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              We've bought properties that banks won't finance, agents won't list, and other buyers won't touch. Here's what we handle every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Murder scenes & crime properties",
              "Squatter & unauthorized occupant situations",
              "Hazmat & biohazard remediation needed",
              "Fire & smoke damage",
              "Foundation & structural issues",
              "Mold & water damage",
              "Hoarder & extreme clutter",
              "Unpermitted additions & code violations",
              "Inherited & probate properties",
              "Foreclosure & pre-foreclosure",
              "Divorce & estate sales",
              "Tenant-occupied & eviction situations",
            ].map(item => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                <span className="text-sm" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Have a Property Nobody Else Will Buy?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.92 0.04 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call Connor directly. Free consultation, no obligation, no pressure. We've seen it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Cash Offer <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
