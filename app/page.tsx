import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <Image 
          src="/images/background-1.jpg" 
          alt="ipfinity" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/85 to-primary/75" />
        <div className="relative max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight leading-tight" style={{fontFamily: 'var(--font-cormorant)'}}>
            Enterprise Voice and Messaging Solutions That Scale With You
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            IPFINITY delivers cloud-based telecommunications infrastructure connecting businesses across 150+ countries. Our flexible CloudVoice platform provides SIP trunking, messaging, fax, and custom voice applications designed to adapt to your unique communication needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Request a Consultation
            </a>
            <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Explore Solutions
            </a>
          </div>
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

      {/* Services Preview */}
      <section className="bg-[var(--color-cream)] py-24">
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
                Local and toll-free numbers from over 150 countries worldwide, all managed through our unified platform. Route international calls seamlessly to any destination with flexible forwarding and failover options.
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
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
                Telecommunications Infrastructure Built for How You Work
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                IPFINITY is a telecommunications services provider serving large Canadian corporations and multi-national companies with global communication needs. We own and operate CloudVoice, our distributed communications infrastructure with a worldwide footprint, interconnecting with carriers in over 150 countries. Whether you need numbers from Adelaide or Zimbabwe, ringing in New York, New Delhi, or Toronto, we deliver the connectivity your business requires.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Our CloudVoice platform offers best-in-class services including SIP and PRI trunking, fax, SMS and XMPP messaging, combined with innovative, customized voice-data-messaging-fax applications that solve real communication challenges. Recognizing that no two businesses are alike, we built CloudVoice to be flexible and scalable, providing immediate value to your bottom line from day one and keeping pace with your growth trajectory.
              </p>
              <a href="/about" className="text-[var(--color-primary)] font-semibold hover:underline">
                Meet Our Team →
              </a>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-20 h-20 opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
              </div>
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
            Request a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}