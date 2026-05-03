import React from "react";
import { CheckCircle2, Clock, DollarSign, Home, TrendingUp, AlertCircle } from "lucide-react";

export default function CashBuyerVsListing() {
  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-semibold">COMPARISON</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Cash Buyer vs Traditional Listing: Complete Comparison
          </h1>
          <p className="mb-6 text-lg text-blue-100">
            Thinking about selling your house? Here's exactly what to expect with a cash buyer vs listing on the market. See the timeline, costs, and net proceeds side-by-side.
          </p>
          <div className="flex items-center gap-2 text-sm text-blue-100">
            <span>Published: May 3, 2026</span>
            <span>•</span>
            <span>Read time: 10 minutes</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="mb-4 text-lg text-gray-700">
            You've decided to sell your house. Now comes the big question: Should you list it on the market with a real estate agent, or sell it to a cash buyer?
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Both options have pros and cons. A traditional listing might get you a higher price, but it takes months and costs thousands in commissions. A cash sale is faster and simpler, but you might leave money on the table.
          </p>
          <p className="text-lg text-gray-700">
            This guide compares both options side-by-side so you can make the best decision for your situation.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Factor</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-blue-600">Cash Buyer</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Traditional Listing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Closing Timeline</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">3-7 days</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">30-90 days</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Time on Market</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">1-3 days</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">30-120 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Repairs Needed</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">None</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Often required</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Inspections</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">Buyer's choice</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Usually required</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Appraisal</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">Not needed</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Required for financing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Financing Contingency</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">No (cash ready)</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Yes (buyer must qualify)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Commission</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">$0</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">5-6% ($10K-30K)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Closing Costs</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">$1-3K</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">$3-5K</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Typical Offer Price</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">70-85% of market value</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">90-100% of market value</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Deal Certainty</td>
                <td className="border border-gray-300 px-4 py-3 text-blue-600">Very high (cash ready)</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Medium (financing risk)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Cash Buyer Section */}
        <section className="mb-12 rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
            Selling to a Cash Buyer
          </h2>

          <h3 className="mb-3 text-lg font-semibold text-gray-900">Timeline</h3>
          <div className="mb-6 space-y-2 text-gray-700">
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">Day 1</div>
              <div>
                <p className="font-semibold">Contact cash buyer</p>
                <p className="text-sm text-gray-600">Call or fill out form</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">Day 2</div>
              <div>
                <p className="font-semibold">Get cash offer</p>
                <p className="text-sm text-gray-600">Receive offer within 24 hours</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">Day 3</div>
              <div>
                <p className="font-semibold">Sign contract</p>
                <p className="text-sm text-gray-600">Review and sign purchase agreement</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">Day 7</div>
              <div>
                <p className="font-semibold">Close and get paid</p>
                <p className="text-sm text-gray-600">Funds wired to your account</p>
              </div>
            </div>
          </div>

          <h3 className="mb-3 text-lg font-semibold text-gray-900">Pros</h3>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Fast closing:</strong> Get cash in 3-7 days, not months</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>No repairs needed:</strong> Sell as-is, no renovation costs</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>No commission:</strong> Save 5-6% ($10K-30K)</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Certainty:</strong> Cash buyer has funds ready, no financing risk</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Privacy:</strong> No open houses, no strangers in your home</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Simplicity:</strong> Minimal paperwork, straightforward process</span>
            </li>
          </ul>

          <h3 className="mb-3 text-lg font-semibold text-gray-900">Cons</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>Lower price:</strong> Usually 70-85% of market value</span>
            </li>
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>Less negotiation:</strong> Limited room to haggle on price</span>
            </li>
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>Wholesaler risk:</strong> Some cash buyers are actually wholesalers</span>
            </li>
          </ul>
        </section>

        {/* Traditional Listing Section */}
        <section className="mb-12 rounded-lg border-l-4 border-green-600 bg-green-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <Home className="h-6 w-6 text-green-600 flex-shrink-0" />
            Traditional Listing (MLS)
          </h2>

          <h3 className="mb-3 text-lg font-semibold text-gray-900">Timeline</h3>
          <div className="mb-6 space-y-2 text-gray-700">
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">Week 1</div>
              <div>
                <p className="font-semibold">List property</p>
                <p className="text-sm text-gray-600">Get photos, list on MLS, market property</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">Week 2-4</div>
              <div>
                <p className="font-semibold">Show property</p>
                <p className="text-sm text-gray-600">Open houses, agent showings, buyer interest</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">Week 4-8</div>
              <div>
                <p className="font-semibold">Receive offers</p>
                <p className="text-sm text-gray-600">Negotiate and accept offer</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">Week 8-12</div>
              <div>
                <p className="font-semibold">Inspection & appraisal</p>
                <p className="text-sm text-gray-600">Buyer inspects, lender appraises</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">Week 12+</div>
              <div>
                <p className="font-semibold">Close and get paid</p>
                <p className="text-sm text-gray-600">Funds wired after all contingencies met</p>
              </div>
            </div>
          </div>

          <h3 className="mb-3 text-lg font-semibold text-gray-900">Pros</h3>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>Higher price:</strong> Usually get 90-100% of market value</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>More buyers:</strong> Reach thousands of potential buyers</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>Professional marketing:</strong> Agent handles everything</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong>Market exposure:</strong> Listed on MLS, Zillow, Realtor.com</span>
            </li>
          </ul>

          <h3 className="mb-3 text-lg font-semibold text-gray-900">Cons</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>Slow closing:</strong> Takes 30-90+ days to close</span>
            </li>
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>High commission:</strong> Pay 5-6% ($10K-30K) to agent</span>
            </li>
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>Repairs often needed:</strong> Buyers expect move-in ready</span>
            </li>
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>Financing risk:</strong> Buyer might not qualify for loan</span>
            </li>
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>Inspection contingencies:</strong> Buyer can renegotiate after inspection</span>
            </li>
            <li className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span><strong>Uncertainty:</strong> Deal might fall through during closing</span>
            </li>
          </ul>
        </section>

        {/* Net Proceeds Calculation */}
        <section className="mb-12 rounded-lg bg-gray-100 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <DollarSign className="h-6 w-6 text-gray-900 flex-shrink-0" />
            Real Example: $200,000 House
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Cash Buyer */}
            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-4 font-bold text-gray-900">Cash Buyer Scenario</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Offer Price:</span>
                  <span className="font-semibold">$160,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Closing Costs:</span>
                  <span className="font-semibold">-$2,000</span>
                </div>
                <div className="border-t-2 border-blue-200 pt-2 flex justify-between font-bold text-lg">
                  <span>Net Proceeds:</span>
                  <span className="text-blue-600">$158,000</span>
                </div>
                <p className="mt-3 text-xs text-gray-600">
                  <strong>Timeline:</strong> 7 days<br/>
                  <strong>Repairs:</strong> None needed<br/>
                  <strong>Certainty:</strong> Very high
                </p>
              </div>
            </div>

            {/* Traditional Listing */}
            <div className="rounded-lg bg-green-50 p-4">
              <h3 className="mb-4 font-bold text-gray-900">Traditional Listing Scenario</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sale Price:</span>
                  <span className="font-semibold">$200,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Commission (5.5%):</span>
                  <span className="font-semibold">-$11,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Closing Costs:</span>
                  <span className="font-semibold">-$4,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Repairs/Staging:</span>
                  <span className="font-semibold">-$5,000</span>
                </div>
                <div className="border-t-2 border-green-200 pt-2 flex justify-between font-bold text-lg">
                  <span>Net Proceeds:</span>
                  <span className="text-green-600">$180,000</span>
                </div>
                <p className="mt-3 text-xs text-gray-600">
                  <strong>Timeline:</strong> 90 days<br/>
                  <strong>Repairs:</strong> $5K needed<br/>
                  <strong>Certainty:</strong> Medium (financing risk)
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-700">
            <strong>In this example:</strong> The traditional listing gets you $20,000 more ($180K vs $158K), but it takes 90 days instead of 7, costs $5K in repairs, and has financing risk. The cash buyer is faster, simpler, and more certain.
          </p>
        </section>

        {/* When to Choose Each */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">When to Choose Each Option</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-blue-600 p-6">
              <h3 className="mb-4 text-lg font-bold text-blue-600">Choose Cash Buyer If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You need to sell quickly (within weeks)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Your house needs major repairs</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You're behind on mortgage payments</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You want certainty (no financing risk)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You're going through a life change (divorce, job loss)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You want to avoid real estate commissions</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-2 border-green-600 p-6">
              <h3 className="mb-4 text-lg font-bold text-green-600">Choose Traditional Listing If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You have time to wait (3+ months)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Your house is in good condition</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You want maximum price</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You can afford repairs/staging</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Your market is hot (lots of buyers)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You want professional marketing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">The Bottom Line</h2>
          <p className="mb-4 text-gray-700">
            There's no one-size-fits-all answer. Both options have trade-offs:
          </p>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li><strong>Cash buyers</strong> offer speed, simplicity, and certainty—but at a lower price.</li>
            <li><strong>Traditional listings</strong> offer higher prices—but take longer, cost more, and have more risk.</li>
          </ul>
          <p className="text-gray-700">
            The best choice depends on your situation. If you need to sell quickly and avoid hassle, a cash buyer is your answer. If you have time and want maximum price, list on the market.
          </p>
          <p className="mt-4 text-gray-700">
            <strong>Pro tip:</strong> Get both a cash offer and a traditional listing estimate. Compare the net proceeds and timelines, then decide which makes sense for you.
          </p>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Ready to Get a Cash Offer?</h2>
          <p className="mb-6 text-lg text-blue-100">
            Compare your options. Get a free cash offer from Alder Heritage Homes and see how much you can net.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:5592818016"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (559) 281-8016
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-bold text-white hover:bg-blue-700 transition-colors"
            >
              Get Free Cash Offer
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}

import { Phone } from "lucide-react";
