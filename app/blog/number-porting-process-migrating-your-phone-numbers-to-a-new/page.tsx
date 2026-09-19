import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Number Porting Process: Migrating Your Phone Numbers to a New Carrier | ipfinity',
  description: 'Learn everything you need to know about porting your phone numbers to a new carrier. Expert guide covering timelines, requirements, and best practices for seamless migration.',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-white/80 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Technology Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Number Porting Process: Migrating Your Phone Numbers to a New Carrier
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
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
            Your phone number is more than just a string of digits—it's your business identity, the lifeline your patients use to reach you, and often a carefully established presence in your community. The thought of changing carriers and potentially losing that number can be daunting. Whether you're upgrading to a more cost-effective solution, seeking better service quality, or integrating new communication technologies, understanding the number porting process is essential for a seamless transition.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news? Federal regulations protect your right to keep your phone numbers when switching carriers. With proper planning and understanding of the process, number porting can be straightforward and stress-free. This comprehensive guide walks you through everything you need to know about migrating your phone numbers to a new carrier without disrupting your practice operations.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What is Number Porting?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Number porting, also known as Local Number Portability (LNP), is the process of transferring an existing telephone number from one service provider to another. Established by the Federal Communications Commission (FCC) in 1996, this regulation ensures that consumers and businesses maintain ownership of their phone numbers regardless of which carrier they choose.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For healthcare practices, this means you can switch to a Voice over IP (VoIP) system, change traditional carriers, or upgrade your communication infrastructure without changing the numbers your patients know and trust. The process applies to local phone numbers, toll-free numbers, and can include both landlines and mobile numbers depending on your service type.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The porting process involves coordination between your current carrier (the "losing carrier") and your new provider (the "winning carrier"). While federal law requires carriers to cooperate in this process, understanding the steps involved helps you avoid common pitfalls and ensures continuity of service.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Essential Information You'll Need
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Before initiating a port request, gather critical information from your current carrier. Having accurate details is crucial—even minor discrepancies can cause delays or rejections. The porting process relies on matching the information you provide with what your current carrier has on file.
          </p>

          <div className="my-8">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Account number:</strong> This is your unique identifier with your current carrier and is essential for processing the port
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>PIN or password:</strong> Security credential associated with your account to authorize the transfer
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Billing name and address:</strong> Must match exactly what your current carrier has on record
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Service address:</strong> The location where the phone service is registered
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>List of numbers to port:</strong> Complete inventory of all phone numbers you want to transfer
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Latest bill:</strong> Provides verification of account details and can help resolve any discrepancies
                </p>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Contact your current carrier to verify all this information before submitting your port request. Small errors—such as a misspelled name or an old address—are among the most common reasons port requests are rejected, potentially delaying your migration by days or weeks.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Federal law protects your right to keep your phone numbers when switching carriers, ensuring continuity for your practice and patients."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Number Porting Timeline
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding the typical timeline helps you plan your migration and set realistic expectations for your staff and patients. While simple ports can complete quickly, complex multi-line migrations require more coordination time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Single local numbers</strong> typically port within 7-10 business days. This includes most standard business lines and direct office numbers. The process begins when your new carrier submits the Letter of Authorization (LOA) to your current provider and ends when the number is fully active on the new system.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Toll-free numbers</strong> generally require 10-15 business days. These numbers involve coordination through the SMS/800 database, which manages toll-free number registry nationwide. While slightly longer, the process is well-established and predictable.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Large multi-line systems</strong> or complex practice setups may take 15-30 business days. Practices porting multiple locations, departments, or dozens of individual lines need additional time for testing and coordination. Your new carrier will typically work with you to schedule the cutover during low-traffic periods to minimize disruption.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Once your new carrier submits the port request, they'll receive a Firm Order Commitment (FOC) date from your current carrier. This is the scheduled date when the transfer will complete. It's crucial to maintain service with your current carrier until this date—canceling early will release your numbers and make them unportable.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Step-by-Step Porting Process
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The porting process follows a standardized sequence, though specifics may vary slightly between carriers. Understanding each phase helps you anticipate what comes next and address issues promptly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Step 1: Choose Your New Carrier.</strong> Research providers that meet your needs—consider call quality, features, pricing, customer support, and HIPAA compliance for healthcare communications. Request detailed proposals and verify they can support your specific requirements.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Step 2: Submit Port Request.</strong> Complete the Letter of Authorization with your new carrier, providing all the information gathered from your current provider. This document legally authorizes the transfer and must be accurate and complete.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Step 3: Validation Process.</strong> Your new carrier submits the request to your current provider, who validates all information matches their records. If discrepancies arise, your new carrier will contact you to resolve them.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Step 4: Receive FOC Date.</strong> Once validated, you'll receive confirmation with the Firm Order Commitment date. This is when the actual transfer will occur. Mark this date clearly and plan any staff training or patient communications around it.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Step 5: Cutover Day.</strong> On the FOC date, typically during a maintenance window, your numbers transfer to the new carrier. This usually involves brief downtime (minutes to an hour). Your new carrier should coordinate timing to minimize impact on your practice.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Step 6: Testing and Verification.</strong> Immediately after cutover, test all ported numbers for inbound and outbound calling, voicemail, call forwarding, and any special features. Document any issues and report them to your new carrier immediately.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Pitfalls and How to Avoid Them
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Even straightforward ports can encounter obstacles. Being aware of common issues helps you take preventive action and respond quickly if problems arise.
          </p>

          <div className="my-8">
            <div className="space-y-4">
              <div className="bg-[var(--color-cream)] p-6 rounded-lg">
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Canceling Service Too Early</h3>
                <p className="text-[var(--color-ink)] leading-loose text-sm">
                  Never cancel your current service before the port completes. Doing so releases your numbers back to the carrier, making them unportable. Keep your current service active until you confirm the numbers are working with your new carrier.
                </p>
              </div>
              <div className="bg-[var(--color-cream)] p-6 rounded-lg">
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Information Mismatches</h3>
                <p className="text-[var(--color-ink)] leading-loose text-sm">
                  Even minor discrepancies between your port request and your current carrier's records will cause rejection. Double-check every detail and obtain written confirmation of account information from your current provider.
                </p>
              </div>
              <div className="bg-[var(--color-cream)] p-6 rounded-lg">
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Outstanding Balances</h3>
                <p className="text-[var(--color-ink)] leading-loose text-sm">
                  Current carriers can refuse to port numbers if your account has unpaid charges or outstanding contractual obligations. Resolve all billing issues before initiating the port request.
                </p>
              </div>
              <div className="bg-[var(--color-cream)] p-6 rounded-lg">
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Inadequate Testing</h3>
                <p className="text-[var(--color-ink)] leading-loose text-sm">
                  Thoroughly test all functionality immediately after porting. Issues caught early are easier to resolve. Create a checklist covering every number, feature, and use case your practice relies on.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Best Practices for a Smooth Migration
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Strategic planning makes the difference between a seamless transition and a disruptive experience. Follow these best practices to protect your practice operations and patient experience.
          </p>

          <div className="my-8">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Schedule strategically:</strong> Plan your port during lower-volume times—avoid Mondays, day-after-holiday periods, or known busy seasons
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Communicate with stakeholders:</strong> Inform staff, answer services, and key contacts about the migration timeline and what to expect
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Document current setup:</strong> Record all call routing rules, voicemail configurations, auto-attendant menus, and special features before migration
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Maintain backup communication:</strong> Have alternative contact methods ready (mobile numbers, email) in case unexpected issues arise
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Train staff in advance:</strong> If your new system has different features or interfaces, provide training before the cutover date
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-loose">
                  <strong>Verify 911 service:</strong> Confirm that emergency calling functions properly with correct location information after porting
                </p>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consider conducting the port in phases if you have multiple locations or departments. This staged approach allows you to identify and resolve issues with one group before migrating others, reducing overall risk to your practice operations.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Moving Forward with Confidence
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Number porting doesn't have to be complicated or disruptive. With proper preparation, accurate information, and strategic timing, you can migrate to a new carrier while maintaining seamless communication with your patients. The key is understanding the process, avoiding common pitfalls, and working closely with a responsive carrier who understands healthcare communication needs.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Whether you're looking to reduce costs, improve call quality, add advanced features, or modernize your communication infrastructure, porting your existing numbers protects the identity and reputation you've built in your community. Your phone number is an essential part of your practice—federal regulations ensure you keep it when making changes that benefit your operations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're considering a carrier change or communication system upgrade, the team at ipfinity can help you navigate the technical and regulatory aspects of number porting. We specialize in healthcare communication solutions and understand the unique requirements of medical practices in Rockwood and beyond. Contact us to discuss your specific needs and create a migration plan that protects your practice continuity while enabling your growth.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the ipfinity Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based care and patient education to the Rockwood community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'Cormorant, serif' }}>
                VoIP vs Traditional Phone Systems: What's Best for Your Practice?
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Compare modern communication technologies and discover which solution meets your practice needs.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'Cormorant, serif' }}>
                HIPAA Compliance for Healthcare Phone Systems
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Essential security measures and compliance requirements for protecting patient communications.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'Cormorant, serif' }}>
                Reducing Missed Calls: Communication Strategies for Busy Practices
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Practical solutions for managing high call volumes and improving patient access to care.
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
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}