/* ============================================================
   Case Study: Tulare St — Tulare, CA
   Inherited landlord portfolio, wholesaler exposed, $215K vs $200K
   Design: Alder Heritage Homes — dark warm palette, Lora + Nunito Sans
   ============================================================ */
import { Link } from "wouter";
import { Phone, ArrowLeft, ArrowRight, AlertTriangle, CheckCircle, DollarSign, Home, Users, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

export default function TulareStCaseStudy() {
  useSEO({
    title: "Tulare Landlord Escaped a Wholesaler — $15K More",
    description: "A Tulare landlord inherited a property and nearly got wholesaled by a Southern California company offering $200K. Connor paid $215K — $15K more — as a direct local buyer. Read the full story.",
    canonical: "/case-studies/tulare-st-tulare-ca",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How a Tulare Landlord Escaped a Wholesaler and Got $15K More",
    description: "A Tulare landlord inherited a property and nearly got wholesaled by a Southern California company offering $200K. Connor paid $215K as a direct local buyer.",
    author: {
      "@type": "Person",
      name: "Connor Morris",
      jobTitle: "Licensed CA Real Estate Agent & Direct Cash Buyer",
      identifier: "CA DRE #02219124",
    },
    publisher: {
      "@type": "Organization",
      name: "Alder Heritage Homes",
      url: "https://www.alderheritagehomes.com",
    },
    datePublished: "2025-11-01",
    dateModified: "2026-04-15",
    mainEntityOfPage: "https://www.alderheritagehomes.com/case-studies/tulare-st-tulare-ca",
  };

  return (
    <Layout>
      <SchemaMarkup schema={articleSchema} id="case-study-article" />

      {/* Hero */}
      <section className="pt-16 pb-12" style={{ background: "oklch(0.13 0.02 60)" }}>
        <div className="container max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm mb-8"
            style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.13 42)" }}
          >
            <ArrowLeft size={14} /> All Case Studies
          </Link>

          {/* Tag row */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["Inherited Property", "Wholesaler Exposed", "Landlord Portfolio", "Tulare, CA"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  background: "oklch(0.55 0.13 42 / 0.15)",
                  border: "1px solid oklch(0.55 0.13 42 / 0.4)",
                  color: "oklch(0.75 0.13 42)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.97 0.015 85)" }}
          >
            He Was About to Leave $15,000 on the Table
          </h1>
          <p
            className="text-lg leading-relaxed mb-8 max-w-2xl"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.72 0.02 60)" }}
          >
            A Tulare landlord inherited a property from his brother, owned three homes total, and was working with a Southern California company he thought was a real buyer. They weren't. Connor stepped in, paid <strong style={{ color: "oklch(0.85 0.08 80)" }}>$15,000 more</strong> than the wholesaler's offer, and closed as a direct local buyer.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Cash Paid", value: "$215K", icon: <DollarSign size={18} />, color: "oklch(0.55 0.13 42)" },
              { label: "vs. Wholesaler", value: "+$15K", icon: <ArrowRight size={18} />, color: "oklch(0.45 0.18 145)" },
              { label: "Properties", value: "3 Homes", icon: <Home size={18} />, color: "oklch(0.45 0.10 200)" },
              { label: "Situation", value: "Inherited", icon: <Users size={18} />, color: "oklch(0.55 0.10 60)" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-5 text-center"
                style={{ background: "oklch(0.20 0.02 60)", border: "1px solid oklch(0.30 0.03 60)" }}
              >
                <div className="flex justify-center mb-2" style={{ color: stat.color }}>{stat.icon}</div>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.97 0.015 85)" }}>{stat.value}</div>
                <div className="text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.02 60)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Wholesaler Warning */}
      <section className="py-12" style={{ background: "oklch(0.10 0.02 60)" }}>
        <div className="container max-w-4xl">
          <div
            className="rounded-2xl p-6 md:p-8 mb-10"
            style={{
              background: "oklch(0.18 0.04 25 / 0.6)",
              border: "1px solid oklch(0.45 0.15 25 / 0.5)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1"
                style={{ background: "oklch(0.45 0.15 25 / 0.3)" }}
              >
                <AlertTriangle size={20} style={{ color: "oklch(0.70 0.18 45)" }} />
              </div>
              <div>
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "'Lora', serif", color: "oklch(0.90 0.04 80)" }}
                >
                  Red Flag: Out-of-State Company, Out-of-Touch Offer
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.72 0.02 60)" }}
                >
                  The seller had already signed a purchase agreement with a company based in Southern California. They offered <strong style={{ color: "oklch(0.85 0.08 80)" }}>$200,000</strong> — and then turned around and tried to sell the contract to me for <strong style={{ color: "oklch(0.75 0.18 25)" }}>$260,000</strong>. That $60,000 spread? That's the wholesaler's fee — money that should have gone to the seller, not a middleman 300 miles away who never even visited the property.
                </p>
              </div>
            </div>
          </div>

          {/* Full story */}
          <div className="prose prose-invert max-w-none space-y-6">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Lora', serif", color: "oklch(0.97 0.015 85)" }}
            >
              The Full Story
            </h2>

            <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.75 0.02 60)", lineHeight: 1.8 }}>
              The seller was a landlord who owned three properties in the Central Valley. One of them — a home on Tulare Street — had been inherited from his brother. He wasn't in a rush, but he was ready to simplify his life and exit the portfolio. Someone connected him with a Southern California investment company, and he signed a purchase agreement for $200,000.
            </p>

            <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.75 0.02 60)", lineHeight: 1.8 }}>
              What he didn't realize was that the company wasn't planning to buy the house. They were planning to <strong style={{ color: "oklch(0.85 0.08 80)" }}>assign the contract</strong> — sell his signed agreement to another buyer for a profit. When they approached me, they wanted $260,000. I ran the numbers: the property needed real work, and $260,000 didn't make sense given the repair costs. I could only pay $215,000 as a direct buyer.
            </p>

            <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.75 0.02 60)", lineHeight: 1.8 }}>
              I reached out to the seller directly and explained exactly what was happening. He had no idea. The company had presented themselves as the buyer — not as a middleman collecting a $60,000 assignment fee on his property. Once he understood the situation, he cancelled his agreement with the wholesaler and went into contract with me instead.
            </p>

            {/* Pull quote */}
            <blockquote
              className="rounded-2xl p-6 my-8"
              style={{
                background: "oklch(0.17 0.03 60)",
                borderLeft: "4px solid oklch(0.55 0.13 42)",
              }}
            >
              <p
                className="text-lg italic leading-relaxed mb-3"
                style={{ fontFamily: "'Lora', serif", color: "oklch(0.88 0.04 80)" }}
              >
                "I didn't know that's what they were doing. Once Connor explained it, it was obvious. I got $15,000 more and dealt with someone who actually knew Tulare."
              </p>
              <footer
                className="text-sm"
                style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.13 42)" }}
              >
                — Seller, Tulare, CA
              </footer>
            </blockquote>

            <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.75 0.02 60)", lineHeight: 1.8 }}>
              The final purchase price was <strong style={{ color: "oklch(0.85 0.08 80)" }}>$215,000</strong> — $15,000 more than the wholesaler had offered him, and $45,000 less than what the wholesaler was trying to charge me. We closed on a timeline that worked for him, and he walked away with more money in his pocket than he would have gotten from the "buyer" he'd originally signed with.
            </p>

            <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.75 0.02 60)", lineHeight: 1.8 }}>
              This is one of the most common situations I see in Tulare County. Out-of-state companies market heavily in the Central Valley because they know sellers here don't always know the difference between a real buyer and a wholesaler. The tell-tale signs: they're not local, they move fast to get a signature, and they're vague about who the actual buyer is.
            </p>
          </div>

          {/* What to watch for */}
          <div
            className="mt-10 rounded-2xl p-6 md:p-8"
            style={{ background: "oklch(0.17 0.02 60)", border: "1px solid oklch(0.28 0.03 60)" }}
          >
            <h3
              className="text-xl font-bold mb-5"
              style={{ fontFamily: "'Lora', serif", color: "oklch(0.97 0.015 85)" }}
            >
              How to Tell If You're Talking to a Wholesaler
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { warn: true, text: "Company is based outside the Central Valley" },
                { warn: true, text: "They pressure you to sign quickly" },
                { warn: true, text: "They're vague about who the actual buyer is" },
                { warn: true, text: "They use terms like 'assign the contract' or 'end buyer'" },
                { warn: false, text: "Buyer has a CA DRE license number you can verify" },
                { warn: false, text: "Buyer is willing to show you proof of funds" },
                { warn: false, text: "Buyer gives you time to review the contract" },
                { warn: false, text: "Buyer is local and can meet you at the property" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: item.warn ? "oklch(0.45 0.15 25 / 0.2)" : "oklch(0.45 0.18 145 / 0.2)",
                    }}
                  >
                    {item.warn
                      ? <AlertTriangle size={11} style={{ color: "oklch(0.70 0.18 45)" }} />
                      : <CheckCircle size={11} style={{ color: "oklch(0.65 0.18 145)" }} />
                    }
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: item.warn ? "oklch(0.72 0.04 45)" : "oklch(0.72 0.04 145)",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container max-w-2xl text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Lora', serif", color: "white" }}
          >
            Selling in Tulare? Talk to a Real Local Buyer.
          </h2>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.92 0.04 80)" }}
          >
            I'm Connor Morris — CA DRE #02219124. I buy houses directly in Tulare County with my own funds. No assignment fees, no middlemen, no Southern California company collecting a spread on your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/we-buy-houses-tulare"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
              style={{ background: "white", color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Get My Cash Offer <ArrowRight size={16} />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90"
              style={{ background: "oklch(0.45 0.11 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={16} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      <section className="py-14" style={{ background: "oklch(0.13 0.02 60)" }}>
        <div className="container max-w-4xl">
          <h3
            className="text-xl font-bold mb-6"
            style={{ fontFamily: "'Lora', serif", color: "oklch(0.97 0.015 85)" }}
          >
            More Real Deals
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Hurley Property — Visalia", tag: "Probate + Squatters", href: "/case-studies/hurley-property-visalia" },
              { title: "1944 Idlewood Cir — Hanford", tag: "Wholesaler Victims", href: "/case-studies/1944-idlewood-circle-hanford" },
              { title: "4444 Iowa Ave — Fresno", tag: "5-Day Close", href: "/case-studies/4444-iowa-ave-fresno" },
            ].map((cs) => (
              <Link key={cs.href} href={cs.href}>
                <div
                  className="rounded-xl p-4 cursor-pointer transition-all hover:-translate-y-1"
                  style={{ background: "oklch(0.20 0.02 60)", border: "1px solid oklch(0.30 0.03 60)" }}
                >
                  <span
                    className="text-xs font-bold block mb-2"
                    style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.13 42)" }}
                  >
                    {cs.tag}
                  </span>
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.88 0.04 80)" }}
                  >
                    {cs.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/case-studies"
              className="text-sm font-bold underline"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.13 42)" }}
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
