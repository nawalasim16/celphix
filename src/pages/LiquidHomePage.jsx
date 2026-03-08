
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LiquidLayout from '@/components/LiquidLayout';
import { CloudLightning, Cpu, Webhook, Radio, Workflow, CalendarClock, SearchCode } from 'lucide-react';

const LiquidHomePage = () => {
  return (
    <LiquidLayout>
      <Helmet>
        <title>Liquid Agent | Voice Intelligence on Demand</title>
        <meta name="description" content="Deploy elite voice agents in seconds. Pay only for what you use." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-white text-[#0a1a0a] px-4 py-20 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#008613_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Liquid Agent: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008613] to-[#0a1a0a]">Voice Intelligence</span> <br/>
            on Demand
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
            Deploy elite voice agents in seconds. Pay only for what you use. Zero baseline commitments. Complete architectural freedom.
          </p>
          <div className="flex justify-center">
            <Link to="/signup">
              <button className="bg-[#008613] text-white hover:bg-[#ffea00] hover:text-black font-mono font-bold text-lg tracking-wider px-12 py-5 rounded-none transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,134,19,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(255,234,0,0.5)] hover:-translate-y-1">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: The Liquid Core */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#274e13] mb-4 uppercase tracking-tight">The Liquid Core</h2>
            <p className="text-lg text-gray-600 font-sans">Infrastructure designed for fluid scalability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-200 shadow-xl hover:border-[#008613] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#008613]/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <CloudLightning className="w-12 h-12 text-[#008613] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-[#274e13] mb-4 relative z-10">On-Demand Instance Summoning</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Trigger 1 or 10,000 agents simultaneously via a single POST request. The Liquid network dynamically provisions compute clusters on the edge, ensuring sub-700ms latency regardless of load.
              </p>
            </div>

            <div className="bg-white p-10 border border-gray-200 shadow-xl hover:border-[#008613] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#008613]/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <Cpu className="w-12 h-12 text-[#008613] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-[#274e13] mb-4 relative z-10">Neural Context Injection</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Inject custom knowledge bases and real-time variables directly into the agent's prompt during initialization. Agents adapt their reasoning instantly based on caller CRM data.
              </p>
            </div>

            <div className="bg-white p-10 border border-gray-200 shadow-xl hover:border-[#008613] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#008613]/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <Webhook className="w-12 h-12 text-[#008613] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-[#274e13] mb-4 relative z-10">Event-Driven Automation</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Native webhook firing mid-conversation or post-call. Trigger Zapier flows, update PostgreSQL databases, or send Slack alerts perfectly synced with voice interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Execution Library */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-[#274e13] mb-4 uppercase tracking-tight">Execution Library</h2>
            <p className="text-lg text-gray-600 font-sans">Deploy modular capabilities instantly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#0a1a0a] text-white border-l-4 border-[#008613] shadow-2xl relative">
              <Radio className="w-10 h-10 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-[#008613] mb-3">Rapid Outbound Pulse</h3>
              <p className="text-gray-300">
                Upload CSV lists and blast thousands of highly-personalized outreach calls in minutes. Perfect for emergency notifications, flash sales, or high-volume lead reactivation.
              </p>
            </div>

            <div className="p-8 bg-[#0a1a0a] text-white border-l-4 border-[#008613] shadow-2xl relative">
              <Workflow className="w-10 h-10 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-[#008613] mb-3">Interactive Intelligent IVR</h3>
              <p className="text-gray-300">
                Replace rigid "Press 1 for Sales" menus with fluid, conversational routing. Agents understand complex multi-intent utterances and route calls precisely.
              </p>
            </div>

            <div className="p-8 bg-[#0a1a0a] text-white border-l-4 border-[#008613] shadow-2xl relative">
              <CalendarClock className="w-10 h-10 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-[#008613] mb-3">Seasonal Support Scaling</h3>
              <p className="text-gray-300">
                Instantly absorb massive inbound spikes during holidays or product launches. Zero training time required; just spin up Liquid instances to handle overflow.
              </p>
            </div>

            <div className="p-8 bg-[#0a1a0a] text-white border-l-4 border-[#008613] shadow-2xl relative">
              <SearchCode className="w-10 h-10 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-[#008613] mb-3">Data Discovery & Polling</h3>
              <p className="text-gray-300">
                Conduct large-scale market research or political polling autonomously. Agents dynamically adjust questions based on previous answers, extracting rich JSON datasets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Standard Operating Metrics */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#274e13] uppercase tracking-tight">Standard Operating Metrics</h2>
          </div>

          <div className="bg-white border border-gray-200 shadow-xl overflow-hidden font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="text-sm text-gray-500 mb-1">TRTL Latency</div>
                <div className="text-xl font-bold text-[#008613]">&lt; 700ms Average</div>
              </div>
              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="text-sm text-gray-500 mb-1">Voice Library</div>
                <div className="text-xl font-bold text-[#008613]">100+ Ultra-Realistic Models</div>
              </div>
              <div className="p-6 hover:bg-gray-50 transition-colors border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Data Persistence</div>
                <div className="text-xl font-bold text-[#008613]">Infinite Context Window</div>
              </div>
              <div className="p-6 hover:bg-gray-50 transition-colors border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Language Comprehension</div>
                <div className="text-xl font-bold text-[#008613]">50+ Native Dialects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-[#0a1a0a] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#008613]/20 to-transparent opacity-50" />
        <div className="relative z-10 container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">
            Deploy Your First Instance in 60 Seconds
          </h2>
          <p className="text-xl text-gray-400 font-sans mb-12">
            No credit card required for sandbox testing.
          </p>
          <Link to="/signup">
            <button className="bg-[#008613] text-white hover:bg-[#ffea00] hover:text-black font-mono font-bold text-lg tracking-wider px-12 py-5 rounded-none transition-all duration-300">
              GET STARTED
            </button>
          </Link>
        </div>
      </section>
    </LiquidLayout>
  );
};

export default LiquidHomePage;
