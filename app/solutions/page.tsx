import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions | ipfinity',
  description: 'Cloud voice built around the problem you are actually solving — multi-site dial plans, call centres, legacy PBX replacement, remote teams, Ontario healthcare practices and international numbering. An accredited Canadian carrier since 2002.',
}

export default function SolutionsPage() {
  const jumpLinks = [
    { label: 'Multi-Site Business', href: '#multi-site' },
    { label: 'Call & Contact Centres', href: '#call-centres' },
    { label: 'Replacing a Legacy PBX', href: '#legacy-pbx' },
    { label: 'Remote & Hybrid Teams', href: '#remote-teams' },
    { label: 'Healthcare Practices', href: '#healthcare' },
    { label: 'International Business', href: '#international' },
  ]

  const deliverySteps = [
    {
      number: '01',
      title: 'We scope the requirement',
      description: 'We work out how many SIP trunks and simultaneous channels you actually need, how many users and DIDs, whether you want a cloud IVR in front of them, and what redundancy the business can justify. A SIP trunk is $30 CAD. Fax is included. We do not price by seat, because most businesses never have every seat on a call at once.',
    },
    {
      number: '02',
      title: 'We pre-program the equipment',
      description: 'Your certified handsets and your Nightingale appliance are configured here before anything is boxed. Extensions, BLF keys on the sidecars, ring groups and queues are loaded in advance, so nobody at your end is typing a provisioning server address into a phone.',
    },
    {
      number: '03',
      title: 'We ship it to you',
      description: 'The phones and the VRX1000 Nightingale arrive plug-and-play. The Nightingale sits behind your modem and gives voice traffic priority over everything else on the circuit, which is the single most common fix for call quality on an otherwise healthy connection.',
    },
    {
      number: '04',
      title: 'We run a remote service window',
      description: 'An engineer works with your team through a scheduled service window, brings the phones up, tests the call flows against the routing you asked for, and adjusts what does not match how the office really runs. Nothing about this is self-serve.',
    },
    {
      number: '05',
      title: 'We initiate the port',
      description: 'Once the new system is proven, we start the port of your existing numbers from your incumbent carrier. You keep your published numbers. We handle the carrier-to-carrier side of it rather than handing you a form and a date.',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Solutions</span>
          </div>
          <h1 className="text-6xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Solutions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed">
            Our services pages describe what we build. This page is about who we build it for, and the problem it is meant to remove.
          </p>
        </div>
      </section>

      {/* Jump links */}
      <section className="bg-white py-10 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[var(--color-ink)] bg-[var(--color-light)] border border-[var(--color-border)] px-5 py-2.5 rounded-full hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-site */}
      <section id="multi-site" className="scroll-mt-24 bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 animate-fade-up">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Multi-Site Business
              </p>
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
                Every office on one dial plan
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                Most multi-location businesses did not plan their phone systems. They acquired them. A second branch was connected three years after the first, under a different agreement, by a different installer, and now each site is an island. Staff dial full ten-digit numbers to reach a colleague two provinces over, reception cannot see whether anyone at the other office is free, and a transfer between sites means asking the caller to hang up and try another number.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                CloudVoice puts every location on a single numbering plan with short extension dialling between sites, queues and hunt groups that span locations, and one carrier responsible for the lines, the phones and the features. Opening the next site becomes a shipment of pre-programmed handsets rather than a new phone system.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Short extension dialling between every office',
                  'Queues and ring groups that cross site boundaries',
                  'A Nightingale appliance at each site so voice keeps priority on the local circuit',
                  'One accredited carrier for lines, phones, features and queuing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg stroke="var(--color-primary)" strokeWidth={1.8} fill="none" viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  <strong className="text-[var(--color-ink)]">In practice.</strong> Swatch Canada runs on ipfinity across Toronto and Montreal. BouMatic Robotics, a customer whose operations reach Canada, the United States, France, Germany and the United Kingdom, is on the same platform. Both are published customers of ours, and both are examples of the same idea: the dial plan belongs to the business, not to the building.
                </p>
                <Link href="/case-studies" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-5 hover:underline">
                  Read the case studies →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 animate-fade-up">
              <img
                src="/images/Nav-grid-web-4-image-suit-man.jpg"
                alt="A business manager on a desk phone in a corporate office"
                loading="lazy"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call centres */}
      <section id="call-centres" className="scroll-mt-24 bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 order-last lg:order-first animate-fade-up">
              <img
                src="/images/Nav-grid-web-image-call-centre.jpg"
                alt="Contact centre agents wearing headsets at a row of workstations"
                loading="lazy"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:col-span-3 animate-fade-up">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Call &amp; Contact Centres
              </p>
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
                Cloud queuing from the company that owns the queue
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                A contact centre lives or dies on what happens between the caller dialling and an agent answering. Cloud call queuing, announcements, overflow, priority routing and callback behaviour all sit in our platform, so a change to how calls are distributed is a configuration change rather than a hardware project.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                The part that matters most is less obvious. ipfinity is an accredited telecommunications carrier, not a reseller sitting on somebody else&rsquo;s network. We own the lines, the phones, the features and the cloud queuing cradle to grave, which means the call detail records and the queue data are ours to give you. A reseller can only report as far as its upstream supplier allows. When you ask us why calls were abandoned last Tuesday between two and four, the answer comes from our own records.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                On the floor, agents use certified handsets with a sidecar carrying busy lamp field keys, so the front desk can see at a glance who is already on a call before transferring anyone to them. It is a small thing that removes a great deal of dead air.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                    Scoped by channels
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    We size a centre by SIP trunks and simultaneous channels rather than by seat, because a room of thirty agents is rarely thirty concurrent calls. A SIP trunk is $30 CAD.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                    Reviewed quarterly
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    We look at your utilisation every quarter. If you are carrying trunks you are not using, we tell you to drop them. That conversation is part of the service, not something you have to request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy PBX */}
      <section id="legacy-pbx" className="scroll-mt-24 bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              Replacing a Legacy PBX
            </p>
            <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
              Move off ageing hardware without a forklift cutover
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              There is usually nothing wrong with the PBX in the closet. It answers calls, staff know it, and it was paid for a long time ago. What it cannot do is follow people home, integrate with a mobile, or tell you anything useful about the calls it handled. Meanwhile the copper it depends on is getting harder and more expensive to keep.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-12">
              Replacing the whole thing in one weekend is how these projects go wrong. We would rather cloud-enable what you have, prove it, and retire the old system when there is nothing left running on it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[var(--color-light)]">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5 mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Keep the system, change the lines
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                SIP trunks terminate into the PBX you already own, or PRI where the equipment needs it. The handsets and the habits stay the same. The cost and the flexibility of the lines behind them do not.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[var(--color-light)]">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5 mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Migrate a department at a time
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Run the old system and CloudVoice side by side while people move across in groups. Calls pass between them, so nobody is stranded mid-migration and there is no single night on which everything has to work.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[var(--color-light)]">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5 mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Equipment we already speak to
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Our technology partner list exists because our platform interoperates with their equipment: Cisco, Mitel, Panasonic, Polycom, Grandstream, IBM and AWS. Tell us what is in the closet and we will tell you honestly whether it can be carried forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remote teams */}
      <section id="remote-teams" className="scroll-mt-24 bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 animate-fade-up">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Remote &amp; Hybrid Teams
              </p>
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
                Extensions that follow your staff
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                Distributed teams break the assumption underneath most phone systems, which is that an extension is a place. When half the company works from home on Tuesdays, call forwarding to mobiles stops being a workaround and starts being a problem: outbound calls show the wrong number, transfers fail, and nobody can tell whether a colleague is free.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                On CloudVoice the extension belongs to the person. It rings on the desk phone at the office, the softphone on a laptop and the smartphone app, in whatever combination suits the day. Staff dial out as the business, transfer to a colleague by extension wherever that colleague is sitting, and pick up voicemail as email. A home worker whose voice traffic is competing with everything else on a household connection can have a Nightingale of their own to keep calls in front of the queue.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                    Softphones and apps
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    Smartphone apps and desktop softphones carry the same extension, the same caller ID and the same transfer rules as the handset on the desk.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                    Certified handsets
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    Where a physical phone is still wanted, we certify Snom, Grandstream and Yealink. The Snom handsets carry an unusually long three-year warranty.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 animate-fade-up">
              <img
                src="/images/Nav-grid-web-11-image-hand.jpg"
                alt="A remote worker taking a business call on a smartphone"
                loading="lazy"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section id="healthcare" className="scroll-mt-24 bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 order-last lg:order-first animate-fade-up">
              <img
                src="/images/Nav-grid-web-2-image-women.jpg"
                alt="Front-desk administrator answering calls at a clinic reception"
                loading="lazy"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:col-span-3 animate-fade-up">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Healthcare Practices
              </p>
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
                Phone systems for Ontario clinics and health charities
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                This is a telecom offer, written for whoever runs the front office. Clinics, family health teams and health charities have a phone problem with a particular shape: the calls arrive in bursts, the people answering them are also serving the person standing at the desk, and a caller who reaches voicemail simply calls back, which makes the next burst worse.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                What helps is unglamorous. A cloud IVR that sends refill requests, referrals and general enquiries to the right place instead of to one overloaded line. A queue that holds callers with an announcement, so people wait instead of redialling. A sidecar with busy lamp field keys, so reception can see who is genuinely free before transferring. After-hours routing that changes by itself. Cloud fax included, because referrals and lab results in Ontario are still faxed whether anyone likes it or not.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                On privacy: your organisation carries obligations under PIPEDA and, in Ontario, PHIPA. We are your telecommunications carrier, not your records system. We will work with your team and your IT provider on how voice, voicemail and fax fit the policies you are required to keep, and we will tell you plainly what our platform does and does not do. We do not claim a health-privacy certification on your behalf, and you should be wary of any telecom provider who does.
              </p>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  <strong className="text-[var(--color-ink)]">Who we already serve.</strong> CHATS, which provides community and home assistance to seniors, Labtician Ophthalmics, Carrot Eye Surgery Clinic and the Alzheimer Society of York Region are all ipfinity customers. The healthcare cluster on our customer list is not an accident of marketing; it is a sector we genuinely serve in Ontario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International */}
      <section id="international" className="scroll-mt-24 bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              International Business
            </p>
            <h2 className="text-4xl mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
              Communicate without borders
            </h2>
            <p className="text-white/75 leading-relaxed mb-5">
              A local number is still how a business looks reachable. If your customers are in Bogot&aacute;, Mexico City, Munich or Auckland, a number they recognise costs them nothing to dial and tells them you are worth calling. You do not need an office there to have one.
            </p>
            <p className="text-white/75 leading-relaxed mb-12">
              We can provide numbers from major cities in over 100 countries, and we deliver calls into over 150. Those are two different figures and they matter separately: the first is where we can give you a presence, the second is where we can carry your outbound traffic. Alongside Canada and the United States, we serve customers in Colombia, Mexico, parts of Europe, and Australia and New Zealand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Numbers from 100+ countries
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Local and toll-free DIDs from major cities worldwide, pointed wherever you want them answered — a queue in Toronto, a team in Bogot&aacute;, or a single handset.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Delivery into 150+ countries
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Outbound termination through our own carrier interconnections, so international calling is part of the same platform rather than a separate arrangement with another provider.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                One dial plan across borders
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Overseas staff sit on the same extension range as head office. A colleague in Germany is a short extension away, not an international call anybody has to think about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How delivery actually works */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Actually Deliver It
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-12 max-w-2xl mx-auto">
            Whichever of the above describes you, the path from enquiry to live service is the same one, and an engineer is on it with you throughout.
          </p>

          <img
            src="/images/stock/business-team.jpg"
            alt="A business team reviewing a deployment plan around a boardroom table"
            loading="lazy"
            className="w-full h-80 object-cover rounded-2xl shadow-lg mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {deliverySteps.map((step) => (
              <div key={step.number} className="animate-fade-up">
                <div className="text-7xl text-[var(--color-primary)] opacity-50 mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}

            <div className="bg-[var(--color-light)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>
                Not sure which of these you are?
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                Most businesses are two or three of them at once — a multi-site operation with a small contact centre and an old PBX at head office. Tell us what the phones are doing badly and we will work out the rest.
              </p>
              <Link href="/contact" className="text-[var(--color-primary)] font-semibold text-sm hover:underline">
                Start a scoping conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Tell us what your phones need to do
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            An accredited Canadian carrier since 2002, owning the network end to end. Send us the requirement and we will scope it properly.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
