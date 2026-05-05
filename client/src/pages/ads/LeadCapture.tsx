import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock, DollarSign, AlertCircle, Phone } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function LeadCapture() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    situation: '',
  });

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (err) => {
      toast.error('Something went wrong. Please try again or call us directly.');
      console.error('Lead submission error:', err);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.address || !formData.city || !formData.situation) {
      toast.error('Please fill in all required fields.');
      return;
    }
    submitLead.mutate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      situation: formData.situation,
      source: 'lead-capture',
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center py-8 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            We Got Your Request!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Connor will call you within <strong>24 hours</strong> with a real cash offer.
          </p>
          <Card className="p-6 mb-6 text-left">
            <h3 className="font-bold text-gray-900 mb-3">What happens next:</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Connor reviews your property details (today)</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>You receive a written cash offer within 24 hours</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Close in as little as 3 days — on your timeline</span>
              </li>
            </ol>
          </Card>
          <p className="text-gray-600 mb-4">Can't wait? Call Connor directly:</p>
          <a href="tel:+15592818016" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors">
            <Phone className="w-5 h-5" />
            (559) 281-8016
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚠ WARNING: 99% of Cash Buyers Are Wholesalers
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Get a Real Cash Offer
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            From a licensed buyer who actually has the money
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-2xl font-bold text-green-600">24hr</div>
              <div className="text-xs text-gray-600">Cash Offer</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">3 days</div>
              <div className="text-xs text-gray-600">Fast Close</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">$0</div>
              <div className="text-xs text-gray-600">Fees</div>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className={`flex items-center gap-2 ${step === 1 ? 'text-orange-600 font-bold' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 1 ? 'bg-orange-600 text-white' : step > 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {step > 1 ? '✓' : '1'}
            </div>
            <span className="hidden sm:inline">Your Info</span>
          </div>
          <div className="h-px w-12 bg-gray-300" />
          <div className={`flex items-center gap-2 ${step === 2 ? 'text-orange-600 font-bold' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 2 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              2
            </div>
            <span className="hidden sm:inline">Your Home</span>
          </div>
        </div>

        {/* Main Form Card */}
        <Card className="shadow-xl mb-8">
          <div className="p-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tell Us About Yourself
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Smith"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(559) 123-4567"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-4 font-semibold rounded-lg transition-colors"
                >
                  Next: Tell Us About Your Home →
                </button>
              </form>
            )}

            {/* Step 2: Property Info */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tell Us About Your Home
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Fresno"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What's Your Situation? *
                  </label>
                  <textarea
                    name="situation"
                    value={formData.situation}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're selling (e.g., foreclosure, probate, inherited home, need to sell fast, etc.)"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 text-lg py-4 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitLead.isPending}
                    className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white text-lg py-4 font-semibold rounded-lg transition-colors"
                  >
                    {submitLead.isPending ? 'Sending...' : 'Get My Cash Offer'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Card>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Licensed Agent</h3>
            <p className="text-sm text-gray-600">
              California DRE #02219124 — Real capital, real offers
            </p>
          </Card>

          <Card className="p-6">
            <Clock className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Fast Close</h3>
            <p className="text-sm text-gray-600">
              Close in as little as 3 days — we have the funds
            </p>
          </Card>

          <Card className="p-6">
            <DollarSign className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">No Fees</h3>
            <p className="text-sm text-gray-600">
              Zero commissions, zero hidden fees — just cash
            </p>
          </Card>
        </div>

        {/* Red Flag Warning */}
        <Card className="bg-red-50 border-2 border-red-200 p-6 mb-8">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-900 mb-2">
                How to Know If You're Talking to a Wholesaler
              </h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>✗ Contract says "and/or assignee"</li>
                <li>✗ Can't provide proof of funds within 24 hours</li>
                <li>✗ Takes 30+ days to close</li>
                <li>✗ Asks for price reduction at last second</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Can't wait? Call Connor directly:
          </p>
          <a href="tel:+15592818016" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors">
            <Phone className="w-5 h-5" />
            Call (559) 281-8016
          </a>
          <p className="text-xs text-gray-500 mt-4">
            We never spam. Your information is secure and confidential.
          </p>
        </div>
      </div>
    </div>
  );
}
