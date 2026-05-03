import React from "react";

export default function WhyILeft() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold">Why I Left GREimagined: The Truth About Wholesaling</h1>
          <p className="text-lg text-amber-100">
            I was VP at GREimagined, one of the largest cash buyer companies in the Central Valley. I left because they were wholesaling and lying to homeowners. I couldn't be part of it anymore.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>My Story: From VP at GREimagined to Ethical Buyer</h2>
          <p>
            I spent years as VP at GREimagined, one of the largest cash buyer companies in the Central Valley. We were successful. We closed deals. We made money. But something was deeply wrong.
          </p>

          <h2>The Problem: GREimagined's Wholesaling Scheme</h2>
          <p>
            At GREimagined, we were wholesaling properties — and hiding it from sellers. Here's exactly how it worked:
          </p>
          <ol>
            <li>We'd contact a homeowner and say "we buy homes for cash."</li>
            <li>We'd make an offer and get them to sign a contract.</li>
            <li>We'd tell them we had the cash and could close in 7 days.</li>
            <li>Behind the scenes, we'd search for a buyer willing to pay more.</li>
            <li>If we found a buyer, we'd "assign" the contract to them and take a cut.</li>
            <li>If we couldn't find a buyer at the agreed price, we'd call the homeowner and ask for a price reduction.</li>
          </ol>

          <p>
            The homeowner thought they were selling to GREimagined. They weren't. They were selling to whoever we could find. And if we couldn't find a buyer, they got a price cut at the last minute. This was standard practice at GREimagined.
          </p>

          <h2>The Lie: "We Have Cash"</h2>
          <p>
            We told homeowners "we have cash and can close in 7 days." That was a lie. We didn't have the cash. We had a rolodex of investors. We were middlemen, not buyers.
          </p>

          <p>
            Homeowners trusted us because we said we were direct buyers. We weren't. We were wholesalers pretending to be direct buyers.
          </p>

          <h2>The Last Straw: A Widow's Story</h2>
          <p>
            I remember a widow who inherited her husband's house. She was 73 years old. She didn't want to be a landlord. She wanted cash and peace of mind.
          </p>

          <p>
            We made her an offer for $250,000. She signed. We told her we'd close in 7 days.
          </p>

          <p>
            On day 6, we called her and said "we need to reduce the price to $235,000 or the deal falls through." She was devastated. She had already made plans for the money. She needed that $250,000.
          </p>

          <p>
            She asked why the price was changing. We made up an excuse about inspection issues. It was a lie. We just couldn't find a buyer at $250,000.
          </p>

          <p>
            She accepted the $235,000 because she had no choice. She was out $15,000 because of our wholesaling scheme.
          </p>

          <p>
            That's when I decided to leave.
          </p>

          <h2>Starting Alder Heritage Homes</h2>
          <p>
            I started Alder Heritage Homes with one principle: we buy homes ourselves. No wholesaling. No assignment contracts. No last-minute price cuts.
          </p>

          <p>
            When I make an offer, I have the cash. When I say we close in 3 days, we close in 3 days. When I agree to a price, that's the price you get.
          </p>

          <h2>Our Guarantee</h2>
          <p>
            <strong>Price Match Guarantee:</strong> We will pay more than any wholesaler or competitor. If you get a higher offer, we'll match it or beat it.
          </p>

          <p>
            <strong>No Last-Minute Price Cuts:</strong> The price you agree to is the price you receive at closing. No surprises. No excuses.
          </p>

          <p>
            <strong>3-Day Close:</strong> We have the cash. We close fast. No contingencies. No delays.
          </p>

          <p>
            <strong>Licensed Real Estate Agent:</strong> I'm a licensed CA real estate agent (DRE #02219124). I'm regulated and accountable. I can't lie to you without legal consequences.
          </p>

          <h2>The Bottom Line: GREimagined, 559 Home Buyers, and All the Rest</h2>
          <p>
            There are a lot of wholesalers in the Central Valley pretending to be direct buyers. GREimagined is one of them. 559 Home Buyers is another. Osborne Homes. KO Homes. Pinnacle. They're all wholesalers.
          </p>

          <p>
            They'll tell you they have cash. They don't. They'll tell you they'll close in 7 days. They won't. They'll tell you the price is locked in. It's not. They'll tell you they're direct buyers. They're not.
          </p>

          <p>
            I worked at GREimagined long enough to know how the game works. I left because I couldn't lie to homeowners anymore. I built Alder Heritage Homes to be the opposite of that.
          </p>

          <p>
            If you're selling your home, you deserve a buyer who has cash, closes fast, and keeps their word. That's what we do.
          </p>

          <div className="mt-12 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 p-8 text-center text-white">
            <h3 className="mb-4 text-2xl font-bold">Ready to Sell?</h3>
            <p className="mb-6 text-lg">Get a free cash offer from Alder Heritage Homes. No wholesalers. No lies. Just a fair offer from someone who actually has the cash.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href="/contact" className="rounded-lg bg-white px-8 py-3 font-bold text-amber-600 hover:bg-gray-100 transition-colors">
                Talk to Connor
              </a>
              <a href="tel:(559)281-8016" className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                Call (559) 281-8016
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
