import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telecom Cost Analysis: Auditing Your Current Spending for Optimization Opportunities | ipfinity',
  description: 'How to audit your business telecom spending line by line, find the charges nobody authorised, and right-size voice, data and fax services without losing capability.',
  keywords: 'telecom cost analysis, business telecom costs, telecom audit, cost optimization, telecommunications spending, SIP trunking costs, Rockwood',
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
            Telecom Strategy
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
            <span>The IPFINITY Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Telecommunications is one of the few recurring costs a business keeps paying for years without ever re-reading the contract behind it. Services accumulate, agreements renew quietly, and charges appear that nobody can trace back to a decision. Plenty of organisations in and around Rockwood are spending well above what their usage justifies, not because they were sold badly, but because no one has looked at the whole account in a long time. A telecom cost analysis is not simply an exercise in cutting spend. It is about knowing exactly what you are paying for, so the rest of the budget can go somewhere it does more good.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Whether you run a single office or manage IT across several sites, understanding where your telecommunications budget goes is fundamental to running an efficient operation. This guide walks through the steps of auditing your current spending and identifying concrete opportunities to reduce it, without giving up capability or service quality in the process.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding the True Cost of Business Telecommunications
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Business telecommunications covers far more than phone lines. A typical operation depends on an interconnected set of services: voice channels for inbound and outbound calling, internet access for cloud applications, fax for signed documents and order confirmations, mobile devices for staff who are rarely at a desk, video conferencing for distributed teams, and redundant connections so that none of the above stops when a single link fails.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The difficulty lies in the fragmentation of these services. Most organisations have accumulated telecom agreements over many years, often from different carriers, each with its own billing structure, renewal date and fee schedule. That fragmentation makes it close to impossible to see the complete picture of telecommunications spending without a systematic audit.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            The overspend that results is rarely one large mistake. It is a channel added for a project that ended, a mobile line for someone who left two years ago, a rate that was competitive when it was signed and has never been revisited. None of these items is big enough on its own to demand anyone&apos;s attention, which is precisely why they survive. An audit is simply the act of putting them all on one page, where the total stops being invisible.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            &quot;An audit rarely uncovers one expensive mistake. It uncovers twenty small ones, each of which has been renewing quietly for years.&quot;
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Five-Phase Telecom Audit Framework
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Conducting an effective telecom cost analysis requires a structured approach. The following five-phase framework gives a business a systematic method for examining current spending and identifying where it can safely come down.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 1: Inventory and Documentation</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Begin by creating a complete inventory of every telecommunications service your business currently buys. Gather recent invoices from all carriers, typically the past three to six months, and build a master spreadsheet recording each service, the carrier, the monthly cost, the contract terms and the renewal date. Include voice channels and SIP trunks, internet circuits, mobile devices, fax services, conferencing platforms, and any line-of-business system that carries a communications charge of its own. This baseline is what makes redundancies and forgotten services visible.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 2: Usage Analysis</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Once the inventory is complete, compare actual usage against what you are paying for. Ask each carrier for detailed usage reporting. Are you paying for fifty channels when thirty-five carry traffic? Are there unlimited data plans sitting on devices that barely use any? Are there features bundled into your package that nobody has ever switched on? This phase usually produces the fastest savings, because right-sizing a service does not require changing anything about how the business works. At IPFINITY we review customers&apos; line counts every quarter and will tell a customer to drop channels they are not using, which is the same exercise run on your behalf rather than after the fact.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 3: Rate and Fee Analysis</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Examine the rates you are being charged against what the same services cost today. Telecommunications pricing has fallen a long way, yet plenty of organisations are still paying rates set years ago. Look particularly at long-distance charges, per-minute rates, data overages, equipment rental fees and administrative charges. Ask your carriers directly about current rates or loyalty discounts that may be available but are not applied automatically, because in most cases they will not be.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 4: Contract Terms Review</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Review all contract terms, with particular attention to renewal dates, early termination fees, automatic escalation clauses and service level commitments. Many organisations are locked into multi-year agreements with automatic renewal clauses that quietly perpetuate unfavourable terms. Understanding those obligations lets you build a realistic timeline for renegotiation or a change of carrier, one that minimises penalties rather than triggering them.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong className="text-[var(--color-primary)]">Phase 5: Technology Assessment</strong>
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Finally, assess whether your current infrastructure still matches how the business actually operates. Are you paying per circuit for legacy lines where SIP trunking would cost less and scale in a day rather than a quarter? Could a single cloud voice platform replace several separate subscriptions? Would better internet access improve day-to-day performance while reducing what you spend overall? This forward-looking step keeps cost reduction from quietly becoming capability reduction.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Common Hidden Costs and Billing Errors
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telecommunications billing is notoriously complex, and businesses routinely pay for charges they should not. Knowing the common patterns helps you spot corrections that generate savings immediately, without changing a single service or reopening a negotiation.
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Phantom Services:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Lines or services for departed employees, closed sites, or retired equipment that keep generating monthly charges long after anyone needed them.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Equipment Rental Overcharges:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Continuing monthly rental on modems, routers or handsets that were paid off long ago, or that could be bought outright for less than a year of rental.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Regulatory Fee Inflation:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Recovery fees that outrun the underlying regulatory cost, or that are applied to services which are not subject to those charges at all.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Service Duplication:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Overlapping services from different carriers doing the same job, such as paying for traditional fax lines alongside a cloud fax service, or running a legacy phone system in parallel with a new cloud platform long after the migration was meant to finish.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Automatic Rate Increases:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Annual or periodic increases buried in the fine print that inflate the bill year after year without any corresponding improvement in service.</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Calculation Errors:</strong>
                <span className="text-[var(--color-ink)] leading-loose"> Straightforward billing mistakes, from incorrect tax treatment to services billed at the wrong rate, which accumulate quietly when invoices are approved rather than read.</span>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Billing errors are seldom dramatic. They are a line that should have stopped two years ago, a rate that was meant to be promotional, a tax applied to something that is not taxable. Individually each looks too small to be worth chasing, which is exactly the reason they persist. Across a full year, and across every service on the account, they are worth the hour it takes to read the invoice properly and raise a dispute.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Negotiation Strategies That Actually Work
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Armed with audit findings, a business in Rockwood or anywhere else can use several practical strategies to secure better rates and terms. The common factor is approaching the conversation with evidence rather than a general sense that the bill feels high.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            First, obtain competitive quotes before you approach your current carrier. Even if you have no intention of moving, real pricing from an alternative gives the conversation weight. Telecommunications is a competitive market, and most carriers would rather discount to retain an account than lose it outright.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Second, bundle deliberately rather than by default. Carriers generally price better when services are consolidated, but avoid bundles that create dependencies or include capabilities you will never use. The aim is scale without losing the ability to leave.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Third, time the conversation. Approaching a carrier near the end of its fiscal quarter or year, when sales teams are working to targets, tends to produce better outcomes. Equally, starting a renegotiation ninety to a hundred and twenty days ahead of renewal gives you room to talk without a deadline doing the negotiating for you.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Finally, do not overlook smaller and regional carriers. The large national names have recognition, but an accredited carrier that owns its own lines, handsets, features and cloud queuing can answer a question about your traffic directly instead of raising a ticket with somebody else&apos;s network. IPFINITY holds that stack end to end, which is why our own call detail records and queue analytics come from us rather than from a wholesale supplier in the middle.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Technology Modernization Opportunities
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond immediate cost cutting, a telecom audit often surfaces modernisation opportunities that reduce spending and improve capability at the same time. Business communications have moved on considerably, and an organisation still running legacy equipment may be paying premium prices for the weaker option.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cloud voice is usually the largest single opportunity. Compared with legacy circuits billed per line, SIP trunking is cheaper per channel and far quicker to change: an IPFINITY SIP trunk is $30 CAD, and channels can be added or removed as demand moves rather than at the pace of a carrier work order. The operational features that used to require an on-site system, including call routing, queueing, voicemail delivered to email and call recording, come with the platform.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consolidation is the second opportunity. Paying separately for voice, fax, conferencing and messaging is common and rarely necessary. Bringing them onto one platform removes duplicate subscriptions and, just as usefully, removes the argument about which supplier owns a problem when something stops working. Fax, for instance, is included in IPFINITY service rather than billed as a separate product.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Cloud infrastructure brings further advantages: less equipment on site to maintain and insure against failure, capacity that scales with headcount, updates that arrive without a truck roll, and failover that is designed in rather than improvised. Those advantages are only real if the underlying service is engineered for them, which is worth establishing before a migration rather than afterwards.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Implementing Ongoing Cost Management
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A one-time audit delivers immediate savings, but keeping costs down requires an ongoing process. Organisations should establish quarterly invoice reviews to catch billing errors while they are still small, monitor usage for changes that justify adjusting services, and track upcoming renewals so that renegotiation happens on your schedule rather than the carrier&apos;s.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Give one person clear responsibility for telecommunications: maintaining the service inventory, reviewing invoices, dealing with carriers and keeping an eye on what is available in the market. Even a few hours a month spent this way usually returns far more than the time costs.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Set simple policies for how telecom services are bought and used. Requiring approval before a new service or device is added prevents the slow proliferation that causes the problem in the first place. Basic guidelines for mobile usage and long-distance calling keep the variable portion of the bill predictable.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Finally, schedule a full audit every eighteen to twenty-four months. Even with good ongoing management, a periodic deep review confirms that nothing has drifted and that your infrastructure still matches the way the business operates and what it can afford.
          </p>

          {/* Closing Paragraph */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Taking Action on Your Telecom Costs
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Telecommunications is a significant operating cost that tends to escape scrutiny precisely because it is stable and predictable. Systematic auditing, evidence-based negotiation and sensible modernisation will usually bring it down while improving what the business gets for the money. The savings are not the point in themselves; what matters is that the spending is deliberate.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If a full audit looks like more than you want to take on, we are happy to help you work through it. IPFINITY has been an accredited Canadian telecommunications carrier since 2002, and because we own the lines, the handsets, the features and the cloud queuing end to end, we can tell you what your traffic is actually doing rather than estimating it from a bill.
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
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the IPFINITY Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">An accredited Canadian telecommunications carrier delivering cloud voice from Rockwood, Ontario since 2002.</p>
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
                  Telecom Vendor Lock-In: How to Maintain Flexibility
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Spotting the dependencies that quietly remove your ability to change carriers.
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
                  Bandwidth Requirements: Sizing Your Connection
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How to size a connection for voice and cloud applications without overbuying.
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
                  Disaster Recovery Testing for Voice Services
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Proving your failover works before the day you need it to.
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
