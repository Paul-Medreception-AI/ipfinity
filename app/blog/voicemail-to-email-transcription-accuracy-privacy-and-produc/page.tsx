import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voicemail-to-Email Transcription: Accuracy, Privacy, and Productivity Gains | ipfinity',
  description: 'How voicemail-to-email transcription works, how accurate it really is, what it means for privacy under PIPEDA, and where it saves a business time.',
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
            Business Communications
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
            <span>By the IPFINITY Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You are in front of a customer when your phone buzzes with a voicemail notification. Do you stop what you are doing to listen? Wait until later and risk missing something urgent? Or spend minutes replaying the message to catch the account number and the callback? For an order desk, a dispatcher or an account manager juggling customers, suppliers and internal work, voicemail is a steady source of friction and lost time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voicemail-to-email transcription offers a practical answer to that daily problem. By converting voice messages into written text delivered straight to your inbox, it promises to speed up triage, reduce errors and free up time. But as with any change to how a business communicates, fair questions arise. How accurate are these transcriptions? What happens to the recording and the transcript once they leave your phone system? And do the productivity gains justify the change?
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Below we look at how the technology works, where it earns its place, and how to deploy it in a Canadian business without creating a privacy problem.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Understanding Voicemail-to-Email Transcription
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voicemail-to-email transcription is exactly what it sounds like: technology that automatically converts voice messages into text and delivers them to your email inbox. When someone leaves you a voicemail, advanced speech recognition algorithms process the audio file, identify words and phrases, and generate a written transcript—usually within minutes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Modern systems typically provide both the text transcript and the original audio file, giving you the flexibility to read the message quickly or listen to the actual voice when tone or context matters. Some platforms integrate directly with CRM, ticketing or dispatch systems, so the message lands beside the account it relates to.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For a service counter, a dispatch desk or a sales team, this means you can scan messages between calls, prioritise callbacks by urgency, and keep a better record, all without playing phone tag or replaying long messages.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Transcription Accuracy: What the Evidence Shows
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Accuracy matters, because a misheard account number, delivery address or callback number costs more time than the voicemail ever saved. Modern transcription systems have made remarkable strides, but they are not perfect.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Current generation transcription, built on machine learning, is far ahead of the systems of a decade ago, which struggled badly with technical vocabulary, accents and background noise. On clean audio from a quiet office it is usually good enough to read instead of listening. On a mobile call from a noisy job site or a loading dock, it is often not, and it is worth knowing which of those describes most of your callers before you rely on it.
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
                <span><strong>Industry vocabulary:</strong> part numbers, company names and technical terms transcribe better on systems tuned to your vocabulary</span>
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
            The key is that transcription is a triage tool, not a system of record. Verify anything consequential, especially account numbers, part numbers, addresses, dollar figures and callback numbers, against the original audio before you act on it.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{fontFamily: 'Cormorant'}}>
            &ldquo;Voicemail transcription does not remove the need for careful attention. It changes when and how you can give it, so messages get triaged properly and answered in the right order.&rdquo;
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Privacy and Compliance Considerations
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Privacy is not optional. In Canada, voicemails and the transcripts made from them routinely contain personal information, which brings them under PIPEDA, and commercial messages you send back are subject to CASL. If your organisation handles health information in Ontario, PHIPA applies to you on top of that. The obligation sits with the organisation that collects the information, so it is worth settling before the feature is switched on rather than after.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A transcription service you can defend to your own privacy officer should offer several safeguards:
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
                <span><strong>Written commitments:</strong> the vendor states in writing where data is processed and stored, and what it may and may not be used for</span>
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
            Before you turn transcription on, ask the vendor where audio is processed, how long transcripts are retained, whether recordings are used to train their models, and who inside their organisation can read them. Not all services are equal, and some consumer-grade options answer none of those questions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Then train staff on handling the transcripts. Once a voicemail is text sitting in an inbox, it can be forwarded anywhere in seconds. Encrypted mail, controlled shared mailboxes and basic device security are essential complements to the transcription service itself.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Measurable Productivity Gains
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The promise of voicemail transcription ultimately rests on a simple question: Does it actually save time? The evidence suggests it does—significantly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Reading a short transcript takes a fraction of the time that listening to the same message takes, because you read faster than the caller spoke and you can skip the throat-clearing at the start. On a line that receives dozens of voicemails a day, such as an order desk, a dispatch number or a service counter, that difference compounds quickly.
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
                <span><strong>Better records:</strong> copy the details straight into a ticket, a CRM note or an order without retyping them</span>
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
            Businesses that adopt transcription usually report a second benefit alongside the time saved, which is that staff prefer it. Managers can stay on top of messages without stopping to listen to each one, and administrative staff find triage and routing much easier.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Implementation Best Practices
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Successfully implementing voicemail transcription requires more than just turning on a new feature. Consider these strategies for maximum benefit:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Choose a solution that fits your vocabulary and your obligations.</strong> A generic consumer service may handle everyday speech well and still mangle your product names, and it may not tell you where the audio is processed. Look for a provider that can answer on both counts, and that understands the sector you sell into.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Train your team comprehensively.</strong> Ensure everyone understands how to use the system, when to reference the original audio, and how to handle transcription errors. Create protocols for escalating potentially misunderstood messages.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Set realistic expectations.</strong> Transcription is a tool, not magic. Staff should understand that accuracy is never perfect, and that a person still makes the call on anything urgent or contractual.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Integrate with existing workflows.</strong> The most successful implementations connect transcription to the CRM, ticketing, dispatch and task management tools your team already uses.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Monitor and optimize.</strong> Track metrics like response times, accuracy issues, and staff satisfaction. Use this data to refine processes and identify areas where additional training may help.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Where This Is Heading
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voicemail transcription is one piece of a broader change in business communication. As the underlying models improve, the gains are showing up not only in raw accuracy but in features built on top of it, such as automatic priority flagging, sentiment analysis, and routing that acts on what the message actually says.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Future systems may extract the caller&rsquo;s name, the account or order number and the callback number on their own, populate a ticket, and suggest the next action from the content of the message. Some platforms are already experimenting with multilingual transcription, which matters for any business serving customers in more than one language, and for Canadian organisations operating in both official languages.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Technology should serve the relationship rather than replace it. The goal is not to remove personal contact but to shorten the distance to it, so staff spend less time on administration and more time actually speaking to the people who called.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Moving Forward with Confidence
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Voicemail-to-email transcription offers real benefits to a business: time saved, faster triage, better records, and less administrative drag. Modern systems deliver solid accuracy when they are configured for the way your callers actually speak, and a properly chosen provider lets you answer privacy questions rather than hope they are not asked.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Like any change to a phone system, doing it well takes careful vendor selection, proper training, and realistic expectations about what the technology can and cannot do. Handled that way, voicemail transcription becomes a genuinely useful part of the communication toolkit, freeing time and attention for the work that earns the revenue.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you are considering voicemail transcription or any other change to how your business handles calls, the IPFINITY team can help you scope the requirement, weigh the options and fit them to the way your people already work. Get in touch to talk it through.
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
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the IPFINITY Team</div>
              <div className="text-[var(--color-muted)] text-sm">Cloud voice engineers and carrier specialists at IPFINITY Inc., delivering CloudVoice since 2002</div>
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
                Privacy Obligations for Business Phone Systems
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                What PIPEDA and CASL mean for call recordings, voicemail and the messages you send to customers.
              </p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow group">
              <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2" style={{fontFamily: 'Cormorant'}}>
                Streamlining Customer Communication Workflows
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Practical ways to manage inbound calls, messages and enquiries without adding headcount.
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
                Cutting through the hype to identify the communication technologies that deliver real productivity gains.
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