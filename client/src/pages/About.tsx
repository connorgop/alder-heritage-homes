import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, ArrowRight, Shield, Award, Heart, CheckCircle2 } from "lucide-react";
import SchemaMarkup, { personSchema } from "@/components/SchemaMarkup";
import PageMeta from "@/components/PageMeta";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const VIDEO_CONNOR_OLD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/CMoAdv23_1c0c77d4.MP4";
const VIDEO_CONNOR_NEW = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-video-ad_9ad5ae32.mp4";
const VIDEO_CONNOR_THUMB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-video-thumbnail_9ed7fde4.jpg";
const HANDSHAKE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp";
const CONNOR_CLIENT_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-side_d912ee39.webp";
const CONNOR_HUG_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-hug_80f9b3b4.webp";
const HAZMAT_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-hazmat-team-clovis_6f37d7da.webp";
const ILLINOIS_FLIP_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/illinois-ave-flip-fresno_924b59f9.mov";

export default function About() {
  return (
    <Layout>
      <PageMeta
        title="About Connor Morris — Licensed CA Agent & Cash Home Buyer Fresno"
        description="Connor Morris is a licensed California real estate agent (DRE #02219124) and founder of Alder Heritage Homes. A real buyer — not a wholesaler. Serving Fresno and the Central Valley."
        path="/about"
      />
      {/* Person structured data for Connor */}
      <SchemaMarkup schema={personSchema()} id="person-connor" />
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
            Fresno's Honest Cash Home Buyer
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
                  With 700+ homes purchased since 2008 across our group of entities — including 103 purchases from 2023–2026 alone — we have the experience to handle even the most complex situations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "3px solid oklch(0.55 0.13 42)", aspectRatio: "4/5" }}>
                <img src={CONNOR_CLIENT_PHOTO} alt="Connor Morris with the seller after the Clovis home renovation" className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
              </div>
              <div className="absolute -bottom-5 -right-4 px-5 py-3 rounded-xl shadow-xl" style={{ background: "oklch(0.55 0.13 42)", border: "2px solid white" }}>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Lora', serif" }}>Connor &amp; the Seller — After Renovation</div>
                <div className="text-xs mt-0.5" style={{ color: "oklch(0.92 0.04 85)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>Clovis, CA · Inherited Murder Home</div>
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
                desc: "700+ homes purchased since 2008. Experience with foreclosure, short sales, multiple liens, and complex estates. We've seen it all and know how to navigate it.",
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

      {/* Real Deals Section */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.75 0.10 42)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Proof of Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Properties Nobody Else Would Buy</h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>These are real transactions. Real properties. Real sellers who needed a real buyer.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Clovis deal */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
              <div className="p-5" style={{ background: "oklch(0.55 0.13 42)" }}>
                <div className="text-xs font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.92 0.04 85)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Clovis, CA · $200,000 Cash</div>
                <div className="text-lg font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Inherited Murder Home · 2-Year Squatter · Full Renovation</div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>A mother inherited her daughter's home after her daughter was murdered by her husband. The murderer's mother had been squatting there for 2 years. The seller couldn't bring herself to visit. We handled everything — eviction, hazmat cleanup, full renovation — and she saw the finished home for the first time at closing.</p>
                {/* Before/After photo grid */}
                <div className="grid grid-cols-2 gap-2 mb-4 rounded-xl overflow-hidden">
                  <div className="relative" style={{ aspectRatio: "4/3" }}>
                    <img src={HAZMAT_PHOTO} alt="Connor and team in hazmat suits before entering the Clovis property" className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
                    <div className="absolute bottom-0 left-0 right-0 px-2 py-1 text-xs font-bold" style={{ background: "oklch(0.22 0.01 60 / 0.85)", color: "white", fontFamily: "'DM Mono', monospace" }}>Day 1 — Hazmat Entry</div>
                  </div>
                  <div className="relative" style={{ aspectRatio: "4/3" }}>
                    <img src={CONNOR_HUG_PHOTO} alt="Connor hugging the seller after seeing the renovated Clovis home" className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
                    <div className="absolute bottom-0 left-0 right-0 px-2 py-1 text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.9)", color: "white", fontFamily: "'DM Mono', monospace" }}>After — Seller Sees Renovation</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Murder scene", "2-yr squatter", "No utilities", "Full of trash", "Hazmat cleanup", "Full renovation"].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ background: "oklch(0.55 0.13 42 / 0.2)", color: "oklch(0.85 0.06 75)", fontFamily: "'DM Mono', monospace" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Illinois Ave deal */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
              <div className="p-5" style={{ background: "oklch(0.28 0.05 155)" }}>
                <div className="text-xs font-bold mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.80 0.03 155)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Illinois Ave · Fresno, CA</div>
                <div className="text-lg font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>5 Break-Ins · Bed Bugs · Rats · Full Flip</div>
              </div>
              <div className="p-5">
                <div className="rounded-xl overflow-hidden mb-3" style={{ aspectRatio: "16/9" }}>
                  <video controls playsInline preload="metadata" className="w-full h-full object-cover" style={{ background: "oklch(0.15 0.01 60)" }}>
                    <source src={ILLINOIS_FLIP_VIDEO} type="video/mp4" />
                  </video>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["5 break-ins", "Vandalism", "Bed bugs", "Cockroaches", "Rats", "Full flip"].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ background: "oklch(0.28 0.05 155 / 0.3)", color: "oklch(0.80 0.03 155)", fontFamily: "'DM Mono', monospace" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
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
              "700+ homes purchased since 2008 across all entities",
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

      {/* Connor's Latest Video — CMoAdv24 (primary) */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "9/16", width: "100%", maxWidth: "320px", background: "oklch(0.10 0.01 60)" }}
                >
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={VIDEO_CONNOR_THUMB}
                    className="w-full h-full object-contain"
                    aria-label="Connor Morris — Alder Heritage Homes introduction (2024)"
                    style={{ borderRadius: "1rem" }}
                  >
                    <source src={VIDEO_CONNOR_NEW} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                  A Message From Connor
                </span>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", lineHeight: 1.3 }}>
                  Do You Have a House in Fresno You Need to Sell?
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Whether you're dealing with an inherited home, facing foreclosure, going through a divorce, or simply ready to move on — Connor understands. Watch this 45-second message to hear how Alder Heritage Homes can help.
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

      {/* Connor's Earlier Video — CMoAdv23 (secondary) */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                  More From Connor
                </span>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)", lineHeight: 1.3 }}>
                  How We Help Homeowners in Tough Situations
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  In this earlier video, Connor explains the situations we handle most often — from inherited properties and probate complications to foreclosure prevention and homes that need major repairs. Every situation is different, and we treat it that way.
                </p>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Phone size={18} /> Call Connor: {PHONE}
                </a>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                  style={{ aspectRatio: "9/16", width: "100%", maxWidth: "280px", background: "oklch(0.10 0.01 60)" }}
                >
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                    aria-label="Connor Morris — earlier introduction video"
                    style={{ borderRadius: "1rem" }}
                  >
                    <source src={VIDEO_CONNOR_OLD} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
