import React, { useState } from "react";
import { Download, CheckCircle2, AlertTriangle, ArrowRight, Mail } from "lucide-react";
import PageMeta from "@/components/PageMeta";

export default function LeadMagnet() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your backend and trigger a download
    console.log("Lead magnet form submitted:", formData);
    setSubmitted(true);
    // Simulate download trigger
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/5-CRITICAL-MISTAKES-GUIDE.pdf";
      link.download = "5-Critical-Mistakes-to-Avoid-When-Selling-Your-House-for-Cash.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-4 py-12">
        <PageMeta
          title="Cash Sale Guide Download"
          description="Download the Fresno cash home sale guide and learn the mistakes sellers should avoid before signing with any cash buyer."
          path="/free-guide"
          noIndex
        />
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Thank You!</h1>
          <p className="mb-6 text-lg text-gray-700">
            Your PDF guide is downloading now. Check your downloads folder.
          </p>
          <p className="mb-8 text-gray-600">
            We've also sent a copy to <strong>{formData.email}</strong>
          </p>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What's Next?</h2>
            <p className="mb-6 text-gray-700">
              Now that you know the 5 critical mistakes, let's make sure you don't fall into any of them.
            </p>
            <p className="mb-6 text-gray-700">
              <strong>Get a free cash offer from Alder Heritage Homes.</strong> We'll show you exactly what your home is worth and how much you'll actually receive after all costs.
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Licensed CA Real Estate Agent (DRE #02219124)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Proof of Funds in 24 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Close in 3 Days</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Price Match Guarantee</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:5592818016"
                className="rounded-lg bg-green-600 px-8 py-3 font-bold text-white hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Call (559) 281-8016
              </a>
              <a
                href="/contact"
                className="rounded-lg border-2 border-green-600 px-8 py-3 font-bold text-green-600 hover:bg-green-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get My Cash Offer <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Questions? Call Connor at <a href="tel:5592818016" className="font-bold text-green-600 hover:underline">(559) 281-8016</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <PageMeta
        title="Free Cash Home Sale Guide Fresno"
        description="Download the Fresno cash home sale guide. Learn how to compare buyers, verify proof of funds, avoid lowball offers, and protect your net proceeds."
        path="/free-guide"
      />
      <div className="grid gap-8 mx-auto max-w-5xl md:grid-cols-2">
        {/* LEFT SIDE - CONTENT */}
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 w-fit">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <span className="text-sm font-semibold text-red-700">FREE GUIDE</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            5 Critical Mistakes to Avoid When Selling Your House for Cash
          </h1>

          <p className="mb-6 text-lg text-gray-700">
            99% of "cash buyers" are actually wholesalers. They don't have cash. They don't buy homes. They trap sellers with contracts and take huge cuts.
          </p>

          <p className="mb-8 text-gray-700">
            This guide reveals the 5 critical mistakes that allow wholesalers to trap sellers—and how to protect yourself.
          </p>
          <p className="mb-6 text-gray-700">
            It is written for Fresno and Central Valley homeowners who need a clean decision before they sign: inherited houses, tired rentals, foreclosure timelines, deed problems, title issues, and homes that need repairs before a normal buyer will qualify.
          </p>
          <p className="mb-8 text-gray-700">
            Use it to compare a cash offer against a traditional listing, ask better questions, and understand what should be handled through escrow before closing.
          </p>

          <div className="mb-8 space-y-3">
            <h3 className="font-bold text-gray-900">Inside This Guide:</h3>
            <div className="space-y-2">
              {[
                "Mistake #1: Trusting a Wholesaler Instead of a Direct Buyer",
                "Mistake #2: Not Getting Proof of Funds Before Signing",
                "Mistake #3: Accepting the First Offer Without Comparison",
                "Mistake #4: Ignoring Red Flags in the Contract",
                "Mistake #5: Not Understanding Your Net Proceeds",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 rounded-lg bg-blue-50 p-4 border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Bonus:</strong> Learn how to calculate your actual net proceeds and avoid last-minute price cuts.
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Download className="h-5 w-5" />
            <span className="text-sm">PDF Guide • 8 Pages • Free Download</span>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="flex items-center">
          <div className="w-full rounded-lg bg-white p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Get Your Free Guide</h2>

            {formStep === 1 ? (
              <form onSubmit={(e) => { e.preventDefault(); setFormStep(2); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                  <p className="mt-1 text-xs text-gray-500">We'll send the PDF to this email</p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-600 px-4 py-3 font-bold text-white hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(559) 123-4567"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                  >
                    <option value="">Select a city</option>
                    <option value="fresno">Fresno</option>
                    <option value="clovis">Clovis</option>
                    <option value="visalia">Visalia</option>
                    <option value="bakersfield">Bakersfield</option>
                    <option value="hanford">Hanford</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-600 px-4 py-3 font-bold text-white hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download My Free Guide
                </button>

                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="w-full text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ← Back
                </button>
              </form>
            )}

            <div className="mt-6 border-t pt-6">
              <p className="text-xs text-gray-600 text-center">
                We respect your privacy. No spam, no sharing your info.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div className="mx-auto max-w-5xl mt-16">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
            Join 1000+ Central Valley Homeowners Who've Learned the Truth
          </h3>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">700+</div>
              <p className="text-sm text-gray-700">Homes Purchased</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">3 Days</div>
              <p className="text-sm text-gray-700">Average Close</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$0</div>
              <p className="text-sm text-gray-700">Fees or Commissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
