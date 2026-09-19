import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Kitchener, ON | ipfinity',
  description: 'Serving patients from Kitchener and surrounding ON communities. Expert psychiatric care is closer than you think.',
}

export default function KitchenerLocationPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Locations</span>
            <span className="mx-2">›</span>
            <span>Kitchener, ON</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Kitchener, ON
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95 max-w-3xl">
            Serving patients from Kitchener and surrounding ON communities. Expert psychiatric care is closer than you think.
          </p>
          
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Schedule in Kitchener
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving the Kitchener Area
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Located in nearby Rockwood, our practice is easily accessible for patients throughout Kitchener and the surrounding region. The convenient drive takes just 25-30 minutes via Highway 7 and Wellington Road 29, making quality psychiatric care accessible without the need to travel to larger urban centers. Many of our Kitchener patients appreciate the peaceful, private setting our Rockwood location offers while remaining close to home.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed">
              Patients from Kitchener choose ipfinity for our personalized approach to psychiatric care, shorter wait times compared to hospital-based clinics, and comprehensive treatment options. We understand the unique needs of our community and offer flexible appointment scheduling to accommodate your busy life. For those who prefer or require remote care, we also provide secure telehealth consultations that bring expert psychiatric services directly to your home in Kitchener.
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)]">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Rockwood to Kitchener, ON</p>
              <p className="text-[var(--color-muted)] text-sm mt-2">Approximately 25-30 minutes via Highway 7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Services Available to Kitchener Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.402m-2.054-2.054a3 3 0 00-4.243 0M19.8 15.3l-7.8 7.8m-7.8-7.8l7.8 7.8" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Comprehensive diagnostic assessments for patients from Kitchener seeking expert psychiatric care and personalized treatment planning.
              </p>
              <a href="/services/psychiatric-evaluation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Expert psychiatric medication management with ongoing monitoring and adjustment to ensure optimal outcomes for Kitchener area patients.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Secure virtual consultations that bring expert psychiatric care directly to your home in Kitchener with complete confidentiality.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up border border-[var(--color-border)]">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6">
              Can't Make the Drive? We Offer Telehealth
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              We understand that traveling to Rockwood isn't always convenient for our Kitchener patients. That's why we offer comprehensive telehealth services that provide the same high-quality psychiatric care from the comfort of your own home. Our secure video platform ensures complete privacy and confidentiality while eliminating travel time and scheduling conflicts.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Telehealth appointments are available for most services including initial evaluations, medication management, and follow-up consultations. We accept most major insurance plans for virtual visits, and many patients find telehealth to be equally effective as in-person care. Contact us to learn more about scheduling a virtual appointment from Kitchener.
            </p>
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
                How far is ipfinity from Kitchener?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Rockwood practice is approximately 25-30 minutes from Kitchener via Highway 7 and Wellington Road 29. The drive is straightforward and scenic, with ample free parking available at our facility. Many patients find the short commute worthwhile for personalized, expert psychiatric care in a peaceful setting.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                What's the best route from Kitchener to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From central Kitchener, take Highway 7 West toward Guelph, then turn north on Wellington Road 29 toward Rockwood. Our office is easily accessible with clear signage. We provide detailed directions and can answer any questions about the route when you schedule your appointment. GPS navigation works reliably to our address.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Kitchener residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure telehealth appointments for patients in Kitchener who prefer virtual care or cannot easily travel to our Rockwood location. Telehealth visits are available for most services including evaluations, medication management, and follow-ups. Most insurance plans cover telehealth at the same rate as in-person visits.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Is parking available at your Rockwood location?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide free, convenient parking directly at our facility with easy access to the entrance. Our office is fully accessible with no stairs or barriers, and we've designed our space to ensure privacy and comfort for all patients. The location offers a peaceful, discreet setting that many Kitchener patients appreciate.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Kitchener
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Whether you prefer in-person visits at our Rockwood location or the convenience of telehealth, quality psychiatric care is within reach.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>

    </main>
  )
}