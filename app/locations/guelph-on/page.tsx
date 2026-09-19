import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Medical Near Guelph, ON | ipfinity',
  description: 'Serving patients from Guelph and surrounding ON communities. Expert psychiatric care is closer than you think.',
}

export default function GuelphONPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span>›</span>
            <span>Guelph, ON</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Guelph, ON
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed max-w-3xl">
            Serving patients from Guelph and surrounding ON communities. Expert psychiatric care is closer than you think.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Schedule in Guelph
          </Link>
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
              Located conveniently in Rockwood, ipfinity is just a short drive from Guelph, making quality psychiatric care accessible to patients throughout the region. Whether you're commuting from downtown Guelph or the surrounding communities, our practice offers the specialized attention and expert treatment you deserve without the need to travel to larger urban centers.
            </p>
            
            <p>
              Many Guelph residents choose ipfinity because of our personalized approach, shorter wait times, and comprehensive services that address a full spectrum of mental health needs. For those with scheduling constraints or transportation concerns, we also offer secure telehealth appointments that bring our expertise directly to your home, ensuring continuity of care regardless of your circumstances.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex flex-col items-center justify-center border border-[var(--color-border)]">
            <svg className="w-16 h-16 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-[var(--color-muted)] font-medium">Rockwood to Guelph, ON</p>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Guelph Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive assessments to understand your mental health needs and develop personalized treatment plans tailored to your goals.
              </p>
              <Link href="/services/psychiatric-evaluation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert medication consultation and ongoing monitoring to ensure optimal therapeutic outcomes with minimal side effects.
              </p>
              <Link href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Therapy & Counseling
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Evidence-based therapeutic approaches including CBT, DBT, and supportive counseling to help you navigate life's challenges.
              </p>
              <Link href="/services/therapy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Option */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <div className="flex items-start gap-6 mb-6">
              <svg className="w-12 h-12 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <div>
                <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
                  Can't Make the Drive? We Offer Telehealth
                </h2>
                <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                  For Guelph residents who prefer the convenience of virtual appointments or face scheduling challenges, ipfinity offers secure, HIPAA-compliant telehealth services. Receive the same high-quality psychiatric care from the comfort of your own home.
                </p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Our telehealth platform is covered by most major insurance plans and provides a seamless experience with easy scheduling, secure video conferencing, and comprehensive follow-up care. Distance should never be a barrier to excellent mental health treatment.
                </p>
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
                How far is ipfinity from Guelph?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Rockwood practice is approximately 20-25 minutes from downtown Guelph via Highway 7, making it an easy drive for most Guelph residents. We're conveniently located with ample parking and accessible facilities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What are the best directions from Guelph?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Guelph, take Highway 7 West toward Rockwood. Our office is easily accessible with clear signage. Detailed directions and landmarks will be provided when you schedule your appointment, and our staff is always happy to assist with navigation questions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Guelph patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for Guelph residents who prefer virtual appointments or have difficulty traveling. Our secure platform allows you to receive the same expert care from your home, office, or any private location with internet access.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is parking available, and is your office accessible?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide free on-site parking for all patients with convenient access to our entrance. Our facility is fully accessible with accommodations for individuals with mobility needs, ensuring everyone can access our services comfortably and safely.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 font-light">
            Get Expert Care from Guelph
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Quality psychiatric care is closer than you think. Schedule your appointment today.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-semibold px-10 py-4 rounded-full transition-all hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  )
}