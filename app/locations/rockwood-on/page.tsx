import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Business Phone Systems in Rockwood, ON | ipfinity',
  description: 'IPFINITY is a Canadian cloud voice carrier based in Rockwood, Ontario. Cloud phone systems, SIP trunking, cloud fax and number porting for Wellington County businesses.',
  openGraph: {
    title: 'Business Phone Systems in Rockwood, ON | ipfinity',
    description: 'IPFINITY is a Canadian cloud voice carrier based in Rockwood, Ontario, serving businesses across Wellington County.',
    url: 'https://www.ipfinity.com/locations/rockwood-on',
    siteName: 'ipfinity',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RockwoodLocationPage() {
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
                <span>Rockwood, ON</span>
              </nav>

              <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
                Business Phone Systems in Rockwood, Ontario
              </h1>

              <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
                Rockwood is home base. IPFINITY is an accredited Canadian telecommunications carrier, running cloud voice, fax and messaging for businesses here and well beyond Wellington County.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Talk to an engineer
              </Link>
            </div>

            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-80 lg:h-[26rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Nav-grid-web-1-purple-about.jpg"
                alt="IPFINITY cloud voice services"
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
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving Rockwood and Wellington County
          </h2>

          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              IPFINITY has been delivering cloud-based voice since 2002, and Rockwood is where the company is registered. One thing worth saying plainly: our Rockwood address is a post box, not a storefront. There is no counter to walk up to and no showroom. Everything we do is delivered over the network, which is how a carrier works, and it is why a small business in Rockwood gets exactly the same platform as a multi-site operator in a larger centre.
            </p>

            <p>
              For local businesses that means a phone system without a phone system in the closet. We port your existing numbers, ship the handsets pre-programmed, and an engineer completes the cutover remotely. Because we own the lines, the phones, the features and the cloud queuing end to end, there is no second company to call when something needs changing. You deal with the carrier directly.
            </p>
          </div>

          {/* Contact / coverage panel */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <svg
                className="w-14 h-14 flex-shrink-0 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                  IPFINITY Inc., Rockwood, Ontario
                </h3>
                <p className="text-[var(--color-ink)] leading-relaxed mb-2">
                  Mailing address: P.O. Box 564, Rockwood, ON N0B 2K0, Canada
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
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            What Rockwood Businesses Use Us For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg
                className="w-12 h-12 text-[var(--color-accent)] mb-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                SIP &amp; PRI Trunking
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Dial tone sized to what you actually use. A SIP trunk is $30 CAD, and we review your channel count every quarter, including telling you when to drop lines you are not using.
              </p>
              <Link
                href="/services/sip-pri-trunking"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center transition-colors duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg
                className="w-12 h-12 text-[var(--color-accent)] mb-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Hybrid Solutions
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Keep the PBX you have already paid for and put cloud trunks, cloud fax and mobility in front of it. Useful when a move to all-IP has to happen in stages rather than over one weekend.
              </p>
              <Link
                href="/services/hybrid-solutions"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center transition-colors duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg
                className="w-12 h-12 text-[var(--color-accent)] mb-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Business Messaging
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                SMS and XMPP alongside the voice service, so a customer can text the same number they call. Cloud fax is included rather than sold as an extra line.
              </p>
              <Link
                href="/services/business-messaging"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center transition-colors duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Nightingale Callout */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-[var(--color-border)] animate-fade-up">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="relative w-full md:w-2/5 h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Nav-grid-web-5-purple-nightingale.jpg"
                alt="Nightingale, the IPFINITY quality-of-service appliance"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
                Nightingale keeps the voice clean
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
                <p>
                  Most small offices run voice and data down one connection and never segregate the network, so a large upload can break up a call. Nightingale is our own appliance, roughly the size of a Raspberry Pi. It sits behind the modem and gives voice traffic priority over everything else.
                </p>
                <p>
                  It arrives pre-programmed with the handsets, plugs in, and needs no configuration from you. For a Rockwood business without in-house IT, that is usually the difference between a cloud phone system that sounds right and one that does not.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/technology"
                  className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  See the technology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Can we come to your Rockwood office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                There is nothing to visit. Our Rockwood address is a post box, and we are a carrier rather than a retail shop. Everything is handled by phone, email and remote session, and hardware is couriered to you. If you would rather talk something through than read about it, call 416.900.1416 or 855-IPFINITY.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Can we keep our existing Rockwood phone numbers?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes. Number porting is routine carrier work, and we handle it from our side rather than handing you a form and a deadline. Your published numbers stay exactly as they are, including any fax number, so nothing needs reprinting.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What does an install actually involve?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Certified handsets from Snom, Grandstream or Yealink arrive pre-programmed, along with the Nightingale appliance. You plug them in, and an engineer completes the cutover with you at an agreed service window. Snom handsets are German-built and carry an unusually long three-year warranty.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                How is a small business priced?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We scope by SIP trunks, simultaneous channels, users, DID numbers, cloud IVR and redundancy rather than charging a flat rate per seat. A SIP trunk is $30 CAD and fax is included. A short scoping call is enough to work out what a business of your size needs, and we would rather size it honestly than sell you channels that sit idle.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">
            Communicate without borders, from Rockwood
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Tell us how many people answer the phone and how many calls you take at once. We will tell you what the service should look like and what it should cost.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book a scoping call
          </Link>
        </div>
      </section>

    </main>
  )
}
