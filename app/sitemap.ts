import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/data/services'

/* Generated from the routes that actually exist in app/.
   If you add a page, add it here — nothing enumerates the filesystem at build time. */

const BASE = 'https://www.ipfinity.com'

const CORE: [string, number, 'daily' | 'weekly' | 'monthly'][] = [
  ['', 1.0, 'weekly'],
  ['/services', 0.9, 'weekly'],
  ['/solutions', 0.9, 'weekly'],
  ['/technology', 0.9, 'weekly'],
  ['/case-studies', 0.85, 'monthly'],
  ['/compare', 0.8, 'monthly'],
  ['/locations', 0.8, 'monthly'],
  ['/about', 0.8, 'monthly'],
  ['/contact', 0.8, 'monthly'],
  ['/faq', 0.7, 'monthly'],
  ['/accessibility', 0.5, 'monthly'],
  ['/blog', 0.7, 'weekly'],
]

const COMPARE = [
    'cloud-voice-vs-on-premises-pbx',
    'hybrid-vs-all-ip-telecommunications',
    'sip-trunking-vs-pri-trunking',
    'sms-vs-xmpp-messaging',
    'toll-free-vs-local-numbers',
]

const LOCATIONS = [
    'guelph-on',
    'kitchener-on',
    'rockwood-on',
    'toronto-on',
]

const BLOG = [
    'advanced-call-analytics-using-communication-data-to-drive-bu',
    'building-business-continuity-into-your-voice-infrastructure',
    'calculating-the-true-cost-of-telecommunications-beyond-per-m',
    'call-queuing-in-the-cloud-designing-better-caller-experience',
    'cloud-pbx-vs-premises-based-systems-a-technical-comparison',
    'contact-center-cloud-migration-moving-call-center-operations',
    'custom-call-routing-strategies-that-improve-customer-experie',
    'custom-ivr-design-creating-self-service-menus-that-actually-',
    'e911-and-emergency-calling-compliance-for-cloud-voice-system',
    'fax-to-email-integration-modernizing-document-workflows-in-r',
    'how-to-implement-a-hybrid-voice-solution-without-disrupting-',
    'international-call-routing-optimizing-quality-and-cost-acros',
    'international-telecommunications-regulations-navigating-coun',
    'legacy-system-integration-connecting-old-pbx-hardware-to-clo',
    'multi-channel-communication-strategy-integrating-voice-sms-f',
    'multi-site-voice-architecture-connecting-distributed-teams-e',
    'number-porting-process-migrating-your-phone-numbers-to-a-new',
    'real-time-communications-security-protecting-voice-and-messa',
    'regulatory-compliance-for-business-communications-tcpa-gdpr-',
    'scaling-telecommunications-infrastructure-as-your-business-g',
    'sip-trunking-vs-traditional-pri-which-is-right-for-your-busi',
    'sla-requirements-for-business-telecommunications-what-uptime',
    'smartphone-integration-for-business-voice-byod-strategies-th',
    'sms-business-messaging-compliance-delivery-rates-and-best-pr',
    'telecom-cost-analysis-auditing-your-current-spending-for-opt',
    'telecom-infrastructure-for-remote-first-organizations',
    'telecom-vendor-lock-in-how-to-maintain-flexibility-and-avoid',
    'telecommunications-bandwidth-requirements-sizing-your-intern',
    'telecommunications-disaster-recovery-testing-validating-your',
    'telecommunications-rfp-guide-evaluating-vendors-and-writing-',
    'the-complete-guide-to-global-did-number-management',
    'toll-free-number-strategy-800-vs-888-vs-vanity-numbers-for-b',
    'understanding-carrier-interconnection-how-global-voice-netwo',
    'unified-communications-roi-measuring-the-business-impact-of-',
    'voice-application-apis-automating-your-communication-workflo',
    'voice-codec-selection-balancing-audio-quality-and-bandwidth-',
    'voice-quality-optimization-troubleshooting-jitter-latency-an',
    'voice-traffic-analysis-identifying-patterns-that-drive-infra',
    'voicemail-to-email-transcription-accuracy-privacy-and-produc',
    'xmpp-messaging-for-enterprise-when-to-choose-xmpp-over-other',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    ...CORE.map(([path, priority, changeFrequency]) => ({
      url: `${BASE}${path}`,
      priority,
      changeFrequency,
      lastModified: now,
    })),
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      priority: 0.85,
      changeFrequency: 'weekly' as const,
      lastModified: now,
    })),
    ...COMPARE.map((slug) => ({
      url: `${BASE}/compare/${slug}`,
      priority: 0.75,
      changeFrequency: 'monthly' as const,
      lastModified: now,
    })),
    ...LOCATIONS.map((slug) => ({
      url: `${BASE}/locations/${slug}`,
      priority: 0.75,
      changeFrequency: 'monthly' as const,
      lastModified: now,
    })),
    ...BLOG.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
      lastModified: now,
    })),
  ]
}
