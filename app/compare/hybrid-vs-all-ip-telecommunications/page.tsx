import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hybrid vs All-IP Telecommunications: Finding the Right Migration Path | ipfinity',
  description: 'Compare hybrid and all-IP telecommunications systems. Understand migration paths, costs, benefits, and which solution is right for your business needs in Rockwood.',
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light leading-tight mb-6">
            Hybrid vs All-IP Telecommunications: Finding the Right Migration Path
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A comprehensive guide to help you choose the optimal telecommunications strategy for your organization
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-semibold mb-3 text-[var(--color-primary)]">Hybrid Telecommunications</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                A transitional approach that combines traditional TDM infrastructure with IP-based systems, allowing gradual migration while maintaining existing investments and minimizing disruption.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-['Cormorant'] text-2xl font-semibold mb-3 text-[var(--color-primary)]">All-IP Telecommunications</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                A complete digital transformation to IP-based infrastructure, offering maximum efficiency, scalability, and access to modern unified communications features with lower long-term operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-center mb-12 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-4 font-semibold">Feature</div>
              <div className="p-4 font-semibold border-l border-white/20">Hybrid System</div>
              <div className="p-4 font-semibold border-l border-white/20">All-IP System</div>
            </div>
            
            {/* Implementation Timeline */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Implementation Timeline</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">3-12 months phased approach</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">1-6 months full deployment</div>
            </div>
            
            {/* Initial Investment */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Initial Investment</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Moderate - leverages existing infrastructure</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Higher - complete system replacement</div>
            </div>
            
            {/* Long-term Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Long-term Operating Cost</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Moderate - dual system maintenance</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Lower - unified platform efficiency</div>
            </div>
            
            {/* Scalability */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Scalability</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Limited by legacy constraints</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Highly scalable and flexible</div>
            </div>
            
            {/* Feature Set */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Feature Set</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Basic voice + limited UC features</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Full unified communications suite</div>
            </div>
            
            {/* Risk Level */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Migration Risk</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Lower - gradual transition</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Moderate - requires thorough planning</div>
            </div>
            
            {/* Business Continuity */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Business Continuity</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Excellent - maintains legacy backup</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Good - built-in redundancy options</div>
            </div>
            
            {/* Staff Training */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Staff Training Needed</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Minimal - familiar interfaces</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Moderate - new platform adoption</div>
            </div>
            
            {/* Future-Proofing */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Future-Proofing</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Limited - eventual migration needed</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Excellent - built for emerging tech</div>
            </div>
            
            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-4 font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Risk-averse organizations, multi-site legacy infrastructure</div>
              <div className="p-4 border-l border-[var(--color-border)] text-[var(--color-muted)]">Growth-focused businesses, modernization priorities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Hybrid Deep Dive */}
            <div className="animate-fade-up">
              <h2 className="font-['Cormorant'] text-4xl font-light mb-6 text-[var(--color-primary)]">
                Hybrid Telecommunications: The Transitional Approach
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                  Hybrid telecommunications systems represent a pragmatic middle ground for organizations navigating the shift from traditional TDM infrastructure to modern IP-based communications. This approach allows businesses to maintain their existing investments while gradually introducing IP capabilities, creating a bridge between legacy systems and future technology.
                </p>
                
                <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                  The hybrid model typically involves deploying IP-enabled equipment that can interface with existing TDM infrastructure through gateways and protocol converters. This enables organizations to add new IP extensions and features while continuing to use their current phone system, PBX equipment, and analog devices. The approach is particularly valuable for multi-site organizations with varying infrastructure maturity levels across locations.
                </p>
                
                <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                  Organizations choosing hybrid systems often have significant capital invested in recently purchased telecommunications equipment, operate in highly regulated industries requiring proven stability, or serve geographically dispersed locations with inconsistent network infrastructure. The phased migration path allows IT teams to gain experience with IP technologies while maintaining familiar fallback systems, reducing both technical and organizational change management risks.
                </p>

                <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">Typical Implementation Profile</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Hybrid implementations typically begin with IP trunking to reduce telecommunications costs while maintaining existing internal systems. Organizations then gradually migrate high-value users to IP phones and unified communications features, often starting with executive teams or mobile workers who benefit most from advanced capabilities. The transition can span 18-36 months, with final legacy system decommissioning occurring once IP infrastructure proves reliable and staff become comfortable with new tools.
                </p>
              </div>
            </div>

            {/* All-IP Deep Dive */}
            <div className="animate-fade-up">
              <h2 className="font-['Cormorant'] text-4xl font-light mb-6 text-[var(--color-primary)]">
                All-IP Telecommunications: The Complete Digital Transformation
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                  All-IP telecommunications represents a comprehensive shift to packet-based voice, video, and data transmission over converged networks. This approach eliminates legacy TDM infrastructure entirely, replacing it with IP phones, SIP trunks, and unified communications platforms that deliver voice as just another application running on your data network.
                </p>
                
                <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                  The benefits of all-IP systems extend far beyond simple cost savings. Organizations gain access to advanced unified communications features including presence information, instant messaging, video conferencing, mobile integration, and sophisticated call routing based on business rules. The system becomes inherently scalable—adding new users requires only IP phones and licenses rather than physical PBX ports. Integration with business applications enables features like screen-pop customer records, click-to-dial from CRM systems, and automated call logging.
                </p>
                
                <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                  All-IP migrations work best for organizations with modern network infrastructure capable of quality-of-service prioritization, businesses undergoing office moves or expansions, and companies prioritizing workforce mobility and remote work capabilities. The approach requires solid project planning but delivers immediate access to full functionality rather than incremental feature adoption over years.
                </p>

                <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-ink)]">Typical Implementation Profile</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  All-IP implementations begin with comprehensive network assessment and potential upgrades to ensure adequate bandwidth and QoS capabilities. Organizations deploy their chosen unified communications platform—whether cloud-based, on-premises, or hybrid cloud—and conduct thorough testing before the cutover date. User training occurs in the weeks before migration, with super-users identified to provide peer support. The actual cutover typically happens over a weekend, with the organization returning Monday to a completely new system. Post-migration optimization continues for 30-60 days as usage patterns emerge and administrators fine-tune system performance.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light mb-8 text-center text-[var(--color-ink)]">
              How to Decide: Your Migration Path
            </h2>
            
            <div className="space-y-10">
              {/* Choose Hybrid */}
              <div>
                <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-primary)]">
                  Choose Hybrid Telecommunications If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You have recently invested in telecommunications equipment with remaining useful life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your organization has multiple sites with varying infrastructure maturity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Network infrastructure upgrades are constrained by budget or physical limitations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your organization culture is risk-averse and prefers gradual change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You need to maintain analog devices or specialized equipment with TDM interfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">IT staff need time to develop IP telephony expertise before full commitment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Business growth is stable and feature requirements are relatively static</span>
                  </li>
                </ul>
              </div>

              {/* Choose All-IP */}
              <div>
                <h3 className="font-['Cormorant'] text-2xl font-semibold mb-4 text-[var(--color-primary)]">
                  Choose All-IP Telecommunications If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Your existing telecommunications equipment is end-of-life or no longer supported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You're planning an office move, expansion, or significant facility renovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Network infrastructure is modern with adequate bandwidth and QoS capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Unified communications features are critical to your business strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Workforce mobility and remote work capabilities are organizational priorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">You anticipate rapid growth requiring frequent system scaling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Long-term operational cost reduction is more important than minimizing upfront investment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white rounded-lg border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Still uncertain?</strong> Many organizations benefit from a hybrid-first approach that lays groundwork for eventual all-IP migration. This provides time to upgrade network infrastructure, develop staff expertise, and demonstrate ROI to stakeholders before full commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-center mb-12 text-[var(--color-ink)]">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>How long does each migration approach typically take?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Hybrid migrations typically span 3-12 months depending on organizational size and complexity, with phased deployments across sites or departments. All-IP migrations can be completed in 1-6 months, including network assessment, equipment procurement, testing, and cutover. The actual transition weekend for all-IP deployments usually takes 48-72 hours, while hybrid systems maintain continuous operation throughout their gradual evolution.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>Can I start with hybrid and migrate to all-IP later?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Absolutely—this represents a common and prudent migration path. Many organizations implement hybrid systems specifically as a stepping stone to eventual all-IP deployment. The key is selecting hybrid equipment that supports full IP capabilities, ensuring your investment carries forward when you're ready to decommission legacy TDM components. This approach allows you to migrate at your own pace while building organizational readiness and IT expertise. Most hybrid systems can transition to all-IP by simply removing gateway equipment and retiring analog/TDM devices rather than replacing the core IP infrastructure.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>What network requirements are essential for all-IP telecommunications?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                All-IP systems require adequate bandwidth (approximately 100 kbps per concurrent call), Quality of Service (QoS) configuration to prioritize voice traffic, Power over Ethernet (PoE) capable switches to power IP phones, and reliable network infrastructure with redundancy. Most modern networks built in the last 5-7 years meet these requirements with minimal upgrades. A professional network assessment should precede any all-IP deployment to identify potential bottlenecks and ensure voice quality. Geographic locations with limited internet connectivity may need bandwidth upgrades or may be better suited to hybrid approaches that maintain local PSTN connectivity.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>How do costs compare over a 5-year period?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Hybrid systems typically have lower initial costs but higher ongoing expenses due to maintaining dual infrastructures. All-IP systems require larger upfront investment but deliver significant operational savings through reduced trunk costs, lower maintenance expenses, and elimination of separate voice and data networks. Over a 5-year period, all-IP systems generally prove more cost-effective for organizations with 50+ users, with break-even typically occurring around 18-24 months. Total cost of ownership calculations should include telecommunications expenses, maintenance contracts, staff time for system administration, and productivity gains from unified communications features—not just equipment costs.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>What happens to our phone numbers during migration?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Your existing phone numbers remain unchanged during either hybrid or all-IP migrations through a process called number porting. Your telecommunications provider manages the porting process, which typically takes 2-4 weeks and occurs seamlessly without service interruption. Both hybrid and all-IP systems support your current DIDs (Direct Inward Dial numbers), main numbers, and toll-free numbers. The only difference is how calls route to your organization—via SIP trunks instead of traditional PRI or analog lines—but callers experience no change whatsoever. During hybrid migrations, you can even maintain parallel trunking methods during the transition period for extra security.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-6 text-[var(--color-ink)]">
            Ready to Choose Your Migration Path?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
            Get expert guidance tailored to your infrastructure, business requirements, and growth plans in Rockwood.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Discuss Your Options
          </a>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Complimentary telecommunications assessment • No-obligation consultation
          </p>
        </div>
      </section>
    </main>
  )
}