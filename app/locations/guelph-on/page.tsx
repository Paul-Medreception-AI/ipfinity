import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Business Telecom in Guelph, ON | ipfinity',
  description: 'Cloud voice, SIP trunking, cloud fax and number porting for manufacturers and professional services firms in Guelph, Ontario. IPFINITY is an accredited Canadian carrier.',
}

export default function GuelphONPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-3/5">
              <nav className="flex items-center gap-2 text-sm mb-6 opacity-90">
                <Link href="/" className="hover:underline">Home</Link>
                <span>›</span>
                <span>Locations</span>
                <span>›</span>
                <span>Guelph, ON</span>
              </nav>

              <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
                Business Telecommunications in Guelph, Ontario
              </h1>

              <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed max-w-3xl">
                Cloud voice for Guelph manufacturers and professional services firms, from an accredited Canadian carrier that owns the network end to end.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                Talk to an engineer
              </Link>
            </div>

            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-80 lg:h-[26rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Nav-grid-web-4-image-suit-man.jpg"
                alt="Business cloud voice from IPFINITY"
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

      {/* Serving Guelph Area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Guelph Area
          </h2>

          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6 mb-12">
            <p>
              IPFINITY is registered just up the road in Rockwood, but that matters less than it sounds. We are a carrier, so there is no branch to visit and no van to wait for. Guelph businesses are served over the network, with hardware couriered in and an engineer doing the cutover remotely at a time that suits your operation.
            </p>

            <p>
              The mix in Guelph tends to be mid-market manufacturers and professional services firms, and the two want different things. A manufacturer usually needs a main number that never drops, extensions that reach people who are not at a desk, and a plant connection where voice is not fighting with everything else on the line. An accounting, legal or engineering firm usually needs call handling that looks organised from the outside, direct numbers for people who bill their time, and fax that arrives as email rather than paper.
            </p>

            <p>
              Because we own the lines, phones, features and cloud queuing cradle to grave, we hold our own call records and queue analytics. If you want to know how many calls went unanswered last month, we can tell you from our own data, not a partner&apos;s summary.
            </p>
          </div>

          {/* Coverage panel */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 border border-[var(--color-border)]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <svg className="w-14 h-14 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                  Serving Guelph from Rockwood, Ontario
                </h3>
                <p className="text-[var(--color-ink)] leading-relaxed mb-2">
                  IPFINITY Inc., P.O. Box 564, Rockwood, ON N0B 2K0. Service is delivered over the network, so there is no office to attend.
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Tel 416.900.1416 or 855-IPFINITY · Fax 416.259.0432 · info@ipfinity.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services for Guelph Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                SIP &amp; PRI Trunking
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Channels sized to your real call volume, not to a headcount. A SIP trunk is $30 CAD, and we revisit the numbers quarterly so a quiet season does not keep costing you.
              </p>
              <Link href="/services/sip-pri-trunking" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Redundancy &amp; Failover
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                If the connection at the plant or the office goes down, calls follow a pre-agreed path instead of ringing out. Worth designing before you need it rather than after.
              </p>
              <Link href="/services/disaster-recovery" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Hybrid Solutions
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                An older PBX does not have to be thrown out on day one. We put cloud trunks, cloud fax and mobility in front of it and move the rest when it makes sense for you.
              </p>
              <Link href="/services/hybrid-solutions" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Call quality on a shared connection */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-8 md:p-12 animate-fade-up">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-3/5">
                <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
                  One connection, two jobs
                </h2>
                <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                  Very few Guelph offices segregate their networks. Voice and data share the same connection, so a backup running at four in the afternoon can be the reason a call sounds broken. It is rarely the phone system, and it is almost never the handset.
                </p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Nightingale is our own appliance, roughly the size of a Raspberry Pi. It sits behind the modem, enforces quality of service and gives voice priority over everything else on the line. It ships pre-programmed with the handsets, so nobody on your side has to configure it.
                </p>
                <div className="mt-8">
                  <Link
                    href="/technology"
                    className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-3 rounded-full transition-all"
                  >
                    See the technology
                  </Link>
                </div>
              </div>
              <div className="relative w-full md:w-2/5 h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/technology-backgrounder.jpg"
                  alt="IPFINITY network technology"
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you have an office in Guelph?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                No, and you do not need us to. IPFINITY is a carrier registered in nearby Rockwood, and service reaches Guelph over the network. Hardware is couriered, changes are made remotely, and you can reach us on 416.900.1416 or 855-IPFINITY.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Can we keep our Guelph numbers?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes. Your existing numbers port to us, including the main line, direct numbers and the fax number. Nothing on your signage, invoices or vehicles needs to change.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                How disruptive is the install for a working site?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We agree an install window with you, usually outside your busiest hours. Handsets and the Nightingale appliance arrive pre-programmed, so the on-site work is mostly plugging things in while an engineer completes the cutover remotely. A hybrid approach is available if the old system has to stay live in parallel for a while.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                We have people at a plant and people in an office. Does that complicate things?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Not particularly. Sites are extensions of the same cloud system rather than separate phone systems, so internal calls between them behave like internal calls. Smartphone apps and mobility cover the people who are not at a desk, and call routing can differ per site.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 font-light">
            Talk to a carrier, not a reseller
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Send us your current telecom bill and how many calls you handle at once. We will tell you what a Guelph business your size should actually be paying for.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-semibold px-10 py-4 rounded-full transition-all hover:scale-105"
          >
            Book a scoping call
          </Link>
        </div>
      </section>

    </main>
  )
}
