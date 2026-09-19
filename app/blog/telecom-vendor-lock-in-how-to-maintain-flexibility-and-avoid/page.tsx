import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telecom Vendor Lock-In: How to Maintain Flexibility and Avoid Dependencies | ipfinity',
  description: 'Learn how to protect your organization from telecom vendor lock-in. Discover strategies to maintain flexibility, reduce dependencies, and make informed decisions about your communication infrastructure.',
  keywords: 'telecom vendor lock-in, telecommunications flexibility, vendor dependencies, telecom contracts, communication infrastructure, vendor management, telecom strategy',
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
            Technology Strategy
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Telecom Vendor Lock-In: How to Maintain Flexibility and Avoid Dependencies
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By the IPFINITY Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your organization&apos;s telecommunications infrastructure is the backbone of daily operations: it connects your teams, carries every customer call, and underpins the systems the business runs on. Yet what begins as a practical carrier relationship can evolve into something far more constraining: vendor lock-in. This situation, where switching providers becomes prohibitively expensive or technically complex, can limit your flexibility, inflate costs, and restrict your ability to adapt as the business changes.
            </p>
            <p className="mb-6">
              Understanding vendor lock-in isn't just about avoiding a bad contract—it's about maintaining strategic control over your communications infrastructure and ensuring your technology serves your mission, not the other way around. Whether you're evaluating a new telecom provider or reassessing your current arrangements, the decisions you make today will shape your operational flexibility for years to come.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Vendor Lock-In in Telecommunications
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Vendor lock-in occurs when an organization becomes so dependent on a particular vendor's products, services, or infrastructure that switching to an alternative becomes impractical or economically unfeasible. In telecommunications, this dependency can manifest in several ways: proprietary hardware that only works with one provider's network, long-term contracts with punitive early termination fees, custom integrations that don't transfer to other systems, or specialized technical configurations that require vendor-specific expertise.
            </p>
            <p className="mb-6">
              Some businesses are more exposed than others. An operation whose published number is effectively its front door, a call centre with routing and queue logic built up over years, or a multi-site business where each branch was connected at a different time and under a different agreement, all accumulate dependencies faster than they realise. When a proprietary system holds your call flows, your recordings and your reporting, the barriers to moving multiply well beyond the cost of the service itself.
            </p>
            <p className="mb-6">
              Lock-in isn't always malicious—sometimes it's simply the result of natural business evolution and technical decisions made over time. However, the consequences are real: reduced negotiating power with your current vendor, inability to take advantage of better pricing or features from competitors, and constrained capacity to respond to changing organizational needs or technological advances.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Common Lock-In Mechanisms to Watch For
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Recognizing the warning signs of vendor lock-in is the first step toward maintaining flexibility. Several mechanisms commonly create dependencies in telecommunications relationships:
            </p>
            <div className="my-8 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p><strong>Proprietary hardware and equipment:</strong> Phone systems, switches, or network equipment that only functions with one provider's service create immediate technical barriers to switching.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p><strong>Long-term contracts with steep penalties:</strong> Multi-year agreements with substantial early termination fees effectively trap you in the relationship regardless of service quality or competitive alternatives.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p><strong>Custom integrations and APIs:</strong> Vendor-specific integrations with your CRM, ticketing, or line-of-business applications that don&apos;t easily translate to another platform.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p><strong>Data and configuration portability issues:</strong> Difficulty exporting call records, configurations, user settings, or historical data in formats usable by other systems.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p><strong>Number portability restrictions:</strong> Complex or delayed processes for transferring your organization's phone numbers to a new provider.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p><strong>Specialized training and knowledge requirements:</strong> Staff expertise that's tied to one vendor's specific system, making transitions more disruptive and costly.</p>
              </div>
            </div>
            <p className="mb-6">
              Understanding these mechanisms allows you to evaluate your current exposure and make informed decisions about future commitments. Not every dependency is avoidable or even problematic—the key is ensuring dependencies are intentional, justified by clear benefits, and accompanied by exit strategies.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "The best time to negotiate your exit strategy is before you sign the contract—when you still have leverage and alternatives."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Strategies for Maintaining Flexibility
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Avoiding vendor lock-in requires proactive planning and strategic decision-making throughout your relationship with telecommunications providers. These approaches can help maintain operational flexibility while still benefiting from strong vendor partnerships:
            </p>
            <p className="mb-6">
              <strong>Prioritize open standards and interoperability.</strong> When evaluating systems, favor technologies built on industry-standard protocols like SIP (Session Initiation Protocol) for voice communications. Standards-based systems generally offer greater flexibility to switch providers or integrate with different platforms. Ask prospective vendors explicitly about standards compliance and compatibility with competitor systems.
            </p>
            <p className="mb-6">
              <strong>Own your equipment when practical.</strong> While hosted and managed services have advantages, owning key infrastructure components, particularly those with long useful lives, reduces dependency. Handsets are the clearest example: a phone that speaks standard SIP can be re-registered to another carrier, while a locked handset becomes scrap the day you leave. IPFINITY certifies Snom, Grandstream and Yealink endpoints, and the Snom units carry an unusual three-year warranty, which matters when the hardware is expected to outlast the contract it arrived with. When carrier-supplied equipment is necessary, negotiate clear terms around ownership at contract end.
            </p>
            <p className="mb-6">
              <strong>Negotiate shorter contract terms with defined exit processes.</strong> While longer contracts may offer better pricing, they also increase lock-in risk. Consider 1-2 year agreements with clear renewal terms rather than 3-5 year commitments. Ensure contracts explicitly define the process, timeline, and support for transitioning to another provider, including number porting procedures and data export requirements.
            </p>
            <p className="mb-6">
              <strong>Maintain documentation and institutional knowledge.</strong> Document your telecommunications infrastructure, configurations, and integrations independent of vendor documentation. This knowledge base becomes invaluable during transitions and reduces dependency on vendor-specific expertise. Cross-train staff so knowledge isn't concentrated with one or two individuals.
            </p>
            <p className="mb-6">
              <strong>Build modular, loosely-coupled architectures.</strong> Where possible, design your communications ecosystem with discrete, interchangeable components rather than monolithic, all-in-one solutions from a single vendor. This approach allows you to change individual elements without disrupting the entire system.
            </p>
            <p className="mb-6">
              <strong>Regularly assess alternatives and market conditions.</strong> Even when satisfied with your current provider, periodically review competitive offerings. This practice keeps you informed about market rates and emerging capabilities while maintaining your negotiating position during renewals.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Questions to Ask Before Signing
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The contract negotiation phase offers your best opportunity to establish favorable terms and avoid lock-in. Before committing to any telecommunications vendor, ask these critical questions:
            </p>
            <div className="my-8 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>What are the specific terms and costs associated with early termination? Can penalties be prorated or waived under specific circumstances?</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>How does the number porting process work, and what is the typical timeline? Are there any circumstances where porting could be delayed or complicated?</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Can I export my data—including call records, configurations, and user settings—in standard formats? Is there a cost for data export?</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Does this system support industry-standard protocols? Can it interoperate with equipment or services from other vendors?</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Who owns the equipment at the end of the contract? If leased, what are the purchase options and costs?</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>What level of support will you provide during a potential transition to another provider? Is this support obligation documented in the contract?</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>How do pricing and terms change upon renewal? Are renewal rates guaranteed or subject to change?</p>
              </div>
            </div>
            <p className="mb-6">
              Document the answers to these questions and, whenever possible, incorporate favorable terms directly into your contract. Verbal assurances provide little protection when circumstances change or you're dealing with different account representatives years later.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When Lock-In Might Be Acceptable
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              It's important to recognize that not all vendor dependencies are problematic. Some degree of commitment is often necessary to access specialized capabilities, achieve cost efficiencies, or enable deep integrations that genuinely benefit your organization. The question isn't whether to avoid all dependencies, but whether specific commitments offer sufficient value to justify the reduced flexibility.
            </p>
            <p className="mb-6">
              Consider accepting greater vendor dependency when you're receiving clearly superior technology or capabilities unavailable through standards-based alternatives, when significant cost savings justify some flexibility trade-off, when the vendor has a strong track record of fair dealing and customer-focused contract modifications, or when the lock-in period is limited and accompanied by concrete performance guarantees.
            </p>
            <p className="mb-6">
              The key is making these decisions consciously, with full awareness of the trade-offs involved and adequate protections built into contractual terms. Lock-in becomes problematic when it's unintentional, when it exceeds the value received, or when it leaves you vulnerable to unilateral changes in pricing or service quality.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Building a Balanced Telecommunications Strategy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Ultimately, avoiding vendor lock-in is about maintaining strategic options and ensuring your telecommunications infrastructure serves your organization's mission rather than constraining it. This doesn't mean avoiding strong vendor relationships—partnerships with skilled, reliable providers deliver enormous value. Rather, it means structuring those relationships to preserve your flexibility and negotiating power.
            </p>
            <p className="mb-6">
              Approach telecommunications decisions with the same diligence you&apos;d apply to any significant infrastructure investment. Involve stakeholders from IT, operations and finance, along with the teams who actually spend their day on the phone and will notice a change long before a report does. Consider both immediate functionality and long-term flexibility. Document your requirements and the reasoning behind each decision, and plan for an eventual transition even when you don&apos;t anticipate needing one.
            </p>
            <p className="mb-6">
              The telecommunications landscape continues evolving rapidly, with new technologies, delivery models, and competitive entrants regularly disrupting established patterns. Organizations that maintain flexibility are best positioned to adapt to these changes, take advantage of innovations, and ensure their communications infrastructure continues supporting rather than limiting their capabilities.
            </p>
            <p className="mb-6">
              If you're currently evaluating telecommunications options or concerned about your existing vendor relationships, seeking expert guidance can help you navigate complex technical and contractual considerations. A strategic approach today creates options and opportunities that will serve your organization for years to come.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="mt-12 p-8 bg-[var(--color-cream)] rounded-lg">
            <p className="text-[var(--color-ink)] leading-loose text-base">
              <strong>Need help evaluating your telecommunications strategy?</strong> The team at ipfinity brings expertise in telecommunications infrastructure, vendor management, and strategic planning. We can help you assess your current situation, identify vulnerabilities, and develop approaches that balance functionality with flexibility. <a href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors underline">Contact us</a> to discuss your organization's specific needs and explore solutions that support your long-term success.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the IPFINITY Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                An accredited Canadian telecommunications carrier based in Rockwood, Ontario, delivering cloud voice, fax and global numbering since 2002.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Technology</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Understanding SIP Trunking for Business
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How SIP trunking modernises your telecommunications infrastructure while reducing cost and increasing flexibility.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Compliance</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Privacy and Your Phone System Under PIPEDA
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  What Canadian privacy law means for call recording, retention and who can reach your communications data.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Strategy</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Total Cost of Ownership: Evaluating Telecom Investments
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Look beyond monthly fees to understand the true cost of telecommunications systems over their lifecycle.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}