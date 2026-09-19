import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </div>
          <h1 className="font-serif text-6xl font-light mb-4 max-w-4xl" style={{fontFamily: 'Cormorant, serif'}}>
            Telecommunications Infrastructure Built for How You Work
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl">
            Connecting businesses worldwide with flexible, reliable cloud telecommunications solutions
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 lg:pr-12">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                IPFINITY is a telecommunications services provider serving large Canadian corporations and multi-national companies with global communication needs. We own and operate CloudVoice, our distributed communications infrastructure with a worldwide footprint, interconnecting with carriers in over 150 countries. Whether you need numbers from Adelaide or Zimbabwe, ringing in New York, New Delhi, or Toronto, we deliver the connectivity your business requires.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                Our CloudVoice platform offers best-in-class services including SIP and PRI trunking, fax, SMS and XMPP messaging, combined with innovative, customized voice-data-messaging-fax applications that solve real communication challenges. Recognizing that no two businesses are alike, we built CloudVoice to be flexible and scalable, providing immediate value to your bottom line from day one and keeping pace with your growth trajectory.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                Whether you maintain a legacy phone system requiring trunks and numbers, are transitioning to an all-IP solution, or need a hybrid approach combining both, we deliver what you need quickly and efficiently. Our modular voice applications including custom call routing, smartphone integration, smart messaging, fax-to-email, cloud call queuing, voicemail-to-email, and disaster recovery are highly customizable to your specific operational requirements.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'Cormorant, serif'}}>
                  Infrastructure & Capabilities
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">150+ country carrier interconnection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Distributed cloud infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Enterprise-grade SIP & PRI trunking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Custom voice application development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Multi-channel messaging APIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Built-in disaster recovery & failover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Legacy & modern system integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">24/7 enterprise support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16" style={{fontFamily: 'Cormorant, serif'}}>
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 className="font-serif text-xl font-bold text-[var(--color-ink)] mb-3" style={{fontFamily: 'Cormorant, serif'}}>
                Flexibility First
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We believe every business is unique, which is why CloudVoice is built to adapt rather than force you into rigid templates. Our modular platform integrates with legacy systems, modern IP infrastructure, or hybrid environments, delivering immediate value while scaling alongside your growth.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <h3 className="font-serif text-xl font-bold text-[var(--color-ink)] mb-3" style={{fontFamily: 'Cormorant, serif'}}>
                Global Reach, Local Precision
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                With carrier interconnections spanning 150+ countries, we deliver truly global telecommunications infrastructure without compromising on reliability or quality. From Adelaide to Zimbabwe, your communications work seamlessly wherever your business operates.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
              <h3 className="font-serif text-xl font-bold text-[var(--color-ink)] mb-3" style={{fontFamily: 'Cormorant, serif'}}>
                Custom-Built Solutions
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Off-the-shelf rarely fits perfectly, so we design custom voice applications tailored to your specific workflows. Whether intelligent routing, smartphone integration, or automated messaging, if you can envision it, our team can build it on the CloudVoice platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6" style={{fontFamily: 'Cormorant, serif'}}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how CloudVoice can transform your telecommunications infrastructure
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}