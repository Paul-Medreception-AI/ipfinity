import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legacy System Integration: Connecting Old PBX Hardware to Cloud Services | ipfinity',
  description: 'How a business can modernize its communication infrastructure by connecting an existing PBX to cloud services, without replacing hardware that still works.',
  keywords: 'legacy PBX integration, cloud telephony, SIP trunking, PBX modernization, hybrid phone systems, VoIP migration',
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Technology &amp; Innovation
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Legacy System Integration: Connecting Old PBX Hardware to Cloud Services
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>ipfinity Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              For many businesses, the phone system represents a significant investment that has served reliably for years, sometimes decades. The on-premise PBX hardware still works, staff know how to use it, and replacing it outright feels disruptive and expensive. Yet the advantages of cloud-based communication, including remote access, mobile integration, better analytics and easier scaling, are difficult to ignore.
            </p>
            <p className="mb-6">
              You do not have to choose between keeping the legacy system and adopting cloud capabilities. Legacy system integration offers a practical middle path, letting businesses in Rockwood and across Canada connect existing PBX hardware to cloud services, preserving the investment while adding new functionality.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Legacy PBX Systems in Business
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Private Branch Exchange (PBX) systems have been the backbone of business communication infrastructure for generations. These on-premise phone systems manage internal call routing, voicemail, extensions and external line access. Plenty of businesses still run digital or analog PBX equipment installed 10 to 20 years ago that continues to function reliably.
            </p>
            <p className="mb-6">
              Most organizations face the same constraints when they consider replacement. Budget cycles are tight, IT resources are stretched thin, and any disruption to the phone system is felt immediately by the people trying to reach you. Staff training takes time, and the risk of downtime during migration is a serious concern. That is what makes &quot;rip and replace&quot; a hard sell, even when the case for cloud features is obvious.
            </p>
            <p className="mb-6">
              Yet legacy systems also have limitations. They typically lack mobile integration, remote work capabilities, useful call analytics, CRM integration, and the flexibility to add or remove users quickly. As working patterns change, with hybrid schedules, remote staff and multi-site operations now ordinary, those limitations become harder to live with.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Legacy System Integration?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Legacy system integration creates a hybrid communication environment where your existing PBX hardware continues to handle on-site phone operations while connecting to cloud-based services through SIP trunking or gateway devices. This approach allows gradual migration rather than wholesale replacement.
            </p>
            <p className="mb-6">
              The technical bridge typically involves SIP (Session Initiation Protocol) trunks that connect your on-premise PBX to a cloud telephony provider. These digital connections replace traditional analog phone lines, carrying voice calls over your internet connection while maintaining compatibility with your existing desk phones, wiring, and PBX features.
            </p>
            <p className="mb-6">
              Gateway devices can translate between different protocols, allowing legacy analog or digital phones to communicate with modern VoIP systems. This means your staff can continue using familiar handsets and processes while the organization gains access to cloud capabilities like mobile apps, advanced routing, call recording, and analytics.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              &quot;Integration lets a business modernize its communication capabilities without the disruption and expense of replacing infrastructure that still works reliably.&quot;
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Key Benefits for Business
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The integrated approach offers several advantages that matter to any business with phones already on the wall:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Cost efficiency:</strong> Preserve existing hardware investment while gaining cloud benefits without the capital expense of complete system replacement.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Minimal disruption:</strong> Staff continue using familiar phones and processes while new capabilities are added behind the scenes, reducing training burden and operational impact.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Gradual migration path:</strong> Move users to cloud-based softphones or mobile apps incrementally, testing and refining before full deployment.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Enhanced functionality:</strong> Add mobile access, call analytics, CRM integration, and advanced call routing without replacing desk phones.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Business continuity:</strong> Cloud redundancy provides failover protection if on-premise equipment fails, so incoming customer calls keep landing somewhere useful.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Remote work support:</strong> Enable staff to access the phone system from home or satellite locations using mobile apps or softphones while maintaining unified communication.
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Technical Considerations and Requirements
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Successful integration requires careful planning and assessment of your current infrastructure. Not all legacy systems are equally compatible with cloud services, and technical requirements vary based on your specific equipment and goals.
            </p>
            <p className="mb-6">
              <strong>Internet connectivity</strong> becomes critical once voice traffic is routed through cloud services. Your site needs enough bandwidth, with quality of service (QoS) prioritization, to keep calls clear. Most businesses already have adequate internet service, but voice needs a consistent, low-latency connection rather than raw speed. Few networks separate voice from data, which is why a small appliance sitting behind the modem to enforce voice priority often does more for call quality than buying a bigger pipe.
            </p>
            <p className="mb-6">
              <strong>PBX compatibility</strong> varies by manufacturer and model. Modern IP-PBX systems usually integrate smoothly with SIP trunking. Older digital systems may need additional gateway hardware to translate between protocols. An experienced carrier can assess your specific equipment and recommend the right integration approach, including which certified handsets can be reused and which should be replaced.
            </p>
            <p className="mb-6">
              <strong>Security and compliance</strong> deserve attention before cutover rather than after. In Canada, personal information handled on your voice channels falls under PIPEDA, and some customers bring obligations of their own on top of that, such as Ontario PHIPA where health information is involved. In practice this means encrypted connections, controlled storage of call recordings, a defined retention period, and access limited to the people who need it. Ask your provider where recordings and call records are held, and who can reach them.
            </p>
            <p className="mb-6">
              <strong>Emergency calling (E911)</strong> requires special attention in hybrid environments. The system must accurately route emergency calls and transmit location information, which can be complex when integrating legacy and cloud components. Testing and validation of emergency calling is essential before going live.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Implementation Best Practices
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A phased approach typically yields the best results when integrating legacy systems with cloud services. Businesses should consider these implementation strategies:
            </p>
            <p className="mb-6">
              <strong>Start with a pilot program.</strong> Test the integrated system with a small group of users or a single department before organization-wide deployment. This lets you find and resolve issues without affecting every member of staff and every customer line at once.
            </p>
            <p className="mb-6">
              <strong>Prioritize training and change management.</strong> Even when desk phones remain familiar, new features and mobile capabilities require staff education. Provide clear documentation, hands-on training sessions, and accessible technical support during the transition period.
            </p>
            <p className="mb-6">
              <strong>Maintain redundancy during migration.</strong> Keep traditional phone lines active alongside new SIP trunks until the integrated system has proved itself. This gives you a fallback if technical issues arise and keeps customer calls connected throughout.
            </p>
            <p className="mb-6">
              <strong>Monitor performance metrics.</strong> Cloud platforms typically provide detailed analytics on call quality, volume, and patterns. Use this data to optimize configuration, identify issues early, and demonstrate ROI to stakeholders.
            </p>
            <p className="mb-6">
              <strong>Plan for eventual full migration.</strong> While integration extends the life of legacy equipment, it works best as a bridge strategy rather than a permanent solution. Use the hybrid period to gradually transition users to cloud-native devices and prepare for eventual PBX retirement when the time is right.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When Integration Makes Sense
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Legacy system integration offers the most value in specific scenarios. Consider this approach when your existing PBX equipment still functions reliably, when budget constraints make full replacement difficult in the near term, or when staff resistance to change makes gradual adoption preferable to a sudden switch.
            </p>
            <p className="mb-6">
              The strategy works particularly well for organizations that need one specific cloud capability now, such as mobile integration for remote and hybrid staff, without waiting for a complete system replacement. It is also valuable when the building wiring makes replacing desk phones impractical, or when the business simply cannot absorb operational disruption this quarter.
            </p>
            <p className="mb-6">
              Conversely, if your PBX equipment frequently fails or requires expensive maintenance, complete replacement may be more cost-effective than integration. Similarly, if your organization is planning facility renovation or relocation, that timing may present an ideal opportunity for full cloud migration rather than hybrid integration.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Legacy system integration is a practical, cost-effective path to modern communication infrastructure without the disruption and expense of replacing everything at once. By connecting existing PBX hardware to cloud services, businesses in Rockwood and beyond can protect the investment already made while gaining the flexibility, functionality and remote access that current ways of working demand.
            </p>
            <p className="mb-6">
              Success comes down to thorough assessment, careful planning, phased implementation, and working with a carrier that understands both legacy equipment and cloud services. If you are weighing up how to modernize your communication system while managing cost and minimizing disruption, ipfinity can help you work through the technical and operational detail.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-light text-[var(--color-ink)] mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
              Written by the ipfinity Team
            </h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              ipfinity is an accredited Canadian telecommunications carrier. We have delivered cloud voice since 2002, and we own the lines, handsets, features and queuing end to end.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                VoIP vs Traditional Phone Systems: What Business Buyers Need to Know
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Compare communication technologies and work out which one fits your operation and your budget.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Protecting Customer Communications Under PIPEDA
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Security requirements and practical habits for protecting customer privacy in a modern phone system.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Mobile Communication for Distributed Teams
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Keep remote and hybrid staff on the same phone system as the office, using smartphone apps and softphones.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}