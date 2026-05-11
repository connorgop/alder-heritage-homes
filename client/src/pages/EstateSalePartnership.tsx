import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Phone, Mail, Shield, Home, Star } from "lucide-react";

export default function EstateSalePartnership() {
  useEffect(() => {
    document.title = "Estate Sale Companies | Cash Buyer Partnership | Alder Heritage Homes Fresno";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Estate sale companies in Fresno: partner with a licensed cash buyer for your clients who also need to sell the house. Connor Morris buys homes fast — proof of funds in 24 hours, close in 3 days.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Estate Sale Company Partnership Program",
      "description": "Trusted cash buyer partnership for Fresno estate sale companies. Licensed CA real estate agent, proof of funds in 24 hours, closes in 3 days.",
      "url": "https://www.alderheritagehomes.com/estate-sale-partnership",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.alderheritagehomes.com" },
          { "@type": "ListItem", "position": 2, "name": "Estate Sale Partnership", "item": "https://www.alderheritagehomes.com/estate-sale-partnership" }
        ]
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            For Estate Sale Companies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Your Clients Need to Sell<br />the House Too
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            After the estate sale is done, your clients often still have a house to sell. I'm a licensed cash buyer who can purchase the property quickly — so your clients can move on without the hassle of a traditional listing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5592818016">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8">
                <Phone className="w-4 h-4 mr-2" /> Call Connor: (559) 281-8016
              </Button>
            </a>
            <a href="mailto:connor@alderheritagehomes.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-slate-700 font-semibold px-8">
                <Mail className="w-4 h-4 mr-2" /> Email Connor
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The Problem Estate Sale Companies Face</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            You run a great estate sale. The personal property is sold. But then your client asks: "What do we do with the house?" Most estate sale companies don't have a reliable answer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-red-400">
              <h3 className="font-bold text-gray-900 mb-2">The Traditional Listing Problem</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A traditional listing takes 60–90 days, requires the family to maintain the property, involves showings and negotiations, and often results in a lower net price after commissions and repairs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-red-400">
              <h3 className="font-bold text-gray-900 mb-2">The Wholesaler Problem</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most "we buy houses" companies are wholesalers who don't have the capital to close. They'll put the property under contract and then shop it to real investors — costing your client $20,000–$60,000 in lost value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner with Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Licensed, Not a Wholesaler",
                desc: "CA DRE #02219124. I purchase properties directly with my own capital. No assignment contracts, no middlemen, no surprises."
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-600" />,
                title: "Proof of Funds in 24 Hours",
                desc: "I can provide a written proof of funds letter within 24 hours. Your clients can move forward with confidence."
              },
              {
                icon: <Home className="w-8 h-8 text-green-600" />,
                title: "Buy After the Estate Sale",
                desc: "I can purchase the home immediately after the estate sale is complete — or even before. Flexible timing to match your client's needs."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-purple-600" />,
                title: "Zero Fees to the Family",
                desc: "No commissions, no closing costs. The family receives the full cash offer amount. This is the cleanest way to close an estate."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-teal-600" />,
                title: "As-Is Purchase",
                desc: "I buy the home in its current condition after the estate sale — no cleaning, no repairs, no staging required."
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-500" />,
                title: "32 Five-Star Reviews",
                desc: "Your clients can verify my track record on Google. 32 five-star reviews from real sellers throughout the Central Valley."
              },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />)}
          </div>
          <blockquote className="text-xl text-gray-800 italic mb-4">
            "We needed to sell quickly after handling my mother's estate. Connor was honest, fast, and made the whole process easy. I would recommend him to anyone."
          </blockquote>
          <p className="text-gray-600 font-medium">— Google Review, 5 Stars · Alder Heritage Homes</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How the Partnership Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "You Complete the Estate Sale", desc: "Run your estate sale as you normally would. When your client asks about selling the house, you have a trusted referral ready." },
              { step: "2", title: "You Introduce Your Client to Me", desc: "A simple text, call, or email introduction is all I need. I'll take it from there and handle everything professionally." },
              { step: "3", title: "I Provide a Cash Offer Within 24 Hours", desc: "I review the property and provide a written cash offer within 24 hours. No pressure, no obligation." },
              { step: "4", title: "We Close and Your Client Moves On", desc: "Closing in 3–30 days. Your client receives their cash and can move on with their life. You've provided a complete solution." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's Build a Partnership</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm looking to build long-term relationships with estate sale companies throughout the Central Valley. When you have a client who needs to sell the house after the estate sale, I want to be your first call.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'll treat your clients with the same professionalism and care that you do — because your reputation is on the line when you make a referral, and I take that seriously.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>CA DRE License #02219124</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Serving Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, and surrounding areas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>32 five-star Google reviews — verifiable track record</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border">
              <h3 className="text-xl font-bold mb-4">Contact Connor</h3>
              <div className="space-y-3 mb-6">
                <a href="tel:5592818016" className="flex items-center justify-center gap-2 text-lg font-semibold text-orange-600 hover:text-orange-700">
                  <Phone className="w-5 h-5" /> (559) 281-8016
                </a>
                <a href="mailto:connor@alderheritagehomes.com" className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900">
                  <Mail className="w-4 h-4" /> connor@alderheritagehomes.com
                </a>
              </div>
              <Link href="/contact">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-slate-300 mb-8">
            Call or text me to discuss how we can work together to serve your clients better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5592818016">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 font-semibold px-8">
                <Phone className="w-4 h-4 mr-2" /> (559) 281-8016
              </Button>
            </a>
            <a href="mailto:connor@alderheritagehomes.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-slate-700 font-semibold px-8">
                <Mail className="w-4 h-4 mr-2" /> Email Connor
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
