import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | ipfinity',
  description: 'Straight answers on porting numbers, SIP trunks, keeping your existing PBX, fax, outages, 911, contract terms and installation, from an accredited Canadian cloud voice carrier.',
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl font-light mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg opacity-90">
            The questions businesses actually ask before they change carrier
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Can we keep our existing phone numbers, and how long does porting take?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              In almost every case, yes. Moving a number from one carrier to another is called porting, and it is a normal part of every changeover we do. We submit the request, deal with your current carrier and set the cutover date with you. The honest answer on timing is that the clock is largely controlled by the carrier you are leaving, not by us, and it varies with how many numbers are involved and how clean your current account records are. Toll free numbers and numbers tied to a legacy PRI usually take longer than a handful of local lines. We confirm a date in writing once the port request is accepted, and nothing is cut over until you have that date.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What is a SIP trunk, and how many do we need?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              A SIP trunk is one simultaneous call path delivered over your internet connection instead of over a copper line. It is the modern equivalent of a single line in a line hunt group, or one channel of a PRI. The number you need is not the number of staff you have, it is the number of calls your business has running at the same moment at its busiest. A twenty person office where only four or five people are on the phone at once does not need twenty trunks. If you have call records or a bill from your current provider, we can read the busy hour off it and size the trunks against what actually happened rather than a guess. More detail is on our <Link href="/services/sip-pri-trunking" className="text-[var(--color-primary)] hover:underline">SIP and PRI trunking</Link> page.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What does a SIP trunk cost?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              A SIP trunk is $30 CAD. We scope the rest of a quote by simultaneous channels, users, direct numbers, cloud IVR and the level of redundancy you want, rather than charging a flat per seat rate whether the seat is on the phone or not. Fax is included. Call rates, number ranges outside Canada and the United States, and anything custom are quoted against what you actually need, so we would rather put real figures in front of you after a short scoping call than publish a headline price that turns out not to apply to you.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Do we have to throw away our existing phone system?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              No. A working PBX is an asset, and plenty of our customers keep theirs and simply change what is feeding it. We can put SIP trunks in front of an existing system so the handsets, extensions and habits your staff already have stay exactly as they are, while the lines behind them get cheaper and more resilient. We work with equipment from Cisco, Mitel, Panasonic, Polycom and Grandstream among others, and where a system only speaks analogue or digital we can put a gateway in between. If your system genuinely is at the end of its life we will say so, but that is a separate conversation from changing carrier. See <Link href="/services/hybrid-solutions" className="text-[var(--color-primary)] hover:underline">hybrid solutions</Link>.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What happens to our fax?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Fax does not have to be the reason you keep a line you otherwise do not need. Our Cloud Fax service is included, and it keeps your fax number working while delivering what arrives on it as a document to email rather than to a machine in the corner. You can keep sending to partners, suppliers and government offices that still expect a fax number without maintaining the hardware or the dedicated line behind it. If you have a physical fax machine you want to retain for a while, say so during scoping and we will plan for both.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What happens if our internet or power goes down?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              This is the question that matters most and the one that is easiest to get wrong. Because your numbers live in our cloud rather than on a box in your building, a site that loses power or connectivity does not take your phone number with it. Calls carry on arriving at us, and we send them wherever you have told us to send them next, which is usually mobiles, another branch, a queue or voicemail to email. The routing is arranged in advance rather than improvised on the day, and it is worth testing it at least once so everyone knows what a bad day sounds like. Our <Link href="/services/disaster-recovery" className="text-[var(--color-primary)] hover:underline">redundancy and failover</Link> page goes through the options.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              How does 911 work on a cloud phone system?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Emergency calling is set up against a civic address that is registered for each phone, and that is what emergency services are given when somebody dials out. The thing to understand about any cloud phone is that the handset can be unplugged and carried somewhere else, and the registered address does not follow it on its own. So if a phone moves to a different site, or an employee takes one home to work, tell us and we will update the registration. We go through this at install and we would rather be tedious about it than have it discovered during an emergency.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What is the Nightingale, and why would we need one?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Nightingale is our own device. It is a small appliance that sits behind your modem and gives voice traffic priority over everything else on the connection. We built it because the usual advice, that you should segregate voice onto its own network, is advice almost nobody follows. Real offices run phones, laptops, backups, video calls and a guest network over one pipe, and then blame the phone system when a large upload makes a call break up. Nightingale handles that quality of service job for you. It arrives pre programmed alongside the handsets and plugs in, so there is nothing for you to configure. You can read more on our <Link href="/technology" className="text-[var(--color-primary)] hover:underline">technology</Link> page.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Will our staff keep their extensions and direct numbers?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes. We rebuild your extension plan as it stands, so the three or four digit numbers people dial internally stay the same, and direct numbers port across with the main lines. Hunt groups, ring groups, after hours routing and the order in which phones ring are all recreated. We ask for your current extension list early precisely so that the first morning on the new service feels like an ordinary morning. If there are things about the current setup that irritate everybody, the cutover is a reasonable moment to fix them, but nothing changes unless you ask for it.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              How quickly can you install us?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              It depends on what has to move, and we would rather scope it than quote you a number we cannot keep. Adding trunks or numbers to a system that is already working is a small job. A multi site business porting a large block of numbers off a PRI is a larger one, and as above, the porting part runs to the schedule of the carrier you are leaving. Handsets ship pre programmed, so the on site portion is usually short. Tell us your constraints, including any date you must be off your current contract by, and we will build the schedule backwards from it.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What are your contract terms?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Terms depend on what is being installed and whether hardware is included in the deal, so we set the term, the notice period and what happens at renewal out in the quote itself. You should not be reading your own contract for the first time on an invoice. If a particular commitment matters to you, one way or the other, raise it during scoping rather than after signature, and we will tell you plainly whether we can do it.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Which handsets do you supply and support?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We certify Snom, Grandstream and Yealink handsets, which means we have tested them against our own platform rather than simply passing on whatever a distributor is clearing. Snom is a German manufacturer and carries a three year warranty, which is unusual in this category and tells you something about how the hardware is built. Phones arrive pre programmed and plug and play, next to the Nightingale, so an install is a matter of plugging things in rather than a day of provisioning. If you already own SIP handsets, bring them to the scoping call and we will tell you honestly whether they are worth keeping.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Do we need a new internet connection?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Usually not. Voice is a small consumer of bandwidth compared with almost anything else on a modern office connection. What it is sensitive to is congestion, jitter and packet loss, which is a question of how the connection is managed rather than how big it is. That is the problem Nightingale exists to solve. We look at your connection during scoping and tell you if there is a genuine reason to change it, and if there is not, we will tell you that too. Where uptime is critical, a second connection from a different provider is worth discussing as a failover path.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Where can you provide numbers?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We serve Canada and the United States, and our reach extends into Colombia, Mexico, parts of Europe, and Australia and New Zealand. A number in a market you trade with can be answered by whoever you like, wherever they sit, so a customer in another country dials a local number and reaches your team here. Requirements for obtaining numbers differ from country to country, and some markets ask for documentation or a registered presence. Tell us which markets matter to you and we will tell you what is available and what each one asks for. See <Link href="/services/global-did-numbers" className="text-[var(--color-primary)] hover:underline">global DID numbers</Link>.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Will we end up paying for lines we are not using?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Not if we are doing our job. We review customer lines every quarter against real usage, and if you are carrying capacity you do not need we tell you to drop it. That is a slightly odd thing for a supplier to volunteer, and it is deliberate. A business that trusts its carrier not to quietly let unused lines accumulate is a business that stays, and a bill you can explain to your finance team is worth more to us than a few extra channels you never touch.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Who do we deal with when something goes wrong?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Us. IPFINITY is an accredited telecommunications carrier rather than a reseller sitting on top of another company&apos;s network, and we own the lines, the phones, the features and the cloud queuing end to end. The practical consequence is that a fault does not get handed off and lost between three companies, and when you ask what happened to a particular call we can follow it cradle to grave through our own records rather than filing a request with a wholesaler and waiting.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Can you support multiple sites and staff working from home?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, and the distinction between a branch, a home office and a phone in somebody&apos;s pocket is mostly an administrative one on a cloud platform. Sites share one dial plan, so extension dialling works between them and calls transfer across the country the same way they transfer across a corridor. Staff working away from the office can take a certified handset home or use our smartphone apps, and they keep their extension and their outbound caller ID either way. The one thing that does not travel automatically is the registered emergency address, which is covered above.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Can you handle call queues, and can we see what the queues are doing?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Cloud queuing is ours, not a third party product bolted on, so the call detail records and the queue statistics are ours as well. That means we can report on what is actually happening to callers, including how long they wait, where they abandon and which numbers and menu choices they came in through, and we can change the routing when the data says the routing is wrong. If you run a call centre or a support desk, bring your current reporting to the scoping call and tell us what it does not show you.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Can you build something specific to how our business answers calls?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Often, yes. Because the platform is ours we are not limited to the features a vendor happens to ship, and custom voice applications are a normal part of what we do: routing that follows your own logic, cloud IVR menus that match how your business is actually organised, call handling that changes with the time of day or the state of a queue. The right way to start is to describe the outcome you want rather than the feature you think you need, and let us tell you what is straightforward, what is possible with work, and what is not worth doing.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              How do you handle privacy and Canadian data rules?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We are an Ontario company and a Canadian carrier, so you are dealing with an organisation operating under Canadian law, including PIPEDA, rather than with an offshore support desk. Call records and queue data are handled inside our own platform rather than passed around a chain of wholesalers. If your organisation carries obligations of its own, for example a health sector customer subject to Ontario PHIPA, those obligations remain yours, and we will work within the controls your privacy officer asks for. We will tell you what we hold and where it sits; we will not claim a certification on your behalf.
            </div>
          </details>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Tell us how your business communicates today and we will tell you what it should cost. If your current setup is working, we will say that too.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Request a Quote
          </Link>
          <p className="mt-6 text-sm opacity-80">
            Or call <a href="tel:+14169001416" className="underline hover:no-underline">416.900.1416</a>
          </p>
        </div>
      </section>
    </main>
  )
}
