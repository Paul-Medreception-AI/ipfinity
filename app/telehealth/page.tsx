import Link from 'next/link'

export default function TelehealthPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">Telehealth Services</h1>
          <p className="text-xl text-white/90">Expert psychiatric care from the comfort of your home</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl font-light mx-auto mb-6">1</div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Book your telehealth appointment online or by phone at a time that works for you.</p>
            </div>

            <div className="text-center animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl font-light mx-auto mb-6">2</div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4">Connect</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Join your secure video session from any device—no downloads or special software required.</p>
            </div>

            <div className="text-center animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl font-light mx-auto mb-6">3</div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4">Get Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Receive expert care, diagnosis, and treatment recommendations just like an in-person visit.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.3s'}}>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-6">Available via Telehealth</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Initial consultations and evaluations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Follow-up appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Medication management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Therapy and counseling sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Care coordination discussions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.4s'}}>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-6">May Require In-Person</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Physical examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Laboratory tests or procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Acute emergency situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Complex diagnostic assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Certain controlled substance prescriptions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] text-center mb-16">Benefits of Telehealth</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">No Commute Required</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Save time and gas. Receive care from home, work, or anywhere with a private internet connection.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.1s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Same-Day Availability</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Get the care you need when you need it, with flexible scheduling including evening and weekend appointments.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Private and Discreet</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Attend appointments from the comfort and privacy of your own space without waiting rooms or check-in desks.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.3s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Works from Any Device</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Access care from your smartphone, tablet, or computer—whatever device is most convenient for you.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.4s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Covered by Insurance</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Most insurance plans cover telehealth visits at the same rate as in-person appointments. We'll verify your coverage.</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.5s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-3">Secure HIPAA-Compliant Platform</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Your privacy is protected with enterprise-grade encryption and full HIPAA compliance on our telehealth platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-light text-[var(--color-ink)] text-center mb-12">What You Need for Your Telehealth Visit</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Device Requirements
                </h3>
                <ul className="space-y-2 text-[var(--color-muted)] ml-9">
                  <li>• Computer, smartphone, or tablet with camera and microphone</li>
                  <li>• Updated web browser (Chrome, Safari, Firefox, or Edge)</li>
                  <li>• Speakers or headphones for audio</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                  Internet Connection
                </h3>
                <ul className="space-y-2 text-[var(--color-muted)] ml-9">
                  <li>• Minimum 3 Mbps download/upload speed recommended</li>
                  <li>• Wired connection or strong Wi-Fi signal</li>
                  <li>• Test your connection before your appointment</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Environment
                </h3>
                <ul className="space-y-2 text-[var(--color-muted)] ml-9">
                  <li>• Quiet, private space where you won't be interrupted</li>
                  <li>• Good lighting so your provider can see you clearly</li>
                  <li>• Have your medication list and insurance card handy</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Supported Platforms
                </h3>
                <ul className="space-y-2 text-[var(--color-muted)] ml-9">
                  <li>• Windows 10+ and macOS 10.14+</li>
                  <li>• iOS 13+ (iPhone and iPad) and Android 8+</li>
                  <li>• Most visits require no app download—just click your link</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--color-border)] text-center">
              <p className="text-[var(--color-muted)] mb-6">Need help getting started or have technical questions?</p>
              <Link 
                href="/contact"
                className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Contact Our Support Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-light text-white mb-6">Ready to Get Started with Telehealth?</h2>
          <p className="text-xl text-white/90 mb-8">Schedule your first virtual appointment today and experience the convenience of expert care from home.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors"
            >
              Request a Consultation
            </Link>
            <Link 
              href="/services"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}