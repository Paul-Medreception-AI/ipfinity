import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cloud Voice vs On-Premises PBX: Total Cost of Ownership Analysis | ipfinity',
  description: 'Compare cloud voice and on-premises PBX systems. Comprehensive TCO analysis including upfront costs, maintenance, scalability, and long-term value for your business.',
}

export default function ComparisonPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex justify-center items-center gap-2 text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <span>›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Cloud Voice vs On-Premises PBX: Total Cost of Ownership Analysis
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive comparison to help you make an informed decision about your business communications infrastructure
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Factor</div>
              <div className="p-6 font-semibold border-l border-white/20">Cloud Voice</div>
              <div className="p-6 font-semibold border-l border-white/20">On-Premises PBX</div>
            </div>

            {/* Upfront Costs */}
            <div className="grid grid-cols-3 border-t border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Upfront Costs</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Minimal to none. Monthly subscription model with predictable costs.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">$10,000-$50,000+ for hardware, installation, and infrastructure.</p>
              </div>
            </div>

            {/* Ongoing Maintenance */}
            <div className="grid grid-cols-3 border-t border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Ongoing Maintenance</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Included in subscription. Provider handles all updates and maintenance.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Dedicated IT staff or vendor contracts. $5,000-$15,000 annually.</p>
              </div>
            </div>

            {/* Scalability */}
            <div className="grid grid-cols-3 border-t border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Scalability</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Add or remove users instantly. Pay only for what you use.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Requires hardware purchase and installation. Limited by system capacity.</p>
              </div>
            </div>

            {/* Disaster Recovery */}
            <div className="grid grid-cols-3 border-t border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Disaster Recovery</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Automatic redundancy and failover. Work from anywhere with internet.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Requires backup systems and planning. Physical location dependent.</p>
              </div>
            </div>

            {/* Advanced Features */}
            <div className="grid grid-cols-3 border-t border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Advanced Features</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Regular updates with new features. AI, analytics, integrations included.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Feature upgrades require hardware replacement or expensive add-ons.</p>
              </div>
            </div>

            {/* 5-Year TCO */}
            <div className="grid grid-cols-3 border-t border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">5-Year TCO (50 users)</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)] font-semibold text-lg">$75,000-$120,000</p>
                <p className="text-sm text-[var(--color-muted)] mt-1">Predictable monthly costs</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)] font-semibold text-lg">$150,000-$250,000</p>
                <p className="text-sm text-[var(--color-muted)] mt-1">Higher upfront + maintenance</p>
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3 border-t border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Growing businesses, remote teams, organizations wanting flexibility and modern features.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Organizations with strict data control requirements or existing infrastructure investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {/* Cloud Voice Deep Dive */}
            <div className="animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
                <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)]">
                  Cloud Voice: The Modern Choice
                </h2>
              </div>
              
              <div className="space-y-4 text-[var(--color-ink)] leading-relaxed ml-12">
                <p>
                  Cloud voice systems represent the evolution of business communications, delivering enterprise-grade features without the enterprise-level investment. By hosting your phone system in secure data centers, providers eliminate the need for expensive on-site hardware while delivering superior reliability, redundancy, and feature sets.
                </p>
                <p>
                  The subscription model transforms communications from a capital expense to an operational expense, offering significant financial advantages. Businesses avoid the depreciation of hardware assets, eliminate the risk of technology obsolescence, and gain predictable monthly costs that scale with their needs. This approach frees up capital for core business investments while ensuring access to the latest communications technology.
                </p>
                <p>
                  Modern cloud voice platforms integrate seamlessly with business applications, enabling unified communications that improve productivity and customer experience. Features like AI-powered call routing, real-time analytics, CRM integration, and mobile apps come standard, while on-premises systems require costly add-ons or simply cannot deliver comparable functionality. The result is a communication infrastructure that enhances rather than constrains business operations.
                </p>
              </div>
            </div>

            {/* On-Premises PBX Deep Dive */}
            <div className="animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
                <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)]">
                  On-Premises PBX: The Traditional Approach
                </h2>
              </div>
              
              <div className="space-y-4 text-[var(--color-ink)] leading-relaxed ml-12">
                <p>
                  On-premises PBX systems have served businesses for decades, offering complete control over communications infrastructure. These systems consist of physical hardware installed at your location, connecting to traditional phone lines or SIP trunks. Organizations own and maintain all equipment, giving them direct oversight of their communications environment.
                </p>
                <p>
                  The total cost of ownership for on-premises systems extends well beyond the initial purchase. Hardware typically depreciates over a 5-7 year lifecycle, requiring eventual replacement. Maintenance contracts, software licenses, and IT staff time add thousands of dollars annually. System changes—adding users, relocating offices, or implementing new features—require hardware modifications and professional installation, introducing delays and additional costs.
                </p>
                <p>
                  For organizations with specific compliance requirements, existing infrastructure investments, or concerns about internet-dependent communications, on-premises systems may still present a viable option. However, the total cost of ownership typically exceeds cloud alternatives by 40-60% over five years, while offering fewer features and less flexibility. As internet reliability has improved and cloud security has matured, the traditional advantages of on-premises systems have diminished significantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide: Decision Framework
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Choose Cloud Voice */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                  Choose Cloud Voice If:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You want predictable, lower monthly costs without large upfront investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your team works remotely or across multiple locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You expect to scale up or down within the next 2-3 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You want modern features like mobile apps, video conferencing, and analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have reliable internet connectivity at all locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You prefer the provider to handle maintenance and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You need CRM, helpdesk, or productivity tool integrations</span>
                  </li>
                </ul>
              </div>

              {/* Choose On-Premises */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                  Choose On-Premises If:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have strict regulatory requirements for data to remain on-premises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have existing infrastructure you recently invested in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your internet connectivity is unreliable or bandwidth-limited</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have dedicated IT staff to manage telephony systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your user count is stable with minimal expected growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You require integration with legacy systems only compatible with on-premises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have capital budget available but limited operational budget</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Expert Recommendation:</strong> For most businesses in Rockwood, cloud voice delivers superior total cost of ownership, greater flexibility, and more advanced features. The exception is organizations with unique compliance requirements or recent infrastructure investments that haven't been fully depreciated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light text-center mb-12 text-[var(--color-ink)]">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What are the hidden costs of on-premises PBX systems?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Beyond the initial hardware purchase, on-premises systems incur ongoing costs including annual maintenance contracts (10-20% of system value), electricity for equipment rooms, HVAC to cool equipment, physical space allocation, IT staff time for management and troubleshooting, system upgrades every 3-5 years, and emergency repair costs. These hidden expenses can double the perceived total cost of ownership.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How reliable is cloud voice compared to traditional phone systems?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Enterprise cloud voice providers typically offer 99.99% uptime guarantees, backed by redundant data centers and automatic failover systems. This exceeds the reliability of most on-premises systems, which depend on single points of failure and lack geographic redundancy. With cloud voice, if your office loses power or internet, calls can automatically route to mobile devices or other locations, ensuring business continuity that on-premises systems cannot match.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can I keep my existing phone numbers when switching to cloud voice?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Yes, through a process called number porting, you can transfer your existing phone numbers to a cloud voice provider. The process typically takes 2-4 weeks and involves coordination between your current carrier and new provider. Your provider will handle most of the technical details, ensuring minimal disruption to your business during the transition.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What happens to cloud voice systems during internet outages?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Modern cloud voice systems include failover options that automatically route calls to mobile phones, alternate locations, or voicemail when internet connectivity is lost. Many businesses implement dual internet connections (cable and fiber, for example) to ensure redundancy. Additionally, because cloud voice isn't tied to physical location, employees can continue making and receiving calls from anywhere with internet access, including home offices or mobile devices.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How long does it take to migrate from an on-premises system to cloud voice?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-ink)] leading-relaxed">
                A typical cloud voice implementation takes 2-6 weeks from contract signing to full deployment, depending on company size and complexity. This includes number porting, configuration, user training, and testing. Many businesses run both systems in parallel during the transition period to minimize risk. The actual cutover can often happen outside business hours to avoid disruption, with most organizations fully operational on their new system within a single day.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
            Our team can provide a customized TCO analysis for your business, comparing cloud voice and on-premises solutions based on your specific requirements and usage patterns.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}