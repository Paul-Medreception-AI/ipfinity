import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Where We Serve | IPfinity',
  description:
    'IPfinity carries business voice traffic across Canada and the United States, with local presence in Toronto, Kitchener, Guelph and Rockwood, Ontario, and call delivery into more than 150 countries.',
  alternates: { canonical: '/locations' },
}

const CITIES = [
  {
    slug: 'toronto-on',
    city: 'Toronto',
    region: 'Ontario',
    blurb:
      'Head offices, multi-site enterprises and contact centres, joined on a single dial plan with the call distribution logic held in our cloud.',
  },
  {
    slug: 'kitchener-on',
    city: 'Kitchener',
    region: 'Ontario',
    blurb:
      'Waterloo Region technology businesses that need voice infrastructure able to scale as headcount does, without buying hardware ahead of it.',
  },
  {
    slug: 'guelph-on',
    city: 'Guelph',
    region: 'Ontario',
    blurb:
      'Mid-market manufacturers and professional firms moving off ageing on-premises systems while keeping the numbers customers already dial.',
  },
  {
    slug: 'rockwood-on',
    city: 'Rockwood',
    region: 'Ontario',
    blurb:
      'Our home base in Wellington County, and the small and mid-size businesses across the county we have supported the longest.',
  },
]

export default function LocationsPage() {
  return (
    <main>
      <section className="relative text-white py-28 overflow-hidden">
        <img
          src="/images/stock/comms-tower.jpg"
          alt="Communications tower against the sky"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(26,32,48,0.93) 0%, rgba(26,32,48,0.78) 50%, rgba(241,103,33,0.6) 100%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80 mb-5">
            Where we serve
          </p>
          <h1 className="text-5xl sm:text-6xl font-light leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Communicate without borders
          </h1>
          <p className="text-lg text-white/85 mt-6 leading-relaxed">
            IPfinity is an accredited Canadian carrier serving business across Canada and the United
            States, with numbers available in over 100 countries and call delivery into more than 150.
          </p>
        </div>
      </section>

      {/* Ontario cities */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl text-center text-[var(--color-ink)] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Across Ontario
          </h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-14 leading-relaxed">
            We are a carrier, not a storefront, so nothing here depends on you driving to us. We
            pre-program your handsets and the Nightingale QoS appliance, ship them, run the service
            window remotely with an engineer, and initiate the port from your existing carrier.
          </p>

          <div className="grid sm:grid-cols-2 gap-7">
            {CITIES.map((c) => (
              <a
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="animate-fade-up block bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {c.city}
                </h3>
                <p className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)] mt-1">
                  {c.region}
                </p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-4">{c.blurb}</p>
                <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6">
                  Business telecom in {c.city} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Ontario */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                And well beyond it
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Our CloudVoice network interconnects with carriers around the world. Alongside Canada
                and the United States we carry traffic for businesses in Colombia, Mexico, parts of
                Europe, Australia and New Zealand.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                If you need a local number in a market you are entering, or calls delivered into one,
                the question is usually not whether we can but which routing makes the most sense for
                the traffic you actually have.
              </p>
              <a href="/services/global-did-numbers" className="text-[var(--color-primary)] font-semibold hover:underline">
                Global DID numbers &rarr;
              </a>
            </div>
            <div className="lg:col-span-2">
              <img
                src="/images/global-reach-icon.jpg"
                alt="IPfinity global reach"
                loading="lazy"
                className="rounded-2xl w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Tell us where your offices are
          </h2>
          <p className="text-white/75 mb-9 leading-relaxed">
            Sites, users and the phone system currently in the building are usually enough for us to
            tell you what this would look like.
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
