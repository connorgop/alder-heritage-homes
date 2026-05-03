import React, { useState } from "react";
import { AlertTriangle, CheckCircle2, XCircle, ChevronDown, Phone, ArrowRight } from "lucide-react";

export default function CompetitorWarningAd() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    situation: "",
  });

  const competitors = [
    {
      name: "GREimagined",
      redFlags: ["Assignment contracts", "No proof of funds", "30+ day close", "Last-minute price cuts"],
    },
    {
      name: "559 Home Buyers",
      redFlags: ["Assignment contracts", "No proof of funds", "Extended timeline", "Bait-and-switch tactics"],
    },
    {
      name: "Osborne Homes",
      redFlags: ["Assignment contracts", "Slow closing", "Multiple middlemen", "Price reductions"],
    },
    {
      name: "KO Homes",
      redFlags: ["Assignment contracts", "No proof of funds", "45+ day close", "Contingencies"],
    },
    {
      name: "Pinnacle Investments",
      redFlags: ["Assignment contracts", "No proof of funds", "30+ days", "Last-minute cuts"],
    },
    {
      name: "Home Helpers Group",
      redFlags: ["Assignment contracts", "No proof of funds", "30-60 days", "Multiple contingencies"],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your backend
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours with your cash offer.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO - IMMEDIATE HOOK */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 px-4 py-12 text-white">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-8 w-8 flex-shrink-0" />
            <h1 className="text-3xl font-bold">Is Your "Cash Buyer" Actually a Wholesaler?</h1>
          </div>
          <p className="mb-6 text-lg text-red-100">
            99% of cash buyers in Fresno are wholesalers. They don't have cash. They don't buy homes. They tie them up and assign contracts to real buyers. Here's how to spot them.
          </p>
          <div className="flex items-center gap-2 rounded-lg bg-red-500/30 p-3 border border-red-400">
            <Phone className="h-5 w-5 flex-shrink-0" />
            <span className="font-bold">Call Connor: (559) 281-8016 for a real cash offer</span>
          </div>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="grid gap-8 px-4 py-12 md:grid-cols-3">
        <div className="md:col-span-2">
          {/* THE SCAM EXPLAINED - VISUAL */}
          <div className="mb-12 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">How the Wholesaling Scam Works</h2>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "They Contact You",
                  desc: '"We buy homes for cash. We can close in 7 days."',
                  icon: "📞",
                },
                {
                  step: 2,
                  title: "You Sign a Contract",
                  desc: 'Contract says "and/or assignee" (they can assign it to someone else)',
                  icon: "✍️",
                },
                {
                  step: 3,
                  title: "They Search for a Real Buyer",
                  desc: "They contact real investors to find someone willing to pay more",
                  icon: "🔍",
                },
                {
                  step: 4,
                  title: "They Assign the Contract",
                  desc: "They assign it to the real buyer and take a $10K-$50K fee",
                  icon: "💰",
                },
                {
                  step: 5,
                  title: "You Lose Money",
                  desc: "You get less. The real buyer gets the home. The wholesaler gets paid.",
                  icon: "📉",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-2xl font-bold text-red-600">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Step {item.step}: {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RED FLAGS */}
          <div className="mb-12 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Red Flags: How to Spot a Wholesaler</h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Contract says 'and/or assignee'",
                "Can't provide proof of funds in 24 hours",
                "Takes 30+ days to close",
                "Asks for price reduction at closing",
                "Not a licensed real estate agent",
                "Multiple contingencies",
              ].map((flag, idx) => (
                <div key={idx} className="flex items-start gap-2 rounded-lg bg-red-50 p-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">{flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KNOWN WHOLESALERS */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Known Wholesalers in Fresno</h2>

            <div className="space-y-2">
              {competitors.map((company) => (
                <button
                  key={company.name}
                  onClick={() =>
                    setExpandedCompany(expandedCompany === company.name ? null : company.name)
                  }
                  className="w-full rounded-lg border-2 border-gray-200 bg-white p-4 text-left hover:border-red-300 hover:bg-red-50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">{company.name}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-600 transition-transform ${
                        expandedCompany === company.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {expandedCompany === company.name && (
                    <div className="mt-3 border-t pt-3">
                      <p className="mb-2 text-xs font-semibold text-gray-600">RED FLAGS:</p>
                      <ul className="space-y-1">
                        {company.redFlags.map((flag, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <XCircle className="h-3 w-3 text-red-600 flex-shrink-0" />
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR - LEAD CAPTURE FORM */}
        <div className="md:col-span-1">
          <div className="sticky top-4 rounded-lg bg-gradient-to-br from-green-600 to-green-700 p-6 shadow-xl text-white">
            <h3 className="mb-4 text-2xl font-bold">Get a Real Cash Offer</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {formStep === 1 ? (
                <>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                      className="w-full rounded-lg bg-white/20 px-4 py-2 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(559) 123-4567"
                      required
                      className="w-full rounded-lg bg-white/20 px-4 py-2 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    className="w-full rounded-lg bg-white text-green-600 font-bold py-2 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-semibold mb-1">City</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg bg-white/20 px-4 py-2 text-white border border-white/30 focus:outline-none focus:border-white"
                    >
                      <option value="">Select a city</option>
                      <option value="fresno">Fresno</option>
                      <option value="clovis">Clovis</option>
                      <option value="visalia">Visalia</option>
                      <option value="bakersfield">Bakersfield</option>
                      <option value="hanford">Hanford</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Your Situation</label>
                    <select
                      name="situation"
                      value={formData.situation}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg bg-white/20 px-4 py-2 text-white border border-white/30 focus:outline-none focus:border-white"
                    >
                      <option value="">Select a situation</option>
                      <option value="foreclosure">Facing Foreclosure</option>
                      <option value="behind">Behind on Mortgage</option>
                      <option value="probate">Inherited/Probate Home</option>
                      <option value="divorce">Divorce</option>
                      <option value="landlord">Tired Landlord</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-white text-green-600 font-bold py-3 hover:bg-gray-100 transition-colors text-lg"
                  >
                    Get My Cash Offer
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="w-full text-sm text-white/80 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                </>
              )}
            </form>

            <div className="mt-6 border-t border-white/30 pt-6">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-semibold">Licensed CA Real Estate Agent</span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-semibold">Proof of Funds in 24 Hours</span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-semibold">Close in 3 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-semibold">Price Match Guarantee</span>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-white/20 p-3 text-center border border-white/30">
              <p className="text-xs text-white/80 mb-2">Or call directly:</p>
              <a href="tel:5592818016" className="block text-xl font-bold hover:underline">
                (559) 281-8016
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HOW WE'RE DIFFERENT */}
      <div className="bg-green-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Why Alder Heritage Is Different</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Licensed Real Estate Agent",
                desc: "DRE #02219124. Regulated and accountable.",
              },
              {
                title: "Proof of Funds in 24 Hours",
                desc: "We actually have the cash. No searching for buyers.",
              },
              {
                title: "Close in 3 Days",
                desc: "We have capital. No delays. No contingencies.",
              },
              {
                title: "No Assignment Contracts",
                desc: "Our contracts don't say 'and/or assignee.'",
              },
              {
                title: "Price Match Guarantee",
                desc: "We match or beat any cash offer. No last-minute cuts.",
              },
              {
                title: "700+ Homes Purchased",
                desc: "Since 2008. Real capital. Real results.",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg bg-white p-4 shadow">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">Ready to Sell to a Real Buyer?</h2>
          <p className="mb-6 text-lg">
            Get a free cash offer from Alder Heritage Homes. No wholesalers. No assignment contracts. Just a fair offer from someone who actually has the cash.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:5592818016"
              className="rounded-lg bg-white px-8 py-3 font-bold text-green-600 hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call (559) 281-8016
            </a>
            <button
              onClick={() => {
                const form = document.querySelector("form");
                form?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white hover:bg-white/10 transition-colors"
            >
              Get My Cash Offer
            </button>
          </div>
        </div>
      </div>

      {/* TRUST SIGNALS */}
      <div className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-sm font-semibold text-gray-600">TRUSTED BY CENTRAL VALLEY HOMEOWNERS</p>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-gray-900">700+</div>
              <p className="text-sm text-gray-700">Homes Purchased</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">3 Days</div>
              <p className="text-sm text-gray-700">Average Close</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">$0</div>
              <p className="text-sm text-gray-700">Fees or Commissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
