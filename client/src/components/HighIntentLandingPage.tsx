import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Clock, FileCheck2, Phone, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import PageMeta from "@/components/PageMeta";
import SchemaMarkup, { faqPageSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";
import { formatLeadAttribution } from "@/lib/attribution";
import { trpc } from "@/lib/trpc";

export interface HighIntentLandingPageProps {
  path: string;
  source: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  urgency: string;
  bullets: string[];
  proof: string[];
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
  formTitle?: string;
  situationDefault: string;
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "Unknown",
    lastName: parts.slice(1).join(" ") || "Seller",
  };
}

export default function HighIntentLandingPage({
  path,
  source,
  eyebrow,
  title,
  description,
  metaTitle,
  metaDescription,
  heroImage,
  heroImageAlt,
  urgency,
  bullets,
  proof,
  sections,
  faqs,
  relatedLinks,
  formTitle = "Get a Same-Day Cash Offer",
  situationDefault,
}: HighIntentLandingPageProps) {
  const { trackFormSubmit, trackPhoneClick, trackAddressSubmit } = useConversionTracking();
  const trackingPhone = useTrackingPhone();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    situation: situationDefault,
  });
  const [submitted, setSubmitted] = useState(false);

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      trackFormSubmit();
      setSubmitted(true);
    },
    onError: (err) => {
      console.error("High intent lead submission error:", err);
      toast.error("Something went wrong. Call Connor directly or try again.");
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.city.trim()) {
      toast.error("Name, phone, address, and city are required.");
      return;
    }

    const { firstName, lastName } = splitName(form.name);
    trackAddressSubmit();
    submitLead.mutate({
      firstName,
      lastName,
      phone: form.phone,
      email: form.email,
      address: form.address,
      city: form.city,
      situation: `${form.situation}\n\nLanding page: ${path}\nAttribution: ${formatLeadAttribution()}`,
      source,
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.015 85)" }}>
      <PageMeta title={metaTitle} description={metaDescription} path={path} />
      <SchemaMarkup schema={localBusinessSchema()} id={`${source}-business`} />
      <SchemaMarkup schema={faqPageSchema(faqs)} id={`${source}-faq`} />

      <header className="sticky top-0 z-50 border-b" style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(1 0 0 / 0.10)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white" style={{ background: "oklch(0.55 0.13 42)", fontFamily: "'Lora', serif" }}>
              A
            </div>
            <div>
              <div className="text-sm font-bold text-white" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
              <div className="text-xs" style={{ color: "oklch(0.76 0.02 85)", fontFamily: "'DM Mono', monospace" }}>Licensed CA Agent - DRE #02219124</div>
            </div>
          </Link>
          <a href={trackingPhone.href} onClick={trackPhoneClick} className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
            <Phone size={16} /> {trackingPhone.label}
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden" style={{ background: "oklch(0.22 0.01 60)" }}>
          <div className="absolute inset-0">
            <img src={heroImage} alt={heroImageAlt} className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(115deg, oklch(0.22 0.01 60 / 0.97) 0%, oklch(0.22 0.01 60 / 0.78) 55%, oklch(0.22 0.01 60 / 0.55) 100%)" }} />
          </div>
          <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase" style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>
                {eyebrow}
              </div>
              <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: "'Lora', serif" }}>
                {title}
              </h1>
              <p className="mb-6 max-w-2xl text-lg leading-relaxed" style={{ color: "oklch(0.84 0.01 60)" }}>
                {description}
              </p>
              <div className="mb-7 rounded-xl border p-4" style={{ borderColor: "oklch(0.70 0.12 42 / 0.35)", background: "oklch(0.30 0.02 60 / 0.55)" }}>
                <p className="text-sm font-bold text-white">{urgency}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.86 0.01 60)" }}>
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: "oklch(0.68 0.13 42)" }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="offer-form" className="rounded-2xl p-5 shadow-2xl md:p-6" style={{ background: "oklch(0.99 0.005 85)" }}>
              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 size={54} className="mx-auto mb-4" style={{ color: "oklch(0.48 0.12 155)" }} />
                  <h2 className="mb-2 text-2xl font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>Request received</h2>
                  <p className="mb-5 text-sm" style={{ color: "oklch(0.42 0.01 60)" }}>Connor will review the property and call you as soon as possible.</p>
                  <a href={trackingPhone.href} onClick={trackPhoneClick} className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
                    <Phone size={16} /> Call now instead
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-5 text-center">
                    <h2 className="mb-1 text-2xl font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{formTitle}</h2>
                    <p className="text-sm" style={{ color: "oklch(0.48 0.01 60)" }}>No pressure. No repairs. No obligation.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input className="w-full rounded-lg border px-4 py-3 text-sm" required placeholder="Your name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
                    <input className="w-full rounded-lg border px-4 py-3 text-sm" required placeholder="Phone number" type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} />
                    <input className="w-full rounded-lg border px-4 py-3 text-sm" placeholder="Email optional" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
                    <input className="w-full rounded-lg border px-4 py-3 text-sm" required placeholder="Property address" value={form.address} onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))} />
                    <input className="w-full rounded-lg border px-4 py-3 text-sm" required placeholder="City" value={form.city} onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))} />
                    <textarea className="min-h-24 w-full rounded-lg border px-4 py-3 text-sm" value={form.situation} onChange={(e) => setForm((p) => ({ ...p, situation: e.target.value }))} />
                    <button type="submit" disabled={submitLead.isPending} className="flex w-full items-center justify-center gap-2 rounded-lg px-5 py-4 text-base font-bold text-white disabled:opacity-60" style={{ background: "oklch(0.55 0.13 42)" }}>
                      {submitLead.isPending ? "Sending..." : "Get My Cash Offer"} <ArrowRight size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="border-b py-6" style={{ background: "white", borderColor: "oklch(0.90 0.01 85)" }}>
          <div className="mx-auto grid max-w-6xl gap-3 px-4 md:grid-cols-3">
            {proof.map((item, index) => {
              const Icon = index === 0 ? ShieldCheck : index === 1 ? FileCheck2 : Clock;
              return (
                <div key={item} className="flex items-start gap-3 rounded-lg border p-4" style={{ borderColor: "oklch(0.90 0.01 85)" }}>
                  <Icon size={20} className="mt-0.5 shrink-0" style={{ color: "oklch(0.48 0.13 42)" }} />
                  <p className="text-sm font-semibold" style={{ color: "oklch(0.26 0.01 60)" }}>{item}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="mb-3 text-2xl font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{section.heading}</h2>
                <p className="leading-relaxed" style={{ color: "oklch(0.38 0.01 60)" }}>{section.body}</p>
              </article>
            ))}

            <div className="rounded-xl border p-6" style={{ background: "white", borderColor: "oklch(0.88 0.01 85)" }}>
              <h2 className="mb-4 text-2xl font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>Questions sellers ask before calling</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="mb-1 font-bold" style={{ color: "oklch(0.24 0.01 60)" }}>{faq.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.01 60)" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-xl border p-5" style={{ background: "white", borderColor: "oklch(0.88 0.01 85)" }}>
            <h2 className="mb-4 text-lg font-bold" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>Related seller help</h2>
            <div className="space-y-2">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-lg border px-3 py-3 text-sm font-semibold transition-colors hover:bg-stone-50" style={{ borderColor: "oklch(0.90 0.01 85)", color: "oklch(0.32 0.01 60)" }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <a href="#offer-form" className="mt-5 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white" style={{ background: "oklch(0.55 0.13 42)" }}>
              Start here <ArrowRight size={16} />
            </a>
          </aside>
        </section>
      </main>
    </div>
  );
}
