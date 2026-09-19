import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Other Medical Near Rockwood, ON | ipfinity',
  description: 'Serving patients from Rockwood and surrounding ON communities. Expert psychiatric care is closer than you think. Telehealth options available.',
  openGraph: {
    title: 'Other Medical Near Rockwood, ON | ipfinity',
    description: 'Serving patients from Rockwood and surrounding ON communities. Expert psychiatric care is closer than you think.',
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
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Rockwood, ON</span>
          </nav>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near Rockwood, ON
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
            Serving patients from Rockwood and surrounding ON communities. Expert psychiatric care is closer than you think.
          </p>

          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule in Rockwood
          </Link>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Rockwood Area
          </h2>

          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Located conveniently for Rockwood residents, our practice provides comprehensive psychiatric care without the long commute. Whether you're coming from downtown Rockwood, nearby Guelph/Eramosa, or surrounding Wellington County communities, our office is easily accessible with ample parking and straightforward directions. Many of our Rockwood patients find the drive quick and stress-free, making regular appointments and follow-up care simple to maintain.
            </p>

            <p>
              Patients from Rockwood choose ipfinity because we combine expert medical care with a personalized approach that larger urban clinics often can't provide. We understand the unique needs of our community and offer flexible scheduling, including telehealth appointments for those days when the drive isn't convenient. Our commitment to accessible, high-quality psychiatric care means you don't have to travel far to receive the treatment you deserve.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)] animate-fade-up">
            <div className="text-center">
              <svg 
                className="w-16 h-16 mx-auto mb-3 text-[var(--color-primary)]" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={1.5} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Rockwood to ipfinity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Rockwood Patients
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
                Comprehensive Assessments
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough psychiatric evaluations to understand your unique needs and develop personalized treatment plans.
              </p>
              <Link 
                href="/services/assessments" 
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
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychopharmacology services with ongoing monitoring and adjustment for optimal results.
              </p>
              <Link 
                href="/services/medication-management" 
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Convenient virtual appointments from the comfort of your Rockwood home with the same quality care.
              </p>
              <Link 
                href="/services/telehealth" 
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

      {/* Telehealth Callout */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto border border-[var(--color-border)] animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              For Rockwood residents with busy schedules, mobility concerns, or unpredictable weather, our telehealth services provide the same expert psychiatric care without leaving home. Connect with our providers through secure video appointments that are covered by most insurance plans.
            </p>
            <p>
              Telehealth is perfect for follow-up appointments, medication reviews, and ongoing therapy sessions. You'll receive the same personalized attention and clinical expertise as in-person visits, with the added convenience of logging in from your own space. Many Rockwood patients use a hybrid approach, combining in-office and virtual appointments to fit their lifestyle.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Ask About Telehealth
            </Link>
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
                How far is ipfinity from Rockwood?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our office is conveniently located a short drive from Rockwood, typically 15-25 minutes depending on your exact location and traffic. We're easily accessible via Highway 7 with ample free parking on-site. Many patients from Rockwood find the drive straightforward and use the time to prepare for their appointment or decompress afterward.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What's the best route from Rockwood to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most Rockwood patients take Highway 7 eastbound for the most direct route. Detailed driving directions are provided when you schedule your appointment, and our staff is happy to help with navigation questions. We recommend allowing a few extra minutes for your first visit to find parking and locate our suite.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Rockwood residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! Telehealth appointments are available for initial consultations, follow-up visits, and medication management. Many Rockwood patients prefer telehealth for routine appointments and come to the office for comprehensive assessments. Virtual visits are covered by most insurance plans and offer the same quality care from the comfort of your home.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is your office accessible for patients with mobility concerns?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. Our facility is fully accessible with wheelchair-friendly entrances, elevators, and restrooms. We have designated accessible parking spots close to the entrance. If you have specific accessibility needs, please let us know when scheduling so we can ensure your visit is comfortable and accommodating.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">
            Get Expert Care from Rockwood
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Quality psychiatric care is closer than you think. Schedule your appointment today and experience personalized treatment from providers who understand your needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>

    </main>
  )
}