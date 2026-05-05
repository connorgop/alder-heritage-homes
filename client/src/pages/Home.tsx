import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock, DollarSign, AlertCircle, MapPin, Phone, Award } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  useEffect(() => {
    // Add JSON-LD schema markup for LocalBusiness
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.alderheritagehomes.com',
      'name': 'Alder Heritage Homes',
      'image': 'https://www.alderheritagehomes.com/logo.png',
      'description': 'Licensed cash home buyer in Fresno, Clovis, and Central Valley. We buy houses fast - 24-hour cash offers, 3-day close, no fees. Specializing in probate homes, inherited properties, and distressed sales.',
      'url': 'https://www.alderheritagehomes.com',
      'telephone': '+15592818016',
      'email': 'connor@alderheritagehomes.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Fresno, CA',
        'addressLocality': 'Fresno',
        'addressRegion': 'CA',
        'postalCode': '93650',
        'addressCountry': 'US'
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Fresno' },
        { '@type': 'City', 'name': 'Clovis' },
        { '@type': 'City', 'name': 'Visalia' },
        { '@type': 'City', 'name': 'Bakersfield' },
        { '@type': 'City', 'name': 'Tulare' },
        { '@type': 'City', 'name': 'Hanford' }
      ],
      'priceRange': '$$',
      'sameAs': [
        'https://www.facebook.com/alderheritagehomes',
        'https://www.instagram.com/alderheritagehomes'
      ],
      'knowsAbout': ['Cash home buying', 'Probate home sales', 'Inherited property sales', 'Distressed property sales'],
      'license': 'California DRE #02219124'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Add FAQSchema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How quickly can you make a cash offer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We provide a written cash offer within 24 hours of reviewing your property details.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How fast can you close on a home?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We can close in as little as 3 days. We have the funds ready and can move quickly to meet your timeline.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are there any hidden fees or commissions?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. We pay zero commissions and zero hidden fees. You receive the full cash offer amount.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you buy homes in any condition?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. We buy homes as-is, whether they need repairs, have liens, or are in probate.'
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Update meta tags
    document.title = 'Cash Home Buyer Fresno | Alder Heritage Homes | 24hr Offers';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Licensed cash home buyer in Fresno, Clovis & Central Valley. Get a real cash offer in 24 hours. No fees, no wholesalers. Specializing in probate and inherited homes.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚠ WARNING: 99% of Cash Buyers Are Wholesalers
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Get a Real Cash Offer
          </h1>
          <p className="text-xl mb-8 text-orange-100">
            From a licensed buyer who actually has the money. No wholesalers. No assignment contracts.
          </p>
          <Link href="/ads/lead-capture">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg font-semibold px-8 py-6">
              Get Your Cash Offer Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">24hr</div>
              <div className="text-gray-700 font-semibold">Cash Offer</div>
              <p className="text-sm text-gray-600 mt-2">Written offer within 24 hours</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">3 days</div>
              <div className="text-gray-700 font-semibold">Fast Close</div>
              <p className="text-sm text-gray-600 mt-2">Close in as little as 3 days</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">$0</div>
              <div className="text-gray-700 font-semibold">Fees</div>
              <p className="text-sm text-gray-600 mt-2">Zero commissions, zero hidden fees</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">700+</div>
              <div className="text-gray-700 font-semibold">Homes Bought</div>
              <p className="text-sm text-gray-600 mt-2">Real experience, real results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Alder Heritage Homes?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Licensed Real Estate Agent</h3>
                  <p className="text-gray-600">California DRE #02219124. Real capital, real offers. Not a wholesaler.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Proof of Funds in 24 Hours</h3>
                  <p className="text-gray-600">We have the money ready. No bank approval needed. No delays.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">No Assignment Contracts</h3>
                  <p className="text-gray-600">We buy your home directly. No middlemen. No surprises at closing.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Price Match Guarantee</h3>
                  <p className="text-gray-600">If you get a higher offer, we'll match it. Guaranteed.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="bg-red-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How to Spot a Wholesaler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Contract says "and/or assignee"</h3>
                  <p className="text-gray-600 text-sm">This means they can sell your contract to someone else without your knowledge.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Can't provide proof of funds</h3>
                  <p className="text-gray-600 text-sm">Real buyers have money ready. If they can't prove it in 24 hours, they're wholesaling.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Takes 30+ days to close</h3>
                  <p className="text-gray-600 text-sm">Wholesalers need time to find a buyer. Real cash buyers close in 3-7 days.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Asks for price reduction at closing</h3>
                  <p className="text-gray-600 text-sm">This is a classic wholesaler tactic. They found a buyer and are trying to make more money.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/competitor-warning">
              <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                Learn About Specific Wholesalers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">How quickly can you make a cash offer?</h3>
              <p className="text-gray-600">We provide a written cash offer within 24 hours of reviewing your property details. Just fill out our form and we'll get back to you right away.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">How fast can you close on a home?</h3>
              <p className="text-gray-600">We can close in as little as 3 days. We have the funds ready and can move quickly to meet your timeline. No bank approval needed.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Are there any hidden fees or commissions?</h3>
              <p className="text-gray-600">No. We pay zero commissions and zero hidden fees. You receive the full cash offer amount. What we offer is what you get.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Do you buy homes in any condition?</h3>
              <p className="text-gray-600">Yes. We buy homes as-is, whether they need repairs, have liens, are in probate, or are inherited. No inspections, no appraisals, no surprises.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
              <p className="text-gray-600">We buy homes throughout the Central Valley including Fresno, Clovis, Visalia, Bakersfield, Tulare, Hanford, and surrounding areas.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Sell Your Home?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Get a real cash offer in 24 hours. No wholesalers. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ads/lead-capture">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg font-semibold px-8 py-6">
                Get Your Cash Offer
              </Button>
            </Link>
            <a href="tel:+15592818016">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700 text-lg font-semibold px-8 py-6">
                Call (559) 281-8016
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
