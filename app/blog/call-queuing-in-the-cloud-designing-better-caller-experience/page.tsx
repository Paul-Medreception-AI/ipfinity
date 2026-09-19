import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Call Queuing in the Cloud: Designing Better Caller Experiences | ipfinity',
  description: 'Discover how cloud-based call queuing systems transform patient communication, reduce wait frustration, and create seamless healthcare experiences through intelligent design and modern technology.',
  keywords: 'call queuing, cloud phone systems, patient experience, healthcare communication, caller experience, phone system design, medical office technology',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
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
            Healthcare Technology
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Call Queuing in the Cloud: Designing Better Caller Experiences
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published December 2024</span>
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
            We've all been there: calling a healthcare provider, only to be greeted by hold music and an automated voice promising that "your call is important to us." Minutes stretch into what feels like hours. Frustration builds. You wonder if you should hang up and try again, risk losing your place in line, or simply give up altogether. For healthcare practices, these moments represent more than minor inconveniences—they're missed opportunities to provide care, build trust, and demonstrate the patient-centered values at the heart of quality medicine.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The evolution of cloud-based communication technology has fundamentally transformed how healthcare practices can manage incoming calls. No longer constrained by the limitations of traditional phone systems, modern call queuing solutions offer intelligent, flexible approaches that prioritize caller experience while optimizing staff efficiency. Understanding how to design and implement these systems effectively can dramatically improve patient satisfaction and operational flow.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Call Queuing in Modern Healthcare
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Call queuing is the systematic management of incoming phone calls when all available staff members are busy. Rather than receiving busy signals or being dropped from the system, callers are placed in an organized sequence and connected to the next available representative. In cloud-based systems, this process happens through sophisticated software that runs on remote servers, accessible from anywhere with an internet connection.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Traditional phone systems relied on physical hardware installed at a single location, limiting flexibility and requiring significant upfront investment. Cloud solutions, by contrast, operate through web-based platforms that can scale instantly, integrate with other healthcare software, and provide detailed analytics about call patterns and wait times. For medical practices, this represents not just a technological upgrade but a fundamental shift in how patient communication can be managed and optimized.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The distinction matters because healthcare communication carries unique requirements. HIPAA compliance, emergency call handling, prescription refill requests, appointment scheduling, and clinical triage all demand different approaches. Cloud-based queuing systems can be configured to recognize call types, route appropriately, and ensure that urgent matters receive priority—all while maintaining the security and privacy standards essential to medical practice.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Psychology of Waiting: Why Design Matters
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research in behavioral psychology has consistently demonstrated that the experience of waiting is subjective and heavily influenced by context, information, and perceived fairness. A three-minute wait with no information feels longer than a five-minute wait with clear updates and estimated times. Uncertainty amplifies frustration, while transparency builds patience and trust.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Well-designed call queuing systems leverage these psychological principles. Position announcements ("You are number three in the queue") provide concrete information that helps callers make informed decisions. Estimated wait times set realistic expectations. Callback options respect callers' time by allowing them to maintain their place in line without staying on hold. These features transform the waiting experience from passive frustration to active engagement.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              "The quality of the waiting experience often shapes patient perception more powerfully than the actual wait time. A well-designed queue can make five minutes feel efficient; a poorly designed one can make two minutes feel eternal."
            </p>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For healthcare practices, this understanding should inform every aspect of queue design. The hold music or messaging content, the frequency of position updates, the tone and clarity of automated messages—each element contributes to the overall caller experience. Practices that invest thoughtful attention in these details communicate respect for patients' time and demonstrate organizational competence before the conversation even begins.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Essential Features of Effective Cloud Queuing Systems
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Not all cloud-based call queuing systems are created equal. The most effective solutions for healthcare practices incorporate several key features that address both operational needs and patient experience priorities:
          </p>

          <div className="my-8 space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-[var(--color-ink)]">Intelligent call routing</strong>
                <p className="text-[var(--color-ink)] leading-loose">Direct callers to appropriate departments or staff based on menu selections, caller ID, or AI-powered intent recognition, reducing transfers and repeat explanations.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-[var(--color-ink)]">Priority queuing</strong>
                <p className="text-[var(--color-ink)] leading-loose">Allow urgent calls to move ahead in the sequence while maintaining fairness for routine inquiries, ensuring that clinical needs receive appropriate attention.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-[var(--color-ink)]">Callback functionality</strong>
                <p className="text-[var(--color-ink)] leading-loose">Offer callers the option to receive a return call when their position is reached, respecting their time and reducing abandonment rates.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-[var(--color-ink)]">Real-time analytics</strong>
                <p className="text-[var(--color-ink)] leading-loose">Track call volumes, average wait times, abandonment rates, and peak calling periods to inform staffing decisions and continuous improvement.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-[var(--color-ink)]">Customizable messaging</strong>
                <p className="text-[var(--color-ink)] leading-loose">Tailor hold messages with practice-specific information, health tips, or service announcements rather than generic music loops.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-[var(--color-ink)]">Integration capabilities</strong>
                <p className="text-[var(--color-ink)] leading-loose">Connect with electronic health records, appointment scheduling systems, and patient portals to provide seamless service and reduce duplicate data entry.</p>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            These features work together to create a system that serves both callers and staff effectively. Patients experience reduced frustration and greater convenience. Front-office teams benefit from organized workflow, reduced stress, and the tools needed to provide excellent service even during high-volume periods.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Implementation Strategies for Healthcare Practices
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Successfully implementing a cloud-based call queuing system requires more than selecting the right technology. Practices must consider workflow integration, staff training, and ongoing optimization to realize the full benefits of modern communication tools.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Begin by analyzing current call patterns. What times of day see the highest volumes? What types of calls are most common? How long do patients typically wait? This baseline data helps identify pain points and measure improvement after implementation. Many cloud phone providers offer trial periods or analytics tools that can facilitate this assessment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Next, involve front-office staff in system design decisions. The people who answer phones daily possess invaluable insights about caller needs, common questions, and workflow challenges. Their input ensures that the system configuration supports rather than complicates their work. Staff buy-in during the planning phase translates to smoother adoption and more effective use of advanced features.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Craft hold messaging carefully. Avoid overly long menu options that frustrate callers before they reach the queue. Consider including genuinely useful information during wait times: office hours, patient portal instructions, preparation tips for common procedures. Keep the tone warm and professional, avoiding overly clinical language or corporate jargon that creates emotional distance.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Test the system from the caller's perspective. Call your own practice during different times of day. Experience the menu options, the hold process, and the transition to speaking with staff. This firsthand testing often reveals friction points that aren't apparent from the administrative interface. Make adjustments based on real-world experience.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Measuring Success and Continuous Improvement
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The advantage of cloud-based systems extends beyond their functional features to include robust data collection and reporting capabilities. Practices can track metrics that directly correlate with patient satisfaction and operational efficiency, enabling evidence-based refinement over time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Key performance indicators for call queuing include average wait time, abandonment rate (callers who hang up before reaching staff), first-call resolution rate, and callback utilization. Trends in these metrics reveal whether the system is meeting its goals and where adjustments might yield improvement. For instance, high abandonment rates during specific hours might indicate a need for adjusted staffing rather than system reconfiguration.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patient feedback provides equally important qualitative data. Simple post-call surveys, comment cards, or questions during check-in can capture patient perceptions about phone accessibility and service quality. This subjective information often identifies issues that numbers alone might miss—a confusing menu option, an off-putting hold message, or a specific type of inquiry that consistently requires multiple transfers.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Regular review sessions with front-office staff create opportunities to discuss what's working and what isn't. These team members interact with the system constantly and often develop informal workarounds or identify inefficiencies that management might not observe. Creating a culture of continuous improvement ensures that the call queuing system evolves with the practice's needs rather than remaining static after initial implementation.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Broader Impact on Patient Experience
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While call queuing might seem like a narrow operational concern, its impact ripples throughout the entire patient experience. The ease or difficulty of reaching your practice by phone often represents a patient's first substantive interaction with your organization. That initial impression shapes expectations, influences trust, and can determine whether someone continues pursuing care or seeks alternatives.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consider the patient calling with a pressing health concern. Anxiety is already elevated. A smooth, efficient phone experience reassures them that they've chosen a competent, well-organized practice. Conversely, a frustrating calling experience compounds their stress and undermines confidence before clinical care even begins. The emotional state in which patients enter appointments affects communication quality, treatment adherence, and overall satisfaction.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For patients managing chronic conditions, accessibility matters enormously. Regular communication with healthcare providers about medication adjustments, symptom changes, or care coordination becomes part of daily life. A phone system that respects their time and makes connection straightforward demonstrates that the practice values their ongoing relationship and recognizes the importance of continuity.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cloud-based call queuing also supports equitable access. Patients with limited mobility, transportation challenges, or work schedules that make in-person visits difficult rely heavily on phone communication. Callback options, extended hours made possible by virtual phone systems, and clear routing to appropriate resources ensure that these patients receive care coordination despite barriers that might otherwise interfere.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Moving Forward with Patient-Centered Communication
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The transition to cloud-based call queuing represents more than a technology upgrade—it's an investment in patient relationships and operational excellence. By thoughtfully designing systems that prioritize caller experience, integrate seamlessly with existing workflows, and provide actionable data for continuous improvement, healthcare practices can transform one of the most common patient touchpoints into a demonstration of their commitment to quality care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            As communication technology continues evolving, the practices that succeed will be those that view phone systems not as necessary infrastructure but as opportunities to provide service that reflects their clinical values. Every call represents a person seeking help, information, or reassurance. The systems we build to manage those calls should honor that fundamental human need for connection and care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If your practice is ready to reimagine how you connect with patients, evaluate your current phone system honestly and explore the possibilities that modern cloud technology offers. The investment in better communication infrastructure pays dividends in patient satisfaction, staff efficiency, and the quality of care you're able to provide.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold mb-1">
                Written by the ipfinity Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Other Medical
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                HIPAA-Compliant Phone Systems for Modern Practices
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Essential security features and compliance considerations when choosing communication technology for healthcare.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Using Data Analytics to Improve Patient Communication
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                How call metrics, patient feedback, and workflow analysis drive continuous improvement in care delivery.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Building Patient Trust Through Accessible Communication
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Why communication accessibility forms the foundation of therapeutic relationships and treatment success.
              </p>
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
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}