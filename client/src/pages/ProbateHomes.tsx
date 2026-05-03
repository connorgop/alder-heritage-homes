import React, { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, Calculator, FileText, DollarSign, Clock } from "lucide-react";

export default function ProbateHomes() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [calcValues, setCalcValues] = useState({
    propertyValue: 300000,
    repairCost: 25000,
  });

  const listingProceeds = calcValues.propertyValue * 0.93 - calcValues.repairCost;
  const cashProceeds = calcValues.propertyValue * 0.95;
  const savings = Math.max(0, cashProceeds - listingProceeds);

  const faqs = [
    {
      q: "What is probate and why is it required?",
      a: "Probate is a court-supervised process that transfers property from a deceased person's name to their heirs. It's required in California when someone dies owning real property unless the property was held in a living trust or with a joint tenant.",
    },
    {
      q: "How long does probate take?",
      a: "Typically 6-12 months for a straightforward estate. It can be longer if there are disputes, creditor claims, or tax issues. Smaller counties like Tulare and Madera tend to move faster than Fresno County.",
    },
    {
      q: "What is the overbid process?",
      a: "At the court confirmation hearing, anyone can submit a higher bid (overbid) on the property. The minimum overbid is the accepted price plus 5% plus $500. If an overbid is submitted, there's a courtroom auction.",
    },
    {
      q: "Can I sell the property before probate opens?",
      a: "No. The executor cannot sell the property until they have Letters Testamentary (court authority). This typically takes 6-8 weeks after filing the probate petition.",
    },
    {
      q: "Why should I use a cash buyer for a probate sale?",
      a: "Cash buyers eliminate financing contingencies (the most common reason probate sales fail). They understand the probate process, can close quickly after court confirmation, and provide certainty in an uncertain timeline.",
    },
    {
      q: "What if the property is in poor condition?",
      a: "A cash buyer is often the best option. Traditional buyers require financing, which means the property must appraise at a certain value. If it doesn't, the sale falls apart. A cash buyer eliminates this risk.",
    },
    {
      q: "Can I get an offer before probate opens?",
      a: "Yes. Cash buyers can provide preliminary offers before probate is opened, giving the family a realistic expectation of proceeds and helping them make informed decisions.",
    },
    {
      q: "What are executor duties?",
      a: "The executor must: (1) file the probate petition, (2) obtain Letters Testamentary, (3) publish Notice to Creditors, (4) inventory estate assets, (5) manage the sale process, (6) pay debts and taxes, and (7) distribute proceeds to heirs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Probate Home Sales Made Simple
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Sell your inherited property fast, with certainty. We handle the probate process so you don't have to.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="tel:5592818016"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
            >
              Call for Free Offer: (559) 281-8016
            </a>
            <Link
              href="/compare-options"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:bg-amber-50 transition"
            >
              Compare Options
            </Link>
          </div>
        </div>
      </section>

      {/* Probate Calculator */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-gray-900">Probate Sale Calculator</h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Property Details</h3>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Property Value
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="10000"
                    value={calcValues.propertyValue}
                    onChange={(e) =>
                      setCalcValues({ ...calcValues, propertyValue: Number(e.target.value) })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-2xl font-bold text-amber-600 mt-2">
                    ${calcValues.propertyValue.toLocaleString()}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Repair Costs
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={calcValues.repairCost}
                    onChange={(e) =>
                      setCalcValues({ ...calcValues, repairCost: Number(e.target.value) })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-2xl font-bold text-amber-600 mt-2">
                    ${calcValues.repairCost.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Net Proceeds</h3>

                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <div className="text-sm text-gray-600 mb-1">Traditional Listing (After Realtor, Closing Costs, Repairs)</div>
                    <div className="text-3xl font-bold text-red-600">
                      ${listingProceeds.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <div className="text-sm text-gray-600 mb-1">Cash Sale with Alder Heritage (As-Is, No Repairs)</div>
                    <div className="text-3xl font-bold text-green-600">
                      ${cashProceeds.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                    <div className="text-sm text-gray-600 mb-1">You Keep More with Cash Sale</div>
                    <div className="text-3xl font-bold text-amber-600">
                      +${savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Alder Heritage for Probate Sales</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-amber-200 rounded-lg p-6">
              <Clock className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Closes</h3>
              <p className="text-gray-700">
                We close in 3 days after court confirmation. No financing delays, no appraisal contingencies, no surprises.
              </p>
            </div>

            <div className="bg-white border-2 border-amber-200 rounded-lg p-6">
              <DollarSign className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Highest Cash Offers</h3>
              <p className="text-gray-700">
                We price match or beat any competitor. If you get a higher offer, we'll match it or beat it.
              </p>
            </div>

            <div className="bg-white border-2 border-amber-200 rounded-lg p-6">
              <FileText className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Probate Experts</h3>
              <p className="text-gray-700">
                100+ probate sales completed. We work directly with probate attorneys and executors throughout the Central Valley.
              </p>
            </div>

            <div className="bg-white border-2 border-amber-200 rounded-lg p-6">
              <Calculator className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Surprises</h3>
              <p className="text-gray-700">
                No price reductions at closing. No hidden fees. No last-minute negotiations. We honor our offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executor Guide */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Executor's Guide to Selling During Probate</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: File the Probate Petition (Weeks 1-8)</h3>
              <p className="text-gray-700 mb-3">
                The executor files a petition to open probate with the Superior Court in the county where the decedent lived. The court sets an initial hearing date 6-8 weeks after filing.
              </p>
              <p className="text-gray-700">
                <strong>Action:</strong> Contact a cash buyer now. Get a preliminary offer before probate opens.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Obtain Letters Testamentary (Months 1-3)</h3>
              <p className="text-gray-700 mb-3">
                At the initial hearing, the court appoints the executor and issues Letters Testamentary. With this document, the executor can now sell the property.
              </p>
              <p className="text-gray-700">
                <strong>Action:</strong> Obtain a probate referee appraisal. List the property or accept a cash offer.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Accept an Offer (Months 2-4)</h3>
              <p className="text-gray-700 mb-3">
                Once an offer is accepted, file a "Report of Sale and Petition for Order Confirming Sale" with the probate court. The court sets a confirmation hearing 4-6 weeks later.
              </p>
              <p className="text-gray-700">
                <strong>Action:</strong> Prepare for the court confirmation hearing and the overbid process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Court Confirmation & Overbid Process</h3>
              <p className="text-gray-700 mb-3">
                At the confirmation hearing, the court may allow overbids. If an overbid is submitted, there's a courtroom auction. The property goes to the highest bidder.
              </p>
              <p className="text-gray-700">
                <strong>Action:</strong> Be prepared for the overbid process. With a cash buyer, you have certainty.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Close Escrow (Months 4-6)</h3>
              <p className="text-gray-700 mb-3">
                After court confirmation, escrow closes. The executor signs all documents on behalf of the estate. Proceeds go into the estate account.
              </p>
              <p className="text-gray-700">
                <strong>Action:</strong> Coordinate with the escrow company and your probate attorney. Close on the executor's timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.q}</h3>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-200 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Sell Your Probate Property?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free cash offer in 24 hours. No obligation. No pressure.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:5592818016"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition text-lg"
            >
              Call (559) 281-8016
            </a>
            <Link
              href="/contact"
              className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition text-lg"
            >
              Get Free Offer
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Resources</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/blog/selling-house-during-probate-california-timeline"
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Probate Timeline</h3>
              <p className="text-gray-700 mb-4">
                Step-by-step guide to the California probate process with county-specific details.
              </p>
              <span className="text-amber-600 font-semibold">Read Article →</span>
            </Link>

            <Link
              href="/seller-education"
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seller Education Hub</h3>
              <p className="text-gray-700 mb-4">
                Complete guide to selling your house: liens, probate, foreclosure, and more.
              </p>
              <span className="text-amber-600 font-semibold">Explore Hub →</span>
            </Link>

            <Link
              href="/case-studies"
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Probate Case Studies</h3>
              <p className="text-gray-700 mb-4">
                See how we've helped families sell inherited properties quickly and fairly.
              </p>
              <span className="text-amber-600 font-semibold">View Cases →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
