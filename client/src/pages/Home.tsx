import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, DollarSign, AlertCircle, Award, Phone, Shield, ArrowRight, Star, ChevronDown, ChevronUp, X, Check } from 'lucide-react';
import { Link } from 'wouter';

const CONNOR_HUG_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-hug-seller_2e91e0b5.webp';
const YARD_SIGN_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/alder-yard-sign_ffeaeadb.webp';
const CONNOR_VIDEO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504571089/XpRyNnoAyiTowvWnQARBrm/connor-ad-video_ba6eba0e.mp4';

const faqs = [
  {
    q: 'How quickly can you make a cash offer?',
    a: 'We provide a written cash offer within 24 hours of reviewing your property details. Connor personally reviews every property and calls you directly — often the same day you reach out.',
  },
  {
    q: 'How fast can you close on a home?',
    a: 'We can close in as little as 3 days. We have the funds ready and can move quickly to meet your timeline. No bank approval needed, no delays, no last-minute surprises.',
  },
  {
    q: 'Are there any hidden fees or commissions?',
    a: 'Absolutely none. We pay zero commissions and zero hidden fees. What we offer is exactly what you receive at closing. No deductions, no surprises.',
  },
  {
    q: 'Do you buy homes in any condition?',
    a: 'Yes. We buy homes as-is — whether they need major repairs, have liens, are in probate, or are inherited. No inspections, no appraisals, no hassle.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We buy homes throughout the Central Valley including Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, Merced, Turlock, and surrounding areas.',
  },
  {
    q: 'What types of situations do you specialize in?',
    a: 'We specialize in probate and inherited homes, foreclosure, divorce, properties needing repairs, landlords tired of tenants, and anyone who needs to sell quickly without hassle.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.alderheritagehomes.com',
      name: 'Alder Heritage Homes',
      image: CONNOR_HUG_URL,
      description: 'Licensed cash home buyer in Fresno, Clovis, and Central Valley. We buy houses fast - 24-hour cash offers, 3-day close, no fees. Specializing in probate homes, inherited properties, and distressed sales.',
      url: 'https://www.alderheritagehomes.com',
      telephone: '+15592818016',
      email: 'connor@alderheritagehomes.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Fresno, CA',
        addressLocality: 'Fresno',
        addressRegion: 'CA',
        postalCode: '93650',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Fresno' },
        { '@type': 'City', name: 'Clovis' },
        { '@type': 'City', name: 'Visalia' },
        { '@type': 'City', name: 'Bakersfield' },
        { '@type': 'City', name: 'Tulare' },
        { '@type': 'City', name: 'Hanford' },
      ],
      priceRange: '$$',
      sameAs: ['https://www.facebook.com/alderheritagehomes', 'https://www.instagram.com/alderheritagehomes'],
      knowsAbout: ['Cash home buying', 'Probate home sales', 'Inherited property sales', 'Distressed property sales'],
      license: 'California DRE #02219124',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };

    const s1 = document.createElement('script');
    s1.type = 'application/ld+json';
    s1.textContent = JSON.stringify(schema);
    document.head.appendChild(s1);

    const s2 = document.createElement('script');
    s2.type = 'application/ld+json';
    s2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(s2);

    document.title = 'Cash Home Buyer Fresno | Alder Heritage Homes | 24hr Offers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Licensed cash home buyer in Fresno, Clovis & Central Valley. Get a real cash offer in 24 hours. No fees, no wholesalers. Specializing in probate and inherited homes.');

    return () => {
      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── STICKY NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-sm">AH</span>
            </div>
            <div>
              <div className={`font-bold text-sm leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>Alder Heritage Homes</div>
              <div className={`text-xs ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>CA DRE #02219124</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {['#how-it-works', '#about', '#faq'].map((href, i) => (
              <a key={i} href={href} className={`hover:text-orange-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
                {['How It Works', 'About Connor', 'FAQ'][i]}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+15592818016" className={`hidden sm:flex items-center gap-1.5 text-sm font-bold hover:text-orange-400 transition-colors ${scrolled ? 'text-orange-600' : 'text-white'}`}>
              <Phone className="w-4 h-4" />
              (559) 281-8016
            </a>
            <Link href="/ads/lead-capture">
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg">
                Get Cash Offer
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed background: Connor's photo on the right */}
        <div className="absolute inset-0">
          <div
            className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${CONNOR_HUG_URL})` }}
          />
          {/* Gradient overlay — strong on left, fades right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-24 w-full">
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              Licensed CA Real Estate Agent · DRE #02219124
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Sell Your Home<br />
              <span className="text-orange-500">For Cash.</span><br />
              <span className="text-3xl sm:text-4xl font-bold text-gray-300">Close in As Little As 3 Days.</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              I'm Connor — a <strong className="text-white">licensed buyer with real capital</strong>. No wholesalers. No middlemen.
              No last-second price cuts. Just a fair cash offer and a fast, honest close.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: <Clock className="w-4 h-4" />, text: '24-Hour Cash Offer' },
                { icon: <DollarSign className="w-4 h-4" />, text: 'Zero Fees Ever' },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: 'Any Condition' },
                { icon: <Award className="w-4 h-4" />, text: '700+ Homes Bought' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span className="text-orange-400">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ads/lead-capture">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-black px-10 py-7 shadow-2xl shadow-orange-900/50 rounded-xl w-full sm:w-auto transition-all hover:scale-105">
                  Get My Free Cash Offer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+15592818016">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 text-lg font-bold px-8 py-7 rounded-xl w-full sm:w-auto bg-transparent backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Connor Now
                </Button>
              </a>
            </div>

            {/* Social proof micro-line */}
            <div className="flex items-center gap-2 mt-6">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="text-gray-400 text-sm">5.0 · Rated by Central Valley homeowners</span>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 70L1440 70L1440 25C1200 65 960 5 720 25C480 45 240 5 0 25L0 70Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '24hr', label: 'Cash Offer', sub: 'Written & guaranteed', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-100' },
            { value: '3 days', label: 'Fast Close', sub: 'Funds always ready', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
            { value: '$0', label: 'Fees', sub: 'Zero commissions ever', color: 'text-green-600', bg: 'bg-green-50 border-green-100' },
            { value: '700+', label: 'Homes Bought', sub: 'Real results, real people', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-100' },
          ].map((stat, i) => (
            <div key={i} className={`text-center p-6 rounded-2xl border ${stat.bg} hover:shadow-md transition-shadow`}>
              <div className={`text-4xl font-black ${stat.color} mb-1`}>{stat.value}</div>
              <div className="font-bold text-gray-900 text-sm">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">Three steps. No obligations. No pressure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-orange-300 to-blue-300 z-0" />
            {[
              { step: '01', title: 'Tell Us About Your Home', desc: 'Fill out our quick 2-minute form or call Connor directly. No obligation, no pressure.', color: 'bg-orange-600', ring: 'ring-orange-200' },
              { step: '02', title: 'Get Your Cash Offer', desc: 'Connor personally reviews your property and delivers a written cash offer within 24 hours.', color: 'bg-blue-600', ring: 'ring-blue-200' },
              { step: '03', title: 'Close on Your Timeline', desc: 'Pick your closing date. We can close in as little as 3 days or wait until you\'re ready.', color: 'bg-green-600', ring: 'ring-green-200' },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 z-10">
                <div className={`${item.color} ring-4 ${item.ring} text-white text-sm font-black w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/ads/lead-capture">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-black px-12 py-7 text-lg shadow-xl rounded-xl hover:scale-105 transition-all">
                Start Now — It's Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT CONNOR (video left, copy right) ── */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl -rotate-1" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-100">
              <video
                src={CONNOR_VIDEO_URL}
                controls
                playsInline
                className="w-full h-auto"
                poster={YARD_SIGN_URL}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-slate-900 text-white rounded-2xl px-5 py-3 shadow-xl border border-white">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-sm font-bold">5.0 Rating</span>
              </div>
              <div className="text-xs text-gray-400 mt-0.5">Verified by homeowners</div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-5">
              <Award className="w-4 h-4" />
              Licensed CA Real Estate Agent · DRE #02219124
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Hi, I'm Connor.<br />
              <span className="text-orange-600">I Buy Homes Directly.</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I started Alder Heritage Homes because I saw too many homeowners get taken advantage of by wholesalers
                who promise cash offers but don't actually have the money to buy.
              </p>
              <p>
                As a <strong className="text-gray-900">licensed California real estate agent (DRE #02219124)</strong>, I buy homes directly with my
                own capital. No assignment contracts. No middlemen. No last-second price reductions.
              </p>
              <p>
                I specialize in helping families navigate difficult situations — <strong className="text-gray-900">inherited homes, probate sales,
                foreclosure, divorce, and properties that need work</strong>. I treat every seller with respect and transparency.
              </p>
            </div>
            {/* Checkmarks */}
            <div className="mt-6 space-y-2">
              {['Real capital — not a wholesaler', 'Price match guarantee', 'Proof of funds in 24 hours', 'No last-minute price cuts'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/ads/lead-capture">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-black px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all">
                  Get My Cash Offer
                </Button>
              </Link>
              <a href="tel:+15592818016">
                <Button size="lg" variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 font-bold px-8 py-6 rounded-xl">
                  <Phone className="w-4 h-4 mr-2" />
                  (559) 281-8016
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">Side-by-Side Comparison</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Why Sellers Choose Us</h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">See how Alder Heritage stacks up against the alternatives.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold w-1/3"></th>
                  <th className="px-6 py-4 text-center">
                    <div className="bg-orange-600 text-white rounded-xl px-4 py-2 font-black text-base inline-block">Alder Heritage</div>
                  </th>
                  <th className="px-6 py-4 text-center text-gray-400 font-semibold">Traditional Agent</th>
                  <th className="px-6 py-4 text-center text-gray-400 font-semibold">Wholesaler</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cash offer in 24 hours', true, false, false],
                  ['Close in 3–7 days', true, false, false],
                  ['Zero commissions', true, false, true],
                  ['No repairs needed', true, false, true],
                  ['Proof of funds available', true, false, false],
                  ['Licensed real estate agent', true, true, false],
                  ['No assignment contracts', true, true, false],
                  ['Price match guarantee', true, false, false],
                ].map(([label, us, agent, wholesale], i) => (
                  <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/3' : ''}`}>
                    <td className="px-6 py-4 text-gray-300 font-medium">{label as string}</td>
                    <td className="px-6 py-4 text-center">
                      {us ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {agent ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {wholesale ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10">
            <Link href="/ads/lead-capture">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white font-black px-12 py-7 text-lg rounded-xl shadow-2xl shadow-orange-900/40 hover:scale-105 transition-all">
                Get My Free Cash Offer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHOLESALER WARNING ── */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-black mb-4">
              <AlertCircle className="w-4 h-4" />
              IMPORTANT WARNING
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">99% of "Cash Buyers" Are Wholesalers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              They don't have the money to buy your home. They're trying to sell your contract to someone else.
              Here's how to spot them:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { flag: 'Contract says "and/or assignee"', detail: 'This means they can sell your contract to another buyer without telling you.' },
              { flag: "Can't provide proof of funds", detail: "Real buyers have money ready. If they can't prove it in 24 hours, they're wholesaling." },
              { flag: 'Takes 30+ days to close', detail: 'Wholesalers need time to find a real buyer. Legitimate cash buyers close in 3–7 days.' },
              { flag: 'Asks for price reduction at closing', detail: 'Classic wholesaler tactic — they found a buyer at a higher price and want to pocket the difference.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{item.flag}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-red-100">
            <p className="text-lg font-bold text-gray-900 mb-2">Alder Heritage Homes is none of the above.</p>
            <p className="text-gray-600 mb-6">We're a licensed, direct buyer with real capital and a proven track record across the Central Valley.</p>
            <Link href="/ads/lead-capture">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-black px-10 py-6 text-lg rounded-xl shadow-lg hover:scale-105 transition-all">
                Get a Real Cash Offer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-500">Everything you need to know about selling to Alder Heritage Homes.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 px-4 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${YARD_SIGN_URL})` }}
        />
        <div className="absolute inset-0 bg-slate-950/85" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Licensed · No Fees · Real Capital
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Sell<br />
            <span className="text-orange-500">Your Home?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Get a real cash offer in 24 hours from a licensed buyer who actually has the money.
            No wholesalers. No fees. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ads/lead-capture">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white text-xl font-black px-12 py-8 rounded-xl shadow-2xl shadow-orange-900/50 hover:scale-105 transition-all w-full sm:w-auto">
                Get My Free Cash Offer
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <a href="tel:+15592818016">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xl font-bold px-10 py-8 rounded-xl w-full sm:w-auto bg-transparent backdrop-blur-sm">
                <Phone className="w-6 h-6 mr-2" />
                (559) 281-8016
              </Button>
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">Connor personally answers every call. No call centers. No robots.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-gray-400 py-12 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-sm">AH</span>
                </div>
                <span className="text-white font-bold">Alder Heritage Homes</span>
              </div>
              <p className="text-sm leading-relaxed">Licensed cash home buyer serving Fresno, Clovis, and the Central Valley. CA DRE #02219124.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></div>
                <div><Link href="/case-studies" className="hover:text-orange-400 transition-colors">Case Studies</Link></div>
                <div><Link href="/faq" className="hover:text-orange-400 transition-colors">FAQ</Link></div>
                <div><Link href="/about" className="hover:text-orange-400 transition-colors">About Connor</Link></div>
                <div><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Contact</h4>
              <div className="space-y-2 text-sm">
                <div><a href="tel:+15592818016" className="hover:text-orange-400 transition-colors">(559) 281-8016</a></div>
                <div><a href="mailto:connor@alderheritagehomes.com" className="hover:text-orange-400 transition-colors">connor@alderheritagehomes.com</a></div>
                <div>Fresno, CA 93650</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <span>© {new Date().getFullYear()} Alder Heritage Homes. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
