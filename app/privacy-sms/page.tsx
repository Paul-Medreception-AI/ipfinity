import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | ipfinity',
  description: 'ipfinity - Privacy Policy, including SMS consent, PIPEDA and CASL disclosures.',
  alternates: { canonical: 'https://www.ipfinity.com/privacy-sms' },
}

export default function PrivacySmsPage() {
  return (
    <main className="min-h-screen bg-white font-opensans">
      <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-bold mb-4">ipfinity - Privacy Policy</h1>
          <p className="text-lg text-white/90">ipfinity</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-ink)] font-semibold text-lg mb-8">
            Effective Date: September 19th, 2026
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA
          </h2>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            ipfinity (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            1. Information We Collect
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We collect the following types of information:
          </p>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Personal Information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Name, email address, phone number, physical address</li>
            <li>Payment information when you make a purchase or request a quote</li>
            <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Non-Personal Information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>IP address, browser type, device information</li>
            <li>Website usage patterns and analytics</li>
            <li>Cookies and similar technologies</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Customer Communication:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Records of inquiries and service requests</li>
            <li>Service details, site information and scheduling preferences for installation and service windows</li>
            <li>Service history and feedback</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We use collected data for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Providing and improving our services</li>
            <li>Processing transactions and payments</li>
            <li>Communicating with you about your inquiries, quotes, service windows, account matters and offers you have consented to receive</li>
            <li>Enhancing website functionality and user experience</li>
            <li>Ensuring security and fraud prevention</li>
            <li>Maintaining records of your communication preferences and consent</li>
          </ul>

          <h2 id="sms-messaging" className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            3. SMS Messaging &amp; Compliance
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed font-semibold">
            Text Message Program Terms &amp; Conditions
          </p>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            By opting into our SMS messaging services, you agree to receive text messages related to our services, including service and network notifications, installation and service window confirmations and reminders, account and billing notices, customer support communications, and other important updates.
          </p>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Opt-In &amp; Consent:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>You will only receive messages if you have explicitly opted in</li>
            <li>We maintain timestamped records of all opt-in actions</li>
            <li>We obtain and record consent in the manner required by Canada&apos;s Anti-Spam Legislation (CASL) and applicable CRTC rules</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Opt-Out Instructions:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>You can cancel SMS notifications at any time by replying &quot;STOP&quot;</li>
            <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
            <li>All opt-out requests are processed immediately.</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Message Frequency &amp; Content:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Message frequency varies based on your services with us and your interactions with our business</li>
            <li>Messages will be directly related to the services you have requested</li>
            <li>We do not send promotional content without specific consent</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Help &amp; Support:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Reply &quot;HELP&quot; for assistance or contact us at anees.munshi@ipfinity.com</li>
            <li>Customer support is available during regular business hours</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Carrier Information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Message and data rates may apply, depending on your plan with your own wireless provider</li>
            <li>Wireless carriers are not liable for delayed or undelivered messages</li>
            <li>Our messaging program is supported on major Canadian and United States wireless networks</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed font-semibold">
            SMS Data Protection Statement
          </p>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            4. Information Sharing &amp; Disclosure
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We do not sell, rent, or trade your personal information. We may share information with:
          </p>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Network and Carrier Operations:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Underlying network operators and interconnecting carriers, where this is necessary to originate, route, deliver or terminate your calls, messages and faxes</li>
            <li>Number portability, directory and regulatory processes, where required to move a telephone number to or from another carrier</li>
            <li>Equipment suppliers and logistics providers, solely to ship and configure the handsets and devices you have ordered</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Service Providers:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Third-party vendors who assist in our operations, such as payment processing, billing, scheduling and customer support, under written agreements limiting their use of the information</li>
            <li>SMS aggregators and providers solely for the purpose of delivering messages you&apos;ve consented to receive</li>
            <li>All service providers are contractually obligated to maintain confidentiality and appropriate security safeguards</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Legal Requirements:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>When required by law, regulation, or legal process</li>
            <li>To regulators, including the Canadian Radio-television and Telecommunications Commission (CRTC), where required or permitted by law</li>
            <li>For judicial proceedings, lawful access requests, or emergency services purposes, as permitted or required by applicable Canadian law</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-2 leading-relaxed font-semibold">
            Business Transfers:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>In case of mergers, acquisitions, or sale of assets</li>
            <li>In such cases, your data remains protected under the terms of this policy and applicable law</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            5. Data Security
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We implement and maintain reasonable security measures to protect your personal information:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
            <li>Employee training on data protection</li>
            <li>Breach notification protocols in accordance with applicable laws</li>
            <li>Secure backup systems and disaster recovery procedures</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            6. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Analyze site traffic and user behavior</li>
            <li>Remember your preferences</li>
            <li>Improve website functionality and user experience</li>
            <li>Measure the effectiveness of our services</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            7. Your Rights &amp; Choices
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>Access, update, or delete your personal information</li>
            <li>Opt-out of marketing emails by clicking &quot;unsubscribe&quot; in our emails</li>
            <li>Opt-out of SMS messages by replying &quot;STOP&quot;</li>
            <li>Request information on how we process your data</li>
            <li>Withdraw consent at any time for future communications</li>
            <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
          </ul>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            To exercise these rights, please contact us using the information in Section 10.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            8. Canadian Privacy and Anti-Spam Law
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            IPFINITY Inc. is an Ontario company and an accredited telecommunications carrier. We handle personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation, and we send commercial electronic messages in accordance with Canada&apos;s Anti-Spam Legislation (CASL) and the rules of the Canadian Radio-television and Telecommunications Commission (CRTC).
          </p>
          <ul className="list-disc pl-6 mb-6 text-[var(--color-ink)] space-y-2">
            <li>SMS is not an encrypted communication method. We keep the amount of personal and account information included in text messages to the minimum needed for the message to be useful.</li>
            <li>We will not include passwords, full payment card details, or other sensitive credentials in SMS messages.</li>
            <li>By opting in, you acknowledge that standard SMS messages may be intercepted or read by unauthorized parties because of the nature of wireless communications, and you accept that risk in exchange for the convenience of receiving service-related text messages.</li>
            <li>Your consent to receive SMS messages is separate from, and does not replace, any service agreement, authorization or consent you have given us for other purposes.</li>
            <li>Where you are a customer who carries privacy obligations of your own, such as an Ontario health information custodian under the Personal Health Information Protection Act (PHIPA), those obligations remain yours. We provide the communications service; we do not assume your obligations, and we do not hold ourselves out as certified under any health privacy regime.</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
            We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            10. Contact Us
          </h2>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            If you have questions about this Privacy Policy or how your information is handled, contact us at:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mb-8">
            <p className="text-[var(--color-ink)] font-semibold mb-2">ipfinity</p>
            <p className="text-[var(--color-muted)] mb-2">Phone: (416) 900-1416</p>
            <p className="text-[var(--color-muted)] mb-2">Email: anees.munshi@ipfinity.com</p>
            <p className="text-[var(--color-muted)]">Website: https://www.ipfinity.com</p>
          </div>
          <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
            If we have not resolved your concern to your satisfaction, you may also contact the federal privacy regulator:
          </p>
          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-6 mb-8">
            <p className="text-[var(--color-ink)] font-semibold mb-2">Office of the Privacy Commissioner of Canada</p>
            <p className="text-[var(--color-ink)] mb-2">Website: www.priv.gc.ca</p>
            <p className="text-[var(--color-ink)]">Complaints about commercial electronic messages may be directed to the CRTC at www.crtc.gc.ca</p>
          </div>
          <p className="text-[var(--color-ink)] leading-relaxed">
            By using our website and services, you consent to this Privacy Policy. This policy does not replace or modify the terms of any service agreement you hold with us.
          </p>
        </div>
      </div>
    </main>
  )
}
