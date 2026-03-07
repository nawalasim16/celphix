import React from 'react';
import { Helmet } from 'react-helmet';
import CommandCenterLayout from '@/components/CommandCenterLayout';
import { Button } from '@/components/ui/button';
import { Zap, HeartHandshake as Handshake, Headphones as Headset, Wrench, Database } from 'lucide-react';

const CommandCenterPricingPage = () => {
  const tiers = [
    {
      icon: Zap,
      name: "Opener",
      oldPrice: "$349",
      price: "$249",
      desc: "High-volume cold outreach & Lead qualification. Built for aggressive persistence and high-speed objection handling.",
      useCases: ["Cold Calling", "Lead Vetting", "List Reactivation"]
    },
    {
      icon: Handshake,
      name: "Closer",
      oldPrice: "$449",
      price: "$349",
      desc: "Appointment setting & High-stakes inbound closing. Persuasive authority, deep-logic processing, and negotiation.",
      useCases: ["Sales Closing", "Contract Negotiation", "Warm Leads"],
      popular: true
    },
    {
      icon: Headset,
      name: "CSR",
      oldPrice: "$499",
      price: "$399",
      desc: "Customer Service & Inbound triage. Infinite patience, empathetic tone, and complete CRM data accuracy.",
      useCases: ["Tier 1 Support", "Account Inquiries", "Refunds/Returns"]
    },
    {
      icon: Wrench,
      name: "Technical",
      oldPrice: "$599",
      price: "$499",
      desc: "Complex troubleshooting & Product support. Deep-knowledge retrieval, step-by-step logic, and API-syncing capabilities.",
      useCases: ["Tier 2 Support", "Onboarding", "Product Walkthroughs"]
    }
  ];

  const featureCategories = [
    {
      name: "Neural Performance & Latency",
      features: [
        { name: "Voice Latency (TRTL)", desc: "Total round trip time.", tiers: ["Sub-900ms", "Sub-900ms", "Sub-800ms", "Sub-800ms"] },
        { name: "LLM Processing Brain", desc: "Base model used.", tiers: ["Standard", "Advanced", "Advanced", "Custom Fine-Tuned"] },
        { name: "Voice Fidelity", desc: "Audio generation quality.", tiers: ["24kHz", "44.1kHz", "44.1kHz", "44.1kHz Neural"] },
        { name: "Concurrent Call Volume", desc: "Simultaneous calls allowed.", tiers: ["Up to 100", "Up to 500", "Unlimited", "Unlimited Enterprise"] },
        { name: "Interruption Handling", desc: "Agent pauses when interrupted.", tiers: ["Basic", "Advanced", "Advanced", "Human-Parity"] }
      ]
    },
    {
      name: "Intelligence & Logic Layer",
      features: [
        { name: "Objection Navigation", desc: "Handling conversational friction.", tiers: ["Scripted", "Dynamic", "Dynamic", "Deep Reasoning"] },
        { name: "Context Memory", desc: "Remembering past data.", tiers: ["Single-Call", "Multi-Call", "Multi-Call", "Infinite Persistent"] },
        { name: "Sentiment Analysis", desc: "Reading user emotions.", tiers: ["No", "Yes", "Yes", "Advanced Analytics"] },
        { name: "Knowledge Base Limit", desc: "Amount of training data.", tiers: ["10 Pages", "100 Pages", "Unlimited", "Unlimited + Live Web"] },
        { name: "Multi-Language Support", desc: "Language capabilities.", tiers: ["English", "English + Spanish", "50+ Languages", "All Supported"] }
      ]
    },
    {
      name: "Operational Availability",
      features: [
        { name: "Uptime SLA", desc: "Guaranteed uptime.", tiers: ["99.9%", "99.99%", "99.99%", "99.999%"] },
        { name: "Working Hours", desc: "Shift duration.", tiers: ["9-Hour Shift", "9-Hour Shift", "24/7", "24/7 Redundant"] },
        { name: "Live Dashboard", desc: "Real-time monitoring.", tiers: ["Basic", "Advanced", "Advanced", "White-Label"] },
        { name: "Call Recording", desc: "Audio storage.", tiers: ["30 Days", "90 Days", "1 Year", "Infinite Secure"] },
        { name: "Transcription Accuracy", desc: "Speech-to-text exactness.", tiers: ["95%", "99%", "99%", "99.9% Specialized"] }
      ]
    },
    {
      name: "Data Integration & CRM",
      features: [
        { name: "CRM Syncing", desc: "Automatic data entry.", tiers: ["Basic Zapier", "Native Integrations", "Native Integrations", "Custom API Builds"] },
        { name: "Live Calendar Booking", desc: "Direct appointment setting.", tiers: ["No", "Yes", "Yes", "Complex Routing"] },
        { name: "Post-Call Webhooks", desc: "Triggering external events.", tiers: ["Standard", "Advanced Payload", "Advanced Payload", "Real-Time Streaming"] },
        { name: "Entity Extraction", desc: "Pulling specific data (names, emails).", tiers: ["Basic", "Advanced", "Advanced", "Custom Schema"] },
        { name: "Live Warm Transfers", desc: "Passing to human staff.", tiers: ["No", "Yes", "Yes", "Skill-Based Routing"] }
      ]
    },
    {
      name: "Advanced Actions & Compliance",
      features: [
        { name: "PCI/HIPAA Compliance", desc: "Security standards.", tiers: ["Standard", "Standard", "HIPAA Ready", "PCI & HIPAA Certified"] },
        { name: "Payment Processing", desc: "Taking card details.", tiers: ["No", "No", "Secure Link", "Live Over Phone"] },
        { name: "SMS Follow-Ups", desc: "Texting after calls.", tiers: ["No", "Basic", "Advanced", "Omnichannel"] },
        { name: "Dedicated Engineer", desc: "Technical support tier.", tiers: ["Email", "Priority Email", "Slack Channel", "24/7 On-Call"] },
        { name: "Custom Voice Cloning", desc: "Using your own staff's voice.", tiers: ["No", "No", "Yes ($)", "Included"] }
      ]
    }
  ];

  return (
    <CommandCenterLayout>
      <Helmet>
        <title>Pricing & Comparison | Command Center</title>
        <meta name="description" content="Full-spectrum operational comparison and deployment pricing." />
      </Helmet>

      <div className="bg-white min-h-screen pt-24 pb-24 px-4 font-sans relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-5xl font-black text-[#008613] mb-4 uppercase tracking-tight">Deployment Tiers</h1>
              <p className="text-xl text-gray-700 font-sans">Select your operational capacity.</p>
            </div>
            <a href="mailto:solutions@celphix.com?subject=Audit%20Request%20-%20Command%20Center%20Pricing&body=Hello%20Celphix%20team,%0A%0AI%20would%20like%20to%20request%20an%20audit%20for%20Command%20Center.%0A%0AThank%20you.">
              <Button size="lg" className="bg-[#ffea00] text-black hover:bg-[#008613] hover:text-white font-bold text-lg px-8 py-6 h-auto transition-colors duration-300">
                Request Audit
              </Button>
            </a>
          </div>

          {/* Pricing Product Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
            {tiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <div key={idx} className={`relative flex flex-col min-h-[24rem] bg-gray-50 border-2 rounded-xl p-8 shadow-sm transition-all hover:shadow-md ${tier.popular ? 'border-[#ffea00]' : 'border-gray-200'}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#ffea00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Most Popular
                    </div>
                  )}
                  <Icon className="w-10 h-10 text-[#008613] mb-4 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                  
                  <div className="mb-4 font-mono">
                    <span className="text-gray-400 line-through text-lg mr-2">{tier.oldPrice}</span>
                    <span className="text-3xl font-black text-black">{tier.price}</span>
                    <span className="text-gray-500 text-sm">/mo</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-8 flex-grow leading-relaxed font-sans">
                    {tier.desc}
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6 mt-auto">
                    <p className="text-xs font-bold text-[#008613] uppercase mb-3 tracking-wider">Main Usecases</p>
                    <ul className="text-sm text-gray-600 space-y-2 font-medium font-sans">
                      {tier.useCases.map((useCase, i) => (
                        <li key={i}>• {useCase}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CRM Section */}
          <div className="bg-white border-2 border-[#ffea00] rounded-xl p-10 mb-20 shadow-[0_0_20px_rgba(255,234,0,0.15)] flex flex-col md:flex-row items-center gap-8">
            <div className="bg-[#008613]/10 p-6 rounded-full flex-shrink-0">
              <Database className="w-16 h-16 text-[#008613]" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl font-black text-[#008613] mb-3 uppercase tracking-tight">CRM</h2>
              <p className="text-gray-700 text-lg font-sans max-w-2xl">
                Unify your operational data natively. Equip your human teams and autonomous agents with a seamlessly integrated command interface tailored for ultimate execution.
              </p>
            </div>
            <div className="flex-shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8 mt-6 md:mt-0 w-full md:w-auto">
              <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Platform Access</div>
              <div className="font-mono">
                <span className="text-gray-400 line-through text-xl mr-3">~~$99~~</span>
                <span className="text-4xl font-black text-black">$49</span>
              </div>
              <div className="text-gray-600 font-sans mt-1">per seat / month</div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black mb-8 text-center border-b border-gray-200 pb-4">Full-Spectrum Operational Comparison</h2>
            
            <div className="overflow-x-auto border border-gray-200 bg-white/40 backdrop-blur-xl rounded-xl shadow-lg relative">
              <table className="w-full text-left border-collapse min-w-[800px] font-sans">
                <thead className="sticky top-0 bg-white/95 backdrop-blur z-20 border-b border-gray-200 shadow-sm">
                  <tr>
                    <th className="p-6 text-black font-bold w-1/3 text-lg">Feature Specification</th>
                    <th className="p-6 text-[#008613] text-center text-xl">Opener</th>
                    <th className="p-6 text-[#008613] text-center text-xl">Closer</th>
                    <th className="p-6 text-[#008613] text-center text-xl">CSR</th>
                    <th className="p-6 text-[#008613] text-center text-xl">Technical</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {featureCategories.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      <tr>
                        <td colSpan="5" className="bg-gray-100 p-4 font-bold text-[#008613] uppercase tracking-wider text-sm border-b border-gray-200">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, featIdx) => (
                        <tr key={featIdx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors group relative">
                          <td className="p-4 font-medium pl-6 relative text-black">
                            {feature.name}
                            <div className="absolute left-6 top-full mt-1 w-64 p-3 bg-white border border-[#008613] text-black shadow-xl text-xs z-30 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity rounded font-sans">
                              {feature.desc}
                            </div>
                          </td>
                          {feature.tiers.map((val, valIdx) => (
                            <td key={valIdx} className="p-4 text-center text-sm font-medium">{val}</td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </CommandCenterLayout>
  );
};

export default CommandCenterPricingPage;