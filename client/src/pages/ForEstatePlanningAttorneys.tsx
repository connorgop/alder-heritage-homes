import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Phone, Mail, Shield, Users, FileText, Star, Scale } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { faqPageSchema, localBusinessSchema, breadcrumbSchema, personSchema } from "@/components/SchemaMarkup";
import { Link } from "wouter";

const ESTATE_PLANNING_FAQS = [
  { q: "Are you a wholesaler?", a: "No. I am a licensed California real estate agent (DRE #02219124) and I purchase properties directly with my own capital. I do not assign contracts to other buyers. When I make an offer, I have the funds to close." },
  { q: "Can you provide proof of funds?", a: "Yes. I can provide a written proof of funds letter within 24 hours of reviewing the property. This can be shared with your client or included in trust documentation as needed." },
  { q: "What types of properties do you buy?", a: "I buy homes in any condition throughout the Central Valley — including properties with deferred maintenance, liens, code violations, back taxes, title issues, or properties held in trust or living trusts." },
  { q: "Can you work with properties held in a living trust?", a: "Yes. I regularly work with successor trustees and trust administrators to purchase properties held in revocable and irrevocable living trusts. I understand the documentation requirements and can work on the trustee's timeline." },
  { q: "What if the property has multiple beneficiaries who disagree?", a: "I have experience navigating situations where beneficiaries have different priorities. I am patient, professional, and can provide written offers that all parties can review independently." },
  { q: "Is there a referral fee?", a: "I do not pay referral fees to attorneys, as this may implicate California State Bar rules. However, I am happy to provide a reciprocal referral relationship and to be a reliable resource for your clients." },
  { q: "How quickly can you close?", a: "I can close in as little as 3 days or on whatever timeline works for the trust or estate. I have no bank approval process — I purchase with my own capital." },
  { q: "What counties do you serve?", a: "I serve Fresno County, Kings County, Tulare County, Kern County, Madera County, and surrounding Central Valley counties." },
];

export default function ForEstatePlanningAttorneys() {
  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="For Estate Planning Attorneys | Trusted Cash Buyer Partner | Alder Heritage Homes"
        description="Estate planning attorneys in Fresno: refer your clients to a licensed, trusted cash buyer for trust properties and estate homes. Connor buys directly — proof of funds in 24 hours, close in 3 days. No wholesalers."
        path="/for-estate-planning-attorneys"
      />
      <SchemaMarkup schema={localBusinessSchema()} id="estate-plan-atty-local-biz" />
      <SchemaMarkup schema={faqPageSchema(ESTATE_PLANNING_FAQS)} id="estate-plan-atty-faq" />
      <SchemaMarkup schema={personSchema()} id="estate-plan-atty-person" />
      <SchemaMarkup schema={breadcrumbSchema([
        { name: "Home", url: "https://www.alderheritagehomes.com" },
        { name: "For Estate Planning Attorneys", url: "https://www.alderheritagehomes.com/for-estate-planning-attorneys" },
      ])} id="estate-plan-atty-breadcrumb" />

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            For Estate Planning Attorneys
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            A Trusted Cash Buyer<br />for Your Trust &amp; Estate Clients
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            When your clients need to sell a property held in a living trust, revocable trust, or estate, I provide a fast, licensed, and transparent solution — with proof of funds in 24 hours and the ability to close on any timeline.
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

      {/* Trust Badges */}
      <section className="bg-slate-50 py-10 px-4 border-b">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-orange-600">24 hrs</div>
            <div className="text-sm text-slate-600 mt-1">Proof of Funds</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">3 days</div>
            <div className="text-sm text-slate-600 mt-1">Minimum Close</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">$0</div>
            <div className="text-sm text-slate-600 mt-1">Commissions or Fees</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">DRE #02219124</div>
            <div className="text-sm text-slate-600 mt-1">Licensed CA Agent</div>
          </div>
        </div>
      </section>

      {/* Why Attorneys Refer */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Estate Planning Attorneys Refer to Connor</h2>
          <p className="text-slate-600 mb-10 text-lg">
            When a client's estate plan involves real property, the successor trustee or personal representative often needs to sell quickly, privately, and without the complexity of a traditional listing. I provide a reliable solution that your clients can trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-7 h-7 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Licensed and Accountable</h3>
                  <p className="text-slate-600 text-sm">California DRE #02219124. I am legally accountable for my conduct and can be verified through the DRE's public license lookup. Not a wholesaler, not an unlicensed investor.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-7 h-7 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Real Capital, Real Offers</h3>
                  <p className="text-slate-600 text-sm">I purchase with my own funds. No bank approval, no financing contingencies, no last-minute price reductions. Proof of funds available within 24 hours of reviewing the property.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <FileText className="w-7 h-7 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Trust &amp; Estate Experience</h3>
                  <p className="text-slate-600 text-sm">I regularly work with successor trustees, trust administrators, and personal representatives. I understand the documentation requirements and can work within the trustee's authority and timeline.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-7 h-7 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Flexible Timeline</h3>
                  <p className="text-slate-600 text-sm">I can close in 3 days or accommodate whatever timeline the trust or estate requires. No pressure, no artificial deadlines — I work around your client's needs.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Users className="w-7 h-7 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Multiple Beneficiaries</h3>
                  <p className="text-slate-600 text-sm">I have experience working with estates where beneficiaries have different priorities or disagree on price. I am patient, professional, and provide written offers all parties can review independently.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Any Condition, Any Title Situation</h3>
                  <p className="text-slate-600 text-sm">I buy properties with deferred maintenance, liens, back taxes, code violations, or title issues. The trustee does not need to resolve these before closing — I handle them as part of the purchase.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Trust Property Situations */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Common Situations I Handle</h2>
          <p className="text-slate-600 mb-8">These are the property situations I encounter most often with estate planning attorney referrals:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Successor trustee needs to liquidate trust real property",
              "Living trust property with deferred maintenance or repairs needed",
              "Multiple beneficiaries who need a fast, private sale",
              "Trust property with liens, back taxes, or code violations",
              "Out-of-state trustee who cannot manage a traditional listing",
              "Inherited home held in trust where heirs want a clean exit",
              "Trust property with title issues or clouded ownership history",
              "Elderly client transitioning to assisted living — needs fast sale",
              "Irrevocable trust property requiring court approval for sale",
              "Family trust property where beneficiaries disagree on listing price",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">How a Referral Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "You introduce your client", body: "A brief email or phone call is all it takes. I'll follow up with your client directly and keep you informed of the progress." },
              { step: "2", title: "I review the property within 24 hours", body: "I research the address, assess condition, review any title issues, and prepare a written cash offer. No obligation, no pressure." },
              { step: "3", title: "Your client reviews the offer", body: "The offer is in writing, with proof of funds attached. Your client can take as much time as they need to review it with you." },
              { step: "4", title: "Close on the trustee's timeline", body: "I can close in 3 days or accommodate whatever timeline the trust or estate requires. I handle all closing costs." },
            ].map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-slate-600">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connor Bio */}
      <section className="bg-orange-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">About Connor Morris</h2>
              <p className="text-slate-700 mb-4">
                I am a licensed California real estate agent (DRE #02219124) and direct cash buyer serving the Central Valley. I have purchased homes throughout Fresno County, Kings County, Tulare County, Kern County, and Madera County.
              </p>
              <p className="text-slate-700 mb-4">
                I specialize in situations that require speed, discretion, and experience — probate, trust sales, inherited properties, foreclosure, and distressed conditions. I purchase with my own capital, which means no financing contingencies and no last-minute surprises.
              </p>
              <p className="text-slate-700 mb-6">
                I am happy to be a resource for your clients and to provide a reciprocal referral relationship for real estate matters that come through your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:5592818016">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Phone className="w-4 h-4 mr-2" /> (559) 281-8016
                  </Button>
                </a>
                <a href="mailto:connor@alderheritagehomes.com">
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" /> connor@alderheritagehomes.com
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-700 text-sm italic mb-3">"Connor was professional, transparent, and closed exactly when he said he would. My client was very pleased with the process."</p>
                <p className="text-sm font-semibold text-slate-800">— Local Estate Attorney, Fresno</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {ESTATE_PLANNING_FAQS.map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-slate-800">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/for-probate-attorneys">
              <div className="bg-white rounded-lg p-4 border hover:border-orange-400 transition-colors cursor-pointer">
                <p className="font-semibold text-slate-800 text-sm">For Probate Attorneys</p>
                <p className="text-slate-500 text-xs mt-1">Probate court sales and inherited homes</p>
              </div>
            </Link>
            <Link href="/for-divorce-attorneys">
              <div className="bg-white rounded-lg p-4 border hover:border-orange-400 transition-colors cursor-pointer">
                <p className="font-semibold text-slate-800 text-sm">For Divorce Attorneys</p>
                <p className="text-slate-500 text-xs mt-1">Fast, neutral home sales during divorce</p>
              </div>
            </Link>
            <Link href="/trust-center">
              <div className="bg-white rounded-lg p-4 border hover:border-orange-400 transition-colors cursor-pointer">
                <p className="font-semibold text-slate-800 text-sm">Trust Center</p>
                <p className="text-slate-500 text-xs mt-1">Credentials, license, and proof of funds</p>
              </div>
            </Link>
            <Link href="/probate-homes">
              <div className="bg-white rounded-lg p-4 border hover:border-orange-400 transition-colors cursor-pointer">
                <p className="font-semibold text-slate-800 text-sm">Probate Home Sales</p>
                <p className="text-slate-500 text-xs mt-1">How we work with estate properties</p>
              </div>
            </Link>
            <Link href="/sell-inherited-property-fresno">
              <div className="bg-white rounded-lg p-4 border hover:border-orange-400 transition-colors cursor-pointer">
                <p className="font-semibold text-slate-800 text-sm">Sell Inherited Property</p>
                <p className="text-slate-500 text-xs mt-1">Inherited homes in Fresno and Central Valley</p>
              </div>
            </Link>
            <Link href="/sell-house-title-issues-fresno">
              <div className="bg-white rounded-lg p-4 border hover:border-orange-400 transition-colors cursor-pointer">
                <p className="font-semibold text-slate-800 text-sm">Title Issues</p>
                <p className="text-slate-500 text-xs mt-1">Clouded title, liens, deed problems</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Scale className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Refer a Client?</h2>
          <p className="text-orange-100 text-lg mb-8">
            A brief call or email is all it takes. I'll follow up with your client promptly and keep you informed throughout the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5592818016">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8">
                <Phone className="w-4 h-4 mr-2" /> Call (559) 281-8016
              </Button>
            </a>
            <a href="mailto:connor@alderheritagehomes.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700 font-semibold px-8">
                <Mail className="w-4 h-4 mr-2" /> Email Connor
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
