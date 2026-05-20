import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { Phone, ArrowRight, CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { useConversionTracking } from "@/hooks/useConversionTracking";

type CompetitorInterceptPageProps = {
  competitor: string;
  slug: string;
  competitorPositioning: string;
  bestFor: string[];
  compareNotes: string[];
  localAngle: string;
};

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

export default function CompetitorInterceptPage({
  competitor,
  slug,
  competitorPositioning,
  bestFor,
  compareNotes,
  localAngle,
}: CompetitorInterceptPageProps) {
  const { trackPhoneClick } = useConversionTracking();

  return (
    <Layout>
      <PageMeta
        title={`Alder vs ${competitor} in Fresno CA`}
        description={`Compare Alder Heritage Homes vs ${competitor} before selling a Fresno or Central Valley house for cash. Direct buyer, local proof, no repairs, no commissions.`}
        path={slug}
      />

      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-5xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase" style={{ color: "oklch(0.70 0.13 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
              Cash buyer comparison
            </p>
            <h1 className="mb-5 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "'Lora', serif", lineHeight: 1.12 }}>
              Alder Heritage Homes vs {competitor}
            </h1>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "oklch(0.82 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              If you are comparing cash home buyers in Fresno or the Central Valley, do not just compare the headline offer. Compare who is actually buying, how they prove funds, what happens if title gets complicated, and whether they can close on your timeline.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Compare My Offer <ArrowRight size={18} />
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
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6" style={{ borderColor: "oklch(0.88 0.02 70)" }}>
              <div className="mb-3 flex items-center gap-2">
                <Search size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{competitor}</h2>
              </div>
              <p className="leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.36 0.01 60)" }}>
                {competitorPositioning}
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6" style={{ borderColor: "oklch(0.88 0.02 70)" }}>
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Alder Heritage Homes</h2>
              </div>
              <p className="leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.36 0.01 60)" }}>
                Alder is built for complicated local seller situations: probate, foreclosure timing, deed/title issues, unpaid taxes, tenant problems, repairs, and homes that normal financed buyers struggle to close on.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-lg border bg-white p-6" style={{ borderColor: "oklch(0.88 0.02 70)" }}>
            <h2 className="mb-5 text-2xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>What To Compare Before You Sign</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {compareNotes.map((note) => (
                <div key={note} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.34 0.01 60)" }}>{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>When {competitor} May Be Worth Calling</h2>
              <ul className="space-y-3">
                {bestFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.34 0.01 60)" }}>
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "oklch(0.55 0.13 42)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Where Alder Tries To Win</h2>
              <p className="mb-4 leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.34 0.01 60)" }}>
                {localAngle}
              </p>
              <p className="leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.34 0.01 60)" }}>
                Bring us any written offer. We will review the numbers, timeline, contingencies, proof of funds, and title requirements so you can compare the real net result, not just the largest headline number.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Before You Sign, Get a Second Opinion</h2>
          <p className="mx-auto mb-7 max-w-2xl leading-relaxed" style={{ color: "oklch(0.82 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Send the property address and any written offer you already have. Connor will help you compare cash offer terms, not just price.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Get My Second Opinion <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
