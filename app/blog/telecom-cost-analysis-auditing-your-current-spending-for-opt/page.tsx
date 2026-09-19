import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telecom Cost Analysis: Auditing Your Current Spending for Optimization Opportunities | ipfinity',
  description: 'Learn how to conduct a comprehensive telecom cost analysis to identify optimization opportunities, reduce spending, and improve efficiency in your healthcare practice.',
  keywords: 'telecom cost analysis, healthcare telecom costs, telecom audit, cost optimization, telecommunications spending, healthcare IT costs, Rockwood',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-white/80 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Healthcare Technology
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Telecom Cost Analysis: Auditing Your Current Spending for Optimization Opportunities
          </h1>
          
          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. ipfinity Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            In today's healthcare landscape, where every dollar counts toward patient care, many practices in Rockwood are unknowingly hemorrhaging thousands annually through inefficient telecommunications spending. The complexity of modern telecom contracts, the rapid evolution of communication technologies, and the maze of hidden fees create a perfect storm where costs spiral without organizations even realizing it. A comprehensive telecom cost analysis isn't just about cutting expenses—it's about redirecting resources toward what truly matters: delivering exceptional patient care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Whether you're managing a solo practice or overseeing IT for a larger healthcare facility, understanding where your telecommunications dollars are going is fundamental to operational efficiency. This guide will walk you through the essential steps of auditing your current telecom spending and identifying concrete opportunities for optimization that can save your practice significant money while improving service quality.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding the True Cost of Healthcare Telecommunications
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Healthcare telecommunications encompasses far more than just phone lines. Modern medical practices rely on a complex ecosystem of interconnected services: VoIP systems for patient communication, high-speed internet for electronic health records, secure fax lines for HIPAA-compliant document transmission, mobile devices for on-call staff, video conferencing for telemedicine appointments, and redundant connections to ensure uninterrupted service.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The challenge lies in the fragmentation of these services. Many practices have accumulated telecom contracts over years, often from different providers, each with its own billing structure, renewal dates, and fee schedules. This fragmentation makes it nearly impossible to see the complete picture of telecommunications spending without a systematic audit approach.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Industry research indicates that healthcare organizations typically overspend on telecommunications by 20-30% due to unused services, outdated contracts, billing errors, and failure to negotiate better rates. For a mid-sized practice spending $3,000 monthly on telecom services, this represents potential savings of $7,200 to $10,800 annually—funds that could be redirected toward equipment, staff development, or patient care improvements.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "A comprehensive telecom audit typically uncovers savings opportunities of 20-30%, allowing healthcare practices to redirect thousands of dollars toward patient care rather than unnecessary telecommunications expenses."
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Five-Phase Telecom Audit Framework
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Conducting an effective telecom cost analysis requires a structured approach. The following five-phase framework provides healthcare practices with a systematic method for examining current spending and identifying optimization opportunities.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 1: Inventory and Documentation</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Begin by creating a comprehensive inventory of all telecommunications services your practice currently uses. Gather recent bills from all providers—typically the past three to six months—and create a master spreadsheet documenting each service, provider, monthly cost, contract terms, and renewal dates. Include phone lines, internet connections, mobile devices, fax services, conferencing platforms, and any specialized medical communication systems. This baseline documentation is essential for identifying redundancies and forgotten services.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 2: Usage Analysis</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Once you have a complete inventory, analyze actual usage patterns against what you're paying for. Request detailed usage reports from each provider. Are you paying for 50 phone lines when only 35 are actively used? Do you have unlimited data plans on devices that use minimal data? Are there features included in your packages that your practice never utilizes? This phase often reveals the most immediate savings opportunities through simple service right-sizing.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 3: Rate and Fee Analysis</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Examine the rates you're being charged compared to current market rates for similar services. Telecommunications pricing has decreased significantly in recent years, yet many practices continue paying rates established years ago. Look particularly at long-distance charges, per-minute rates, data overages, equipment rental fees, and administrative charges. Contact your providers to inquire about current promotional rates or loyalty discounts that may be available but not automatically applied.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 4: Contract Terms Review</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Review all contract terms, focusing on renewal dates, early termination fees, automatic escalation clauses, and service level agreements. Many practices are locked into multi-year contracts with automatic renewal clauses that perpetuate unfavorable terms. Understanding these contractual obligations allows you to create a strategic timeline for renegotiation or provider changes that minimizes penalties while maximizing savings opportunities.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 5: Technology Assessment</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Finally, assess whether your current technology infrastructure aligns with modern best practices and your practice's actual needs. Are you still using traditional phone lines when VoIP would be more cost-effective? Could unified communications platforms consolidate multiple services? Would upgrading to fiber internet improve efficiency while potentially reducing costs? This forward-looking assessment ensures that cost optimization doesn't come at the expense of quality or functionality.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Common Hidden Costs and Billing Errors
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telecommunications billing is notoriously complex, and healthcare practices frequently pay for charges they shouldn't. Understanding common billing issues helps identify immediate correction opportunities that can generate quick savings without requiring service changes or renegotiations.
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Phantom Services:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Lines or services for departed employees, closed locations, or discontinued equipment that continue generating monthly charges long after they're needed.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Equipment Rental Overcharges:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Continued monthly rental fees for modems, routers, or phones that have long since been paid for or could be purchased outright for less than a year's rental costs.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Regulatory Fee Inflation:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Providers sometimes charge regulatory recovery fees that exceed actual regulatory costs, or apply these fees to services not subject to such regulations.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Service Duplication:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Multiple overlapping services providing similar functionality from different providers, such as paying for both traditional fax lines and eFax services, or maintaining both legacy phone systems and new VoIP platforms during extended transition periods.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Automatic Rate Increases:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Annual or periodic price increases buried in contract fine print that gradually inflate costs without corresponding service improvements.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Calculation Errors:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Simple billing mistakes, from incorrect tax calculations to services billed at wrong rates, that accumulate over time when bills aren't carefully reviewed.</span>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Studies of telecom billing accuracy consistently find error rates of 5-15%, nearly always in the provider's favor. For a practice spending $50,000 annually on telecommunications, this represents $2,500 to $7,500 in potential overcharges that can be recovered through careful bill auditing and provider disputes.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Negotiation Strategies That Work for Healthcare Practices
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Armed with audit findings, healthcare practices in Rockwood can leverage several effective negotiation strategies to secure better rates and terms from telecommunications providers. The key is approaching negotiations from a position of knowledge and preparedness.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            First, obtain competitive quotes from alternative providers before approaching your current vendors. Even if you have no intention of switching, competitive pricing provides powerful leverage during negotiations. Telecommunications is a highly competitive industry, and providers would rather offer discounts to retain existing customers than lose them to competitors.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Second, bundle services strategically. Providers typically offer better pricing when you consolidate multiple services with them, but avoid bundling that creates vendor lock-in or includes services you don't need. The goal is achieving economies of scale without sacrificing flexibility.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Third, time your negotiations strategically. Approaching providers near the end of their fiscal quarters or years, when sales teams are motivated to meet targets, often yields better results. Similarly, beginning renegotiations 90-120 days before contract renewals provides ample time for discussions without the pressure of impending deadlines.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Finally, don't overlook smaller regional providers or healthcare-specific telecommunications companies. While major carriers have name recognition, specialized providers often offer more personalized service, better understanding of healthcare requirements like HIPAA compliance, and competitive pricing that larger carriers struggle to match.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Technology Modernization Opportunities
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond immediate cost cutting, telecom audits often reveal opportunities for technology modernization that simultaneously reduces costs and improves functionality. Healthcare communications have evolved dramatically, and practices still using legacy systems may be paying premium prices for inferior service.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voice over IP (VoIP) systems represent one of the most significant modernization opportunities. Compared to traditional phone systems, VoIP typically reduces costs by 30-50% while offering superior features like mobile integration, call analytics, automated routing, and seamless integration with practice management software. For healthcare practices, VoIP systems can improve patient experience through reduced hold times and more efficient call handling.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Unified communications platforms that integrate voice, video, messaging, and collaboration tools into single systems eliminate redundant subscriptions while improving care coordination. Rather than paying separately for phone systems, video conferencing, instant messaging, and file sharing, unified platforms provide all these capabilities at a fraction of the combined cost.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Cloud-based telecommunications infrastructure offers additional advantages for healthcare practices, including reduced on-site equipment requirements, easier scalability, automatic updates, and improved disaster recovery capabilities. While requiring careful attention to security and HIPAA compliance, cloud solutions often provide cost savings of 20-40% compared to maintaining on-premises systems.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Implementing Ongoing Cost Management
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A one-time telecom audit delivers immediate savings, but sustained cost optimization requires ongoing management processes. Healthcare practices should establish quarterly bill reviews to catch billing errors early, monitor usage patterns for changes that might warrant service adjustments, and track upcoming contract renewals to ensure timely renegotiations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Designate a specific staff member as your telecommunications manager, responsible for maintaining the service inventory, reviewing bills, coordinating with providers, and staying informed about new technologies and pricing options. Even dedicating just a few hours monthly to telecom management typically generates returns far exceeding the time investment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Create clear policies around telecommunications procurement and usage. Requiring approval processes for new services or devices prevents the uncontrolled proliferation of costs. Implementing usage guidelines for mobile devices and long-distance calling helps contain variable expenses.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Finally, schedule comprehensive telecom audits every 18-24 months. Even with ongoing management, periodic deep dives ensure your practice isn't missing optimization opportunities and that your telecommunications infrastructure continues aligning with your operational needs and budget constraints.
          </p>

          {/* Closing Paragraph */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Taking Action on Your Telecom Costs
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telecommunications costs represent a significant yet often overlooked component of healthcare practice operational expenses. Through systematic auditing, strategic negotiation, and thoughtful modernization, practices in Rockwood can typically reduce these costs by 20-40% while simultaneously improving service quality and functionality. These savings directly support your primary mission: providing exceptional patient care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If conducting a comprehensive telecom audit feels overwhelming, or if you'd like expert guidance navigating the complexities of healthcare telecommunications optimization, professional assistance is available. The ipfinity team understands the unique telecommunications needs of medical practices and can help you identify and capture optimization opportunities specific to your situation.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <aside className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the ipfinity Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Healthcare IT Infrastructure Costs
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A comprehensive guide to managing technology expenses in medical practices.
                </p>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  VoIP Systems for Healthcare Practices
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How modern phone systems improve patient communication while reducing costs.
                </p>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  HIPAA-Compliant Communication Solutions
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Ensuring patient privacy while optimizing telecommunications technology.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}