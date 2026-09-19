/** @type {import("next").NextConfig} */

/* Redirect map from the live WordPress site at www.ipfinity.com.
   Sources were taken from an actual crawl of that site (35 reachable pages),
   not guessed, so that link equity and any bookmarked URL survives the cutover.
   Next.js normalises the WordPress trailing slash before matching. */
const LEGACY = {
  // Company
  '/about-ipfinity': '/about',
  '/contact-ipfinity': '/contact',
  '/testimonials': '/case-studies',
  '/case-1': '/case-studies#boumatic',
  '/case-2': '/case-studies#swatch',
  '/case-3': '/case-studies#michael-sheridan-communications',

  // Products and technology
  '/the-cloudvoice-solution': '/services',
  '/global-reach': '/services/global-did-numbers',
  '/high-availability-disaster-recovery-dr': '/services/disaster-recovery',
  '/cloudfax': '/services',
  '/conferencing': '/services/custom-voice-applications',
  '/meet': '/services/custom-voice-applications',
  '/apps': '/services/custom-voice-applications',
  '/compatible-smartphone-apps': '/solutions#remote-teams',
  '/mobility': '/solutions#remote-teams',
  '/call-centres': '/solutions#call-centres',
  '/enterprise-customers': '/solutions',
  '/nightingale-and-qos': '/technology#nightingale',
  '/certified-endpoints': '/technology#endpoints',
  '/redundancy-and-failover': '/technology#redundancy',
  '/security': '/technology#security',
  '/access': '/technology',
  '/technology-backgrounder': '/technology',

  // Commercial / admin
  '/long-distance-plan-and-rates': '/contact',
  '/methods-of-payment': '/contact',
  '/eft-dep': '/contact',
  '/rma': '/contact',

  // Legal
  '/privacy-statement': '/privacy-sms',
  '/tos': '/terms-sms',

  // Retired or never real
  '/covid-19': '/',
  '/sitemap': '/',
  '/test-page': '/',
  '/accessibility': '/about',
}

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      ...Object.entries(LEGACY).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      // Shorthands people type
      { source: '/privacy', destination: '/privacy-sms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
      { source: '/terms', destination: '/terms-sms', permanent: true },
      { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
      { source: '/sms-terms', destination: '/terms-sms', permanent: true },
      { source: '/case-studies/:slug', destination: '/case-studies', permanent: false },
    ]
  },
}

module.exports = nextConfig
