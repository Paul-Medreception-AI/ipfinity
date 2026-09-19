import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS vs XMPP Messaging: Selecting the Right Protocol for Business Communication | ipfinity',
  description: 'Compare SMS and XMPP messaging protocols for business communication. Understand effectiveness, costs, security, and implementation to choose the right solution for your organization.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light leading-tight mb-6">
            SMS vs XMPP Messaging: Selecting the Right Protocol for Business Communication
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            A comprehensive comparison to help you choose the optimal messaging protocol for your organization's communication needs
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-center mb-12 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Criteria</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">SMS Messaging</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">XMPP Messaging</div>
            </div>
            
            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Delivery Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">98% delivery rate, universal reach to any mobile device</div>
              <div className="p-6 border-l border-[var(--color-border)]">99.9% delivery within network, requires internet connectivity</div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Feature Set</div>
              <div className="p-6 border-l border-[var(--color-border)]">Text only (160 characters), MMS for media, basic delivery receipts</div>
              <div className="p-6 border-l border-[var(--color-border)]">Rich messaging, file transfer, presence information, end-to-end encryption</div>
            </div>
            
            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost Structure</div>
              <div className="p-6 border-l border-[var(--color-border)]">$0.01-$0.05 per message, carrier fees apply</div>
              <div className="p-6 border-l border-[var(--color-border)]">Server hosting costs only, unlimited messaging once deployed</div>
            </div>
            
            {/* Implementation */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Implementation Time</div>
              <div className="p-6 border-l border-[var(--color-border)]">1-2 weeks via API integration, immediate functionality</div>
              <div className="p-6 border-l border-[var(--color-border)]">4-8 weeks for server setup, client deployment, and testing</div>
            </div>
            
            {/* Security */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Security Level</div>
              <div className="p-6 border-l border-[var(--color-border)]">Basic encryption in transit, carrier-controlled infrastructure</div>
              <div className="p-6 border-l border-[var(--color-border)]">End-to-end encryption, self-hosted options, full control</div>
            </div>
            
            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best Suited For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Customer notifications, 2FA codes, simple alerts, mass outreach</div>
              <div className="p-6 border-l border-[var(--color-border)]">Internal team communication, real-time collaboration, secure enterprise messaging</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-6 text-[var(--color-ink)]">
              SMS Messaging: Universal Reach and Simplicity
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              SMS (Short Message Service) remains the most universally accessible messaging protocol, with the ability to reach any mobile device without requiring internet connectivity or specialized applications. For businesses in Rockwood and beyond, SMS provides unmatched reliability for customer-facing communications, with 98% of text messages being read within three minutes of delivery.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The protocol's limitations—160-character messages, no native encryption, and per-message costs—are offset by its simplicity and immediate implementation. SMS excels in scenarios requiring guaranteed delivery to broad audiences: appointment reminders, verification codes, emergency alerts, and marketing campaigns. The infrastructure is carrier-managed, eliminating the need for server maintenance while ensuring compliance with telecommunications regulations.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Organizations typically choose SMS when communicating with customers who may not have smartphones or reliable internet access, when message brevity is acceptable, and when the per-message cost is justified by the business value. Integration via APIs like Twilio or MessageBird can be completed in days, making SMS ideal for rapid deployment scenarios.
            </p>
          </div>

          <div className="mb-16 animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-6 text-[var(--color-ink)]">
              XMPP Messaging: Enterprise-Grade Real-Time Communication
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              XMPP (Extensible Messaging and Presence Protocol) represents a comprehensive solution for organizations requiring sophisticated, real-time communication capabilities with complete infrastructure control. Originally developed for instant messaging, XMPP has evolved into an enterprise standard supporting presence information, file transfers, voice/video calls, and end-to-end encryption—all while maintaining open-source flexibility.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The protocol's architecture allows businesses to host their own servers, ensuring data sovereignty and eliminating per-message costs. XMPP's extensibility enables custom functionality through plugins, making it particularly valuable for organizations with specific compliance requirements or integration needs. Real-time presence information allows team members to see availability status, supporting more efficient collaboration than asynchronous SMS communication.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              XMPP is optimal for internal team communication, secure document sharing, and scenarios where message volume would make SMS costs prohibitive. Implementation requires dedicated IT resources for server deployment, client application distribution, and ongoing maintenance. Organizations in healthcare, finance, and government sectors frequently choose XMPP for its security capabilities and compliance with data protection regulations like HIPAA and GDPR.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            How to Decide: Decision Framework
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M9.5 15.5c1.5 1 3 1 4.5 0" />
              </svg>
              Choose SMS Messaging If:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You need to communicate with customers who may not have smartphones or reliable internet access</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">Your messages are brief notifications, alerts, or verification codes under 160 characters</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You require immediate implementation with minimal technical infrastructure investment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">Message volume is moderate (under 10,000 monthly) and per-message costs are acceptable</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">Universal reach is more important than advanced features or encryption capabilities</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Choose XMPP Messaging If:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">Your primary use case is internal team communication and collaboration within your organization</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You require end-to-end encryption, presence information, and rich messaging features</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">Message volume is high enough that per-message SMS costs would be prohibitive</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">Data sovereignty and infrastructure control are critical for compliance or security policies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You have IT resources available for server deployment, maintenance, and client support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can SMS and XMPP be used together in the same organization?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Absolutely. Many organizations implement a hybrid approach, using SMS for customer-facing communications (appointment reminders, delivery notifications, marketing) while deploying XMPP for internal team collaboration. This strategy optimizes costs while ensuring the right protocol serves each use case. Integration middleware can even bridge the two systems, allowing XMPP users to send SMS messages when needed.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How do delivery guarantees compare between SMS and XMPP?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                SMS offers approximately 98% delivery rates with carrier-level guarantees, though actual delivery can be affected by network coverage and device status. XMPP provides 99.9% delivery within its network but requires internet connectivity—messages queue until the recipient comes online. XMPP's delivery receipts and read confirmations provide more detailed status information than standard SMS, making it easier to verify message receipt in real-time.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What are the typical cost differences at scale?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                SMS costs typically range from $0.01 to $0.05 per message, meaning 100,000 monthly messages could cost $1,000-$5,000. XMPP requires upfront investment in server infrastructure (approximately $200-$1,000 monthly for hosting depending on scale) but has no per-message costs, making it significantly more economical at volumes above 20,000-50,000 messages per month. The break-even point depends on your specific message volume and infrastructure costs.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Which protocol is better for compliance with healthcare or financial regulations?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                XMPP generally provides stronger compliance capabilities for HIPAA, GDPR, and financial regulations due to its end-to-end encryption options, self-hosted infrastructure, and complete audit trail capabilities. SMS can be HIPAA-compliant when using approved gateway providers with Business Associate Agreements, but the lack of native encryption and carrier-controlled infrastructure creates additional compliance considerations. For highly sensitive communications in Rockwood healthcare or financial institutions, XMPP offers superior data sovereignty and security controls.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What happens to XMPP messages when recipients are offline?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                XMPP servers automatically store messages for offline recipients and deliver them as soon as the recipient's device reconnects to the network. This offline message storage typically retains messages for configurable periods (commonly 7-30 days), ensuring reliable asynchronous communication similar to email. The presence system notifies senders when recipients come online, and delivery receipts confirm when stored messages are successfully delivered.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-6 text-[var(--color-ink)]">
            Ready to Choose the Right Messaging Protocol?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
            Our team in Rockwood can help you evaluate your communication needs and select the optimal solution for your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}