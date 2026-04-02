import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, Shield, Award, Heart, CheckCircle2 } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const VIDEO_CONNOR_INTRO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/CMoAdv24_ddcde10d.MP4";
const HANDSHAKE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HANDSHAKE_IMG} alt="Alder Heritage Homes team" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "oklch(0.22 0.01 60 / 0.85)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif" }}>
            The Ethical Cash Home Buyer<br />in Fresno's Central Valley
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.80 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            We're not a wholesaler. We're not a hedge fund. We're a licensed California real estate agent who actually buys your home — fairly, transparently, and on your timeline.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono-label" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
                Our Story
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Built on Honesty in a Business Known for the Opposite
              </h2>
              <div className="space-y-5 text-lg leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <p>
                  Alder Heritage Homes was founded with a simple belief: homeowners in difficult situations deserve honest, transparent help — not predatory tactics or lowball offers from anonymous investors.
                </p>
                <p>
                  The "we buy houses" industry has a reputation problem. Too many companies are unlicensed wholesalers who lock you into a contract, then assign it to another buyer for a profit — without you knowing. They pressure you to sign fast, offer less than your home is worth, and disappear when problems arise.
                </p>
                <p>
                  We operate differently. As a licensed California real estate agent (DRE #02219124), we're held to a higher legal and ethical standard. We buy homes directly — no middlemen, no contract flipping. We explain every step of the process, answer every question honestly, and never pressure you to accept an offer.
                </p>
                <p>
                  With 100+ transactions completed in Fresno and the Central Valley — including over 100 probate sales — we have the experience to handle even the most complex situations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={HANDSHAKE_IMG} alt="Connor at Alder Heritage Homes" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl max-w-xs" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={24} style={{ color: "oklch(0.55 0.13 42)" }} />
                  <div>
                    <div className="font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Licensed &amp; Accountable</div>
                    <div className="text-xs" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.50 0.02 60)" }}>CA DRE #02219124</div>
                  </div>
                </div>
                <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Unlike unlicensed wholesalers, we're regulated by the California Department of Real Estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 85)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={32} />,
                title: "Compassion First",
                desc: "We understand that selling your home — especially under financial stress — is one of the hardest things you'll do. We approach every conversation with empathy and patience.",
              },
              {
                icon: <Shield size={32} />,
                title: "Full Transparency",
                desc: "We explain exactly how we calculate our offer, what happens at closing, and what you'll walk away with. No hidden fees, no surprises, no fine print.",
              },
              {
                icon: <Award size={32} />,
                title: "Real Expertise",
                desc: "100+ probate sales. Experience with foreclosure, short sales, multiple liens, and complex estates. We've seen it all and know how to navigate it.",
              },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-2xl text-center" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.55 0.13 42)" }}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Our Credentials
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Licensed California Real Estate Agent — DRE #02219124",
              "100+ probate and estate sales completed",
              "Serving Fresno and the Central Valley since founding",
              "Experience with foreclosure, short sales, and multiple liens",
              "Rent-back / holdback program available",
              "Member of local real estate community",
              "All transactions handled by licensed title companies",
              "No wholesaling — we buy directly",
            ].map((c) => (
              <div key={c} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.13 42)" }} />
                <span className="text-sm font-medium" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connor's Intro Video — subtle, non-pushy */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 12px 40px oklch(0.22 0.01 60 / 0.12)" }}>
                <video
                  controls
                  preload="metadata"
                  className="w-full block"
                  style={{ borderRadius: "1rem" }}
                  aria-label="Connor Morris introduces Alder Heritage Homes"
                >
                  <source src={VIDEO_CONNOR_INTRO} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                  A Message From Connor
                </span>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", lineHeight: 1.3 }}>
                  Do You Have a House in Fresno You Need to Sell?
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Whether you're dealing with an inherited home, facing foreclosure, going through a divorce, or simply ready to move on — Connor understands. Watch this short message to hear how Alder Heritage Homes can help.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <Heart size={20} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                  <p className="text-sm" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    No pressure, no obligation. Just an honest conversation about your options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.28 0.05 155)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Work With Someone You Can Trust?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.80 0.02 155)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call us for a free, no-obligation conversation. We'll listen to your situation and give you honest advice — even if that means telling you a cash sale isn't your best option.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Free Cash Offer <ArrowRight size={20} />
              </button>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(1 0 0 / 0.1)", border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
