/* ============================================================
   HOME PAGE — Alder Heritage Homes (Premium Redesign)
   Visual Dominance Strategy: Terracotta/Forest Green palette
   Premium hero, trust signals, video testimonials, calculator
   ============================================================ */
import React, { useState, useEffect, useRef } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import ComparableSales from "@/components/ComparableSales";
import { usePlacesAutocomplete } from "@/hooks/usePlacesAutocomplete";
import ConnorManifesto from "@/components/ConnorManifesto";
import { NeighborhoodsMap } from "@/components/NeighborhoodsMap";
import { CashOfferEstimator } from "@/components/CashOfferEstimator";
import { useSEO, faqSchema } from "@/hooks/useSEO";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";
import {
  Phone, ArrowRight, CheckCircle2, Clock, Shield, Star, Calculator,
  Home as HomeIcon, AlertTriangle, Key, Users, DollarSign, Loader2, MapPin,
  Play, Heart, ChevronDown, ChevronUp, BookOpen, Camera, Zap, MessageCircle,
  Award, TrendingUp, Handshake
} from "lucide-react";

const PHONE = "(559) 281-8016";
const PHONE_HREF = "tel:5592818016";

// Premium generated images
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-fresno-valley-sunset-WPPmZLKeW4SWVM8WaLk7ct.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/why-choose-us-professional-team-3LjQeVwxeJeqSamzALunGH.webp";
const BEFORE_AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/case-study-before-after-home-BSTaMz5arXxEDkxXEYSEx7.webp";
const NEIGHBORHOODS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/local-fresno-neighborhoods-collage-DcsxYcDTFi8xZzkq5ZL6g3.webp";
const TRUST_BG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/trust-signals-background-dKZRKcxoQaw38foBnYrQoA.webp";

const CONNOR_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-video-ad_9ad5ae32.mp4";
const CONNOR_VIDEO_THUMB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-video-thumbnail_9ed7fde4.jpg";

// Before/After photos
const HAZMAT_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-hazmat-team-clovis_6f37d7da.webp";
const SELLER_HUG_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-seller-clovis-hug_80f9b3b4.webp";
const CONNOR_SELLER_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-with-seller_9f925e34.webp";

// Recent deals data
const recentDeals = [
  {
    badge: "Tired Landlord",
    address: "4573 E Huntington Ave, Fresno",
    summary: "Tenants destroyed it for years — no inspections, just a quick walkthrough. Wired $235K in 48 hours.",
    price: "$235,000 cash",
    timeline: "Wired in 48 hours",
    color: "oklch(0.55 0.13 42)",
  },
  {
    badge: "3-Property Estate",
    address: "4031 E Pontiac Way + 2 more, Fresno",
    summary: "Mother passed, squatters in 2 properties, family needed fast payout",
    price: "3 homes, 1 close",
    timeline: "Single transaction",
    color: "oklch(0.28 0.05 155)",
  },
  {
    badge: "Cash Purchase",
    address: "1749 W Santa Ana Ave, Fresno",
    summary: "Quick sale needed — purchased, renovated, resold at $305K",
    price: "Cash close",
    timeline: "7 days",
    color: "oklch(0.45 0.10 200)",
  },
  {
    badge: "Murder Scene",
    address: "Clovis, CA (address withheld)",
    summary: "Homicide, 2-year squatter, no water/sewer, hazmat required",
    price: "$200,000 cash",
    timeline: "As-is, no contingencies",
    color: "oklch(0.50 0.12 42)",
  },
];

// Featured blog posts
const featuredPosts = [
  {
    slug: "dont-get-wholesaled-fresno-cash-buyer-warning",
    title: "Don't Get Wholesaled: How to Spot a Fake Cash Buyer",
    excerpt: "Most 'we buy houses' companies have no capital. They lock you into a contract, then sell it to a real investor.",
    category: "Consumer Warning",
    readTime: "9 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/hero-home-nZTcWEfhePrYwEAzcFVusA.webp",
  },
  {
    slug: "how-to-stop-foreclosure-fresno",
    title: "How to Stop Foreclosure in Fresno: Your Options Explained",
    excerpt: "Facing foreclosure? You have more options than you think — even if the auction date is weeks away.",
    category: "Foreclosure",
    readTime: "7 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/foreclosure-help-TU46LJDiCeKVaTFvCVuw8j.webp",
  },
  {
    slug: "sell-inherited-house-fresno-probate",
    title: "How to Sell an Inherited House in Fresno: Complete Guide",
    excerpt: "Inherited a home after a loved one passed? This guide walks you through the probate process.",
    category: "Probate",
    readTime: "9 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/probate-home-ZeanN6iaQ9xcreUKU8kCg3.webp",
  },
];

// Mini FAQ for homepage
const homepageFAQs = [
  {
    q: "How fast can you actually close?",
    a: "We can close in as little as 5–7 business days once we have a signed purchase agreement and clear title. If you need more time — to find your next home, coordinate a move, or handle an estate — we work around your schedule. We've closed in 3 days when a seller needed it.",
  },
  {
    q: "Do I need to make any repairs or clean the house?",
    a: "No. We buy homes in any condition — fire damage, foundation issues, mold, hoarder situations, deferred maintenance, or anything else. Leave whatever you don't want. Furniture, appliances, personal belongings — we handle all of it after closing.",
  },
  {
    q: "How do I know you're not a wholesaler?",
    a: "We are a licensed California real estate agent (DRE #02219124) who buys with our own capital. We never use 'and/or assignee' language, we provide proof of funds within 24 hours, and we include a free third-party Broker Opinion of Value with every offer. Wholesalers can't do any of these things.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "No agent commissions, no listing fees, no closing cost surprises. We cover standard seller-side closing costs. The offer we make is the amount you receive at closing, minus any outstanding mortgage payoff, liens, or back taxes.",
  },
  {
    q: "What's your Price Match Guarantee?",
    a: "We offer the highest cash offers in Fresno and the Central Valley. If you have a competing offer, we will match it or beat it — guaranteed. And unlike most companies, we won't ask for a price reduction at the last second. We close escrow faster than anyone else, so you get your cash sooner.",
  },
  {
    q: "Is selling off-market for cash my only option?",
    a: "No. I partner with the best broker in Fresno. If you want, I will have my broker partner provide you with a free Broker Opinion of Value and a traditional listing analysis. You will have TWO real options: sell off-market for cash to me, or list on the MLS with professional representation. But here is the thing — if you choose to sell off-market for cash to me, I will pay you MORE than you will get from any other buyer. You deserve to know all your options.",
  },
];

const situations = [
  {
    icon: <AlertTriangle size={28} />,
    title: "Facing Foreclosure",
    desc: "Your lender has started the foreclosure process. We can close before the auction date and stop foreclosure in its tracks.",
    href: "/foreclosure-help",
    color: "oklch(0.55 0.13 42)",
  },
  {
    icon: <DollarSign size={28} />,
    title: "Behind on Mortgage",
    desc: "Missed payments are piling up. We'll buy your home as-is, pay off what you owe, and put cash in your pocket.",
    href: "/behind-on-mortgage",
    color: "oklch(0.50 0.12 42)",
  },
  {
    icon: <HomeIcon size={28} />,
    title: "Second Mortgage / HELOC",
    desc: "Drowning in a second mortgage or HELOC you can't afford? We buy homes with multiple liens — no problem.",
    href: "/second-mortgage-help",
    color: "oklch(0.45 0.11 42)",
  },
  {
    icon: <Key size={28} />,
    title: "Sell & Stay in Your Home",
    desc: "Need to sell but not ready to move? Ask about our Rent-Back / Holdback program — sell today, stay as long as you need.",
    href: "/sell-and-stay-rent-back",
    color: "oklch(0.28 0.05 155)",
  },
  {
    icon: <Users size={28} />,
    title: "Inherited or Probate Home",
    desc: "Lost a loved one and inherited their home? We've completed 700+ home purchases since 2008 and can guide you through every step.",
    href: "/probate-inherited-homes",
    color: "oklch(0.35 0.05 155)",
  },
  {
    icon: <Clock size={28} />,
    title: "Need to Sell Fast",
    desc: "Divorce, job relocation, medical bills, or just ready to move on? We can close in as little as 3 days.",
    href: "/sell-house-fast",
    color: "oklch(0.40 0.05 155)",
  },
];

const stats = [
  { value: 700, suffix: "+", label: "Homes Purchased", sub: "since 2008 across all entities" },
  { value: 7, suffix: " days", label: "Fastest Close", sub: "no repairs needed" },
  { value: 0, prefix: "$", suffix: "", label: "Commissions or Fees", sub: "ever" },
  { value: 24, suffix: "hr", label: "Cash Offer", sub: "after walkthrough" },
];

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Home",
    desc: "Fill out our short form or call (559) 281-8016. No obligation, no pressure — just a 5-minute conversation about your situation.",
  },
  {
    num: "02",
    title: "Get Your Written Cash Offer",
    desc: "We research your property and present a fair, written cash offer within 24 hours — with a free Broker Opinion of Value so you know it's real.",
  },
  {
    num: "03",
    title: "Close & Get Paid",
    desc: "You pick the closing date — as fast as 3 days or whenever you're ready. We handle all paperwork. You walk away with cash, zero fees.",
  },
];

const testimonials = [
  {
    name: "Maria G.",
    city: "Fresno, CA",
    situation: "Foreclosure",
    text: "I was two months behind on my mortgage and terrified of losing my home. Connor was honest, patient, and got me a fair offer in 24 hours. I closed in 10 days and avoided foreclosure completely.",
    stars: 5,
    initials: "MG",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.55 0.13 42)",
  },
  {
    name: "Robert & Linda T.",
    city: "Clovis, CA",
    situation: "Probate / Inherited Home",
    text: "We inherited my mother's home after she passed and had no idea what to do. Alder Heritage walked us through the entire probate process. They knew exactly what they were doing and treated us with respect.",
    stars: 5,
    initials: "RT",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.28 0.05 155)",
  },
  {
    name: "James K.",
    city: "Sanger, CA",
    situation: "Rent-Back / Holdback",
    text: "I needed to sell but wasn't ready to move out yet. The rent-back option was a lifesaver — I sold the house, got my cash, and had two months to find my new place. Never knew that was even possible.",
    stars: 5,
    initials: "JK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    color: "oklch(0.45 0.10 200)",
  },
];

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useSEO({
    title: "Sell Your House Fast for Cash in Fresno | Alder Heritage Homes",
    description: "Licensed cash home buyer in Fresno & Central Valley. Buy homes as-is, close in 3 days, no repairs needed. Get a free offer today.",
    canonical: "https://www.alderheritagehomes.com",
  });

  return (
    <Layout>
      <PageMeta
        path="/"
        title="Sell Your House Fast for Cash in Fresno | Alder Heritage Homes"
        description="Licensed cash home buyer in Fresno & Central Valley. Buy homes as-is, close in 3 days, no repairs needed. Get a free offer today."
        image={HERO_IMG}
      />

      {/* ============================================================
          HERO SECTION — Premium Fresno Valley Sunset
          ============================================================ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${HERO_IMG}')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="mb-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Award size={20} className="text-amber-400" />
              <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Licensed DRE #02219124</span>
            </div>
            <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm">
              ✓ Highest Cash Offers in Fresno/Central Valley
            </div>
            <div className="inline-block bg-gradient-to-r from-amber-300 to-yellow-300 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm">
              ✓ Price Match Guarantee — We Beat Any Offer & Close Faster
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif">
            Sell Your House Fast for Cash
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl font-light">
            No repairs. No inspections. No real estate agents. We buy homes in any condition across Fresno & the Central Valley.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/compare-options">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2">
                <Calculator size={20} />
                Compare Your Options
              </button>
            </Link>
            <a href={PHONE_HREF}>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border border-white/40 transition-all duration-300 flex items-center gap-2">
                <Phone size={20} />
                Call {PHONE}
              </button>
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-green-400" />
              <span>Close in 3 days</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-green-400" />
              <span>Zero fees or commissions</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-green-400" />
              <span>Buy as-is, any condition</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* ============================================================
          TRUST SIGNALS SECTION — DRE Badge, Testimonials, Credentials
          ============================================================ */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${TRUST_BG_IMG}')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* DRE License */}
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg mb-4">
                <Award size={40} className="text-amber-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Licensed Agent</h3>
              <p className="text-sm text-gray-600">California DRE #02219124 — Real capital, real offers</p>
            </div>

            {/* Proof of Funds */}
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-lg mb-4">
                <DollarSign size={40} className="text-green-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Proof of Funds</h3>
              <p className="text-sm text-gray-600">24-hour verification — no contingencies</p>
            </div>

            {/* 700+ Homes */}
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-4">
                <TrendingUp size={40} className="text-blue-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">700+ Homes</h3>
              <p className="text-sm text-gray-600">Since 2008 — proven track record</p>
            </div>

            {/* Fair Offers */}
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg mb-4">
                <Handshake size={40} className="text-purple-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fair Offers</h3>
              <p className="text-sm text-gray-600">Free Broker Opinion of Value included</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHOLESALER WARNING — Critical Consumer Alert
          ============================================================ */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50 border-t-4 border-red-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-600">
            <div className="flex gap-4 mb-6 items-start">
              <AlertTriangle size={32} className="text-red-600 flex-shrink-0 mt-1" />
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 font-serif">WARNING: 99% of Cash Buyers Are Wholesalers</h2>
            </div>

            <div className="space-y-6 text-gray-800">
              <p className="text-lg font-semibold">
                If you're talking to a "cash buyer" company, here's what's really happening:
              </p>

              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-3 text-lg">The Wholesaling Scam:</h3>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li><strong>They "tie up" your home</strong> with a contract that says "and/or assignee"</li>
                  <li><strong>They DON'T have money</strong> to actually buy it</li>
                  <li><strong>They go find a REAL buyer</strong> (usually me or another investor)</li>
                  <li><strong>They assign the contract</strong> to that buyer for a $10K-$50K "assignment fee"</li>
                  <li><strong>YOU get less money</strong> because the wholesaler took their cut</li>
                  <li><strong>YOU think you sold it</strong>, but really you just gave them a commission to find a buyer</li>
                </ol>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 className="font-bold text-green-700 mb-3 text-lg">Why I Know This:</h3>
                <p className="mb-3">
                  <strong>I am the largest independent single-family home buyer in the Central Valley.</strong> My phone and email get blasted DAILY with wholesalers trying to assign me contracts from their sellers. I see it constantly.
                </p>
                <p>
                  <strong>Every single competitor who contacts me is a wholesaler.</strong> They don't have capital. They don't buy homes. They just "tie them up" and try to sell the contract to me.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="font-bold text-blue-700 mb-3 text-lg">How to Know If You're Talking to a Wholesaler:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ Their contract says "and/or assignee" (RED FLAG)</li>
                  <li>✗ They can't provide proof of funds within 24 hours</li>
                  <li>✗ They take 30+ days to close (they're looking for a buyer)</li>
                  <li>✗ They ask for a price reduction at the last second</li>
                  <li>✗ They're not a licensed real estate agent</li>
                  <li>✗ They won't give you a Broker Opinion of Value</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-700 mb-3 text-lg">How to Know If You're Talking to a REAL Buyer (Like Me):</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Licensed California real estate agent (DRE #02219124)</li>
                  <li>✓ Proof of funds within 24 hours (not 30 days)</li>
                  <li>✓ Close in 3 days (we have the money)</li>
                  <li>✓ No "and/or assignee" language</li>
                  <li>✓ Free Broker Opinion of Value included</li>
                  <li>✓ No price reductions at closing</li>
                  <li>✓ 700+ homes purchased since 2008</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 border-2 border-amber-600">
                <p className="text-lg font-bold text-amber-900 mb-3">
                  🔍 Want Proof Your "Buyer" Is a Wholesaler?
                </p>
                <p className="text-gray-800 mb-4">
                  Call me at <span className="font-bold text-amber-700">{PHONE}</span>. Show me their contract or tell me their company name. I'll tell you exactly if they're a wholesaler and show you proof that they've contacted me trying to assign contracts.
                </p>
                <p className="text-sm text-gray-700">
                  I get contacted by wholesalers every single day. I can usually identify them within 30 seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS SECTION — Key Numbers
          ============================================================ */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPARE OPTIONS CALCULATOR
          ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
              See Your Real Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare what you'll net from a traditional listing vs. a cash sale. No obligation, just real math.
            </p>
          </div>

          <Link href="/compare-options">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 md:p-12 border-2 border-amber-200 hover:border-amber-400 transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Calculator</h3>
                  <p className="text-gray-700">Input your home value and repair estimate to see exact net proceeds</p>
                </div>
                <ArrowRight size={32} className="text-amber-600" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============================================================
          SITUATIONS WE HANDLE
          ============================================================ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
              We Handle Every Situation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No matter what's happening with your home, we've seen it before and have a solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((sit, i) => (
              <Link key={i} href={sit.href}>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border-l-4" style={{ borderColor: sit.color }}>
                  <div className="mb-4" style={{ color: sit.color }}>
                    {sit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sit.title}</h3>
                  <p className="text-gray-600 text-sm">{sit.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS — 3 Steps
          ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps from inquiry to cash in your pocket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                  <div className="text-5xl font-bold text-amber-600 mb-4 font-serif">{step.num}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={32} className="text-amber-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          RECENT DEALS — Real Transactions
          ============================================================ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
              Real Deals, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These are actual homes we've bought. Every situation, every condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentDeals.map((deal, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6 border-l-4" style={{ borderColor: deal.color }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                      {deal.badge}
                    </span>
                    <span className="text-2xl font-bold" style={{ color: deal.color }}>
                      {deal.price}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{deal.address}</h3>
                  <p className="text-gray-600 mb-4">{deal.summary}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} />
                    {deal.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300">
                View All Case Studies
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS — Video + Text
          ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
              What Sellers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who sold their homes to us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Video testimonial */}
            <div className="relative">
              <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
                <video
                  ref={videoRef}
                  src={CONNOR_VIDEO}
                  poster={CONNOR_VIDEO_THUMB}
                  className="w-full h-full object-cover"
                  controls
                />
              </div>
            </div>

            {/* Text testimonials */}
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4" style={{ borderColor: t.color }}>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-600">{t.city} • {t.situation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION
          ============================================================ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Have more questions? <Link href="/faq"><span className="text-amber-600 font-bold hover:underline cursor-pointer">View our full FAQ</span></Link>
            </p>
          </div>

          <div className="space-y-4">
            {homepageFAQs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-left">{faq.q}</span>
                  {expandedFAQ === i ? (
                    <ChevronUp size={20} className="text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === i && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA — Get Your Offer
          ============================================================ */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Ready to Sell?
          </h2>
          <p className="text-xl mb-8 text-amber-50">
            Get a free, no-obligation cash offer in 24 hours. No repairs needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compare-options">
              <button className="px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 justify-center">
                <Calculator size={20} />
                Compare Options
              </button>
            </Link>
            <a href={PHONE_HREF}>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border-2 border-white transition-all duration-300 flex items-center gap-2 justify-center">
                <Phone size={20} />
                Call {PHONE}
              </button>
            </a>
          </div>
        </div>
      </section>

      <SchemaMarkup id="home-schema" schema={localBusinessSchema() as Record<string, unknown>} />
    </Layout>
  );
}
