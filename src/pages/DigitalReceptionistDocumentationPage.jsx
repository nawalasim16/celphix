import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import DigitalReceptionistLayout from '@/components/DigitalReceptionistLayout';
import { BookOpen, FileText, CalendarDays, Activity, ChevronRight } from 'lucide-react';

const knowledgeBaseData = [
  { title: "Core Configuration Setup", desc: "Learn how to establish the baseline parameters of your digital receptionist. This covers essential settings including time zones, primary business hours for specific fallback logic, and basic company profiling to inform the agent's contextual awareness." },
  { title: "Voice Model Selection", desc: "A guide to selecting the appropriate vocal tone, pitch, and cadence. Review our library of optimized voices designed specifically for different industries, ensuring your front-desk representation matches your brand's specific professional persona." },
  { title: "Handling Concurrent Queues", desc: "Understand how the system manages extreme inbound volume. The receptionist architecture naturally scales to accept infinite simultaneous calls, requiring zero configuration to activate this load-balancing behavior." },
  { title: "Call Forwarding & Warm Transfers", desc: "Step-by-step instructions on configuring department routing. Teach the agent when it is appropriate to patch a caller through to a live human, and how it announces the caller's context prior to connecting." },
  { title: "Fallback Logic Implementation", desc: "Define explicit rules for edge-case scenarios where the agent cannot fulfill a request. This ensures callers are never left frustrated, gracefully transitioning them to a voicemail recording or a specific administrative email queue." },
  { title: "Data Privacy & HIPAA Controls", desc: "Detailed breakdown of our security compliance toggles. Learn how to activate secure PII redaction so that sensitive customer or patient data is stripped from visible transcripts and stored securely." },
  { title: "Multi-Language Activation", desc: "Enable dynamic language switching during live calls. The agent can automatically detect the caller's spoken language and seamlessly transition its comprehension and generation to accommodate global client bases." },
  { title: "Understanding Inference Latency", desc: "Technical explanation of how the sub-700ms response time is maintained. Includes troubleshooting steps to verify your local network integrations aren't causing downstream webhook delays." },
  { title: "Dashboard Analytics Interpretation", desc: "A comprehensive tour of your performance metrics interface. Learn to analyze call duration, average handling time, conversion rates on appointment bookings, and overall system load statistics." },
  { title: "Post-Call Summary Extraction", desc: "Retrieve structured insights immediately following call termination. Configure how summaries are generated, ensuring the most vital information is highlighted for your human staff to review." }
];

const scriptTemplatesData = [
  { title: "Medical Clinic Intake", desc: "A highly empathetic script designed specifically for patient onboarding. It systematically captures symptoms, verifies basic insurance provider names, and routes severe emergencies immediately to on-call staff." },
  { title: "Legal Consultation Vetting", desc: "A rigorous professional script focused on lead qualification. It politely blocks sales solicitations, gathers preliminary case details, and books viable prospects directly into attorney review calendars." },
  { title: "HVAC & Trade Dispatch", desc: "An urgent, action-oriented flow tailored for home services. Distinguishes between routine maintenance requests and active emergencies, prioritizing dispatch windows based on technician availability." },
  { title: "Real Estate Property Inquiries", desc: "A persuasive conversational template designed to capture buyer intent. It answers basic listing questions regarding price or square footage, and schedules property viewings directly with the listing agent." },
  { title: "SaaS Technical Support Level 1", desc: "A methodical troubleshooting script capable of executing basic step-by-step guides. It captures exact error codes and user account details before escalating complex issues to tier-two engineering." },
  { title: "Automotive Service Scheduling", desc: "Optimized for dealership service departments. Proactively asks for vehicle make, model, and mileage, while cross-selling routine maintenance packages during the appointment booking phase." },
  { title: "Hospitality & Restaurant Reservations", desc: "A warm, accommodating script that checks table availability and processes booking modifications. It answers common logistical questions regarding dress codes, parking, and dietary restrictions." },
  { title: "Financial Advisory Lead Generation", desc: "A highly compliant, conservative script for wealth management firms. It gathers basic financial goals without violating regulatory constraints, prepping the prospect for a licensed advisor callback." },
  { title: "E-Commerce Order Status", desc: "A transactional script that interfaces directly with shipping APIs. It asks for order numbers, validates customer identity, and reads out live tracking updates without human intervention." },
  { title: "General Corporate Switchboard", desc: "A clean, efficient routing template acting as a universal corporate directory. It understands the company hierarchy, spelling of employee names, and transfers calls cleanly to the correct desk extension." }
];

const calendarGuideData = [
  { title: "Google Calendar OAuth Sync", desc: "Detailed walkthrough for securely connecting your Google Workspace calendars. Covers the authorization flow required to grant the agent read/write permissions without exposing broader account access." },
  { title: "Microsoft Outlook Exchange Connect", desc: "Instructions for integrating with enterprise Office 365 environments. Includes necessary steps for IT administrators to whitelist the Celphix application within the Azure Active Directory portal." },
  { title: "Calendly API Webhook Binding", desc: "A guide to utilizing Calendly as an intermediary scheduling layer. Learn how the agent queries Calendly's open availability endpoints to present accurate time slots to the caller over the phone." },
  { title: "Handling Multiple Timezones", desc: "Configure how the agent interprets and communicates time. Ensure it accurately translates the business's local time to the caller's specific timezone to prevent scheduling miscommunications." },
  { title: "Buffer Times & Scheduling Gaps", desc: "Set protective padding around your appointments. Teach the agent to automatically leave 15-minute intervals between bookings to ensure your human staff never experience overlapping client meetings." },
  { title: "Double-Booking Prevention Logic", desc: "Review the system's real-time validation checks. The agent queries the calendar API mere milliseconds before confirming an appointment, ensuring perfect synchronization even during high-traffic periods." },
  { title: "Automated Calendar Invites", desc: "Configure the payload for automated email confirmations. Define the subject line, location links (such as Zoom or physical addresses), and necessary pre-meeting instructions sent to the caller." },
  { title: "Managing Reschedules & Cancellations", desc: "Enable the agent to autonomously modify existing bookings. It can locate the caller's original appointment using their phone number and seamlessly shift it to a new available time slot." },
  { title: "Round-Robin Team Distribution", desc: "Distribute incoming appointments evenly across a sales or support team. Configure pooling logic to ensure calendar availability is drawn from multiple staff members simultaneously." },
  { title: "Custom Event Titling & Descriptions", desc: "Control exactly how the event appears on your internal calendar. Force the agent to inject structured data, such as 'Lead Score' or 'Call Summary', directly into the calendar event description field." }
];

const systemStatusDataDocs = [
  { title: "Real-Time Telemetry Tracking", desc: "Monitor the exact operational health of our infrastructure clusters. We display live metrics for the Voice Generation Engine, LLM Processing Layer, and Webhook Delivery systems." },
  { title: "Global Latency Benchmarks", desc: "Review average round-trip audio latency broken down by geographic region. Ensure that response speeds remain well within the sub-700ms threshold for optimal human-parity conversation." },
  { title: "Service Level Agreement (SLA)", desc: "Review the formal documentation guaranteeing our 99.99% operational uptime. Understand the financial compensation structures in place should the network ever experience unexpected degradation." },
  { title: "Historical Incident Reports", desc: "Access comprehensive post-mortem analyses of any past service interruptions. We maintain absolute transparency regarding root causes, duration of impact, and subsequent preventative engineering." },
  { title: "Scheduled Maintenance Windows", desc: "View the calendar of planned infrastructure upgrades. While our microservices architecture allows for zero-downtime deployments, we proactively alert clients to all backend optimizations." },
  { title: "API Gateway Capacity", desc: "Monitor the current load on our REST API endpoints. Verify that our dynamic scaling logic is successfully distributing traffic during massive enterprise usage spikes." },
  { title: "Data Storage Redundancy", desc: "Understand our failover protocols for logged calls and transcripts. We replicate data across multiple isolated zones to guarantee absolute preservation of your customer interactions." },
  { title: "Security Operation Center (SOC) Alerts", desc: "Subscribe to our dedicated security feed. Receive instant notifications regarding broad internet vulnerabilities and our immediate patching status to ensure your data remains fortified." },
  { title: "Third-Party Provider Health", desc: "Track the status of essential downstream partners. Since our system interfaces with tools like Google, Twilio, and OpenAI, we aggregate their operational statuses into a single unified dashboard." },
  { title: "Status Page Subscription Controls", desc: "Configure how your engineering team receives system alerts. Set up automated webhook pushes, SMS text alerts, or email chains triggered the moment latency exceeds defined nominal parameters." }
];

const DigitalReceptionistDocumentationPage = () => {
  const [activeTab, setActiveTab] = useState('knowledge');

  const tabs = [
    { id: 'knowledge', label: 'Knowledge Base', icon: BookOpen, data: knowledgeBaseData },
    { id: 'scripts', label: 'Script Templates', icon: FileText, data: scriptTemplatesData },
    { id: 'calendar', label: 'Calendar Integration Guide', icon: CalendarDays, data: calendarGuideData },
    { id: 'status', label: 'System Status', icon: Activity, data: systemStatusDataDocs },
  ];

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <DigitalReceptionistLayout>
      <Helmet>
        <title>Documentation | Digital Receptionist</title>
        <meta name="description" content="Official documentation, guides, and system status for Celphix Digital Receptionist." />
      </Helmet>

      <div className="flex flex-col md:flex-row min-h-screen font-sans">
        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-80 bg-[#0a1a0a] text-white p-6 border-r border-[#008613] h-auto md:min-h-screen">
          <div className="mb-10 mt-4">
            <h2 className="text-[#008613] font-bold text-xl uppercase tracking-widest mb-1">Support Hub</h2>
            <p className="text-white/60 text-sm font-mono">Digital Receptionist Docs</p>
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
                      : 'hover:bg-[#008613]/20 text-white/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center">
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
            <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#008613]/20">
              {React.createElement(activeContent.icon, { className: "w-10 h-10 text-[#008613]" })}
              <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight">
                {activeContent.label}
              </h1>
            </div>

            <div className="space-y-12">
              {activeContent.data.map((item, idx) => (
                <div key={idx} className="pb-8 border-b border-gray-100 last:border-0">
                  <h3 className="text-2xl font-bold text-[#008613] mb-4">{item.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </DigitalReceptionistLayout>
  );
};

export default DigitalReceptionistDocumentationPage;