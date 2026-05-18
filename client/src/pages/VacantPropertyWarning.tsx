/* VACANT PROPERTY WARNING — Alder Heritage Homes
   Urgent, high-intent page for inherited/vacant/probate homeowners
   Target keywords: "vacant home security Fresno", "vacant house break in Fresno",
   "secure vacant property Central Valley", "vacant home stolen copper Fresno"
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, AlertTriangle, Shield, CheckCircle2, ArrowRight, Home as HomeIcon, Lock } from "lucide-react";
import { useSEO, faqSchema } from "@/hooks/useSEO";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

const faqs = [
  {
    q: "How fast can you respond to a vacant property emergency?",
    a: "Call Connor directly at (559) 281-8016. He will either respond personally or immediately connect you with a trusted property security contact who can board up, re-key, and secure all access points — including crawl spaces and subfloor entry points — the same day.",
  },
  {
    q: "What access points do thieves actually use on vacant homes?",
    a: "Every one you can think of — and several you wouldn't. Windows, doors, and garage entries are obvious. Less obvious: crawl spaces under raised-foundation homes, subfloor drill-throughs into bathrooms, unlocked attic hatches, and pet doors. Connor has personally dealt with subfloor break-ins on properties in Fresno, including on Roosevelt Ave. These are not hypothetical.",
  },
  {
    q: "My family member just passed and the home is sitting empty. What should I do first?",
    a: "Secure it immediately — before you do anything else. Change the locks, board any broken windows, and check the crawl space if it's a raised foundation. Then call Connor. He can help you decide whether a cash sale, a listing, or simply holding the property makes the most sense for your situation.",
  },
  {
    q: "Does homeowner's insurance cover break-ins at vacant properties?",
    a: "Often not — or not fully. Most standard homeowner's policies have a vacancy clause that reduces or eliminates coverage after 30–60 days of vacancy. If the home has been empty for more than 30 days, call your insurance agent today and ask specifically about vacant property coverage.",
  },
  {
    q: "Can I sell a home that has already been broken into or vandalized?",
    a: "Yes. Connor buys homes in any condition — including properties that have been vandalized, had copper stolen, or been damaged by squatters. You do not need to repair anything. Call and describe the situation honestly and he will make a fair offer.",
  },
];

const warningItems = [
  {
    icon: <Lock size={22} />,
    title: "Doors & Locks",
    desc: "Standard door locks are defeated in seconds. Every exterior door needs a deadbolt — and ideally a door reinforcement kit. Sliding doors need a bar in the track.",
  },
  {
    icon: <HomeIcon size={22} />,
    title: "Windows",
    desc: "Broken or unlocked windows are the most common entry point. Board them or install window pins. Even a cracked window signals vacancy to anyone watching.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Crawl Spaces & Subfloor",
    desc: "On raised-foundation homes, thieves crawl underneath and drill up through the bathroom floor. Connor has had this happen personally on Roosevelt Ave in Fresno. Secure every crawl space vent and access panel.",
  },
  {
    icon: <Shield size={22} />,
    title: "Attic & Roof Vents",
    desc: "Attic access hatches and large roof vents are used to enter vacant homes — especially in older Central Valley properties. Check and secure them.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Copper & Utilities",
    desc: "Copper theft is epidemic in vacant Fresno properties. Thieves strip HVAC units, water heaters, and plumbing within days of a home going vacant. Turn off utilities and consider a copper theft deterrent spray.",
  },
  {
    icon: <HomeIcon size={22} />,
    title: "Garage & Side Gates",
    desc: "Detached garages and side yard gates are often forgotten. A padlocked gate and a secured garage door (disconnect the opener, use a lock bar) are essential.",
  },
];

export default function VacantPropertyWarning() {
  useSEO({
    title: "Vacant Home Warning — Secure It Now",
    description: "Vacant homes in Fresno and the Central Valley get broken into fast. Connor Alder will help you secure the property or connect you with someone who can — same day. Call (559) 281-8016.",
    canonical: "/vacant-property-warning",
    schema: faqSchema(faqs),
  });

  return (
    <Layout>
      {/* URGENT HERO */}
      <section className="relative py-16 overflow-hidden" style={{ background: "oklch(0.18 0.04 25)" }}>
        <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(45deg, oklch(1 0 0 / 0.02) 0px, oklch(1 0 0 / 0.02) 1px, transparent 1px, transparent 10px)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Urgent badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-pulse" style={{ background: "oklch(0.55 0.22 25)", color: "white", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              <AlertTriangle size={14} /> Urgent Warning for Vacant Property Owners
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Lora', serif", lineHeight: 1.2 }}>
              Your Vacant Home Will Get Broken Into.
              <span style={{ color: "oklch(0.78 0.18 42)" }}> Call Me Before It Does.</span>
            </h1>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: "oklch(0.78 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Fresno and the Central Valley have some of the highest rates of vacant property break-ins in California. Thieves watch for signs of vacancy — mail piling up, lights never on, overgrown grass. Once they know a home is empty, the clock starts.
            </p>
            <p className="text-lg mb-8 leading-relaxed font-semibold" style={{ color: "oklch(0.88 0.08 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
              I will help you secure the property — or give you the direct number for someone who can board it up, re-key the locks, and seal every access point. Same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-bold text-white text-lg" style={{ background: "oklch(0.55 0.22 25)", fontFamily: "'Nunito Sans', sans-serif", boxShadow: "0 0 0 3px oklch(0.55 0.22 25 / 0.4)" }}>
                <Phone size={22} /> Call Now: {PHONE}
              </a>
              <Link href="/contact">
                <button className="flex items-center justify-center gap-2 px-8 py-5 rounded-xl font-bold text-white" style={{ background: "oklch(1 0 0 / 0.08)", border: "2px solid oklch(1 0 0 / 0.25)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Send a Message <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connor's real story */}
      <section className="py-14" style={{ background: "oklch(0.55 0.22 25 / 0.06)", borderBottom: "1px solid oklch(0.55 0.22 25 / 0.15)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl" style={{ background: "white", border: "2px solid oklch(0.55 0.22 25 / 0.3)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.55 0.22 25 / 0.12)" }}>
                  <AlertTriangle size={20} style={{ color: "oklch(0.45 0.20 25)" }} />
                </div>
                <span className="font-bold text-sm" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.20 25)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  This Happened to Me — Connor Alder
                </span>
              </div>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif", fontStyle: "italic" }}>
                "On Roosevelt Ave in Fresno — and on other properties I've owned throughout the Valley — I've had people crawl under the house, drill up through the bathroom floor, and gain access to the property that way. Raised-foundation homes have a subfloor that most owners never think about. Thieves do."
              </p>
              <p className="leading-relaxed mb-4" style={{ color: "oklch(0.38 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                This is not a hypothetical. Vacant homes in Fresno, Bakersfield, Visalia, and throughout the Central Valley are targeted systematically. Copper gets stripped. Appliances disappear. Squatters move in. And once a squatter is in, California law makes removal a months-long legal process.
              </p>
              <p className="leading-relaxed font-semibold" style={{ color: "oklch(0.30 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The cost of securing a vacant property is a few hundred dollars. The cost of not securing it — copper theft, vandalism, squatter removal, insurance denial — can run $10,000–$50,000+. Call me before it gets to that point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning items grid */}
      <section className="py-20" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                Every Access Point That Will Be Used Against You
              </h2>
              <p className="text-lg" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Thieves are methodical. They check every one of these. You need to secure every one of these.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {warningItems.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "oklch(0.55 0.22 25 / 0.10)" }}>
                    <span style={{ color: "oklch(0.45 0.20 25)" }}>{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{item.title}</div>
                    <div className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Immediate action box */}
            <div className="p-8 rounded-2xl text-center" style={{ background: "oklch(0.18 0.04 25)", color: "white" }}>
              <AlertTriangle size={36} className="mx-auto mb-4" style={{ color: "oklch(0.78 0.18 42)" }} />
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Lora', serif" }}>
                If Your Property Is Vacant Right Now — Call Immediately
              </h3>
              <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Connor will either help you secure it personally or connect you with a trusted contact who can board it up, re-key every lock, and seal every crawl space and access point — including under the house — the same day you call.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-white text-lg" style={{ background: "oklch(0.55 0.22 25)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={22} /> {PHONE} — Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Also consider selling */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)", borderTop: "1px solid oklch(0.88 0.02 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              If You're Dealing With a Vacant Property, a Cash Sale May Be the Cleanest Exit
            </h2>
            <p className="text-base leading-relaxed mb-6 text-center" style={{ color: "oklch(0.42 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Inherited homes, probate properties, and homes left vacant after a family member passes are the most common targets. Every month a vacant home sits, it costs you — insurance, property taxes, utilities, security, and the ongoing risk of vandalism and theft.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Probate / Inherited", href: "/probate-inherited-homes" },
                { label: "Foreclosure Help", href: "/foreclosure-help" },
                { label: "Sell House Fast", href: "/sell-house-fast" },
              ].map((s) => (
                <Link key={s.href} href={s.href}>
                  <div className="p-4 rounded-xl text-center cursor-pointer" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                    <div className="font-semibold text-sm" style={{ color: "oklch(0.45 0.12 42)", fontFamily: "'Nunito Sans', sans-serif" }}>{s.label}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* FAQs */}
            <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)" }}>
                  <div className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{faq.q}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
