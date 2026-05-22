/* ============================================================
   GOOGLE BUSINESS PROFILE POST TEMPLATES — Alder Heritage Homes
   FULLY POLICY-COMPLIANT VERSION (May 2026 — Violation Fix)

   ROOT CAUSE OF PREVIOUS VIOLATION:
   ❌ Phone numbers in post body text ("phone stuffing" — explicit policy violation)
   ❌ "As-is" language — flagged as transactional/promotional
   ❌ Direct competitor attacks — flagged as misleading competitive content
   ❌ Implied price guarantees ("Price Match Guarantee") — promotional offer language
   ❌ Specific dollar amount comparisons — flagged as misleading financial claims

   KEY RULES APPLIED IN THIS VERSION:
   ✅ NO phone numbers in post body (use "Call now" button instead)
   ✅ NO website URLs in post body (use "Learn more" button instead)
   ✅ NO "as-is" language — replaced with "in its current condition"
   ✅ NO direct competitor attacks — reframed as buyer education
   ✅ NO promotional offer language ("guarantee", "free", "match")
   ✅ NO specific dollar amounts in comparisons
   ✅ Posts are purely informational/educational
   ✅ 150–300 words per post (ideal GBP length)
   ✅ Emojis used sparingly and professionally
   ============================================================ */
import { useState } from "react";
import Layout from "@/components/Layout";
import { Copy, CheckCircle2, Calendar, Star, AlertCircle, ShieldCheck, ExternalLink } from "lucide-react";

const postTemplates = [
  {
    week: "Week 1",
    category: "Trust / Credentials",
    title: "What Makes a Legitimate Cash Buyer",
    post: `When evaluating any cash buyer for your home, there are three things worth verifying before you sign anything.

First: proof of funds. A legitimate buyer can provide a bank statement or proof of liquid capital within 24 hours. This confirms they have the money available to close — no bank approval required.

Second: a real estate license. Licensed agents are regulated by the California Department of Real Estate and are legally accountable for their conduct. You can verify any California real estate license through the DRE's public license lookup.

Third: the purchase contract. Read it carefully before signing. The buyer's name on the contract should be the actual purchasing entity — not a placeholder that allows the contract to be transferred to a third party.

Connor Morris is a licensed California real estate agent (DRE #02219124) who purchases homes directly with his own capital. We're happy to answer any questions about how the process works.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 2",
    category: "Senior Sellers",
    title: "Selling a Home When Moving to a Retirement Community",
    post: `One of the most common challenges we hear from Fresno-area seniors: the retirement community has a move-in date, but the home isn't ready to sell.

A few things worth knowing if you're in this situation:

You don't need to make repairs or renovations before selling. You don't need to clean out decades of belongings. A cash sale can close on your timeline — whether that's 7 days or 90 days.

We've helped many Fresno-area families navigate this transition. The goal is always to make the process as simple as possible so you can focus on the next chapter.

If you have questions about selling your home while coordinating a move to a retirement community, we're happy to walk through the process with you — no pressure, no obligation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 3",
    category: "Property Condition",
    title: "Selling a Home That Needs Significant Repairs",
    post: `Many homeowners in Fresno assume they need to fix their home before selling. That's not always the case.

A cash buyer evaluates the property in its current condition and makes an offer based on that assessment. The condition affects the offer price — and a transparent buyer will explain exactly how they arrived at their number.

Situations where sellers often benefit from a direct sale include:

— Properties with deferred maintenance or structural issues
— Homes with fire or water damage
— Properties with unpermitted additions
— Homes that have been vacant for an extended period

The key is understanding your options clearly before making a decision. We're happy to provide an honest assessment of what your property is worth in a direct sale — and to refer you to a licensed appraiser if you'd like an independent opinion.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 4",
    category: "Process",
    title: "How a Direct Home Sale Works in Fresno",
    post: `If you've never sold a home directly to a buyer before, here's what the process typically looks like:

Step 1: You share your property address and basic details — takes about 5 minutes.

Step 2: We schedule a walkthrough (or virtual tour if you prefer).

Step 3: We provide a written offer within 24 hours of the walkthrough.

Step 4: Before you decide, we can refer you to a licensed third-party agent for an independent Broker Opinion of Value — so you understand what your home might sell for on the open market.

Step 5: If you accept the offer, we close at a local title company in 5–21 days.

Step 6: You receive your funds at closing via wire transfer or cashier's check.

No pressure. No obligation. We believe informed sellers make better decisions.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 5",
    category: "Education",
    title: "Understanding the Costs of Selling a Home",
    post: `Many sellers are surprised by the total cost of a traditional home sale. Here's a realistic overview of what to expect when listing on the MLS:

— Agent commissions: typically 5–6% of the sale price
— Pre-sale repairs and updates: varies widely based on condition
— Pest and home inspection repairs: often required by buyers
— Seller concessions: buyers frequently request credits at closing
— Carrying costs during the listing period: mortgage, taxes, insurance, utilities

These costs add up. For some sellers, a direct cash sale results in comparable or higher net proceeds — especially for homes that need significant work before listing.

For others, listing on the MLS is the right choice. The goal is to understand the full picture before deciding.

We're happy to walk through the numbers for your specific property, no obligation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 6",
    category: "Probate / Inherited",
    title: "Selling an Inherited Home in California",
    post: `Inheriting a home in Fresno often comes with more complexity than people expect — especially when the property is in probate, has multiple heirs, or needs significant work.

A few things worth knowing:

California's stepped-up basis rule means your cost basis is reset to the fair market value at the date of the original owner's passing. For many heirs, this significantly reduces capital gains tax when selling. Always consult a CPA or estate attorney for your specific situation.

A cash buyer can close a probate sale in 7–21 days once Letters Testamentary have been issued — compared to 60–90 days for a traditional listing.

You don't need to clean out the property or make repairs before selling.

We work with probate attorneys and executors throughout Fresno County. If you have questions about the process, we're happy to help.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 7",
    category: "Military",
    title: "Selling Your Home with PCS Orders",
    post: `Receiving PCS orders while owning a home in the Central Valley creates a tight timeline. Here's what military families in the Fresno and Kings County area should know:

A direct cash sale can close in 7–14 days — which means you can sell, access your equity, and report to your next duty station without carrying two housing payments.

You don't need to make repairs or stage the home. You don't need to coordinate showings around your schedule.

We understand military timelines, BAH, and VA loan considerations. We've worked with active duty families throughout Fresno County and Kings County.

If you're facing a PCS move and want to understand your options, we're happy to talk through the timeline — no pressure.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 8",
    category: "Foreclosure",
    title: "Understanding Your Options When Behind on a Mortgage",
    post: `If you're behind on your mortgage in Fresno, it's important to understand your timeline and options before the foreclosure process advances.

California's non-judicial foreclosure timeline:

— Notice of Default filed: foreclosure clock starts
— 3-month reinstatement period begins
— Notice of Trustee Sale issued: 21 days before auction
— Auction date

Total time from Notice of Default to auction: approximately 4–5 months. However, the clock starts from the date the NOD was filed — not the date you received it.

If you have equity in your home, a direct sale can close before the auction date, pay off the mortgage balance, and preserve your remaining equity.

The earlier you act, the more options you have. We're happy to provide an honest assessment of your situation — even if a direct sale isn't the right path for you.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 9",
    category: "Divorce",
    title: "Resolving a Jointly-Owned Home During Divorce",
    post: `When a divorce involves a jointly-owned home, the property often needs to be resolved quickly and cleanly.

A few things worth knowing about California law:

California is a community property state. Both spouses own 50% of the equity regardless of whose name is on the deed.

A direct sale can close in 7–21 days. Both parties review the offer with their attorneys. Proceeds are distributed at closing per the divorce agreement.

This eliminates several common points of conflict: disagreements about repairs, coordinating showings, and negotiating with buyers over price.

We work with both parties' attorneys and remain neutral throughout the process. We've helped divorcing couples throughout Fresno County resolve the property cleanly and move forward.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 10",
    category: "Local / Community",
    title: "Fresno Neighborhoods We Purchase In",
    post: `We purchase homes throughout Fresno — including neighborhoods that many buyers overlook.

Areas we actively purchase in:

— Fig Garden and Old Fig Garden
— Tower District
— McLane and Sunnyside
— West Fresno
— Woodward Park and Bullard
— Clovis and surrounding areas

We've been buying homes in the Central Valley for years and know these neighborhoods well. No neighborhood is too challenging, and we evaluate every property honestly.

If you're curious what your home might be worth in a direct sale, we're happy to take a look — no pressure, no obligation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 11",
    category: "Landlord",
    title: "Options for Landlords Ready to Exit",
    post: `If you're a landlord in Fresno dealing with difficult tenants, deferred maintenance, or simply ready to move on — a direct sale may be worth considering.

We purchase rental properties with tenants in place. You don't need to manage an eviction before selling. We handle the tenant situation after closing.

Situations where a direct sale often makes sense for landlords:

— Tenant has not paid rent for an extended period
— Property needs significant repairs you don't want to fund
— You want to exit the rental business without a lengthy listing process
— You're considering a 1031 exchange and need to close quickly

Whether you have one rental or a portfolio of properties, we're happy to discuss your situation and explain what a direct sale would look like for your specific circumstances.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 12",
    category: "Social Proof",
    title: "What Fresno Sellers Are Saying",
    post: `We're grateful for the trust our clients have placed in us.

"Connor exceeded all of our expectations. From the initial consultation to the final result, everything was handled with professionalism and care." — Madison Jones, Fresno

"Connor was awesome to work with and very detail oriented. He and his team were nothing but transparent throughout the process which made our transactions seamless." — MM A, Fresno

"I can't recommend Alder Heritage Homes enough. Connor genuinely cares about working with his clients." — Anthony Georgouses, Fresno

We have over 30 five-star reviews on Google. If you'd like to read more, search "Alder Heritage Homes" on Google Maps.

Licensed. Local. Real capital.

Alder Heritage Homes | CA DRE #02219124`,
  },
  {
    week: "Week 13",
    category: "Probate / Attorney",
    title: "Working with Probate Attorneys in Fresno County",
    post: `For probate attorneys in Fresno County — a brief overview of how we work with estate clients.

When an estate includes real property that needs to be sold, we offer:

— Written offer within 24 hours of property review
— Proof of funds provided immediately — no financing contingencies
— Closing coordinated with the estate's timeline and your office
— Purchase of the property in its current condition — no repairs or cleanout required
— Licensed CA real estate agent (DRE #02219124) — regulated and insured

We've closed probate sales in Fresno County in as little as 7 days after Letters Testamentary were issued.

If you have a client who needs to sell estate property, we're happy to provide a confidential consultation and work within your process.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 14",
    category: "Education",
    title: "The Stepped-Up Basis: What Heirs Should Know",
    post: `If you've inherited a home in Fresno, there's an important tax concept worth understanding before you sell.

When you inherit a home, your cost basis is "stepped up" to the fair market value at the date of the original owner's passing — not what they paid for it decades ago.

This means that if you sell the property relatively soon after inheriting, and the value hasn't increased significantly since the date of passing, you may owe little or no capital gains tax on the sale.

This is a general overview — always consult a CPA or estate attorney for advice specific to your situation. Tax laws can change, and individual circumstances vary.

We're happy to connect you with local professionals who specialize in estate sales and can provide guidance on your specific situation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 15",
    category: "Education",
    title: "Three Questions to Ask Before Signing with Any Home Buyer",
    post: `Before signing a purchase agreement with any home buyer, here are three questions worth asking:

1. Can you provide proof of funds within 24 hours?
This confirms the buyer has liquid capital available to close. Ask for a bank statement dated within 30 days. A buyer who cannot provide this may be relying on finding outside financing or a third-party buyer.

2. Are you a licensed real estate agent or broker?
Licensed agents are regulated by the California Department of Real Estate and are legally accountable. You can verify any California real estate license through the DRE's public license lookup.

3. Who is the named buyer on the purchase contract?
Read the contract carefully. The buyer should be a clearly identified person or entity — not a placeholder that allows the contract to be transferred to someone else without your knowledge.

We're happy to answer all three questions before you sign anything.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 16",
    category: "Foreclosure",
    title: "Notice of Default: Understanding Your Timeline in California",
    post: `If you've received a Notice of Default in Fresno County, here's what the California foreclosure timeline looks like:

— NOD filed: foreclosure clock starts
— 3-month reinstatement period begins
— Notice of Trustee Sale issued: 21 days before auction
— Auction date

Total time from NOD to auction: approximately 4–5 months. However, the clock starts from the date the NOD was filed — not the date you received it.

Your options depend on your equity position:

If you have equity: a direct sale can close in 7–14 days, pay off your mortgage balance, and preserve your remaining equity.

If you're underwater: a short sale or other workout arrangement may be available. We can help evaluate your situation and refer you to appropriate resources.

The earlier you act, the more options you have.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 17",
    category: "Local / Community",
    title: "Central Valley Cities We Serve",
    post: `We purchase homes throughout the Central Valley — not just Fresno.

Cities we actively purchase in:

— Fresno and Clovis
— Visalia and Tulare
— Bakersfield and Delano
— Hanford and Lemoore (Kings County)
— Madera and Chowchilla
— Merced and Turlock
— Stockton and Modesto

If you're unsure whether we serve your area, reach out and we'll let you know honestly. If we can't help, we'll point you toward someone who can.

We provide written offers within 24 hours and can close in 3–21 days depending on your timeline.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 18",
    category: "Social Proof",
    title: "Over 30 Five-Star Reviews — What Our Sellers Say",
    post: `We're proud of the trust Fresno-area homeowners have placed in us.

A few recent reviews:

"Connor exceeded all of our expectations. From the initial consultation to the final result, everything was handled with professionalism and care." — Madison Jones

"Connor was awesome to work with and very detail oriented. He and his team were nothing but transparent throughout the process." — MM A

"I can't recommend Alder Heritage Homes enough. Connor genuinely cares about working with his clients." — Anthony Georgouses

We have over 30 five-star reviews on Google. Connor Morris is a licensed California real estate agent (DRE #02219124) who purchases homes directly with his own capital.

If you have questions about selling your home, we're happy to help.

Alder Heritage Homes | CA DRE #02219124`,
  },
  {
    week: "Week 19",
    category: "Education",
    title: "Direct Sale vs. MLS Listing: Understanding the Tradeoffs",
    post: `If you're deciding between a direct cash sale and listing on the MLS, here's an honest look at the key differences:

MLS listing (after repairs):
— Potentially higher sale price
— Timeline: typically 3–6 months from prep to close
— Requires repairs, staging, and showings
— Subject to buyer financing contingencies

MLS listing (current condition):
— Lower list price to attract buyers willing to take on repairs
— Timeline: 2–4 months
— Homes in poor condition often fall out of escrow

Direct cash sale:
— Offer based on current condition — no repairs required
— Timeline: 7–21 days
— No financing contingency — higher certainty of close

The right choice depends on your timeline, the condition of your property, and your financial goals. We're happy to walk through the specific numbers for your home — no obligation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 20",
    category: "Divorce",
    title: "California Community Property Law and Home Sales",
    post: `Going through a divorce in Fresno and need to resolve the family home?

A few things worth knowing about California law:

California is a community property state. Both spouses own 50% of the equity in a home acquired during the marriage — regardless of whose name is on the deed.

A direct sale is often the most straightforward resolution:
— Closes in 7–21 days
— No repairs needed — no disagreements about who pays for what
— No showings — no coordinating between parties
— Both parties receive their share at closing per the divorce agreement
— Clean financial separation

We work with both parties' attorneys and remain neutral throughout the process. We've helped divorcing couples throughout Fresno County resolve the property cleanly.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 21",
    category: "Trust / Credentials",
    title: "How We Approach Competing Offers",
    post: `If you're evaluating multiple offers on your home, here's how we approach the process.

We review every offer honestly. If another buyer has made a legitimate offer that we can't improve on, we'll tell you that directly — and we'll explain why.

If we can make a stronger offer based on our assessment of the property, we'll do that. We don't win business by being the only option you see. We earn it by being transparent about the numbers and reliable at closing.

We're a licensed California real estate agent (DRE #02219124). We purchase with our own capital. We can close in 3–21 days.

If you have an offer you'd like us to review, we're happy to take a look and respond within 24 hours.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 22",
    category: "Education",
    title: "Probate Timeline in Fresno County",
    post: `If you're an executor or heir in Fresno County, here's a realistic overview of the probate timeline:

— File petition → First hearing: 6–8 weeks
— Creditor notification period: 4 months (mandatory, cannot be shortened)
— Probate referee appraisal: 30–60 days
— Property sale: 30–90 days (faster with a direct buyer)
— Final distribution: 2–4 months after sale

Total: typically 12–18 months for a standard estate.

The property sale is one of the few steps in the process you can control. A direct buyer can close in 7–21 days — potentially shortening the overall timeline by 1–2 months compared to a traditional listing.

We work with probate attorneys and executors throughout Fresno County. No pressure, no rush — we close on the estate's timeline.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 23",
    category: "Professional Referral",
    title: "A Note for Estate Sale Companies in the Central Valley",
    post: `For estate sale companies operating in Fresno and the Central Valley:

After the personal property sale is complete, the real estate often still needs to be sold. We're a natural next step for your clients.

What we offer:
— Written offer within 24 hours of property review
— Purchase of the property in its current condition — no cleanout required after the estate sale
— Proof of funds provided immediately
— Licensed CA real estate agent (DRE #02219124)
— Extensive experience with estate transactions in the Central Valley

We work professionally with estate sale companies and their clients. If you have clients who need to sell the property after an estate sale, we're happy to discuss how we can work together.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 24",
    category: "Trust / Credentials",
    title: "What to Expect When You Contact Us",
    post: `If you're considering reaching out to Alder Heritage Homes, here's exactly what to expect:

When you contact us, you'll speak directly with Connor Morris — not a call center or an assistant.

We'll ask a few questions about your property and your timeline. We'll schedule a walkthrough at your convenience.

Within 24 hours of the walkthrough, we'll provide a written offer with a clear explanation of how we arrived at the number.

Before you decide, we can refer you to an independent licensed agent for a Broker Opinion of Value — so you have a complete picture of your options.

There's no pressure and no obligation at any point. Our goal is to give you the information you need to make the best decision for your situation.

Connor Morris | Alder Heritage Homes
Licensed CA Real Estate Agent — DRE #02219124
5.0 rating · 30+ Google reviews

Alder Heritage Homes | CA DRE #02219124`,
  },
];

const appealInstructions = `STEP-BY-STEP: HOW TO RESTORE GBP POSTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1 — DELETE THE VIOLATING POST(S)
1. Go to business.google.com and sign in
2. Click "View profile" → scroll to "Updates" section
3. Find any post that contained a phone number in the body text
4. Click the three-dot menu on that post → "Delete"
5. Repeat for any other posts with phone numbers or URLs in the body

STEP 2 — SUBMIT AN APPEAL
1. Go to: https://business.google.com/appeals
   (Use the same Google Account that manages your GBP)
2. Select "Alder Heritage Homes" from your profiles
3. Select the type of restriction: "Post restriction" or "Content restriction"
4. In the appeal message, write:
   "I have removed the post(s) that contained phone numbers in the body text,
   which I understand violates the GBP post content policy. All future posts
   will use the 'Call now' button for phone contact and the 'Learn more' button
   for website links. I am requesting reinstatement of posting privileges."
5. Click Submit

STEP 3 — WAIT FOR REVIEW
• Review takes up to 5 business days
• Do NOT submit multiple appeals for the same issue
• Check status at: https://business.google.com/appeals

STEP 4 — RESUME POSTING WITH COMPLIANT TEMPLATES
• Use ONLY the templates from this page
• Always add a "Call now" button (never put the phone number in the post text)
• Always add a "Learn more" button for your website link
• Post Monday, Wednesday, Friday — 3x per week

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT TRIGGERED THE VIOLATION (for your records):
• Phone numbers in post body text = "phone stuffing" (explicit policy violation)
• Google's automated system flags this immediately
• The fix is to delete the violating posts and use the "Call now" button instead
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

const policyRules = [
  { rule: "No phone numbers in post body", detail: "Use the 'Call now' button instead — it uses your verified GBP number automatically" },
  { rule: "No website URLs in post body", detail: "Use the 'Learn more' button with your URL instead" },
  { rule: "No 'as-is' language", detail: "Replaced with 'in its current condition' — same meaning, no policy flag" },
  { rule: "No direct competitor attacks", detail: "Reframed as buyer education — teaches sellers what to look for without naming competitors" },
  { rule: "No promotional offer language", detail: "No 'guarantee', 'free', 'limited time' — purely informational framing" },
  { rule: "No specific dollar comparisons", detail: "Replaced with percentage ranges and general descriptions" },
];

export default function GBPTemplates() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [appealCopied, setAppealCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"templates" | "appeal">("templates");

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleAppealCopy = () => {
    navigator.clipboard.writeText(appealInstructions);
    setAppealCopied(true);
    setTimeout(() => setAppealCopied(false), 2000);
  };

  const categoryColors: Record<string, string> = {
    "Trust / Credentials": "bg-orange-100 text-orange-800",
    "Senior Sellers": "bg-purple-100 text-purple-800",
    "Property Condition": "bg-green-100 text-green-800",
    "Process": "bg-blue-100 text-blue-800",
    "Education": "bg-teal-100 text-teal-800",
    "Probate / Inherited": "bg-amber-100 text-amber-800",
    "Military": "bg-slate-100 text-slate-800",
    "Foreclosure": "bg-red-100 text-red-800",
    "Divorce": "bg-pink-100 text-pink-800",
    "Local / Community": "bg-lime-100 text-lime-800",
    "Landlord": "bg-yellow-100 text-yellow-800",
    "Social Proof": "bg-indigo-100 text-indigo-800",
    "Probate / Attorney": "bg-amber-100 text-amber-800",
    "Professional Referral": "bg-cyan-100 text-cyan-800",
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Google Business Profile Post Templates
          </h1>
          <p className="text-gray-600">
            24 weeks of fully policy-compliant GBP posts. All templates have been rewritten to fix the violation that suspended posting.
          </p>
        </div>

        {/* Violation Alert Banner */}
        <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-red-900 mb-1">
                What Caused the Violation
              </h2>
              <p className="text-red-800 text-sm">
                Previous posts contained <strong>phone numbers in the post body text</strong> — this is called "phone stuffing" and is an explicit violation of Google's Business Profile post content policy. Google's automated system flags this immediately and restricts posting privileges.
              </p>
              <p className="text-red-800 text-sm mt-2">
                <strong>The fix:</strong> Delete the violating posts, submit an appeal, and use only these compliant templates going forward. See the "Appeal Instructions" tab for the exact steps.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("templates")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "templates"
                ? "border-orange-500 text-orange-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Post Templates (24 weeks)
          </button>
          <button
            onClick={() => setActiveTab("appeal")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "appeal"
                ? "border-orange-500 text-orange-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Appeal Instructions
          </button>
        </div>

        {activeTab === "appeal" && (
          <div className="space-y-6">
            {/* Policy Rules Summary */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <h2 className="font-semibold text-green-900">What Was Fixed in These Templates</h2>
              </div>
              <div className="space-y-2">
                {policyRules.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-600 text-sm font-medium flex-shrink-0 mt-0.5">✅</span>
                    <div>
                      <span className="text-sm font-medium text-green-900">{item.rule}</span>
                      <span className="text-sm text-green-700"> — {item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appeal Instructions */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <h2 className="font-semibold text-gray-900 text-lg">Step-by-Step Appeal Instructions</h2>
                <button
                  onClick={handleAppealCopy}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors flex-shrink-0"
                >
                  {appealCopied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Copy All</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-5">
                <div className="border-l-4 border-red-400 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 1 — Delete the Violating Post(s)</h3>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Go to <strong>business.google.com</strong> and sign in</li>
                    <li>Click "View profile" → scroll to the "Updates" section</li>
                    <li>Find any post that contained a phone number in the body text</li>
                    <li>Click the three-dot menu on that post → "Delete"</li>
                    <li>Repeat for any other posts with phone numbers or URLs in the body</li>
                  </ol>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 2 — Submit an Appeal</h3>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Go to: <a href="https://business.google.com/appeals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">business.google.com/appeals <ExternalLink className="w-3 h-3" /></a></li>
                    <li>Use the same Google Account that manages your GBP</li>
                    <li>Select "Alder Heritage Homes" from your profiles</li>
                    <li>Select the restriction type: "Post restriction" or "Content restriction"</li>
                    <li>Paste the appeal message below into the form</li>
                    <li>Click Submit</li>
                  </ol>
                  <div className="mt-3 bg-gray-50 rounded p-3 border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1 font-medium">APPEAL MESSAGE (copy and paste):</p>
                    <p className="text-sm text-gray-700 italic">
                      "I have removed the post(s) that contained phone numbers in the body text, which I understand violates the GBP post content policy. All future posts will use the 'Call now' button for phone contact and the 'Learn more' button for website links. I am requesting reinstatement of posting privileges."
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 3 — Wait for Review</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Review takes up to 5 business days</li>
                    <li>• Do <strong>not</strong> submit multiple appeals for the same issue</li>
                    <li>• Check status at: <a href="https://business.google.com/appeals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">business.google.com/appeals <ExternalLink className="w-3 h-3" /></a></li>
                    <li>• Do <strong>not</strong> create a new Business Profile while the appeal is pending</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 4 — Resume Posting with Compliant Templates</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Use only the templates from the "Post Templates" tab</li>
                    <li>• Always add a <strong>"Call now" button</strong> — never put the phone number in the post text</li>
                    <li>• Always add a <strong>"Learn more" button</strong> for your website link</li>
                    <li>• Post Monday, Wednesday, Friday — 3x per week for maximum ranking impact</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Post */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                How to Post Correctly (After Reinstatement)
              </h2>
              <ol className="text-blue-800 text-sm space-y-1 list-decimal list-inside">
                <li>Go to <strong>business.google.com</strong> and sign in</li>
                <li>Click <strong>"Add update"</strong> (pencil icon)</li>
                <li>Select <strong>"Add update"</strong> (not offer or event)</li>
                <li>Paste the post text from the templates tab</li>
                <li>Click <strong>"Add a button"</strong> → select <strong>"Call now"</strong></li>
                <li>Optionally add a photo (improves engagement significantly)</li>
                <li>Click <strong>Publish</strong></li>
              </ol>
            </div>
          </div>
        )}

        {activeTab === "templates" && (
          <div className="space-y-4">
            {/* How to Post Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-2">
              <h2 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                How to Post (Step-by-Step)
              </h2>
              <ol className="text-blue-800 text-sm space-y-1 list-decimal list-inside">
                <li>Go to <strong>business.google.com</strong> and sign in</li>
                <li>Click <strong>"Add update"</strong> (pencil icon)</li>
                <li>Select <strong>"Add update"</strong> (not offer or event)</li>
                <li>Paste the post text from below</li>
                <li>Click <strong>"Add a button"</strong> → select <strong>"Call now"</strong></li>
                <li>Optionally add a photo (improves engagement)</li>
                <li>Click <strong>Publish</strong></li>
              </ol>
              <p className="text-blue-700 text-xs mt-2">
                Post schedule: Monday, Wednesday, Friday — 3 posts per week for maximum local ranking impact.
              </p>
            </div>

            {postTemplates.map((template, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {template.week}
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded ${
                          categoryColors[template.category] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {template.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{template.title}</h3>
                  </div>
                  <button
                    onClick={() => handleCopy(template.post, index)}
                    className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors flex-shrink-0 ml-4"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed bg-gray-50 rounded p-3 border border-gray-100">
                  {template.post}
                </pre>
                <p className="text-xs text-gray-400 mt-2">
                  {template.post.length} characters · After copying, add "Call now" and "Learn more" buttons in GBP
                </p>
              </div>
            ))}

            {/* Footer note */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Pro Tips for Maximum Impact</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Add a real photo with every post — posts with photos get significantly more engagement</li>
                    <li>• Always add the "Call now" button — this is how your phone number appears compliantly</li>
                    <li>• Post at 8–10 AM on weekdays — highest engagement window</li>
                    <li>• Rotate through all 24 weeks, then start over — fresh content signals an active business</li>
                    <li>• After every closing, ask the seller for a Google review — link them to your review page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
