import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ipfinity.com'),
  title: 'IPfinity | Global Cloud Telecommunications Built for Business',
  description: 'IPfinity is an accredited cloud telecommunications carrier serving business in Canada and the US since 2002. SIP and PRI trunking, global DID numbers, cloud fax, business messaging and custom voice applications.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'IPfinity | Global Cloud Telecommunications Built for Business',
    description: 'An accredited cloud telecommunications carrier serving business in Canada and the US since 2002. Communicate without borders.',
    url: 'https://www.ipfinity.com',
    siteName: 'IPfinity',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPfinity - we are CLOUDVOICE'
      }
    ],
    locale: 'en_CA',
    type: 'website'
  }
}

/* ── Navigation model ─────────────────────────────────────────────────────────
   Every top-level item is ITSELF a link to a real hub page, and also opens a
   dropdown. Hub pages: /services /solutions /technology /blog /about all exist,
   as do /compare and /locations (created alongside this header).
   Dropdowns are CSS-only (group-hover + focus-within) so they work in a server
   component with no client JS, and remain keyboard reachable.
--------------------------------------------------------------------------- */
const NAV: { label: string; href: string; items: { label: string; href: string; blurb: string }[] }[] = [
  {
    label: 'Services',
    href: '/services',
    items: [
      { label: 'SIP & PRI Trunking',        href: '/services/sip-pri-trunking',          blurb: 'Connect your phone system to our network' },
      { label: 'Global DID Numbers',        href: '/services/global-did-numbers',        blurb: 'Local numbers in markets worldwide' },
      { label: 'Custom Voice Applications', href: '/services/custom-voice-applications', blurb: 'IVR and call flows built to your process' },
      { label: 'Business Messaging',        href: '/services/business-messaging',        blurb: 'SMS and XMPP for business' },
      { label: 'Hybrid Solutions',          href: '/services/hybrid-solutions',          blurb: 'Keep existing kit, add cloud' },
      { label: 'Disaster Recovery',         href: '/services/disaster-recovery',         blurb: 'Keep dial tone when a site goes down' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    items: [
      { label: 'Multi-Site Business',     href: '/solutions#multi-site',     blurb: 'One dial plan across every office' },
      { label: 'Call & Contact Centres',  href: '/solutions#call-centres',   blurb: 'Cloud queuing and the analytics behind it' },
      { label: 'Replacing a Legacy PBX',  href: '/solutions#legacy-pbx',     blurb: 'Move off ageing hardware without a forklift' },
      { label: 'Remote & Hybrid Teams',   href: '/solutions#remote-teams',   blurb: 'Extensions that follow your staff' },
      { label: 'Healthcare Practices',    href: '/solutions#healthcare',     blurb: 'Phone systems and IVRs for Ontario clinics' },
      { label: 'International Business',  href: '/solutions#international',  blurb: 'Numbers and termination across borders' },
    ],
  },
  {
    label: 'Technology',
    href: '/technology',
    items: [
      { label: 'The Network',        href: '/technology#network',    blurb: 'An accredited carrier, cradle to grave' },
      { label: 'Nightingale & QoS',  href: '/technology#nightingale', blurb: 'Our appliance that protects call quality' },
      { label: 'Certified Endpoints', href: '/technology#endpoints',  blurb: 'Snom, Grandstream and Yealink handsets' },
      { label: 'Redundancy & Failover', href: '/technology#redundancy', blurb: 'What happens when a line drops' },
      { label: 'Security',           href: '/technology#security',   blurb: 'TLS, SRTP and toll-fraud protection' },
      { label: 'Global Reach',       href: '/technology#global-reach', blurb: 'Where we carry traffic' },
    ],
  },
  {
    label: 'Resources',
    href: '/blog',
    items: [
      { label: 'Insights & Articles', href: '/blog',    blurb: 'Guides on voice, messaging and networks' },
      { label: 'Comparisons',         href: '/compare', blurb: 'SIP vs PRI, cloud vs on-premises and more' },
      { label: 'Frequently Asked Questions', href: '/faq', blurb: 'Porting, contracts, outages and costs' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    items: [
      { label: 'About IPfinity',  href: '/about',        blurb: 'Carrier-owned cloud voice since 2002' },
      { label: 'Case Studies',    href: '/case-studies', blurb: 'BouMatic, Swatch Canada and MSC' },
      { label: 'Where We Serve',  href: '/locations',    blurb: 'Business telecom across Ontario and beyond' },
      { label: 'Contact Us',      href: '/contact',      blurb: 'Talk to sales about your requirement' },
      { label: 'Accessibility',   href: '/accessibility', blurb: 'Our feedback process and this site' },
    ],
  },
]

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
      className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        {/* The IPfinity logo is a WHITE wordmark with an orange "ip". On a white
            header only the "ip" is legible, so the header is dark by design. */}
        <header className="sticky top-0 z-50 bg-[var(--color-ink)] border-b border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            <a href="/" className="shrink-0" aria-label="IPfinity home">
              <img src="/logo.png" alt="IPfinity - we are CLOUDVOICE" className="h-14 w-auto" />
            </a>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
              {NAV.map((section) => (
                <div key={section.label} className="relative group">
                  <a
                    href={section.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/10 group-focus-within:bg-white/10 transition-colors"
                  >
                    {section.label}
                    <Chevron />
                  </a>
                  <div
                    className="absolute left-0 top-full pt-2 w-80 opacity-0 invisible translate-y-1
                               group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                               group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                               transition-all duration-200"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden py-2">
                      <a
                        href={section.href}
                        className="block px-5 py-3 border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors"
                      >
                        <span className="block text-sm font-semibold text-[var(--color-primary)]">
                          All {section.label} &rarr;
                        </span>
                      </a>
                      {section.items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-3 hover:bg-[var(--color-cream)] transition-colors"
                        >
                          <span className="block text-sm font-semibold text-[var(--color-ink)]">{item.label}</span>
                          <span className="block text-xs text-[var(--color-muted)] mt-0.5 leading-snug">{item.blurb}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <a
                href="/contact"
                className="ml-4 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
              >
                Request a Quote
              </a>
            </nav>

            {/* Mobile navigation: <details> works with no client JS */}
            <details className="lg:hidden relative">
              <summary className="list-none cursor-pointer p-2 -mr-2 text-white" aria-label="Open menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                  <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                </svg>
              </summary>
              <div className="fixed left-0 right-0 top-20 bottom-0 overflow-y-auto bg-[var(--color-ink)] border-t border-white/10 px-5 py-4">
                {NAV.map((section) => (
                  <div key={section.label} className="border-b border-white/10 py-1">
                    <a href={section.href} className="block py-3 text-base font-semibold text-white">
                      {section.label}
                    </a>
                    <div className="pb-3 pl-3 space-y-2.5">
                      {section.items.map((item) => (
                        <a key={item.href} href={item.href} className="block text-sm text-white/70 hover:text-white">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <a
                  href="/contact"
                  className="mt-5 block text-center bg-[var(--color-primary)] text-white px-5 py-3.5 rounded-xl font-semibold"
                >
                  Request a Quote
                </a>
                <a href="tel:+14169001416" className="mt-3 block text-center text-white/80 text-sm py-2">
                  Call 416.900.1416
                </a>
              </div>
            </details>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-1">
                <img src="/logo.png" alt="IPfinity - we are CLOUDVOICE" className="h-12 w-auto mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  An accredited telecommunications carrier delivering cloud voice to business
                  since 2002. Communicate without borders.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-4">Services</h3>
                <ul className="space-y-2">
                  {NAV[0].items.map((i) => (
                    <li key={i.href}>
                      <a href={i.href} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">{i.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/solutions" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Solutions</a></li>
                  <li><a href="/technology" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Technology</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">About IPfinity</a></li>
                  <li><a href="/case-studies" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Case Studies</a></li>
                  <li><a href="/locations" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Where We Serve</a></li>
                  <li><a href="/compare" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Comparisons</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">Insights</a></li>
                  <li><a href="/faq" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors text-sm">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-4">Contact</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>P.O. Box 564<br />Rockwood, ON N0B 2K0<br />Canada</p>
                  <p><a href="tel:+14169001416" className="hover:text-[var(--color-primary)] transition-colors">416.900.1416</a></p>
                  <p><a href="tel:+18554734648" className="hover:text-[var(--color-primary)] transition-colors">855-IPFINITY</a></p>
                  <p className="text-gray-400">Fax: 416.259.0432</p>
                  <p><a href="mailto:info@ipfinity.com" className="hover:text-[var(--color-primary)] transition-colors">info@ipfinity.com</a></p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} IPfinity Inc. All rights reserved.</p>
                <div className="flex gap-4">
                  <a href="/privacy-sms" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a>
                  <span aria-hidden="true">|</span>
                  <a href="/terms-sms" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</a>
                  <span aria-hidden="true">|</span>
                  <a href="/accessibility" className="hover:text-[var(--color-primary)] transition-colors">Accessibility</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
