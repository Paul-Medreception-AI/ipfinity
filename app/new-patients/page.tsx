import Link from 'next/link'

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">New Patients</h1>
          <p className="text-xl text-white/90">Everything you need to know before your first visit</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16">Your First Visit</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="font-serif text-7xl text-[var(--color-accent)] mb-6 font-light">01</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Book your appointment online through our patient portal or call our office. We offer flexible scheduling to accommodate your availability.</p>
            </div>

            <div className="text-center animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="font-serif text-7xl text-[var(--color-accent)] mb-6 font-light">02</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Complete Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Arrive 15 minutes early to complete forms in our office, or download and fill them out ahead of time to streamline your visit.</p>
            </div>

            <div className="text-center animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="font-serif text-7xl text-[var(--color-accent)] mb-6 font-light">03</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Initial Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Comprehensive assessment lasting 60-90 minutes. We'll review your medical history, current concerns, and perform a thorough examination.</p>
            </div>

            <div className="text-center animate-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="font-serif text-7xl text-[var(--color-accent)] mb-6 font-light">04</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Together, we'll create a personalized care plan tailored to your unique needs and health goals. You'll leave with clear next steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16">What to Bring</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Photo ID & Insurance Card</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Valid government-issued identification and your current insurance card (both sides). We'll verify your coverage and benefits during check-in.</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Medication List</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Complete list of current medications including dosages, frequency, and prescribing providers. Include supplements and over-the-counter medications.</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Prior Medical Records</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Relevant test results, imaging studies, or reports from other healthcare providers. Contact your previous provider to request records in advance.</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Emergency Contact Information</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Name, relationship, and contact information for someone we can reach in case of emergency. Include both primary and alternate contacts if possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-serif text-3xl text-[var(--color-ink)] mb-6">Patient Forms</h2>
            <p className="text-[var(--color-muted)] mb-8 text-lg">Forms are available at our office or can be completed at your first appointment. Completing them ahead of time helps reduce wait times.</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Patient Intake Form</h3>
                  <p className="text-[var(--color-muted)]">Comprehensive medical history, current symptoms, and contact information</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Consent for Treatment</h3>
                  <p className="text-[var(--color-muted)]">Authorization for medical care and treatment procedures</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">HIPAA Authorization</h3>
                  <p className="text-[var(--color-muted)]">Privacy practices acknowledgment and records release authorization</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1">Financial Policy Agreement</h3>
                  <p className="text-[var(--color-muted)]">Payment responsibilities, insurance billing, and cancellation policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Info */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16">Telehealth Visits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Device Requirements</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Computer, tablet, or smartphone with camera and microphone. Use Chrome, Safari, or Firefox browser. Stable internet connection recommended for best quality.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Privacy & Security</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">HIPAA-compliant encrypted video platform. Join from a private, quiet location. We'll send you a secure link via email 24 hours before your appointment.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Appointment Process</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Check in through the patient portal 10 minutes early to test your connection. Same thorough care as in-person visits. Prescriptions sent electronically to your pharmacy.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--color-muted)] text-lg">Telehealth appointments available for follow-ups, consultations, and many routine visits. Ask our staff if your concern is suitable for a virtual visit.</p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16">Office Policies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-serif text-2xl text-[var(--color-ink)]">Cancellation Policy</h3>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed">We require 24-hour notice for cancellations or rescheduling. This allows us to offer your appointment time to another patient. Late cancellations may incur a fee.</p>
            </div>

            <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-serif text-2xl text-[var(--color-ink)]">Late Arrivals</h3>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed">Please arrive 15 minutes early for paperwork. If you arrive more than 15 minutes late, we may need to reschedule to ensure quality care for all patients.</p>
            </div>

            <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="font-serif text-2xl text-[var(--color-ink)]">Missed Appointments</h3>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed">Missed appointments without prior notice may result in a no-show fee. Multiple no-shows may affect your ability to schedule future appointments with our practice.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl animate-fade-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-2">Payment & Insurance</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Co-payments are due at the time of service. We accept most major insurance plans and verify benefits prior to your visit. For questions about coverage or billing, our administrative staff is available to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10">We look forward to welcoming you to our practice. Schedule your first appointment today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              Schedule Your First Visit
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Contact Us with Questions
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}