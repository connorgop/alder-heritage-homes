import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { breadcrumbSchema } from "@/components/SchemaMarkup";
import { Link } from "wouter";
import { AlertTriangle, ArrowRight, CheckCircle2, FileText, Phone, ShieldCheck } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const checks = [
  "Ask for proof of funds before signing.",
  "Confirm the buyer is not assigning your contract to someone else.",
  "Close through a licensed title company or escrow company.",
  "Get the offer, closing timeline, and seller costs in writing.",
  "Ask what happens if title shows liens, taxes, old loans, or missing signatures.",
  "Do not sign under pressure. A serious buyer should let you review the contract.",
  "Watch for large inspection periods that let the buyer renegotiate later.",
  "Ask whose name will be on the purchase contract and closing documents.",
];

export default function SellerProtectionChecklist() {
  return (
    <Layout>
      <PageMeta
        title="Cash Buyer Seller Protection Checklist Fresno"
        description="Before signing a cash offer in Fresno, verify proof of funds, title-company closing, contract terms, assignment language, and seller net proceeds."
        path="/seller-protection-checklist"
      />
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.alderheritagehomes.com" },
          { name: "Seller Protection Checklist", url: "https://www.alderheritagehomes.com/seller-protection-checklist" },
        ])}
        id="seller-protection-breadcrumb"
      />

      <section className="py-20 md:py-24" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-5 text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <ShieldCheck size={14} /> Seller Protection
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.08 }}>
              Before You Sign a Cash Offer, Check These 8 Things
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "oklch(0.82 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              A real cash sale should be clear before escrow opens. Use this checklist to compare buyers, avoid wholesaler traps, and understand what will actually happen at closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Get a Second Offer <ArrowRight size={18} />
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
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="grid gap-4">
                {checks.map((check, index) => (
                  <div key={check} className="bg-white rounded-lg border p-5 flex gap-4 shadow-sm" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)" }}>{index + 1}</div>
                    <div>
                      <h2 className="font-bold text-lg mb-1" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{check}</h2>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        If the buyer avoids this question, slow down. Confusion before signing usually becomes stress before closing.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-lg p-6 text-white" style={{ background: "oklch(0.22 0.01 60)" }}>
                <AlertTriangle size={28} style={{ color: "oklch(0.75 0.15 60)" }} />
                <h2 className="text-2xl font-bold mt-4 mb-3" style={{ fontFamily: "'Lora', serif" }}>Red Flag</h2>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  If a buyer says proof of funds is private, asks you to sign immediately, or uses "and/or assigns" without explaining it, get another opinion.
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 shadow-sm" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                <FileText size={28} style={{ color: "oklch(0.55 0.13 42)" }} />
                <h2 className="text-2xl font-bold mt-4 mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Alder's Standard</h2>
                <ul className="space-y-3">
                  {["Written offer", "Proof of funds", "Title-company closing", "Licensed CA agent", "Direct buyer, not a wholesaler"].map((item) => (
                    <li key={item} className="flex gap-2 text-sm font-semibold" style={{ color: "oklch(0.36 0.01 60)" }}>
                      <CheckCircle2 size={16} style={{ color: "oklch(0.42 0.08 155)" }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/trust-center">
                <a className="block rounded-lg p-5 font-bold text-white text-center" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Visit the Trust Center
                </a>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
