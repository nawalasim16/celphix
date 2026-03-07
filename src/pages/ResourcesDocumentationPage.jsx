import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, BookOpen, Terminal, Activity, ShieldCheck } from 'lucide-react';

const documentationContent = {
  knowledge: {
    title: "Knowledge Base",
    icon: BookOpen,
    items: [
      { heading: "Getting Started with Celphix", content: "Overview of your first 24 hours. Creating your dashboard profile, securing API keys, and deploying your first test agent." },
      { heading: "Account Settings & Billing", content: "Managing your subscription tiers, adding payment methods, and reviewing past invoices. Covers adding team members via RBAC." },
      { heading: "Creating Custom Scripts", content: "Best practices for writing conversational logic. How to phrase questions to ensure high-accuracy responses from callers." },
      { heading: "Voice Cloning & Selection", content: "How to use our 11Labs integrated voice cloning feature. Step-by-step requirements for high-quality audio samples." },
      { heading: "Phone Number Porting", content: "Transferring existing business lines to Celphix via Twilio integration. Timeframes and regulatory requirements." },
      { heading: "Managing Concurrent Queues", content: "How the engine handles spikes in call volume. Setting maximum concurrent limits to match your human staff's capabilities." },
      { heading: "Dashboard Analytics", content: "Reading your telemetry data. Understanding TRTL latency metrics, transcription accuracy, and conversion success rates." },
      { heading: "Call Logging & Exporting", content: "How to bulk export call recordings and JSON transcripts for local storage or third-party CRM ingestion." },
      { heading: "Advanced Routing Rules", content: "Creating nested logic trees. If a caller says 'Sales', route to agent X; if they say 'Support', route to agent Y." },
      { heading: "Troubleshooting Guide", content: "Common errors and resolutions. Fixing dropped calls, resolving webhook timeouts, and correcting microphone latency." }
    ]
  },
  api: {
    title: "API Documentation",
    icon: Terminal,
    items: [
      { heading: "Authentication Bearer Tokens", content: "Secure your endpoints. Generate, rotate, and manage API keys directly from your developer dashboard." },
      { heading: "Rate Limits", content: "Understand your tier-based concurrency limits. Default limit is 100 requests per second per IP." },
      { heading: "Triggering Outbound Calls", content: "POST /v1/calls/outbound. Send an array of phone numbers and a script ID to initiate an autonomous dialing campaign." },
      { heading: "Retrieving Call Transcripts", content: "GET /v1/calls/{id}/transcript. Fetch the full bi-directional conversation log in structured JSON format." },
      { heading: "Real-Time Streaming Protocol", content: "Connect via WebSockets (wss://api.celphix.com/stream) for raw audio streaming and live bi-directional transcription." },
      { heading: "Updating Agent Knowledge", content: "PUT /v1/agents/{id}/context. Dynamically push new factual data to an agent mid-conversation." },
      { heading: "Webhook Event Listeners", content: "Configure endpoints to receive 'call.completed', 'call.failed', and 'intent.detected' events." },
      { heading: "Handling Validation Errors", content: "Breakdown of 400-level HTTP status codes. Ensuring E.164 phone number formatting." },
      { heading: "Entity Extraction Endpoint", content: "POST /v1/extract. Pass a raw transcript to our LLM to automatically pull names, dates, and email addresses." },
      { heading: "SDK Quickstarts", content: "NPM packages for Node.js, Python pip installs, and Go modules to accelerate your development timeline." }
    ]
  },
  status: {
    title: "System Status",
    icon: Activity,
    items: [
      { heading: "Global Uptime Metrics", content: "Our historical 99.99% SLA adherence across all major deployment regions (US-East, US-West, EU-Central)." },
      { heading: "Voice Engine Latency", content: "Live tracking of audio generation speeds. Target benchmark is strictly sub-700ms." },
      { heading: "LLM Inference Load", content: "Current processing capacity of our reasoning models. Monitoring dynamic scaling efficiency during peak hours." },
      { heading: "Webhook Delivery Health", content: "Tracking successful payload deliveries. Average time from call completion to webhook execution is < 2.5 seconds." },
      { heading: "Dashboard Availability", content: "Status of the administrative frontend. Assuring seamless access to analytics and billing portals." },
      { heading: "Telephony Carrier Status", content: "Aggregated status of upstream providers (Twilio, Bandwidth). If carriers experience degradation, failover logic engages." },
      { heading: "Incident History", content: "Transparent logs of past outages, degradation periods, and latency spikes. Includes detailed post-mortems." },
      { heading: "Maintenance Schedule", content: "Upcoming zero-downtime cluster upgrades. Advance notice for required infrastructure patching." },
      { heading: "API Gateway Redundancy", content: "Overview of Kubernetes load balancers. Validating traffic distribution across multiple availability zones." },
      { heading: "Subscribe to Alerts", content: "Configure SMS, email, or Slack notifications to receive immediate alerts if our latency thresholds exceed normal parameters." }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    icon: ShieldCheck,
    items: [
      { heading: "Data Collection Practices", content: "What we log during operations. Call audio, transcripts, and metadata are collected strictly for service fulfillment." },
      { heading: "PII & HIPAA Compliance", content: "Automated redaction mechanisms for Protected Health Information. We offer Business Associate Agreements (BAA) for medical clients." },
      { heading: "Data Retention Periods", content: "Standard retention is 90 days. Enterprise clients can configure custom destruction policies or infinite secure storage." },
      { heading: "Encryption Standards", content: "Data at rest is secured via AES-256. All data in transit uses TLS 1.3 cryptographic protocols." },
      { heading: "Third-Party Sub-Processors", content: "List of vetted vendors (e.g., AWS, OpenAI, Anthropic). We enforce strict DPA agreements with all partners." },
      { heading: "User Consent & Opt-Out", content: "Mechanisms for providing mandatory disclosure during recorded calls, compliant with two-party consent state laws." },
      { heading: "GDPR & CCPA Rights", content: "Procedures for users to request data export or complete account deletion (Right to be Forgotten)." },
      { heading: "SOC 2 Type II Audits", content: "Information regarding our independent security audits, testing availability, processing integrity, and confidentiality." },
      { heading: "Breach Notification Protocol", content: "Our commitment to notify impacted clients within 48 hours of any confirmed security incident or unauthorized access." },
      { heading: "Contact Data Protection Officer", content: "Direct line to our privacy team for legal inquiries, compliance questionnaires, or specific enterprise security demands." }
    ]
  }
};

const ResourcesDocumentationPage = () => {
  const [activeSection, setActiveSection] = useState('knowledge');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (idx) => {
    setExpandedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const activeData = documentationContent[activeSection];
  const Icon = activeData.icon;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Helmet>
        <title>Resources & Documentation | Celphix</title>
        <meta name="description" content="Comprehensive guides, API documentation, system status, and privacy policy for Celphix." />
      </Helmet>
      
      <Header />

      <div className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-80 bg-[#0a1a0a] text-white p-6 md:min-h-[calc(100vh-80px)]">
          <div className="mb-8 mt-4">
            <h2 className="text-[#ffea00] font-bold text-xl uppercase tracking-widest mb-1">Resources</h2>
            <p className="text-white/60 text-sm">Documentation Portal</p>
          </div>
          
          <nav className="flex flex-col space-y-2 sticky top-[100px]">
            {Object.entries(documentationContent).map(([key, data]) => {
              const NavIcon = data.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center w-full p-4 rounded-lg transition-all text-left ${
                    activeSection === key 
                      ? 'bg-[#008613] text-white shadow-lg font-bold' 
                      : 'hover:bg-white/10 text-white/80 hover:text-white font-medium'
                  }`}
                >
                  <NavIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>{data.title}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-200">
              <Icon className="w-10 h-10 text-[#008613]" />
              <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight">{activeData.title}</h1>
            </div>

            <div className="space-y-4">
              {activeData.items.map((item, idx) => {
                const isExpanded = expandedItems[idx];
                return (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-[#008613]/50 transition-colors">
                    <button 
                      onClick={() => toggleItem(idx)}
                      className="w-full text-left p-6 flex justify-between items-center focus:outline-none bg-gray-50/50"
                    >
                      <h3 className="text-lg font-bold text-[#008613] pr-4">{item.heading}</h3>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isExpanded && (
                      <div className="p-6 pt-2 border-t border-gray-100 bg-white animate-in slide-in-from-top-2">
                        <p className="text-gray-700 leading-relaxed font-sans">{item.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ResourcesDocumentationPage;