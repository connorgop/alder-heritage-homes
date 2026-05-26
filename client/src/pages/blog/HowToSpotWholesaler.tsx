import React from "react";
import { AlertTriangle, CheckCircle2, XCircle, Phone, ArrowRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";

export default function HowToSpotWholesaler() {
  return (
    <article className="min-h-screen bg-white">
      <PageMeta
        title="How to Spot a Real Estate Wholesaler"
        description="Learn the contract red flags Fresno home sellers should check before signing with a cash buyer, including proof of funds, assignments, and price cuts."
        path="/blog/how-to-spot-a-wholesaler"
        type="article"
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-semibold">WARNING</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            How to Spot a Wholesaler: 6 Red Flags Every Seller Must Know
          </h1>
          <p className="mb-6 text-lg text-red-100">
            99% of "cash buyers" are actually wholesalers. They don't have cash. They don't buy homes. They trap sellers with contracts and take huge cuts. Learn how to protect yourself.
          </p>
          <div className="flex items-center gap-2 text-sm text-red-100">
            <span>Published: May 3, 2026</span>
            <span>•</span>
            <span>Read time: 8 minutes</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="mb-4 text-lg text-gray-700">
            You've decided to sell your house for cash. It seems simple—get a quick offer, close fast, move on with your life. But there's a problem: 99% of the "cash buyers" you'll encounter aren't actually buying your home. They're wholesalers, and they're about to trap you in a contract that will cost you thousands.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            I know this because I worked at GREimagined, one of the largest wholesaling operations in California. I saw firsthand how they trapped sellers, assigned contracts to investors, and disappeared when things got complicated. I left because I couldn't ethically participate in that business model anymore.
          </p>
          <p className="text-lg text-gray-700">
            This guide reveals the 6 red flags that expose a wholesaler—so you can protect yourself and find a real cash buyer.
          </p>
        </section>

        {/* Red Flag 1 */}
        <section className="mb-12 rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            Red Flag #1: They Want You to Sign an "Assignment Contract"
          </h2>
          <p className="mb-4 text-gray-700">
            This is the biggest red flag. A real cash buyer will put their name on the purchase agreement as the buyer. A wholesaler will put YOUR name on the contract, then "assign" it to someone else later—usually an investor or another buyer.
          </p>
          <p className="mb-4 text-gray-700">
            Here's what happens: You sign a contract to sell your house to "John's Cash Buyers" for $200,000. But the contract includes an assignment clause. John then finds an investor willing to pay $180,000 and assigns the contract to them. You get $200,000, but the investor gets the house for $180,000. John pockets the $20,000 difference without ever buying your house.
          </p>
          <div className="rounded-lg bg-white p-4">
            <p className="font-semibold text-gray-900">What to look for:</p>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• The contract says "Subject to assignment"</li>
              <li>• The buyer's name is a business entity (not a real person)</li>
              <li>• The contract allows the buyer to "assign" to another party</li>
              <li>• The buyer says "I might bring in an investor"</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Real cash buyers don't assign contracts.</strong> They buy the house themselves with their own money. Period.
          </p>
        </section>

        {/* Red Flag 2 */}
        <section className="mb-12 rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            Red Flag #2: No Proof of Funds Before Signing
          </h2>
          <p className="mb-4 text-gray-700">
            A real cash buyer will show you proof of funds BEFORE you sign anything. This proves they actually have the money to close. A wholesaler won't have proof of funds because they don't have any money—they're just trying to find an investor to fund the deal.
          </p>
          <p className="mb-4 text-gray-700">
            If a buyer says "I'll get you proof of funds after you sign the contract," that's a red flag. By then, you're locked in, and they can disappear or renegotiate the price.
          </p>
          <div className="rounded-lg bg-white p-4">
            <p className="font-semibold text-gray-900">What to ask for:</p>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• Bank statements showing the cash amount</li>
              <li>• A letter from their bank confirming funds availability</li>
              <li>• Proof of funds from a hard money lender (if they're using financing)</li>
              <li>• All documents BEFORE signing the contract</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Real cash buyers have proof of funds ready to go.</strong> If they don't, they're not a real cash buyer.
          </p>
        </section>

        {/* Red Flag 3 */}
        <section className="mb-12 rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            Red Flag #3: They Accept Your First Offer Without Negotiation
          </h2>
          <p className="mb-4 text-gray-700">
            This seems counterintuitive, but it's a major red flag. If a buyer accepts your asking price immediately without any negotiation, they're probably planning to assign the contract to someone else at a lower price.
          </p>
          <p className="mb-4 text-gray-700">
            Real cash buyers negotiate. They want to make sure they're getting a good deal. If they accept your price instantly, they're not planning to buy it themselves—they're planning to assign it.
          </p>
          <p className="mb-4 text-gray-700">
            Example: You list your house for $200,000. A real cash buyer will say "I can do $180,000." A wholesaler will say "Perfect, $200,000 works for us!" Then they'll assign it to an investor for $160,000.
          </p>
          <div className="rounded-lg bg-white p-4">
            <p className="font-semibold text-gray-900">What to expect:</p>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• Real buyers negotiate and ask questions</li>
              <li>• Real buyers want to inspect the property</li>
              <li>• Real buyers want to understand the condition</li>
              <li>• Real buyers might offer less than your asking price</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>If it seems too good to be true, it probably is.</strong> Real cash buyers don't accept offers without due diligence.
          </p>
        </section>

        {/* Red Flag 4 */}
        <section className="mb-12 rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            Red Flag #4: They Push You to Sign Quickly
          </h2>
          <p className="mb-4 text-gray-700">
            Wholesalers create urgency. They'll say "We need to close in 3 days" or "This offer expires tomorrow." They do this because they haven't found an investor yet, and they need to lock you in before you talk to someone else.
          </p>
          <p className="mb-4 text-gray-700">
            Real cash buyers can close quickly, but they don't pressure you to sign immediately. They understand you need time to review the contract and get legal advice.
          </p>
          <div className="rounded-lg bg-white p-4">
            <p className="font-semibold text-gray-900">Red flag phrases:</p>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• "This offer expires today"</li>
              <li>• "We need to close in 2 days"</li>
              <li>• "Don't talk to other buyers, we're the best deal"</li>
              <li>• "If you don't sign now, we're moving on"</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Real cash buyers give you time to make an informed decision.</strong> If they're pushing, they're hiding something.
          </p>
        </section>

        {/* Red Flag 5 */}
        <section className="mb-12 rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            Red Flag #5: They Don't Have a Physical Office or License
          </h2>
          <p className="mb-4 text-gray-700">
            Many wholesalers operate out of their car or a shared office space. They don't have a real business location. More importantly, they're not licensed real estate agents or brokers.
          </p>
          <p className="mb-4 text-gray-700">
            In California, if someone is buying real estate, they should be licensed. If they're not, they're operating illegally. Ask for their DRE (Department of Real Estate) license number.
          </p>
          <div className="rounded-lg bg-white p-4">
            <p className="font-semibold text-gray-900">What to verify:</p>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• Ask for their DRE license number</li>
              <li>• Verify it on the California DRE website</li>
              <li>• Ask for their business address</li>
              <li>• Visit their office in person</li>
              <li>• Check their company registration with the Secretary of State</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Real cash buyers are licensed and have verifiable business locations.</strong> If they can't provide this info, walk away.
          </p>
        </section>

        {/* Red Flag 6 */}
        <section className="mb-12 rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            Red Flag #6: They Disappear After You Sign
          </h2>
          <p className="mb-4 text-gray-700">
            This is the final red flag. After you sign the contract, the wholesaler disappears or becomes hard to reach. They're busy trying to find an investor to assign the contract to. If they can't find one, they might renegotiate the price or walk away.
          </p>
          <p className="mb-4 text-gray-700">
            Real cash buyers stay in contact throughout the process. They're committed to closing because they're actually buying your house.
          </p>
          <div className="rounded-lg bg-white p-4">
            <p className="font-semibold text-gray-900">What to expect:</p>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>• Regular communication from your buyer</li>
              <li>• Clear timeline to closing</li>
              <li>• Responsive to your questions and concerns</li>
              <li>• Professional title company involvement</li>
              <li>• Proof of funds confirmed before closing</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Real cash buyers are responsive and professional throughout the entire process.</strong>
          </p>
        </section>

        {/* Case Study */}
        <section className="mb-12 rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Real Example: How a Wholesaler Trapped a Seller</h2>
          <p className="mb-4 text-gray-700">
            Sarah owned a house in Fresno worth about $200,000. She was behind on her mortgage and needed to sell quickly. A wholesaler approached her and offered $200,000 cash, claiming they could close in 3 days.
          </p>
          <p className="mb-4 text-gray-700">
            Sarah signed the contract without reading it carefully. She didn't notice the assignment clause. Two days later, the wholesaler called and said "We're assigning this to an investor. You'll still get $200,000, but closing might take an extra week."
          </p>
          <p className="mb-4 text-gray-700">
            A week later, the investor wanted to renegotiate. They said "The house needs more repairs than we thought. We can only do $180,000." Sarah was stuck. She had already signed the contract, and the wholesaler was gone.
          </p>
          <p className="mb-4 text-gray-700">
            Sarah lost $20,000 because she didn't spot the red flags. She should have asked for proof of funds, noticed the assignment clause, and worked with a licensed cash buyer instead.
          </p>
          <p className="text-gray-700">
            <strong>This happens every day in California.</strong> Don't let it happen to you.
          </p>
        </section>

        {/* How Alder Heritage Is Different */}
        <section className="mb-12 rounded-lg bg-green-50 p-6">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-900">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
            How Alder Heritage Homes Is Different
          </h2>
          <p className="mb-6 text-gray-700">
            I left GREimagined because I couldn't ethically trap sellers anymore. At Alder Heritage Homes, we do things differently. We're a licensed real estate agent and direct cash buyer. We don't wholesaler. We don't assign contracts. We actually buy your house.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900">Licensed Agent</span>
              </div>
              <p className="text-sm text-gray-700">DRE #02219124. We're regulated and accountable.</p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900">Proof of Funds in 24 Hours</span>
              </div>
              <p className="text-sm text-gray-700">We show you proof of funds BEFORE you sign.</p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900">No Assignment Contracts</span>
              </div>
              <p className="text-sm text-gray-700">We buy your house ourselves. No middlemen.</p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900">3-Day Close</span>
              </div>
              <p className="text-sm text-gray-700">We close fast because we have the cash ready.</p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900">Price Match Guarantee</span>
              </div>
              <p className="text-sm text-gray-700">We beat any other cash offer or match it.</p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900">700+ Homes Purchased</span>
              </div>
              <p className="text-sm text-gray-700">Real track record. Real results.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Conclusion: Protect Yourself</h2>
          <p className="mb-4 text-gray-700">
            Now you know the 6 red flags that expose a wholesaler. Use this knowledge to protect yourself. Before you sign any contract, ask yourself:
          </p>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li>✓ Is this an assignment contract?</li>
            <li>✓ Do they have proof of funds?</li>
            <li>✓ Did they negotiate or accept immediately?</li>
            <li>✓ Are they pushing me to sign quickly?</li>
            <li>✓ Are they licensed and verifiable?</li>
            <li>✓ Are they responsive and professional?</li>
          </ul>
          <p className="mb-6 text-gray-700">
            If you answer "no" to any of these questions, you're probably dealing with a wholesaler. Walk away and find a real cash buyer.
          </p>
          <p className="text-lg font-semibold text-gray-900">
            At Alder Heritage Homes, we pass all these tests. We're licensed, we have proof of funds, we don't assign contracts, and we close in 3 days. We're the ethical alternative to wholesalers.
          </p>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Ready to Sell Your House to a Real Cash Buyer?</h2>
          <p className="mb-6 text-lg text-green-100">
            Get a free cash offer from Alder Heritage Homes. No wholesalers. No assignment contracts. Just honest, direct cash buying.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:5592818016"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-green-600 hover:bg-green-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (559) 281-8016
            </a>
            <a
              href="/lead-magnet"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-bold text-white hover:bg-green-700 transition-colors"
            >
              Get Free Guide <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
