import Link from 'next/link'

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
            Everything you need to know about our telecommunications solutions and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What is SIP trunking and how does it differ from traditional phone lines?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              SIP (Session Initiation Protocol) trunking is a cloud-based service that delivers voice communications over your internet connection, replacing traditional analog phone lines or PRI circuits. Unlike legacy systems that require physical copper lines and dedicated hardware, SIP trunks operate entirely over IP networks, providing greater flexibility and scalability. With SIP trunking, you can add or remove lines instantly without waiting for physical installation, making it ideal for businesses with fluctuating call volumes or multiple locations. Our CloudVoice platform provides enterprise-grade SIP trunking with built-in redundancy, disaster recovery, and seamless integration with both modern VoIP systems and legacy PBX equipment.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              How long does it typically take to deploy IPFINITY services?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Deployment timelines vary based on your specific requirements and existing infrastructure, but most standard implementations are completed within 5-10 business days. Simple SIP trunk activations or DID number provisioning can often be completed in 24-48 hours, while more complex custom voice applications or hybrid system integrations may require 2-4 weeks for proper testing and configuration. During our discovery phase, we provide a detailed project timeline with clear milestones and deliverables. Our team works closely with you to minimize disruption to your operations, and we can schedule cutovers during off-peak hours or weekends if needed. Emergency or expedited deployments may be available depending on circumstances and technical requirements.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Can I keep my existing phone numbers when switching to IPFINITY?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, in most cases you can port your existing local, toll-free, and international numbers to our platform through a process called Local Number Portability (LNP). The porting process typically takes 10-20 business days depending on your current carrier and the complexity of your number inventory, and we handle all coordination with your existing provider. We'll verify portability during the discovery phase and provide a detailed porting schedule to ensure seamless transition with minimal disruption. During the port, we can implement temporary forwarding solutions to maintain business continuity. Our team manages the entire process including submitting port requests, coordinating with losing carriers, and scheduling the final cutover at a time that works best for your business operations.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What kind of internet connection do I need for reliable voice service?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We recommend a dedicated business-class internet connection with at least 100 Kbps of upload and download bandwidth per concurrent call, along with quality of service (QoS) settings that prioritize voice traffic. For example, if you expect 20 simultaneous calls, you should have at least 2-3 Mbps of dedicated bandwidth available for voice traffic. Cable, fiber, or dedicated ethernet circuits all work well, though we generally recommend avoiding satellite or cellular connections as primary circuits due to latency concerns. During our technical assessment, we evaluate your current connectivity and can recommend specific improvements or redundant connections to ensure optimal call quality. Many of our enterprise clients implement dual internet connections with automatic failover to guarantee uninterrupted service even if one circuit fails.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Do I need to replace my existing phone system to use IPFINITY services?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Not necessarily—our hybrid solutions are specifically designed to work with your existing PBX or phone system, whether it's a legacy analog system, digital PBX, or modern IP-based infrastructure. If you have an older system that only supports traditional phone lines, we can provide gateway equipment that converts between analog/digital signals and SIP protocols, allowing you to maintain your current phones and system features while gaining cloud connectivity benefits. However, if your phone system is outdated or no longer meeting your needs, we can also help design and implement a complete migration to modern cloud-based communications. We assess your current investment and business requirements to recommend the most cost-effective approach that balances immediate needs with long-term growth objectives.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What countries are covered by your global DID number service?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We provide local and toll-free numbers from over 150 countries across six continents, including major markets in North America, Europe, Asia-Pacific, Latin America, Africa, and the Middle East. Our platform allows you to establish a local presence in virtually any market without maintaining physical offices or infrastructure in those locations. Each DID number can be routed to any destination globally—whether to your headquarters, a call center, mobile phones, or distributed remote teams. We manage all regulatory compliance, number provisioning, and ongoing maintenance through our unified platform. Some countries have specific documentation or business registration requirements for number provisioning, which we'll outline during the consultation process to ensure smooth activation.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              How does your disaster recovery solution work?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Our disaster recovery capabilities are built into every deployment through geographic redundancy and automatic failover mechanisms distributed across multiple data centers worldwide. If your primary phone system or internet connection fails, calls are automatically rerouted to backup destinations you've pre-configured—such as mobile phones, alternate offices, or cloud-based call handling applications. Our infrastructure monitors system health in real-time and can detect and respond to failures in seconds, often before your team even notices an issue. You can configure multiple failover tiers and customize routing rules based on time of day, call volume, or specific failure scenarios. We provide regular disaster recovery testing and documentation to ensure your business continuity plan works exactly as intended when you need it most.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What level of support is included with IPFINITY services?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              All IPFINITY customers receive enterprise-grade support with 24/7 access to our technical team via phone, email, and secure portal. Our support model includes proactive monitoring of your services, regular system health reports, and immediate notification if any issues are detected. Standard support response times are within 4 hours for non-critical issues and 30 minutes for service-affecting problems, with emergency support available around the clock. For customers requiring enhanced support commitments, we offer premium support packages with dedicated account managers, guaranteed response times, quarterly business reviews, and direct access to senior engineering staff. All plans include unlimited technical support inquiries, configuration assistance, and guidance on optimizing your telecommunications infrastructure as your needs evolve.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flexijo-between items-center">
              Can IPFINITY build custom voice applications for our specific workflow?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Absolutely—custom voice applications are one of our core strengths, and we regularly develop tailored solutions that integrate with your existing business processes and software systems. Whether you need intelligent call routing based on customer data, CRM integration, advanced IVR menus, automated appointment reminders, call recording with compliance features, or completely unique applications we haven't built before, our development team can architect and deploy solutions that match your exact requirements. We use modular components that can be combined and configured in countless ways, and we're not limited to off-the-shelf features. During the discovery phase, we document your current workflows and pain points, then design applications that enhance efficiency and improve customer experience. Custom applications are deployed on our cloud infrastructure and can be updated or modified as your business evolves.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              How is IPFINITY's pricing structured?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Our pricing is transparent and customized based on your specific service requirements, call volumes, and geographic needs. Typical components include monthly recurring fees for services like SIP trunk channels, DID numbers, and platform access, plus usage-based charges for inbound and outbound call minutes. We provide detailed rate sheets for all destinations and services during the consultation process, and there are no hidden fees or surprise charges. Most enterprise customers find significant cost savings compared to traditional telecom providers, especially for international calling and scaling operations. We offer both month-to-month agreements and multi-year contracts with volume discounts for larger deployments. Custom voice application pricing depends on complexity and development requirements, which we scope during the design phase before any commitment is required.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What security measures protect our communications on the IPFINITY platform?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Security is fundamental to our platform architecture, with multiple layers of protection including TLS encryption for signaling, SRTP encryption for voice media, network-level security with firewall rules and intrusion detection, and secure authentication mechanisms for all system access. Our infrastructure undergoes regular security audits and vulnerability assessments, and we maintain compliance with industry standards including SOC 2 and relevant telecommunications regulations. Customer data is segregated and protected with role-based access controls, and all administrative actions are logged for audit purposes. We implement fraud detection and prevention systems that monitor for unusual calling patterns and can automatically block suspicious activity. For customers with enhanced security requirements, we offer dedicated infrastructure, private network connectivity, and additional compliance certifications to meet specific regulatory or industry mandates.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Can I manage services and view reporting through an online portal?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, all customers have access to our comprehensive web-based management portal where you can view real-time call activity, generate detailed usage reports, manage DID numbers and routing rules, configure voicemail and forwarding settings, review billing and invoices, and submit support requests. The portal provides intuitive dashboards with visual analytics showing call volumes, destinations, quality metrics, and cost trends over time. Administrative users can make many configuration changes instantly without requiring support intervention, giving you control and flexibility to adapt to changing business needs. We also offer API access for customers who want to integrate IPFINITY services with their own business applications or automate provisioning and management tasks. Mobile access is available through responsive design, allowing you to monitor and manage services from any device.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              How does business messaging integrate with voice services?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Our business messaging services are designed to complement voice communications through a unified platform that supports SMS, XMPP instant messaging, and fax-to-email on the same infrastructure as your voice services. You can use the same DID numbers for both voice calls and SMS messaging, providing customers with flexible communication options while maintaining consistent branding. Our messaging APIs allow you to automate notifications, appointment reminders, two-factor authentication, and customer communications directly from your business applications. Fax-to-email service converts traditional faxes into PDF attachments delivered to specified email addresses, eliminating the need for physical fax machines while maintaining compatibility with partners who still use fax communications. All messaging services include detailed delivery reporting, compliance with telecommunications regulations, and integration with your existing workflows through our management portal or API.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What happens during the initial consultation and discovery process?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Our discovery process begins with a detailed consultation where we learn about your current telecommunications infrastructure, business processes, pain points, and growth objectives. We'll review your existing phone systems, call volumes, geographic presence, integration requirements, and any specialized workflows that need to be supported. This assessment helps us identify opportunities to improve efficiency, reduce costs, and enhance capabilities through our platform. We'll document your technical environment including network topology, internet connectivity, and any third-party systems that require integration. Based on this discovery, we develop a comprehensive solution proposal that includes architecture diagrams, implementation timeline, pricing details, and recommended best practices. There's no obligation or cost for this consultation—it's an opportunity for both parties to ensure IPFINITY is the right fit for your telecommunications needs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Can IPFINITY support seasonal or temporary capacity increases?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Absolutely—one of the key advantages of cloud-based telecommunications is the ability to scale capacity up or down instantly based on business needs. If you experience seasonal peaks, marketing campaigns, product launches, or special events that drive higher call volumes, we can provision additional trunks or resources within hours and then scale back down when demand normalizes. You only pay for the capacity you actually use during each billing period, avoiding the traditional telecom model of purchasing and maintaining excess capacity year-round for occasional peaks. This flexibility is especially valuable for businesses with variable demand, multi-site operations during specific seasons, or companies testing new markets before making long-term infrastructure commitments. Our team can help you plan for anticipated capacity needs and implement automated scaling triggers if your demand patterns are predictable.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              What if I need to cancel or modify services after deployment?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Our service agreements are designed to provide flexibility as your business evolves. Month-to-month services can typically be modified or cancelled with 30 days' notice, while multi-year contracts may have specific terms that we outline clearly before any commitment. We view our relationship as a partnership rather than a rigid contract, and we're always willing to work with customers whose needs have changed due to business circumstances. Most modifications—such as adding or removing DID numbers, adjusting trunk capacity, or updating routing rules—can be processed immediately through our portal or with a simple support request. If you need to migrate away from IPFINITY, we'll assist with porting your numbers to a new provider and ensure a smooth transition, though we're confident our service quality and support will keep you as a long-term customer.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Does IPFINITY offer training for our staff on new systems and features?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, comprehensive training is included as part of every deployment to ensure your team can effectively use and manage the new telecommunications capabilities. We provide both administrator training focused on portal navigation, configuration management, reporting tools, and troubleshooting procedures, as well as end-user training covering daily operations, phone features, voicemail access, and any custom applications specific to your deployment. Training can be delivered on-site, via web conference, or through self-paced documentation and video resources depending on your preferences and team distribution. We also provide ongoing knowledge transfer during the support relationship, helping your staff become increasingly self-sufficient while knowing expert help is always available when needed. For custom voice applications, we deliver detailed operational documentation and can provide refresher training as new team members join your organization.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              How does IPFINITY ensure voice quality across global connections?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Voice quality is maintained through our global carrier interconnection strategy, distributed infrastructure across multiple regions, advanced codec support with automatic negotiation, real-time quality monitoring and alerting, and direct peering relationships with major telecommunications providers worldwide. Our CloudVoice platform continuously monitors jitter, latency, packet loss, and other quality metrics, automatically routing calls through optimal paths based on current network conditions. We maintain redundant connections to carrier partners and can failover to alternate routes if quality degrades on any path. During deployment, we conduct thorough voice quality testing under various scenarios and network conditions to establish baseline performance and identify any optimization opportunities. Our support team proactively monitors quality metrics and reaches out if we detect degradation, often resolving issues before they impact your operations or customer experience.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              Can IPFINITY integrate with our CRM, helpdesk, or other business applications?
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, integration with business applications is a core capability of our platform, and we regularly connect with popular systems including Salesforce, Microsoft Dynamics, Zendesk, ServiceNow, custom databases, and virtually any application that offers APIs or webhooks. Common integration scenarios include screen-pop functionality that displays customer records when calls arrive, automatic call logging in CRM systems, click-to-dial from web applications, SMS notifications triggered by business events, and synchronized contact directories. Our development team can architect custom integrations tailored to your specific workflow requirements, whether that involves bi-directional data synchronization, real-time event triggers, or complex business logic. These integrations enhance productivity by eliminating manual data entry, providing context for customer interactions, and creating seamless workflows between communication and business processes. We document all integration points and provide ongoing support as both IPFINITY and your business applications evolve.
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
            Our telecommunications specialists are ready to discuss your specific requirements and answer any questions about our CloudVoice platform.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}