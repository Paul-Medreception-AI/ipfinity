import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ipfinity.com'),
  title: 'ipfinity | Global Cloud Telecommunications Built for Business',
  description: 'IPFINITY delivers cloud-based telecommunications infrastructure connecting businesses across 150+ countries. Our flexible CloudVoice platform provides SIP trunking, messaging, fax, and custom voice applications designed to adapt to your unique communication needs.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'ipfinity | Global Cloud Telecommunications Built for Business',
    description: 'IPFINITY delivers cloud-based telecommunications infrastructure connecting businesses across 150+ countries. Our flexible CloudVoice platform provides SIP trunking, messaging, fax, and custom voice applications designed to adapt to your unique communication needs.',
    url: 'https://www.ipfinity.com',
    siteName: 'ipfinity',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ipfinity'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/">
              <img src="/logo.png" alt="ipfinity" className="h-11 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Services</a>
              <a href="/solutions" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Solutions</a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">About</a>
              <a href="/technology" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Technology</a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Contact</a>
              <a href="/contact" className="ml-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">Request a Consultation</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <img src="/logo.png" alt="ipfinity" className="h-11 w-auto mb-4 brightness-0 invert" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Global telecommunications infrastructure that adapts to your business.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/services" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">Services</a></li>
                  <li><a href="/solutions" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">Solutions</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">About</a></li>
                  <li><a href="/technology" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">Technology</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>P.O. Box 564, Rockwood, ON N0B 2K0 Canada</p>
                  <p><a href="tel:(416) 900-1416" className="hover:text-[var(--color-accent)] transition-colors">(416) 900-1416</a></p>
                  <p className="text-gray-400">Fax: (416) 259-0432</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-xs text-gray-400 mb-4">
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} ipfinity</p>
                <div className="flex gap-4">
                  <a href="/privacy-sms" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a>
                  <span>|</span>
                  <a href="/terms-sms" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</a>
                  <span>|</span>
                  <a href="/terms-sms#sms-terms" className="hover:text-[var(--color-accent)] transition-colors">SMS Terms</a>
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