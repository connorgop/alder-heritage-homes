import React from "react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";

export default function CompetitorComparison() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Compare Cash Buyers in Fresno"
        description="Compare Fresno cash home buyers before signing. Learn how proof of funds, assignment clauses, closing timelines, fees, and repair credits affect your net."
        path="/compare-cash-buyers-fresno"
      />
      {/* HERO */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold">Comparing Cash Buyers: What You Need to Know</h1>
          <p className="text-lg text-amber-100">
            Not all cash buyers are created equal. Learn the differences between direct buyers, wholesalers, and what to look for when selling your home.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* DIRECT BUYER VS WHOLESALER */}
        <div className="mb-12 rounded-lg border border-amber-200 bg-amber-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-amber-900">Direct Buyer vs. Wholesaler: What's the Difference?</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-bold text-amber-800">Direct Buyer (Like Alder Heritage Homes)</h3>
              <ul className="space-y-2 text-amber-900">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Owns the capital:</strong> We have the cash to buy your home immediately.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>No assignment:</strong> We buy the property ourselves, not to resell to another buyer.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Price match guarantee:</strong> We will pay more than any wholesaler.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>No last-minute price reductions:</strong> The price you agree to is the price you receive.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Fast close:</strong> 3 days to closing with no contingencies.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-amber-200 pt-6">
              <h3 className="mb-2 text-lg font-bold text-amber-800">Wholesaler (KO Homes, Pinnacle, etc.)</h3>
              <ul className="space-y-2 text-amber-900">
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span><strong>No capital:</strong> Wholesalers don't own the cash. They find buyers.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span><strong>Assignment contract:</strong> They tie up your property under contract, then find a buyer to assign it to.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span><strong>Last-minute price reductions:</strong> If they can't find a buyer at the agreed price, they ask for a reduction.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span><strong>Slower close:</strong> 30-60 days while they find a buyer.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span><strong>Lower offer:</strong> They make money on the spread between your price and the end buyer's price.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Direct Buyer vs. Wholesaler Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Factor</th>
                  <th className="px-4 py-3 text-left font-bold">Alder Heritage (Direct)</th>
                  <th className="px-4 py-3 text-left font-bold">Wholesalers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Who Buys Your Home?</td>
                  <td className="px-4 py-3">We do (Alder Heritage)</td>
                  <td className="px-4 py-3">Unknown third party</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-3 font-semibold">Cash Available?</td>
                  <td className="px-4 py-3 text-green-600 font-bold">Yes, immediately</td>
                  <td className="px-4 py-3 text-red-600 font-bold">No, they find a buyer</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Price Guaranteed?</td>
                  <td className="px-4 py-3 text-green-600 font-bold">Yes, price match guarantee</td>
                  <td className="px-4 py-3 text-red-600 font-bold">No, subject to renegotiation</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-3 font-semibold">Close Timeline</td>
                  <td className="px-4 py-3 text-green-600 font-bold">3 days</td>
                  <td className="px-4 py-3 text-red-600 font-bold">30-60 days</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Last-Minute Price Cuts?</td>
                  <td className="px-4 py-3 text-green-600 font-bold">Never</td>
                  <td className="px-4 py-3 text-red-600 font-bold">Often</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-3 font-semibold">Your Offer Amount</td>
                  <td className="px-4 py-3 text-green-600 font-bold">Highest in the market</td>
                  <td className="px-4 py-3 text-red-600 font-bold">Lower (they take a cut)</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Licensed Real Estate Agent?</td>
                  <td className="px-4 py-3 text-green-600 font-bold">Yes (DRE #02219124)</td>
                  <td className="px-4 py-3 text-red-600 font-bold">Often not</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RED FLAGS */}
        <div className="mb-12 rounded-lg border-2 border-red-300 bg-red-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-red-900">Red Flags: How to Spot a Wholesaler</h2>
          <ul className="space-y-3 text-red-900">
            <li className="flex gap-3">
              <span className="text-xl">🚩</span>
              <span><strong>They say "we'll find a buyer":</strong> If they're not buying your home themselves, they're wholesaling.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🚩</span>
              <span><strong>They ask for a price reduction at closing:</strong> This is the #1 red flag. They couldn't find a buyer at the agreed price.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🚩</span>
              <span><strong>They take 30-60 days to close:</strong> Direct buyers close in 3-7 days. Long timelines mean they're still looking for a buyer.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🚩</span>
              <span><strong>They're not licensed real estate agents:</strong> Licensed agents are regulated and accountable. Unlicensed wholesalers are not.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🚩</span>
              <span><strong>They won't give you a written offer:</strong> Legitimate buyers provide written offers with clear terms.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🚩</span>
              <span><strong>They pressure you to sign quickly:</strong> Wholesalers rush because they need to lock in the deal before finding a buyer.</span>
            </li>
          </ul>
        </div>

        {/* WHY ALDER HERITAGE */}
        <div className="mb-12 rounded-lg border border-green-300 bg-green-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-green-900">Why Choose Alder Heritage Homes?</h2>
          <ul className="space-y-3 text-green-900">
            <li className="flex gap-3">
              <span className="text-xl">✓</span>
              <span><strong>We discuss proof of funds:</strong> We buy directly and can explain funding, escrow, assignment language, and closing terms before you rely on the offer.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">✓</span>
              <span><strong>Price match guarantee:</strong> We will pay more than any competitor. If you get a higher offer, we'll match it.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">✓</span>
              <span><strong>No last-minute price cuts:</strong> The price you agree to is the price you receive at closing.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">✓</span>
              <span><strong>3-day close:</strong> We close fast. No delays. No contingencies.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">✓</span>
              <span><strong>Licensed real estate agent:</strong> Connor Morris is a licensed CA real estate agent (DRE #02219124). We're regulated and accountable.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">✓</span>
              <span><strong>Second-opinion process:</strong> If you already have an offer, we can help you compare net proceeds, closing certainty, inspection terms, and proof of funds.</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/cash-buyer-proof-of-funds-fresno" className="rounded-lg bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800 transition-colors">
              Verify Proof of Funds
            </Link>
            <Link href="/second-opinion" className="rounded-lg border-2 border-green-700 px-5 py-3 font-bold text-green-800 hover:bg-green-100 transition-colors">
              Get a Second Opinion
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">Ready to Sell Your Home?</h2>
          <p className="mb-6 text-lg">Get a free cash offer from Alder Heritage Homes. No wholesalers. No last-minute price cuts. Just a fair offer and a fast close.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="/contact" className="rounded-lg bg-white px-8 py-3 font-bold text-amber-600 hover:bg-gray-100 transition-colors">
              Talk to Connor
            </a>
            <a href="tel:(559)281-8016" className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white hover:bg-white/10 transition-colors">
              Call (559) 281-8016
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
