/* ============================================================
   BACKLINK STRATEGY — /backlink-strategy
   25+ specific link opportunities for Central Valley real estate
   ============================================================ */
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import { ExternalLink, Mail, Phone, DollarSign, Gift, Star, Newspaper, Mic, Building, Users, Link } from "lucide-react";

const categories = [
  {
    id: "directories",
    icon: Building,
    color: "oklch(0.28 0.05 155)",
    bg: "oklch(0.96 0.03 155)",
    label: "Local Directories & Citations",
    subtitle: "Free DA 40–80 links — submit this week",
    opportunities: [
      {
        name: "Fresno Chamber of Commerce",
        url: "https://www.fresnochamber.com",
        da: "DA 52",
        cost: "Free / $250/yr member",
        how: "Join as a member → get listed in the Business Directory",
        pitch: "Member listing under 'Real Estate' category. Includes website link, phone, description. Also unlocks press release distribution to 2,000+ local businesses.",
        action: "fresnochamber.com → Join → Business Member",
        priority: "critical",
      },
      {
        name: "Visalia Chamber of Commerce",
        url: "https://www.visaliachamber.org",
        da: "DA 44",
        cost: "Free / $200/yr member",
        how: "Join as a member → Business Directory listing",
        pitch: "Tulare County's largest business association. Member listing with backlink. Also gets you into their monthly e-newsletter to 3,500 subscribers.",
        action: "visaliachamber.org → Membership → Join",
        priority: "critical",
      },
      {
        name: "Hanford Chamber of Commerce",
        url: "https://www.hanfordchamber.com",
        da: "DA 38",
        cost: "Free / $150/yr member",
        how: "Join as a member → Business Directory listing",
        pitch: "Kings County's primary business association. Low competition in the real estate investor category. Strong local signal for 'cash home buyer Hanford' rankings.",
        action: "hanfordchamber.com → Join the Chamber",
        priority: "high",
      },
      {
        name: "Better Business Bureau — Fresno",
        url: "https://www.bbb.org/us/ca/fresno",
        da: "DA 91",
        cost: "$400–$600/yr accreditation",
        how: "Apply for BBB Accreditation → get listed with backlink",
        pitch: "DA 91 backlink. BBB badge on your site increases conversion rate by 8–15% (trust signal). Accreditation requires no complaints and a background check. Worth every dollar.",
        action: "bbb.org → Get Accredited → Apply",
        priority: "critical",
      },
      {
        name: "Yelp for Business",
        url: "https://biz.yelp.com",
        da: "DA 94",
        cost: "Free listing",
        how: "Claim/create your free business page → add website URL",
        pitch: "DA 94 — one of the highest-authority free links available. Also shows up in Google search results for branded queries. Claim the page and add your website, hours, and photos.",
        action: "biz.yelp.com → Claim Your Business",
        priority: "critical",
      },
      {
        name: "HomeAdvisor / Angi",
        url: "https://www.angi.com",
        da: "DA 78",
        cost: "Free listing",
        how: "Create a free pro profile → add website URL",
        pitch: "DA 78 backlink. 'Real Estate Investor' category exists. Sellers searching for home buyers sometimes find Angi listings. Free profile takes 10 minutes.",
        action: "pro.angi.com → Sign Up Free",
        priority: "high",
      },
      {
        name: "Zillow Premier Agent Profile",
        url: "https://www.zillow.com/agent-finder",
        da: "DA 91",
        cost: "Free agent profile",
        how: "Create a free agent profile → add website URL and bio",
        pitch: "DA 91 backlink from the #1 real estate site. Connor's DRE license qualifies him for a full agent profile. Include 'cash buyer' and 'sell my house fast Fresno' in the bio.",
        action: "zillow.com/agent-finder → Create Profile",
        priority: "critical",
      },
      {
        name: "Realtor.com Agent Profile",
        url: "https://www.realtor.com",
        da: "DA 91",
        cost: "Free agent profile",
        how: "Claim agent profile via NAR/DRE license → add website URL",
        pitch: "DA 91 backlink. Profile shows up for branded searches. Include 'cash home buyer' in the specialty section. Realtor.com profiles rank in Google for agent name searches.",
        action: "realtor.com → Agent Hub → Claim Profile",
        priority: "critical",
      },
    ],
  },
  {
    id: "news",
    icon: Newspaper,
    color: "oklch(0.55 0.13 42)",
    bg: "oklch(0.97 0.03 42)",
    label: "Local News & Media",
    subtitle: "High-DA editorial links — pitch these stories",
    opportunities: [
      {
        name: "GV Wire (Fresno)",
        url: "https://gvwire.com",
        da: "DA 52",
        cost: "Free (earned media)",
        how: "Email news@gvwire.com with a story pitch",
        pitch: "Pitch: 'Fresno Cash Home Buyer Explains How to Spot a Wholesaler vs. Real Buyer' — a consumer protection angle. GV Wire covers local business and real estate. Connor's dual agent+buyer status is a genuinely unique local story.",
        action: "Email news@gvwire.com — Subject: 'Local Fresno Agent Warns Sellers About Wholesaler Scams'",
        priority: "high",
      },
      {
        name: "Visalia Times-Delta",
        url: "https://www.visaliatimesdelta.com",
        da: "DA 68",
        cost: "Free (press release) or paid ad",
        how: "Submit press release via visaliatimesdelta.com/sharepressrelease or email editorial@visaliatimesdelta.com",
        pitch: "Press release: 'Alder Heritage Homes Expands Cash Buying to Tulare County — Offers Free Broker Opinion of Value to Visalia Sellers.' Local business expansion stories get published regularly.",
        action: "visaliatimesdelta.com → Share Your Press Release",
        priority: "high",
      },
      {
        name: "The Bakersfield Californian",
        url: "https://www.bakersfield.com",
        da: "DA 72",
        cost: "Free (letter to editor) or paid ad",
        how: "Submit letter to editor via bakersfield.com/opinion/letters-to-editor",
        pitch: "Letter to editor: 'What Kern County Homeowners Should Know Before Selling to a Cash Buyer' — educational, not promotional. Establishes Connor as a local expert. Include website in bio.",
        action: "bakersfield.com → Opinion → Letters to the Editor",
        priority: "medium",
      },
      {
        name: "ABC30 KFSN (Fresno)",
        url: "https://abc30.com",
        da: "DA 82",
        cost: "Free (news tip)",
        how: "Submit news tip via abc30.com/submit-news",
        pitch: "Pitch a consumer protection segment: 'How to Tell if a Cash Home Buyer is Real or a Wholesaler' — this is a genuine public interest story. TV news loves real estate consumer protection angles, especially in a down market.",
        action: "abc30.com → Submit News → Consumer protection angle",
        priority: "high",
      },
      {
        name: "KSEE24 / Your Central Valley",
        url: "https://www.yourcentralvalley.com",
        da: "DA 64",
        cost: "Free (news tip)",
        how: "Email newsdesk@ksee.com with story pitch",
        pitch: "Same consumer protection angle as ABC30 — pitch to both. KSEE24 covers Fresno, Visalia, Bakersfield. A segment on 'What to Know Before Selling Your Home for Cash in the Central Valley' would feature alderheritagehomes.com prominently.",
        action: "Email newsdesk@ksee.com — Subject: 'Expert Available: Cash Home Buyer Scams in the Central Valley'",
        priority: "high",
      },
      {
        name: "The Business Journal Fresno",
        url: "https://thebusinessjournal.com",
        da: "DA 48",
        cost: "Free (editorial) or paid ($500+ ad)",
        how: "Pitch a business feature story to the editorial team",
        pitch: "Pitch: 'Fresno Real Estate Investor Closes $975K Probate Deal in Solvang — How Central Valley Buyers Are Going Statewide.' The Solvang deal is a legitimate business story. The Business Journal covers Central Valley business growth.",
        action: "thebusinessjournal.com → Contact → Editorial pitch",
        priority: "medium",
      },
    ],
  },
  {
    id: "podcasts",
    icon: Mic,
    color: "oklch(0.45 0.12 300)",
    bg: "oklch(0.97 0.02 300)",
    label: "Podcasts & YouTube Channels",
    subtitle: "Guest interviews — each gets you a show notes backlink",
    opportunities: [
      {
        name: "Central Valley Talk",
        url: "https://centralvalleytalk.com/beaguest.html",
        da: "DA 28",
        cost: "Free (guest appearance)",
        how: "Fill out the Be a Guest form at centralvalleytalk.com/beaguest.html or email booking@centralvalleytalk.com",
        pitch: "Topic: 'How to Sell Your Central Valley Home Fast — Cash Offer vs. Agent Listing Explained by a Licensed Agent Who Does Both.' Show notes always include a guest website link.",
        action: "centralvalleytalk.com/beaguest.html → Submit guest form",
        priority: "high",
      },
      {
        name: "The Norris Group Real Estate Radio",
        url: "https://thenorrisgroup.com/radio-show",
        da: "DA 45",
        cost: "Free (guest appearance)",
        how: "Contact Aaron Norris at (951) 780-5856 or via thenorrisgroup.com/contact",
        pitch: "Topic: 'Buying Distressed Properties in California's Central Valley — Probate, Squatters, and Sight-Unseen Deals.' The Solvang probate story and Fresno estate cluster are compelling content for a real estate investor audience.",
        action: "thenorrisgroup.com → Contact → Pitch guest appearance",
        priority: "high",
      },
      {
        name: "Real Estate with Ezio (Podcast)",
        url: "https://podcasts.apple.com/us/podcast/real-estate-with-ezio/id1449803474",
        da: "DA 40 (Apple Podcasts)",
        cost: "Free (guest appearance)",
        how: "Email Ezio Sanchez at Ezio@EGAHomes.com",
        pitch: "Topic: 'The Dual Agent + Cash Buyer Model — Why It's Better for Sellers.' Connor's unique positioning (licensed agent who also buys direct) is a differentiating story for a real estate investor podcast audience.",
        action: "Email Ezio@EGAHomes.com — Subject: 'Guest Pitch: Licensed Agent + Cash Buyer in the Central Valley'",
        priority: "medium",
      },
      {
        name: "BiggerPockets Podcast",
        url: "https://www.biggerpockets.com/podcast",
        da: "DA 74",
        cost: "Free (guest appearance)",
        how: "Submit guest pitch via biggerpockets.com/podcast — they accept pitches from active investors",
        pitch: "Topic: 'How I Bought 3 Sight-Unseen Properties from One Seller in 48 Hours (With Squatters).' The Fresno estate cluster story is exactly the kind of deal story BiggerPockets features. This is a DA 74 backlink from the #1 real estate investor community.",
        action: "biggerpockets.com/podcast → Guest Pitch form",
        priority: "high",
      },
    ],
  },
  {
    id: "haro",
    icon: Star,
    color: "oklch(0.60 0.15 55)",
    bg: "oklch(0.97 0.04 55)",
    label: "HARO / Journalist Queries",
    subtitle: "Respond to journalist queries — DA 60–90+ links from national outlets",
    opportunities: [
      {
        name: "HARO — Housing Market Trends",
        url: "https://www.helpareporter.com",
        da: "DA 60–90+ (varies by outlet)",
        cost: "Free ($19/mo for Source premium)",
        how: "Sign up at helpareporter.com as a Source → respond to real estate queries 3x/day",
        pitch: "Angle: 'As a licensed CA agent and cash buyer in the Central Valley, I can provide data on cash offer percentages, days-on-market for distressed properties, and how sellers in Fresno/Bakersfield are navigating the 2026 market.' Target: WSJ, Forbes, Bankrate, NerdWallet.",
        action: "helpareporter.com → Sign Up as Source → Set alerts for: real estate, housing market, home selling, cash buyer",
        priority: "critical",
      },
      {
        name: "HARO — Probate / Inherited Property",
        url: "https://www.helpareporter.com",
        da: "DA 60–90+",
        cost: "Free",
        how: "Respond to HARO queries about probate, inherited homes, estate sales",
        pitch: "Angle: 'I've closed probate deals in California ranging from $200K Fresno homes to a $975K Solvang estate. I can explain the IAEA process, how to sell a probate home before the court confirmation, and what executors should know about cash buyers vs. traditional listings.'",
        action: "Set HARO keyword alert: 'probate' 'inherited home' 'estate sale' 'executor'",
        priority: "high",
      },
      {
        name: "HARO — Wholesaler Scams / Consumer Protection",
        url: "https://www.helpareporter.com",
        da: "DA 60–90+",
        cost: "Free",
        how: "Respond to HARO queries about real estate scams, consumer protection, cash buyers",
        pitch: "Angle: 'As a licensed CA agent who is also a cash buyer, I can explain exactly how to tell a real cash buyer from a wholesaler — the contract language to look for, the proof of funds to request, and the red flags that signal you're being taken advantage of.' Target: AARP, Consumer Reports, local news.",
        action: "Set HARO keyword alert: 'cash home buyer' 'real estate scam' 'wholesaler' 'sell house fast'",
        priority: "high",
      },
      {
        name: "Quoted.com (HARO Alternative)",
        url: "https://www.quoted.com",
        da: "DA 40+",
        cost: "Free",
        how: "Sign up at quoted.com as an expert source → respond to real estate queries",
        pitch: "Same angles as HARO. Quoted.com is a newer HARO alternative with less competition — response rate to queries is higher. Good for building initial media mentions.",
        action: "quoted.com → Sign Up as Expert → Category: Real Estate",
        priority: "medium",
      },
    ],
  },
  {
    id: "partnerships",
    icon: Users,
    color: "oklch(0.40 0.08 160)",
    bg: "oklch(0.96 0.03 160)",
    label: "Local Partnerships & Sponsorships",
    subtitle: "Community links — builds trust and local authority simultaneously",
    opportunities: [
      {
        name: "Fresno Housing Authority",
        url: "https://www.fresnoha.org",
        da: "DA 44",
        cost: "Free (vendor/partner listing)",
        how: "Contact Fresno Housing Authority about being listed as a housing resource for sellers",
        pitch: "Position as a resource for homeowners who need to sell quickly due to housing instability. The FHA refers sellers to resources — a listing on their site as a 'cash buyer resource' is a DA 44 government-adjacent link.",
        action: "fresnoha.org → Contact → Request vendor/resource listing",
        priority: "medium",
      },
      {
        name: "Fresno County Bar Association",
        url: "https://www.fresnocountybar.org",
        da: "DA 42",
        cost: "Free (referral partner)",
        how: "Contact the Probate/Estate section about being listed as a real estate resource for probate attorneys",
        pitch: "Probate attorneys regularly need to refer clients to cash buyers who can close quickly. A listing in the FCBA's vendor directory as a 'probate real estate specialist' gets you a DA 42 link and a steady referral stream.",
        action: "fresnocountybar.org → Contact → Probate section referral partner",
        priority: "high",
      },
      {
        name: "Fresno State Real Estate Club",
        url: "https://www.fresnostate.edu",
        da: "DA 72",
        cost: "Free (guest speaker)",
        how: "Contact the Fresno State Craig School of Business about guest speaking to the Real Estate Club",
        pitch: "Offer to speak on 'Cash Buying and Investment Strategies in the Central Valley.' Guest speakers typically get a bio page with website link on the department site — DA 72 from a .edu domain, which Google weights heavily.",
        action: "fresnostate.edu → Craig School of Business → Real Estate Club → Contact",
        priority: "high",
      },
      {
        name: "Habitat for Humanity Fresno",
        url: "https://www.habitatfresno.org",
        da: "DA 38",
        cost: "Free (donation / partnership)",
        how: "Contact about donating materials from renovations or sponsoring a build",
        pitch: "A $500–$1,000 donation or material donation from a renovation project earns a sponsor listing on their website. DA 38 nonprofit link with strong community trust signal. Also generates local press.",
        action: "habitatfresno.org → Donate → Corporate Sponsor",
        priority: "medium",
      },
      {
        name: "Kern County REIA (Real Estate Investors Association)",
        url: "https://www.kerncountyreia.com",
        da: "DA 22",
        cost: "Free / $100/yr member",
        how: "Join as a member → get listed in the member directory with website link",
        pitch: "Real estate investor association membership. Member directory backlink. Also a source of deal referrals from other investors who can't close on a property. Low DA but high relevance — Google values topically relevant links.",
        action: "kerncountyreia.com → Join → Member Directory",
        priority: "medium",
      },
      {
        name: "Central Valley Community Foundation",
        url: "https://www.cvcf.org",
        da: "DA 48",
        cost: "$500+ sponsorship",
        how: "Sponsor a community event or fund → get listed as a sponsor with website link",
        pitch: "CVCF manages $200M+ in charitable assets and runs major community events. A $500 event sponsorship earns a sponsor listing on their site — DA 48 with strong local trust signals. Mention in their newsletter reaches 10,000+ Central Valley leaders.",
        action: "cvcf.org → Donate → Corporate Giving",
        priority: "medium",
      },
    ],
  },
];

const priorityColors: Record<string, { bg: string; text: string; label: string }> = {
  critical: { bg: "oklch(0.95 0.08 25)", text: "oklch(0.45 0.15 25)", label: "DO THIS WEEK" },
  high: { bg: "oklch(0.95 0.08 55)", text: "oklch(0.45 0.12 55)", label: "DO THIS MONTH" },
  medium: { bg: "oklch(0.95 0.04 155)", text: "oklch(0.35 0.08 155)", label: "MONTH 2–3" },
};

const outreachTemplates = [
  {
    title: "Chamber of Commerce Membership Pitch",
    subject: "Membership Inquiry — Alder Heritage Homes (Cash Home Buyer / Licensed Agent)",
    body: `Hi [Name],

My name is Connor Morris. I'm a licensed California real estate agent (DRE #02219124) and the owner of Alder Heritage Homes, a cash home buying company serving [City] and the surrounding Central Valley.

I'd like to join the [Chamber Name] as a member and be listed in your business directory under Real Estate. We've completed 47+ purchases in the Central Valley and are actively buying homes in [City].

Could you send me information on membership options and how to get listed?

Thank you,
Connor Morris
Alder Heritage Homes
(559) 281-8016
www.alderheritagehomes.com`,
  },
  {
    title: "Local News Story Pitch",
    subject: "Story Pitch: How to Tell a Real Cash Buyer from a Wholesaler in [City]",
    body: `Hi [Reporter Name],

I'm Connor Morris, a licensed California real estate agent (DRE #02219124) and direct cash home buyer serving Fresno and the Central Valley.

I've noticed a surge in homeowners being approached by wholesalers posing as cash buyers — and I think there's a strong consumer protection story here for your audience.

I can offer:
• Specific red flags in contracts that signal a wholesaler vs. real buyer
• The exact questions sellers should ask before signing anything
• Data on how much sellers lose when they unknowingly sell to a wholesaler

I'm available for a phone interview, on-camera segment, or written Q&A. Would this be a fit for your coverage?

Connor Morris
(559) 281-8016
www.alderheritagehomes.com`,
  },
  {
    title: "Podcast Guest Pitch",
    subject: "Guest Pitch: Licensed Agent + Cash Buyer — The Only One in Fresno",
    body: `Hi [Host Name],

I'm Connor Morris, a licensed California real estate agent (DRE #02219124) and direct cash home buyer based in Fresno. I recently closed a $975K probate deal in Solvang — sight unseen, with a squatter in the backhouse, pest damage, and a family dealing with legal bills and estate disputes. We closed in 11 days.

I think your audience would find value in a conversation about:
• How the dual agent + cash buyer model works (and why it's better for sellers)
• Buying distressed properties sight unseen — how to underwrite the risk
• The Central Valley real estate market in 2026

I'm a straightforward guest — no fluff, just real deal experience. Would you be open to a 30-minute conversation?

Connor Morris
(559) 281-8016
www.alderheritagehomes.com`,
  },
];

export default function BacklinkStrategy() {
  const totalOpportunities = categories.reduce((sum, c) => sum + c.opportunities.length, 0);
  const freeCount = categories.reduce((sum, c) => sum + c.opportunities.filter(o => o.cost.toLowerCase().includes("free")).length, 0);

  return (
    <Layout>
      <PageMeta
        title="Backlink Strategy — 25+ Link Opportunities for Alder Heritage Homes"
        description="25+ specific backlink opportunities for Alder Heritage Homes: local directories, Central Valley news outlets, podcasts, HARO angles, and community partnerships."
        path="/backlink-strategy"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, oklch(0.55 0.13 42) 0%, transparent 60%)" }} />
        <div className="container relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-5" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <Link size={12} /> Backlink Strategy
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily: "'Lora', serif", color: "white" }}>
            {totalOpportunities}+ Specific Backlink<br />
            <span style={{ color: "oklch(0.75 0.12 55)" }}>Opportunities for Alder</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl" style={{ color: "oklch(0.80 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Real URLs, real contact info, real pitch angles. Organized by priority — start with the Critical ones this week. Each link builds domain authority and moves you closer to page 1 in Fresno.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { label: "Total Opportunities", value: `${totalOpportunities}+` },
              { label: "Free Links", value: `${freeCount}+` },
              { label: "Avg DA Range", value: "28–94" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                <div className="text-2xl font-black" style={{ fontFamily: "'Lora', serif", color: "oklch(0.75 0.12 55)" }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "oklch(0.65 0.02 60)", fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Legend */}
      <section className="py-5" style={{ background: "oklch(0.97 0.01 85)", borderBottom: "1px solid oklch(0.92 0.01 85)" }}>
        <div className="container max-w-5xl flex flex-wrap items-center gap-6">
          <span className="text-sm font-bold" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.45 0.02 60)" }}>PRIORITY:</span>
          {Object.entries(priorityColors).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: val.bg, color: val.text, fontFamily: "'DM Mono', monospace" }}>{val.label}</span>
              <span className="text-xs" style={{ color: "oklch(0.55 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                {key === "critical" ? "Highest ROI — do immediately" : key === "high" ? "Complete within 30 days" : "Schedule for months 2–3"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12" style={{ background: "white" }}>
        <div className="container max-w-5xl space-y-12">
          {categories.map((cat) => (
            <div key={cat.id}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-3" style={{ borderBottom: `3px solid ${cat.color}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: cat.color }}>
                  <cat.icon size={20} color="white" />
                </div>
                <div>
                  <div className="text-xl font-black" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{cat.label}</div>
                  <div className="text-sm" style={{ color: "oklch(0.55 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>{cat.subtitle}</div>
                </div>
              </div>

              {/* Opportunity cards */}
              <div className="space-y-4">
                {cat.opportunities.map((opp, i) => (
                  <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid oklch(0.92 0.01 85)", boxShadow: "0 1px 8px oklch(0.22 0.01 60 / 0.06)" }}>
                    <div className="px-5 py-4 flex flex-wrap items-start gap-4" style={{ background: cat.bg }}>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-black text-base" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{opp.name}</span>
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: priorityColors[opp.priority].bg, color: priorityColors[opp.priority].text, fontFamily: "'DM Mono', monospace" }}>
                            {priorityColors[opp.priority].label}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: opp.cost.toLowerCase().includes("free") ? "oklch(0.93 0.08 155)" : "oklch(0.93 0.05 55)", color: opp.cost.toLowerCase().includes("free") ? "oklch(0.35 0.10 155)" : "oklch(0.40 0.10 55)", fontFamily: "'DM Mono', monospace" }}>
                            {opp.cost.toLowerCase().includes("free") ? "FREE" : opp.cost}
                          </span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: "oklch(0.22 0.01 60 / 0.08)", color: "oklch(0.45 0.02 60)" }}>{opp.da}</span>
                        </div>
                        <a href={opp.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-1" style={{ color: cat.color, fontFamily: "'DM Mono', monospace" }}>
                          {opp.url} <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                    <div className="px-5 py-4 space-y-3" style={{ background: "white" }}>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.55 0.02 60)" }}>Pitch Angle</div>
                        <div className="text-sm" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif", lineHeight: 1.6 }}>{opp.pitch}</div>
                      </div>
                      <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: "oklch(0.97 0.03 55)", border: "1px solid oklch(0.90 0.05 55)" }}>
                        <span className="text-sm font-bold flex-shrink-0" style={{ color: "oklch(0.45 0.12 55)", fontFamily: "'DM Mono', monospace" }}>ACTION:</span>
                        <span className="text-sm" style={{ color: "oklch(0.35 0.05 55)", fontFamily: "'Nunito Sans', sans-serif" }}>{opp.action}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outreach Templates */}
      <section className="py-12" style={{ background: "oklch(0.97 0.01 85)" }}>
        <div className="container max-w-5xl">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>COPY-PASTE READY</div>
            <h2 className="text-3xl font-black" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>Outreach Email Templates</h2>
            <p className="mt-2 text-base" style={{ color: "oklch(0.45 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>Personalize the bracketed fields and send. These are written to get responses — not to sound like marketing.</p>
          </div>
          <div className="space-y-6">
            {outreachTemplates.map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.02 85)", boxShadow: "0 2px 12px oklch(0.22 0.01 60 / 0.07)" }}>
                <div className="px-6 py-4" style={{ background: "oklch(0.22 0.01 60)" }}>
                  <div className="flex items-center gap-2">
                    <Mail size={16} color="oklch(0.75 0.12 55)" />
                    <span className="font-black text-base" style={{ fontFamily: "'Lora', serif", color: "white" }}>{t.title}</span>
                  </div>
                  <div className="mt-1 text-sm" style={{ color: "oklch(0.65 0.02 60)", fontFamily: "'DM Mono', monospace" }}>Subject: {t.subject}</div>
                </div>
                <div className="px-6 py-5" style={{ background: "white" }}>
                  <pre className="text-sm whitespace-pre-wrap" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.35 0.02 60)", lineHeight: 1.7 }}>{t.body}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-Day Action Plan */}
      <section className="py-12" style={{ background: "white" }}>
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-black mb-6" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>30-Day Backlink Action Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                week: "Week 1",
                color: "oklch(0.45 0.15 25)",
                bg: "oklch(0.97 0.04 25)",
                tasks: [
                  "Claim Yelp business page (DA 94, free, 10 min)",
                  "Create Zillow agent profile (DA 91, free, 20 min)",
                  "Create Realtor.com agent profile (DA 91, free, 20 min)",
                  "Apply for BBB Accreditation (DA 91, $400/yr)",
                  "Sign up for HARO as a Source (free)",
                ],
              },
              {
                week: "Week 2",
                color: "oklch(0.55 0.13 42)",
                bg: "oklch(0.97 0.03 42)",
                tasks: [
                  "Join Fresno Chamber of Commerce (DA 52)",
                  "Join Visalia Chamber of Commerce (DA 44)",
                  "Email GV Wire with consumer protection pitch",
                  "Email ABC30 with wholesaler scam story pitch",
                  "Submit guest form to Central Valley Talk podcast",
                ],
              },
              {
                week: "Week 3–4",
                color: "oklch(0.40 0.08 160)",
                bg: "oklch(0.96 0.03 160)",
                tasks: [
                  "Contact Fresno County Bar — probate referral partner",
                  "Contact Fresno State Real Estate Club — guest speaker",
                  "Pitch BiggerPockets podcast (sight-unseen deal story)",
                  "Submit press release to Visalia Times-Delta",
                  "Respond to 5 HARO queries in real estate category",
                ],
              },
            ].map((w) => (
              <div key={w.week} className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.92 0.01 85)" }}>
                <div className="px-5 py-4" style={{ background: w.color }}>
                  <div className="text-lg font-black text-white" style={{ fontFamily: "'Lora', serif" }}>{w.week}</div>
                  <div className="text-xs text-white opacity-75 mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>5 TASKS</div>
                </div>
                <div className="px-5 py-4" style={{ background: w.bg }}>
                  <ul className="space-y-2">
                    {w.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.35 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                        <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{ background: w.color }}>{i + 1}</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-black mb-4 text-white" style={{ fontFamily: "'Lora', serif" }}>Need Help Executing This?</h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.75 0.02 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Hand this page to a VA or ask Manus to execute the outreach tasks. Each completed link builds domain authority that compounds over time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/seo-roadmap" className="px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Nunito Sans', sans-serif" }}>
              View 90-Day SEO Roadmap →
            </a>
            <a href="/competitor-gap-analysis" className="px-6 py-3 rounded-lg font-bold text-sm transition-all" style={{ background: "oklch(1 0 0 / 0.08)", color: "white", border: "1px solid oklch(1 0 0 / 0.2)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Competitor Gap Analysis →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
