import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Phone, Mail, Shield, Users, FileText, Star } from "lucide-react";

export default function ForProbateAttorneys() {
  useEffect(() => {
    document.title = "For Probate Attorneys | Trusted Cash Buyer Referral Partner | Alder Heritage Homes";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Probate attorneys in Fresno: refer your clients to a licensed, trusted cash buyer. Connor Morris buys inherited homes fast — proof of funds in 24 hours, close in 3 days. No wholesalers, no surprises.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "For Probate Attorneys — Referral Partner Program",
      "description": "Trusted cash buyer referral partner for Fresno probate attorneys. Licensed CA real estate agent, proof of funds in 24 hours, closes in 3 days.",
      "url": "https://www.alderheritagehomes.com/for-probate-attorneys",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.alderheritagehomes.com" },
          { "@type": "ListItem", "position": 2, "name": "For Probate Attorneys", "item": "https://www.alderheritagehomes.com/for-probate-attorneys" }
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
            For Probate Attorneys
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            A Trusted Cash Buyer<br />Your Clients Can Rely On
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            When your probate clients need to sell an inherited property quickly, I provide a fast, licensed, and transparent solution — with proof of funds in 24 hours and the ability to close in 3 days.
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

      {/* Why Refer Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Attorneys Refer Their Clients to Me</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Probate cases move on court timelines, not market timelines. Your clients need a buyer who can move fast, provide documentation, and never cause a deal to fall apart at the last minute.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Proof of Funds in 24 Hours",
                desc: "I can provide a written proof of funds letter within 24 hours of reviewing the property. No bank approval delays. No financing contingencies."
              },
              {
                icon: <Shield className="w-8 h-8 text-green-600" />,
                title: "Licensed CA Real Estate Agent",
                desc: "CA DRE #02219124. I am not a wholesaler. I purchase properties directly with my own capital. No assignment contracts, no surprises at closing."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-orange-600" />,
                title: "Zero Fees to the Estate",
                desc: "No commissions, no closing costs charged to the seller. The estate receives the full cash offer amount. This maximizes the net proceeds for heirs."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-purple-600" />,
                title: "Close in 3–30 Days",
                desc: "I can close in as little as 3 days or on whatever timeline the probate court requires. Flexible closing dates to match your case schedule."
              },
              {
                icon: <FileText className="w-8 h-8 text-red-600" />,
                title: "As-Is Purchases",
                desc: "I buy properties in any condition — hoarder homes, deferred maintenance, code violations, liens. No repair requests, no inspection contingencies."
              },
              {
                icon: <Users className="w-8 h-8 text-teal-600" />,
                title: "Experience with Multiple Heirs",
                desc: "I've worked with estates where multiple heirs disagree. I'm patient, professional, and experienced at navigating complex family dynamics."
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

      {/* How the Referral Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How the Referral Process Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "You Identify a Client Who Needs to Sell", desc: "Your client has inherited a property and wants a fast, clean sale — no listing, no showings, no waiting." },
              { step: "2", title: "You Make a Simple Introduction", desc: "Call or text me directly at (559) 281-8016, or email connor@alderheritagehomes.com. A brief introduction is all I need." },
              { step: "3", title: "I Contact Your Client Within Hours", desc: "I'll reach out to your client promptly, review the property details, and provide a written cash offer within 24 hours." },
              { step: "4", title: "We Close on the Estate's Timeline", desc: "Whether the court requires 30 days or the heirs want to close in 3 days, I accommodate the schedule. You stay informed throughout." },
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

      {/* Testimonial */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />)}
          </div>
          <blockquote className="text-xl text-gray-800 italic mb-4">
            "Connor made the process so easy. He was professional, responsive, and delivered exactly what he promised. The estate closed on time without any issues."
          </blockquote>
          <p className="text-gray-600 font-medium">— Google Review, 5 Stars · Alder Heritage Homes</p>
          <p className="text-sm text-gray-500 mt-1">32 five-star reviews on Google</p>
        </div>
      </section>

      {/* About Connor */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Connor Morris</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a licensed California real estate agent (DRE #02219124) and cash home buyer based in Fresno. I've purchased hundreds of homes throughout the Central Valley, including many probate and inherited properties.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Unlike most "we buy houses" companies you'll find online, I am not a wholesaler. I purchase properties directly with my own capital. When I make an offer, I have the funds to close — no financing contingencies, no last-minute price reductions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I work with probate attorneys, estate administrators, and heirs throughout Fresno County, Kings County, Tulare County, and the broader Central Valley.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>CA DRE License #02219124</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>32 five-star Google reviews</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Serving Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, and surrounding areas</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Contact Connor Directly</h3>
              <div className="space-y-3 mb-6">
                <a href="tel:5592818016" className="flex items-center justify-center gap-2 text-lg font-semibold text-orange-600 hover:text-orange-700">
                  <Phone className="w-5 h-5" /> (559) 281-8016
                </a>
                <a href="mailto:connor@alderheritagehomes.com" className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900">
                  <Mail className="w-4 h-4" /> connor@alderheritagehomes.com
                </a>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Prefer to send a referral by email? Just include the client's name, property address, and the best way to reach them.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Send a Referral
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Common Questions from Attorneys</h2>
          <div className="space-y-5">
            {[
              {
                q: "Are you a wholesaler?",
                a: "No. I am a licensed California real estate agent (DRE #02219124) and I purchase properties directly with my own capital. I do not assign contracts to other buyers. When I make an offer, I have the funds to close."
              },
              {
                q: "Can you provide proof of funds?",
                a: "Yes. I can provide a written proof of funds letter within 24 hours of reviewing the property. This can be provided to the court or to other parties in the estate as needed."
              },
              {
                q: "What if the property has liens, back taxes, or code violations?",
                a: "I purchase properties in any condition, including those with liens, back taxes, deferred maintenance, or code violations. I handle these issues as part of the purchase — the estate does not need to resolve them before closing."
              },
              {
                q: "What is your service area?",
                a: "I purchase homes throughout the Central Valley, including Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, Madera, Kings County, and surrounding areas."
              },
              {
                q: "Is there a referral fee?",
                a: "I do not pay referral fees to attorneys, as this may implicate California State Bar rules. However, I am happy to provide a reciprocal referral relationship and to be a reliable resource for your clients."
              },
            ].map((item) => (
              <Card key={item.q} className="p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Referral?</h2>
          <p className="text-slate-300 mb-8">
            Call or text me directly. I'll respond within a few hours and reach out to your client promptly.
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
