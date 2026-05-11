import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Phone, Mail, Shield, Scale, Star } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { faqPageSchema, localBusinessSchema, breadcrumbSchema, personSchema } from "@/components/SchemaMarkup";

const DIVORCE_FAQS = [
  { q: "Can you work with both parties separately?", a: "Yes. I can communicate with each party separately, through their respective counsel, or jointly — whatever the situation requires. I remain neutral throughout." },
  { q: "What if one party refuses to cooperate?", a: "If the court has ordered the sale, I can work with the appointed receiver or the cooperating party to move forward. I have experience navigating difficult situations." },
  { q: "Will you reduce your offer at the last minute?", a: "Never. The price I offer is the price I pay. I do not use inspection contingencies or last-minute renegotiations. This protects the settlement agreement." },
  { q: "What is your service area?", a: "I purchase homes throughout the Central Valley, including Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, Madera, Kings County, and surrounding areas." },
  { q: "Are you a licensed real estate agent?", a: "Yes. I am a licensed California real estate agent (DRE #02219124). I am not a wholesaler. I purchase properties directly with my own capital." },
  { q: "Can you close on a court-ordered timeline?", a: "Yes. I can close in as little as 3 days or on whatever timeline the court or settlement agreement requires. I am experienced with court-ordered sales." },
  { q: "Do you charge commissions or fees?", a: "No. There are zero commissions and zero fees charged to the seller. Both parties receive the full cash offer amount as agreed." },
  { q: "What if the property needs repairs?", a: "I buy homes as-is, in any condition. No repair requests, no inspection contingencies. This eliminates a major source of conflict between divorcing parties." },
];

export default function ForDivorceAttorneys() {

  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="For Divorce Attorneys | Fast Home Sale Referral Partner"
        description="Divorce attorneys in Fresno: refer clients who need to sell the marital home fast. Licensed cash buyer, neutral party, proof of funds in 24 hours, close in 3 days."
        path="/for-divorce-attorneys"
      />
      <SchemaMarkup schema={localBusinessSchema()} id="divorce-atty-local-biz" />
      <SchemaMarkup schema={faqPageSchema(DIVORCE_FAQS)} id="divorce-atty-faq" />
      <SchemaMarkup schema={personSchema()} id="divorce-atty-person" />
      <SchemaMarkup schema={breadcrumbSchema([
        { name: "Home", url: "https://www.alderheritagehomes.com" },
        { name: "For Divorce Attorneys", url: "https://www.alderheritagehomes.com/for-divorce-attorneys" },
      ])} id="divorce-atty-breadcrumb" />
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            For Divorce Attorneys
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            The Fastest Way to Resolve<br />the Marital Home
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            When both parties need to sell the marital home quickly and cleanly, I provide a neutral, licensed, and transparent cash purchase — with proof of funds in 24 hours and the ability to close in 3 days.
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

      {/* Why Refer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Divorce Attorneys Refer Their Clients to Me</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Divorce cases require a buyer who is neutral, fast, and reliable. A failed sale or a last-minute price reduction can derail a settlement agreement. I eliminate that risk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Scale className="w-8 h-8 text-blue-600" />,
                title: "Completely Neutral Party",
                desc: "I have no relationship with either spouse. I treat both parties with equal professionalism and communicate transparently with both sides (or through counsel)."
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-600" />,
                title: "Close on the Court's Timeline",
                desc: "Whether the court orders a sale within 30 days or the parties want to close immediately, I accommodate the schedule. No delays, no contingencies."
              },
              {
                icon: <Shield className="w-8 h-8 text-green-600" />,
                title: "No Last-Minute Price Reductions",
                desc: "I never reduce my offer at the last minute. The price I offer is the price I pay. This protects the settlement agreement from being disrupted."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-purple-600" />,
                title: "Zero Fees to Either Party",
                desc: "No commissions, no closing costs charged to the sellers. Both parties receive their full share of the agreed cash offer amount."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-teal-600" />,
                title: "As-Is Purchase",
                desc: "I buy the home in its current condition. No repair requests, no inspection contingencies. The parties do not need to agree on repairs or improvements."
              },
              {
                icon: <Mail className="w-8 h-8 text-red-600" />,
                title: "Documentation for Court",
                desc: "I can provide proof of funds, written offers, and closing documentation in the format required by the court or the settlement agreement."
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

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How the Referral Process Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "You Identify a Case Where the Home Must Be Sold", desc: "Both parties have agreed (or the court has ordered) that the marital home must be sold. A traditional listing would take 60–90 days and involve showings, negotiations, and uncertainty." },
              { step: "2", title: "You Make a Simple Introduction", desc: "Call or text me at (559) 281-8016, or email connor@alderheritagehomes.com. I can communicate with both parties separately or together, depending on what counsel recommends." },
              { step: "3", title: "I Provide a Written Cash Offer Within 24 Hours", desc: "I review the property and provide a written offer within 24 hours, along with proof of funds. The offer is firm — no price reductions at closing." },
              { step: "4", title: "We Close and Distribute Proceeds", desc: "Closing can happen in 3–30 days. Proceeds are distributed according to the settlement agreement or court order. I work with the title company to ensure clean distribution." },
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
            "Connor was professional, fair, and made a very difficult situation much easier. He did exactly what he said he would do."
          </blockquote>
          <p className="text-gray-600 font-medium">— Google Review, 5 Stars · Alder Heritage Homes</p>
          <p className="text-sm text-gray-500 mt-1">32 five-star reviews on Google</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Connor Morris</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a licensed California real estate agent (DRE #02219124) and cash home buyer based in Fresno. I've purchased hundreds of homes throughout the Central Valley, including many divorce and distressed-sale situations.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I am not a wholesaler. I purchase properties directly with my own capital. I understand that divorce cases require discretion, neutrality, and reliability — and I take that responsibility seriously.
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
                q: "Can you work with both parties separately?",
                a: "Yes. I can communicate with each party separately, through their respective counsel, or jointly — whatever the situation requires. I remain neutral throughout."
              },
              {
                q: "What if one party refuses to cooperate?",
                a: "If the court has ordered the sale, I can work with the appointed receiver or the cooperating party to move forward. I have experience navigating difficult situations."
              },
              {
                q: "Will you reduce your offer at the last minute?",
                a: "Never. The price I offer is the price I pay. I do not use inspection contingencies or last-minute renegotiations. This protects the settlement agreement."
              },
              {
                q: "What is your service area?",
                a: "I purchase homes throughout the Central Valley, including Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, Madera, Kings County, and surrounding areas."
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
