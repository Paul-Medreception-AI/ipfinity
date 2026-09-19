import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparisons | IPfinity',
  description:
    'Side-by-side comparisons to help you choose: SIP vs PRI trunking, cloud voice vs on-premises PBX, hybrid vs all-IP, toll-free vs local numbers, and SMS vs XMPP messaging.',
  alternates: { canonical: '/compare' },
}

const COMPARISONS = [
  {
    slug: 'sip-trunking-vs-pri-trunking',
    title: 'SIP Trunking vs PRI Trunking',
    question: 'Which technology fits your existing infrastructure?',
    blurb:
      'Costs, scalability and reliability side by side, including what happens to the PRI hardware you already own.',
  },
  {
    slug: 'cloud-voice-vs-on-premises-pbx',
    title: 'Cloud Voice vs On-Premises PBX',
    question: 'What does each really cost over its lifetime?',
    blurb:
      'Upfront spend, maintenance, upgrades and scaling, compared as total cost of ownership rather than sticker price.',
  },
  {
    slug: 'hybrid-vs-all-ip-telecommunications',
    title: 'Hybrid vs All-IP',
    question: 'Do you have to replace everything at once?',
    blurb:
      'Migration paths for businesses with working equipment they are not ready to throw away.',
  },
  {
    slug: 'toll-free-vs-local-numbers',
    title: 'Toll-Free vs Local Numbers',
    question: 'Which number makes customers more likely to call?',
    blurb:
      'How each choice affects reach, cost and the impression your business gives in a given market.',
  },
  {
    slug: 'sms-vs-xmpp-messaging',
    title: 'SMS vs XMPP Messaging',
    question: 'Which protocol suits your use case?',
    blurb:
      'Reach, features, cost structure and security, and what each one is actually good at.',
  },
]

export default function ComparePage() {
  return (
    <main>
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-5">
            Comparisons
          </p>
          <h1 className="text-5xl sm:text-6xl font-light leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Work out which option fits
          </h1>
          <p className="text-lg text-white/80 mt-6 leading-relaxed">
            Most telecom decisions come down to a handful of forks in the road. These are the ones
            our customers ask about most, written so you can reach your own conclusion.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-7">
            {COMPARISONS.map((c) => (
              <a
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="animate-fade-up block bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {c.title}
                </h2>
                <p className="text-sm font-medium text-[var(--color-primary)] mt-2">{c.question}</p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-4">{c.blurb}</p>
                <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6">
                  Read the comparison &rarr;
                </span>
              </a>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-[var(--color-muted)] mb-6">
              Still not sure which way to go? That is what a scoping call is for.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
