import React from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { useSEO } from "@/hooks/useSEO";
import {
  CheckCircle2, AlertTriangle, TrendingUp, Clock, DollarSign, Shield,
  ArrowRight, Phone, Calculator
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

export default function PriceMatchGuarantee() {
  useSEO({
    title: "Price Match Guarantee",
    description: "We guarantee the highest cash offers in Fresno & Central Valley. Match or beat any competing offer. No last-minute price reductions. Ethical cash buyer.",
    canonical: "https://www.alderheritagehomes.com/price-match-guarantee",
  });

  return (
    <Layout>
      <PageMeta
        path="/price-match-guarantee"
        title="Price Match Guarantee | Alder Heritage Homes"
        description="We guarantee the highest cash offers in Fresno & Central Valley. Match or beat any competing offer. No last-minute price reductions."
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <Shield size={28} className="text-green-200" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Guarantee</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight font-serif">
            Highest Cash Offers Guaranteed
          </h1>

          <p className="text-xl text-green-100 mb-8 max-w-2xl">
            We offer the highest cash offers in Fresno and the Central Valley. If you have a competing offer, we will match it or beat it. Guaranteed. No exceptions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/compare-options">
              <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2">
                <Calculator size={20} />
                Compare Your Options
              </button>
            </Link>
            <a href={PHONE_HREF}>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border-2 border-white transition-all flex items-center gap-2">
                <Phone size={20} />
                Call {PHONE}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* The Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif mb-12 text-gray-900">
            What We Guarantee
          </h2>

          <div className="space-y-8">
            {/* Guarantee 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                  <CheckCircle2 size={24} className="text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Highest Cash Offer in Fresno & Central Valley
                </h3>
                <p className="text-gray-700 text-lg">
                  We have the capital, the experience, and the local market knowledge to offer the highest price for your home. If you receive a competing offer, bring it to us. We will match it or beat it. No questions asked.
                </p>
              </div>
            </div>

            {/* Guarantee 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100">
                  <AlertTriangle size={24} className="text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No Last-Minute Price Reductions
                </h3>
                <p className="text-gray-700 text-lg">
                  Most cash buyers lock you into a contract, then ask for a price reduction at closing when you're vulnerable and have nowhere else to go. We don't do that. Our offer is our offer. Period. We close at the price we quoted.
                </p>
              </div>
            </div>

            {/* Guarantee 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100">
                  <Clock size={24} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Fastest Closing Timeline
                </h3>
                <p className="text-gray-700 text-lg">
                  We close escrow faster than any competitor. While other buyers are still doing inspections and appraisals, we're already wiring your cash. 3 days is standard. We can do it in 3 if you need it.
                </p>
              </div>
            </div>

            {/* Guarantee 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100">
                  <DollarSign size={24} className="text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Zero Hidden Fees or Surprises
                </h3>
                <p className="text-gray-700 text-lg">
                  No agent commissions. No listing fees. No closing cost surprises. We cover standard seller-side closing costs. The offer we make is the amount you receive at closing (minus any mortgage payoff, liens, or back taxes).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Broker Partnership */}
      <section className="py-20 bg-white border-t-4 border-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif mb-12 text-gray-900">
            Your Options Matter — We Want You to Decide
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-600 mb-8">
            <h3 className="text-2xl font-bold text-green-700 mb-6">I Partner With the Best Broker in Fresno</h3>
            <p className="text-gray-800 text-lg mb-6">
              Here's what separates me from every other cash buyer: <strong>I actually want what's best for YOU, not just what's best for me.</strong>
            </p>

            <div className="space-y-4">
              <p className="text-gray-800">
                If you want, I will have my broker partner provide you with a <strong>free Broker Opinion of Value</strong> and a <strong>traditional listing analysis</strong>. You'll get to see both options side by side:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white rounded-lg p-6 border-l-4 border-amber-600">
                  <h4 className="font-bold text-amber-700 mb-3 text-lg">Option 1: Sell Off-Market for Cash</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Close in 3 days</li>
                    <li>✓ No inspections or appraisals</li>
                    <li>✓ No contingencies</li>
                    <li>✓ Certainty (no buyer falling through)</li>
                    <li>✓ Sell as-is (no repairs needed)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-700 mb-3 text-lg">Option 2: List on the MLS</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Potentially higher sale price</li>
                    <li>✓ Professional marketing</li>
                    <li>✓ Access to all buyers</li>
                    <li>✗ 30–90 day closing timeline</li>
                    <li>✗ Buyer contingencies & inspections</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-800 font-semibold bg-white rounded-lg p-4 border-l-4 border-green-600">
                <strong>Here's the thing:</strong> If you choose to sell off-market for cash to me, I will pay you MORE than you'll get from any other buyer. I'm not a wholesaler. I have the capital. I can afford to pay top dollar because I'm buying it for myself, not trying to flip it to someone else.
              </p>

              <p className="text-gray-800">
                You deserve to know all your options. Call me. Let's talk about what makes sense for YOUR situation. If a traditional listing is better for you, I'll say so. If a cash sale to me is better, I'll show you why. But you get to decide.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Why This Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif mb-12 text-gray-900">
            Why This Matters
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The Problem With Most Cash Buyers
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <AlertTriangle size={24} className="text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Bait and Switch Offers</p>
                  <p className="text-gray-600">They quote a high price to lock you in, then ask for 10–20% off at closing when you're desperate.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <AlertTriangle size={24} className="text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Hidden Fees</p>
                  <p className="text-gray-600">Closing costs, inspection fees, title fees — they nickel-and-dime you until your net proceeds are 15% lower than quoted.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <AlertTriangle size={24} className="text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Slow Closings</p>
                  <p className="text-gray-600">They take 30–45 days to close, leaving you in limbo and vulnerable to title issues or liens surfacing.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <AlertTriangle size={24} className="text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">No Accountability</p>
                  <p className="text-gray-600">They're not licensed agents. No DRE oversight. No recourse if something goes wrong.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How Alder Heritage Is Different
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Licensed Real Estate Agent (DRE #02219124)</p>
                  <p className="text-gray-600">We're held to a professional standard. We have fiduciary duties to you and face real consequences for unethical behavior.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Our Own Capital</p>
                  <p className="text-gray-600">We buy with real money, not wholesaler assignments. We have skin in the game and stand behind every offer.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Price Match Guarantee</p>
                  <p className="text-gray-600">If you have a competing offer, we match it or beat it. Our offer is locked in. No surprises at closing.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Fast Closings (5–7 Days)</p>
                  <p className="text-gray-600">We close faster than anyone. No inspections, no appraisals, no delays. You get your cash sooner.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Transparent Pricing</p>
                  <p className="text-gray-600">Zero hidden fees. The offer we make is the amount you receive. We cover closing costs. That's it.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={24} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">700+ Homes Purchased</p>
                  <p className="text-gray-600">Since 2008, we've closed over 700 home purchases. We know what we're doing and have a proven track record.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Use the Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif mb-12 text-gray-900">
            How to Use Your Price Match Guarantee
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border-l-4 border-amber-500">
              <div className="flex gap-4">
                <div className="text-3xl font-bold text-amber-600 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get a Competing Offer</h3>
                  <p className="text-gray-700">Shop around. Get offers from other cash buyers, wholesalers, or list your home on the MLS.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border-l-4 border-blue-500">
              <div className="flex gap-4">
                <div className="text-3xl font-bold text-blue-600 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bring It to Us</h3>
                  <p className="text-gray-700">Call us at {PHONE} or fill out our form. Share the competing offer (you don't need to show us the full details, just the offer amount).</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-500">
              <div className="flex gap-4">
                <div className="text-3xl font-bold text-green-600 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">We Match or Beat It</h3>
                  <p className="text-gray-700">We'll match the competing offer or beat it. We'll send you a new written offer within 24 hours. No hassle, no negotiation.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-purple-500">
              <div className="flex gap-4">
                <div className="text-3xl font-bold text-purple-600 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Close Faster</h3>
                  <p className="text-gray-700">Accept our offer and close in 3 days. Get your cash sooner than anyone else can deliver.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif mb-12 text-gray-900 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if I don't have a competing offer?
              </h3>
              <p className="text-gray-700">
                We'll still give you the highest fair market offer based on comparable sales, property condition, and local market data. Our offer is competitive regardless.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What counts as a "competing offer"?
              </h3>
              <p className="text-gray-700">
                Any written offer from another cash buyer, wholesaler, or real estate agent representing a buyer. We'll match or beat it.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you really close faster?
              </h3>
              <p className="text-gray-700">
                Yes. We close in 5–7 business days on average. Most other buyers take 30–45 days. We have the capital and the process to move fast.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if you can't beat a competing offer?
              </h3>
              <p className="text-gray-700">
                We will always match it. If we can't beat it, we'll match it and offer to close faster. You'll get the same price but your cash sooner.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are there any conditions or fine print?
              </h3>
              <p className="text-gray-700">
                No. This is a straightforward guarantee. If you have a competing offer, we match or beat it. That's it. No tricks, no loopholes, no fine print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Ready to Get the Highest Offer?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Call us today. Get a free, no-obligation cash offer. We guarantee it's the highest in Fresno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF}>
              <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2 justify-center">
                <Phone size={20} />
                Call {PHONE}
              </button>
            </a>
            <Link href="/compare-options">
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border-2 border-white transition-all flex items-center gap-2 justify-center">
                <Calculator size={20} />
                Compare Options
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
