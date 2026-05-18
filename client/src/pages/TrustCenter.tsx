import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { breadcrumbSchema, localBusinessSchema, websiteSchema } from "@/components/SchemaMarkup";
import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileText,
  Handshake,
  Phone,
  Scale,
  ShieldCheck,
  Star,
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const proofPoints = [
  {
    icon: BadgeCheck,
    title: "Licensed California Agent",
    body: "Connor Morris is licensed with the California Department of Real Estate, DRE #02219124. That matters in a cash-buyer market where many operators are unlicensed marketers or wholesalers.",
  },
  {
    icon: Building2,
    title: "Direct Buyer, Not a Wholesaler",
    body: "Alder Heritage Homes buys directly and can provide proof of funds. The goal is to close, not control your contract and shop it to someone else.",
  },
  {
    icon: FileText,
    title: "Written Offer and Clear Math",
    body: "You should understand the offer before signing. We explain repair risk, payoff items, closing costs, title issues, and expected net proceeds.",
  },
  {
    icon: Scale,
    title: "Title Company Closing",
    body: "Every sale closes through escrow and a licensed title company. Liens, mortgages, taxes, and ownership issues are handled in the open.",
  },
];

const situations = [
  { label: "Title or deed issue", href: "/sell-house-title-issues-fresno" },
  { label: "Inherited deed not transferred", href: "/sell-inherited-house-deed-not-transferred" },
  { label: "Multiple heirs or co-owner dispute", href: "/sell-house-multiple-heirs-fresno" },
  { label: "Unpaid property taxes", href: "/sell-house-unpaid-property-taxes-fresno" },
  { label: "Tax liens", href: "/sell-house-tax-liens-fresno" },
  { label: "Probate or inherited house", href: "/probate-inherited-homes" },
  { label: "Foreclosure deadline", href: "/foreclosure-help" },
  { label: "Wholesaler second opinion", href: "/dont-get-wholesaled" },
];

const comparison = [
  ["Proof of funds", "Available on request", "Often vague or unavailable"],
  ["Buyer identity", "Alder is the buyer", "May assign contract to another investor"],
  ["Closing path", "Escrow and title company", "Depends on finding an end buyer"],
  ["Offer changes", "Explained before signing", "Risk of last-minute renegotiation"],
  ["License", "CA DRE #02219124", "Often unlicensed"],
];

export default function TrustCenter() {
  return (
    <Layout>
      <PageMeta
        title="Cash Home Buyer Trust Center | Alder Heritage Homes Fresno"
        description="Verify Alder Heritage Homes before selling. Licensed CA agent, direct cash buyer, proof of funds, title-company closings, reviews, and seller protection resources."
        path="/trust-center"
      />
      <SchemaMarkup schema={localBusinessSchema()} id="trust-local-business" />
      <SchemaMarkup schema={websiteSchema()} id="trust-website" />
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.alderheritagehomes.com" },
          { name: "Trust Center", url: "https://www.alderheritagehomes.com/trust-center" },
        ])}
        id="trust-breadcrumb"
      />

      <section className="py-20 md:py-24" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-5 text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <ShieldCheck size={14} /> Seller Verification Center
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.08 }}>
              Verify the Buyer Before You Sign
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "oklch(0.82 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Selling a house for cash in Fresno should not require blind trust. Use this page to verify who you are dealing with, what makes Alder Heritage Homes different, and how to protect yourself from wholesalers, vague offers, and title surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get a Written Offer <ArrowRight size={18} />
                </button>
              </Link>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-white" style={{ border: "1px solid oklch(1 0 0 / 0.25)", background: "oklch(1 0 0 / 0.08)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {proofPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-lg p-6 border shadow-sm" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                  <Icon size={28} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <h2 className="text-xl font-bold mt-4 mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-bold uppercase mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>Direct Buyer Test</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Ask These Questions Before You Sign Any Cash Offer
              </h2>
              <div className="space-y-4">
                {[
                  "Can you show proof of funds before I sign?",
                  "Are you personally buying the house, or assigning the contract?",
                  "Will we close through a licensed local title company?",
                  "Can I review the purchase agreement with an attorney or advisor?",
                  "What exact items will reduce my net proceeds at closing?",
                ].map((question) => (
                  <div key={question} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0" size={20} style={{ color: "oklch(0.42 0.08 155)" }} />
                    <p className="font-semibold" style={{ color: "oklch(0.28 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{question}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border" style={{ borderColor: "oklch(0.86 0.02 85)" }}>
              <div className="grid grid-cols-3 text-sm font-bold" style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <div className="p-4">Check</div>
                <div className="p-4">Alder</div>
                <div className="p-4">Wholesaler Risk</div>
              </div>
              {comparison.map(([check, alder, risk]) => (
                <div key={check} className="grid grid-cols-3 border-t text-sm" style={{ borderColor: "oklch(0.90 0.01 85)" }}>
                  <div className="p-4 font-bold" style={{ color: "oklch(0.22 0.01 60)" }}>{check}</div>
                  <div className="p-4" style={{ color: "oklch(0.30 0.08 155)" }}>{alder}</div>
                  <div className="p-4" style={{ color: "oklch(0.48 0.12 35)" }}>{risk}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold uppercase mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>Problem-Specific Proof</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Complicated Houses Need a Buyer Who Understands the Problem
            </h2>
            <p className="leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A generic cash offer is not enough when title, probate, liens, taxes, repairs, tenants, or family disputes are involved. These are the situations where process matters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {situations.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="group flex items-center justify-between gap-4 rounded-lg bg-white border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" style={{ borderColor: "oklch(0.88 0.02 85)", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <span className="font-bold">{item.label}</span>
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" style={{ color: "oklch(0.55 0.13 42)" }} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                What a Clean Cash Sale Should Feel Like
              </h2>
              <div className="space-y-5">
                {[
                  ["1", "You get a real conversation", "Alder reviews the property, situation, title concerns, timeline, and your goals before throwing out a number."],
                  ["2", "You get the offer in writing", "The offer should be easy to understand, with a closing timeline and any assumptions clearly stated."],
                  ["3", "Title and escrow verify the details", "Mortgage payoffs, liens, taxes, ownership authority, and closing documents are handled through professional escrow."],
                  ["4", "You close when the file is ready", "Fast closings are possible, but clean closings matter more. Complicated title issues close when they can legally transfer."],
                ].map(([step, title, body]) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>{step}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{title}</h3>
                      <p className="leading-relaxed" style={{ color: "oklch(0.42 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg p-7 text-white" style={{ background: "oklch(0.22 0.01 60)" }}>
              <Star size={28} fill="oklch(0.75 0.15 60)" stroke="oklch(0.75 0.15 60)" />
              <h3 className="text-2xl font-bold mt-4 mb-3" style={{ fontFamily: "'Lora', serif" }}>Trust Is Built Before Closing</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                If another buyer is pressuring you to sign quickly, refusing proof of funds, or dodging title questions, get a second opinion before you commit.
              </p>
              <Link href="/second-opinion">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get a Second Opinion <Handshake size={17} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
