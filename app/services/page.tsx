import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | ipfinity',
  description: 'Enterprise Voice and Messaging Solutions That Scale With You. IPFINITY delivers cloud-based telecommunications infrastructure connecting businesses across 150+ countries.',
}

export default function ServicesPage() {
  const services = [
    {
      name: "SIP & PRI Trunking",
      description: "Modern cloud-based trunking solutions that connect your phone system to our global network. Whether legacy PBX or all-IP infrastructure, our trunks deliver reliable voice connectivity with built-in redundancy and disaster recovery.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      name: "Global DID Numbers",
      description: "Local and toll-free numbers from over 150 countries worldwide, all managed through our unified platform. Route international calls seamlessly to any destination with flexible forwarding and failover options.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    },
    {
      name: "Custom Voice Applications",
      description: "Modular voice apps tailored to your workflow including intelligent call routing, smartphone integration, cloud call queuing, and voicemail-to-email. If you can dream it, we can build it.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      name: "Business Messaging",
      description: "Integrated SMS, XMPP messaging, and fax-to-email services that keep your team connected. Automate notifications, customer communications, and document delivery through our messaging APIs.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      name: "Hybrid Solutions",
      description: "Bridge legacy and modern systems with our hybrid connectivity options. Preserve your existing equipment investment while gaining cloud flexibility and advanced features.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      name: "Disaster Recovery",
      description: "Business continuity built into every deployment with automatic failover and geographic redundancy. Our distributed infrastructure ensures your communications stay online when you need them most.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Discovery & Requirements",
      description: "We start by understanding your current infrastructure, communication workflows, and business objectives. Our team assesses your technical environment and identifies opportunities to enhance efficiency and reduce costs."
    },
    {
      number: "02",
      title: "Custom Solution Design",
      description: "Based on your unique needs, we architect a tailored telecommunications solution leveraging our CloudVoice platform. Whether integrating with legacy systems or deploying all-IP infrastructure, we design for immediate value and future scalability."
    },
    {
      number: "03",
      title: "Deployment & Ongoing Support",
      description: "Our team handles seamless implementation with minimal disruption to your operations. Once live, you benefit from enterprise-grade support and continuous optimization as your business evolves."
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light mb-6">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Enterprise Voice and Messaging Solutions That Scale With You
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            Comprehensive Telecommunications for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            From SIP trunking to custom voice applications, our CloudVoice platform delivers flexible, reliable solutions designed for global business communications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[var(--color-light)]">
                  {service.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                  {service.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  {service.description}
                </p>
                <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-ink)]">
            How We Work With You
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Our proven process ensures seamless deployment and ongoing support tailored to your business.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up">
                <div className="lg:px-8">
                  <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-px h-32 bg-[var(--color-border)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let's discuss how our CloudVoice platform can transform your business telecommunications.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}