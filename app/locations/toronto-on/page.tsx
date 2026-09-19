import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Business Telecom in Toronto, ON | ipfinity',
  description: 'Cloud voice, SIP trunking, call centre queuing and global DID numbers for Toronto head offices and multi-site businesses. IPFINITY is an accredited Canadian carrier.',
  openGraph: {
    title: 'Business Telecom in Toronto, ON | ipfinity',
    description: 'Cloud voice, SIP trunking and call centre queuing for Toronto head offices and multi-site businesses.',
    url: 'https://www.ipfinity.com/locations/toronto-on',
  },
}

export default function TorontoLocationPage() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-3/5">
              <nav className="flex items-center gap-2 text-sm mb-8 opacity-90">
                <Link href="/" className="hover:underline">Home</Link>
                <span>›</span>
                <span>Locations</span>
                <span>›</span>
                <span>Toronto, ON</span>
              </nav>

              <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
                Business Telecommunications in Toronto, Ontario
              </h1>

              <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
                Cloud voice, call centre queuing and global numbering for Toronto head offices and the branches they run. IPFINITY is an accredited carrier with a 416 presence of its own.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Talk to an engineer
              </Link>
            </div>

            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-80 lg:h-[26rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Nav-grid-web-image-call-centre.jpg"
                alt="Cloud call centre queuing from IPFINITY"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVING TORONTO */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-10 text-center">
            Serving the Toronto Area
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Toronto is where the head offices are, and head offices rarely have a simple phone problem. There is usually a main number that has to be answered a particular way, a set of branches that were connected at different times by different suppliers, and a bill nobody can fully explain. IPFINITY is an accredited carrier, so instead of coordinating between a phone vendor and a line provider, you deal with one company that owns both.
            </p>

            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              We hold our numbering in 416 and the other local ranges, so a Toronto presence does not depend on where your people physically sit. Your existing numbers port across and keep working. Sites join the same cloud platform rather than each running a separate system, which is what makes internal dialling between offices behave like internal dialling.
            </p>

            <p className="text-[var(--color-ink)] leading-relaxed">
              Because we own the lines, phones, features and cloud queuing cradle to grave, the call records and queue analytics are ours. That matters most to the businesses here that run real inbound volume: you can ask what happened in the queue at 10am and get an answer from the carrier&apos;s own data.
            </p>
          </div>

          {/* Coverage panel */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <svg className="w-14 h-14 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-3">
                  Serving Toronto and the GTA
                </h3>
                <p className="text-[var(--color-ink)] leading-relaxed mb-2">
                  IPFINITY Inc., P.O. Box 564, Rockwood, ON N0B 2K0. Service is delivered over the network, so there is no office to attend and nothing to travel to.
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Tel 416.900.1416 or 855-IPFINITY · Fax 416.259.0432 · info@ipfinity.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES IN TORONTO */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services for Toronto Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                SIP &amp; PRI Trunking
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Simultaneous channels sized to peak call volume across every site, not to headcount. A SIP trunk is $30 CAD, and we review the count with you each quarter.
              </p>
              <Link href="/services/sip-pri-trunking" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Global DID Numbers
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                A Toronto head office can answer numbers from elsewhere. We serve Canada and the US, plus Colombia, Mexico, parts of Europe and Australia and New Zealand, on one platform.
              </p>
              <Link href="/services/global-did-numbers" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Custom Voice Applications
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Cloud IVR and call routing built around how your business actually answers, including menus that hand a caller to the right queue instead of the right department.
              </p>
              <Link href="/services/custom-voice-applications" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CALL CENTRES AND MULTI-SITE */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-[var(--color-border)] animate-fade-up">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="relative w-full md:w-2/5 h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Nav-grid-web-3-blue-cloudvoice.jpg"
                alt="IPFINITY CloudVoice platform"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
                Call centres and multi-site operations
              </h2>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                Queuing is where most Toronto inbound operations lose callers, and it is usually invisible until someone complains. Because the queuing runs in our cloud and we are the carrier underneath it, the wait times, abandons and overflow behaviour are all measurable from one place rather than reconstructed from two vendors.
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Adding a site, opening a second queue or moving staff to work from home is a configuration change, not a new installation. Smartphone apps and mobility mean a distributed team still answers the same numbers, with the same routing rules, wherever they are working that week.
              </p>
              <div className="mt-8">
                <Link
                  href="/solutions"
                  className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Explore solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Toronto Customer FAQ
          </h2>

          <div className="space-y-6">

            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Do you have a Toronto office we can visit?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                No. IPFINITY is a carrier, not a storefront, and the company is registered in Rockwood, Ontario. Toronto customers are served over the network: hardware is couriered, cutovers and changes are done remotely, and you reach us on 416.900.1416 or 855-IPFINITY.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Can we keep our 416 and 647 numbers?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes. Existing numbers port to us, including main lines, direct numbers, toll-free and fax. Porting is ordinary carrier work and we run it from our side. If you also want numbers in other cities or countries, those can sit on the same platform.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                We have several sites across the GTA. Do they have to move at once?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                No. Sites can be cut over one at a time, and a hybrid arrangement lets an existing PBX stay in service while the rest moves. Once sites are on the same cloud platform they behave as one system, which is usually the point of the exercise.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                How is a larger Toronto deployment priced?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We scope by SIP trunks, simultaneous channels, users, DID numbers, cloud IVR and redundancy rather than a flat per-seat rate. A SIP trunk is $30 CAD and cloud fax is included. We also right-size quarterly, which sometimes means telling a customer to drop channels they stopped using.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-8">
            Communicate without borders
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Tell us how many sites you run and how many calls you take at once. We will come back with a design and a number, from the carrier that will actually be carrying the calls.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book a scoping call
          </Link>
        </div>
      </section>

    </main>
  )
}
