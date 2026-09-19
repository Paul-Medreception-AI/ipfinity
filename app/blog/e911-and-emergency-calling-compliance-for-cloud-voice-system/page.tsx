import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E911 and Emergency Calling Compliance for Cloud Voice Systems | ipfinity',
  description: 'What emergency calling compliance means for cloud phone systems in Canada and the US, why accurate location data matters, and how to keep your records current across every site.',
  keywords: 'E911 compliance, emergency calling, cloud voice systems, VoIP emergency services, location accuracy, Ray Baum Act, Kari\'s Law, CRTC 911, emergency response',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Technology &amp; Compliance
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            E911 and Emergency Calling Compliance for Cloud Voice Systems
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By the IPFINITY Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Consider this scenario. Someone is badly injured on the loading dock of your warehouse. A supervisor grabs the nearest desk phone and dials 911. But when the responders arrive, they go to your head office three towns away, because that is the address your voice platform still has on file for that extension. Those minutes are the whole point of the system, and they were lost to a stale database record.
            </p>
            <p className="mb-6">
              As more businesses move to cloud voice, emergency calling has quietly become one of the most consequential parts of a phone system to get right. E911, or Enhanced 911, is not simply a technical checkbox. It is the mechanism that lets emergency responders find a caller quickly and accurately, including when the call originates from a VoIP or cloud platform rather than a copper line.
            </p>
            <p>
              Many organisations remain unaware of their obligations, or of the technical work involved in keeping emergency calling accurate across multiple sites and remote workers. That gap creates liability for the business and real risk for anyone who has to make the call.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is E911 and Why Does It Matter?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              E911 is the enhanced form of the traditional 911 service. Basic 911 connects a caller to an emergency dispatcher. E911 also delivers the caller&apos;s number and location information to the Public Safety Answering Point, or PSAP, that handles the call. With traditional landlines this was straightforward, because each line corresponded to one fixed civic address recorded by the carrier.
            </p>
            <p className="mb-6">
              Cloud voice and VoIP changed that equation completely. When calls travel over the internet rather than a dedicated pair of copper wires, location is no longer inherent to the connection. A desk phone can be unplugged and carried to another floor, another building or another province and still register to the same account. A remote worker can take a softphone anywhere there is a connection.
            </p>
            <p>
              That flexibility is the point of cloud voice, but it creates a safety problem. Without proper configuration, an emergency call from a cloud system can route to the wrong PSAP, present an out-of-date address, or arrive with no usable location at all, and every one of those outcomes adds delay at the worst possible moment.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Legal Requirements in the US and Canada
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If your business operates on both sides of the border, you are dealing with two regimes at once, and they do not line up neatly. Start by establishing which of your sites and numbers fall under which.
            </p>
            <p className="mb-6">
              In the United States, two federal laws govern emergency calling from multi-line telephone systems (MLTS), a category that covers most business phone systems including cloud platforms. <strong>Kari&apos;s Law</strong> requires that users be able to dial 911 directly, without first dialling a prefix such as 9 to reach an outside line. It also requires that a notification be sent to a central point, such as reception or a security desk, when a 911 call is placed, so that on-site staff can meet and direct responders.
            </p>
            <p className="mb-6">
              <strong>Ray Baum&apos;s Act</strong> requires that an MLTS convey &quot;dispatchable location&quot; information with a 911 call. That means more than a street address. It includes the detail that gets responders to the right part of a large site, such as building, floor, room or suite.
            </p>
            <p className="mb-6">
              In Canada, emergency calling from VoIP is overseen by the CRTC, which requires local VoIP providers to give customers access to 911 service and to tell them plainly how that service differs from a traditional line. Where a VoIP number is used at a fixed, native location, the call can be routed to the PSAP serving that address. Where service is nomadic, or the number is not native to the area it is used in, providers are required to offer at minimum a call-centre-based solution: the call reaches an emergency operator who confirms the caller&apos;s location and transfers them to the correct PSAP. Canada is also moving to Next-Generation 911, which changes how location and other data are carried, and carriers and public safety agencies are working through that transition.
            </p>
            <p>
              The common thread on both sides of the border is that accuracy depends on a registered address being current. These obligations reach any organisation that operates a business phone system, including offices, warehouses, hotels, campuses and multi-tenant buildings. Beyond regulatory exposure, the real risk is an emergency response that arrives at the wrong door.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            &quot;Dispatchable location is not just your street address. It is the detail that gets first responders to the exact room where help is needed, which matters most in large sites and multi-tenant buildings.&quot;
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Technical Challenge of Cloud-Based E911
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Delivering compliant emergency calling on a cloud voice system means getting several layers to work together:
            </p>
            <p className="mb-6">
              <strong>Location Database Management:</strong> Your organisation has to maintain an accurate, current record mapping each phone, extension and device to its physical location. When people change desks, when equipment is moved between sites, or when a remote worker relocates, those records need updating at the time, not at the next audit.
            </p>
            <p className="mb-6">
              <strong>Emergency Routing:</strong> The platform must route the call to the PSAP that serves the caller&apos;s actual location, not the one nearest the main billing address or head office. This is where multi-site organisations and remote workers cause the most trouble.
            </p>
            <p className="mb-6">
              <strong>Location Conveyance:</strong> The dispatchable location has to reach the PSAP in a form it can use. That requires coordination with your carrier, and sometimes with a specialist emergency services provider, rather than a field typed into a portal and forgotten.
            </p>
            <p>
              <strong>Notification Systems:</strong> On-site notification should alert security, facilities or a designated contact the moment a 911 call is placed, and tell them where in the building it came from, so someone can open the gate and point the responders in the right direction.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is Responsible for Compliance?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the more dangerous assumptions about emergency calling is that the carrier takes care of all of it. Carriers provide the emergency calling capability and the connections behind it, but responsibility for the accuracy of your location records sits with the organisation that operates the phone system, because it is the only party that knows where the phones actually are.
            </p>
            <p className="mb-6">
              Your carrier typically supplies the technical infrastructure, including routing to emergency services and the interfaces for registering location information. Your organisation still has to:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Provide and maintain accurate location information for every phone and device</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Update location records whenever equipment is moved or staff relocate</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Configure and test on-site notification systems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Ensure that every phone can dial 911 directly, with no prefix</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Train staff on emergency calling procedures and the limits of the system</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Review emergency calling configuration whenever sites, numbers or working patterns change</span>
              </li>
            </ul>
            <p>
              This shared model means you need a clear agreement with your carrier about who handles what, and an internal process for your half of it. Ask the question directly during procurement: for each of our numbers and sites, how is an emergency call routed, and what address will it present?
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Practical Steps Toward Compliance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Getting and staying compliant takes systematic attention in a few areas:
            </p>
            <p className="mb-6">
              <strong>Conduct a full audit</strong> of the phone system. Document every device and where it lives, including desk phones, conference room phones, common-area phones, and softphones on laptops and mobiles. Flag anywhere direct 911 dialling does not work or the registered address looks wrong. Unused and forgotten extensions are worth finding in the same pass.
            </p>
            <p className="mb-6">
              <strong>Establish clear governance</strong> for location data. Name the person responsible for keeping the records current, and build the update into the processes that already exist, such as onboarding, offboarding and office moves. This matters most in buildings that are frequently reconfigured, including warehouses, campuses and shared offices where a room can change function in a weekend.
            </p>
            <p className="mb-6">
              <strong>Implement and test notification.</strong> Make sure that when anyone dials 911 from any phone, the right people are alerted immediately with the specific location. Test it on a schedule and update the contact list when staff change, because a notification sent to someone who left last year is no notification at all.
            </p>
            <p className="mb-6">
              <strong>Develop a policy for remote and hybrid workers.</strong> Staff using a company softphone from home need clear guidance on registering their actual address and updating it if they move. Some organisations decide that personal mobiles are the right tool for emergencies away from company sites, and say so explicitly rather than leaving people to assume.
            </p>
            <p className="mb-6">
              <strong>Train everyone.</strong> All staff should know they can dial 911 directly with no prefix, that on-site personnel will be notified automatically, and that they should still state their location out loud, especially on a large site or when working remotely.
            </p>
            <p>
              <strong>Verify, and keep verifying.</strong> Coordinate with your carrier, and where appropriate with local emergency services, on how to confirm that routing and location are correct without generating unnecessary emergency calls. Many jurisdictions have established procedures for this kind of testing.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Real Cost of Non-Compliance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Regulators can impose penalties for emergency calling failures, and in the US the FCC has done so. But the regulatory exposure is not the part that should worry you most.
            </p>
            <p className="mb-6">
              In a genuine emergency, missing or wrong location information costs responders minutes. When someone is seriously hurt, or a fire is taking hold, or a person has collapsed, those minutes decide the outcome. No fine measures that.
            </p>
            <p className="mb-6">
              Organisations also carry real civil liability. If an inadequate emergency calling setup contributed to a bad outcome, the organisation can face claims from the people affected or their families, and those cases tend to turn on whether reasonable care was taken to implement and maintain the system properly. A documented audit and a maintained location record are the evidence that it was.
            </p>
            <p>
              There is also lasting damage to reputation and to the trust of staff and customers, which falls hardest on organisations that invite the public onto their premises or ask employees to work alone on site.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Emergency calling on cloud voice systems is genuinely more complex than it was on a fixed line, but it is not optional. The same flexibility that gives your organisation reach, resilience and lower cost also creates a duty to keep the location records behind it accurate.
            </p>
            <p>
              If you are unsure how emergency calls are handled on your current system, or you are planning a move to cloud voice, that is the right moment to get it examined. IPFINITY is an accredited carrier, so we can look at how each of your numbers and sites is configured and tell you what an emergency call would actually present today, rather than passing the question to somebody else.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <aside className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the IPFINITY Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                IPFINITY is an accredited telecommunications carrier based in Rockwood, Ontario, delivering cloud voice, fax and messaging to businesses in Canada, the US and beyond since 2002.
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog/real-time-communications-security-protecting-voice-and-messa" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Security</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Real-Time Communications Security
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Protecting voice and messaging infrastructure against fraud, interception and abuse.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/regulatory-compliance-for-business-communications-tcpa-gdpr-" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Compliance</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Regulatory Compliance for Business Communications
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  The rules that govern how businesses call, message and record across borders.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/number-porting-process-migrating-your-phone-numbers-to-a-new" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Planning</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Number Porting Process
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Migrating your phone numbers to a new carrier without losing a call or an address record.
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
            Our team is here to help you review emergency calling across your sites and plan your voice migration.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>

    </main>
  )
}
