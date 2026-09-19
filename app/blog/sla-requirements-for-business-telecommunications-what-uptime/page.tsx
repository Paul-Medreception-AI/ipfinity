import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SLA Requirements for Business Telecommunications: What Uptime Guarantees Really Mean | ipfinity',
  description: 'Understanding SLA uptime guarantees is crucial for business continuity. Learn what 99.9% vs 99.99% really means, how to evaluate telecom providers, and protect your operations.',
  openGraph: {
    title: 'SLA Requirements for Business Telecommunications: What Uptime Guarantees Really Mean',
    description: 'Understanding SLA uptime guarantees is crucial for business continuity. Learn what 99.9% vs 99.99% really means, how to evaluate telecom providers, and protect your operations.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Business Technology
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            SLA Requirements for Business Telecommunications: What Uptime Guarantees Really Mean
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By the ipfinity Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When your phone system goes down, every minute counts. For a contact centre, that means abandoned callers and orders that go to a competitor. For financial services, lost transactions. For a dispatch operation, crews in the field who cannot be reached. For any business, downtime translates directly to revenue loss, customer frustration, and operational chaos. Yet when evaluating telecommunications providers, many organizations focus solely on price and features while glossing over one of the most critical elements: the Service Level Agreement (SLA) and its uptime guarantees.
            </p>
            <p className="mb-6">
              Understanding what those uptime percentages actually mean—and how they translate to real-world reliability—can be the difference between a telecommunications partner that supports your growth and one that undermines your operations. Let's decode the fine print and explore what you really need to know about SLA requirements for business telecommunications.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is a Telecommunications SLA?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A Service Level Agreement (SLA) is a formal contract between a telecommunications provider and a customer that defines the expected level of service, including uptime guarantees, performance metrics, support response times, and remedies if those standards aren't met. Think of it as your safety net—a promise backed by financial consequences that your provider will deliver reliable, consistent service.
            </p>
            <p className="mb-6">
              For business telecommunications, the SLA typically covers voice services (VoIP, PRI lines, SIP trunks), data connectivity (internet, MPLS, SD-WAN), and sometimes hosted solutions like UCaaS (Unified Communications as a Service). The most prominent metric in any telecom SLA is uptime—expressed as a percentage that represents the portion of time the service will be available and functional.
            </p>
            <p className="mb-6">
              But here's where it gets tricky: not all uptime guarantees are created equal, and the difference between 99.9% and 99.99% is more significant than it appears on paper.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Decoding Uptime Percentages: The Math That Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When a provider promises "99.9% uptime," it sounds reassuring. But let's translate that into actual downtime over the course of a year:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>99% uptime</strong> = 3.65 days of downtime per year (87.6 hours)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>99.9% uptime</strong> = 8.76 hours of downtime per year</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>99.99% uptime</strong> = 52.56 minutes of downtime per year</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>99.999% uptime</strong> ("five nines") = 5.26 minutes of downtime per year</span>
              </li>
            </ul>
            <p className="mb-6">
              Suddenly, that single decimal point difference between 99.9% and 99.99% represents over 8 hours versus less than an hour of annual downtime. For mission-critical operations, that gap is enormous. A distributor whose order desk runs entirely on the phone, or a service business whose customers call to book install windows, cannot absorb 8+ hours of lost lines a year. Similarly, financial services firms handling time-sensitive transactions need carrier-grade reliability.
            </p>
            <p className="mb-6">
              The industry standard for enterprise-grade telecommunications typically hovers around 99.99% uptime, though some premium providers offer 99.999% for critical infrastructure. Anything below 99.9% should raise immediate red flags for business applications.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "The difference between 99.9% and 99.99% uptime is the difference between 8+ hours of annual downtime and less than one hour—a gap that can make or break business continuity."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What's Included (and Excluded) in Uptime Calculations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Here's where the fine print becomes critical. Not all providers calculate uptime the same way, and understanding what's included—or excluded—can dramatically change the real-world reliability you experience.
            </p>
            <p className="mb-6">
              <strong>Scheduled maintenance windows</strong> are often excluded from downtime calculations. If your provider schedules 4 hours of maintenance per month during off-peak hours, that's 48 hours per year that won't count against their SLA—even if your business operates 24/7. Always ask how maintenance is handled and whether you'll have advance notice.
            </p>
            <p className="mb-6">
              <strong>Partial outages</strong> may or may not be counted. If 30% of your voice channels go down but the service remains "available," some providers won't count this as downtime. This matters enormously during high-call-volume periods when you need full capacity.
            </p>
            <p className="mb-6">
              <strong>Last-mile connectivity</strong>—the physical connection from the provider's network to your location—is sometimes carved out of uptime guarantees. If a construction crew cuts your fiber line, some SLAs won't apply. Clarify whether the uptime guarantee covers end-to-end service or just the provider's core network.
            </p>
            <p className="mb-6">
              <strong>Customer-premise equipment (CPE)</strong> like routers, switches, and phone systems you own or control are typically your responsibility. If your on-site equipment fails, the provider's SLA won't cover it. This is why many organizations opt for fully managed solutions where the provider maintains all equipment.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Beyond Uptime: Other Critical SLA Metrics
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While uptime rightfully dominates SLA discussions, several other metrics deserve equal attention when evaluating telecommunications reliability:
            </p>
            <p className="mb-6">
              <strong>Mean Time to Repair (MTTR)</strong> measures how quickly the provider resolves issues once they occur. A 99.99% uptime guarantee paired with a 24-hour MTTR is far less valuable than one with a 4-hour MTTR. Ask about target resolution times for different severity levels and whether these commitments are backed by SLA credits.
            </p>
            <p className="mb-6">
              <strong>Latency and jitter guarantees</strong> are crucial for voice quality. High uptime is meaningless if call quality is poor due to network delays or packet loss. Look for SLAs that specify maximum latency (typically under 150ms for voice) and packet loss thresholds (under 1%).
            </p>
            <p className="mb-6">
              <strong>Support response times</strong> define how quickly you'll get help when issues arise. Tiered support structures (e.g., 15-minute response for critical issues, 4 hours for non-critical) should be clearly documented. Premium SLAs often include dedicated account management and 24/7/365 support access.
            </p>
            <p className="mb-6">
              <strong>Scalability commitments</strong> ensure the provider can accommodate your growth. If you need to add 50 new phone lines or triple your bandwidth, how quickly can the provider provision new capacity? Look for guaranteed provisioning timeframes in the SLA.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Happens When SLAs Are Breached?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              An SLA without teeth is just marketing. The remedies section of your telecommunications agreement defines what happens when the provider fails to meet their commitments—and this is where many agreements fall short.
            </p>
            <p className="mb-6">
              <strong>Service credits</strong> are the most common remedy. If uptime falls below the guaranteed threshold, you receive a credit—typically a percentage of your monthly fees. However, these credits are often disappointingly small (5-25% of monthly charges) and require you to request them proactively within a short window. They rarely compensate for the actual business impact of downtime.
            </p>
            <p className="mb-6">
              Read the limitations carefully. Many SLAs cap total credits at one month's service fees, regardless of how catastrophic the outage. Some exclude certain types of outages entirely. And almost none compensate for consequential damages—the revenue you lost, customers who went elsewhere, or operational chaos caused by the outage.
            </p>
            <p className="mb-6">
              <strong>Termination rights</strong> are another important remedy. If the provider consistently fails to meet SLA commitments, can you exit the contract without penalties? Look for clauses that allow termination after repeated breaches within a specified timeframe.
            </p>
            <p className="mb-6">
              The best approach is to view SLA credits not as compensation but as a quality signal. Providers with strong operational discipline rarely pay credits because they rarely breach their SLAs. If you're collecting frequent credits, it's time to find a new provider.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Questions to Ask Before Signing
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Armed with a deeper understanding of SLA mechanics, here are the essential questions to ask any telecommunications provider before committing:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What is your guaranteed uptime percentage, and how is it calculated? What's included and excluded?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How do you handle scheduled maintenance? Will I have service during these windows?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What is your Mean Time to Repair (MTTR) for critical outages? Is this guaranteed in the SLA?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Do you offer redundant connectivity options (diverse routing, backup circuits) to improve reliability?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What are your latency, jitter, and packet loss guarantees for voice traffic?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How are SLA credits calculated and claimed? What documentation do I need to provide?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Can I review your actual uptime performance data from the past 12-24 months?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What support channels are available (phone, email, portal), and what are the response time commitments?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Under what conditions can I terminate the contract if SLA commitments aren't met?</span>
              </li>
            </ul>
            <p className="mb-6">
              Don't accept vague answers or promises to "work with you" if problems arise. Everything should be documented in writing with specific metrics and consequences.
            </p>
          </div>

          {/* Section 7 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building Your Own Resilience Strategy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Even the best SLA can't guarantee zero downtime. Natural disasters, cyber attacks, and unexpected equipment failures can disrupt even the most reliable providers. That's why a comprehensive telecommunications strategy includes backup plans and redundancy:
            </p>
            <p className="mb-6">
              <strong>Diverse routing</strong> means your primary and backup circuits follow physically separate paths to your location. If construction damages one route, the other remains functional. Many enterprise-grade providers offer this as standard for critical connections.
            </p>
            <p className="mb-6">
              <strong>Failover configurations</strong> automatically reroute traffic when primary systems fail. Modern SD-WAN solutions can switch between multiple internet connections without dropping a call, and cloud-based phone systems can redirect calls to mobile devices or alternate locations.
            </p>
            <p className="mb-6">
              <strong>Geographic distribution</strong> reduces single-point-of-failure risk. If your entire operation is in one building with one internet connection, you're vulnerable. Cloud-based solutions inherently provide geographic redundancy across multiple data centers.
            </p>
            <p className="mb-6">
              The investment in redundancy should be proportional to the cost of downtime. Calculate what one hour of telecommunications failure costs your organization in lost revenue, productivity, and customer goodwill. That number will guide how much to invest in backup systems and premium SLA tiers.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Understanding SLA requirements for business telecommunications isn't just about reading contracts—it's about protecting your operations, your customers, and your reputation. Those uptime percentages represent real minutes and hours when your business is either running smoothly or grinding to a halt. The difference between providers isn't just in the features they offer or the prices they charge, but in their operational excellence and commitment to keeping you connected when it matters most.
            </p>
            <p className="mb-6">
              Take the time to thoroughly evaluate SLA terms, ask the hard questions, and demand transparency about actual performance history. Your telecommunications infrastructure is too critical to trust to marketing promises alone. With the right provider, backed by a comprehensive SLA and thoughtful redundancy planning, you can build the reliable, resilient communications foundation your business deserves.
            </p>
            <p>
              Need help evaluating telecommunications providers or designing a resilient communications strategy? ipfinity is an accredited carrier, which means we own the lines, the endpoints and the cloud queuing end to end and can answer questions about routing, redundancy and call records directly rather than passing them upstream. We work with businesses across Canada and the United States. Let&apos;s make sure your telecommunications infrastructure supports your operation rather than undermining it.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the ipfinity Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Cloud voice specialists at ipfinity, an accredited Canadian telecommunications carrier serving business customers since 2002.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  VoIP vs. Traditional Phone Systems: Making the Right Choice
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Compare modern VoIP solutions with legacy phone systems to determine the best fit for your organization's needs and budget.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Cybersecurity Essentials for Business Telecommunications
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Protect your voice and data communications from evolving cyber threats with layered security strategies and best practices.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Disaster Recovery Planning for Critical Communications
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Build resilient telecommunications infrastructure that keeps your business connected during emergencies and unexpected disruptions.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you build reliable, secure telecommunications infrastructure.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  )
}