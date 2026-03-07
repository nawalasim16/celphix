
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import LiquidLayout from '@/components/LiquidLayout';
import { Search, ChevronRight, ChevronDown } from 'lucide-react';

const docsData = [
  {
    category: "Core Fundamentals & Quickstart",
    topics: [
      { title: "The Liquid Philosophy", content: "Liquid Agent provides instantaneous compute routing for voice applications. No rigid hierarchies, only dynamic allocation." },
      { title: "First Call in 60 Seconds", content: "A rapid guide to deploying your first sandbox call using the CLI or dashboard interface. Requires a verified email." },
      { title: "Dashboard Walkthrough", content: "Overview of your primary command center. Navigate telemetry, billing cycles, and API key management seamlessly." },
      { title: "Account Activation", content: "Steps required to move from sandbox mode to live production, including payment method verification." },
      { title: "Credit Management", content: "Understanding metered billing. How to set auto-recharge thresholds to prevent execution interruption." },
      { title: "Agent Archetypes", content: "Review predefined behavioral models: Standard Opener, Support Triage, and Data Extractor." },
      { title: "The Latency Blueprint", content: "How edge nodes minimize TRTL. Expected performance across varying geographic requests." },
      { title: "Supported Regions", content: "Current active cluster zones: US-East, US-West, EU-Central. Optimizing endpoints for local dialers." },
      { title: "Glossary of Terms", content: "Definitions for VAD (Voice Activity Detection), TRTL, Context Window, and Neural Pivot." },
      { title: "Versioning", content: "Understanding API v1 vs v2 endpoints. Deprecation timelines and migration best practices." }
    ]
  },
  {
    category: "Technical Configuration & API",
    topics: [
      { title: "Authentication", content: "Secure your endpoints using Bearer tokens. Rotate and manage API keys safely via the dashboard." },
      { title: "The Request Payload", content: "Constructing the JSON body for `POST /v1/liquid/call`. Mandatory and optional string parameters." },
      { title: "Dynamic Variable Injection", content: "Passing custom `{name}` or `{balance}` parameters directly into the prompt on initialization." },
      { title: "Webhook Orchestration", content: "Setting up listeners for `call.completed` and `intent.detected`. Validating secure signatures." },
      { title: "WebSocket Telemetry", content: "Connecting to `wss://api.celphix.com/stream` for raw bi-directional transcription logs." },
      { title: "Error Handling", content: "Decoding 400 and 500-level HTTP responses. Common validation issues with E.164 phone formats." },
      { title: "Rate Limiting", content: "Default limits of 100 req/sec. Procedures for requesting limit expansions during massive blasts." },
      { title: "Voice Synthesis API", content: "Modifying pitch, cadence, and pause-duration parameters programmatically mid-call." },
      { title: "Metadata Persistence", content: "Appending internal CRM IDs to the call payload so webhooks return contextual identifiers." },
      { title: "Security & Encryption", content: "TLS 1.3 protocol requirements for all inbound API requests to ensure payload integrity." }
    ]
  },
  {
    category: "Conversational Logic & Training",
    topics: [
      { title: "Knowledge Base Uploads", content: "Ingesting PDF or URL data to create vector embeddings for the agent's RAG memory." },
      { title: "Designing Mission Goals", content: "Structuring the primary objective. Ensuring the agent navigates toward the desired outcome." },
      { title: "The Neural Pivot", content: "Configuring logic to redirect off-topic user queries back to the primary conversion objective." },
      { title: "Objection Handling Engines", content: "Building rebuttal databases. How the LLM categorizes friction and retrieves authorized counter-points." },
      { title: "Multi-Language Logic", content: "Enabling auto-detection for 50+ languages. Script translation fallbacks." },
      { title: "Sentiment Logic", content: "Real-time emotional tracking. Triggering warm transfers if negative sentiment exceeds threshold." },
      { title: "Prompt Engineering", content: "Best practices for writing system prompts that generate concise, human-like dialogue." },
      { title: "Conversation Guardrails", content: "Setting strict boundaries on what topics the agent is prohibited from discussing or validating." },
      { title: "Call Transfers", content: "Synthesizing DTMF tones or API triggers to patch the live caller to a human desk." },
      { title: "Transcription Accuracy", content: "Understanding noise filtration and contextual spelling corrections within the raw transcript." }
    ]
  },
  {
    category: "Integrations & Ecosystem",
    topics: [
      { title: "CRM Native Sync", content: "Pushing JSON payloads directly into Salesforce or HubSpot contact records via native app." },
      { title: "Calendar Master-Sync", content: "Authorizing Google Workspace or Office 365 OAuth for real-time appointment validation." },
      { title: "Zapier & Make.com", content: "Utilizing the official Liquid Agent app to build no-code operational workflows." },
      { title: "Custom LLM Bridge", content: "Routing dialogue generation to your own proprietary fine-tuned models rather than default engines." },
      { title: "SMS/Email Automation", content: "Triggering Twilio or SendGrid outbound alerts the moment a call successfully concludes." },
      { title: "Bulk Upload Orchestration", content: "Processing large CSV files via the dashboard for async outbound dialing campaigns." },
      { title: "Payment Gateway Setup", content: "Issuing Stripe secure payment links via SMS automatically during active voice negotiations." },
      { title: "Analytics Export", content: "Exporting raw telemetry data to AWS S3 or Snowflake for proprietary data warehousing." },
      { title: "Telephony Porting", content: "Migrating your existing business DID numbers into the Celphix SIP trunk architecture." },
      { title: "Slack/Discord Alerts", content: "Formatting webhooks to push high-value lead notifications into internal team channels." }
    ]
  },
  {
    category: "Compliance & Security",
    topics: [
      { title: "Data Governance", content: "Reviewing our internal controls over data storage, processing boundaries, and lifecycle management." },
      { title: "GDPR/CCPA Compliance", content: "Executing Data Processing Agreements. How to trigger Right to be Forgotten API endpoints." },
      { title: "SOC2 Type II Overview", content: "Accessing our independent security audit reports from the compliance dashboard." },
      { title: "HIPAA Compliance", content: "Configuring BAA contracts and enabling strict PII/PHI redaction toggles on transcription logs." },
      { title: "TCPA Guidelines", content: "Understanding outbound dialing constraints. Ensuring lists possess explicit opt-in consent." },
      { title: "Call Recording Laws", content: "Injecting automatic disclosure audio at call commencement to satisfy two-party consent states." },
      { title: "PII Redaction", content: "How the neural engine autonomously scrubs SSNs and credit card numbers from stored logs." },
      { title: "Downtime Protocols", content: "Failover mechanics in the event of upstream provider failure (e.g., Twilio outage)." },
      { title: "Abuse Prevention", content: "Algorithmic blocks against utilizing Liquid infrastructure for phishing or malicious activities." },
      { title: "SLA Documentation", content: "Reviewing our 99.99% uptime guarantee and calculating potential disruption credits." }
    ]
  }
];

const LiquidDocumentationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({
    "Core Fundamentals & Quickstart": true
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredData = docsData.map(cat => ({
    ...cat,
    topics: cat.topics.filter(topic => 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      topic.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.topics.length > 0);

  return (
    <LiquidLayout>
      <Helmet>
        <title>Documentation | Liquid Agent</title>
        <meta name="description" content="Technical documentation and configuration guides for Liquid Agent infrastructure." />
      </Helmet>

      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-80 bg-gray-50 border-r border-gray-200 flex flex-col md:h-[calc(100vh-80px)] sticky top-[80px]">
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search endpoints, guides..." 
                className="w-full bg-white border border-gray-300 text-sm font-mono p-3 pl-10 focus:outline-none focus:border-[#008613] transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="p-4 overflow-y-auto flex-1">
            {docsData.map((cat, idx) => (
              <div key={idx} className="mb-2">
                <button 
                  onClick={() => toggleCategory(cat.category)}
                  className="w-full text-left p-3 text-sm font-bold text-[#0a1a0a] hover:bg-gray-100 flex justify-between items-center transition-colors font-mono"
                >
                  <span className="truncate pr-2">{cat.category}</span>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${expandedCategories[cat.category] ? 'rotate-180' : ''}`} />
                </button>
                {expandedCategories[cat.category] && (
                  <ul className="pl-4 border-l-2 border-gray-200 ml-4 mt-1 mb-4 space-y-1">
                    {cat.topics.map((t, i) => (
                      <li key={i}>
                        <a href={`#topic-${t.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-xs text-gray-600 hover:text-[#008613] py-1.5 block font-mono">
                          {t.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-8 md:p-16 overflow-y-auto scroll-smooth">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black text-[#0a1a0a] mb-2 uppercase tracking-tight">API & Architecture Docs</h1>
            <p className="text-gray-500 font-mono mb-12">Complete technical specifications for the Liquid framework.</p>

            {filteredData.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 font-mono">No results found for "{searchQuery}".</p>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredData.map((cat, idx) => (
                  <div key={idx}>
                    <h2 className="text-2xl font-bold text-[#008613] mb-8 border-b border-gray-200 pb-2 flex items-center">
                      <ChevronRight className="w-6 h-6 mr-2" /> {cat.category}
                    </h2>
                    <div className="space-y-8">
                      {cat.topics.map((topic, i) => (
                        <div key={i} id={`topic-${topic.title.replace(/\s+/g, '-').toLowerCase()}`} className="scroll-mt-24 bg-white p-6 border border-gray-100 shadow-sm hover:border-[#008613]/30 transition-colors relative">
                          <div className="absolute top-0 left-0 w-1 h-full bg-[#ffea00]" />
                          <h3 className="text-lg font-bold text-[#0a1a0a] mb-3">{topic.title}</h3>
                          <p className="text-gray-700 leading-relaxed font-mono text-sm">{topic.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </LiquidLayout>
  );
};

export default LiquidDocumentationPage;
