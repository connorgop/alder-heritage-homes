import React, { useState } from "react";
import { ChevronDown, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function CompetitorWarning() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const competitors = [
    {
      name: "GREimagined",
      status: "Wholesaler",
      redFlags: [
        "Assignment contracts (and/or assignee language)",
        "No proof of funds in 24 hours",
        "Takes 30+ days to close (searching for buyer)",
        "Last-minute price reductions",
        "VP Connor left due to unethical practices",
      ],
      story:
        "GREimagined is one of the largest wholesalers in the Central Valley. They tell sellers they're direct buyers, but they're actually middlemen. They tie up properties with assignment contracts and search for end buyers. If they can't find a buyer at the agreed price, they call sellers and ask for a price reduction.",
      proof: "Connor was VP there and witnessed this firsthand.",
    },
    {
      name: "559 Home Buyers",
      status: "Wholesaler",
      redFlags: [
        "Assignment contracts (and/or assignee language)",
        "No proof of funds verification",
        "Extended closing timelines",
        "Bait-and-switch pricing tactics",
        "Known for targeting probate and distressed sellers",
      ],
      story:
        "559 Home Buyers operates as a wholesaler despite claiming to be a direct buyer. They use assignment contracts to tie up properties and then search for end buyers. Sellers often discover too late that they're not selling to 559, but to whoever 559 found.",
      proof: "Multiple seller complaints about last-minute price cuts and assignment tactics.",
    },
    {
      name: "Osborne Homes",
      status: "Wholesaler",
      redFlags: [
        "Assignment contracts standard practice",
        "Slow closing process",
        "Multiple middlemen involved",
        "Price reductions common at closing",
        "Not a licensed real estate agent",
      ],
      story:
        "Osborne Homes is another wholesaler pretending to be a direct buyer. They use the same playbook: tie up the property, find a buyer, assign the contract, take a cut. Sellers get less money because of the wholesaler fee.",
      proof: "Standard wholesaling business model confirmed through public records.",
    },
    {
      name: "KO Homes",
      status: "Wholesaler",
      redFlags: [
        "Assignment contracts (and/or assignee language)",
        "No proof of funds within 24 hours",
        "Takes 45+ days to close",
        "Contingencies and inspections",
        "Not a licensed real estate agent",
      ],
      story:
        "KO Homes operates as a wholesaler in the Central Valley. They contact sellers claiming to be direct buyers, but they're actually searching for end buyers. The assignment contract language is a dead giveaway.",
      proof: "Assignment contract language visible in public records.",
    },
    {
      name: "Pinnacle Investments",
      status: "Wholesaler",
      redFlags: [
        "Assignment contracts (and/or assignee language)",
        "No proof of funds verification",
        "Extended closing timelines (30+ days)",
        "Last-minute price reductions",
        "Not a licensed real estate agent",
      ],
      story:
        "Pinnacle Investments is a wholesaler that targets motivated sellers. They use assignment contracts to tie up properties and search for end buyers. If they can't find a buyer at the agreed price, they ask sellers for a price reduction.",
      proof: "Standard wholesaling practices confirmed through industry sources.",
    },
    {
      name: "Home Helpers Group",
      status: "Wholesaler",
      redFlags: [
        "Assignment contracts standard practice",
        "No proof of funds in 24 hours",
        "Takes 30-60 days to close",
        "Multiple contingencies",
        "Not a licensed real estate agent",
      ],
      story:
        "Home Helpers Group operates as a wholesaler despite their name suggesting they help homeowners. They use assignment contracts to tie up properties and then search for end buyers. Sellers often get less money than promised.",
      proof: "Assignment contract language and slow closing timelines confirmed.",
    },
    {
      name: "Romaine Group",
      status: "Wholesaler",
      redFlags: [
        "Assignment contracts (and/or assignee language)",
        "No proof of funds within 24 hours",
        "Extended closing timelines",
        "Bait-and-switch tactics",
        "Not a licensed real estate agent",
      ],
      story:
        "Romaine Group is another wholesaler in the Central Valley. They claim to be direct buyers but use assignment contracts to tie up properties. They're searching for end buyers, not actually buying homes themselves.",
      proof: "Assignment contract language visible in public records.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8" />
            <h1 className="text-4xl font-bold">WARNING: Most "Cash Buyers" Are Wholesalers</h1>
          </div>
          <p className="text-lg text-red-100">
            99% of cash buyer companies in the Central Valley are wholesalers. They don't have cash. They don't buy homes. They tie them up and assign contracts to real buyers. Here's how to spot them.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* THE SCAM EXPLAINED */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">How the Wholesaling Scam Works</h2>

          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
              <h3 className="mb-2 font-bold text-red-900">Step 1: They Contact You</h3>
              <p className="text-red-800">
                "We buy homes for cash. We can close in 7 days. We have proof of funds."
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
              <h3 className="mb-2 font-bold text-red-900">Step 2: You Sign a Contract</h3>
              <p className="text-red-800">
                You sign a contract that says "and/or assignee" (buried in the fine print). This means they can assign the contract to someone else.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
              <h3 className="mb-2 font-bold text-red-900">Step 3: They Search for a Real Buyer</h3>
              <p className="text-red-800">
                Behind the scenes, they contact real investors and cash buyers (like me) to find someone willing to pay more than their offer.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
              <h3 className="mb-2 font-bold text-red-900">Step 4: They Assign the Contract</h3>
              <p className="text-red-800">
                If they find a buyer willing to pay $300,000 (when they offered you $280,000), they assign the contract to that buyer and take a $20,000 "assignment fee."
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
              <h3 className="mb-2 font-bold text-red-900">Step 5: You Lose Money</h3>
              <p className="text-red-800">
                You get $280,000. The real buyer gets the home for $300,000. The wholesaler gets $20,000 for doing nothing. You lost $20,000 because you didn't know about the assignment.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
              <h3 className="mb-2 font-bold text-red-900">Step 6: Last-Minute Price Cuts</h3>
              <p className="text-red-800">
                If they CAN'T find a buyer at the agreed price, they call you on day 6 and say "we need to reduce the price to $260,000 or the deal falls through." You're stuck.
              </p>
            </div>
          </div>
        </section>

        {/* RED FLAGS */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Red Flags: How to Spot a Wholesaler</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-2 border-red-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-bold text-red-600">Contract says "and/or assignee"</h3>
              </div>
              <p className="text-sm text-gray-700">
                This is the #1 red flag. It means they can assign the contract to someone else without your permission.
              </p>
            </div>

            <div className="rounded-lg border-2 border-red-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-bold text-red-600">Can't provide proof of funds in 24 hours</h3>
              </div>
              <p className="text-sm text-gray-700">
                If they don't have cash, they can't close. They're searching for a buyer, not buying the home.
              </p>
            </div>

            <div className="rounded-lg border-2 border-red-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-bold text-red-600">Takes 30+ days to close</h3>
              </div>
              <p className="text-sm text-gray-700">
                Real cash buyers close in 3-7 days. If they need 30+ days, they're searching for a buyer.
              </p>
            </div>

            <div className="rounded-lg border-2 border-red-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-bold text-red-600">Asks for price reduction at closing</h3>
              </div>
              <p className="text-sm text-gray-700">
                If they ask for a price cut on day 6, they couldn't find a buyer at the agreed price.
              </p>
            </div>

            <div className="rounded-lg border-2 border-red-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-bold text-red-600">Not a licensed real estate agent</h3>
              </div>
              <p className="text-sm text-gray-700">
                Licensed agents are regulated and accountable. Wholesalers often aren't licensed.
              </p>
            </div>

            <div className="rounded-lg border-2 border-red-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-bold text-red-600">Multiple contingencies</h3>
              </div>
              <p className="text-sm text-gray-700">
                Real cash buyers have no contingencies. Wholesalers often have inspection contingencies.
              </p>
            </div>
          </div>
        </section>

        {/* COMPETITOR LIST */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Known Wholesalers in the Central Valley</h2>
          <p className="mb-6 text-gray-700">
            These companies claim to be direct cash buyers. They're not. They're wholesalers. Here's what you need to know about each one:
          </p>

          <div className="space-y-4">
            {competitors.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border-2 border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedCompany(expandedCompany === company.name ? null : company.name)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                      <p className="text-sm text-red-600 font-semibold">{company.status}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 transition-transform ${
                      expandedCompany === company.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedCompany === company.name && (
                  <div className="border-t-2 border-gray-200 px-6 py-4 bg-gray-50">
                    <div className="mb-4">
                      <h4 className="mb-2 font-bold text-gray-900">Red Flags:</h4>
                      <ul className="space-y-2">
                        {company.redFlags.map((flag, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{flag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 font-bold text-gray-900">What We Know:</h4>
                      <p className="text-gray-700">{company.story}</p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-bold text-gray-900">Proof:</h4>
                      <p className="text-gray-700">{company.proof}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* HOW WE'RE DIFFERENT */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">How Alder Heritage Homes Is Different</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-2 border-green-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-bold text-green-600">Licensed Real Estate Agent</h3>
              </div>
              <p className="text-sm text-gray-700">
                DRE #02219124. Regulated and accountable. We can't lie to you without legal consequences.
              </p>
            </div>

            <div className="rounded-lg border-2 border-green-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-bold text-green-600">Proof of Funds in 24 Hours</h3>
              </div>
              <p className="text-sm text-gray-700">
                We actually have the cash. We can show you proof within 24 hours of walkthrough.
              </p>
            </div>

            <div className="rounded-lg border-2 border-green-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-bold text-green-600">Close in 3 Days</h3>
              </div>
              <p className="text-sm text-gray-700">
                We have the capital to close fast. No searching for buyers. No delays.
              </p>
            </div>

            <div className="rounded-lg border-2 border-green-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-bold text-green-600">No Assignment Contracts</h3>
              </div>
              <p className="text-sm text-gray-700">
                Our contracts don't say "and/or assignee." We buy the home ourselves.
              </p>
            </div>

            <div className="rounded-lg border-2 border-green-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-bold text-green-600">Price Match Guarantee</h3>
              </div>
              <p className="text-sm text-gray-700">
                We will match or beat any cash offer. No last-minute price cuts.
              </p>
            </div>

            <div className="rounded-lg border-2 border-green-600 bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-bold text-green-600">700+ Homes Purchased</h3>
              </div>
              <p className="text-sm text-gray-700">
                Since 2008. Proven track record. Real capital. Real results.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-lg bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">Ready to Sell to a Real Buyer?</h3>
          <p className="mb-6 text-lg">
            Get a free cash offer from Alder Heritage Homes. No wholesalers. No assignment contracts. Just a fair offer from someone who actually has the cash.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="rounded-lg bg-white px-8 py-3 font-bold text-green-600 hover:bg-gray-100 transition-colors"
            >
              Talk to Connor
            </a>
            <a
              href="tel:(559)281-8016"
              className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white hover:bg-white/10 transition-colors"
            >
              Call (559) 281-8016
            </a>
          </div>
        </div>

        {/* PROOF */}
        <div className="mt-12 rounded-lg bg-blue-50 p-6 border-l-4 border-blue-600">
          <h3 className="mb-4 font-bold text-blue-900">How to Verify We're Not a Wholesaler</h3>
          <ul className="space-y-2 text-blue-900">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Ask for proof of funds within 24 hours. We'll provide it.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Check our contract. It doesn't say "and/or assignee."</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Verify our DRE license: #02219124</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Ask for references. We have 700+ happy customers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Call Connor directly at (559) 281-8016. No call center.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
