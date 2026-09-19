import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurance & Billing | ipfinity',
  description: 'Transparent pricing and billing information for enterprise telecommunications services.',
}

export default function InsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">Insurance & Billing</h1>
          <p className="text-xl text-white/90">Transparent pricing and billing information</p>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16">Accepted Insurance Plans</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              Aetna
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              BlueCross BlueShield
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              Cigna
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              United Healthcare
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              Humana
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              Medicare
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              Medicaid
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              Tricare
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              Anthem
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg">
              Magellan
            </div>
          </div>
          <p className="text-center text-[var(--color-muted)] mt-12 max-w-2xl mx-auto">
            Don't see your insurance provider listed? Contact our billing team to verify coverage. We work with most major insurance carriers and are continuously expanding our network.
          </p>
        </div>
      </section>

      {/* Billing Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16">How Billing Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Verify Coverage</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We verify your insurance benefits before service to confirm coverage, understand your deductible status, and determine your expected out-of-pocket costs.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Service Provided</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                You receive the telecommunications services you need. All services are documented with detailed records to support accurate billing and claims processing.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Claim Submitted</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We submit a claim to your insurance company on your behalf. The claim includes all necessary documentation and coding to ensure proper processing and reimbursement.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">You Pay Remainder</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                After your insurance processes the claim, you receive an Explanation of Benefits (EOB) showing what was covered. We then bill you for any remaining balance such as co-pays or deductibles.
              </p>
            </div>
          </div>
          <div className="mt-16 max-w-4xl mx-auto bg-[var(--color-cream)] rounded-2xl p-10 animate-fade-up">
            <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-6">Understanding Your Financial Responsibility</h3>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                <strong className="text-[var(--color-ink)]">Co-payments:</strong> A fixed amount you pay at the time of service, typically ranging from $10-$50 depending on your plan and the type of service received.
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Deductibles:</strong> The amount you must pay out-of-pocket before your insurance begins to cover services. Once met, your insurance will pay according to your plan's coverage percentage.
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Explanation of Benefits (EOB):</strong> A statement from your insurance company showing what services were billed, what they paid, and what you owe. This is not a bill, but an important document to review for accuracy.
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Co-insurance:</strong> After your deductible is met, you may be responsible for a percentage of the service cost (e.g., 20%) while your insurance covers the remainder (e.g., 80%).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Options */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-6">Self-Pay Options</h3>
            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
              <p>
                We believe quality telecommunications services should be accessible to all businesses. If you don't have insurance coverage or prefer to pay directly, we offer flexible self-pay options.
              </p>
              <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2">
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Sliding Scale Pricing</h4>
                <p>
                  For small businesses and startups, we offer adjusted pricing based on your organization's size and budget. Our goal is to make enterprise-grade telecommunications accessible regardless of financial circumstances.
                </p>
              </div>
              <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2">
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Payment Plans</h4>
                <p>
                  Spread the cost of implementation and service over time with interest-free payment plans. We work with you to create a schedule that fits your cash flow and budget constraints.
                </p>
              </div>
              <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2">
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Good Faith Estimate</h4>
                <p>
                  In compliance with the No Surprises Act, we provide a detailed good faith estimate of all costs before you commit to services. You'll know exactly what to expect with no hidden fees or surprise charges.
                </p>
              </div>
              <p className="text-sm border-t border-[var(--color-border)] pt-6 mt-8">
                <strong className="text-[var(--color-ink)]">No Surprises Act:</strong> Under federal law, you have the right to receive a Good Faith Estimate explaining how much your telecommunications services will cost. If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. Contact our billing department to learn more about your rights or to receive a detailed estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16">Billing Questions & Answers</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden animate-fade-up transition-all duration-300">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-accent)] transition-colors duration-200 flex justify-between items-center">
                When will I receive my bill?
                <span className="text-[var(--color-accent)] transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Bills are typically sent within 30-45 days after service, once we receive the Explanation of Benefits (EOB) from your insurance company. Self-pay clients receive invoices immediately following service delivery. All bills include a detailed breakdown of services and charges.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden animate-fade-up transition-all duration-300">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-accent)] transition-colors duration-200 flex justify-between items-center">
                What payment methods do you accept?
                <span className="text-[var(--color-accent)] transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>We accept all major credit cards (Visa, MasterCard, American Express, Discover), ACH bank transfers, wire transfers, and business checks. For enterprise clients, we also offer net-30 invoicing terms upon credit approval. Payment can be made online through our secure portal, by phone, or by mail.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden animate-fade-up transition-all duration-300">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-accent)] transition-colors duration-200 flex justify-between items-center">
                What if my insurance denies the claim?
                <span className="text-[var(--color-accent)] transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Our billing team will work with you and your insurance company to understand the reason for denial and file an appeal if appropriate. Common denial reasons include missing documentation or coding errors, which we can often resolve quickly. We'll keep you informed throughout the appeals process and discuss alternative payment options if needed.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden animate-fade-up transition-all duration-300">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-accent)] transition-colors duration-200 flex justify-between items-center">
                Can I get an itemized statement?
                <span className="text-[var(--color-accent)] transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Absolutely. You can request a detailed itemized statement at any time by contacting our billing department. The statement will include service dates, descriptions, billing codes, charges, insurance payments, adjustments, and your remaining balance. Itemized statements are also available through our online patient portal.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden animate-fade-up transition-all duration-300">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-accent)] transition-colors duration-200 flex justify-between items-center">
                Do you offer financial assistance for businesses in need?
                <span className="text-[var(--color-accent)] transition-transform duration-200 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes. We offer a financial assistance program for qualifying organizations experiencing hardship. Our program includes discounted service rates, extended payment plans, and deferred payment options. Contact our billing team to discuss your situation confidentially and learn about available assistance. We're committed to ensuring that financial circumstances don't prevent businesses from accessing essential telecommunications services.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-6 animate-fade-up">Questions About Billing?</h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up leading-relaxed">
            Our billing team is here to help you understand your costs, verify insurance coverage, and explore payment options.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up"
          >
            Contact Billing Team
          </a>
        </div>
      </section>
    </main>
  )
}