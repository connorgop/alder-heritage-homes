/* ============================================================
   PRIVACY POLICY — /privacy-policy
   10DLC compliant — required for Twilio SMS registration
   Covers: data collection, SMS, CCPA, TCPA, opt-out
   ============================================================ */
import PageMeta from "@/components/PageMeta";
import { Link } from "wouter";

const COMPANY = "Alder Heritage Homes";
const PHONE = "(559) 281-8016";
const EMAIL = "connor@alderheritagehomes.com";
const WEBSITE = "www.alderheritagehomes.com";
const EFFECTIVE_DATE = "April 1, 2026";

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "oklch(0.98 0.005 60)", minHeight: "100vh" }}>
      <PageMeta
        title="Privacy Policy | Alder Heritage Homes"
        description="Privacy Policy for Alder Heritage Homes — how we collect, use, and protect your personal information, including SMS opt-in data."
        path="/privacy-policy"
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
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "'DM Mono', monospace" }}>
            Effective Date: {EFFECTIVE_DATE} · Last Updated: {EFFECTIVE_DATE}
          </p>
        </div>

        <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: "oklch(0.30 0.01 60)", lineHeight: 1.8 }}>

          <Section title="1. Introduction">
            <p>This Privacy Policy describes how <strong>{COMPANY}</strong> ("we", "us", or "our") collects, uses, shares, and protects personal information when you visit our website at <strong>{WEBSITE}</strong>, submit any form on our Site, or communicate with us by phone, email, or text message.</p>
            <p>We are committed to protecting your privacy and handling your personal information with care and transparency. Please read this policy carefully. By using our Site or providing us with your information, you consent to the practices described in this Privacy Policy.</p>
          </Section>

          <Section title="2. Information We Collect">
            <SubSection title="2.1 Information You Provide Directly">
              <p>When you submit a form on our Site, request a cash offer, or contact us, we may collect the following information:</p>
              <ul>
                <li><strong>Contact information:</strong> name, phone number, email address, and mailing address</li>
                <li><strong>Property information:</strong> property address, property condition, reason for selling, and timeline</li>
                <li><strong>Transaction information:</strong> mortgage balance, asking price expectations, and other details relevant to a potential purchase</li>
                <li><strong>Communications:</strong> the content of messages, emails, or texts you send us</li>
              </ul>
            </SubSection>

            <SubSection title="2.2 Information Collected Automatically">
              <p>When you visit our Site, we may automatically collect certain technical information, including:</p>
              <ul>
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or search query that brought you to our Site</li>
                <li>Device type (desktop, mobile, tablet)</li>
              </ul>
              <p>This information is collected using cookies and similar tracking technologies. You may disable cookies in your browser settings, though this may affect your ability to use certain features of the Site.</p>
            </SubSection>

            <SubSection title="2.3 SMS Opt-In Information">
              <p>If you provide your phone number and consent to receive SMS messages from us, we collect and store your mobile phone number and your consent status. <strong>We do not share your SMS opt-in data or phone number with any third party for marketing purposes.</strong> This data is used solely to communicate with you about your inquiry and our services.</p>
            </SubSection>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your inquiry and provide you with a cash offer for your property</li>
              <li>To communicate with you about your property, our services, and your transaction</li>
              <li>To send you SMS messages if you have opted in to receive them (see Section 4)</li>
              <li>To schedule property walkthroughs, phone consultations, or closings</li>
              <li>To improve our website, services, and marketing effectiveness</li>
              <li>To comply with applicable laws and regulations</li>
              <li>To protect the rights, property, and safety of {COMPANY}, our clients, and others</li>
            </ul>
            <p>We do not use your information for automated decision-making or profiling in ways that produce legal or similarly significant effects.</p>
          </Section>

          <Section title="4. SMS Messaging — TCPA Compliance">
            <p>By submitting a form on our Site and providing your phone number, you consent to receive text messages (SMS) from {COMPANY} at the number you provide. Your consent is not required as a condition of any purchase or service.</p>

            <div className="rounded-xl p-5 my-4" style={{ background: "oklch(0.45 0.12 155 / 0.08)", border: "2px solid oklch(0.45 0.12 155 / 0.30)" }}>
              <p className="font-bold mb-2" style={{ fontFamily: "'Lora', serif", color: "oklch(0.22 0.01 60)" }}>SMS Program Disclosures</p>
              <ul style={{ color: "oklch(0.30 0.01 60)" }}>
                <li><strong>Message types:</strong> Offer follow-ups, scheduling, transaction updates, and responses to your questions</li>
                <li><strong>Message frequency:</strong> Up to 10 messages per month; most contacts receive 2–5 messages total</li>
                <li><strong>Message and data rates may apply</strong> based on your carrier plan</li>
                <li><strong>To opt out:</strong> Reply STOP to any message</li>
                <li><strong>For help:</strong> Reply HELP or call <a href="tel:5592818016" style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a></li>
                <li><strong>No third-party sharing:</strong> We do not share your phone number with third parties for marketing</li>
              </ul>
            </div>

            <p>After you reply STOP, you will receive one final confirmation message and no further messages will be sent. To opt back in, you may text START or contact us directly.</p>
          </Section>

          <Section title="5. How We Share Your Information">
            <p>We do not sell, rent, or trade your personal information to third parties. We may share your information in the following limited circumstances:</p>
            <ul>
              <li><strong>Service providers:</strong> We may share information with trusted service providers who assist us in operating our website, conducting our business, or communicating with you (such as CRM software, SMS platforms, or email services). These providers are contractually obligated to keep your information confidential and use it only for the services they provide to us.</li>
              <li><strong>Legal compliance:</strong> We may disclose your information if required by law, court order, or government authority, or to protect the rights, property, or safety of {COMPANY}, our clients, or others.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any such change.</li>
              <li><strong>With your consent:</strong> We may share your information with third parties when you have given us explicit consent to do so.</li>
            </ul>
            <p><strong>We never share your SMS opt-in data or mobile phone number with third parties for marketing purposes.</strong></p>
          </Section>

          <Section title="6. California Privacy Rights (CCPA)">
            <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
            <ul>
              <li><strong>Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you, the sources of that information, the purposes for which we use it, and the categories of third parties with whom we share it.</li>
              <li><strong>Right to Delete:</strong> You have the right to request that we delete personal information we have collected from you, subject to certain exceptions.</li>
              <li><strong>Right to Opt Out of Sale:</strong> We do not sell personal information. However, you have the right to opt out of any future sale of your personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>{EMAIL}</a> or <a href="tel:5592818016" className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>{PHONE}</a>. We will respond to your request within 45 days.</p>
          </Section>

          <Section title="7. Data Security">
            <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee the absolute security of your information.</p>
          </Section>

          <Section title="8. Data Retention">
            <p>We retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, to comply with our legal obligations, to resolve disputes, and to enforce our agreements. If you request deletion of your information, we will delete it within 30 days, except where we are required to retain it by law.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>Our Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete that information as quickly as possible. If you believe we may have collected information from a child under 13, please contact us at <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "oklch(0.55 0.13 42)" }}>{EMAIL}</a>.</p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>Our Site may contain links to third-party websites. This Privacy Policy does not apply to those websites. We encourage you to review the privacy policies of any third-party sites you visit. We are not responsible for the privacy practices of third-party websites.</p>
          </Section>

          <Section title="11. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new effective date. Your continued use of the Site after any changes constitutes your acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
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
          <Link href="/terms-of-service"><span className="underline cursor-pointer" style={{ color: "oklch(0.55 0.13 42)" }}>Terms of Service</span></Link>
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
