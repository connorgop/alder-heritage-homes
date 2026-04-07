/* ============================================================
   CALIFORNIA PROBATE HOME SALE — /california-probate-home-sale
   Primary: "california probate home sale" "sell probate house california"
            "probate real estate california" "sell house in probate fresno"
   Secondary: "how to sell a house in probate california"
              "probate home buyer fresno" "sell inherited house california"
              "california probate process real estate"
   ============================================================ */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Phone, CheckCircle2, AlertTriangle, Clock, FileText, Users, DollarSign, Scale, Home, ArrowRight } from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:+15592818016";

export default function CaliforniaProbateHomeSale() {
  return (
    <Layout>
      <PageMeta
        title="Sell a House in Probate in California | Fresno Probate Home Buyer | Alder Heritage Homes"
        description="Complete guide to selling a house in probate in California — small vs. large estates, Form DE-111, IAEA vs. court confirmation, deadlines, and how to sell fast for cash. Licensed CA Agent DRE #02219124. Call (559) 281-8016."
        path="/california-probate-home-sale"
      />
      <SchemaMarkup
        id="probate-guide-schema"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Sell a House in Probate in California — Complete 2026 Guide",
          description: "A comprehensive guide to California probate real estate: small vs. large estates, filing deadlines, IAEA vs. court confirmation, and how to sell a probate property fast for cash.",
          author: { "@type": "Person", name: "Connor Morris", jobTitle: "Licensed CA Real Estate Agent", identifier: "DRE #02219124" },
          publisher: { "@type": "Organization", name: "Alder Heritage Homes", url: "https://www.alderheritagehomes.com" },
          datePublished: "2026-04-07",
          dateModified: "2026-04-07",
        }}
      />

      {/* ── HERO ── */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.22 0.01 60) 0%, oklch(0.28 0.02 60) 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              California Probate Real Estate Guide
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Lora', serif", lineHeight: 1.15 }}>
              How to Sell a House in Probate in California
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "oklch(0.85 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Everything executors, heirs, and administrators need to know — small vs. large estates, filing deadlines, IAEA vs. court confirmation, and how to sell fast for cash without paying commissions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> Call {PHONE}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105" style={{ background: "oklch(1 0 0 / 0.12)", border: "2px solid oklch(1 0 0 / 0.4)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Get a Free Cash Offer <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS BANNER ── */}
      <section style={{ background: "oklch(0.55 0.13 42)" }}>
        <div className="container py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-center">
            {[
              { icon: <DollarSign size={20} />, stat: "$184,500", label: "Small estate threshold in California" },
              { icon: <Clock size={20} />, stat: "30 days", label: "Deadline to file will after death" },
              { icon: <FileText size={20} />, stat: "1 year", label: "Executor must complete probate" },
            ].map(({ icon, stat, label }) => (
              <div key={label} className="flex items-center justify-center gap-3">
                <div className="opacity-80">{icon}</div>
                <div className="text-left">
                  <div className="font-bold text-lg" style={{ fontFamily: "'Lora', serif" }}>{stat}</div>
                  <div className="text-sm opacity-80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Intro */}
            <div>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The most important thing to know about probate — the legal process that results in the transfer of assets after someone dies — is that it is handled by courts on the <strong>state level</strong>. California has its own rules, and knowing what makes them unique will help you avoid mistakes that cost time and money.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Some details will depend on which county you are in, but generally, California's probate process is manageable if you understand the steps. This guide covers everything — from determining whether you need full probate to selling the real property quickly and without commissions.
              </p>
            </div>

            {/* Small vs Large Estates */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                Small vs. Large Estates in California
              </h2>
              <p className="mb-4" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                In California, estates worth more than <strong>$184,500</strong> usually go through a different probate process than estates of lesser value. Under that threshold, it is considered a small estate, and you may be able to settle your loved one's financial affairs using California's simplified process.
              </p>
              <div className="p-4 rounded-lg mb-4" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.88 0.03 60)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Lora', serif" }}>Assets NOT counted toward the $184,500 threshold:</p>
                <ul className="text-sm space-y-1" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {["Real estate owned outside of California", "Assets placed in a living trust", "Joint tenancy property", "Payable-on-death accounts", "Assets with named beneficiaries (life insurance, retirement accounts)"].map(a => (
                    <li key={a} className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.13 42)" }} />{a}</li>
                  ))}
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)", border: "2px solid oklch(0.65 0.10 145)" }}>
                  <div className="font-bold mb-2 flex items-center gap-2" style={{ color: "oklch(0.30 0.08 145)", fontFamily: "'Lora', serif" }}>
                    <CheckCircle2 size={18} /> Small Estate (under $184,500)
                  </div>
                  <ul className="text-sm space-y-1" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <li>• Simplified probate process available</li>
                    <li>• Small estate affidavit option (40-day wait)</li>
                    <li>• Any beneficiary can initiate it</li>
                    <li>• Requires notarized affidavit + death certificate</li>
                    <li>• Can bypass full probate court process</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)", border: "2px solid oklch(0.65 0.10 25)" }}>
                  <div className="font-bold mb-2 flex items-center gap-2" style={{ color: "oklch(0.40 0.12 25)", fontFamily: "'Lora', serif" }}>
                    <AlertTriangle size={18} /> Large Estate (over $184,500)
                  </div>
                  <ul className="text-sm space-y-1" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <li>• Full probate process required</li>
                    <li>• File will within 30 days of death</li>
                    <li>• Executor appointed by court</li>
                    <li>• Typically 9–18 months to complete</li>
                    <li>• Real property requires executor authority to sell</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Deadlines */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                Important Deadlines to Remember
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Clock size={20} />,
                    deadline: "30 Days After Death",
                    title: "File the Will in Probate Court",
                    body: "California law requires the will to be filed in probate court within 30 days of your loved one's death. If the executor fails to file within that time frame, they could potentially lose their position as executor and a new person will be appointed.",
                    urgent: true,
                  },
                  {
                    icon: <FileText size={20} />,
                    deadline: "1 Year After Appointment",
                    title: "Complete the Probate Process",
                    body: "California state law requires the executor to complete the probate process within one year of their appointment (usually months after the date of death). In practice, the process can take longer — especially if there are delays or complications. You can request an extension from the court.",
                    urgent: false,
                  },
                  {
                    icon: <Home size={20} />,
                    deadline: "As Early as Possible",
                    title: "Sell the Real Property",
                    body: "Every month a probate property sits unsold, the estate pays property taxes, insurance, utilities, and maintenance — often $1,500–$3,000/month. Selling early in the probate process (once the executor has Letters) reduces carrying costs and increases what heirs ultimately receive.",
                    urgent: false,
                  },
                ].map(({ icon, deadline, title, body, urgent }) => (
                  <div key={title} className="flex gap-4 p-4 rounded-lg" style={{ background: urgent ? "oklch(0.98 0.02 25)" : "oklch(0.97 0.01 60)", border: `1px solid ${urgent ? "oklch(0.85 0.06 25)" : "oklch(0.88 0.03 60)"}` }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white" style={{ background: urgent ? "oklch(0.55 0.12 25)" : "oklch(0.55 0.13 42)" }}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: urgent ? "oklch(0.45 0.12 25)" : "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{deadline}</div>
                      <div className="font-semibold mb-1" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Where and How to File */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                Where and How to File for Probate in California
              </h2>
              <p className="mb-4" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Probate must be initiated in the county where your loved one resided. Look up the Superior Court in that county and find the Probate Department.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { step: "1", title: "File the Will + Form DE-111", body: "The executor, administrator, or any family member files the will along with California Form DE-111 (Petition for Probate) with the court. Filing fee: approximately $435 (some counties charge slightly more). The court clerk will walk you through the paperwork." },
                  { step: "2", title: "First Probate Hearing Scheduled", body: "Once you've filed, the probate clerk schedules a first hearing — usually within one to two months. You'll receive further instructions from the court and be on your way to being officially appointed executor." },
                  { step: "3", title: "Letters Testamentary Issued", body: "After the hearing, the court issues Letters Testamentary (if there's a will) or Letters of Administration (if there isn't). These letters give the executor legal authority to manage and sell estate assets — including real property." },
                  { step: "4", title: "Sell the Real Property", body: "With Letters in hand, the executor can sell the property. Under IAEA (Independent Administration of Estates Act), the sale can proceed without court confirmation — similar to a standard sale. Without IAEA authority, a court confirmation hearing is required." },
                  { step: "5", title: "Final Distribution", body: "After all debts, taxes, and expenses are paid, the remaining estate assets are distributed to the heirs. The probate is then closed with the court." },
                ].map(({ step, title, body }) => (
                  <div key={step} className="flex gap-4 items-start p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)" }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>{step}</div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg" style={{ background: "oklch(0.96 0.02 85)", border: "1px solid oklch(0.85 0.06 85)" }}>
                <p className="text-sm" style={{ color: "oklch(0.40 0.04 85)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <strong>Pro tip:</strong> Some of the forms you fill out will later be signed by the judge. Check in with a probate attorney before submitting — any errors made at the beginning can cause delays down the road. We can refer you to experienced Fresno-area probate attorneys who offer flat-fee services.
                </p>
              </div>
            </div>

            {/* IAEA vs Court Confirmation */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                IAEA vs. Court Confirmation: Which Applies to Your Sale?
              </h2>
              <p className="mb-4" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                The path to selling a probate property depends on whether the estate is administered under the <strong>Independent Administration of Estates Act (IAEA)</strong>.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)", border: "2px solid oklch(0.65 0.10 145)" }}>
                  <div className="font-bold mb-3 text-lg" style={{ color: "oklch(0.30 0.08 145)", fontFamily: "'Lora', serif" }}>Under IAEA</div>
                  <ul className="text-sm space-y-2" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.10 145)" }} />No court confirmation required</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.10 145)" }} />Sale proceeds like a standard transaction</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.10 145)" }} />Can close in 14–30 days from accepted offer</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.10 145)" }} />No overbid risk from third parties</li>
                    <li className="flex gap-2"><CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.10 145)" }} />Most common path for estates with a will</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)", border: "2px solid oklch(0.75 0.08 42)" }}>
                  <div className="font-bold mb-3 text-lg" style={{ color: "oklch(0.40 0.10 42)", fontFamily: "'Lora', serif" }}>Court Confirmation Required</div>
                  <ul className="text-sm space-y-2" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    <li className="flex gap-2"><AlertTriangle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.60 0.10 42)" }} />Court hearing required after accepted offer</li>
                    <li className="flex gap-2"><AlertTriangle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.60 0.10 42)" }} />Add 30–60 days for the confirmation hearing</li>
                    <li className="flex gap-2"><AlertTriangle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.60 0.10 42)" }} />Overbid procedure: any buyer can appear at hearing</li>
                    <li className="flex gap-2"><AlertTriangle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.60 0.10 42)" }} />Min. overbid: accepted price + 5% + $500</li>
                    <li className="flex gap-2"><AlertTriangle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.60 0.10 42)" }} />We participate in overbid hearings as original buyer</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carrying Cost Problem */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                The Carrying Cost Problem — Why Selling Early Matters
              </h2>
              <p className="mb-4" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Every month a probate property sits unsold, the estate pays property taxes, insurance, utilities, and maintenance. For a typical Fresno-area home, that's <strong>$1,500–$3,000 per month</strong>.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ background: "oklch(0.55 0.13 42)", color: "white" }}>
                      <th className="p-3 text-left" style={{ fontFamily: "'Lora', serif" }}>Months Unsold</th>
                      <th className="p-3 text-right" style={{ fontFamily: "'Lora', serif" }}>Carrying Cost (Low)</th>
                      <th className="p-3 text-right" style={{ fontFamily: "'Lora', serif" }}>Carrying Cost (High)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["3 months", "$4,500", "$9,000"],
                      ["6 months", "$9,000", "$18,000"],
                      ["9 months", "$13,500", "$27,000"],
                      ["12 months", "$18,000", "$36,000"],
                      ["18 months", "$27,000", "$54,000"],
                    ].map(([months, low, high], i) => (
                      <tr key={months} style={{ background: i % 2 === 0 ? "oklch(0.97 0.01 60)" : "white", borderBottom: "1px solid oklch(0.92 0.01 60)" }}>
                        <td className="p-3 font-medium" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{months}</td>
                        <td className="p-3 text-right" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'DM Mono', monospace" }}>{low}</td>
                        <td className="p-3 text-right font-semibold" style={{ color: "oklch(0.40 0.12 25)", fontFamily: "'DM Mono', monospace" }}>{high}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Selling quickly — even at a modest discount from peak retail value — often produces a better net outcome for the estate than waiting for the highest possible price while carrying costs accumulate. We provide a free Broker Opinion of Value so you can see the full financial picture before deciding.
              </p>
            </div>

            {/* AB 2016 */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                AB 2016: The New Surviving Spouse Shortcut (Effective April 1, 2025)
              </h2>
              <div className="p-5 rounded-lg" style={{ background: "oklch(0.96 0.02 145)", border: "1px solid oklch(0.80 0.06 145)" }}>
                <p className="mb-3" style={{ color: "oklch(0.30 0.06 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Assembly Bill 2016 created a simplified procedure for transferring a primary residence to a surviving spouse or domestic partner <strong>without full probate</strong>. Under AB 2016, a surviving spouse can petition to have the family home transferred using a streamlined court process that takes weeks rather than the typical 9–18 months of full probate.
                </p>
                <p className="text-sm" style={{ color: "oklch(0.35 0.06 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  If you're a surviving spouse dealing with a home that was community property, you may be able to avoid full probate entirely. We can connect you with a Fresno probate attorney who can advise on whether AB 2016 applies to your situation.
                </p>
              </div>
            </div>

            {/* Heir Disagreements */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                What If Heirs Disagree About Selling?
              </h2>
              <p className="mb-4" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Heir disagreements are one of the most common complications in probate real estate. If one heir wants to sell and another wants to keep the property, the executor must act in the best interests of the estate as a whole.
              </p>
              <div className="space-y-3">
                {[
                  { icon: <Users size={18} />, title: "Buyout", body: "One heir buys out the other's interest at fair market value. We can provide a free Broker Opinion of Value to establish the buyout price." },
                  { icon: <Scale size={18} />, title: "Partition Action", body: "If heirs cannot agree, a partition action can force the sale through the courts. This is expensive and time-consuming — often $10,000–$30,000 in legal fees — but it is a last resort option." },
                  { icon: <DollarSign size={18} />, title: "Cash Sale to Resolve Quickly", body: "A clean cash offer often helps heirs reach agreement on a price and timeline. We've worked with estates where our offer helped heirs move forward when they were stuck." },
                ].map(({ icon, title, body }) => (
                  <div key={title} className="flex gap-3 p-4 rounded-lg" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.88 0.03 60)" }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white" style={{ background: "oklch(0.55 0.13 42)" }}>{icon}</div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif" }}>{title}</div>
                      <div className="text-sm" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Can the executor sell the house before probate is complete?",
                    a: "In most cases, yes — but only after the court has issued Letters Testamentary or Letters of Administration. Under IAEA, the executor can sell without court confirmation. Without IAEA authority, a court confirmation hearing is required. The property cannot be sold before the executor has legal authority.",
                  },
                  {
                    q: "How long does probate take in California?",
                    a: "Full probate in California typically takes 9–18 months from the executor's appointment. However, the real property can often be sold earlier in the process once the executor has Letters. Under IAEA, a sale can close in 14–30 days from accepted offer. California law requires the executor to complete probate within one year of appointment, but extensions are routinely granted.",
                  },
                  {
                    q: "Does the estate pay real estate commission on a probate sale?",
                    a: "In a traditional probate listing, yes — the estate pays 5–6% in commissions. On a $400,000 home, that's $20,000–$24,000 paid from estate assets before distribution to heirs. Selling directly to Alder Heritage Homes eliminates the commission entirely.",
                  },
                  {
                    q: "What if the probate property needs major repairs?",
                    a: "We buy probate properties as-is, regardless of condition. The estate does not need to make any repairs. We price the property based on its current condition and provide a transparent written offer with our valuation methodology.",
                  },
                  {
                    q: "What is the overbid procedure in a court confirmation sale?",
                    a: "After the estate accepts an offer, the sale is published and a court hearing is set. At the hearing, any member of the public can submit a higher bid. The minimum overbid is the accepted offer price plus 5% plus $500. We are experienced with this procedure and can participate as the original bidder.",
                  },
                  {
                    q: "What counties in California do you buy probate properties in?",
                    a: "We purchase probate properties throughout Fresno County, Tulare County, Kings County, Madera County, and Kern County — including Fresno, Clovis, Visalia, Tulare, Hanford, Madera, Bakersfield, and all surrounding communities.",
                  },
                  {
                    q: "Do I need a probate attorney to sell to you?",
                    a: "We strongly recommend working with a probate attorney throughout the process — the executor has fiduciary duties and legal requirements that an attorney can help navigate. We can provide referrals to experienced Fresno probate attorneys who offer flat-fee probate services. We work alongside the attorney, not instead of them.",
                  },
                  {
                    q: "What is the filing fee for probate in California?",
                    a: "The filing fee for a Petition for Probate (Form DE-111) is approximately $435. Some counties charge slightly more. This is paid when you file the petition at the Superior Court in the county where your loved one resided.",
                  },
                ].map(({ q, a }) => (
                  <details key={q} className="group rounded-lg overflow-hidden" style={{ border: "1px solid oklch(0.88 0.03 60)" }}>
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold" style={{ color: "oklch(0.25 0.02 60)", fontFamily: "'Lora', serif", background: "oklch(0.98 0.01 60)" }}>
                      {q}
                      <span className="ml-4 flex-shrink-0 text-xl font-light transition-transform group-open:rotate-45" style={{ color: "oklch(0.55 0.13 42)" }}>+</span>
                    </summary>
                    <div className="p-4 text-sm leading-relaxed" style={{ color: "oklch(0.40 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", background: "white" }}>
                      {a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Related Resources */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
                More Probate Resources
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "Probate Real Estate Fresno — Full Guide", href: "/probate-real-estate-fresno" },
                  { label: "Sell Inherited Property Fresno", href: "/sell-inherited-property-fresno" },
                  { label: "Probate Inherited Homes", href: "/probate-inherited-homes" },
                  { label: "California Probate Process Guide (Blog)", href: "/blog/california-probate-process-complete-guide-2026" },
                  { label: "Probate Fees & Costs Breakdown (Blog)", href: "/blog/california-probate-fees-costs-breakdown-2026" },
                  { label: "What Is a Probate Home Sale? (Blog)", href: "/blog/what-is-a-probate-home-sale-california" },
                  { label: "Sibling Wants to Keep Inherited House (Blog)", href: "/blog/sibling-wants-to-keep-inherited-house-california" },
                  { label: "Why Choose Alder Heritage Homes", href: "/why-choose-us" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors hover:bg-orange-50" style={{ color: "oklch(0.35 0.08 42)", border: "1px solid oklch(0.90 0.02 60)" }}>
                    <ArrowRight size={14} style={{ color: "oklch(0.55 0.13 42)", flexShrink: 0 }} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-6">

            {/* CTA Card */}
            <div className="rounded-xl p-6 sticky top-24" style={{ background: "oklch(0.22 0.01 60)", color: "white" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3 opacity-70" style={{ fontFamily: "'DM Mono', monospace" }}>Free — No Obligation</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Lora', serif" }}>Get a Cash Offer for the Probate Property</h3>
              <p className="text-sm mb-5 opacity-80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                We work directly with executors and probate attorneys. Cash offer in 24 hours. Close on the court's timeline. No repairs, no commissions.
              </p>
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold mb-3 transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                <Phone size={18} /> {PHONE}
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold transition-all hover:scale-105" style={{ background: "oklch(1 0 0 / 0.10)", border: "1px solid oklch(1 0 0 / 0.30)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
                Submit Address Online <ArrowRight size={16} />
              </Link>
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                {["Licensed CA Agent DRE #02219124", "Free Broker Opinion of Value", "Works with probate attorneys", "IAEA & court confirmation experience", "No repairs, no commissions"].map(b => (
                  <div key={b} className="flex items-center gap-2 text-xs opacity-80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    <CheckCircle2 size={13} style={{ color: "oklch(0.65 0.10 145)", flexShrink: 0 }} /> {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Reference */}
            <div className="rounded-xl p-5" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.88 0.03 60)" }}>
              <h4 className="font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>California Probate Quick Reference</h4>
              <div className="space-y-3 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                {[
                  { label: "Small estate threshold", value: "$184,500" },
                  { label: "Will filing deadline", value: "30 days after death" },
                  { label: "Probate completion deadline", value: "1 year after appointment" },
                  { label: "Filing fee (Form DE-111)", value: "~$435" },
                  { label: "Typical full probate duration", value: "9–18 months" },
                  { label: "IAEA sale timeline", value: "14–30 days" },
                  { label: "Court confirmation add-on", value: "+30–60 days" },
                  { label: "Min. overbid amount", value: "Price + 5% + $500" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-2">
                    <span style={{ color: "oklch(0.45 0.02 60)" }}>{label}</span>
                    <span className="font-semibold text-right" style={{ color: "oklch(0.30 0.02 60)", fontFamily: "'DM Mono', monospace", fontSize: "0.8rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* County Courts */}
            <div className="rounded-xl p-5" style={{ background: "oklch(0.97 0.01 60)", border: "1px solid oklch(0.88 0.03 60)" }}>
              <h4 className="font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>Probate Courts We Work With</h4>
              <div className="space-y-2 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.45 0.02 60)" }}>
                {[
                  { county: "Fresno County", court: "Fresno Superior Court — Probate Dept." },
                  { county: "Tulare County", court: "Tulare Superior Court — Visalia" },
                  { county: "Kings County", court: "Kings Superior Court — Hanford" },
                  { county: "Madera County", court: "Madera Superior Court" },
                  { county: "Kern County", court: "Kern Superior Court — Bakersfield" },
                ].map(({ county, court }) => (
                  <div key={county}>
                    <div className="font-semibold" style={{ color: "oklch(0.35 0.02 60)" }}>{county}</div>
                    <div className="text-xs">{court}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16" style={{ background: "oklch(0.97 0.01 60)", borderTop: "1px solid oklch(0.90 0.02 60)" }}>
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Lora', serif", color: "oklch(0.25 0.02 60)" }}>
            Ready to Sell the Probate Property?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Call us or submit the address online. Cash offer in 24 hours. We work on the court's timeline, not ours. No repairs, no commissions, no wholesalers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-105" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "1.1rem" }}>
              <Phone size={20} /> {PHONE}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105" style={{ background: "white", border: "2px solid oklch(0.55 0.13 42)", color: "oklch(0.45 0.10 42)", fontFamily: "'Nunito Sans', sans-serif", fontSize: "1.1rem" }}>
              Submit Address Online <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-4 text-sm" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            Licensed CA Real Estate Agent · DRE #02219124 · Serving Fresno County, Tulare County, Kings County & Beyond
          </p>
        </div>
      </section>
    </Layout>
  );
}
