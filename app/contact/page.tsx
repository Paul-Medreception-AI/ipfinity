import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Sales | ipfinity',
  description: 'Talk to IPFINITY about cloud voice, SIP trunking, global numbers and business messaging. Request a quote or a scoping call. Rockwood, Ontario. Tel 416.900.1416.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-['Cormorant_Garamond',serif] text-6xl font-light mb-6">
            Talk to Sales
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tell us how your business communicates today and we will scope what it should cost. No obligation, and no pressure to replace hardware that still works.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)]">
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl mb-3 text-[var(--color-ink)]">
                Request a Quote
              </h2>
              <p className="text-[var(--color-muted)] text-sm mb-8 leading-relaxed">
                The more of the following you can fill in, the closer the first number we give you will be to the final one. If you do not know an answer, leave it blank and we will work it out on the call.
              </p>
              <form method="POST" action="https://formspree.io/f/placeholder" id="form">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="users" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                        Number of Users
                      </label>
                      <input
                        type="text"
                        id="users"
                        name="users"
                        inputMode="numeric"
                        className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="sites" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                        Number of Sites
                      </label>
                      <input
                        type="text"
                        id="sites"
                        name="sites"
                        inputMode="numeric"
                        className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="current-provider" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Current Provider
                    </label>
                    <input
                      type="text"
                      id="current-provider"
                      name="current-provider"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="current-system" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Current Phone System
                    </label>
                    <input
                      type="text"
                      id="current-system"
                      name="current-system"
                      placeholder="PBX make and model, or cloud platform"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      What You Are Looking At
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="CloudVoice / Hosted Phone System">CloudVoice / Hosted Phone System</option>
                      <option value="SIP Trunking or PRI Replacement">SIP Trunking or PRI Replacement</option>
                      <option value="Global DID Numbers">Global DID Numbers</option>
                      <option value="Cloud Fax">Cloud Fax</option>
                      <option value="Call Centre / Queuing and Reporting">Call Centre / Queuing and Reporting</option>
                      <option value="Business Messaging (SMS / XMPP)">Business Messaging (SMS / XMPP)</option>
                      <option value="Custom Voice Application">Custom Voice Application</option>
                      <option value="Redundancy, Failover and Disaster Recovery">Redundancy, Failover and Disaster Recovery</option>
                      <option value="Mobility and Smartphone Apps">Mobility and Smartphone Apps</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="best-time" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Best Time to Call
                    </label>
                    <input
                      type="text"
                      id="best-time"
                      name="best-time"
                      placeholder="Day, time and time zone"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Anything Else We Should Know
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Contract end dates, sites opening or closing, numbers you must keep, call volumes, problems with the current service"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white py-4 rounded-xl font-semibold transition-colors mt-2"
                  >
                    Request a Quote
                  </button>

                  <p className="text-[var(--color-muted)] text-xs mt-4">
                    We use what you send here to answer your enquiry and prepare a quote.
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl mb-3 text-[var(--color-ink)]">
                  Mailing Address
                </h3>
                <p className="text-[var(--color-ink)]">
                  IPFINITY Inc.<br />
                  P.O. Box 564<br />
                  Rockwood, ON N0B 2K0<br />
                  Canada
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl mb-3 text-[var(--color-ink)]">
                  Call, Fax or Email
                </h3>
                <a href="tel:+14169001416" className="font-['Cormorant_Garamond',serif] text-3xl font-semibold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors block mb-2">
                  416.900.1416
                </a>
                <p className="text-[var(--color-ink)] text-sm mb-1">
                  Toll free: 855-IPFINITY
                </p>
                <p className="text-[var(--color-muted)] text-sm mb-3">
                  Fax: 416.259.0432
                </p>
                <a href="mailto:info@ipfinity.com" className="text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors font-medium">
                  info@ipfinity.com
                </a>
              </div>

              <div className="bg-[var(--color-light)] rounded-2xl p-8">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />
                </svg>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl mb-3 text-[var(--color-ink)]">
                  Where We Serve
                </h3>
                <p className="text-[var(--color-ink)]">
                  Canada and the United States, with numbers and coverage extending to Colombia, Mexico, parts of Europe, Australia and New Zealand.
                </p>
              </div>

              <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
                </svg>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl mb-3">
                  What a Quote Covers
                </h3>
                <p className="mb-4 text-white/90">
                  We price by SIP trunks, simultaneous channels, users, numbers, cloud IVR and the level of redundancy you want, rather than a flat per-seat rate. A SIP trunk is $30 CAD. Fax is included.
                </p>
                <a
                  href="#form"
                  className="inline-block bg-white text-[var(--color-primary)] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Start the Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
