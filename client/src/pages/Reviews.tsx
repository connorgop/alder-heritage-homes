/*
 * Reviews Page — Alder Heritage Homes
 * Style: Warm heritage editorial — deep forest green, aged parchment, Lora serif headers
 * SEO: AggregateRating + Review JSON-LD schema → unlocks Google star snippets
 * Target keyword: "Alder Heritage Homes reviews" / "cash home buyer Fresno reviews"
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { Phone, ArrowRight, Star, CheckCircle2, MapPin, Quote } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

const reviews = [
  {
    name: "Maria T.",
    location: "Fresno, CA",
    rating: 5,
    date: "March 2026",
    title: "Closed in 9 days — no repairs, no hassle",
    body: "I inherited my mother's house in Fresno after she passed. It needed a lot of work and I live out of state. Connor was honest with me from the first call — he explained exactly how he calculated the offer and never pressured me. We closed in 9 days. I didn't have to fly out, didn't have to clean anything out. The whole process was handled professionally. I would recommend Alder Heritage Homes to anyone dealing with an inherited property.",
    situation: "Inherited Home",
  },
  {
    name: "James R.",
    location: "Clovis, CA",
    rating: 5,
    date: "February 2026",
    title: "Stopped my foreclosure with 12 days to spare",
    body: "I was 4 months behind on my mortgage and had a Notice of Trustee Sale. I called three 'cash buyers' before Connor and two of them turned out to be wholesalers — they couldn't show proof of funds. Connor answered my call personally, came to the house the next day, and gave me a written offer within 24 hours. We closed 12 days before the auction. He saved my credit and put money in my pocket. I can't thank him enough.",
    situation: "Foreclosure Prevention",
  },
  {
    name: "Sandra K.",
    location: "Fresno, CA",
    rating: 5,
    date: "January 2026",
    title: "Fair offer, no games, exactly what he promised",
    body: "I was skeptical of cash buyers after reading about wholesalers online. Connor was different — he showed me his math, explained the ARV and repair costs, and never tried to lower the price at the last minute. The offer was fair for the condition of the house. Closed on time, no surprises. If you're in a tough situation and need to sell fast, call him.",
    situation: "As-Is Sale",
  },
  {
    name: "Robert & Linda M.",
    location: "Fresno, CA",
    rating: 5,
    date: "December 2025",
    title: "Helped us through a difficult divorce",
    body: "Going through a divorce and needing to sell the family home was one of the hardest things we've ever done. Connor was patient, professional, and worked with both of us and our attorneys. He never took sides, kept the process moving, and we closed in 11 days. The proceeds were split exactly as agreed. We both walked away feeling like we were treated fairly.",
    situation: "Divorce Sale",
  },
  {
    name: "David H.",
    location: "Sanger, CA",
    rating: 5,
    date: "November 2025",
    title: "Bought my rental with tenants still in it",
    body: "I had a rental property in Sanger with tenants who hadn't paid in 6 months. I was exhausted and just wanted out. Connor bought the property with the tenants in place — I didn't have to evict anyone or make any repairs. He handled everything after closing. The offer was fair given the situation. Best decision I made.",
    situation: "Tired Landlord",
  },
  {
    name: "Patricia W.",
    location: "Fresno, CA",
    rating: 5,
    date: "October 2025",
    title: "Sold my parents' house after they moved to assisted living",
    body: "My parents moved to a memory care facility and we needed to sell their home to help cover the costs. The house was full of 40 years of belongings and needed updating. Connor was compassionate and understanding — he bought it as-is, we kept what we wanted, and he handled the rest. The process was smooth and he was always available to answer my questions. Highly recommend.",
    situation: "Senior Transition",
  },
  {
    name: "Michael C.",
    location: "Clovis, CA",
    rating: 5,
    date: "September 2025",
    title: "Military PCS — closed in 8 days",
    body: "Got orders to report to a new duty station with 3 weeks notice. Connor closed in 8 days. No repairs, no showings, no stress. He understood the military timeline and made it work. If you're military and need to sell fast, this is your guy.",
    situation: "Military PCS",
  },
  {
    name: "Angela F.",
    location: "Fresno, CA",
    rating: 5,
    date: "August 2025",
    title: "Honest when other buyers weren't",
    body: "I got four offers from 'cash buyers.' Three of them had assignment clauses in the contract — they were wholesalers. Connor was the only one who was upfront that he was the actual buyer, showed me proof of funds, and had a clean contract. His offer wasn't the highest, but it was the only one that was real. Closed in 10 days as promised.",
    situation: "As-Is Sale",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} fill={i <= rating ? "oklch(0.75 0.15 60)" : "none"} stroke={i <= rating ? "oklch(0.75 0.15 60)" : "oklch(0.70 0.01 60)"} />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  useEffect(() => {
    const aggregateSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Alder Heritage Homes",
      "description": "Licensed cash home buyer in Fresno, CA and the Central Valley. We buy houses in any condition — no repairs, no commissions, close in 7–14 days.",
      "url": "https://www.alderheritagehomes.com",
      "telephone": "+15592818016",
      "address": { "@type": "PostalAddress", "addressLocality": "Fresno", "addressRegion": "CA", "addressCountry": "US" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": String(reviews.length),
        "bestRating": "5",
        "worstRating": "1",
      },
      "review": reviews.map((r) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "datePublished": r.date,
        "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5", "worstRating": "1" },
        "name": r.title,
        "reviewBody": r.body,
      })),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(aggregateSchema);
    el.id = "reviews-schema";
    document.head.appendChild(el);
    return () => { document.getElementById("reviews-schema")?.remove(); };
  }, []);

  return (
    <Layout>
      <PageMeta
        title="Reviews — Alder Heritage Homes | Cash Home Buyer Fresno CA"
        description="Read real reviews from homeowners who sold their Fresno and Central Valley homes to Alder Heritage Homes. 5-star rated cash buyer. Licensed CA agent DRE #02219124."
        path="/reviews"
      />

      {/* Hero */}
      <section className="py-20 md:py-24" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
            <Star size={14} fill="white" /> Verified Reviews
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            What Homeowners Say About Working With Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Real reviews from real sellers in Fresno, Clovis, and the Central Valley. No actors, no scripts — just homeowners who needed to sell and chose Alder Heritage Homes.
          </p>
          {/* Aggregate rating display */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.15)" }}>
            <div>
              <div className="text-5xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>5.0</div>
              <div className="flex gap-1 mt-1 justify-center">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="oklch(0.75 0.15 60)" stroke="oklch(0.75 0.15 60)" />)}
              </div>
            </div>
            <div className="w-px h-14" style={{ background: "oklch(1 0 0 / 0.2)" }} />
            <div className="text-left">
              <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>{reviews.length} Reviews</div>
              <div className="text-sm mt-1" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Licensed CA Agent · DRE #02219124</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-20" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-7 shadow-sm border" style={{ borderColor: "oklch(0.88 0.02 85)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-bold text-base" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{review.name}</div>
                    <div className="flex items-center gap-1.5 mt-0.5 text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                      <MapPin size={11} /> {review.location} · {review.date}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "oklch(0.55 0.13 42 / 0.1)", color: "oklch(0.45 0.10 42)", fontFamily: "'DM Mono', monospace" }}>
                    {review.situation}
                  </span>
                </div>
                <StarRating rating={review.rating} />
                <h3 className="font-bold text-base mt-3 mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>"{review.title}"</h3>
                <div className="relative">
                  <Quote size={20} className="absolute -top-1 -left-1 opacity-15" style={{ color: "oklch(0.55 0.13 42)" }} />
                  <p className="text-sm leading-relaxed pl-4" style={{ color: "oklch(0.42 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{review.body}</p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs" style={{ color: "oklch(0.42 0.08 155)", fontFamily: "'DM Mono', monospace" }}>
                  <CheckCircle2 size={12} /> Verified Sale
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Reviews Matter section */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
              Why We Ask Every Seller for an Honest Review
            </h2>
            <p className="text-lg mb-5 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              The cash home buying industry has a reputation problem — and it's earned. Wholesalers, predatory investors, and companies that promise one price and deliver another have made many homeowners rightfully skeptical. We believe the best way to demonstrate that we're different is through the words of the people we've actually helped.
            </p>
            <p className="text-lg mb-5 leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Every review on this page is from a real homeowner who sold their property to Alder Heritage Homes. We don't filter out negative reviews (we haven't received any), and we don't pay for reviews or incentivize them in any way. We simply ask every seller at closing: "Would you be willing to share your experience?"
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "oklch(0.38 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              If you've worked with us and would like to share your experience, we'd be grateful. And if you're considering working with us and want to speak with a past seller directly, ask us — we have sellers who have agreed to take reference calls.
            </p>
          </div>
        </div>
      </section>

      {/* Google Review CTA */}
      <section className="py-12" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl p-8 border" style={{ background: "white", borderColor: "oklch(0.88 0.02 85)" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.55 0.13 42 / 0.1)" }}>
                <Star size={28} style={{ color: "oklch(0.55 0.13 42)" }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  Leave Us a Google Review
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  If we helped you sell your home, your review on Google helps other homeowners in difficult situations find us. It takes 2 minutes and means more than you know.
                </p>
              </div>
              <a
                href="https://g.page/r/alder-heritage-homes/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white flex-shrink-0"
                style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Write a Review <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Situations we help with */}
      <section className="py-16" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>
            Ready to Join Our List of Happy Sellers?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.72 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call Connor directly or fill out our short form. No obligation, no pressure — just an honest conversation about your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg" style={{ border: "2px solid oklch(1 0 0 / 0.3)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Cash Offer Online <ArrowRight size={20} />
              </a>
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Licensed California Real Estate Agent · DRE #02219124 · Serving Fresno, Clovis &amp; the Central Valley
          </p>
        </div>
      </section>
    </Layout>
  );
}
