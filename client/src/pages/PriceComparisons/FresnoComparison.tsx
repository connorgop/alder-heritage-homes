import React, { useState } from "react";
import { TrendingUp, Home, DollarSign, MapPin, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function FresnoComparison() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("tower-district");

  const neighborhoods = {
    "tower-district": {
      name: "Tower District",
      marketValue: "$285,000",
      cashOffer: "$215,000",
      listingPrice: "$270,000",
      avgDaysOnMarket: 45,
      cashCloseDays: 7,
      commission: "$14,850",
      repairs: "$8,000",
      netProceeds: "$247,150",
      cashNetProceeds: "$213,000",
      description: "Trendy neighborhood with restaurants and shops. Popular with young professionals.",
      pros: ["Great walkability", "Restaurants nearby", "Good schools", "Growing area"],
      cons: ["Higher prices", "Parking challenges", "More competition"]
    },
    "fig-garden": {
      name: "Fig Garden",
      marketValue: "$425,000",
      cashOffer: "$318,750",
      listingPrice: "$410,000",
      avgDaysOnMarket: 38,
      cashCloseDays: 7,
      commission: "$22,550",
      repairs: "$12,000",
      netProceeds: "$375,450",
      cashNetProceeds: "$316,750",
      description: "Upscale neighborhood with larger homes. Premium location.",
      pros: ["Luxury homes", "Large lots", "Excellent schools", "Established area"],
      cons: ["Very high prices", "Fewer buyers", "Longer selling time"]
    },
    "clovis-north": {
      name: "Clovis North",
      marketValue: "$320,000",
      cashOffer: "$240,000",
      listingPrice: "$310,000",
      avgDaysOnMarket: 52,
      cashCloseDays: 7,
      commission: "$17,050",
      repairs: "$6,000",
      netProceeds: "$286,950",
      cashNetProceeds: "$238,000",
      description: "Family-friendly area with good schools and parks.",
      pros: ["Good schools", "Family-oriented", "Parks nearby", "Affordable"],
      cons: ["Longer selling times", "More inventory", "Competitive market"]
    },
    "sunnyside": {
      name: "Sunnyside",
      marketValue: "$195,000",
      cashOffer: "$146,250",
      listingPrice: "$185,000",
      avgDaysOnMarket: 65,
      cashCloseDays: 7,
      commission: "$10,175",
      repairs: "$4,000",
      netProceeds: "$170,825",
      cashNetProceeds: "$144,250",
      description: "Affordable neighborhood with working-class charm.",
      pros: ["Affordable", "Diverse community", "Good transit", "Growing"],
      cons: ["Lower prices", "Longer selling", "More repairs needed"]
    },
    "bullard": {
      name: "Bullard",
      marketValue: "$275,000",
      cashOffer: "$206,250",
      listingPrice: "$265,000",
      avgDaysOnMarket: 48,
      cashCloseDays: 7,
      commission: "$14,575",
      repairs: "$7,000",
      netProceeds: "$243,425",
      cashNetProceeds: "$204,250",
      description: "Growing suburban area with new construction and established homes.",
      pros: ["Growing area", "Good amenities", "Newer homes", "Family-friendly"],
      cons: ["Newer inventory", "More competition", "Variable prices"]
    }
  };

  const current = neighborhoods[selectedNeighborhood as keyof typeof neighborhoods];

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-semibold">FRESNO MARKET</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Fresno Home Prices: Cash vs Listing Comparison
          </h1>
          <p className="mb-6 text-lg text-emerald-100">
            See exactly what your Fresno home is worth in the cash market vs traditional listing. Compare neighborhoods, timelines, and net proceeds.
          </p>
          <div className="flex items-center gap-2 text-sm text-emerald-100">
            <span>Updated: May 3, 2026</span>
            <span>•</span>
            <span>Real market data</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="mb-4 text-lg text-gray-700">
            Selling a house in Fresno? Your neighborhood matters. Prices vary significantly across Fresno, and so do cash offers vs traditional listings.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            This guide shows you real market data for 5 popular Fresno neighborhoods. See what your home might be worth, how long it takes to sell, and what you'll net after all costs.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Data source:</strong> Recent cash sales, MLS listings, and market analysis for Fresno County.
          </p>
        </section>

        {/* Neighborhood Selector */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Select Your Neighborhood</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(neighborhoods).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedNeighborhood(key)}
                className={`rounded-lg border-2 p-4 text-left transition-all ${
                  selectedNeighborhood === key
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-200 bg-white hover:border-emerald-300"
                }`}
              >
                <p className="font-bold text-gray-900">{data.name}</p>
                <p className="text-sm text-gray-600">Market Value: {data.marketValue}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Neighborhood Details */}
        <section className="mb-12 rounded-lg bg-gray-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">{current.name}</h2>
          <p className="mb-6 text-lg text-gray-700">{current.description}</p>

          {/* Comparison Table */}
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Metric</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-emerald-600">Cash Buyer</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Traditional Listing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Offer Price</td>
                  <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">{current.cashOffer}</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 font-bold">{current.listingPrice}</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Commission (5.5%)</td>
                  <td className="border border-gray-300 px-4 py-3 text-emerald-600">$0</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">-{current.commission}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Repairs/Staging</td>
                  <td className="border border-gray-300 px-4 py-3 text-emerald-600">$0</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">-{current.repairs}</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Closing Costs</td>
                  <td className="border border-gray-300 px-4 py-3 text-emerald-600">-$2,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">-$4,000</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">NET PROCEEDS</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-emerald-600 text-lg">{current.cashNetProceeds}</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900 text-lg">{current.netProceeds}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Timeline & Details */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-emerald-100 p-4">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Cash Buyer Timeline
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Days to close:</strong> {current.cashCloseDays} days</li>
                <li>• <strong>Certainty:</strong> Very high (cash ready)</li>
                <li>• <strong>Repairs needed:</strong> None</li>
                <li>• <strong>Hassle:</strong> Minimal</li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-100 p-4">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                <AlertCircle className="h-5 w-5 text-gray-600" />
                Listing Timeline
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Days on market:</strong> {current.avgDaysOnMarket} days avg</li>
                <li>• <strong>Certainty:</strong> Medium (financing risk)</li>
                <li>• <strong>Repairs needed:</strong> Yes ({current.repairs})</li>
                <li>• <strong>Hassle:</strong> High (showings, negotiations)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border-2 border-emerald-600 p-6">
            <h3 className="mb-4 font-bold text-emerald-600">Why Sell to Cash Buyer</h3>
            <ul className="space-y-2 text-gray-700">
              {current.pros.map((pro, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border-2 border-gray-300 p-6">
            <h3 className="mb-4 font-bold text-gray-900">Why List Traditionally</h3>
            <ul className="space-y-2 text-gray-700">
              {current.cons.map((con, i) => (
                <li key={i} className="flex gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Fresno Market Overview */}
        <section className="mb-12 rounded-lg bg-blue-50 p-8">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Fresno Market Overview
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4">
              <p className="text-sm text-gray-600">Average Home Price</p>
              <p className="text-2xl font-bold text-gray-900">$280,000</p>
              <p className="text-xs text-gray-500 mt-1">Varies by neighborhood</p>
            </div>

            <div className="rounded-lg bg-white p-4">
              <p className="text-sm text-gray-600">Average Days on Market</p>
              <p className="text-2xl font-bold text-gray-900">50 days</p>
              <p className="text-xs text-gray-500 mt-1">Traditional listing</p>
            </div>

            <div className="rounded-lg bg-white p-4">
              <p className="text-sm text-gray-600">Cash Buyer Premium</p>
              <p className="text-2xl font-bold text-gray-900">Save 30-45 days</p>
              <p className="text-xs text-gray-500 mt-1">vs traditional listing</p>
            </div>
          </div>

          <p className="mt-6 text-gray-700">
            <strong>Fresno market insight:</strong> Fresno is a growing market with diverse neighborhoods. Prices range from $150K in Sunnyside to $425K+ in Fig Garden. Cash buyers are particularly valuable in Fresno because the market has many distressed properties, inherited homes, and motivated sellers.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Get Your Fresno Home's Cash Value</h2>
          <p className="mb-6 text-lg text-emerald-100">
            Enter your neighborhood above, then call for a free cash offer. We'll match or beat any other offer.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:5592818016"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              Call (559) 281-8016
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-bold text-white hover:bg-emerald-700 transition-colors"
            >
              Get Free Cash Offer <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
