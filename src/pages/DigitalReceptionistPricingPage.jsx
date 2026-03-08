import React from 'react';
import { Helmet } from 'react-helmet';
import DigitalReceptionistLayout from '@/components/DigitalReceptionistLayout';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalReceptionistPricingPage = () => {
  const location = useLocation();

  const comparisonData = [
    {
      category: "Availability & Reliability",
      features: [
        { name: "Operational Hours", human: "40 Hours / Week", ai: "168 Hours / Week (24/7/365)" },
        { name: "Concurrent Call Handling", human: "1 Call at a time", ai: "Infinite Concurrent Capacity" },
        { name: "Wait Times / Hold Music", human: "Average 2-5 minutes", ai: "Zero wait times" },
        { name: "Sick Days & PTO", human: "Standard", ai: "None. 99.99% Uptime SLA" },
        { name: "Missed Call Rate", human: "Industry average 22%", ai: "0% Absolute Guarantee" },
      ]
    },
    {
      category: "Intelligent Interaction",
      features: [
        { name: "Response Latency", human: "~500ms", ai: "Sub-700ms (Human Parity)" },
        { name: "Tone & Demeanor", human: "Varies by mood/fatigue", ai: "Consistently flawless & empathetic" },
        { name: "Multi-lingual Support", human: "Typically 1-2 languages", ai: "50+ Languages instantly switchable" },
        { name: "Script Adherence", human: "Subject to human error", ai: "100% Perfect compliance" },
        { name: "Objection Handling", human: "Requires extensive training", ai: "Deep logic reasoning enabled" },
      ]
    },
    {
      category: "Logistics & Action",
      features: [
        { name: "Calendar Booking", human: "Manual data entry", ai: "Autonomous direct API booking" },
        { name: "Double Booking Risk", human: "High risk during peak volume", ai: "Zero risk, perfect logic validation" },
        { name: "Emergency Escalation", human: "Manual warm transfer", ai: "Instant real-time call patching" },
        { name: "Outbound Follow-ups", human: "Manual dial back", ai: "Automated trigger campaigns" },
        { name: "Voicemail Routing", human: "Passive recording", ai: "Proactive real-time engagement" },
      ]
    },
    {
      category: "Data & Integration",
      features: [
        { name: "CRM Logging", human: "Post-call manual entry", ai: "Instant real-time JSON injection" },
        { name: "Data Accuracy", human: "Prone to typos/forgetfulness", ai: "99.9% Extraction precision" },
        { name: "Call Summarization", human: "Brief manual notes", ai: "Comprehensive automated transcripts" },
        { name: "Post-Call Triggers", human: "Requires manual webhook/email", ai: "Native Zapier/API execution" },
        { name: "Lead Qualification Speed", human: "5-10 minutes per lead", ai: "Immediate during initial interaction" },
      ]
    },
    {
      category: "Cost & Scalability",
      features: [
        { name: "Base Salary/Cost", human: "$35,000 - $45,000 / year", ai: "$1,788 / year ($149/mo)" },
        { name: "Benefits & Overhead", human: "~30% of base salary", ai: "$0" },
        { name: "Onboarding Time", human: "2-4 Weeks", ai: "< 10 Minutes" },
        { name: "Scaling Up Volume", human: "Requires hiring more staff", ai: "Scales automatically instantly" },
        { name: "Training Cost", human: "Thousands in lost productivity", ai: "Included in base subscription" },
      ]
    }
  ];

  return (
    <DigitalReceptionistLayout>
      <Helmet>
        <title>Pricing & Comparison | Digital Receptionist</title>
        <meta name="description" content="Comparative audit: Human Receptionist vs Celphix AI." />
      </Helmet>

      <div className="bg-white min-h-screen pt-24 pb-0">
        <div className="container mx-auto max-w-6xl px-4 mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-black mb-6 uppercase tracking-tight">Comparative Hospitality Audit</h1>
            <p className="text-xl text-gray-700">A rigorous head-to-head analysis of front-desk operations.</p>
          </div>

          <div className="bg-white border-4 border-[#008613] rounded-2xl p-10 md:p-12 shadow-2xl relative overflow-hidden mb-16">
            <div className="absolute top-4 right-4 bg-[#ffea00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center shadow-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Live Deploy
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#008613] mb-8 text-center">Digital Receptionist Pricing</h2>

            <div className="text-center mb-10">
              <div className="text-gray-400 text-2xl line-through mb-2">$199 / Month</div>
              <div className="text-6xl font-black text-[#008613] mb-2">$149</div>
              <div className="text-gray-600">per month</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Unlimited Inbound Calls:</strong> No per-minute charges</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Calendar Integration:</strong> Google, Outlook, Calendly sync</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>CRM Auto-Logging:</strong> Structured records after every call</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>24/7 Uptime:</strong> Always-on front-desk coverage</span>
              </div>
            </div>

            <Link
              to="/signup"
              state={{
                from: `${location.pathname}${location.search}${location.hash}`,
              }}
              className="block w-full"
            >
              <Button className="w-full bg-[#008613] text-white hover:bg-[#ffea00] hover:text-black font-bold text-lg py-6 transition-all">
                Deploy My Receptionist
              </Button>
            </Link>
          </div>

          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
              <div className="bg-gray-50 p-8 text-center border-r border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 font-sans">Human Receptionist</h2>
                <p className="text-sm text-gray-500 mt-2">Traditional Front-Desk Hire</p>
              </div>
              <div className="bg-[#008613] p-8 text-center">
                <h2 className="text-2xl font-bold text-white font-mono uppercase tracking-wide">Celphix Digital</h2>
                <p className="text-sm text-[#ffea00] mt-2 font-mono">Autonomous AI Agent</p>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonData.map((section, secIdx) => (
              <div key={secIdx}>
                <div className="bg-gray-900 text-white p-3 text-center text-sm font-bold uppercase tracking-widest border-y border-gray-700">
                  {section.category}
                </div>
                {section.features.map((feature, featIdx) => (
                  <div key={featIdx} className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100 hover:bg-gray-50 transition-colors relative group">
                    
                    {/* Feature Name Tooltip (Mobile visible, Desktop floating) */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none hidden md:block whitespace-nowrap">
                      {feature.name}
                    </div>

                    <div className="p-5 border-r border-gray-100 md:border-gray-200">
                      <div className="md:hidden text-xs font-bold text-gray-400 uppercase mb-1">{feature.name}</div>
                      <div className="text-gray-700 font-sans text-lg">{feature.human}</div>
                    </div>
                    <div className="p-5 bg-[#008613]/5">
                      <div className="text-[#008613] font-mono text-lg font-medium">{feature.ai}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Economic Impact Footer */}
        <div className="bg-[#ffea00] py-16 px-4 border-t border-[#008613]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">
              The Audit Result: Celphix provides 420% more availability at 3% of the cost of a traditional front-desk hire.
            </h2>
          </div>
        </div>
      </div>
    </DigitalReceptionistLayout>
  );
};

export default DigitalReceptionistPricingPage;