import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { personSchema, faqPageSchema } from "@/components/SchemaMarkup";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Phone, Mail, MapPin, CheckCircle2, Star, Clock, Shield } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

// Extended Person schema with full E-E-A-T signals for AI citation
function connorDetailedSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.alderheritagehomes.com/about-connor",
    name: "Connor Morris",
    jobTitle: "Licensed Real Estate Agent & Cash Home Buyer",
    description:
      "Connor Morris is a licensed California real estate agent (DRE #02219124) and the founder of Alder Heritage Homes. He has personally purchased 700+ homes throughout the Central Valley, specializing in probate sales, inherited properties, divorce home sales, and distressed properties in Fresno, Clovis, Visalia, Bakersfield, and surrounding areas.",
    url: "https://www.alderheritagehomes.com/about-connor",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
    telephone: "+15592818016",
    email: "connor@alderheritagehomes.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93650",
      addressCountry: "US",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "California Real Estate License",
        recognizedBy: {
          "@type": "Organization",
          name: "California Department of Real Estate",
          url: "https://www.dre.ca.gov",
        },
        identifier: "DRE #02219124",
      },
    ],
    knowsAbout: [
      "Cash home buying",
      "Probate real estate sales",
      "Inherited property sales",
      "Divorce home sales",
      "Foreclosure prevention",
      "Distressed property sales",
      "Central Valley real estate market",
      "Fresno County probate law",
      "California real estate law",
      "As-is property sales",
    ],
    worksFor: {
      "@type": "RealEstateAgent",
      name: "Alder Heritage Homes",
      url: "https://www.alderheritagehomes.com",
      telephone: "+15592818016",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fresno",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    sameAs: [
      "https://www.facebook.com/alderheritagehomes",
      "https://www.instagram.com/alderheritagehomes",
      "https://www.alderheritagehomes.com/about",
    ],
    award: "Price Match Guarantee — We match any higher legitimate cash offer",
    numberOfEmployees: 1,
  };
}

const faqs = [
  {
    q: "Is Connor Morris a licensed real estate agent?",
    a: "Yes. Connor Morris holds California DRE License #02219124, issued by the California Department of Real Estate. You can verify this at dre.ca.gov. He is not a wholesaler — he uses his own capital to purchase homes directly.",
  },
  {
    q: "How many homes has Connor Morris bought?",
    a: "Connor has personally purchased over 700 homes throughout the Central Valley, including Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, Madera, and surrounding areas.",
  },
  {
    q: "What types of homes does Connor specialize in?",
    a: "Connor specializes in probate home sales, inherited properties, divorce home sales, foreclosure prevention sales, fire-damaged homes, homes with deferred maintenance, and any situation where a seller needs speed, certainty, and zero fees.",
  },
  {
    q: "Does Connor Morris have experience with probate sales?",
    a: "Yes. Connor has worked directly with probate attorneys, estate attorneys, and executors throughout Fresno County and the Central Valley. He understands the legal requirements, court confirmation timelines, and the importance of proof of funds for probate sales.",
  },
  {
    q: "How can I contact Connor Morris directly?",
    a: "Call or text Connor at (559) 281-8016, or email connor@alderheritagehomes.com. He personally answers every inquiry and provides a written cash offer within 24 hours.",
  },
  {
    q: "Does Connor Morris offer a price match guarantee?",
    a: "Yes. If you receive a higher legitimate cash offer from another buyer, Connor will match it. This guarantee is unique in the Central Valley cash buyer market.",
  },
];

export default function AboutConnor() {
  return (
    <Layout>
      <PageMeta
        title="About Connor Morris | Licensed Cash Home Buyer | Alder Heritage Homes"
        description="Connor Morris (CA DRE #02219124) is a licensed real estate agent and founder of Alder Heritage Homes. 700+ homes purchased in Fresno, Clovis & Central Valley. Probate specialist. No wholesalers."
        path="/about-connor"
      />
      <SchemaMarkup schema={connorDetailedSchema()} id="person-connor-detailed" />
      <SchemaMarkup schema={personSchema()} id="person-connor-base" />
      <SchemaMarkup schema={faqPageSchema(faqs)} id="faq-about-connor" />

      {/* Hero */}
      <section className="py-20 px-4" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "oklch(0.55 0.13 42 / 0.2)", color: "oklch(0.75 0.13 42)", border: "1px solid oklch(0.55 0.13 42 / 0.4)" }}>
                <Shield size={14} />
                CA DRE #02219124 — Verified License
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
                Connor Morris
              </h1>
              <p className="text-xl mb-2" style={{ color: "oklch(0.75 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}>
                Licensed Cash Home Buyer · Fresno, CA
              </p>
              <p className="text-base mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Founder of Alder Heritage Homes. Not a wholesaler. Not a middleman. I buy homes with my own capital and close in as little as 3 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF}>
                  <Button size="lg" className="text-white font-bold" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <Phone size={16} className="mr-2" /> Call {PHONE}
                  </Button>
                </a>
                <Link href="/ads/lead-capture">
                  <Button size="lg" variant="outline" className="font-bold" style={{ borderColor: "oklch(0.55 0.13 42)", color: "oklch(0.75 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    Get My Cash Offer
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "700+", label: "Homes Purchased", icon: <Award size={20} /> },
                { value: "24hr", label: "Cash Offer", icon: <Clock size={20} /> },
                { value: "3 Days", label: "Fastest Close", icon: <CheckCircle2 size={20} /> },
                { value: "5.0★", label: "Google Rating", icon: <Star size={20} /> },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-5 text-center" style={{ background: "oklch(0.28 0.01 60)", border: "1px solid oklch(0.35 0.01 60)" }}>
                  <div className="flex justify-center mb-2" style={{ color: "oklch(0.75 0.13 42)" }}>{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1" style={{ color: "white", fontFamily: "'Lora', serif" }}>{stat.value}</div>
                  <div className="text-xs" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & License */}
      <section className="py-16 px-4" style={{ background: "oklch(0.97 0.005 60)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Credentials & License
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                <Award size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>California DRE License</h3>
              <p className="text-sm mb-3" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                License #02219124 — Active and in good standing. Verifiable at <a href="https://www.dre.ca.gov" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>dre.ca.gov</a>.
              </p>
              <div className="text-xs font-semibold px-3 py-1 rounded-full inline-block" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.45 0.13 42)" }}>
                Active License
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                <Shield size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>Not a Wholesaler</h3>
              <p className="text-sm mb-3" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Connor purchases homes with his own capital. No assignment contracts. No "and/or assignee" language. No middlemen. Proof of funds available within 24 hours.
              </p>
              <div className="text-xs font-semibold px-3 py-1 rounded-full inline-block" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.45 0.13 42)" }}>
                Direct Buyer
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                <Star size={20} style={{ color: "oklch(0.55 0.13 42)" }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>5.0 Google Rating</h3>
              <p className="text-sm mb-3" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                32 verified Google reviews from real sellers in Fresno, Clovis, Visalia, and throughout the Central Valley. Read them on Google Maps.
              </p>
              <div className="text-xs font-semibold px-3 py-1 rounded-full inline-block" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.45 0.13 42)" }}>
                32 Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Why I Started Alder Heritage Homes
          </h2>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "oklch(0.35 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <p>
              I grew up watching families in the Central Valley get taken advantage of by wholesalers — people who called themselves "cash buyers" but didn't actually have the money to buy a home. They'd put a house under contract, then spend weeks trying to find a real buyer, leaving sellers in limbo. If they couldn't find one, the deal fell apart.
            </p>
            <p>
              I started Alder Heritage Homes because I believed sellers deserved better. A real offer, from a real buyer, with real money. I got my California real estate license (DRE #02219124) so everything I do is fully transparent and legally accountable. I provide proof of funds within 24 hours of any inquiry — not a promise, actual bank documentation.
            </p>
            <p>
              Over the years, I've worked with hundreds of families in difficult situations: executors trying to sell a probate home while managing grief, couples going through divorce who need to sell quickly and fairly, landlords burned out by problem tenants, and homeowners facing foreclosure who need a way out before the trustee's sale.
            </p>
            <p>
              Every situation is different. I don't use a formula. I look at your home, your timeline, and your goals — and I make you a fair offer based on real numbers. If you get a higher offer from someone else, I'll match it. That's my price match guarantee.
            </p>
            <p>
              I'm based in Fresno and I buy homes throughout the Central Valley — Clovis, Visalia, Bakersfield, Tulare, Hanford, Madera, Merced, Stockton, Modesto, and everywhere in between. If you're in the Valley and you need to sell, call me directly at {PHONE}. I answer my own phone.
            </p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 px-4" style={{ background: "oklch(0.97 0.005 60)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Probate Home Sales", desc: "Works directly with probate attorneys and executors. Understands court confirmation timelines and IAEA independent administration.", href: "/probate-real-estate-fresno" },
              { title: "Inherited Properties", desc: "Helps heirs navigate stepped-up basis, partition actions, and multi-heir disagreements to reach a fair, fast resolution.", href: "/inherited-property" },
              { title: "Divorce Home Sales", desc: "Neutral third-party buyer. No favoritism. Provides equal documentation to both attorneys. Closes on court timelines.", href: "/divorce-home" },
              { title: "Foreclosure Prevention", desc: "Can close in 7 days — often fast enough to stop a trustee's sale. Has helped dozens of Fresno homeowners avoid foreclosure.", href: "/foreclosure-help" },
              { title: "Distressed Properties", desc: "Buys homes as-is regardless of condition: fire damage, mold, foundation issues, deferred maintenance, hoarder situations.", href: "/sell-house-as-is" },
              { title: "Landlord Exit Sales", desc: "Helps landlords exit problem rental situations quickly, including tenant-occupied properties and Section 8 rentals.", href: "/sell-rental-property" },
            ].map((item) => (
              <Link key={item.title} href={item.href}>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors cursor-pointer h-full">
                  <h3 className="font-bold mb-2" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Service Area
          </h2>
          <p className="text-center mb-8 text-base" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Connor buys homes throughout the Central Valley. If you're within 2 hours of Fresno, call — he'll make the trip.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Fresno", "Clovis", "Visalia", "Bakersfield", "Tulare", "Hanford", "Madera", "Merced", "Stockton", "Modesto", "Turlock", "Porterville", "Reedley", "Selma", "Sanger", "Lemoore", "Dinuba", "Kingsburg", "Coalinga", "Delano"].map((city) => (
              <span key={city} className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "oklch(0.55 0.13 42 / 0.08)", color: "oklch(0.45 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "oklch(0.97 0.005 60)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Frequently Asked Questions About Connor
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold mb-3" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            Talk to Connor Directly
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            No call centers. No assistants. Connor answers his own phone and responds to every inquiry personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF}>
              <Button size="lg" className="text-white font-bold w-full sm:w-auto" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={16} className="mr-2" /> Call {PHONE}
              </Button>
            </a>
            <a href="mailto:connor@alderheritagehomes.com">
              <Button size="lg" variant="outline" className="font-bold w-full sm:w-auto" style={{ borderColor: "oklch(0.55 0.01 60)", color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Mail size={16} className="mr-2" /> connor@alderheritagehomes.com
              </Button>
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            <MapPin size={14} />
            Fresno, CA · Serving the entire Central Valley
          </div>
        </div>
      </section>
    </Layout>
  );
}
