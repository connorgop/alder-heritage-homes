/* ============================================================
   GOOGLE BUSINESS PROFILE POST TEMPLATES — Alder Heritage Homes
   POLICY-COMPLIANT VERSION (May 2026)
   
   KEY RULES APPLIED:
   ✅ NO phone numbers in post body (Google policy violation — use "Call now" button instead)
   ✅ NO website URLs in post body (flagged as solicitation)
   ✅ NO "free" offers or promotional language that implies a transaction
   ✅ Posts are informational/educational — not direct sales pitches
   ✅ Emojis used sparingly and professionally
   ✅ Each post is 150–300 words (ideal for GBP)
   
   HOW TO POST:
   1. Copy the post text below
   2. Go to business.google.com → Add update
   3. Paste the text
   4. Add a "Call now" button (uses your verified GBP phone number automatically)
   5. Add a photo if you have one
   6. Publish
   ============================================================ */
import { useState } from "react";
import Layout from "@/components/Layout";
import { Copy, CheckCircle2, Calendar, MapPin, Star, AlertCircle } from "lucide-react";

const postTemplates = [
  {
    week: "Week 1",
    category: "Trust / Differentiator",
    title: "We're Not Wholesalers",
    post: `Before you call any "We Buy Houses" company in Fresno — ask them one question: "Are you the end buyer?"

Most won't answer directly. Here's why: the majority of cash buyer ads in Fresno are run by wholesalers. They don't have the capital to close. They tie up your property, then sell your contract to a real investor — pocketing $20,000–$60,000 that should have gone to you.

We are the end buyer. Connor Morris is a licensed California real estate agent (DRE #02219124) who buys homes with his own capital. No middlemen. No assignment fees. No surprises.

If you're thinking about selling, we're happy to answer any questions — no pressure, no obligation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 2",
    category: "Senior Sellers",
    title: "Retirement Community Timing",
    post: `Moving to a retirement community in Fresno?

The #1 challenge we hear from seniors: "The community wants us in 60 days but our house isn't ready to sell."

Here's how we help: we close on your timeline. If you need 90 days to get settled at Fairwinds, The Terraces, or another local community — we work around your move-in date, not the other way around.

You don't need to clean out the house. You don't need to make repairs. You leave what you don't want, we handle the rest.

We've helped dozens of Fresno-area seniors make this transition smoothly. Happy to answer any questions about the process.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 3",
    category: "Condition",
    title: "We Buy Homes in Any Condition",
    post: `You don't need to fix anything before selling.

We've purchased homes with:
— Foundation problems
— Mold in the walls
— Fire damage
— Hoarder situations
— Roofs that need full replacement
— Unpermitted additions

The condition of your home does not affect whether we can buy it. It only affects the price — and we'll be completely transparent about that math before you ever sign anything.

No repairs. No cleaning. No inspections. We handle everything after closing.

If you have questions about selling a home in challenging condition, we're happy to talk through your situation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 4",
    category: "Process",
    title: "How Our Process Works",
    post: `Here's exactly how selling to Alder Heritage Homes works:

Step 1: You share your property address — takes 2 minutes
Step 2: We schedule a walkthrough (or virtual tour if you prefer)
Step 3: We make a written cash offer within 24 hours
Step 4: Before you decide, we refer you to a free independent Broker Opinion of Value from a third-party agent — so you know exactly what your home is worth on the open market
Step 5: If you accept, we close in 5–21 days at a local title company
Step 6: You receive your funds at closing

No pressure. No obligation. No surprises.

We believe informed sellers make better decisions — even if that means selling to someone else.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 5",
    category: "Education",
    title: "Understanding the True Cost of Listing",
    post: `Something worth knowing if you're considering listing your Fresno home on the MLS:

The final net proceeds are often lower than sellers expect. Here's a realistic breakdown for a $400K home:

— Realtor commissions (5–6%): $20,000–$24,000
— Pest inspection repairs: $3,000–$8,000
— Home inspection repairs: $5,000–$15,000
— Seller concessions: $5,000–$10,000
— Carrying costs during listing: $3,000–$6,000

That's $36,000–$63,000 in potential deductions before you close.

A cash sale eliminates most of these costs. It's not always the right choice — but it's worth understanding the full picture before you decide.

We're happy to walk through the numbers for your specific property, no obligation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 6",
    category: "Probate / Inherited",
    title: "Inherited a Home in Fresno?",
    post: `Inheriting a home comes with a lot of decisions — and not much time to make them.

You don't have to go through probate alone. You don't have to clean out decades of belongings. You don't have to manage repairs from out of state.

We buy inherited homes — including properties in active probate, homes with title complications, and properties that have been vacant for years.

A few things worth knowing:
— California's stepped-up basis rule often means little or no capital gains tax when you sell quickly after inheriting
— Probate sales can close in 7–21 days with a cash buyer vs. 60–90 days with a traditional listing
— We work directly with probate attorneys and title companies

Connor is a licensed CA agent (DRE #02219124) who can connect you with a probate attorney if needed.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 7",
    category: "Military",
    title: "PCS Orders and Selling Your Home",
    post: `If you've received PCS orders from NAS Lemoore or another Central Valley installation, selling your home quickly is often the top priority.

A cash sale can close in 3–7 days — which means you can sell, pocket your equity, and report to your next duty station without carrying two housing payments.

We understand BAH, VA loans, and military timelines. We've worked with active duty families throughout Kings County and Fresno County.

No repairs required. No showings. No waiting on buyer financing.

If you're facing a PCS move and want to understand your options, we're happy to talk through the timeline with you — no pressure.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 8",
    category: "Foreclosure",
    title: "Options If You're Behind on Your Mortgage",
    post: `If you're behind on your mortgage in Fresno, you have more options than you may realize.

A cash sale can stop foreclosure proceedings immediately. In most cases, we can close before an auction date.

Here's what the timeline looks like in California:
— Notice of Default filed: foreclosure clock starts
— 3-month reinstatement period
— Notice of Trustee Sale: 21 days before auction
— Auction date

The earlier you act, the more options you have. A cash sale preserves your equity and gives you a clean exit.

We've helped Fresno families navigate this situation without judgment. We'll give you an honest assessment of your options — even if selling to us isn't the right move.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 9",
    category: "Divorce",
    title: "Selling a Home During Divorce",
    post: `Selling a home during divorce is difficult enough without adding months of showings and negotiations.

A cash sale closes in 7 days. Both parties review the offer with their attorneys. Proceeds are split per your divorce agreement.

No joint decisions about repairs. No arguing about list price. No strangers walking through your home every weekend.

California is a community property state — both spouses own 50% of the equity regardless of whose name is on the deed. A clean, fast sale is often the simplest resolution for both parties.

We've worked with divorcing couples throughout Fresno County. We're neutral, professional, and we close on your timeline.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 10",
    category: "Local / Community",
    title: "Fresno Neighborhoods We Purchase In",
    post: `We purchase homes throughout Fresno — including neighborhoods other buyers won't consider.

Areas we actively buy in:

— Fig Garden and Old Fig Garden
— Tower District
— McLane and Sunnyside
— West Fresno
— Woodward Park and Bullard
— Clovis and surrounding areas

No neighborhood is too challenging. No condition is too difficult. If you own it, we'll evaluate it honestly.

We've been buying homes in the Central Valley for years and know these neighborhoods well. If you're curious what your home might be worth in a cash sale, we're happy to take a look.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 11",
    category: "Landlord",
    title: "Options for Tired Landlords",
    post: `If you're a landlord in Fresno dealing with difficult tenants, deferred maintenance, or just ready to move on — you have options.

We purchase rental properties with tenants in place. You don't have to evict anyone before selling. We handle the tenant situation after closing.

A few situations where a cash sale makes sense for landlords:

— Tenant hasn't paid rent in months
— Property needs significant repairs you don't want to fund
— You want to exit the rental business without a long listing process
— You're considering a 1031 exchange and need to close quickly

Whether you have one rental or a portfolio of properties, we can structure a deal that works for your situation.

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

32 five-star reviews on Google. If you'd like to read more, search "Alder Heritage Homes" on Google Maps.

Licensed. Local. Real capital.

Alder Heritage Homes | CA DRE #02219124`,
  },
  {
    week: "Week 13",
    category: "Probate / Attorney",
    title: "A Resource for Fresno Probate Attorneys",
    post: `For probate attorneys in Fresno County — a quick note about how we work with your clients.

When an estate includes real property that needs to be sold, we offer:

— Written cash offer within 24 hours of property review
— Proof of funds provided immediately — no financing contingencies
— Closing on the estate's timeline, coordinated with your office
— As-is purchase — no repairs or cleanout required
— Licensed CA real estate agent (DRE #02219124) — accountable and insured

We've closed probate sales in Fresno County in as little as 7 days after Letters Testamentary were issued.

If you have a client who needs to sell estate property quickly, we're happy to provide a confidential consultation.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 14",
    category: "Education",
    title: "The Stepped-Up Basis: What Heirs Should Know",
    post: `If you've inherited a home in Fresno, here's a tax fact that could save you significantly:

When you inherit a home, your cost basis is "stepped up" to the fair market value at the date of death — not what your parent paid for it decades ago.

Example:
— Parent purchased home in 1985 for $80,000
— Home is worth $380,000 at time of passing
— Your basis = $380,000
— If you sell for $380,000 → little or no capital gains tax owed

This means selling relatively soon after inheriting often results in minimal tax liability.

This is a general overview — always consult a CPA or estate attorney for your specific situation. We're happy to connect you with local professionals who specialize in estate sales.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 15",
    category: "Education",
    title: "How to Verify a Cash Buyer Is Legitimate",
    post: `Before signing anything with a "We Buy Houses" company in Fresno, here are three things worth doing:

1. Ask for proof of funds — a bank statement dated within 30 days showing they have the cash available. A legitimate buyer provides this within 24 hours. A wholesaler typically cannot.

2. Check their DRE license at dre.ca.gov — licensed agents are legally accountable. Unlicensed operators are not regulated.

3. Read the purchase contract carefully — if it includes "and/or assignee" after the buyer's name, they're a wholesaler who intends to sell your contract to a third party.

About Alder Heritage Homes:
— Proof of funds: available within 24 hours
— License: CA DRE #02219124 (verifiable at dre.ca.gov)
— No "and/or assignee" language — ever

We believe informed sellers make better decisions.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 16",
    category: "Foreclosure",
    title: "Notice of Default: Understanding Your Timeline",
    post: `If you've received a Notice of Default in Fresno County, here's what the timeline looks like in California:

— NOD filed: foreclosure clock starts
— 3-month reinstatement period begins
— Notice of Trustee Sale issued: 21 days before auction
— Auction date

Total time from NOD to auction: approximately 4–5 months. However, the clock starts from the date the NOD was filed — not the date you received it.

Your options depend on your equity position:

If you have equity: a cash sale closes in 7–14 days, pays off your mortgage, and preserves your remaining equity.

If you're underwater: a short sale or other workout may be available. We can help evaluate your situation.

The earlier you act, the more options you have.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 17",
    category: "Local / Community",
    title: "Central Valley Cities We Serve",
    post: `We purchase homes throughout the Central Valley — not just Fresno.

Cities we actively buy in:

— Fresno and Clovis
— Visalia and Tulare
— Bakersfield and Delano
— Hanford and Lemoore (Kings County)
— Madera and Chowchilla
— Merced and Turlock
— Stockton and Modesto

If you're unsure whether we serve your area, reach out and we'll let you know honestly. If we can't help, we'll point you toward someone who can.

We provide written cash offers within 24 hours and can close in 3–21 days depending on your timeline.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 18",
    category: "Social Proof",
    title: "32 Five-Star Reviews — What Our Sellers Say",
    post: `We're proud of the trust Fresno-area homeowners have placed in us.

A few recent reviews:

"Connor exceeded all of our expectations. From the initial consultation to the final result, everything was handled with professionalism and care." — Madison Jones

"Connor was awesome to work with and very detail oriented. He and his team were nothing but transparent throughout the process." — MM A

"I can't recommend Alder Heritage Homes enough. Connor genuinely cares about working with his clients." — Anthony Georgouses

32 five-star reviews on Google. We're a licensed California real estate agent (DRE #02219124) — not a wholesaler, not a middleman. We buy homes directly with our own capital.

If you have questions about selling your home, we're happy to help.

Alder Heritage Homes | CA DRE #02219124`,
  },
  {
    week: "Week 19",
    category: "Education",
    title: "Cash Sale vs. MLS Listing: Understanding the Tradeoffs",
    post: `If you're deciding between a cash sale and listing on the MLS, here's an honest look at the tradeoffs for a typical Fresno home needing $40K in repairs:

MLS listing after renovation:
— Net proceeds: approximately $307,000
— Timeline: 5–8 months
— Risk: market changes, buyer financing contingencies

MLS listing as-is:
— Net proceeds: approximately $268,000
— Timeline: 3–5 months
— Risk: as-is listings fall through frequently

Cash sale to Alder Heritage Homes:
— Net proceeds: approximately $295,000
— Timeline: 3–21 days
— Risk: minimal (no financing contingency)

In many cases, a cash offer nets more than an as-is MLS listing — with significantly less time and uncertainty.

These are estimates — every property is different. We're happy to walk through the specific numbers for your home.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 20",
    category: "Divorce",
    title: "Selling a Home During Divorce in California",
    post: `Going through a divorce in Fresno and need to resolve the family home?

A few things worth knowing about California law:

California is a community property state. Both spouses own 50% of the equity regardless of whose name is on the deed.

A cash sale is often the cleanest resolution:
— Closes in 7–21 days
— No repairs needed — no disagreements about who pays for what
— No showings — no coordinating between parties who may not be communicating
— Both parties receive their share at closing per the divorce agreement
— Clean financial separation

We've worked with divorcing couples throughout Fresno County. We work with both parties' attorneys and remain neutral throughout the process.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 21",
    category: "Trust / Differentiator",
    title: "We'll Match Any Legitimate Offer",
    post: `If you've received a cash offer from another buyer in Fresno, we're happy to review it.

We'll either:
— Match it and close faster
— Improve it if we can justify the number
— Tell you honestly when their offer is fair and you should take it

This is our Price Match Guarantee. We don't win business by being the only offer you see. We win by being the most transparent, most reliable buyer in the Central Valley.

We're a licensed California real estate agent (DRE #02219124). We purchase with our own capital. We close in 3–21 days.

Bring us your best offer. We'll respond within 24 hours.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 22",
    category: "Education",
    title: "Probate Timeline in Fresno County",
    post: `If you're an executor or heir in Fresno County, here's an honest look at the probate timeline:

— File petition → First hearing: 6–8 weeks
— Creditor notification period: 4 months (mandatory, cannot be shortened)
— Probate referee appraisal: 30–60 days
— Property sale: 30–90 days (faster with a cash buyer)
— Final distribution: 2–4 months after sale

Total: typically 12–18 months for a standard estate

The property sale is the one step you can control. A cash buyer closes in 7–21 days vs. 60–90 days for a traditional listing — potentially shaving 1–2 months off the total timeline.

We work with probate attorneys and executors throughout Fresno County. No pressure, no rush — we close on the estate's timeline.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 23",
    category: "Professional Referral",
    title: "A Note for Fresno Estate Sale Companies",
    post: `For estate sale companies operating in Fresno and the Central Valley:

After the personal property sale is complete, the real estate often still needs to be sold. We're a natural next step for your clients.

What we offer:
— Written cash offer within 24 hours of property review
— As-is purchase — no cleanout required after the estate sale
— Proof of funds provided immediately
— Licensed CA real estate agent (DRE #02219124)
— 700+ transactions closed in the Central Valley

We work professionally with estate sale companies and their clients. If you have clients who need to sell the property after an estate sale, we're happy to discuss how we can work together.

Alder Heritage Homes | Licensed CA Real Estate Agent | DRE #02219124`,
  },
  {
    week: "Week 24",
    category: "Trust / Differentiator",
    title: "One Question to Ask Any Cash Buyer",
    post: `Before working with any cash buyer in Fresno, ask this one question:

"Can you show me proof of funds within 24 hours?"

A legitimate buyer says yes and sends it.
A wholesaler makes excuses.

We've been answering yes to that question since day one.

Connor Morris | Alder Heritage Homes
Licensed CA Real Estate Agent — DRE #02219124
5.0 rating · 32 Google reviews

Real capital. Real offers. Real close.

Alder Heritage Homes | CA DRE #02219124`,
  },
];

const policyNote = `GOOGLE BUSINESS PROFILE POST POLICY REMINDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ These posts are policy-compliant as written
❌ DO NOT add phone numbers to the post text (policy violation)
❌ DO NOT add website URLs to the post text (flagged as solicitation)
✅ Instead: use the "Call now" button when posting — it uses your verified GBP number
✅ Instead: use the "Learn more" button with your website URL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

export default function GBPTemplates() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [policyNoteCopied, setPolicyNoteCopied] = useState(false);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const categoryColors: Record<string, string> = {
    "Trust / Differentiator": "bg-orange-100 text-orange-800",
    "Senior Sellers": "bg-purple-100 text-purple-800",
    "Condition": "bg-green-100 text-green-800",
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
    "Price Match": "bg-emerald-100 text-emerald-800",
    "Review Request": "bg-violet-100 text-violet-800",
    "Year-Round CTA": "bg-orange-100 text-orange-800",
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Google Business Profile Post Templates
          </h1>
          <p className="text-gray-600">
            24 weeks of policy-compliant GBP posts. Copy and paste directly into Google Business Profile.
            Post Monday, Wednesday, and Friday for maximum local ranking impact.
          </p>
        </div>

        {/* Policy Warning Banner */}
        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-amber-900 mb-2">
                Important: Why Your Previous Posts Were Flagged
              </h2>
              <p className="text-amber-800 text-sm mb-3">
                Google's content policy explicitly prohibits phone numbers and website URLs in GBP post text.
                All previous templates have been rewritten to remove these. The correct approach is:
              </p>
              <ul className="text-amber-800 text-sm space-y-1">
                <li>✅ <strong>Phone number:</strong> Add a "Call now" button when posting (uses your verified GBP number)</li>
                <li>✅ <strong>Website link:</strong> Add a "Learn more" button with your URL</li>
                <li>❌ <strong>Never:</strong> Put phone numbers or URLs in the post body text</li>
              </ul>
              <div className="mt-3">
                <h3 className="font-semibold text-amber-900 text-sm mb-1">To restore posting on your GBP:</h3>
                <ol className="text-amber-800 text-sm space-y-1 list-decimal list-inside">
                  <li>Go to business.google.com</li>
                  <li>Click "View profile" → "Info" → check for any flagged content</li>
                  <li>Delete any posts that contain phone numbers or URLs in the body</li>
                  <li>Submit an appeal: business.google.com → Support → "Request a review"</li>
                  <li>Explain that you've removed the policy-violating content</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* How to Post Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            How to Post (Step-by-Step)
          </h2>
          <ol className="text-blue-800 text-sm space-y-1 list-decimal list-inside">
            <li>Go to <strong>business.google.com</strong> and sign in</li>
            <li>Click <strong>"Add update"</strong> (pencil icon)</li>
            <li>Select <strong>"Add update"</strong> (not offer or event)</li>
            <li>Paste the post text from below</li>
            <li>Click <strong>"Add a button"</strong> → select <strong>"Call now"</strong> (this adds your phone number correctly)</li>
            <li>Optionally add a photo (improves engagement)</li>
            <li>Click <strong>Publish</strong></li>
          </ol>
          <p className="text-blue-700 text-xs mt-2">
            Post schedule: Monday, Wednesday, Friday — 3 posts per week for maximum ranking impact.
          </p>
        </div>

        {/* Post Templates Grid */}
        <div className="space-y-4">
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
        </div>

        {/* Footer note */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Pro Tips for Maximum Impact</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Add a real photo with every post — posts with photos get 3x more engagement</li>
                <li>• Always add the "Call now" button — this is how your phone number appears compliantly</li>
                <li>• Post at 8–10 AM on weekdays — highest engagement window</li>
                <li>• Rotate through all 24 weeks, then start over — fresh content signals an active business</li>
                <li>• After every closing, ask the seller for a Google review — link them to your review page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
