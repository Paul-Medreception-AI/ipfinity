import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility | IPfinity',
  description:
    'IPfinity welcomes feedback on accessibility barriers. Our feedback process under the Accessible Canada Act, and how this website is built for assistive technology.',
  alternates: { canonical: '/accessibility' },
}

/* This page carries forward the accessibility commitment IPfinity already
   publishes at ipfinity.com/accessibility, including the Accessible Canada Act
   barrier definition quoted verbatim and the accessibility@ipfinity.com
   feedback address. Nothing here claims a certification, an audit, or a
   conformance level that IPfinity has not stated. */

const SITE_MEASURES = [
  {
    title: 'Keyboard navigation',
    body: 'Every menu opens on keyboard focus as well as on hover, so the navigation can be reached and used without a mouse.',
  },
  {
    title: 'Text, not pictures of text',
    body: 'Product and section names are real text rather than words baked into images, so screen readers announce them and browsers can resize them.',
  },
  {
    title: 'Descriptive link and image text',
    body: 'Images carry alternative text that describes what they show, and links describe where they go rather than saying "click here".',
  },
  {
    title: 'Colour contrast',
    body: 'Body text and headings are set against backgrounds chosen for contrast, and colour is never the only way information is conveyed.',
  },
  {
    title: 'Structure that reads in order',
    body: 'Pages use a single main heading and a sensible heading hierarchy, so assistive technology can skim a page the way a sighted reader does.',
  },
  {
    title: 'Works at any width',
    body: 'The site reflows down to phone width without a horizontal scroll, and the mobile menu works without relying on hover.',
  },
]

export default function AccessibilityPage() {
  return (
    <main>
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-5">
            Accessibility
          </p>
          <h1 className="text-5xl sm:text-6xl font-light leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Tell us what is in your way
          </h1>
          <p className="text-lg text-white/80 mt-6 leading-relaxed">
            IPfinity welcomes your feedback on any accessibility barriers you may have experienced
            in dealing with us.
          </p>
        </div>
      </section>

      {/* Feedback process */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl text-[var(--color-ink)] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How to give us feedback
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6">
            Please send your feedback, including any detail that helps us understand your concern
            better, to{' '}
            <a href="mailto:accessibility@ipfinity.com" className="text-[var(--color-primary)] font-semibold hover:underline">
              accessibility@ipfinity.com
            </a>
            . You may also reach us by any of the methods on our{' '}
            <a href="/contact" className="text-[var(--color-primary)] font-semibold hover:underline">
              contact page
            </a>
            , including by telephone at{' '}
            <a href="tel:+14169001416" className="text-[var(--color-primary)] font-semibold hover:underline">
              416.900.1416
            </a>
            , if that is easier for you.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed">
            Feedback may be given anonymously. If you would like a reply, please include a way for
            us to reach you.
          </p>

          <div className="mt-10 bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What counts as a barrier
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              The Accessible Canada Act (ACA) defines a barrier as &ldquo;anything physical,
              architectural, technological or attitudinal, anything that is based on information or
              communications or anything that is the result of a policy or a practice, that hinders
              the full and equal participation in society of persons with an impairment, including a
              physical, mental, intellectual, cognitive, learning, communication or sensory
              impairment or a functional limitation.&rdquo;
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              That is deliberately broad. If something about dealing with us was harder than it
              should have been, it is worth telling us about, whether or not it fits a category.
            </p>
          </div>
        </div>
      </section>

      {/* Website measures */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How this website is built
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed max-w-3xl mb-12">
            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. We do
            not claim to have been independently audited against them. The measures below describe
            what the site actually does today.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_MEASURES.map((m) => (
              <div
                key={m.title}
                className="animate-fade-up bg-white rounded-2xl p-7 border border-[var(--color-border)]"
              >
                <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-3">{m.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>

          <p className="text-[var(--color-muted)] leading-relaxed max-w-3xl mt-12">
            Accessibility is not a state a website arrives at once. If you hit something on this
            site that does not work with your assistive technology, that is a defect and we would
            like to know about it.
          </p>
        </div>
      </section>

      {/* Alternate formats */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl text-[var(--color-ink)] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Alternate formats
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed">
            If you need information from this website, a quotation, or any of our documentation in
            another format, contact us at{' '}
            <a href="mailto:accessibility@ipfinity.com" className="text-[var(--color-primary)] font-semibold hover:underline">
              accessibility@ipfinity.com
            </a>{' '}
            and we will work with you to provide it.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-5" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Prefer to talk to a person?
          </h2>
          <p className="text-white/75 mb-9 leading-relaxed">
            Call us and we will take it from there. Accessible communication is, after all, the
            business we are in.
          </p>
          <a
            href="tel:+14169001416"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white font-bold px-10 py-4 rounded-xl transition-colors"
          >
            Call 416.900.1416
          </a>
        </div>
      </section>
    </main>
  )
}
