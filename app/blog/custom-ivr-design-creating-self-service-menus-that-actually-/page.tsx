import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom IVR Design: Creating Self-Service Menus That Actually Help Customers | ipfinity',
  description: 'How thoughtful IVR design shortens the path to an answer. Practical strategies for building self-service phone menus that reduce frustration and get callers to the right place.',
  keywords: 'IVR design, interactive voice response, self-service menus, customer experience, phone system design, call routing, cloud voice, auto attendant'
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Caller Experience
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Custom IVR Design: Creating Self-Service Menus That Actually Help Customers
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>The IPFINITY Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              We have all been there. You call a business and find yourself working through an endless maze of menu options, none of which quite fit the reason you rang. Press 1 for this, press 2 for that, and by option 7 you have forgotten what option 3 was. Eventually, in frustration, you press zero repeatedly and hope for a person. It is an experience that leaves customers feeling unheard and undervalued, and it costs the business calls it never knows it lost.
            </p>
            <p className="mb-6">
              Interactive Voice Response (IVR) systems do not have to work that way. Designed well, an IVR menu shortens the path to an answer, reduces hold time, and lets callers resolve simple things on their own terms at any hour. The difference between a helpful IVR and an infuriating one is almost entirely design, not technology.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding What Makes IVR Systems Fail
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Before building a better IVR, it helps to be clear about why so many of them disappoint. Poorly designed phone menus are one of the most reliable complaints customers have about dealing with a business by phone, and the causes repeat from one system to the next:
            </p>
            <p className="mb-6">
              Too many menu levels create cognitive overload. When callers have to work through three, four or five layers, they lose track of where they are in the tree and what they have already ruled out. Working memory is limited, and by the time someone hears the fifth option the second one has gone.
            </p>
            <p className="mb-6">
              Vague or overlapping options leave callers guessing. When menu choices are not clearly distinct, or use internal department names instead of the words customers use, people pick the wrong one. That produces misrouted calls, longer handling times and callbacks, all of which cost more than a well-written prompt would have.
            </p>
            <p className="mb-6">
              No clear path to a person makes callers feel trapped. Self-service is valuable, but there should always be an obvious way through to a live answer. A system that hides or delays that option tells the caller exactly how much the organisation values their time.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              &quot;The best IVR is one that customers never really notice. It simply gets them where they need to go, quickly and without friction.&quot;
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Psychology of Effective Menu Design
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Effective IVR design draws on how people actually process spoken information. A caller cannot scan a phone menu the way they scan a web page. They hear it once, in order, while holding the earlier options in their head, and they are often doing something else at the same time.
            </p>
            <p className="mb-6">
              Limit options to three or four choices at each level. That respects the limits of listening and makes it easy for a caller to hold the list long enough to choose. If you have more than four categories of enquiry, consider whether some can be combined, or whether certain requests belong on another channel entirely.
            </p>
            <p className="mb-6">
              Order the options deliberately. Put the most frequently chosen ones first, while keeping the overall logic sensible. People tend to remember the first and last items in a list best, the primacy and recency effects, so position the options that matter most accordingly.
            </p>
            <p className="mb-6">
              Use natural, conversational language that matches how customers describe their own problem. Avoid internal jargon, product codes and abbreviations. A caller is far more likely to say &quot;I want to check on my order&quot; than &quot;I need to access order fulfilment services,&quot; and the menu should meet them in their words.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Building Self-Service Options That Actually Work
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The goal of a good IVR is not only to route calls. It is to let customers complete simple tasks independently when that is genuinely faster for them. Self-service options should be real solutions, not obstacles placed in front of a person.
            </p>
            <p className="mb-6">
              Identify the common, straightforward requests that do not need human judgement. For most businesses that means order or delivery status, account balances, opening hours and directions, service outage updates, confirming a scheduled service window, or requesting a callback. These are good candidates because they are routine, high volume and easily verified.
            </p>
            <p className="mb-6">
              Make the self-service path genuinely easy to use. That means clear prompts, tolerance for different ways of speaking or entering a reference number, and explicit confirmation that the task completed. Always offer a way back to the menu or through to a person when something is not working.
            </p>
            <p className="mb-6">
              Test the IVR with real callers before launch. What is obvious to the team that built it is often opaque to someone hearing it for the first time. Walk a mix of people through it, including customers who rarely call and staff who never deal with the phones, and listen to where they hesitate.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Critical Role of Voice and Pacing
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              It is not just what the IVR says, but how it says it. Voice, tone and pacing shape how callers experience the whole system. A rushed, robotic delivery raises stress and makes the options harder to hold. A warm, clearly paced voice makes the same menu feel shorter than it is.
            </p>
            <p className="mb-6">
              Choose a professional voice whose tone matches the business. For most commercial settings that means competent, calm and unhurried, without being stiff or overly chatty. If you serve customers in more than one language, record each language properly rather than relying on a single recording read quickly in an accent callers have to decode.
            </p>
            <p className="mb-6">
              Pace the prompts, with natural pauses between options. People need a beat to process each choice before the next arrives. Prompts that run the options together force callers to replay the whole menu, which wastes their time and your channel capacity.
            </p>
            <p className="mb-6">
              Keep prompts short but complete. Each option should be long enough to be clear and short enough to remember. Aim for one specific phrase per option. Instead of &quot;Press 1 if you are calling about placing, changing or cancelling an order,&quot; try &quot;Press 1 for orders.&quot;
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Smart Routing and Personalization
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cloud IVR platforms can use caller information to make the experience shorter and more relevant. Applied carefully, these features reduce effort noticeably and show callers that their history with you is not being thrown away at every call.
            </p>
            <p className="mb-6">
              Caller ID recognition can route returning customers based on their record. If someone calls repeatedly about invoicing, the system can offer that option first. If the number is not recognised, the greeting can take a new caller through a slightly fuller menu instead.
            </p>
            <p className="mb-6">
              Integration with your order, ticketing or account systems is what turns an IVR from a switchboard into genuine self-service. Callers can confirm a booked service window by entering a reference number, check the status of an open ticket, or ask for an automatic callback when an agent frees up rather than holding.
            </p>
            <p className="mb-6">
              Time-based routing adjusts the menu to when someone is calling. After hours, the system can lead with emergency or fault-reporting options and state clearly when the office reopens. During a known incident or a seasonal peak, it can announce the situation up front and offer a callback, which removes a great many calls from the queue before they enter it.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Essential Best Practices for IVR Design
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Whether you are building a first IVR or cleaning up one that has grown over the years, these practices will keep the design on the side of the caller:
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Always offer a zero-out option</strong> near the start and again at each level. Never make customers hunt for a way to reach a person.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Acknowledge wait times honestly.</strong> If the queue is long, say so and offer a callback. Transparency builds trust even when the service is under pressure.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Allow callers to repeat the menu</strong> without penalty. Include a clear prompt such as &quot;Press star to hear these options again.&quot;</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Confirm selections before transferring.</strong> A simple &quot;I will connect you to accounts now&quot; keeps the caller oriented and reduces the sense of being thrown around the building.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Monitor your IVR data regularly.</strong> Track completion rates, the points where callers abandon, and how often people press zero. Those three numbers will tell you where the menu is failing.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Update the menu as the business changes.</strong> Nothing frustrates a caller more than options for services you no longer offer, or a holiday greeting still running in March.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Consider accessibility for every caller.</strong> Speak slowly enough for callers with hearing difficulties, allow generous entry timeouts, and make sure the menu still works for someone on a mobile in a noisy place or on a speakerphone in a vehicle.</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              A well-designed IVR is more than a technical convenience. It is a statement about how much you value your customers&apos; time. Every minute someone spends on your phone system either builds confidence in the business or quietly erodes it.
            </p>
            <p className="mb-6">
              At IPFINITY, we build the IVR alongside the lines, the numbers and the queuing, because a menu is only as good as the routing behind it. As an accredited carrier we own that path end to end, which means we can change a prompt, a route and a queue together rather than logging a ticket with somebody else.
            </p>
            <p>
              Ready to fix how people experience your phone system? <a href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-medium">Reach out to our team</a> to talk about custom IVR design, what it can take off your staff, and how to make sure every caller reaches someone who can help.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the IPFINITY Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                An accredited telecommunications carrier delivering cloud voice, fax and messaging since 2002
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog/custom-call-routing-strategies-that-improve-customer-experie" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Custom Call Routing Strategies
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  What happens after the menu: getting every caller to the right person first time.
                </p>
              </div>
            </a>

            <a href="/blog/call-queuing-in-the-cloud-designing-better-caller-experience" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Call Queuing in the Cloud
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Designing hold treatment, callbacks and overflow that callers will actually tolerate.
                </p>
              </div>
            </a>

            <a href="/blog/voice-application-apis-automating-your-communication-workflo" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Voice Application APIs
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Connecting your phone system to the systems that hold the answers callers want.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>

    </main>
  )
}
