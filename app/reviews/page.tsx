import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">
            Client Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your feedback helps us continually improve our telecommunications solutions and service delivery.
          </p>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-6">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed">
            As a valued IPFINITY client, your experience matters to us. We invite you to share your thoughts on our telecommunications solutions, support team, and overall service quality. Your honest feedback helps us deliver even better business communication infrastructure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-6">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Discover how IPFINITY's CloudVoice platform can deliver scalable, reliable telecommunications infrastructure tailored to your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-10 py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] px-10 py-4 rounded-md font-semibold transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}