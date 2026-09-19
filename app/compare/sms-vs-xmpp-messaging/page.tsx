import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SMS vs XMPP Messaging: Selecting the Right Protocol for Business Communication | ipfinity',
  description: 'Compare SMS and XMPP messaging for business: reach, features, cost structure, security and what each one is actually good at. Both run on the IPFINITY platform alongside your voice service.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/services/business-messaging" className="hover:underline">Business Messaging</Link>
            <span className="mx-2">›</span>
            <span>SMS vs XMPP</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light leading-tight mb-6">
            SMS vs XMPP Messaging: Selecting the Right Protocol for Business Communication
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            One protocol is built to reach anybody with a mobile number. The other is built for the people who already work for you. Most businesses end up using both, and the useful question is which job goes where.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-center mb-12 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Criteria</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">SMS Messaging</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">XMPP Messaging</div>
            </div>

            {/* Reach */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Who You Can Reach</div>
              <div className="p-6 border-l border-[var(--color-border)]">Any mobile number on any carrier. No app, no account, no data connection needed at the far end.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Accounts on your own server, plus federated servers you choose to trust. Both ends need an IP connection and a client.</div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Feature Set</div>
              <div className="p-6 border-l border-[var(--color-border)]">Plain text in 160 character segments; longer messages are split and rated per segment. MMS for images. Delivery receipts where the carrier supports them.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Presence, group chat, typing indicators, file transfer, read receipts and message history, with optional end-to-end encryption. Extensible, so uncommon requirements can be added.</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost Structure</div>
              <div className="p-6 border-l border-[var(--color-border)]">Priced per message and rated by destination, so the bill moves with volume. Predictable at low volume, less so during a campaign.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Cost sits in the server and its upkeep rather than in each message, so volume is close to free once the platform exists.</div>
            </div>

            {/* Implementation */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">What It Takes to Turn On</div>
              <div className="p-6 border-l border-[var(--color-border)]">Enable messaging on numbers you already own. Nothing to install and nothing for the recipient to do.</div>
              <div className="p-6 border-l border-[var(--color-border)]">A server, accounts for your staff, a client on every device, and a decision about federation. More work up front, less per message afterwards.</div>
            </div>

            {/* Security */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Security and Control</div>
              <div className="p-6 border-l border-[var(--color-border)]">Carrier controlled. Not end-to-end encrypted, and copies sit on handsets and in carrier records. Treat it as a postcard, not an envelope.</div>
              <div className="p-6 border-l border-[var(--color-border)]">TLS between client and server as standard, end-to-end encryption available, and you decide which country the server sits in.</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best Suited For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Reaching customers and the public: order and dispatch notifications, service window confirmations, one-time codes, outage and emergency alerts.</div>
              <div className="p-6 border-l border-[var(--color-border)]">Your own people: internal team chat, presence, coordinating field and office staff, and machine-to-machine messaging between systems.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-6 text-[var(--color-ink)]">
              SMS: Reach Without Preconditions
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The case for SMS is that it asks nothing of the person receiving it. No application to download, no account to create, no data plan, no compatible handset. If somebody gave you a mobile number, a text message will find them, and that is a stronger guarantee than almost anything else in business communications. It is also why SMS remains the default for the messages that genuinely must arrive: a one-time code, a delivery window, a change of plan, a notice that a service is down.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The constraints are real and worth planning around. A message is 160 characters per segment, and longer text is split and rated per segment, so a verbose template costs more than a disciplined one. There is no end-to-end encryption, which rules SMS out for anything genuinely confidential. And because the message is delivered through carrier infrastructure, you are subject to the rules that govern it. For a Canadian business that means consent obligations under CASL for anything commercial, and it means keeping an opt-out that actually works.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Turning it on is the easy part. Business messaging runs on the numbers you already publish, so customers reply to the same number they call, and the conversation is not split across a voice line and some unrelated short code. That continuity matters more than it sounds: a customer who texts the number on your invoice and gets an answer has had a good experience without learning anything new.
            </p>
          </div>

          <div className="mb-16 animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-6 text-[var(--color-ink)]">
              XMPP: Control Over Your Own Traffic
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              XMPP, the Extensible Messaging and Presence Protocol, is an open standard for real-time messaging. Where SMS is a service you buy per message, XMPP is a system you run, and the trade in that sentence is the whole comparison. Running it means a server, accounts, and a client on every device. In exchange you get presence, group chat, file transfer, message history, read receipts and optional end-to-end encryption, none of which are billed per message.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The protocol is extensible by design, which is why it survives in places consumer chat applications never reach: coordinating field crews, passing events between systems, or supporting a workflow that no commercial chat product happens to implement. Federation lets separate organisations connect their servers without either side surrendering its accounts to a third party, which is useful when you work closely with a partner but do not want your internal traffic sitting in their vendor platform.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              The decisive argument is usually data sovereignty rather than features. With XMPP you choose where the server lives, who administers it, what is retained and for how long. For Canadian organisations that answer to a privacy policy, a board, or obligations under PIPEDA, being able to say exactly where internal messages are stored is often worth more than any single capability on the list.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-6 text-[var(--color-ink)]">
              Most Businesses Run Both
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Framing this as a choice is usually a mistake. The two protocols answer different questions. SMS is how you reach somebody who does not work for you; XMPP is how the people who do work for you talk to each other. A dispatcher texting a customer that the technician is thirty minutes away and messaging the technician about the next job is using both, correctly, in the same minute. We provide both on the same platform as your voice service, on the same numbers, so it is one supplier, one bill and one place to ask why something did not arrive. See <Link href="/services/business-messaging" className="text-[var(--color-primary)] hover:underline">business messaging</Link> for how that works day to day.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            How to Decide: Decision Framework
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M9.5 15.5c1.5 1 3 1 4.5 0" />
              </svg>
              Choose SMS Messaging If:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You are messaging people outside your organisation, who will not install anything to hear from you</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">The message is short and factual: a confirmation, a code, a service window, an alert</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You want customers replying to the number they already have for you, rather than to a separate channel</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">The content is not confidential, because SMS is not end-to-end encrypted</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You need it working now, with no infrastructure to stand up and nothing for recipients to learn</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Choose XMPP Messaging If:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">The traffic is internal: your own staff, your own devices, your own systems talking to each other</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You need presence, group chat, file transfer or history, none of which SMS provides</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">Volume is high enough that paying per message for internal chatter would be absurd</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You need to be able to state where internal messages are stored, and under whose jurisdiction</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-[var(--color-ink)]">You have a requirement no off-the-shelf chat product covers, and want a protocol you can extend</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can SMS and XMPP be used together in the same organisation?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, and that is the normal arrangement rather than the exception. SMS handles anything aimed outward at customers and suppliers, XMPP handles the internal traffic, and each is used for the job it is good at. Because both run on our platform alongside your voice service, they are one relationship rather than two vendors blaming each other when a message does not arrive.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How does delivery compare between the two?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                They fail in different ways, which is more useful to know than any headline figure. SMS depends on mobile coverage and on the recipient handset being switched on; the network holds and retries a message for a period, and a phone that is off but in coverage generally receives it on waking. XMPP depends on an IP path at both ends; if a recipient is offline the server stores the message and hands it over when their client reconnects. So SMS is the safer bet for somebody standing in a rural parking lot, and XMPP is the safer bet for somebody sitting at a desk on wi-fi with no mobile signal.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How do the costs compare as volume grows?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The two have different shapes. SMS is priced per message and rated by destination, so the cost is a straight line that rises with volume, and long messages split into multiple segments and are rated as such. XMPP puts its cost into the server and its upkeep, which is largely fixed, so the marginal message is close to free. That means there is a crossover point, and where it sits depends on your message volume, your destinations and what your internal traffic looks like. Bring us a month of real numbers and we will work it out against your case rather than a generic one.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Which protocol suits confidential or regulated communications?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                XMPP, and it is not close. It supports end-to-end encryption, the server can sit in a jurisdiction you choose, and you control retention and administration. SMS is not end-to-end encrypted and copies persist on handsets and in carrier records, so the sensible rule is to treat it as a notification channel rather than a content channel: a text saying a document is ready is fine, the document itself is not. Where your organisation carries its own obligations, under PIPEDA or a sectoral regime, the obligations stay with you and the technology choice should make them easier to meet rather than harder to explain.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What happens to XMPP messages when the recipient is offline?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The server holds them and delivers them when that user reconnects, so the conversation behaves much like email for anyone who is away. How long offline messages and history are kept is a setting rather than a fixed rule, which is a point in its favour: retention becomes a decision your organisation makes deliberately instead of one a vendor made for you. Presence tells senders who is actually available, so people can see when a message will land immediately and when it will wait.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group animate-fade-up">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can customers text the same number they call us on?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                That is the arrangement we would recommend. Messaging on the numbers you already publish means one number on your invoices, your vehicles and your website, and a customer who texts it gets an answer instead of a failure. It also keeps the record in one place, since the calls and the messages belong to the same number on the same platform.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-6 text-[var(--color-ink)]">
            Not Sure Which You Need?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
            Tell us who you are trying to reach and how often, and we will tell you which of the two does the job, or whether the answer is both.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Talk to Sales
          </Link>
        </div>
      </section>
    </main>
  )
}
