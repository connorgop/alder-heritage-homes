/* ============================================================
   TERMS OF SERVICE — /terms-of-service
   10DLC compliant — required for Twilio SMS registration
   Covers: website use, SMS consent, TCPA compliance, privacy
   ============================================================ */
import PageMeta from "@/components/PageMeta";
import { Link } from "wouter";

const COMPANY = "Alder Heritage Homes";
const DBA = "Alder Heritage Homes";
const PHONE = "(559) 281-8016";
const EMAIL = "connor@alderheritagehomes.com";
const WEBSITE = "www.alderheritagehomes.com";
const EFFECTIVE_DATE = "April 1, 2026";

export default function TermsOfService() {
  return (
    <div style={{ background: "oklch(0.98 0.005 60)", minHeight: "100vh" }}>
      <PageMeta
        title="Terms of Service | Alder Heritage Homes"
        description="Terms of Service for Alder Heritage Homes — including SMS messaging consent, TCPA compliance, and website use terms."
        path="/terms-of-service"
      />

      {/* Header */}
      <header className="border-b" style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(0.30 0.01 60)" }}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ background: "oklch(0.55 0.13 42)", color: "white", fontFamily: "'Lora', serif" }}>A</div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "'Lora', serif" }}>Alder Heritage Homes</div>
            </div>
          </Link>
          <Link href="/">
            <span className="text-sm underline cursor-pointer" style={{ color: "oklch(0.75 0.13 42)", fontFamily: "'Nunito Sans', sans-serif" }}>← Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>
            Terms of Service
          </h1>
          <p className="text-sm" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            Effective Date: {EFFECTIVE_DATE} · Last Updated: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="prose max-w-none" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)", lineHeight: 1.8 }}>

          <Section title="1. Agreement to Terms">
            <p>By accessing or using the website located at <strong>{WEBSITE}</strong> (the "Site"), submitting any form on the Site, or communicating with <strong>{COMPANY}</strong> ("{DBA}", "we", "us", or "our") by any means, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site or submit any information to us.</p>
            <p>These Terms apply to all visitors, users, and others who access or use the Site, including individuals who submit contact forms, request cash offers, or opt in to receive SMS messages from us.</p>
          </Section>

          <Section title="2. Description of Services">
            <p>{COMPANY} is a licensed California real estate company (DRE #02219124) that purchases residential real estate directly from homeowners in Fresno, Tulare, Kings, Madera, Merced, and Stanislaus counties. We also provide real estate brokerage services as a licensed California real estate agent.</p>
            <p>Our services include, but are not limited to: making cash offers to purchase homes, providing free Broker Opinions of Value, assisting homeowners in evaluating their options, and connecting sellers with appropriate real estate resources.</p>
          </Section>

          <Section title="3. SMS / Text Message Communications — TCPA Consent">
            <p>By submitting any form on this Site — including but not limited to the "Get My Cash Offer" form, the contact form, or any other lead capture form — you expressly consent to receive text messages (SMS) from <strong>{COMPANY}</strong> at the phone number you provide. This consent is not a condition of any purchase or service.</p>

            <SubSection title="3.1 Message Types">
              <p>By opting in, you may receive the following types of SMS messages from us:</p>
              <ul>
                <li>Acknowledgment of your inquiry and confirmation that we received your information</li>
                <li>Follow-up messages regarding your cash offer request or property evaluation</li>
                <li>Scheduling messages to arrange a property walkthrough or phone consultation</li>
                <li>Updates on the status of your offer or transaction</li>
                <li>Informational messages about the home selling process in your area</li>
                <li>Responses to questions you have asked us via text</li>
              </ul>
            </SubSection>

            <SubSection title="3.2 Message Frequency">
              <p>Message frequency varies based on your inquiry and the stage of your transaction. You may receive up to <strong>10 messages per month</strong> from us. Most contacts receive 2–5 messages total during the inquiry and offer process.</p>
            </SubSection>

            <SubSection title="3.3 Message and Data Rates">
              <p><strong>Message and data rates may apply.</strong> Standard SMS and data rates from your mobile carrier apply to all messages sent and received. {COMPANY} does not charge any fees for SMS messages, but your carrier's standard rates apply.</p>
            </SubSection>

            <SubSection title="3.4 How to Opt Out">
              <p>You may opt out of receiving SMS messages from us at any time by replying <strong>STOP</strong> to any message we send you. After you send STOP, you will receive one final confirmation message and no further messages will be sent. You may also opt out by:</p>
              <ul>
                <li>Calling us at <strong>{PHONE}</strong> and requesting to be removed from our SMS list</li>
                <li>Emailing us at <strong>{EMAIL}</strong> with the subject line "SMS Opt Out"</li>
              </ul>
            </SubSection>

            <SubSection title="3.5 How to Get Help">
              <p>For help or information about our SMS program, reply <strong>HELP</strong> to any message, or contact us at <strong>{PHONE}</strong> or <strong>{EMAIL}</strong>.</p>
            </SubSection>

            <SubSection title="3.6 Consent Is Not Required">
              <p>Your consent to receive SMS messages is <strong>not required</strong> as a condition of purchasing any property, receiving a cash offer, or using any of our services. You may contact us by phone or email without providing SMS consent.</p>
            </SubSection>

            <SubSection title="3.7 No Sharing of Phone Numbers">
              <p>We will not share, sell, or transfer your mobile phone number to any third party for the purpose of marketing without your express written consent. Your phone number is used solely to communicate with you about your inquiry and our services.</p>
            </SubSection>
          </Section>

          <Section title="4. Privacy and Data Collection">
            <p>Your privacy is important to us. Please review our <Link href="/privacy-policy"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>Privacy Policy</span></Link>, which is incorporated into these Terms by reference and describes how we collect, use, and protect your personal information.</p>
            <p>By using the Site and submitting information to us, you consent to the collection and use of your information as described in our Privacy Policy.</p>
          </Section>

          <Section title="5. Accuracy of Information">
            <p>We strive to provide accurate and up-to-date information on this Site. However, we make no warranties or representations regarding the accuracy, completeness, or timeliness of any content on the Site. Real estate market conditions, property values, and legal requirements change frequently. Nothing on this Site constitutes legal, financial, or real estate advice. You should consult with appropriate professionals before making any real estate decisions.</p>
          </Section>

          <Section title="6. No Obligation">
            <p>Submitting a form on this Site, requesting a cash offer, or communicating with us does not create any obligation on your part to sell your property or on our part to purchase it. Any offer we make is subject to property inspection, title review, and our internal underwriting criteria. You are free to accept, reject, or negotiate any offer we make.</p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>All content on this Site — including text, graphics, logos, images, and software — is the property of {COMPANY} or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our express written permission.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, {COMPANY} and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site, your reliance on any information provided on the Site, or any transaction or relationship between you and {COMPANY}.</p>
            <p>Our total liability to you for any claims arising from these Terms or your use of the Site shall not exceed $100.</p>
          </Section>

          <Section title="9. Indemnification">
            <p>You agree to indemnify, defend, and hold harmless {COMPANY} and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the Site, your violation of these Terms, or your violation of any rights of another.</p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>The Site may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </Section>

          <Section title="11. Governing Law">
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in Fresno County, California.</p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>We reserve the right to update or modify these Terms at any time. We will post the updated Terms on this page with a new effective date. Your continued use of the Site after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.</p>
          </Section>

          <Section title="13. Contact Us">
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div className="rounded-xl p-5 mt-3" style={{ background: "oklch(0.94 0.01 60)", border: "1px solid oklch(0.88 0.01 60)" }}>
              <p className="font-bold mb-1" style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lora', serif" }}>{COMPANY}</p>
              <p>Phone: <a href="tel:5592818016" className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a></p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>{EMAIL}</a></p>
              <p>Website: <a href={`https://${WEBSITE}`} className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>{WEBSITE}</a></p>
              <p>DRE License: #02219124</p>
            </div>
          </Section>
        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-6 border-t flex flex-wrap gap-4 text-sm" style={{ borderColor: "oklch(0.88 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}>
          <Link href="/privacy-policy"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>Privacy Policy</span></Link>
          <Link href="/sms-consent"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>SMS Consent</span></Link>
          <Link href="/"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>Back to Home</span></Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="ml-4 mt-3">
      <h3 className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.30 0.01 60)" }}>{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
