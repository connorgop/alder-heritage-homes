/* ============================================================
   CONNOR'S MANIFESTO — "Why I'm Here"
   Satirical, honest, and personal. Exposes wholesaler tactics
   with humor while establishing Connor's WHY and mission to
   clean up real estate in the Central Valley.
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, AlertTriangle, Scale, Heart, Shield, ChevronDown } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

export default function ConnorManifesto() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "oklch(0.97 0.015 85)" }}>
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header badge */}
        <div className="text-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: "oklch(0.577 0.245 27.325 / 0.1)", color: "oklch(0.577 0.245 27.325)", fontFamily: "'DM Mono', monospace" }}
          >
            <AlertTriangle size={14} /> An Honest Rant From Connor
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-3 leading-tight"
          style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}
        >
          The Dirty Secret Behind Every<br />
          <span style={{ color: "oklch(0.577 0.245 27.325)" }}>"We Buy Houses"</span> Commercial
        </h2>
        <p className="text-center text-sm mb-10" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
          A message I wish someone told every homeowner in Fresno
        </p>

        {/* The manifesto card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 4px 24px oklch(0 0 0 / 0.06)" }}
        >
          {/* Red alert bar */}
          <div className="px-6 py-3 flex items-center gap-3" style={{ background: "oklch(0.577 0.245 27.325 / 0.08)", borderBottom: "1px solid oklch(0.577 0.245 27.325 / 0.15)" }}>
            <span className="text-lg">📺</span>
            <p className="text-sm font-bold" style={{ color: "oklch(0.40 0.15 27)", fontFamily: "'Nunito Sans', sans-serif" }}>
              If they can afford TV commercials, radio ads, and billboards... who do you think is paying for all that?
            </p>
          </div>

          <div className="p-6 md:p-8">
            {/* Opening hook */}
            <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              You've seen the commercials. You've heard the radio ads. <strong>"We buy houses! Any condition! Cash in 7 days!"</strong> They sound great. They sound like real buyers. They're not.
            </p>

            <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              The vast majority of companies running heavy advertising — TV, radio, mailers, Google Ads — are <strong>wholesalers</strong>. They don't actually buy your home. They get you to sign a contract, then they shop that contract around to find a <em>real</em> buyer (like me) who will actually close. They're middlemen wearing a buyer costume.
            </p>

            {/* The play-by-play */}
            <div className="rounded-xl p-5 mb-6" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "oklch(0.577 0.245 27.325)", fontFamily: "'DM Mono', monospace" }}>
                🎭 Here's How the Scam Works — Every Single Time
              </p>
              <div className="space-y-3">
                {[
                  { day: "Day 1", text: "They show up fast, seem eager, and get you to sign a contract. You think you just sold your house." },
                  { day: "Day 2–9", text: "Behind the scenes, they're blasting your address to every investor in California. \"Off-market deal! Who wants it?\" My email and phone get spammed with these daily." },
                  { day: "Day 10", text: "They \"discover\" something during the inspection period. Suddenly your home is worth less. They hit you with a price reduction — $10K, $20K, sometimes $50K less than what you signed." },
                  { day: "Day 14+", text: "You're stuck. You've already mentally moved on. You've told your family the house is sold. So you accept the lower price. Or they just cancel and you've wasted weeks." },
                ].map((step) => (
                  <div key={step.day} className="flex gap-3">
                    <span className="flex-shrink-0 px-2 py-0.5 rounded-md text-xs font-bold h-fit" style={{ background: "oklch(0.577 0.245 27.325 / 0.12)", color: "oklch(0.40 0.15 27)", fontFamily: "'DM Mono', monospace" }}>
                      {step.day}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              This isn't a conspiracy theory. <strong>This is my Tuesday.</strong> I get emails and texts every single day from wholesalers trying to sell me contracts on homes they don't own. They call them "off-market opportunities." I call them someone else's problem that they created.
            </p>

            {/* Why I always win on price */}
            <div className="rounded-xl p-5 mb-6" style={{ background: "oklch(0.28 0.05 155 / 0.06)", border: "1px solid oklch(0.28 0.05 155 / 0.12)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Scale size={18} style={{ color: "oklch(0.28 0.05 155)" }} />
                <p className="text-sm font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                  Why I Will Always Beat Their Offer
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                It's simple math. A wholesaler needs to buy your house cheap enough to mark it up and still attract a real buyer. That markup is usually <strong>$15,000–$40,000</strong>. That's money coming out of <em>your</em> pocket. When you sell directly to me, that middleman fee disappears. I can pay you more because there's no one else taking a cut. Every time I compete with a local wholesaler on price, I win. Every single time. And it's not even close.
              </p>
            </div>

            {/* Expandable deeper content */}
            <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
              {/* The AI confession */}
              <div className="rounded-xl p-5 mb-6" style={{ background: "oklch(0.55 0.13 42 / 0.06)", border: "1px solid oklch(0.55 0.13 42 / 0.12)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                  🤖 A Confession About This Website
                </p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  I used AI to build this website. It was essentially free. You know what's not free? TV commercials. Radio spots. Mailers. Billboard rentals. Those companies spending $20,000–$50,000+ per month on advertising have to make that money back somehow. They measure KPIs, track cost-per-lead, and need quick returns — which forces them to wholesale. They <em>can't</em> pay you a fair price because their overhead won't allow it.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  I don't have that problem. My overhead is low. My crew is in-house. My money is my own. Which means every dollar I save on marketing is a dollar I can put toward <em>your</em> offer.
                </p>
              </div>

              {/* States cracking down */}
              <div className="rounded-xl p-5 mb-6" style={{ background: "oklch(0.97 0.015 85)", border: "1px solid oklch(0.90 0.02 85)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} style={{ color: "oklch(0.28 0.05 155)" }} />
                  <p className="text-sm font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                    States Are Banning This. California Should Be Next.
                  </p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  This isn't just my opinion — lawmakers across the country are catching on. In 2025 alone, <strong>five states</strong> passed new laws cracking down on predatory wholesaling:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 mb-3">
                  {[
                    { state: "Oklahoma", law: "Predatory Real Estate Wholesaler Prohibition Act — wholesalers must disclose intent, homeowners get a 2-day cancellation right" },
                    { state: "Connecticut", law: "Wholesalers must register with the state, sellers get 3-day cancellation window" },
                    { state: "Maryland", law: "Must disclose intent to assign — seller can cancel without penalty if not disclosed" },
                    { state: "Tennessee", law: "Mandatory disclosure of intent to assign or sell equitable interest" },
                  ].map((item) => (
                    <div key={item.state} className="p-3 rounded-lg" style={{ background: "white", border: "1px solid oklch(0.90 0.02 85)" }}>
                      <p className="text-xs font-bold mb-1" style={{ color: "oklch(0.28 0.05 155)", fontFamily: "'DM Mono', monospace" }}>{item.state}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.law}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Illinois and Nebraska are making assignments illegal or requiring a license to do even one. North Dakota expanded restrictions to all real estate, not just residential. The trend is clear. I believe California should follow — and until it does, I'm going to keep calling it out.
                </p>
              </div>

              {/* Connor's WHY */}
              <div className="rounded-xl p-5 mb-6" style={{ background: "oklch(0.22 0.01 60)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={18} style={{ color: "oklch(0.75 0.12 42)" }} />
                  <p className="text-base font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>
                    Why I Do This
                  </p>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  For most Americans, their home is their savings account. It's where they build wealth. It's where they raised their kids. It's the biggest financial decision of their life. And I take that seriously.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  I believe serving people is what I — and all of us — are sent here to do. Help each other. That's it. When you call me, your experience, your needs, and your situation come before any deal. If my cash offer doesn't work for you, I will be honest and point you in a great direction. I'll happily refer you to a few trusted cash buyers here in Fresno — real investors who don't run ads, because they don't need to. They're the real deal.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  And if selling for cash isn't the right move at all? I'll tell you that too. I'm a licensed agent. I can list your home on the MLS and get you full market value. <strong style={{ color: "oklch(0.90 0.10 85)" }}>Please — talk to a Realtor before you talk to one of these clowns.</strong> And obviously, call me.
                </p>
              </div>

              {/* The mission */}
              <p className="text-base leading-relaxed mb-2 font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>
                My mission is simple: clean up real estate.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                700+ homes purchased since 2008 across our group of entities. 103 in the last three years alone. Every single one — I showed up, I did what I said, on time, every time. That's not a marketing line. That's a track record. And I'm just getting started.
              </p>
            </div>

            {/* Expand/collapse button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 mx-auto mb-6 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{
                background: expanded ? "oklch(0.90 0.02 85)" : "oklch(0.22 0.01 60)",
                color: expanded ? "oklch(0.30 0.01 60)" : "white",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              {expanded ? "Show Less" : "Keep Reading — The AI Confession, State Bans & My WHY"}
              <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </button>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" style={{ borderTop: "1px solid oklch(0.90 0.02 85)" }}>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone size={16} /> Call Connor: {PHONE}
              </a>
              <Link href="/dont-get-wholesaled">
                <span
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90 cursor-pointer"
                  style={{ background: "oklch(0.22 0.01 60)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Read the Full Wholesaler Exposé <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs mt-6" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
          Connor Morris · Licensed CA Real Estate Agent · DRE #02219124 · Fresno, CA
        </p>
      </div>
    </section>
  );
}
