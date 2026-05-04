import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock, DollarSign, AlertCircle } from 'lucide-react';

export default function LeadCapture() {
  useEffect(() => {
    // Load Tidio live chat widget
    const script = document.createElement('script');
    script.src = 'https://code.tidio.co/ci_fed0e8e3acfe483aaf69342512f602d8.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    situation: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send form data to backend
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center shadow-lg">
          <div className="mb-6">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Got It!</h1>
            <p className="text-lg text-gray-600 mb-4">
              We received your information
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-gray-700 font-semibold mb-3">What Happens Next:</p>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">1.</span>
                <span>Connor will review your property details</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">2.</span>
                <span>You'll get a call or text within 24 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">3.</span>
                <span>Written cash offer within 24 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">4.</span>
                <span>Close in as little as 3 days</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              <strong>Can't wait?</strong> Call Connor directly:
            </p>
            <a href="tel:+15592818016" className="inline-block">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Call (559) 281-8016
              </Button>
            </a>
          </div>

          <p className="text-sm text-gray-500">
            We never spam. Your information is secure and confidential.
          </p>
        </Card>
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

        {/* Main Form Card */}
        <Card className="shadow-xl mb-8">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tell Us About Yourself
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Smith"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(559) 123-4567"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.firstName || !formData.lastName || !formData.phone}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6 font-semibold"
                  >
                    Next: Tell Us About Your Home
                  </Button>
                </div>
              )}

              {/* Step 2: Property Info */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tell Us About Your Home
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Fresno"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What's Your Situation? *
                    </label>
                    <Textarea
                      name="situation"
                      value={formData.situation}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're selling (e.g., foreclosure, probate, inherited home, need to sell fast, etc.)"
                      required
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1 text-lg py-6 font-semibold"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={!formData.address || !formData.city || !formData.situation || loading}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white text-lg py-6 font-semibold"
                    >
                      {loading ? 'Submitting...' : 'Get My Cash Offer'}
                    </Button>
                  </div>
                </div>
              )}
            </form>
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
          <a href="tel:+15592818016">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
              Call (559) 281-8016
            </Button>
          </a>
          <p className="text-xs text-gray-500 mt-4">
            We never spam. Your information is secure and confidential.
          </p>
        </div>
      </div>
    </div>
  );
}
