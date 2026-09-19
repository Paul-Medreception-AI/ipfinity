import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SIP Trunking vs PRI Trunking: Which Technology Fits Your Infrastructure? | ipfinity',
  description: 'Compare SIP Trunking and PRI Trunking side-by-side. Understand costs, scalability, reliability, and which phone system technology is right for your business in Rockwood.',
}

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
            <span>Home</span>
            <span>›</span>
            <span>Resources</span>
            <span>›</span>
            <span>Comparison</span>
          </div>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            SIP Trunking vs PRI Trunking: Which Technology Fits Your Infrastructure?
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A comprehensive comparison of two leading telephony technologies to help you make an informed infrastructure decision for your business in Rockwood.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">SIP Trunking</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">PRI Trunking</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost Structure</div>
              <div className="p-6 border-l border-[var(--color-border)]">Pay-per-channel, lower upfront costs, flexible scaling</div>
              <div className="p-6 border-l border-[var(--color-border)]">Fixed 23-channel increments, higher hardware costs</div>
            </div>

            {/* Infrastructure */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Infrastructure</div>
              <div className="p-6 border-l border-[var(--color-border)]">Internet-based (broadband), no physical lines required</div>
              <div className="p-6 border-l border-[var(--color-border)]">Physical T1/E1 lines, dedicated copper infrastructure</div>
            </div>

            {/* Scalability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Scalability</div>
              <div className="p-6 border-l border-[var(--color-border)]">Highly flexible, add/remove channels instantly</div>
              <div className="p-6 border-l border-[var(--color-border)]">Limited to 23-channel blocks, requires physical installation</div>
            </div>

            {/* Reliability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Reliability</div>
              <div className="p-6 border-l border-[var(--color-border)]">Dependent on internet quality, requires QoS configuration</div>
              <div className="p-6 border-l border-[var(--color-border)]">Dedicated circuit, consistent quality, proven reliability</div>
            </div>

            {/* Setup Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Setup Time</div>
              <div className="p-6 border-l border-[var(--color-border)]">Minutes to hours, remote configuration</div>
              <div className="p-6 border-l border-[var(--color-border)]">Weeks for physical line installation and provisioning</div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Advanced Features</div>
              <div className="p-6 border-l border-[var(--color-border)]">Unified communications, video, messaging, easy integration</div>
              <div className="p-6 border-l border-[var(--color-border)]">Voice-focused, limited data capabilities</div>
            </div>

            {/* Geographic Flexibility */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Geographic Flexibility</div>
              <div className="p-6 border-l border-[var(--color-border)]">Multiple locations easily supported, no physical constraints</div>
              <div className="p-6 border-l border-[var(--color-border)]">Tied to physical location, separate lines per site</div>
            </div>

            {/* Disaster Recovery */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Disaster Recovery</div>
              <div className="p-6 border-l border-[var(--color-border)]">Built-in redundancy, automatic failover, cloud-based backup</div>
              <div className="p-6 border-l border-[var(--color-border)]">Requires secondary physical lines, manual failover</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Growing businesses, remote teams, multi-location operations</div>
              <div className="p-6 border-l border-[var(--color-border)]">Environments requiring maximum call quality, legacy systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="text-4xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Understanding SIP Trunking
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Session Initiation Protocol (SIP) Trunking represents the modern evolution of business telephony. By transmitting voice calls over your existing internet connection, SIP trunking eliminates the need for physical phone lines while providing superior flexibility and cost savings. This technology converts voice into data packets that travel over your IP network, enabling seamless integration with unified communications platforms.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              For businesses in Rockwood embracing digital transformation, SIP trunking offers unparalleled scalability. You can add or remove channels in real-time based on demand, paying only for what you use. This makes it ideal for companies with fluctuating call volumes, seasonal variations, or growth trajectories. The technology supports not just voice, but video conferencing, instant messaging, and file sharing—all through a single connection.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Implementation is straightforward for organizations with reliable, high-speed internet. Quality of Service (QoS) configurations prioritize voice traffic to ensure clear calls, while built-in redundancy features provide automatic failover to backup internet connections. Many businesses report 40-60% cost savings compared to traditional telephony, with the added benefit of supporting remote and distributed workforces without additional infrastructure.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-4xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Understanding PRI Trunking
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Primary Rate Interface (PRI) trunking is the established standard that has powered enterprise telecommunications for decades. Operating over dedicated T1 lines in North America (or E1 lines internationally), PRI delivers 23 simultaneous voice channels plus one data channel for signaling. This physical, circuit-switched technology provides predictable, consistent call quality that doesn't compete with other network traffic.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The dedicated nature of PRI lines means your voice communications are isolated from internet fluctuations, bandwidth constraints, or security threats that affect IP networks. For organizations where call quality is mission-critical—such as call centers, emergency services, or businesses where every customer interaction counts—PRI offers guaranteed performance with established service level agreements. The technology is proven, well-understood by telecom providers, and supported by mature troubleshooting processes.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              However, PRI's strength in reliability comes with limitations in flexibility. Scaling requires installing additional physical lines, which can take weeks and involves significant costs. Each location needs its own PRI connection, making multi-site deployments expensive. For businesses in Rockwood with stable call volumes, existing PRI infrastructure investments, or environments where internet reliability is questionable, PRI remains a solid choice—particularly as a transitional solution while upgrading network infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
              How to Decide: A Framework
            </h2>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Choose SIP Trunking if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have reliable, high-speed internet with sufficient bandwidth (100+ Kbps per concurrent call)</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Need flexibility to scale channels up or down based on changing business needs</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Want to support remote workers or multiple office locations without separate phone systems</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Seek cost reduction and pay-per-use pricing rather than fixed commitments</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Plan to integrate voice with video conferencing, chat, and unified communications</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Need rapid deployment without waiting for physical line installation</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Value disaster recovery features and geographic redundancy options</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Choose PRI Trunking if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have inconsistent or limited internet connectivity that can't support VoIP reliably</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Require guaranteed call quality with zero tolerance for latency, jitter, or packet loss</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have existing PBX infrastructure optimized for PRI and no plans to upgrade soon</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Operate a high-volume call center where voice quality directly impacts customer satisfaction</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have predictable, stable call volumes that fit neatly into 23-channel increments</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Prefer the proven reliability of circuit-switched technology with decades of track record</span>
                </li>
                <li className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Need a transitional solution while upgrading network infrastructure for eventual SIP migration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-xl p-6 shadow-sm animate-fade-up group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Can I switch from PRI to SIP without changing my phone system?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                In most cases, yes. Modern IP-PBX systems and many legacy PBX systems can support both PRI and SIP trunking with the addition of a SIP gateway or software update. This device translates between the protocols, allowing you to maintain your existing phone infrastructure while gaining the benefits of SIP connectivity. Your provider can assess your current system and recommend the appropriate migration path, often enabling a gradual transition where you test SIP performance before fully decommissioning PRI lines.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm animate-fade-up group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>What internet speed do I need for reliable SIP trunking?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                A general rule is 100 Kbps of bandwidth per concurrent call for both upload and download. For example, if you expect 20 simultaneous calls, you need at least 2 Mbps dedicated to voice traffic (plus overhead). However, bandwidth is just one factor—latency (under 150ms), jitter (under 30ms), and packet loss (under 1%) are equally critical. A Quality of Service (QoS) configuration on your router prioritizes voice packets to ensure consistent performance even when sharing bandwidth with other applications. Most modern business internet connections with 50+ Mbps symmetrical speeds and proper QoS can easily support SIP trunking.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm animate-fade-up group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Is SIP trunking secure for sensitive business communications?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                When properly configured, SIP trunking can be highly secure—potentially more secure than traditional phone lines. Enterprise SIP implementations use Transport Layer Security (TLS) for signaling encryption and Secure Real-time Transport Protocol (SRTP) for voice encryption, protecting calls from interception. Additional security measures include session border controllers (SBCs) that act as firewalls, authentication protocols, and fraud detection systems. The key is working with a reputable provider who implements security best practices and ensuring your network infrastructure includes proper firewall rules, intrusion detection, and regular security audits.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm animate-fade-up group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>What happens to my calls if the internet goes down with SIP trunking?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Modern SIP trunking solutions include multiple redundancy options to prevent communication loss. Most providers offer automatic failover to backup internet connections (such as secondary ISPs or cellular LTE), geographic redundancy where your phone service can route through multiple data centers, and call forwarding to mobile phones or alternate numbers during outages. Many businesses in Rockwood implement dual-ISP configurations specifically for this purpose. Additionally, cloud-hosted SIP systems can continue operating even if your office loses connectivity, allowing remote workers to maintain service while your primary location recovers.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm animate-fade-up group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Can I use both SIP and PRI simultaneously during a transition period?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Absolutely—this hybrid approach is actually recommended for low-risk migrations. You can maintain your PRI connection while adding SIP trunking, allowing you to test call quality, train staff, and validate system compatibility before fully committing. Many organizations use PRI as a backup during the transition or route specific call types (like critical customer service lines) through PRI while moving general office calls to SIP. This staged migration minimizes disruption and provides a safety net. Once you're confident in SIP performance, you can gradually reduce PRI capacity and eventually disconnect it entirely, completing the transition at your own pace.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Still Unsure Which Technology Is Right for You?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
            Every infrastructure has unique requirements. Let's discuss your specific needs, current setup, and business goals to determine the optimal telephony solution for your organization in Rockwood.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </>
  )
}