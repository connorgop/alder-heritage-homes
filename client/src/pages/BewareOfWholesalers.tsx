import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { AlertTriangle, ArrowRight, CheckCircle2, FileSearch, Phone } from "lucide-react";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const warningSigns = [
  "The contract says the buyer can assign the agreement to someone else.",
  "The buyer cannot provide proof of funds from the entity that will close.",
  "The buyer gives a strong phone offer, then lowers it after tying up the property.",
  "The buyer avoids naming the escrow/title company or closing entity.",
  "The buyer wants a long inspection period but says you should stop taking other calls.",
  "The buyer cannot explain what happens if title, probate, liens, or tenants create delays.",
];

const questions = [
  "Are you the end buyer, or can this contract be assigned?",
  "What legal entity will appear in escrow?",
  "Can you send proof of funds today?",
  "Who pays title, escrow, liens, taxes, repairs, and closing costs?",
  "Can the offer change after inspection?",
  "What happens if title is clouded or heirs need to sign?",
];

export default function BewareOfWholesalers() {
  const { trackPhoneClick } = useConversionTracking();

  return (
    <Layout>
      <PageMeta
        title="Beware of Wholesalers in Fresno CA"
        description="Before you sign with any cash home buyer in Fresno, learn how assignment contracts, proof of funds, inspection periods, and title issues can affect your net offer."
        path="/beware-of-wholesalers-fresno"
      />

      <section className="py-20" style={{ background: "oklch(0.18 0.02 60)" }}>
        <div className="container max-w-5xl">
          <p className="mb-4 text-xs font-bold uppercase" style={{ color: "oklch(0.72 0.15 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
            Seller protection checklist
          </p>
          <h1 className="mb-5 max-w-3xl text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "'Lora', serif", lineHeight: 1.1 }}>
            Beware of Wholesaler Contracts Before Selling Your Fresno House
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed" style={{ color: "oklch(0.82 0.02 75)", fontFamily: "'Nunito Sans', sans-serif" }}>
            A wholesaler is not always bad. Some close cleanly. The risk is signing a contract without knowing whether the person across the table is the end buyer, has funds, and can solve title problems if the file gets complicated.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Review My Offer <ArrowRight size={18} />
              </button>
            </Link>
            <a
              href={PHONE_HREF}
              onClick={trackPhoneClick}
              className="inline-flex items-center justify-center gap-2 rounded-lg border px-7 py-4 font-bold text-white"
              style={{ borderColor: "oklch(1 0 0 / 0.28)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border bg-white p-6" style={{ borderColor: "oklch(0.88 0.02 70)" }}>
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle size={22} style={{ color: "oklch(0.58 0.16 42)" }} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Warning Signs</h2>
              </div>
              <div className="space-y-4">
                {warningSigns.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.34 0.01 60)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6" style={{ borderColor: "oklch(0.88 0.02 70)" }}>
              <div className="mb-4 flex items-center gap-2">
                <FileSearch size={22} style={{ color: "oklch(0.58 0.16 42)" }} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Questions To Ask</h2>
              </div>
              <div className="space-y-4">
                {questions.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.34 0.01 60)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-lg border bg-white p-6" style={{ borderColor: "oklch(0.88 0.02 70)" }}>
            <h2 className="mb-4 text-2xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why This Matters More With Probate, Title, And Deed Issues</h2>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.34 0.01 60)" }}>
              Simple houses can close with many buyers. Complicated houses are different. If there are multiple heirs, an old deed problem, unpaid taxes, liens, tenant issues, a foreclosure deadline, or a clouded title, the buyer needs more than marketing. They need patience, escrow coordination, and a real plan.
            </p>
            <p className="leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.34 0.01 60)" }}>
              Alder Heritage Homes focuses on those files. We can often help sellers work through deed and title issues with escrow, title, and the right professionals before closing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Have an Offer Already?</h2>
          <p className="mx-auto mb-7 max-w-2xl leading-relaxed" style={{ color: "oklch(0.82 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Send the address and the written terms. Connor will compare the net, closing timeline, assignment language, proof of funds, and title risk before you decide.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get a Second Opinion <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
