import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voicemail-to-Email Transcription: Accuracy, Privacy, and Productivity Gains | ipfinity',
  description: 'Discover how voicemail-to-email transcription improves communication accuracy, protects patient privacy, and boosts productivity in healthcare settings.',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
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
            Healthcare Technology
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Cormorant'}}>
            Voicemail-to-Email Transcription: Accuracy, Privacy, and Productivity Gains
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By ipfinity Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You're in the middle of seeing patients when your phone buzzes with a voicemail notification. Do you stop what you're doing to listen? Wait until later and risk missing something urgent? Or spend precious minutes replaying the message multiple times to catch every detail? For healthcare providers juggling patient care, administrative tasks, and communication demands, voicemail can be a significant source of friction and lost time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voicemail-to-email transcription technology offers a compelling solution to this daily challenge. By converting voice messages into written text delivered straight to your inbox, this technology promises to streamline communication, reduce errors, and free up valuable time. But as with any healthcare technology, critical questions arise: How accurate are these transcriptions? What about patient privacy? And do the productivity gains truly justify implementation?
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Let's examine the evidence behind voicemail-to-email transcription and explore how it's transforming communication in healthcare settings.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Understanding Voicemail-to-Email Transcription
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voicemail-to-email transcription is exactly what it sounds like: technology that automatically converts voice messages into text and delivers them to your email inbox. When someone leaves you a voicemail, advanced speech recognition algorithms process the audio file, identify words and phrases, and generate a written transcript—usually within minutes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Modern systems typically provide both the text transcript and the original audio file, giving you the flexibility to read the message quickly or listen to the actual voice when tone or context matters. Some platforms integrate directly with electronic health record (EHR) systems, allowing seamless documentation and follow-up.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For healthcare providers, this means you can scan messages during brief moments between patients, prioritize callbacks based on urgency, and maintain better documentation—all without playing phone tag or repeatedly listening to lengthy messages.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Transcription Accuracy: What the Evidence Shows
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Accuracy is paramount in healthcare communication, where misunderstood information can have serious consequences. Modern voicemail transcription systems have made remarkable strides, but they're not perfect.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Current generation transcription technology, powered by artificial intelligence and machine learning, typically achieves accuracy rates between 85% and 95% under ideal conditions. This represents a significant improvement over earlier systems, which struggled with medical terminology, accents, and background noise.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            However, several factors influence accuracy:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
            <ul className="space-y-3">
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Audio quality:</strong> Clear recordings with minimal background noise produce better results</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Speaker clarity:</strong> Speakers who enunciate clearly and speak at moderate pace improve accuracy</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Medical terminology:</strong> Healthcare-specific systems trained on medical vocabulary perform significantly better</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Accents and dialects:</strong> Systems continue to improve but may still struggle with unfamiliar speech patterns</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The key is understanding that transcription serves as a productivity tool, not a replacement for clinical judgment. Always verify critical information—especially medication names, dosages, or symptoms—by listening to the original audio when accuracy is paramount.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{fontFamily: 'Cormorant'}}>
            "Voicemail transcription doesn't eliminate the need for careful attention—it transforms how and when we can give that attention, allowing us to triage communications more effectively and respond more appropriately."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Privacy and HIPAA Compliance Considerations
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patient privacy isn't optional—it's a legal and ethical requirement. When implementing voicemail transcription, healthcare providers must ensure the technology meets HIPAA (Health Insurance Portability and Accountability Act) standards.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            HIPAA-compliant voicemail transcription services incorporate several critical safeguards:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
            <ul className="space-y-3">
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>End-to-end encryption:</strong> Voice files and transcripts are encrypted during transmission and storage</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Business Associate Agreements (BAA):</strong> Vendors sign legally binding agreements accepting HIPAA responsibilities</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Access controls:</strong> Only authorized personnel can access transcribed messages</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Audit trails:</strong> Systems log who accessed what information and when</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Data retention policies:</strong> Clear protocols for how long data is stored and when it's destroyed</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Before implementing any transcription service, verify that the vendor provides a signed BAA and that their security measures align with your organization's compliance requirements. Not all transcription services are created equal—some consumer-grade options lack the necessary healthcare safeguards.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Additionally, educate staff about secure handling of transcribed messages. Encrypted email, secure messaging platforms, and proper device security are essential complements to HIPAA-compliant transcription technology.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Measurable Productivity Gains
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The promise of voicemail transcription ultimately rests on a simple question: Does it actually save time? The evidence suggests it does—significantly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Studies of healthcare communication workflows have found that reading a transcribed voicemail takes approximately 30-40 seconds, compared to 2-3 minutes for listening to an audio message. When you consider that busy practices may receive dozens of voicemails daily, the time savings compound quickly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond raw time savings, transcription offers several productivity advantages:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
            <ul className="space-y-3">
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Faster triage:</strong> Quickly scan messages to identify urgent issues requiring immediate attention</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Better documentation:</strong> Copy relevant information directly into patient records without manual transcription</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Searchability:</strong> Find specific messages by searching text rather than remembering when a call came in</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Context switching:</strong> Review messages during brief moments without needing a quiet space to listen</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-relaxed">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Delegation:</strong> Easily forward transcribed messages to appropriate team members with context intact</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Healthcare organizations that have implemented transcription report not just time savings, but improved staff satisfaction. Providers appreciate being able to stay on top of communications without the constant interruption of listening to messages, while administrative staff find triage and routing significantly easier.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Implementation Best Practices
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Successfully implementing voicemail transcription requires more than just turning on a new feature. Consider these strategies for maximum benefit:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Choose healthcare-specific solutions.</strong> Generic transcription services may lack medical vocabulary training and HIPAA compliance features. Look for platforms designed specifically for healthcare communications, ideally with experience in your specialty area.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Train your team comprehensively.</strong> Ensure everyone understands how to use the system, when to reference the original audio, and how to handle transcription errors. Create protocols for escalating potentially misunderstood messages.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Set realistic expectations.</strong> Transcription is a tool, not magic. Staff should understand that accuracy isn't perfect and that clinical judgment remains essential, especially for critical communications.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Integrate with existing workflows.</strong> The most successful implementations connect transcription with EHR systems, secure messaging platforms, and task management tools your team already uses.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Monitor and optimize.</strong> Track metrics like response times, accuracy issues, and staff satisfaction. Use this data to refine processes and identify areas where additional training may help.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            The Future of Healthcare Communication
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voicemail transcription represents one piece of a broader transformation in healthcare communication. As artificial intelligence continues to advance, we're seeing improvements not just in transcription accuracy, but in intelligent features like automatic priority flagging, sentiment analysis, and integration with clinical decision support tools.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Future systems may automatically extract key information like patient names, symptoms, and callback numbers, populating fields in your EHR and even suggesting appropriate next actions based on message content. Some platforms are already experimenting with multilingual transcription, breaking down language barriers in patient communications.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            However, technology should always serve—not replace—the human connection at the heart of healthcare. The goal isn't to eliminate personal communication but to make it more efficient, allowing providers to spend less time on administrative tasks and more time delivering quality care.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Moving Forward with Confidence
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voicemail-to-email transcription offers legitimate benefits for healthcare practices: measurable time savings, improved communication triage, better documentation, and reduced administrative burden. Modern systems deliver impressive accuracy, especially when properly configured for healthcare use, and HIPAA-compliant options ensure patient privacy remains protected.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Like any healthcare technology, successful implementation requires thoughtful vendor selection, comprehensive training, and realistic expectations about capabilities and limitations. When approached strategically, voicemail transcription can become a valuable tool in your communication toolkit, freeing up time and mental energy for what matters most: providing excellent patient care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're considering implementing voicemail transcription or other communication technologies in your practice, the ipfinity team can help you evaluate options, ensure compliance, and optimize workflows for maximum benefit. Reach out to discuss how technology can support—not complicate—your patient care mission.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the ipfinity Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2" style={{fontFamily: 'Cormorant'}}>
                HIPAA Compliance for Modern Medical Practices
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Essential strategies for protecting patient privacy in an increasingly digital healthcare landscape.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2" style={{fontFamily: 'Cormorant'}}>
                Streamlining Patient Communication Workflows
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Proven strategies for managing patient calls, messages, and inquiries more efficiently.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2" style={{fontFamily: 'Cormorant'}}>
                Technology Solutions That Actually Save Time
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Cutting through the hype to identify healthcare technologies that deliver real productivity gains.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
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