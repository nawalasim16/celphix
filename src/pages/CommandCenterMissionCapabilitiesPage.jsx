import React from 'react';
import { Helmet } from 'react-helmet';
import CommandCenterLayout from '@/components/CommandCenterLayout';
import { Shield, Zap, Target, Activity } from 'lucide-react';

const CommandCenterMissionCapabilitiesPage = () => {
  return (
    <CommandCenterLayout>
      <Helmet>
        <title>Mission Capabilities | Command Center</title>
        <meta name="description" content="Absolute Operational Dominance with Autonomous Voice Infrastructure." />
      </Helmet>

      <div className="bg-[#0a1a0a] min-h-screen pt-20 pb-24 px-4 font-mono">
        <div className="container mx-auto max-w-7xl">
          {/* Section 1 */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-black text-[#ffea00] mb-6 uppercase tracking-tight">
              Absolute Operational Dominance
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Autonomous Voice Infrastructure engineered for high-velocity, high-stakes deployments.
            </p>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="border border-[#008613] bg-black/50 p-8 rounded-sm relative group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#008613]"></div>
              <Shield className="w-12 h-12 text-[#ffea00] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">01. High-Velocity Lead Acquisition</h2>
              <p className="text-gray-400">Outbound operations scaled infinitely. Immediate qualification, real-time CRM syncing, and zero-latency routing.</p>
            </div>
            
            <div className="border border-[#008613] bg-black/50 p-8 rounded-sm relative group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#008613]"></div>
              <Zap className="w-12 h-12 text-[#ffea00] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">02. Enterprise Support Inbound</h2>
              <p className="text-gray-400">CSR operations functioning at 100% capacity 24/7. Complex ticket resolution without human intervention.</p>
            </div>

            <div className="border border-[#008613] bg-black/50 p-8 rounded-sm relative group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#008613]"></div>
              <Activity className="w-12 h-12 text-[#ffea00] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">03. Real-Time Logistics Orchestration</h2>
              <p className="text-gray-400">Automated dispatch, route updates, and delivery confirmations executed precisely as events trigger in your stack.</p>
            </div>

            <div className="border border-[#008613] bg-black/50 p-8 rounded-sm relative group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#008613]"></div>
              <Target className="w-12 h-12 text-[#ffea00] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">04. Autonomous Sales Closers</h2>
              <p className="text-gray-400">Advanced negotiation logic. The ability to handle objections and close deals securely via voice.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-[#274e13]/20 border border-[#008613] p-12 text-center rounded-sm">
            <h2 className="text-3xl font-bold text-white mb-6">The Command Tech-Stack</h2>
            <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
              Powered by our proprietary sub-900ms latency engine. Every interaction feels instantly human, completely eliminating the standard AI delay. Hosted on redundant infrastructure to guarantee 99.99% uptime during your most critical operations.
            </p>
          </div>
        </div>
      </div>
    </CommandCenterLayout>
  );
};

export default CommandCenterMissionCapabilitiesPage;