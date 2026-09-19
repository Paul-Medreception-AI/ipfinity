import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technology | ipfinity',
  description:
    'How IPFINITY actually works: an accredited carrier running cloud voice since 2002, the VRX1000 Nightingale QoS appliance, certified Snom, Grandstream and Yealink handsets, redundancy and failover, TLS and SRTP, and numbers from over 100 countries.',
}

export default function TechnologyPage() {
  const jumpLinks = [
    { href: '#network', label: 'The Network' },
    { href: '#nightingale', label: 'Nightingale & QoS' },
    { href: '#endpoints', label: 'Certified Endpoints' },
    { href: '#access', label: 'Access' },
    { href: '#redundancy', label: 'Redundancy & Failover' },
    { href: '#security', label: 'Security' },
    { href: '#global-reach', label: 'Global Reach' },
  ]

  const handsets = [
    {
      name: 'Snom',
      detail:
        'German-built desk phones, and unusual in this market for carrying a three-year warranty rather than the twelve months most manufacturers offer.',
    },
    {
      name: 'Grandstream',
      detail:
        'A broad range from basic desk sets to multi-line executive phones and conference units, which keeps a mixed office on one provisioning method.',
    },
    {
      name: 'Yealink',
      detail:
        'Widely deployed handsets that pair well with expansion sidecars, headsets and the meeting-room equipment most offices already own.',
    },
  ]

  const partners = ['Cisco', 'Grandstream', 'Panasonic', 'Polycom', 'AWS', 'Mitel', 'IBM']

  const deployment = [
    {
      number: '01',
      title: 'Scope the requirement',
      description:
        'We work out how many simultaneous calls you actually carry, which numbers have to move, what has to keep working, and where redundancy belongs.',
    },
    {
      number: '02',
      title: 'Pre-programme and ship',
      description:
        'Handsets and the Nightingale appliance are configured before they leave us and arrive ready to plug in. Nothing is self-serve and nothing is left for you to set up.',
    },
    {
      number: '03',
      title: 'Remote service window',
      description:
        'An engineer runs the cutover with you at an agreed time, brings the phones onto the platform and tests them with your team.',
    },
    {
      number: '04',
      title: 'We initiate the port',
      description:
        'Once the service is proven, we start the port of your numbers from the incumbent carrier. That request comes from us, not from you.',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Technology</span>
          </div>
          <h1
            className="text-6xl font-light mb-4 max-w-4xl"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            How It Actually Works
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl leading-relaxed">
            The equipment, the network and the decisions behind a CloudVoice deployment, written for
            the person who has to evaluate it rather than approve it.
          </p>
        </div>
      </section>

      {/* Jump navigation */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary)] rounded-full px-4 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* The Network */}
      <section id="network" className="bg-white py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                The Network
              </p>
              <h2
                className="text-4xl text-[var(--color-ink)] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                An Accredited Carrier, Cradle to Grave
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                IPFINITY has been carrying business voice in the cloud since 2002. We are an
                accredited telecommunications carrier, which is a different thing from a reseller
                putting its name on somebody else&rsquo;s platform. We own the lines, the phones, the
                features and the cloud queuing, from one end of the call to the other.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                That ownership has a practical consequence worth understanding before you compare us
                with anyone. Because the call never leaves equipment we operate, the call detail
                records and the queue analytics are ours. When you ask how long callers waited on
                Monday morning, or which queue people gave up on, the answer comes out of our own
                records rather than a summary handed to us by an upstream supplier.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                It also means there is one party accountable when something has to be fixed. No
                hand-off between a hardware vendor, a platform vendor and a carrier, each of whom can
                reasonably say the problem belongs to one of the others.
              </p>
            </div>
            <div className="lg:col-span-2">
              <img
                src="/images/stock/fiber-optic.jpg"
                alt="Fibre optic strands carrying network traffic"
                loading="lazy"
                className="w-full h-72 lg:h-96 object-cover rounded-2xl border border-[var(--color-border)]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              ['Cloud voice since 2002', 'Two decades of running the platform, not a recent pivot into voice.'],
              ['Accredited carrier', 'Interconnected in our own right, not riding on a reseller agreement.'],
              ['Our own CDRs', 'Call detail records come from our switch, so reporting is first-hand.'],
              ['Queue analytics included', 'Because we run the cloud queuing, the queue data is ours to give you.'],
            ].map(([title, body]) => (
              <div
                key={title}
                className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)] animate-fade-up"
              >
                <h3
                  className="text-xl font-semibold text-[var(--color-ink)] mb-2"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nightingale — the most prominent block on the page */}
      <section id="nightingale" className="bg-[var(--color-ink)] text-white py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <img
                  src="/images/Nav-grid-web-5-purple-nightingale.jpg"
                  alt="IPFINITY Nightingale product tile"
                  loading="lazy"
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <p className="text-white/50 text-xs leading-relaxed mt-4">
                  The Nightingale tile from IPFINITY&rsquo;s own product branding. It is artwork, not a
                  photograph of the appliance.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Nightingale &amp; QoS
              </p>
              <h2
                className="text-5xl font-light mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                The VRX1000 Nightingale
              </h2>
              <p className="text-white/80 leading-relaxed text-lg mb-6">
                Nightingale is ours. It is a small Raspberry-Pi-class appliance that sits behind your
                modem, in front of your phones, and enforces quality of service so that voice takes
                priority over everything else on the connection.
              </p>
              <p className="text-white/70 leading-relaxed mb-5">
                It exists because of something we see in almost every building we walk into: the
                business runs voice and data over the same circuit and has never separated the two.
                Nothing on a normal office network knows that a phone call cannot be retried a second
                later. A large upload, a cloud backup, a software update rolling out across the
                office &mdash; any of those can break up a call on an internet connection that tests
                perfectly fine a minute afterwards. It is the single most common cause of bad cloud
                voice audio, and most providers answer it with a support ticket and a suggestion that
                you call your internet provider.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Nightingale is a hardware answer instead. It ships pre-programmed, in the same box as
                the phones, and it is plug and play &mdash; you do not need a network engineer on site
                to commission it, and you do not need to re-architect the network you already have.
              </p>

              <blockquote className="border-l-2 border-[var(--color-primary)] pl-6 py-2 mb-8">
                <p
                  className="text-2xl text-white/90 font-light leading-snug"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  &ldquo;Their legendary VRX1000 Nightingale QoS solution.&rdquo;
                </p>
                <cite className="text-white/50 text-sm not-italic block mt-3">
                  &mdash; an IPFINITY customer, published publicly
                </cite>
              </blockquote>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  ['Voice gets priority', 'QoS is enforced at the edge of your network, where the congestion actually happens.'],
                  ['Pre-programmed', 'Configured before it ships and delivered alongside the handsets it protects.'],
                  ['Plug and play', 'It goes in behind the modem. No on-site engineer, no network redesign.'],
                ].map(([title, body]) => (
                  <div key={title} className="border-t border-white/15 pt-4">
                    <h3 className="font-semibold text-white mb-2">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certified endpoints */}
      <section id="endpoints" className="bg-[var(--color-cream)] py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Certified Endpoints
              </p>
              <h2
                className="text-4xl text-[var(--color-ink)] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                The Phone on the Desk Is Part of the Service
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                A handset that merely speaks SIP is not the same as a handset that has been certified.
                Certifying a model means we have tested it against our platform, we know how it
                behaves through firmware updates, and we know its provisioning, transfer, park and
                busy-lamp behaviour match what we tell you it will do. We then programme it before it
                ships, so the phone that arrives on the desk already knows who it is.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We certify Snom, Grandstream and Yealink. That is a deliberately short list.
              </p>
            </div>
            <div className="lg:col-span-4">
              <img
                src="/images/end-points-icon-copy.jpg"
                alt="IPFINITY certified endpoints product tile"
                loading="lazy"
                className="w-full max-w-xs aspect-square object-cover rounded-2xl border border-[var(--color-border)]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {handsets.map((handset) => (
              <div
                key={handset.name}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              >
                <h3
                  className="text-2xl font-semibold text-[var(--color-ink)]"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {handset.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  {handset.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[var(--color-border)] mt-8">
            <h3
              className="text-2xl font-semibold text-[var(--color-ink)] mb-3"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              The sidecar, and why reception asks for one
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Front-desk staff transfer calls all day, and the worst version of that job is doing it
              blind. A physical phone paired with a sidecar &mdash; an expansion module beside the
              handset carrying busy lamp fields &mdash; shows at a glance who is on a call and who is
              free. The person at the desk can see the answer before they put a caller through,
              rather than finding out afterwards. It is an unglamorous piece of hardware that changes
              how a reception desk feels to work at, and it is a large part of why we still ship real
              phones alongside the smartphone apps.
            </p>
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="bg-white py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-3">
              <img
                src="/images/access-icon-v2-1.jpg"
                alt="IPFINITY access services product tile"
                loading="lazy"
                className="w-full max-w-xs aspect-square object-cover rounded-2xl border border-[var(--color-border)]"
              />
            </div>
            <div className="lg:col-span-9">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Access
              </p>
              <h2
                className="text-4xl text-[var(--color-ink)] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                How You Reach the Network
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                Most customers reach us over SIP trunks on the internet connection they already have.
                Where an existing PBX has to stay in service, PRI and hybrid arrangements keep it
                working while the rest of the estate moves to the cloud, so a switchover does not have
                to be a single dramatic weekend.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                We scope by SIP trunks, simultaneous channels, users, DIDs, cloud IVR and redundancy
                &mdash; not by seat. That distinction matters more than it sounds. A business with
                forty staff and six people on the phone at once is buying six channels, not forty
                licences. A SIP trunk is $30 CAD.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Fax is included rather than billed as a separate line, and so are the smartphone apps
                that put the same extension on a mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Redundancy & failover */}
      <section id="redundancy" className="bg-[var(--color-cream)] py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              Redundancy &amp; Failover
            </p>
            <h2
              className="text-4xl text-[var(--color-ink)] mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              What Happens When the Site Goes Dark
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              A power cut or a cut internet line used to mean the phones were simply gone, because the
              system answering them sat in a cupboard on the premises. With CloudVoice the call logic
              is not in your building. Your numbers terminate on our network, so losing the site does
              not lose the number &mdash; it only loses the desk phones plugged into it.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              What happens next is a routing decision made in advance, while we are scoping the
              deployment rather than while you are standing in the dark. Calls can continue to
              mobiles, to the smartphone app, to a second site, to a queue staffed somewhere else, or
              to voicemail delivered as email. Disaster recovery is part of the design conversation,
              not an add-on sold afterwards.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We would rather agree the failover behaviour with you than promise a number we cannot
              stand behind. Tell us what has to keep answering and we will build the path for it.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              ['The number survives', 'DIDs terminate on our network, so a site outage does not take your published number off the air.'],
              ['Calls keep landing', 'Pre-agreed routing moves traffic to mobiles, apps, another site or voicemail-to-email.'],
              ['Agreed in advance', 'Failover behaviour is decided during scoping, so nobody is improvising during an outage.'],
            ].map(([title, body]) => (
              <div key={title} className="animate-fade-up">
                <h3
                  className="text-xl font-semibold text-[var(--color-ink)] mb-2"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="bg-white py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Security
              </p>
              <h2
                className="text-4xl text-[var(--color-ink)] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Encryption in Transit, and the Bill Nobody Expects
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                Signalling is carried over TLS and media over SRTP, so the call setup and the audio
                itself are encrypted between the endpoint and our network rather than travelling in
                the clear.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The other half of voice security is commercial. A compromised extension does not
                announce itself; it shows up as a long weekend of calls to somewhere nobody in your
                business has ever phoned. We watch for those patterns and we can restrict which
                destinations an extension is allowed to reach at all, which is the cheapest protection
                there is.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)]">
              <h3
                className="text-2xl font-semibold text-[var(--color-ink)] mb-4"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                What we will not claim
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                We do not advertise an audit or a certification we have not completed, and we would be
                suspicious of a carrier that did. If a compliance questionnaire lands on your desk,
                ask us directly and you will get a direct answer.
              </p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Where the obligation is yours &mdash; PIPEDA, CASL, or Ontario PHIPA if your business
                handles personal health information &mdash; we will work to your requirements when we
                scope the deployment. Several of our customers are Ontario clinics and health
                charities, so this is a conversation we have regularly rather than one we are having
                for the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global reach */}
      <section id="global-reach" className="bg-[var(--color-cream)] py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Global Reach
              </p>
              <h2
                className="text-4xl text-[var(--color-ink)] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Communicate Without Borders
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                Two numbers describe our footprint and they are not the same number. You can get a
                number from major cities in over 100 countries. We deliver calls into over 150.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                The first of those is about presence: a business can carry a local number in a city
                where it has no premises at all, and the call rings wherever the team actually sits.
                The second is about where the traffic can go once it is on our network.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We serve customers across Canada and the United States, and into Colombia, Mexico,
                parts of Europe, and Australia and New Zealand.
              </p>
            </div>
            <div className="lg:col-span-4">
              <img
                src="/images/global-reach-icon.jpg"
                alt="IPFINITY global reach product tile"
                loading="lazy"
                className="w-full max-w-xs aspect-square object-cover rounded-2xl border border-[var(--color-border)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud fax */}
      <section id="cloud-fax" className="bg-white py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-3">
              <img
                src="/images/fax-cloud-icon-2.jpg"
                alt="IPFINITY cloud fax product tile"
                loading="lazy"
                className="w-full max-w-xs aspect-square object-cover rounded-2xl border border-[var(--color-border)]"
              />
            </div>
            <div className="lg:col-span-9">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
                Cloud Fax
              </p>
              <h2
                className="text-4xl text-[var(--color-ink)] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Yes, Fax. It Has Not Gone Away
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                Clinics and law firms still receive documents by fax, often because the organisation
                on the other end has no other accepted way to send them. Treating fax as obsolete does
                not make the incoming pages stop arriving.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We support both halves of the problem: cloud fax, where documents arrive and leave as
                email, and a genuine physical fax machine for the workflows and the people who still
                need one. It is included in the service rather than billed separately as a bolt-on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interoperability */}
      <section id="interoperability" className="bg-[var(--color-cream)] py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              Interoperability
            </p>
            <h2
              className="text-4xl text-[var(--color-ink)] mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Working With What You Already Own
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              Very few businesses get to start from nothing. If there is a Mitel or Cisco estate in
              the building, the question is not whether it is fashionable, it is whether it can keep
              earning its keep while the rest of the environment moves.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              These are our technology partners &mdash; platforms and equipment our service is built
              to work alongside. They are interoperability relationships, not customer references and
              not endorsements of us.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {partners.map((partner) => (
              <span
                key={partner}
                className="bg-white border border-[var(--color-border)] rounded-full px-6 py-3 text-sm font-semibold text-[var(--color-ink)]"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly right-sizing */}
      <section id="right-sizing" className="bg-[var(--color-light)] py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              Quarterly Right-Sizing
            </p>
            <h2
              className="text-4xl text-[var(--color-ink)] mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              We Will Tell You to Buy Less
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              Every quarter we review what you are actually using. If you are carrying trunks that
              never fill, we say so and we take them off the account. Nobody has to notice the
              overspend and raise it, because the review happens whether or not you ask for it.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              This is a consequence of scoping by simultaneous channels rather than by seat. When the
              bill tracks concurrent calls, utilisation is measurable, and once it is measurable there
              is no polite way to leave an obviously oversized account alone.
            </p>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl text-center text-[var(--color-ink)] mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            From Scoping to Live
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Nothing here is self-serve. An engineer is involved at every step, and the port from your
            existing carrier is started by us.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {deployment.map((step) => (
              <div key={step.number} className="animate-fade-up">
                <div
                  className="text-7xl text-[var(--color-primary)] opacity-50 mb-4"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-2xl font-semibold text-[var(--color-ink)] mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Put It in Front of Your Own Technical People
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us how many calls you carry at once, what has to keep answering during an outage, and
            what equipment you would rather not replace. We will scope it and quote it.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
