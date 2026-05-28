import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export type ProofAsset = {
  label: string;
  result: string;
  situation: string;
  href: string;
};

export const highIntentProofAssets: ProofAsset[] = [
  {
    label: "Squatters + vacant risk",
    result: "Seller walked away clean after a post-close break-in and flood",
    situation: "811 N Roosevelt Ave, Fresno",
    href: "/case-studies/811-n-roosevelt-fresno",
  },
  {
    label: "Probate + squatters",
    result: "$225K cash purchase with no normal comparable sales available",
    situation: "Hurley property, Visalia",
    href: "/case-studies/hurley-property-visalia",
  },
  {
    label: "Tired landlord portfolio",
    result: "4 rentals bought in one close after two buyers failed",
    situation: "4-property Fresno portfolio",
    href: "/case-studies/4-property-landlord-portfolio-fresno",
  },
  {
    label: "Title / wholesaler risk",
    result: "Seller received $15K more from a direct buyer",
    situation: "Inherited Tulare rental",
    href: "/case-studies/tulare-st-tulare-ca",
  },
  {
    label: "Foreclosure + hoarder home",
    result: "Closed before the bank could act and helped with the move",
    situation: "1648 Purvis Ave, Clovis",
    href: "/case-studies/1648-purvis-ave-clovis",
  },
];

export default function ProofAssets({ assets = highIntentProofAssets }: { assets?: ProofAsset[] }) {
  return (
    <section className="py-14" style={{ background: "oklch(0.97 0.015 85)" }}>
      <div className="container">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest mb-2" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
            Real proof
          </p>
          <h2 className="text-3xl font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
            Short proof assets from closed Central Valley deals
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {assets.map((asset) => (
            <Link key={asset.href} href={asset.href}>
              <article className="h-full rounded-2xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "oklch(0.55 0.13 42 / 0.12)" }}>
                  <CheckCircle2 size={18} style={{ color: "oklch(0.55 0.13 42)" }} />
                </div>
                <h3 className="mb-2 text-sm font-black" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {asset.label}
                </h3>
                <p className="mb-3 text-sm leading-relaxed" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {asset.result}
                </p>
                <p className="mb-4 text-xs font-bold uppercase tracking-wide" style={{ color: "oklch(0.48 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                  {asset.situation}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold" style={{ color: "oklch(0.55 0.13 42)" }}>
                  View proof <ArrowRight size={13} />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
