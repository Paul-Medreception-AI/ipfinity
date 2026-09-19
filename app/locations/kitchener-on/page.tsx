import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Business Telecom in Kitchener, ON | ipfinity',
  description: 'Cloud voice, SIP trunking, global DID numbers and business messaging for Kitchener and Waterloo Region companies. IPFINITY is an accredited Canadian carrier.',
}

export default function KitchenerLocationPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-3/5">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm opacity-90">
                <Link href="/" className="hover:underline">Home</Link>
                <span className="mx-2">›</span>
                <span>Locations</span>
                <span className="mx-2">›</span>
                <span>Kitchener, ON</span>
              </nav>

              <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
                Business Telecommunications in Kitchener, Ontario
              </h1>

              <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95 max-w-3xl">
                Cloud voice for Kitchener and Waterloo Region companies, from an accredited Canadian carrier that can add channels as fast as you add people.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Talk to an engineer
              </Link>
            </div>

            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-80 lg:h-[26rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Nav-grid-web-9-image-tech-guy.jpg"
                alt="IPFINITY cloud voice engineering"
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

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving Kitchener and Waterloo Region
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Kitchener companies tend to grow in steps rather than smoothly. A team of twelve becomes a team of forty, a second floor gets taken, half the staff work from home two days a week, and the phone arrangement that was fine last year is suddenly the thing nobody wants to touch. Cloud voice from a carrier handles that better than a box on the wall, because adding channels, users or numbers is a configuration change rather than a purchase order and a visit.
            </p>

            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              IPFINITY is registered in Rockwood, a short way up Highway 7, but distance is not really the point. We are an accredited carrier and service reaches Kitchener over the network. Handsets and the Nightingale appliance arrive pre-programmed, an engineer completes the cutover remotely, and there is no branch for you to attend.
            </p>

            <p className="text-[var(--color-ink)] leading-relaxed">
              For companies here selling outside Canada, the same platform carries numbers in the US, Colombia, Mexico, parts of Europe and Australia and New Zealand. A customer in another country dials a local number and reaches your team in Kitchener.
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
                  Serving Kitchener, Waterloo and Cambridge
                </h3>
                <p className="text-[var(--color-ink)] leading-relaxed mb-2">
                  IPFINITY Inc., P.O. Box 564, Rockwood, ON N0B 2K0. Everything is delivered over the network, so there is no office to attend.
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Tel 416.900.1416 or 855-IPFINITY · Fax 416.259.0432 · info@ipfinity.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Services for Kitchener Companies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Global DID Numbers
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Local numbers in the markets you sell into, answered by the team here. Useful well before there is any reason to open an office abroad.
              </p>
              <Link href="/services/global-did-numbers" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Custom Voice Applications
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Cloud IVR and routing built around your own process, including hand-offs between sales, support and an on-call rotation that changes every week.
              </p>
              <Link href="/services/custom-voice-applications" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Business Messaging
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                SMS and XMPP on the same numbers your customers already call, so a conversation can move between channels without moving to another supplier.
              </p>
              <Link href="/services/business-messaging" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Scaling callout */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-8 md:p-12 animate-fade-up border border-[var(--color-border)]">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-3/5">
                <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6">
                  Built to be resized, in both directions
                </h2>
                <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                  We scope by SIP trunks, simultaneous channels, users, DID numbers, cloud IVR and redundancy rather than charging a flat rate per seat. A SIP trunk is $30 CAD, and cloud fax is included rather than billed as a separate line.
                </p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Every quarter we look at what you actually used and right-size it. That includes telling you to drop channels you are not using, which is an uncomfortable email to send and the reason customers stay. Growth is the easy direction; a carrier that will also shrink your bill is the less common part.
                </p>
                <div className="mt-8">
                  <Link
                    href="/services"
                    className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    See all services
                  </Link>
                </div>
              </div>
              <div className="relative w-full md:w-2/5 h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Nav-grid-web-2-image-women.jpg"
                  alt="Distributed teams on IPFINITY cloud voice"
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
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Do you have an office in Kitchener?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                No. IPFINITY is a carrier registered in Rockwood, Ontario, and Kitchener customers are served over the network. Hardware is couriered pre-programmed, installs and changes are done remotely, and you can reach us on 416.900.1416 or 855-IPFINITY.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Can we keep our existing 519 and 226 numbers?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes. Your numbers port across to us, main line and direct numbers alike, and the fax number comes with them. Nothing you have already printed or published needs to change.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Half our team works from home. Does that change the design?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                It changes where the handsets go, not the system. Smartphone apps and mobility let people answer their extension wherever they are working, and remote staff can have a certified desk phone at home. Routing rules stay the same for everyone.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                What happens to call quality on a shared office connection?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most offices never segregate voice from data, which is where broken-sounding calls come from. Nightingale, our own appliance, sits behind the modem and gives voice priority over other traffic. It ships pre-programmed with the handsets and needs no configuration at your end.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Communicate without borders, from Kitchener
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Tell us where you expect to be in a year. We will size the service for that and adjust it as you go, rather than selling you the headroom up front.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Book a scoping call
          </Link>
        </div>
      </section>

    </main>
  )
}
