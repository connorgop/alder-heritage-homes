import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import PageMeta from "@/components/PageMeta";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp";

export const blogPosts = [
  {
    slug: "how-to-stop-foreclosure-fresno",
    title: "How to Stop Foreclosure in Fresno, CA: Your Options Explained",
    excerpt: "Facing foreclosure in Fresno? You have more options than you think — even if the auction date is weeks away. Here's exactly what you can do.",
    category: "Foreclosure",
    date: "March 28, 2025",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp",
  },
  {
    slug: "sell-house-stay-rent-back-california",
    title: "Can I Sell My House and Still Live in It? Yes — Here's How",
    excerpt: "It's called a Rent-Back or Holdback Agreement. You sell your home for cash, then rent it back from the buyer while you plan your next move. Here's everything you need to know.",
    category: "Rent-Back",
    date: "March 15, 2025",
    readTime: "6 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "sell-inherited-house-fresno-probate",
    title: "How to Sell an Inherited House in Fresno: A Complete Guide",
    excerpt: "Inherited a home after a loved one passed? This guide walks you through the probate process in California, your options for selling, and how to avoid common mistakes.",
    category: "Probate",
    date: "March 5, 2025",
    readTime: "9 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  },
  {
    slug: "behind-on-mortgage-options-california",
    title: "Behind on Your Mortgage in California? Here Are Your 5 Best Options",
    excerpt: "Missing mortgage payments is terrifying — but it doesn't have to end in foreclosure. Here are five real options for California homeowners who are behind on payments.",
    category: "Mortgage Help",
    date: "February 20, 2025",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "second-mortgage-heloc-cant-pay",
    title: "Can't Pay Your Second Mortgage or HELOC? Here's What to Do",
    excerpt: "A second mortgage or HELOC that's become unaffordable is a serious problem — but you have options. We explain your choices, including selling your home to pay off multiple liens.",
    category: "Mortgage Help",
    date: "February 10, 2025",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "how-fast-can-i-sell-my-house-fresno",
    title: "How Fast Can I Sell My House in Fresno? (Honest Answer)",
    excerpt: "Traditional sales take 45–90 days. Cash sales can Close in 5–7 days or on your timeline. Here's an honest breakdown of the timeline for each option and what affects how fast you can sell.",
    category: "Fast Sale",
    date: "January 28, 2025",
    readTime: "5 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "probate-process-california-real-estate",
    title: "Selling a Home Through Probate in California: Step-by-Step",
    excerpt: "California probate can take 9–18 months, but selling the home doesn't have to be complicated. Here's a step-by-step guide to the probate real estate process in California.",
    category: "Probate",
    date: "January 15, 2025",
    readTime: "10 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  },
  {
    slug: "probate-process-fresno-sell-house-guide",
    title: "The Probate Process in Fresno: A Step-by-Step Guide for Families Who Need to Sell",
    excerpt: "Most families wait until probate is complete before thinking about selling. We work with you before you're even appointed — with attorney referrals, a secured property, and a plan already in place. Here's how it works.",
    category: "Probate",
    date: "April 2, 2026",
    readTime: "11 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  },
  {
    slug: "sell-hoarder-house-fresno-no-cleanout",
    title: "How to Sell a Hoarder House in Fresno Without Cleaning It Out",
    excerpt: "You don't have to spend weeks cleaning, hauling, or hiring junk removal before you sell. Here's how Fresno homeowners with cluttered or hoarded properties can sell fast — as-is, no cleanout required.",
    category: "Selling Tips",
    date: "April 2, 2026",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "dont-get-wholesaled-fresno-cash-buyer-warning",
    title: "Don't Get Wholesaled: How to Tell If the 'Cash Buyer' in Fresno Is Actually the Buyer",
    excerpt: "Most 'we buy houses' companies in Fresno have no capital. They lock you into a contract, then try to sell it to a real investor. Here are the exact red flags — and what to look for instead.",
    category: "Consumer Warning",
    date: "April 2, 2026",
    readTime: "9 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "dont-hire-friend-family-realtor-fresno",
    title: "Why You Shouldn't Hire Your Friend or Family Member as Your Realtor",
    excerpt: "You want them to make money. You don't want Christmas to be awkward. Those are exactly the wrong reasons to make the most important financial decision of your life. Here's the honest truth.",
    category: "Selling Tips",
    date: "April 2, 2026",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "1031-exchange-sell-rental-portfolio-fresno",
    title: "How to 1031 Exchange Out of Your Fresno Rental Portfolio (And Why Now Might Be the Time)",
    excerpt: "Tired landlords in Fresno are quietly selling their single-family rentals and 1031 exchanging into net-lease commercial properties with zero maintenance. Here's how the math works and what the timeline looks like.",
    category: "Landlord",
    date: "April 2, 2026",
    readTime: "10 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "vacant-home-security-fresno-central-valley",
    title: "Vacant Home in Fresno? Secure It Before It Gets Broken Into (This Happened to Us on Roosevelt Ave)",
    excerpt: "Vacant homes in Fresno get broken into. Squatters drill through subfloor crawl spaces. We've seen it firsthand on Roosevelt Ave and properties throughout the Valley. Here's exactly how to secure every access point.",
    category: "Property Security",
    date: "April 2, 2026",
    readTime: "6 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "sell-house-bakersfield-cash-buyer-guide",
    title: "Selling Your House in Bakersfield for Cash: What You Need to Know in 2025",
    excerpt: "The Bakersfield market has its own dynamics — oil industry volatility, agricultural cycles, and a different buyer pool than Fresno. Here's an honest guide to selling your Bakersfield home for cash.",
    category: "Bakersfield",
    date: "April 2, 2026",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "arm-adjustable-rate-mortgage-options-california",
    title: "Your ARM Is Adjusting: Here Are Your Options as a California Homeowner",
    excerpt: "Adjustable-rate mortgages that seemed manageable at 3% are now resetting at 7–8%. If your payment is about to jump by $800–$1,500 a month, here's exactly what you can do before the adjustment hits.",
    category: "Mortgage Help",
    date: "April 2, 2026",
    readTime: "9 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "sell-house-merced-modesto-stockton-cash",
    title: "Selling Your Home in Merced, Modesto, or Stockton for Cash: A Practical Guide",
    excerpt: "The Northern Central Valley has different market conditions than Fresno — but the same cash buyer options apply. Here's what homeowners in Merced, Modesto, and Stockton need to know.",
    category: "Northern Valley",
    date: "April 2, 2026",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "probate-home-sale-merced-madera-tulare",
    title: "Selling a Probate Home in Merced, Madera, or Tulare County: What Families Need to Know",
    excerpt: "Probate in smaller Central Valley counties moves differently than in Fresno County. Here's what families dealing with inherited properties in Merced, Madera, and Tulare counties need to know before they sell.",
    category: "Probate",
    date: "April 2, 2026",
    readTime: "9 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  },
  {
    slug: "sell-hoarder-house-fresno",
    title: "Selling a Hoarder House in Fresno: What No One Tells You",
    excerpt: "You don't have to spend weeks cleaning, hauling, or hiring junk removal. Fresno homeowners with cluttered or hoarded properties can sell fast — as-is, no cleanout, no judgment.",
    category: "Property Condition",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "sell-house-mold-fresno",
    title: "Selling a House With Mold in Fresno: Your Options Explained",
    excerpt: "Mold disclosure requirements in California are strict — but you don't have to remediate before selling. Here's what Fresno homeowners need to know about selling a house with mold.",
    category: "Property Condition",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "sell-house-squatter-fresno",
    title: "Squatter in Your Fresno Home? Here's How to Sell It Anyway",
    excerpt: "Unauthorized occupants are one of the most stressful situations a homeowner can face. We've dealt with it firsthand on Roosevelt Ave. Here's what your options are — and how to sell without a lengthy eviction.",
    category: "Property Condition",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "sell-fire-damaged-house-fresno",
    title: "Selling a Fire-Damaged House in Fresno: Cash vs. Repair vs. Insurance",
    excerpt: "Fire damage doesn't have to mean a long, expensive rebuild before you can sell. Here's an honest breakdown of your three options — and which one makes sense depending on your situation.",
    category: "Property Condition",
    date: "April 3, 2026",
    readTime: "9 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "sell-house-bad-tenants-fresno",
    title: "Bad Tenants Won't Leave? How to Sell Your Fresno Rental Property Anyway",
    excerpt: "Problem tenants don't have to stop you from selling. We've purchased homes with tenants still inside — no eviction required, no inspection, quick close. Here's how it works.",
    category: "Landlord",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "sell-house-foundation-problems-fresno",
    title: "Selling a House With Foundation Problems in Fresno: What Buyers Actually Pay",
    excerpt: "Foundation issues kill traditional sales. Buyers walk, lenders won't finance, and repair bids can hit $30,000–$80,000. Here's what your options are when the foundation is the problem.",
    category: "Property Condition",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "nas-lemoore-pcs-sell-house-fast",
    title: "NAS Lemoore PCS Orders: How to Sell Your House Fast When the Military Moves You",
    excerpt: "When PCS orders come in, you have weeks — not months — to figure out your housing situation. Here's how military families at NAS Lemoore and Kings County can sell fast without losing money.",
    category: "Military",
    date: "April 3, 2026",
    readTime: "6 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "illinois-ave-fresno-flip-story",
    title: "The Illinois Ave Story: We Bought a House With 5 Break-Ins, Bed Bugs, Cockroaches, and Rats",
    excerpt: "This is the story of a property in Fresno that nobody else would touch. Five break-ins, extensive vandalism, bed bugs, cockroaches, and rats. We bought it anyway. Here's why — and what happened next.",
    category: "Real Deals",
    date: "April 3, 2026",
    readTime: "5 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  // ── BOOMER / SENIOR SELLER CLUSTER ──────────────────────────────────────
  {
    slug: "sell-home-move-retirement-community-fresno",
    title: "Selling Your Home to Move to a Retirement Community in Fresno: A Complete Guide",
    excerpt: "Ready to move to a 55+ or senior living community? Here's how to sell your Fresno home fast, avoid capital gains surprises, and time the move so you're never stuck carrying two places at once.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
  },
  {
    slug: "sell-parents-house-assisted-living-california",
    title: "Selling Your Parents' House to Pay for Assisted Living in California",
    excerpt: "One of the hardest decisions a family makes. Here's the legal process, the Medi-Cal implications, the power of attorney questions, and how to sell quickly without getting taken advantage of.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },
  {
    slug: "downsize-sell-home-fast-fresno",
    title: "Downsizing in Fresno: How to Sell a 30-Year Home Without the Stress",
    excerpt: "You've lived there for decades. The kids are grown. The house is too big. Here's how to downsize without the emotional and logistical overwhelm — and what to do with 30 years of stuff.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    slug: "capital-gains-selling-home-california-seniors",
    title: "Capital Gains Tax When Seniors Sell Their Home in California: What You Need to Know",
    excerpt: "The $250,000 / $500,000 exclusion. Step-up in basis at death. Prop 19 transfers. Here's what California seniors need to understand before they sell — and the mistakes that cost families tens of thousands.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    slug: "sell-house-too-much-stuff-fresno",
    title: "Selling a House Full of Stuff: What to Do When You Can't Clean It Out",
    excerpt: "You don't have to empty the house before you sell. Here's what estate sale companies, junk haulers, and cash buyers can do — and which option makes the most sense for your situation.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "power-of-attorney-sell-house-california",
    title: "Can You Sell a Parent's House With Power of Attorney in California?",
    excerpt: "Yes — but only if the POA document specifically grants real estate authority. Here's what California law requires, what to watch out for, and how to sell quickly once you have authority.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    slug: "sell-house-move-to-fairwinds-woodward-park-fresno",
    title: "Selling Your Home to Move to Fairwinds Woodward Park — What Fresno Sellers Need to Know",
    excerpt: "Fairwinds Woodward Park is one of Fresno's most sought-after retirement communities. But getting your spot often means selling your home fast. Here's how to time it right.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },
  {
    slug: "sell-house-move-to-terraces-san-joaquin-gardens-fresno",
    title: "The Terraces at San Joaquin Gardens — How Fresno Homeowners Sell Their Home to Move In",
    excerpt: "The Terraces is a nonprofit life plan community on 26 acres in central Fresno. Here's what the waitlist looks like, what it costs, and how to sell your home fast enough to secure your spot.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
  },
  {
    slug: "fresno-senior-living-guide-2026",
    title: "Fresno Senior Living Guide 2026: Every Retirement Community, What It Costs, and How to Get In",
    excerpt: "A comprehensive guide to every major retirement and senior living community in Fresno — from Fairwinds to The Terraces to Oakmont — with real costs, waitlist info, and how to sell your home to fund the move.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    slug: "cash-buyer-vs-traditional-sale-fresno",
    title: "Cash Buyer vs. Traditional Sale in Fresno: Which Is Better for You?",
    excerpt: "Selling to a cash buyer isn't always the right choice — but sometimes it's the best one. Here's an honest comparison of cash sales vs. listing with an agent in the Fresno market.",
    category: "Selling Tips",
    date: "January 5, 2025",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-handshake-h3sNkSMXKTXvEAG5butBYp.webp",
  },
  {
    slug: "sell-house-divorce-california-fresno",
    title: "Selling Your House During a Divorce in California: What Fresno Homeowners Need to Know",
    excerpt: "Divorce is hard enough. Selling the family home doesn't have to make it harder. Here's how California divorce home sales work — and how a cash sale can end the conflict faster.",
    category: "Divorce",
    date: "April 3, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
  },
  {
    slug: "1031-exchange-guide-fresno-investors",
    title: "1031 Exchange Guide for Fresno Real Estate Investors: Defer Taxes, Build Wealth",
    excerpt: "A 1031 exchange lets you sell an investment property and defer capital gains taxes — but the rules are strict and the deadlines are unforgiving. Here's everything Fresno investors need to know.",
    category: "Investors",
    date: "April 3, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  },
  {
    slug: "california-capital-gains-tax-home-sale-2026",
    title: "California Capital Gains Tax on Home Sales in 2026: What You'll Actually Owe",
    excerpt: "California has the highest capital gains tax rate in the nation. Before you sell your Fresno home, here's exactly what you'll owe — and the legal strategies to reduce it.",
    category: "Taxes",
    date: "April 3, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
  },
  {
    slug: "how-to-evict-squatter-california-sell-house",
    title: "Squatter in Your California Home? How to Evict Them — or Sell Without Waiting",
    excerpt: "California squatter laws are among the toughest in the country. Here's how the eviction process actually works — and why selling to a cash buyer is often faster and cheaper.",
    category: "Problem Properties",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
  },
  {
    slug: "adjustable-rate-mortgage-reset-options-fresno",
    title: "Your ARM Is About to Reset: 5 Options for Fresno Homeowners Facing Higher Payments",
    excerpt: "Adjustable-rate mortgages that reset in 2025–2026 are pushing thousands of California homeowners into financial stress. Here are your real options before the payment shock hits.",
    category: "Financial Hardship",
    date: "April 3, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop",
  },
  {
    slug: "proposition-19-california-seniors-home-sale-2026",
    title: "Proposition 19 Explained: How California Seniors Can Save Thousands When Selling Their Home",
    excerpt: "Prop 19 lets California homeowners 55+ transfer their low property tax base to a new home anywhere in the state. Here's exactly how it works and what it means for your sale.",
    category: "Senior Sellers",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop",
  },
  {
    slug: "realtor-overpricing-trap-fresno-2026",
    title: "The Realtor Overpricing Trap: Why Your Home Isn't Selling in Fresno",
    excerpt: "With real estate transactions down 40%+ since 2021, desperate agents are pricing homes above market to win listings. Here's exactly what happens next — and how to avoid it.",
    category: "Seller Education",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
  },
  {
    slug: "wholesaler-red-flags-california-2026",
    title: "7 Red Flags That Prove You're Talking to a Wholesaler, Not a Real Buyer",
    excerpt: "Wholesalers in California are taking $20,000–$60,000 off the top of your home sale. Here are the exact warning signs to look for before you sign anything.",
    category: "Seller Education",
    date: "April 3, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
  },
  {
    slug: "how-to-read-a-cash-offer-california",
    title: "How to Read a Cash Offer: What Every Fresno Seller Needs to Know Before Signing",
    excerpt: "Not all cash offers are equal. Here's how to evaluate a cash offer, what the key terms mean, and what to watch out for before you sign on the dotted line.",
    category: "Seller Education",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  },
  {
    slug: "what-happens-at-closing-california-home-sale",
    title: "What Happens at Closing? A Step-by-Step Guide for Fresno Home Sellers",
    excerpt: "Closing day can feel overwhelming if you don't know what to expect. Here's exactly what happens, what you need to bring, and when you get your money.",
    category: "Seller Education",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
  },
  {
    slug: "probate-timeline-california-2026",
    title: "California Probate Timeline: How Long Does It Take to Sell an Inherited Home?",
    excerpt: "California probate can take 9–18 months. Here's the full timeline, what causes delays, and how to sell an inherited Fresno home faster — with or without probate.",
    category: "Probate",
    date: "April 3, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
  },
  {
    slug: "sell-house-job-loss-fresno-california",
    title: "Lost Your Job? Here's How to Sell Your Fresno Home Fast and Protect Your Credit",
    excerpt: "Job loss is one of the leading causes of foreclosure in California. Here's how to sell your home quickly, avoid foreclosure, and protect your financial future.",
    category: "Financial Hardship",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop",
  },
  {
    slug: "sell-house-medical-bills-fresno-california",
    title: "Drowning in Medical Bills? Selling Your Fresno Home May Be Your Best Option",
    excerpt: "Medical debt is the leading cause of bankruptcy in the US. If your home equity can eliminate your debt and give you a fresh start, here's how to do it without losing everything.",
    category: "Financial Hardship",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
  },
  {
    slug: "fresno-real-estate-market-update-2026",
    title: "Fresno Real Estate Market Update 2026: What Sellers Need to Know Right Now",
    excerpt: "Fresno home sales are down 40%+ from peak. Interest rates, inventory, and days on market have all shifted dramatically. Here's what the data means for sellers in 2026.",
    category: "Market Updates",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
  },
  {
    slug: "how-to-avoid-foreclosure-california-2026",
    title: "How to Avoid Foreclosure in California: 6 Options Before You Lose Your Home",
    excerpt: "California foreclosure takes 120–200 days. You have more options than you think — including a cash sale that stops the process immediately. Here's the complete guide.",
    category: "Foreclosure",
    date: "April 3, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop",
  },
  {
    slug: "sell-house-job-relocation-fresno-california",
    title: "Got a Job Offer in Another City? How to Sell Your Fresno Home Fast and Move With Confidence",
    excerpt: "Job relocation is one of the most time-pressured reasons to sell. Here's how to sell your Fresno home in 7 days, avoid carrying two mortgages, and start your new job without financial stress.",
    category: "Seller Education",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
  },
  {
    slug: "sell-house-code-violations-fresno-california",
    title: "Selling a House With Code Violations in Fresno: What You Need to Know",
    excerpt: "Unpermitted additions, red-tagged structures, and code violations can make it nearly impossible to sell on the MLS. Here's how to sell as-is and avoid costly compliance work.",
    category: "Problem Properties",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
  },
  {
    slug: "central-valley-real-estate-outlook-2026-2027",
    title: "Central Valley Real Estate Outlook: 2026–2027 Forecast for Fresno, Tulare, and Kings Counties",
    excerpt: "Agricultural economics, water rights, and remote work migration are reshaping the Central Valley housing market. Here's what the data says about where prices are headed.",
    category: "Market Updates",
    date: "April 3, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop",
  },
  {
    slug: "sell-house-without-realtor-fresno-california",
    title: "How to Sell Your House Without a Realtor in Fresno, CA (2026 Guide)",
    excerpt: "Thinking about selling FSBO or to a cash buyer instead of hiring an agent? This guide covers every option — and the honest math behind each one.",
    category: "Selling Tips",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
  },
  {
    slug: "how-cash-offer-calculated-fresno",
    title: "How Is a Cash Offer on a House Calculated? (We Show You the Math)",
    excerpt: "Most cash buyers won't show you their math. We will. Here's exactly how we calculate every offer — ARV, repairs, holding costs, and our margin — so you can verify it's fair.",
    category: "Cash Offers",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  },
  {
    slug: "clovis-north-home-sale-guide-2026",
    title: "Selling a Home in Clovis North: What You Need to Know in 2026",
    excerpt: "Clovis North is one of the strongest real estate markets in the Central Valley. Here's what sellers need to know about pricing, timing, and whether a cash sale or listing makes more sense.",
    category: "Clovis",
    date: "April 3, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop",
  },
  {
    slug: "stop-foreclosure-sell-house-fast-fresno-2026",
    title: "Stop Foreclosure by Selling Your House Fast in Fresno (2026)",
    excerpt: "If your lender has started foreclosure proceedings, you may have more time than you think — and selling fast is often the best way to protect your credit and walk away with cash.",
    category: "Foreclosure",
    date: "April 3, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop",
  },
  {
    slug: "cash-buyer-vs-realtor-fresno-which-is-better",
    title: "Cash Buyer vs. Realtor in Fresno: Which Gets You More Money?",
    excerpt: "The honest answer depends on your situation. We break down the real numbers — net proceeds, timeline, and certainty — for both options so you can make the right call.",
    category: "Selling Tips",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
  },
  {
    slug: "sell-house-as-is-fresno-california-2026",
    title: "Sell Your House As-Is in Fresno, CA: No Repairs, No Cleanout (2026)",
    excerpt: "You don't have to fix a single thing before selling. Here's everything you need to know about selling as-is in Fresno — what it means legally, what to expect on price, and how to find a real buyer.",
    category: "As-Is Sales",
    date: "April 3, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
  },
];

const categoryColors: Record<string, string> = {
  "Foreclosure": "oklch(0.55 0.13 42)",
  "Rent-Back": "oklch(0.28 0.05 155)",
  "Probate": "oklch(0.40 0.05 155)",
  "Mortgage Help": "oklch(0.50 0.12 42)",
  "Fast Sale": "oklch(0.45 0.11 42)",
  "Selling Tips": "oklch(0.35 0.05 155)",
  "Consumer Warning": "oklch(0.45 0.16 25)",
  "Landlord": "oklch(0.35 0.08 200)",
  "Property Security": "oklch(0.42 0.12 25)",
  "Bakersfield": "oklch(0.50 0.10 42)",
  "Northern Valley": "oklch(0.38 0.06 155)",
  "Property Condition": "oklch(0.42 0.10 35)",
  "Military": "oklch(0.35 0.08 220)",
  "Real Deals": "oklch(0.48 0.14 42)",
  "Senior Sellers": "oklch(0.42 0.08 155)",
  "Divorce": "oklch(0.45 0.12 320)",
  "Investors": "oklch(0.35 0.10 200)",
  "Taxes": "oklch(0.40 0.10 60)",
  "Problem Properties": "oklch(0.42 0.14 25)",
  "Financial Hardship": "oklch(0.40 0.12 42)",
  "Seller Education": "oklch(0.38 0.10 200)",
  "Market Updates": "oklch(0.35 0.08 240)",
};

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <Layout>
      <PageMeta
        title="Blog & Resources — Fresno Home Seller Guides"
        description="Free guides for Fresno homeowners: how to stop foreclosure, sell a hoarder house, navigate probate, handle mold, fire damage, and more. Written by a licensed CA agent."
        path="/blog"
      />
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Alder Heritage Homes Blog" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0" style={{ background: "oklch(0.22 0.01 60 / 0.85)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Resources & Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Fresno Home Seller Resources
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.75 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
            Honest, practical guides for homeowners facing foreclosure, probate, mortgage problems, and more.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <div className="mb-8">
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.13 42)" }}>
              Featured Article
            </span>
          </div>
          <Link href={`/blog/${featured.slug}`}>
            <div className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer" style={{ border: "1px solid oklch(0.88 0.02 85)" }}>
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: categoryColors[featured.category] || "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center" style={{ background: "white" }}>
                <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-terracotta transition-colors" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                  {featured.title}
                </h2>
                <p className="mb-6 leading-relaxed" style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 font-semibold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="pb-24" style={{ background: "oklch(0.97 0.015 85)" }}>
        <div className="container">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group rounded-2xl overflow-hidden shadow-sm cursor-pointer h-full flex flex-col" style={{ background: "white", border: "1px solid oklch(0.88 0.02 85)", transition: "box-shadow 0.3s" }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: categoryColors[post.category] || "oklch(0.55 0.13 42)", fontFamily: "'DM Mono', monospace" }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-3 leading-snug flex-1" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "oklch(0.55 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>
                      Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
