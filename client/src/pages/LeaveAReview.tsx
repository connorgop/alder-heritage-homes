import { useEffect } from "react";
import { Link } from "wouter";

export default function LeaveAReview() {
  useEffect(() => {
    document.title = "Leave a Review | Alder Heritage Homes";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Had a good experience with Alder Heritage Homes? Leave us a Google review — it takes less than 60 seconds and helps other homeowners find us.");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://www.alderheritagehomes.com/leave-a-review");
  }, []);

  const GOOGLE_REVIEW_URL = "https://g.page/r/DwOEpOT170I/review";

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.01_60)]">
      {/* Hero */}
      <section className="bg-[oklch(0.22_0.04_45)] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">⭐</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Leave Us a Review
          </h1>
          <p className="text-lg text-[oklch(0.85_0.05_60)] max-w-xl mx-auto">
            Your experience matters — and it helps other Central Valley homeowners find a buyer they can trust.
          </p>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center border border-[oklch(0.90_0.02_60)]">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-10 h-10 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <h2 className="font-serif text-3xl font-bold text-[oklch(0.22_0.04_45)] mb-4">
              Share Your Experience on Google
            </h2>
            <p className="text-[oklch(0.40_0.03_45)] mb-8 text-lg leading-relaxed">
              It takes less than 60 seconds. Your honest review helps other homeowners in Fresno, Clovis, Visalia, and across the Central Valley find a cash buyer they can trust.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[oklch(0.55_0.15_42)] hover:bg-[oklch(0.50_0.15_42)] text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Write a Google Review
            </a>
            <p className="text-sm text-[oklch(0.55_0.03_45)] mt-4">
              Opens Google Reviews in a new tab
            </p>
          </div>
        </div>
      </section>

      {/* Why reviews matter */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[oklch(0.22_0.04_45)] mb-8 text-center">
            Why Your Review Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Helps Homeowners in Need",
                desc: "Many sellers are in difficult situations — foreclosure, divorce, probate. Your review helps them find a trustworthy buyer when they need it most."
              },
              {
                icon: "🔍",
                title: "Improves Our Google Ranking",
                desc: "Reviews directly impact how high we appear in local search results. More visibility means more homeowners get help — and better offers for everyone."
              },
              {
                icon: "🤝",
                title: "Builds Community Trust",
                desc: "Fresno and the Central Valley deserve local buyers who are honest and fair. Your review helps us stand out from out-of-state wholesalers."
              }
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-[oklch(0.97_0.01_60)] border border-[oklch(0.92_0.02_60)]">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[oklch(0.22_0.04_45)] mb-2">{item.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.03_45)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to write */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[oklch(0.22_0.04_45)] mb-6 text-center">
            Not Sure What to Write?
          </h2>
          <p className="text-center text-[oklch(0.40_0.03_45)] mb-8">
            Just be honest about your experience. Here are a few prompts to get you started:
          </p>
          <div className="space-y-4">
            {[
              "How quickly did you receive your cash offer?",
              "Was the closing process smooth and on your timeline?",
              "How did Connor communicate throughout the process?",
              "Would you recommend Alder Heritage Homes to a friend or family member?",
              "What was your situation before selling, and how did the sale help?"
            ].map((prompt, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-[oklch(0.90_0.02_60)]">
                <span className="text-[oklch(0.55_0.15_42)] font-bold text-lg mt-0.5">{i + 1}.</span>
                <p className="text-[oklch(0.35_0.03_45)]">{prompt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA repeat */}
      <section className="py-16 px-4 bg-[oklch(0.22_0.04_45)] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Share Your Experience?</h2>
          <p className="text-[oklch(0.85_0.05_60)] mb-8">Click below to open Google Reviews. It takes less than 60 seconds.</p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[oklch(0.55_0.15_42)] hover:bg-[oklch(0.50_0.15_42)] text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-200"
          >
            ⭐ Leave a Google Review
          </a>
          <p className="mt-8 text-[oklch(0.70_0.04_60)] text-sm">
            Questions? Call or text Connor directly at{" "}
            <a href="tel:5592818016" className="text-white underline">(559) 281-8016</a>
          </p>
        </div>
      </section>

      {/* Back link */}
      <div className="py-8 px-4 text-center">
        <Link href="/" className="text-[oklch(0.45_0.10_42)] hover:text-[oklch(0.35_0.10_42)] underline text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
