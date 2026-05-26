import React from "react";
import { CheckCircle2, AlertTriangle, Clock, DollarSign, FileText, Phone, ArrowRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";

export default function ProbateHomeSaleGuide() {
  return (
    <article className="min-h-screen bg-white">
      <PageMeta
        title="Probate Home Sale Guide"
        description="A Fresno probate home sale guide for heirs and executors: timelines, court steps, repairs, title issues, cash sale options, and closing choices."
        path="/blog/probate-home-sale-guide"
        type="article"
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500 px-4 py-2">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-semibold">PROBATE GUIDE</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Probate Home Sale Guide: Everything You Need to Know
          </h1>
          <p className="mb-6 text-lg text-purple-100">
            Inherited a house through probate? Don't know where to start? This guide walks you through the entire process—from understanding probate to selling the home and distributing proceeds.
          </p>
          <div className="flex items-center gap-2 text-sm text-purple-100">
            <span>Published: May 3, 2026</span>
            <span>•</span>
            <span>Read time: 12 minutes</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="mb-4 text-lg text-gray-700">
            You've just inherited a house. It should be straightforward, right? But probate is complicated. There are court deadlines, legal paperwork, and decisions to make about whether to keep the house or sell it.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            If you're thinking about selling, you have options. You can list it on the market, or you can sell it to a cash buyer who specializes in probate homes. Each option has different timelines, costs, and requirements.
          </p>
          <p className="text-lg text-gray-700">
            This guide explains everything you need to know about selling a probate home—so you can make the best decision for your situation.
          </p>
        </section>

        {/* What is Probate? */}
        <section className="mb-12 rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What is Probate?</h2>
          <p className="mb-4 text-gray-700">
            Probate is the legal process of settling a person's estate after they die. It involves:
          </p>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Proving the will:</strong> The court verifies that the will is valid</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Appointing an executor:</strong> Someone is named to manage the estate</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Notifying heirs:</strong> All beneficiaries are informed</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Paying debts:</strong> Creditors and taxes are paid from the estate</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Distributing assets:</strong> Remaining assets go to heirs</span>
            </li>
          </ul>
          <p className="text-gray-700">
            <strong>Timeline:</strong> Probate typically takes 6-12 months in California, but can take longer if there are disputes or complications.
          </p>
        </section>

        {/* Can You Sell During Probate? */}
        <section className="mb-12 rounded-lg bg-green-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
            Can You Sell a House During Probate?
          </h2>
          <p className="mb-4 text-gray-700">
            Yes, you can sell a probate home. In fact, selling during probate is common. Here's why:
          </p>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Heirs often don't want to keep the house</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Property taxes and maintenance costs add up</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Selling converts the house to cash, which is easy to divide</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Some houses need repairs that are expensive to maintain</span>
            </li>
          </ul>
          <p className="text-gray-700">
            <strong>Important:</strong> You'll need court approval to sell during probate. The executor must petition the court, and the sale must be approved by a judge.
          </p>
        </section>

        {/* Probate Sale Process */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">The Probate Sale Process</h2>

          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold">1</span>
                Executor Petitions the Court
              </h3>
              <p className="text-gray-700">
                The executor files a petition with the probate court requesting permission to sell the property. The court reviews the petition and schedules a hearing.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold">2</span>
                Court Hearing & Approval
              </h3>
              <p className="text-gray-700">
                The judge reviews the petition and approves the sale if it's in the estate's best interest. This typically takes 2-4 weeks.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold">3</span>
                List or Sell the Property
              </h3>
              <p className="text-gray-700">
                Once approved, the executor can list the property on the market or accept a cash offer. If listing, the sale must be confirmed by the court.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold">4</span>
                Sale Confirmation Hearing
              </h3>
              <p className="text-gray-700">
                If listing on the market, the court holds a confirmation hearing to approve the sale. The judge confirms the sale price is fair and in the estate's interest.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold">5</span>
                Close the Sale
              </h3>
              <p className="text-gray-700">
                Once confirmed, the sale closes. The executor receives the proceeds and distributes them to heirs according to the will.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Comparison */}
        <section className="mb-12 overflow-x-auto">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Timeline Comparison</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Phase</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-purple-600">Cash Buyer</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Traditional Listing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Court Approval</td>
                <td className="border border-gray-300 px-4 py-3 text-purple-600">2-4 weeks</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">2-4 weeks</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Finding Buyer</td>
                <td className="border border-gray-300 px-4 py-3 text-purple-600">1-3 days</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">30-90 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Confirmation Hearing</td>
                <td className="border border-gray-300 px-4 py-3 text-purple-600">Not needed</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">2-4 weeks</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Close Sale</td>
                <td className="border border-gray-300 px-4 py-3 text-purple-600">3-7 days</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">30-45 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Total Timeline</td>
                <td className="border border-gray-300 px-4 py-3 font-bold text-purple-600">4-6 weeks</td>
                <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">3-6 months</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Costs of Probate Sale */}
        <section className="mb-12 rounded-lg bg-orange-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <DollarSign className="h-6 w-6 text-orange-600 flex-shrink-0" />
            Costs of Selling a Probate Home
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between border-b border-orange-200 pb-2">
              <span>Probate court filing fees</span>
              <span className="font-semibold">$500-2,000</span>
            </div>
            <div className="flex justify-between border-b border-orange-200 pb-2">
              <span>Attorney fees (if needed)</span>
              <span className="font-semibold">$1,000-5,000</span>
            </div>
            <div className="flex justify-between border-b border-orange-200 pb-2">
              <span>Real estate commission (if listing)</span>
              <span className="font-semibold">5-6% of sale price</span>
            </div>
            <div className="flex justify-between border-b border-orange-200 pb-2">
              <span>Property repairs/staging</span>
              <span className="font-semibold">$2,000-10,000</span>
            </div>
            <div className="flex justify-between border-b border-orange-200 pb-2">
              <span>Property taxes (while selling)</span>
              <span className="font-semibold">$500-2,000</span>
            </div>
            <div className="flex justify-between border-b border-orange-200 pb-2">
              <span>Closing costs</span>
              <span className="font-semibold">$3,000-5,000</span>
            </div>
            <div className="flex justify-between pt-2 font-bold text-lg">
              <span>Total Costs (Traditional Listing):</span>
              <span className="text-orange-600">$12,000-30,000+</span>
            </div>
          </div>

          <p className="mt-6 text-gray-700">
            <strong>Cash buyer advantage:</strong> Selling to a cash buyer eliminates real estate commission (5-6%), attorney fees, and repair costs. Total costs: $2,000-3,000.
          </p>
        </section>

        {/* Cash Buyer vs Listing for Probate */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Cash Buyer vs Traditional Listing for Probate Homes</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-purple-600 p-6">
              <h3 className="mb-4 text-lg font-bold text-purple-600">Cash Buyer (Best for Speed)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fast:</strong> 4-6 weeks total</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Low costs:</strong> $2-3K total</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No repairs:</strong> Sell as-is</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No commission:</strong> Keep more money</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Certainty:</strong> Deal won't fall through</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lower price:</strong> 70-85% of market value</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-2 border-green-600 p-6">
              <h3 className="mb-4 text-lg font-bold text-green-600">Traditional Listing (Best for Price)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Higher price:</strong> 90-100% of market value</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Market exposure:</strong> Reach all buyers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Professional marketing:</strong> Agent handles it</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Slow:</strong> 3-6 months total</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>High costs:</strong> $12-30K+ in fees</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Repairs needed:</strong> $2-10K to prepare</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real Example */}
        <section className="mb-12 rounded-lg bg-gray-100 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Real Example: $250,000 Probate Home</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-purple-50 p-4">
              <h3 className="mb-4 font-bold text-gray-900">Cash Buyer Scenario</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Offer Price:</span>
                  <span className="font-semibold">$190,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Court Fees:</span>
                  <span className="font-semibold">-$1,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Closing Costs:</span>
                  <span className="font-semibold">-$2,000</span>
                </div>
                <div className="border-t-2 border-purple-200 pt-2 flex justify-between font-bold text-lg">
                  <span>Net to Estate:</span>
                  <span className="text-purple-600">$187,000</span>
                </div>
                <p className="mt-3 text-xs text-gray-600">
                  <strong>Timeline:</strong> 4-6 weeks<br/>
                  <strong>Certainty:</strong> Very high<br/>
                  <strong>Hassle:</strong> Minimal
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-4">
              <h3 className="mb-4 font-bold text-gray-900">Traditional Listing Scenario</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sale Price:</span>
                  <span className="font-semibold">$250,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Commission (5.5%):</span>
                  <span className="font-semibold">-$13,750</span>
                </div>
                <div className="flex justify-between">
                  <span>Repairs/Staging:</span>
                  <span className="font-semibold">-$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Court Fees & Attorney:</span>
                  <span className="font-semibold">-$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Closing Costs:</span>
                  <span className="font-semibold">-$4,000</span>
                </div>
                <div className="border-t-2 border-green-200 pt-2 flex justify-between font-bold text-lg">
                  <span>Net to Estate:</span>
                  <span className="text-green-600">$224,250</span>
                </div>
                <p className="mt-3 text-xs text-gray-600">
                  <strong>Timeline:</strong> 3-6 months<br/>
                  <strong>Certainty:</strong> Medium<br/>
                  <strong>Hassle:</strong> High
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-700">
            <strong>Analysis:</strong> The traditional listing nets $37,250 more, but takes 3-6 months longer, costs $22K in fees/repairs, and has financing risk. The cash buyer is faster, simpler, and more certain—but nets less.
          </p>
        </section>

        {/* Common Probate Questions */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Common Probate Questions</h2>

          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 font-bold text-gray-900">Do I need court approval to sell?</h3>
              <p className="text-gray-700">
                Yes, in most cases. The executor must petition the court and get approval before selling. However, if the will explicitly authorizes the executor to sell without court approval, you may be able to skip this step.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 font-bold text-gray-900">Can I sell to a cash buyer without listing?</h3>
              <p className="text-gray-700">
                Yes. You can petition the court for approval to sell to a specific cash buyer. This is often faster than listing on the market because you don't need a confirmation hearing.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 font-bold text-gray-900">Who pays the probate costs?</h3>
              <p className="text-gray-700">
                Probate costs come out of the estate before heirs receive their share. This includes court fees, attorney fees, and real estate commissions.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 font-bold text-gray-900">Can I sell if there are multiple heirs?</h3>
              <p className="text-gray-700">
                Yes, but all heirs must agree. If heirs disagree about selling, the court can intervene. It's best to discuss options with all heirs before making a decision.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4">
              <h3 className="mb-2 font-bold text-gray-900">Do I need an attorney?</h3>
              <p className="text-gray-700">
                It depends on the complexity of the estate. For simple estates, you might not need an attorney. For complex estates or if there are disputes, an attorney is highly recommended.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">The Bottom Line</h2>
          <p className="mb-4 text-gray-700">
            Selling a probate home doesn't have to be complicated. You have two main options:
          </p>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li><strong>Cash buyer:</strong> Fast (4-6 weeks), low costs ($2-3K), but lower price (70-85% of market value)</li>
            <li><strong>Traditional listing:</strong> Higher price (90-100% of market value), but slow (3-6 months) and high costs ($12-30K+)</li>
          </ul>
          <p className="text-gray-700">
            The best choice depends on your situation. If you need to settle the estate quickly and minimize costs, a cash buyer is ideal. If you have time and want maximum proceeds, list on the market.
          </p>
          <p className="mt-4 text-gray-700">
            <strong>Pro tip:</strong> Get both a cash offer and a traditional listing estimate. Compare the net proceeds and timelines, then decide which makes sense for your heirs.
          </p>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Ready to Sell Your Probate Home?</h2>
          <p className="mb-6 text-lg text-purple-100">
            Get a free cash offer from Alder Heritage Homes. We specialize in probate homes and can close in 4-6 weeks.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:5592818016"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-purple-600 hover:bg-purple-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (559) 281-8016
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-bold text-white hover:bg-purple-700 transition-colors"
            >
              Get Free Cash Offer <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
