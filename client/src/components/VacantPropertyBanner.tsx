/* VacantPropertyBanner — Urgent callout for vacant/inherited/probate pages
   Embed this on: ProbateHomes, ForeclosureHelp, BehindOnMortgage, city pages */
import { Link } from "wouter";
import { AlertTriangle, Phone, ArrowRight } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

export default function VacantPropertyBanner() {
  return (
    <div
      className="rounded-2xl p-6 my-8"
      style={{
        background: "oklch(0.18 0.04 25)",
        border: "2px solid oklch(0.55 0.22 25 / 0.5)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "oklch(0.55 0.22 25 / 0.25)" }}
        >
          <AlertTriangle size={24} style={{ color: "oklch(0.78 0.18 42)" }} />
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="font-bold text-base mb-1"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "oklch(0.88 0.08 42)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontSize: "0.75rem",
            }}
          >
            ⚠ Urgent — Vacant Property Warning
          </p>
          <h3
            className="text-lg font-bold text-white mb-2"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Is the Home Sitting Vacant? Call Me Now.
          </h3>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Vacant homes in Fresno and the Central Valley get broken into fast — doors, windows, and crawl spaces under raised foundations. I will help you secure it or connect you with someone who can board it up and re-key every access point the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-white text-sm"
              style={{ background: "oklch(0.55 0.22 25)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={15} /> Call Now: {PHONE}
            </a>
            <Link href="/vacant-property-warning">
              <button
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.2)",
                  color: "oklch(0.82 0.01 60)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                See All Vacant Property Risks <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
