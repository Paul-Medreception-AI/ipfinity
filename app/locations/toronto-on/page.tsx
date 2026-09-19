import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Medical Near Toronto, ON | ipfinity',
  description: 'Expert Other Medical care serving Toronto, ON and surrounding communities. Convenient access to specialized psychiatric services with telehealth options available.',
  openGraph: {
    title: 'Other Medical Near Toronto, ON | ipfinity',
    description: 'Expert Other Medical care serving Toronto, ON and surrounding communities.',
    url: 'https://www.ipfinity.com/locations/toronto-on',
  },
}

export default function TorontoLocationPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span>›</span>
            <span>Toronto, ON</span>
          </nav>
          
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Toronto, ON
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
            Serving patients from Toronto and surrounding ON communities. Expert psychiatric care is closer than you think.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule in Toronto
          </Link>
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
              Located in nearby Rockwood, our practice is easily accessible to patients throughout Toronto and the Greater Toronto Area. Many of our Toronto patients find the commute convenient, with straightforward highway access and ample parking available. The drive offers a peaceful transition from the busy city to our welcoming, patient-centered facility.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed">
              Patients from Toronto choose ipfinity for our specialized expertise, personalized treatment approach, and commitment to evidence-based psychiatric care. While Toronto has many healthcare options, our practice offers a level of focused attention and advanced treatment modalities that sets us apart. For those who prefer to avoid the drive, we also offer comprehensive telehealth services that bring expert care directly to your home.
            </p>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)] animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Toronto, ON to Rockwood</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES IN TORONTO */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Toronto Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.227 0 4.458l-1.403 1.403m-4.456-4.457l3-3m-3 3l-3.598 3.598a9 9 0 01-4.943 0L5 14.5" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Comprehensive Psychiatric Evaluations
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough diagnostic assessments to understand your unique mental health needs and develop personalized treatment plans.
              </p>
              <Link href="/services/evaluations" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychiatric medication oversight with regular monitoring to ensure optimal therapeutic outcomes and minimal side effects.
              </p>
              <Link href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual appointments that bring expert psychiatric care directly to Toronto patients in the comfort of their own homes.
              </p>
              <Link href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* TELEHEALTH FOR TORONTO */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto border border-[var(--color-border)] animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-[var(--color-ink)] leading-relaxed mb-6 text-center max-w-2xl mx-auto">
            We understand that Toronto residents lead busy lives. That's why we offer comprehensive telehealth services that deliver the same high-quality psychiatric care through secure video consultations. Whether you're managing a hectic schedule, dealing with transportation challenges, or simply prefer the convenience of virtual care, our telehealth platform makes expert treatment accessible from anywhere in Toronto.
          </p>
          <p className="text-[var(--color-ink)] leading-relaxed text-center max-w-2xl mx-auto">
            Most insurance plans cover telehealth visits just like in-person appointments. Our team will verify your coverage and help you understand your benefits before your first virtual session.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Toronto Patient FAQ
          </h2>
          
          <div className="space-y-6">
            
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                How far is ipfinity from Toronto?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Rockwood office is conveniently located within comfortable driving distance of Toronto. Most patients find the commute straightforward via major highways, and the peaceful drive provides a nice transition away from the city. Exact travel time varies depending on your specific location in Toronto and traffic conditions, but many patients appreciate the easy access combined with our quieter, more personal setting.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                What are the best directions from Toronto?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We're easily accessible from Toronto via major highway routes. Upon scheduling your appointment, our team will provide detailed directions tailored to your starting location. We recommend allowing extra time for your first visit to ensure a stress-free arrival. GPS navigation works reliably to our location, and we're happy to provide turn-by-turn guidance when you call our office.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Toronto residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We provide comprehensive telehealth services to Toronto patients through secure, HIPAA-compliant video platforms. Virtual visits offer the same quality care as in-person appointments and are ideal for follow-up medication management, ongoing therapy, and routine consultations. Many Toronto patients appreciate the flexibility of alternating between in-person and telehealth visits based on their schedule and needs.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                Is parking available for Toronto patients visiting the office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. We provide ample free parking directly at our facility, which is a welcome change from Toronto's parking challenges. Our location is fully accessible with convenient entry, and our welcoming environment is designed to put you at ease from the moment you arrive. We've thoughtfully designed our space to ensure your visit is as comfortable and stress-free as possible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-8">
            Get Expert Care from Toronto
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Join the many Toronto patients who trust ipfinity for compassionate, evidence-based psychiatric care. Schedule your consultation today.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>

    </main>
  )
}