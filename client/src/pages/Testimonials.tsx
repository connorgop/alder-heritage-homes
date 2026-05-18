/* Testimonials Page — Alder Heritage Homes */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, Star, Quote, CheckCircle2, Shield } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";
const HAZMAT_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-hazmat-team-clovis_6f37d7da.webp";
const SELLER_SIDE_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-side_d912ee39.webp";
const SELLER_HUG_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-hug_80f9b3b4.webp";

const testimonials = [
  {
    name: "Maria T.",
    city: "Fresno, CA",
    situation: "Inherited Property",
    stars: 5,
    quote: "My mother passed and left us a home in south Fresno that needed a lot of work. We live in Sacramento and couldn't manage a renovation from two hours away. Connor gave us a fair cash offer within 24 hours, handled all the paperwork, and we closed in 12 days. He was honest about what the home was worth and never pressured us. I would recommend him to anyone dealing with an inherited property.",
    detail: "Closed in 12 days · No repairs required · Out-of-state seller",
  },
  {
    name: "James & Denise R.",
    city: "Visalia, CA",
    situation: "Facing Foreclosure",
    stars: 5,
    quote: "We were 4 months behind on our mortgage and had received a Notice of Default. We thought we had no options. Connor called us back within an hour, explained exactly what our options were, and made us a cash offer that paid off our mortgage and put money in our pocket. We closed 10 days before the foreclosure auction. He saved our credit and our sanity.",
    detail: "Closed before foreclosure auction · Mortgage paid off · Credit saved",
  },
  {
    name: "Robert K.",
    city: "Bakersfield, CA",
    situation: "Divorce Sale",
    stars: 5,
    quote: "Going through a divorce is hard enough without trying to coordinate a home sale with someone you're no longer on good terms with. Connor worked with both of us separately, was completely neutral, and got the deal done without drama. The process was clean and professional. We closed in 18 days and both walked away satisfied.",
    detail: "Closed in 18 days · Neutral, professional process · Both parties satisfied",
  },
  {
    name: "Linda M.",
    city: "Clovis, CA",
    situation: "Downsizing / Relocation",
    stars: 5,
    quote: "I was moving to be closer to my grandchildren in Arizona and needed to sell quickly. I didn't want to deal with open houses, strangers walking through my home, or waiting months for a buyer. Connor made the process completely painless. He was respectful of my timeline, gave me a fair offer, and I was in Arizona within 3 weeks of calling him.",
    detail: "Closed in 15 days · No showings or open houses · Seller chose closing date",
  },
  {
    name: "David & Carmen S.",
    city: "Stockton, CA",
    situation: "Fire-Damaged Home",
    stars: 5,
    quote: "We had a kitchen fire that caused significant damage. Our insurance settlement didn't cover the full cost of repairs, and we couldn't afford to fix it ourselves. Every agent we called said they couldn't list it in that condition. Connor came out the same day, gave us a straightforward cash offer, and we closed in 14 days. No games, no lowballing — just a fair price for what the home was worth as-is.",
    detail: "Fire-damaged property · Closed in 14 days · Insurance gap covered",
  },
  {
    name: "Patricia W.",
    city: "Hanford, CA",
    situation: "Behind on Mortgage",
    stars: 5,
    quote: "I was a year behind on my mortgage after a medical emergency wiped out my savings. I was too embarrassed to call anyone. A friend told me about Connor and I finally reached out. He was completely non-judgmental, explained everything clearly, and helped me understand exactly what would happen at each step. We closed in 9 days and I was able to pay off my mortgage and start fresh.",
    detail: "Closed in 9 days · Non-judgmental process · Fresh start achieved",
  },
  {
    name: "Thomas A.",
    city: "Fresno, CA",
    situation: "Rental Property Sale",
    stars: 5,
    quote: "I had a rental property in central Fresno with tenants who had stopped paying rent. The eviction process was dragging on and I was losing money every month. Connor bought the property with the tenants still in place — I didn't have to wait for the eviction to complete. He handled everything after closing. It was the cleanest exit I could have asked for.",
    detail: "Tenant-occupied property · No eviction required · Immediate exit",
  },
  {
    name: "Sandra & Mike P.",
    city: "Tulare, CA",
    situation: "Foundation Issues",
    stars: 5,
    quote: "Our home had significant foundation problems that a structural engineer estimated would cost $45,000 to repair. No conventional buyer could get financing on it. We thought we were stuck. Connor came out, assessed the situation honestly, and made us an offer that reflected the real cost of repairs — not a lowball. We closed in 16 days and moved on with our lives.",
    detail: "Foundation damage · Closed in 16 days · No financing contingencies",
  },
];

const trustStats = [
  { value: "5–21 Days", label: "Average Close Time" },
  { value: "DRE #02219124", label: "Licensed CA Agent" },
  { value: "Zero", label: "Fees or Commissions" },
  { value: "100%", label: "Closings Completed" },
];

export default function Testimonials() {
  useSEO({
    title: "Seller Reviews & Testimonials",
    description: "Real seller stories from Fresno, Visalia, Bakersfield, Stockton, and across the Central Valley. See how Alder Heritage Homes helped homeowners sell fast for cash — no repairs, no commissions, no pressure.",
    canonical: "/testimonials",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="oklch(0.75 0.14 55)" style={{ color: "oklch(0.75 0.14 55)" }} />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Real Sellers. Real Stories.
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Homeowners across Fresno and the Central Valley share their experience selling to Alder Heritage Homes — foreclosure, inheritance, divorce, fire damage, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-terracotta flex items-center justify-center gap-2 text-lg px-8 py-4 font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> Call {PHONE}
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Cash Offer <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-10 border-b" style={{ background: "oklch(0.97 0.01 80)" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustStats.map(stat => (
            <div key={stat.label}>
              <div className="text-2xl font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.55 0.13 42)" }}>{stat.value}</div>
              <div className="text-sm font-semibold" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="p-7 rounded-2xl border flex flex-col gap-4" style={{ borderColor: "oklch(0.88 0.04 80)", background: "oklch(0.99 0.005 80)" }}>
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="oklch(0.75 0.14 55)" style={{ color: "oklch(0.75 0.14 55)" }} />
                  ))}
                </div>
                {/* Situation badge */}
                <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.12)", color: "oklch(0.35 0.1 42)", fontFamily: "'DM Mono', monospace" }}>
                  {t.situation}
                </span>
                {/* Quote */}
                <div className="relative">
                  <Quote size={28} className="absolute -top-1 -left-1 opacity-10" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <p className="pl-5 italic leading-relaxed" style={{ color: "oklch(0.38 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    "{t.quote}"
                  </p>
                </div>
                {/* Attribution */}
                <div className="mt-auto pt-4 border-t" style={{ borderColor: "oklch(0.9 0.02 80)" }}>
                  <div className="font-bold" style={{ fontFamily: "'Lora', serif", color: "oklch(0.28 0.05 155)" }}>{t.name}</div>
                  <div className="text-sm" style={{ color: "oklch(0.5 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{t.city}</div>
                  <div className="text-xs mt-1 font-semibold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study: Clovis Inherited Murder Home */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase" style={{ background: "oklch(0.55 0.13 42 / 0.3)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>Featured Case Study</span>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>The Clovis Inherited Murder Home</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg" style={{ color: "oklch(0.72 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>One of the most difficult transactions we've ever handled — and the one we're most proud of.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={HAZMAT_PHOTO} alt="Connor and team in hazmat suits before entering the Clovis property" className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
                  <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-xs font-bold" style={{ background: "oklch(0.15 0.01 60 / 0.9)", color: "white", fontFamily: "'DM Mono', monospace" }}>Day 1 — Hazmat Entry</div>
                </div>
                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={SELLER_HUG_PHOTO} alt="Connor hugging the seller after seeing the renovated Clovis home" className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
                  <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.9)", color: "white", fontFamily: "'DM Mono', monospace" }}>After — First Time Seeing It</div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
                <img src={SELLER_SIDE_PHOTO} alt="Connor with the seller outside the renovated Clovis home" className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs font-bold" style={{ background: "oklch(0.22 0.01 60 / 0.85)", color: "white", fontFamily: "'DM Mono', monospace" }}>Connor &amp; the Seller — Clovis, CA · $200,000 Cash</div>
              </div>
            </div>
            <div className="text-white">
              <div className="flex flex-wrap gap-2 mb-5">
                {["Murder scene", "2-yr squatter", "No utilities", "Hazmat cleanup", "Full renovation", "$200K cash"].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.3)", color: "oklch(0.88 0.08 60)", fontFamily: "'DM Mono', monospace" }}>{t}</span>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "oklch(0.82 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                A mother inherited her daughter's home in Clovis after her daughter was murdered by her husband. The murderer's mother had been living in the home as a squatter for over two years. The seller had not been able to bring herself to visit the property — not once.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "oklch(0.82 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Connor and his team suited up in full hazmat gear to enter the property for the first time. There was no water, no sewer service, and the home was filled with years of accumulated debris. They handled the squatter eviction, the hazmat remediation, and a complete renovation — all without the seller ever having to step foot inside.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.82 0.02 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The seller saw the finished, renovated home for the first time on the day of closing. The photos above were taken that day. She received $200,000 cash and was able to move forward with her life.
              </p>
              <blockquote className="border-l-4 pl-5 italic text-lg" style={{ borderColor: "oklch(0.55 0.13 42)", color: "oklch(0.88 0.06 75)", fontFamily: "'Lora', serif" }}>
                "I never had to see it the way it was. Connor handled everything. I just had to sign and show up to closing."
                <div className="mt-2 text-sm not-italic" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'DM Mono', monospace" }}>— The Seller, Clovis CA</div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* Why Trust Us */}
      <section className="py-20" style={{ background: "oklch(0.96 0.02 80)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Why Sellers Trust Alder Heritage Homes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Licensed Agent, Not a Wholesaler", desc: "Connor Morris is a licensed California real estate agent (DRE #02219124). He is the actual buyer — his name is on every contract. No middlemen, no assignment clauses, no surprises." },
              { title: "Transparent Process", desc: "We show you exactly how we calculated your offer — the ARV, repair costs, and our margin. You'll understand every number before you sign anything." },
              { title: "You Choose the Closing Date", desc: "Need to close in 5 days? Need 45 days to find your next home? We close on your timeline, not ours. Flexibility is part of the service." },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-xl bg-white border" style={{ borderColor: "oklch(0.88 0.04 80)" }}>
                <Shield size={24} className="mb-3" style={{ color: "oklch(0.55 0.13 42)" }} />
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.28 0.05 155)" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "oklch(0.45 0.03 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="oklch(0.75 0.14 55)" style={{ color: "oklch(0.75 0.14 55)" }} />
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>Ready to Write Your Own Story?</h2>
          <p className="mb-8 text-lg" style={{ color: "oklch(0.82 0.04 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call Connor directly or request a cash offer online. Free consultation, no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-terracotta flex items-center justify-center gap-2 text-lg px-8 py-4 font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg cursor-pointer" style={{ background: "white", color: "oklch(0.22 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get My Cash Offer <ArrowRight size={20} />
              </span>
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Also see our <Link href="/why-us"><span className="underline cursor-pointer">Why Choose Us</span></Link> page for more about how we work.
          </p>
        </div>
      </section>
    </Layout>
  );
}
