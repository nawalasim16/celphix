import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import CommandCenterLayout from '@/components/CommandCenterLayout';
import { Target, Server, Activity, Shield, Zap, BrainCircuit, Webhook, Mic } from 'lucide-react';

const CommandCenterServicesPage = () => {
  return (
    <CommandCenterLayout>
      <Helmet>
        <title>Services | Command Center</title>
        <meta name="description" content="Core Service Verticals and Technical Stack." />
      </Helmet>

      <div className="bg-white min-h-screen pt-24 pb-24 px-4 font-sans">
        <div className="container mx-auto max-w-7xl">
          
          {/* Section 1 */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-black text-black mb-6 uppercase tracking-tight drop-shadow-sm font-sans">
              Absolute Operational Dominance
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto font-medium">
              Powered by our proprietary Neural Logic Layer. We don't just execute calls; we dominate the operational landscape with high-fidelity, autonomous precision.
            </p>
            <div className="mt-10">
              <a href="mailto:solutions@celphix.com?subject=Audit%20Request%20-%20Command%20Center%20Services&body=Hello%20Celphix%20team,%0A%0AI%20would%20like%20to%20request%20an%20audit%20for%20Command%20Center.%0A%0AThank%20you.">
                <Button size="lg" className="bg-[#ffea00] text-black hover:bg-[#008613] hover:text-white font-bold text-lg px-12 py-6 h-auto transition-colors duration-300">
                  Request Audit
                </Button>
              </a>
            </div>
          </div>

          {/* Section 2: Core Service Verticals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-gray-50 border border-gray-200 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Target className="w-12 h-12 text-[#008613] mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold text-black mb-4">High-Velocity Lead Acquisition</h2>
              <p className="text-[#008613] text-sm mb-4 uppercase tracking-widest font-mono">[Logic & Execution]</p>
              <p className="text-gray-700 leading-relaxed font-sans">
                Aggressive outbound dialing at infinite scale. The agent instantly qualifies prospects, navigates "not interested" objections, and books directly into your calendar. Integrates natively with your CRM to log every metric.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Shield className="w-12 h-12 text-[#008613] mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold text-black mb-4">Enterprise Support Inbound</h2>
              <p className="text-[#008613] text-sm mb-4 uppercase tracking-widest font-mono">[Logic & Execution]</p>
              <p className="text-gray-700 leading-relaxed font-sans">
                Zero wait times. Agents digest complex customer histories instantly, resolving tier-1 and tier-2 tickets autonomously. Empathetic tone matching ensures high customer satisfaction scores and perfect retention.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Activity className="w-12 h-12 text-[#008613] mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold text-black mb-4">Real-Time Logistics Orchestration</h2>
              <p className="text-[#008613] text-sm mb-4 uppercase tracking-widest font-mono">[Logic & Execution]</p>
              <p className="text-gray-700 leading-relaxed font-sans">
                Automated dispatching and route updates triggered perfectly by webhook events. The agent communicates with drivers and clients simultaneously, eliminating the need for a human dispatch team entirely.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Server className="w-12 h-12 text-[#008613] mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold text-black mb-4">Autonomous Sales Closers</h2>
              <p className="text-[#008613] text-sm mb-4 uppercase tracking-widest font-mono">[Logic & Execution]</p>
              <p className="text-gray-700 leading-relaxed font-sans">
                Deep-logic processing designed for high-stakes negotiation. Equipped with comprehensive product knowledge bases, these agents handle pricing objections, secure verbal commitments, and trigger payment links.
              </p>
            </div>
          </div>

          {/* Section 3: Tech Stack */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black uppercase tracking-tight">Command Tech-Stack</h2>
            <p className="text-gray-600 mt-4 font-sans">The technological infrastructure driving sub-second precision.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-md hover:border-[#008613] transition-colors">
              <Zap className="w-10 h-10 text-[#008613] mb-4" />
              <h3 className="text-2xl font-bold text-black mb-3">Sub-900ms Latency Engine</h3>
              <p className="text-gray-700 mb-4 font-sans">Eliminates conversational pauses. Powered by distributed edge-compute clusters for instantaneous processing and response generation, ensuring natural human parity in dialogue.</p>
              <ul className="text-sm text-gray-600 space-y-2 font-medium font-sans">
                <li>• Real-time voice activity detection (VAD)</li>
                <li>• Localized edge server deployment</li>
                <li>• Interruption handling in &lt;100ms</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-md hover:border-[#008613] transition-colors">
              <BrainCircuit className="w-10 h-10 text-[#008613] mb-4" />
              <h3 className="text-2xl font-bold text-black mb-3">Multi-Model "Brain" Switching</h3>
              <p className="text-gray-700 mb-4 font-sans">Dynamically routes complex queries to stronger Large Language Models mid-conversation without dropping speed. Cost-effective for standard queries, deeply intelligent for complex friction.</p>
              <ul className="text-sm text-gray-600 space-y-2 font-medium font-sans">
                <li>• Live sentiment & intent categorization</li>
                <li>• Fallback redundancy mapping</li>
                <li>• Infinite context persistence</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-md hover:border-[#008613] transition-colors">
              <Webhook className="w-10 h-10 text-[#008613] mb-4" />
              <h3 className="text-2xl font-bold text-black mb-3">Native Webhook & API Injection</h3>
              <p className="text-gray-700 mb-4 font-sans">Push and pull capabilities directly into your existing infrastructure. Query live databases mid-call, or trigger post-call automations natively across thousands of tools.</p>
              <ul className="text-sm text-gray-600 space-y-2 font-medium font-sans">
                <li>• Real-time CRM bi-directional sync</li>
                <li>• Zapier, Make, and custom REST APIs</li>
                <li>• Live secure payment processing links</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-md hover:border-[#008613] transition-colors">
              <Mic className="w-10 h-10 text-[#008613] mb-4" />
              <h3 className="text-2xl font-bold text-black mb-3">44.1kHz High-Fidelity Voice Synthesis</h3>
              <p className="text-gray-700 mb-4 font-sans">Hyper-realistic audio output including natural breaths, varying intonation, and emotional mirroring. Indistinguishable from top-tier human talent.</p>
              <ul className="text-sm text-gray-600 space-y-2 font-medium font-sans">
                <li>• Proprietary voice cloning capabilities</li>
                <li>• Pitch and cadence shifting</li>
                <li>• Complete removal of robotic artifacts</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </CommandCenterLayout>
  );
};

export default CommandCenterServicesPage;