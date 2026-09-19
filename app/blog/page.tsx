import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">Resources & Insights</h1>
          <p className="text-xl text-white/90">Expert perspectives on modern telecommunications and cloud infrastructure</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Featured Article</div>
            <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-6">The Evolution of SIP Trunking: Why Legacy PBX Systems Are Moving to the Cloud</h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>Over the past decade, businesses worldwide have witnessed a fundamental shift in how voice communications are delivered. Traditional ISDN and analog phone lines are rapidly being replaced by Session Initiation Protocol (SIP) trunking—a technology that routes voice calls over IP networks rather than copper wires. This transition represents more than a simple technology upgrade; it's a strategic move that unlocks unprecedented flexibility, cost savings, and scalability.</p>
              <p>SIP trunking eliminates the need for physical phone line infrastructure by connecting your existing PBX system directly to a cloud-based voice network. This means businesses can retain their current phone equipment while gaining access to advanced features like automatic failover, geographic redundancy, and unified global number management. The cost benefits are substantial, because capacity is added and removed in software rather than by ordering physical circuits that sit idle for most of the month.</p>
              <p>What makes modern SIP trunking particularly compelling is its ability to bridge legacy and cloud-native environments. Whether you are running a decades-old PBX or a current-generation VoIP system, a properly configured SIP trunk integrates with the infrastructure you already own. This hybrid approach allows organizations to modernize at their own pace, protecting equipment investments while gradually adopting cloud-first communication strategies that scale with business growth.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-medium">
              Read More 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Infrastructure</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">5 Signs Your Business Needs Geographic Redundancy</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Natural disasters, network outages, and equipment failures can cripple communications. Learn how distributed infrastructure protects your business continuity and when it's time to implement multi-site failover strategies.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Global Connectivity</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Understanding DID Numbers: Your Gateway to International Markets</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Direct Inward Dialing numbers give your business a local presence in another market without opening an office there. See how global DIDs reduce international calling costs and make you easier to reach across Canada, the United States, Latin America, Europe and Australasia.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Custom Solutions</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Building Voice Applications: Beyond Standard Phone Systems</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Modern businesses need more than dial tone. Explore modular voice applications that integrate CRM data, automate call routing, enable mobile workforce connectivity, and create competitive advantages through telecommunications innovation.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Messaging</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">SMS APIs for Business: Automating Customer Communications</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Transactional alerts, service-window reminders, two-factor authentication—SMS remains the most reliable channel for time-critical messages. Learn how businesses use messaging APIs to automate routine notifications and reach customers who never open email.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Cost Optimization</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">The Hidden Costs of Legacy Phone Systems</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Maintenance contracts, per-line charges, long-distance fees, and limited scalability—traditional phone systems carry expenses that extend far beyond the monthly bill. Calculate the true TCO of your current infrastructure.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Technology</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Hybrid Telecommunications: Bridging Old and New</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Most businesses can't flip a switch from legacy to cloud overnight. Hybrid solutions allow gradual migration while maintaining operational continuity, protecting capital investments, and enabling phased technology adoption aligned with budget cycles.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

            {/* Article 7 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Security</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">VoIP Security Best Practices: Protecting Voice Networks</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">As voice moves to IP networks, security becomes paramount. Explore encryption protocols, fraud prevention strategies, SBC configuration, and network segmentation techniques that protect against toll fraud and eavesdropping.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

            {/* Article 8 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Disaster Recovery</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Business Continuity Planning: Why Communications Failover Matters</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">When disaster strikes, communications are often the first casualty and the most critical recovery priority. Design resilient voice infrastructure with automatic failover, geographic diversity, and recovery time objectives measured in seconds.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

            {/* Article 9 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Integration</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Connecting Cloud Voice to Modern Business Tools</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Voice communications shouldn't exist in isolation. Learn how to integrate telephony with CRM platforms, helpdesk software, collaboration tools, and custom applications to create seamless workflows that boost productivity.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors text-sm font-medium">
                Read More →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-6">Ready to Modernize Your Communications?</h2>
          <p className="text-xl text-white/90 mb-10">Let's discuss how our CloudVoice platform can transform your telecommunications infrastructure</p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}