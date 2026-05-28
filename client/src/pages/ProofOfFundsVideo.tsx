import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";

const VIDEO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-ad-video_ba6eba0e.mp4";
const POSTER_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/alder-yard-sign_ffeaeadb.webp";
const CANONICAL_PATH = "/watch/proof-of-funds-fresno";

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Proof of Funds: How to Verify a Real Fresno Cash Home Buyer",
  description:
    "Connor Morris explains how Fresno homeowners can verify proof of funds, avoid wholesalers, and confirm they are working with a direct cash buyer before signing a cash sale contract.",
  thumbnailUrl: [POSTER_URL],
  uploadDate: "2026-05-28",
  duration: "PT1M2S",
  contentUrl: VIDEO_URL,
  embedUrl: "https://www.alderheritagehomes.com/watch/proof-of-funds-fresno",
  url: "https://www.alderheritagehomes.com/watch/proof-of-funds-fresno",
  publisher: {
    "@type": "Organization",
    name: "Alder Heritage Homes",
    url: "https://www.alderheritagehomes.com",
  },
  creator: {
    "@type": "Person",
    name: "Connor Morris",
    jobTitle: "Licensed California Real Estate Agent",
  },
  inLanguage: "en-US",
  isFamilyFriendly: true,
};

export default function ProofOfFundsVideo() {
  const { trackPhoneClick } = useConversionTracking();
  const phone = useTrackingPhone();

  return (
    <Layout>
      <PageMeta
        title="Proof of Funds Video | Real Fresno Cash Home Buyer"
        description="Watch Connor Morris explain how to verify proof of funds, avoid wholesalers, and confirm you are working with a direct Fresno cash home buyer."
        path={CANONICAL_PATH}
      />
      <SchemaMarkup schema={videoSchema} id="proof-of-funds-video" />

      <main style={{ background: "oklch(0.97 0.015 85)" }}>
        <section className="py-10 md:py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
          <div className="container">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
              Proof of Funds Video
            </div>
            <h1 className="max-w-4xl text-3xl font-black leading-tight text-white md:text-5xl" style={{ fontFamily: "'Lora', serif" }}>
              How to Verify a Real Fresno Cash Home Buyer Before You Sign
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed" style={{ color: "oklch(0.82 0.01 60)" }}>
              Connor Morris explains the proof-of-funds check sellers should make before accepting a cash offer.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="container grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            <article>
              <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
                <video
                  src={VIDEO_URL}
                  poster={POSTER_URL}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full"
                />
              </div>

              <div className="mt-8 rounded-2xl border bg-white p-6" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                <h2 className="mb-4 text-2xl font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                  What this video covers
                </h2>
                <ul className="space-y-3">
                  {[
                    "Ask for proof of funds before signing a cash purchase agreement.",
                    "Watch for assignment language that can signal a wholesaler instead of a direct buyer.",
                    "Confirm the buyer is licensed, local, and willing to close through escrow.",
                    "Get the offer, timeline, and any conditions in writing before you decide.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "oklch(0.34 0.01 60)" }}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="h-fit rounded-2xl p-6 text-white" style={{ background: "oklch(0.28 0.05 155)" }}>
              <ShieldCheck className="mb-4 h-9 w-9" style={{ color: "oklch(0.75 0.12 42)" }} />
              <h2 className="mb-3 text-xl font-bold" style={{ fontFamily: "'Lora', serif" }}>Direct Buyer, Not a Wholesaler</h2>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "oklch(0.82 0.02 155)" }}>
                Alder Heritage Homes buys directly with proof of funds. No assignment contract. No middleman.
              </p>
              <a href={phone.href} onClick={trackPhoneClick} className="mb-3 flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
                <Phone size={16} /> {phone.label}
              </a>
              <Link href="/contact">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold" style={{ background: "white", color: "oklch(0.22 0.01 60)" }}>
                  Get a Cash Offer <ArrowRight size={16} />
                </button>
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  );
}
