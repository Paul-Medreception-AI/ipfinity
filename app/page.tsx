export default function Home() {
  return (
    <main>
      {/* Hero.
          The background is a generated map of the markets IPfinity actually carries
          traffic to, not stock photography: it shows something they own. The headline
          is set in the sans rather than Cormorant — the serif is kept as the editorial
          voice for section headings further down the page. */}
      <section className="relative min-h-[88vh] flex items-center text-white overflow-hidden bg-[#101526]">
        <img
          src="/images/stock/network-map.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Scrim: darkest through the centre column where the copy sits. */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 58% 52% at 50% 48%, rgba(13,18,32,0.82) 0%, rgba(13,18,32,0.55) 55%, rgba(13,18,32,0.10) 100%)' }}
        />
        {/* Asymmetric padding lifts the copy cluster ~24px above true centre, so the
            network visualisation has room to breathe beneath it. */}
        <div className="relative max-w-4xl mx-auto px-6 text-center pt-20 pb-32">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[var(--color-primary)] mb-7">
            Global Communications Infrastructure
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-[-0.02em] leading-[1.12]">
            Global Voice &amp; Messaging.
            <span className="block mt-2 text-white/95">Built on a Network We Control.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 max-w-xl mx-auto mt-7 leading-relaxed">
            Voice, messaging, SIP, global numbers and custom communications on
            IPfinity&rsquo;s carrier-operated network.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a
              href="/contact"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to an Expert
            </a>
            <a
              href="/solutions"
              className="border border-white/35 hover:border-white/70 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Explore Solutions
            </a>
          </div>

          <p className="mt-11 text-sm sm:text-[15px] text-white/80 tracking-wide">
            Carrier since <span className="font-semibold text-white">2002</span>
            <span className="mx-3 text-white/30" aria-hidden="true">&middot;</span>
            Numbers in <span className="font-semibold text-white">100+</span> countries
            <span className="mx-3 text-white/30" aria-hidden="true">&middot;</span>
            Call delivery to <span className="font-semibold text-white">150+</span> countries
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm">Distributed Cloud Infrastructure</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm">Global Carrier Interconnection</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm">Custom Voice Applications Available</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm">Enterprise-Grade Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer logo wall — every logo here is published on ipfinity.com today.
          Names verified against the artwork itself, not inferred from filenames. */}
      <section className="bg-[var(--color-cream)] py-20 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-muted)] mb-12">
            Trusted by businesses worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {([
              // [file, name, url|null]  — url is null where we could not verify the
              // company's real site. Unverified is left unlinked on purpose rather
              // than guessed: shipperbee.com now serves an unrelated gambling site
              // and bluesun.ca redirects to a different company entirely.
              ['Bluesun-320x202.jpg', 'Bluesun', null],
              ['danby-logo-320x202.jpg', 'Danby', 'https://www.danby.com'],
              ['mazda-logo-large2-320x202.jpg', 'Mazda', 'https://www.mazda.ca'],
              ['mitsubishi-logo-320x202.jpg', 'Mitsubishi', 'https://www.mitsubishi-motors.ca'],
              ['Shipperbee-320x202.jpg', 'ShipperBee', null],
              ['MCC-320x202.jpg', 'Mobile Climate Control', 'https://www.mcc-hvac.com'],
              ['New-Roads-Logo-320x202.jpg', 'New Roads Automotive Group', 'https://www.newroads.ca'],
              ['Service-Pro-320x202.jpg', 'Service Pro Truck Lines', null],
              ['TSI-group-320x202.jpg', 'TSI Group Inc.', null],
              ['Pinnacle-320x202.jpg', 'Pinnacle International', 'https://pinnacleinternational.ca'],
              ['CHATS-320x202.jpg', 'CHATS Community & Home Assistance to Seniors', 'https://www.chats.on.ca'],
              ['Labticians-320x202.jpg', 'Labtician Ophthalmics', 'https://www.labtician.com'],
              ['carrotlogo-320x202.jpg', 'Carrot Eye Surgery Clinic', null],
              ['wordmark_york-320x202.jpg', 'Alzheimer Society York Region', null],
              ['Newmarket-logo-320x202.jpg', 'Newmarket Chamber of Commerce', 'https://www.newmarketchamber.ca'],
              ['INC-Fairweather-320x202.jpg', 'International Clothiers and Fairweather', 'https://www.internationalclothiers.com'],
              ['maxresdefault-320x202.jpeg', 'Qualifirst', 'https://www.qualifirst.com'],
              ['rice-logo-320x202.jpg', 'Rice Group', null],
              ['sweeny-320x202.jpg', 'Sweeny & Co Architects', 'https://www.sweenyandco.com'],
              ['boltsplus-320x202.jpg', 'Bolts Plus', 'https://www.boltsplus.ca'],
              ['global_ifs_logo-1280x243-1-320x202.jpg', 'Global IFS', 'https://www.globalifs.com'],
              ['First-Ascent-Full-Mark-01-1-320x202.jpg', 'First Ascent Ventures', 'https://firstascent.ventures'],
              ['RGB_PROFOUND_For-Website-01-01-320x202.jpg', 'Profound', null],
              ['netoptiks-320x202.jpg', 'NetOptiks', 'https://www.netoptiks.com'],
              ['huge-logo-320x202.jpg', 'Huge', 'https://www.hugeinc.com'],
            ] as [string, string, string | null][]).map(([file, name, url]) => {
              const logo = (
                <img
                  src={`/images/${file}`}
                  alt={name}
                  loading="lazy"
                  className="max-h-14 w-auto max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              )
              const box = 'bg-white rounded-xl border border-[var(--color-border)] h-24 flex items-center justify-center p-4 group'
              return url ? (
                <a
                  key={file}
                  href={url}
                  target="_blank"
                  rel="noopener"
                  title={`Visit ${name}`}
                  className={`${box} hover:border-[var(--color-primary)] hover:shadow-md transition-all`}
                >
                  {logo}
                </a>
              ) : (
                <div key={file} className={box}>
                  {logo}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Comprehensive telecommunications solutions designed to connect and scale your business globally
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'var(--font-cormorant)'}}>
                SIP & PRI Trunking
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Modern cloud-based trunking solutions that connect your phone system to our global network. Whether legacy PBX or all-IP infrastructure, our trunks deliver reliable voice connectivity with built-in redundancy and disaster recovery.
              </p>
              <a href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'var(--font-cormorant)'}}>
                Global DID Numbers
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Local and toll-free numbers from major cities in over 100 countries, with call delivery into more than 150, all managed through one platform. Route international calls with flexible forwarding and failover.
              </p>
              <a href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'var(--font-cormorant)'}}>
                Custom Voice Applications
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Modular voice apps tailored to your workflow including intelligent call routing, smartphone integration, cloud call queuing, and voicemail-to-email. If you can dream it, we can build it.
              </p>
              <a href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
                Telecommunications Infrastructure Built for How You Work
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                IPfinity is a telecommunications services provider serving large Canadian corporations and multi-national companies with global communication needs. We own and operate CloudVoice, our distributed communications infrastructure with a worldwide footprint, interconnecting with carriers in over 150 countries. Whether you need numbers from Adelaide or Zimbabwe, ringing in New York, New Delhi, or Toronto, we deliver the connectivity your business requires.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Our CloudVoice platform offers best-in-class services including SIP and PRI trunking, fax, SMS and XMPP messaging, combined with innovative, customized voice-data-messaging-fax applications that solve real communication challenges. Recognizing that no two businesses are alike, we built CloudVoice to be flexible and scalable, providing immediate value to your bottom line from day one and keeping pace with your growth trajectory.
              </p>
              <a href="/about" className="text-[var(--color-primary)] font-semibold hover:underline">
                More about IPfinity →
              </a>
            </div>
            <div className="lg:col-span-2">
              <img
                src="/images/Nav-grid-web-9-image-tech-guy.jpg"
                alt="An engineer working on network equipment"
                loading="lazy"
                className="rounded-2xl h-80 w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Network Behind Every Connection.
          This is where the server photography belongs: once the hero has said what
          IPfinity sells, infrastructure imagery becomes proof rather than decoration. */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <img
          src="/images/stock/hero-network.jpg"
          alt="Carrier network equipment"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(26,32,48,0.96) 0%, rgba(26,32,48,0.86) 55%, rgba(26,32,48,0.66) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-5">
                The network behind every connection
              </p>
              <h2 className="text-4xl sm:text-5xl font-light leading-tight mb-7" style={{fontFamily: 'var(--font-cormorant)'}}>
                We are the carrier, not a reseller
              </h2>
              <p className="text-white/75 leading-relaxed mb-5">
                Most cloud phone providers buy their minutes from somebody else. IPfinity is an
                accredited telecommunications carrier: the lines, the phones, the features and the
                cloud queuing are all ours, cradle to grave.
              </p>
              <p className="text-white/75 leading-relaxed mb-10">
                That is not a technicality. It means the call detail records and queue analytics are
                ours to give you, there are fewer hands between your caller and your phone, and when
                something needs changing we change it rather than opening a ticket with a supplier.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>Own</p>
                  <p className="text-sm text-white/60 mt-1.5 leading-relaxed">the lines, handsets, features and cloud queuing</p>
                </div>
                <div>
                  <p className="text-3xl text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>Hold</p>
                  <p className="text-sm text-white/60 mt-1.5 leading-relaxed">our own CDRs and queue data, end to end</p>
                </div>
                <div>
                  <p className="text-3xl text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>Build</p>
                  <p className="text-sm text-white/60 mt-1.5 leading-relaxed">the QoS appliance that protects your call quality</p>
                </div>
              </div>
              <a href="/technology" className="inline-block mt-10 text-[var(--color-primary)] font-semibold hover:underline">
                See how the network works &rarr;
              </a>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/stock/fiber-optic.jpg"
                alt="Fibre optic cabling patched into a carrier network switch"
                loading="lazy"
                className="rounded-2xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16" style={{fontFamily: 'var(--font-cormorant)'}}>
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                01
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Discovery & Requirements
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We start by understanding your current infrastructure, communication workflows, and business objectives. Our team assesses your technical environment and identifies opportunities to enhance efficiency and reduce costs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                02
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Custom Solution Design
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Based on your unique needs, we architect a tailored telecommunications solution leveraging our CloudVoice platform. Whether integrating with legacy systems or deploying all-IP infrastructure, we design for immediate value and future scalability.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                03
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Deployment & Ongoing Support
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Our team handles seamless implementation with minimal disruption to your operations. Once live, you benefit from enterprise-grade support and continuous optimization as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Global Cloud Telecommunications Built for Business
          </h2>
          <a href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Talk to an Expert
          </a>
        </div>
      </section>
    </main>
  )
}