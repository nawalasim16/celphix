import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CommandCenterLayout from '@/components/CommandCenterLayout';
import { Button } from '@/components/ui/button';
import { Terminal, Code, Activity, ShieldCheck, ChevronRight } from 'lucide-react';

const apiDocsData = [
  { title: "Authentication & API Keys", desc: "Secure your endpoints using Bearer tokens. Generate, rotate, and manage API keys directly from your developer dashboard to ensure maximum security across all deployments." },
  { title: "Rate Limiting & Quotas", desc: "Understand your tier-based concurrency limits and request thresholds. Rate limits ensure stable performance and prevent abuse across the global infrastructure." },
  { title: "Request/Response Format", desc: "All APIs strictly adhere to JSON formatting. Learn the standard payload structures, required headers, and expected response schemas for successful integrations." },
  { title: "Error Handling & Status Codes", desc: "Comprehensive breakdown of standard HTTP status codes utilized by Celphix. Includes troubleshooting guides for 400-level validation errors and 500-level server alerts." },
  { title: "Webhook Configuration", desc: "Set up real-time event listeners for call completions, transcript readiness, and mid-call data extraction. Learn to verify webhook signatures to prevent payload spoofing." },
  { title: "Call Management Endpoints", desc: "Programmatically trigger, pause, or terminate active voice sessions. Manage outbound dialing campaigns and monitor active inbound queue statistics." },
  { title: "Agent Configuration API", desc: "Dynamically adjust agent parameters on the fly. Change voice models, inject contextual knowledge, or swap conversational scripts via REST endpoints." },
  { title: "Real-Time Streaming Protocol", desc: "Connect via WebSockets for raw audio streaming and live bi-directional transcription. Essential for complex custom front-end applications requiring native voice parity." },
  { title: "Data Export & Reporting", desc: "Extract historical call logs, aggregated analytics, and specific lead qualification data. Supports bulk JSON and CSV exports for external data warehousing." },
  { title: "SDK & Client Libraries", desc: "Quickly implement Celphix using our official Node.js, Python, and Go libraries. Includes boilerplate code and immediate starter templates for rapid deployment." },
  { title: "API Versioning & Deprecation", desc: "Review the lifecycle of our endpoint versions. Learn how to securely migrate from v1 to v2 endpoints without experiencing operational downtime." },
  { title: "Best Practices & Optimization", desc: "Architectural recommendations for building highly scalable systems. Includes tips on payload caching, reducing webhook latency, and handling API retries." }
];

const integrationGuidesData = [
  { title: "CRM Integration (Salesforce, HubSpot, Pipedrive)", desc: "Step-by-step guides for connecting native CRM environments. Automatically log calls, sync contacts, and trigger agents directly from your existing lead pipelines." },
  { title: "Calendar Sync (Google Calendar, Outlook)", desc: "Enable agents to view real-time availability and book appointments. Includes OAuth configuration steps and timezone handling protocols." },
  { title: "Zapier & Make.com Integration", desc: "Build no-code workflows by connecting Celphix to thousands of applications. Use our verified partner apps on automation platforms to trigger instant actions." },
  { title: "Webhook Setup & Testing", desc: "Configure local environments to receive and process test webhooks. Includes payload examples and verification methods using Ngrok or local tunneling." },
  { title: "Custom API Integration", desc: "Inject your own proprietary APIs into the agent's logic layer. Allow the AI to query your database mid-conversation to retrieve live customer data or inventory." },
  { title: "Database Connectivity", desc: "Securely link MySQL, PostgreSQL, or MongoDB instances for direct data retrieval. Set up read-only roles and secure VPC peering for enterprise data compliance." },
  { title: "Payment Gateway Integration", desc: "Allow agents to trigger Stripe or Square payment links via SMS. Includes logic for confirming payment success and concluding the transaction." },
  { title: "SMS & Email Notifications", desc: "Trigger omnichannel follow-ups via Twilio or SendGrid post-call. Send summary emails, calendar invites, or document requests automatically." },
  { title: "Slack & Teams Integration", desc: "Push real-time call summaries and hot-lead alerts directly into your internal communication channels. Instantly notify sales reps of high-intent transfers." },
  { title: "Custom Middleware Development", desc: "Build proxy layers to sanitize or modify data before it reaches the Celphix engine. Ideal for complex enterprise environments with strict data formatting rules." },
  { title: "Data Mapping & Transformation", desc: "Map our JSON outputs to your exact database schema. Ensure custom variables, entity extractions, and summaries align perfectly with your existing fields." },
  { title: "Testing & Debugging Integrations", desc: "Utilize the sandbox environment to run simulated calls and test payload deliveries. Review server logs and trace ID tracking for rapid issue resolution." }
];

const systemStatusData = [
  { title: "Service Uptime & Reliability", desc: "View our historical 99.99% SLA adherence across all global regions. We maintain redundant server clusters to guarantee operational continuity." },
  { title: "Current System Status", desc: "Live dashboard indicating the health of all core services: Voice Engine, LLM Processing, API Gateway, and Webhook Delivery systems." },
  { title: "Incident History & Resolution", desc: "Transparent logs of all past outages, degradation periods, and latency spikes. Includes detailed post-mortem reports and implemented preventative measures." },
  { title: "Performance Metrics & Benchmarks", desc: "Real-time tracking of Total Round Trip Latency (TRTL), inference speeds, and audio generation delays. Ensuring we consistently beat the sub-900ms benchmark." },
  { title: "Latency Monitoring", desc: "Track regional ping times and edge-compute efficiency. Monitor exactly how fast API requests are processed from your specific geographic location." },
  { title: "Concurrent Call Capacity", desc: "Live metrics displaying the current load on our server clusters. Verify that our dynamic scaling architecture is successfully handling peak outbound volumes." },
  { title: "Regional Availability", desc: "Status checks for specific deployment regions including US-East, US-West, EU-Central, and AP-South. Verify localization speeds for international campaigns." },
  { title: "Backup & Disaster Recovery", desc: "Overview of our continuous data backup protocols and failover activation times. In the event of catastrophic failure, operations migrate in milliseconds." },
  { title: "Maintenance Windows", desc: "Schedule of upcoming planned maintenance and system upgrades. We utilize zero-downtime deployment strategies, but notify clients of all infrastructure patches." },
  { title: "Status Page & Alerts", desc: "Subscribe to instant SMS, email, or webhook notifications for system degradation. Receive immediate alerts if our latency thresholds exceed normal parameters." },
  { title: "SLA & Compliance", desc: "Review our formal Service Level Agreements and compensation structures for downtime. Strict adherence to enterprise reliability standards." },
  { title: "Scaling & Load Balancing", desc: "Insights into our Kubernetes orchestration and load balancer distribution. See how we instantly allocate GPU resources during massive outbound blasts." }
];

const securityWhitepaperData = [
  { title: "Data Encryption Standards", desc: "All data is encrypted at rest using AES-256 and in transit via TLS 1.3. We utilize industry-leading cryptographic protocols to ensure payload integrity." },
  { title: "Authentication & Authorization", desc: "Strict adherence to OAuth 2.0 and JWT standards for API access. Enforced multi-factor authentication (MFA) across all dashboard and administrative access points." },
  { title: "Role-Based Access Control (RBAC)", desc: "Granular permission settings for team members. Restrict access to billing, API keys, call logs, and script editing based on organizational hierarchy." },
  { title: "PCI-DSS Compliance", desc: "Our infrastructure is certified to handle, transmit, and redact sensitive payment card information. Agents securely process transactions without logging full card numbers." },
  { title: "HIPAA & Healthcare Compliance", desc: "Fully compliant environments for handling Protected Health Information (PHI). Includes Business Associate Agreements (BAA) and automated redaction of medical data." },
  { title: "SOC 2 Type II Certification", desc: "Rigorous independent audits verifying our security, availability, processing integrity, confidentiality, and privacy controls over extended periods." },
  { title: "Data Residency & Sovereignty", desc: "Deploy agents and store data within specific geographic boundaries to comply with GDPR, CCPA, and regional data protection regulations." },
  { title: "Audit Logging & Monitoring", desc: "Comprehensive, immutable audit trails tracking every API request, dashboard login, and configuration change. Monitored 24/7 by our security operations center." },
  { title: "Incident Response Procedures", desc: "Detailed protocols for threat detection, containment, and eradication. Rapid communication guarantees and immediate forensic analysis upon any suspected breach." },
  { title: "Penetration Testing & Vulnerability Management", desc: "Routine automated vulnerability scanning paired with quarterly manual penetration tests by elite third-party cybersecurity firms." },
  { title: "Third-Party Security Audits", desc: "Continuous assessment of our entire vendor supply chain. We strictly vet all sub-processors and cloud infrastructure providers for compliance adherence." },
  { title: "Privacy Policy & Data Retention", desc: "Clear guidelines on how your data is processed, anonymized, and eventually destroyed. Custom retention policies available for enterprise deployment tiers." }
];

const CommandCenterDocumentationPage = () => {
  const [activeTab, setActiveTab] = useState('api');

  const tabs = [
    { id: 'api', label: 'API Documentation', icon: Terminal, data: apiDocsData },
    { id: 'integrations', label: 'Integration Guides', icon: Code, data: integrationGuidesData },
    { id: 'status', label: 'System Status', icon: Activity, data: systemStatusData },
    { id: 'security', label: 'Security Whitepaper', icon: ShieldCheck, data: securityWhitepaperData },
  ];

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <CommandCenterLayout>
      <Helmet>
        <title>Documentation & Resources | Command Center</title>
        <meta name="description" content="Technical documentation, API references, integration guides, and security compliance for Celphix." />
      </Helmet>

      <div className="flex flex-col md:flex-row min-h-screen font-sans relative z-10">
        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-80 bg-[#0a1a0a] text-white p-6 border-r border-[#008613]/30 h-auto md:min-h-screen">
          <div className="mb-10 mt-4">
            <h2 className="text-[#ffea00] font-bold text-xl uppercase tracking-widest mb-1">Developer</h2>
            <p className="text-white/60 text-sm">Command Center Hub</p>
          </div>

          <nav className="flex flex-col space-y-2 sticky top-[100px]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-between w-full p-4 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-[#008613] text-white shadow-lg' 
                      : 'hover:bg-white/10 text-white/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center font-sans">
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-bold text-sm">{tab.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4" />}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <main className="flex-1 bg-white p-8 md:p-16">
          <div className="max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                {React.createElement(activeContent.icon, { className: "w-10 h-10 text-[#008613] flex-shrink-0" })}
                <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                  {activeContent.label}
                </h1>
              </div>
              <a href="mailto:solutions@celphix.com?subject=Audit%20Request%20-%20Command%20Center%20Documentation&body=Hello%20Celphix%20team,%0A%0AI%20would%20like%20to%20request%20an%20audit%20for%20Command%20Center.%0A%0AThank%20you.">
                <Button className="bg-[#ffea00] text-black hover:bg-[#008613] hover:text-white font-bold transition-colors w-full sm:w-auto">
                  Request Audit
                </Button>
              </a>
            </div>

            <div className="space-y-10">
              {activeContent.data.map((item, idx) => (
                <div key={idx} className="pb-8 border-b border-gray-100 last:border-0">
                  <h3 className="text-2xl font-bold text-[#008613] mb-4">{item.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </CommandCenterLayout>
  );
};

export default CommandCenterDocumentationPage;