import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | IPfinity',
  description:
    'How IPfinity customers use CloudVoice: BouMatic Robotics across five countries, Swatch Canada interconnecting Toronto and Montreal, and Michael Sheridan Communications moving a 30-year telephony business to SIP and cloud.',
  alternates: { canonical: '/case-studies' },
}

/* Every word quoted on this page is published by IPfinity today at
   ipfinity.com/case-1, /case-2, /case-3 and /testimonials. Nothing here is
   invented, and no figure has been added that IPfinity does not itself state. */

const CASES = [
  {
    id: 'boumatic',
    customer: 'BouMatic Robotics BV',
    sector: 'Agricultural robotics',
    reach: 'Canada, United States, France, Germany, United Kingdom',
    summary:
      'BouMatic Robotics BV is the Dutch-based world leader in bovine milking automation and robotics. IPfinity provides BouMatic with a custom engineered telecom solution via CloudVoice that interconnects their operations across five countries.',
    detail: [
      'BouMatic’s multi-country distributed call processing is hosted in IPfinity’s CloudVoice infrastructure, with logic that routes calls based on demand and availability.',
      'Web-based dashboards let operators visualise their call work flow, and mobile technicians service calls regardless of geography, unifying the workforce across continents.',
    ],
    image: '/images/Nav-grid-web-9-image-tech-guy.jpg',
    imageAlt: 'Technician working on network equipment',
  },
  {
    id: 'swatch',
    customer: 'Swatch Canada',
    sector: 'Retail, global consumer brand',
    reach: 'Toronto and Montreal',
    summary:
      'Part of a world-wide, iconic brand, Swatch Canada needed a solution to interconnect their Toronto and Montreal locations seamlessly.',
    detail: [
      'CloudVoice gives Swatch Canada a burstable and scalable trunk service that interconnects their operations, with the call distribution logic handled in IPfinity’s cloud.',
      'That saved Swatch Canada the capital expense of upgrading their phone system: no new hardware to buy, with calls delivered where they want, when they want.',
    ],
    image: '/images/Nav-grid-web-4-image-suit-man.jpg',
    imageAlt: 'Business user connected across locations',
  },
  {
    id: 'michael-sheridan-communications',
    customer: 'Michael Sheridan Communications',
    sector: 'Telephony reseller, 30+ years serving Canadian business',
    reach: 'Canada',
    summary:
      'MSC is a long-established provider of telephony solutions to Canadian businesses. To make the transition from selling traditional phone systems to SIP and cloud services, MSC evaluated numerous providers and selected IPfinity for its cloud architecture.',
    detail: [
      'IPfinity cloud-enabled MSC’s legacy PBX systems, so their own clients could use smartphone apps and cloud failover without replacing what they already had.',
      'Today MSC resells the full suite of IPfinity carrier services, including cloud voice, SIP trunking and cloud fax.',
    ],
    image: '/images/Nav-grid-web-5-purple-nightingale.jpg',
    imageAlt: 'IPfinity Nightingale',
    quotes: [
      {
        text: 'When our clients started enquiring about SIP and Cloud, we did an extensive and rigorous search for the most suitable partner. I am proud of our decision to work with IPFINITY. The stuff works, it’s bullet proof and install & support team is very responsive.',
        who: 'Michael Sheridan',
        role: 'Founder & President, Michael Sheridan Communications',
      },
      {
        text: 'With their legendary VRX1000 Nightingale QoS solution, the call quality on IPFINITY SIP trunking was far superior than anything we had evaluated. And they were able to cloud-enable our legacy PBX systems making it easier for our clients to use innovative features like smartphone apps and cloud failover.',
        who: 'Andrew Sheridan',
        role: 'Michael Sheridan Communications',
      },
    ],
  },
]

const HEADLINE_QUOTE = {
  text: 'We use our phones constantly, so we demand excellent voice service and quality. IPFINITY’s SIP solution has exceeded all our expectations.',
  who: 'Adam Richardson',
  role: 'Moosehead Breweries',
}

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-5">
            Customer stories
          </p>
          <h1 className="text-5xl sm:text-6xl font-light leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Work we have done
          </h1>
          <p className="text-lg text-white/80 mt-6 leading-relaxed">
            Three businesses with very different problems, all solved on the same carrier network:
            a robotics manufacturer spanning five countries, a global retail brand joining two cities,
            and a telephony reseller moving thirty years of customers to the cloud.
          </p>
        </div>
      </section>

      {/* Headline testimonial */}
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-light leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
            &ldquo;{HEADLINE_QUOTE.text}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold">{HEADLINE_QUOTE.who}</p>
          <p className="text-sm text-white/80">{HEADLINE_QUOTE.role}</p>
        </div>
      </section>

      {/* Cases */}
      {CASES.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className={i % 2 === 0 ? 'bg-white py-20' : 'bg-[var(--color-cream)] py-20'}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-5 gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
              <div className="lg:col-span-3 lg:[direction:ltr]">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3">
                  {c.sector}
                </p>
                <h2 className="text-4xl text-[var(--color-ink)] mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {c.customer}
                </h2>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">{c.summary}</p>
                {c.detail.map((d) => (
                  <p key={d} className="text-[var(--color-muted)] leading-relaxed mb-4">
                    {d}
                  </p>
                ))}

                <div className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-ink)] bg-[var(--color-light)] rounded-xl px-4 py-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4 text-[var(--color-primary)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                  </svg>
                  <span className="font-medium">{c.reach}</span>
                </div>

                {c.quotes && (
                  <div className="mt-8 space-y-6">
                    {c.quotes.map((q) => (
                      <blockquote key={q.who} className="border-l-4 border-[var(--color-primary)] pl-5">
                        <p className="text-[var(--color-ink)] leading-relaxed italic">&ldquo;{q.text}&rdquo;</p>
                        <footer className="mt-3 text-sm">
                          <span className="font-semibold text-[var(--color-ink)]">{q.who}</span>
                          <span className="text-[var(--color-muted)]"> &mdash; {q.role}</span>
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-2 lg:[direction:ltr]">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  className="rounded-2xl w-full h-72 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Tell us what you are trying to solve
          </h2>
          <p className="text-white/75 mb-9 leading-relaxed">
            Every one of these started as a scoping conversation about lines, sites and the phone
            system already in the building. Yours can too.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white font-bold px-10 py-4 rounded-xl transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  )
}
