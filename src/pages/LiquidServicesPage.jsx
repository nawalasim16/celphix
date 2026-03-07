
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LiquidLayout from '@/components/LiquidLayout';
import { CloudLightning, Cpu, Webhook, Radio, Workflow, CalendarClock, SearchCode } from 'lucide-react';

const LiquidServicesPage = () => {
  return (
    <LiquidLayout>
      <Helmet>
        <title>Services | Liquid Agent</title>
        <meta name="description" content="Capabilities and deployment execution strategies for Liquid Agent." />
      </Helmet>

      {/* Hero-like Title */}
      <div className="bg-white pt-20 pb-10 px-4 text-center border-b border-gray-100">
        <h1 className="text-5xl md:text-6xl font-black text-[#0a1a0a] tracking-tight uppercase mb-4">Architecture & Services</h1>
        <p className="text-xl text-gray-600 font-mono max-w-2xl mx-auto">Technical capabilities mapping for scalable voice infrastructure.</p>
      </div>

      {/* Section 1: The Liquid Core */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-black text-[#0a1a0a] uppercase tracking-tight">The Liquid Core</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 hover:border-[#008613] transition-all bg-white relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#008613] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <CloudLightning className="w-10 h-10 text-[#008613] mb-6" />
              <h3 className="text-xl font-bold text-[#0a1a0a] mb-4">On-Demand Instance Summoning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trigger 1 or 10,000 agents simultaneously via a single POST request. The Liquid network dynamically provisions compute clusters on the edge, ensuring sub-700ms latency regardless of load.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-[#008613] transition-all bg-white relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#008613] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <Cpu className="w-10 h-10 text-[#008613] mb-6" />
              <h3 className="text-xl font-bold text-[#0a1a0a] mb-4">Neural Context Injection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Inject custom knowledge bases and real-time variables directly into the agent's prompt during initialization. Agents adapt their reasoning instantly based on caller CRM data.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-[#008613] transition-all bg-white relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#008613] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <Webhook className="w-10 h-10 text-[#008613] mb-6" />
              <h3 className="text-xl font-bold text-[#0a1a0a] mb-4">Event-Driven Automation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native webhook firing mid-conversation or post-call. Trigger Zapier flows, update PostgreSQL databases, or send Slack alerts perfectly synced with voice interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Execution Library */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-black text-[#0a1a0a] uppercase tracking-tight">Execution Library</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-gray-200 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
              <Radio className="w-8 h-8 text-[#008613] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#008613] mb-2">Rapid Outbound Pulse</h3>
                <p className="text-gray-600 text-sm">Upload CSV lists and blast thousands of highly-personalized outreach calls in minutes. Perfect for emergency notifications, flash sales, or high-volume lead reactivation.</p>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
              <Workflow className="w-8 h-8 text-[#008613] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#008613] mb-2">Interactive Intelligent IVR</h3>
                <p className="text-gray-600 text-sm">Replace rigid "Press 1 for Sales" menus with fluid, conversational routing. Agents understand complex multi-intent utterances and route calls precisely.</p>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
              <CalendarClock className="w-8 h-8 text-[#008613] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#008613] mb-2">Seasonal Support Scaling</h3>
                <p className="text-gray-600 text-sm">Instantly absorb massive inbound spikes during holidays or product launches. Zero training time required; just spin up Liquid instances to handle overflow.</p>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
              <SearchCode className="w-8 h-8 text-[#008613] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#008613] mb-2">Data Discovery & Polling</h3>
                <p className="text-gray-600 text-sm">Conduct large-scale market research or political polling autonomously. Agents dynamically adjust questions based on previous answers, extracting rich JSON datasets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Standard Operating Metrics */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-black text-[#0a1a0a] uppercase tracking-tight">Standard Operating Metrics</h2>
          </div>

          <div className="bg-white border border-gray-200 font-mono text-sm shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">
              <div className="p-4 bg-gray-50 text-gray-500 uppercase font-bold tracking-wider">Metric</div>
              <div className="p-4 md:col-span-3 font-bold text-[#008613]">Specification Standard</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-100 hover:bg-gray-50">
              <div className="p-4 text-gray-500 font-bold border-r border-gray-100">TRTL Latency</div>
              <div className="p-4 md:col-span-3 text-[#0a1a0a]">&lt; 700ms Average (Total Round Trip Time)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-100 hover:bg-gray-50">
              <div className="p-4 text-gray-500 font-bold border-r border-gray-100">Voice Library</div>
              <div className="p-4 md:col-span-3 text-[#0a1a0a]">100+ Ultra-Realistic Models + Custom Voice Cloning Support</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-100 hover:bg-gray-50">
              <div className="p-4 text-gray-500 font-bold border-r border-gray-100">Data Persistence</div>
              <div className="p-4 md:col-span-3 text-[#0a1a0a]">Infinite Context Window via dynamic vector embedding retrieval</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 hover:bg-gray-50">
              <div className="p-4 text-gray-500 font-bold border-r border-gray-100">Language Comprehension</div>
              <div className="p-4 md:col-span-3 text-[#0a1a0a]">50+ Native Dialects with automatic live detection switching</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-50 text-center border-t border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1a0a] mb-6 uppercase tracking-tight">
            Deploy Your First Instance in 60 Seconds
          </h2>
          <p className="text-lg text-gray-600 font-mono mb-10">
            Initialize your architecture with a $10 sandbox credit.
          </p>
          <Link to="/signup">
            <button className="bg-[#008613] text-white hover:bg-[#0a1a0a] font-mono font-bold text-lg tracking-wider px-10 py-4 rounded-none transition-all duration-300 shadow-lg">
              GET STARTED
            </button>
          </Link>
        </div>
      </section>
    </LiquidLayout>
  );
};

export default LiquidServicesPage;
