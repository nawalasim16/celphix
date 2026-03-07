import React from 'react';
import { Helmet } from 'react-helmet';
import { Zap, DollarSign, Code, Smartphone, TrendingUp, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CommandCenterLayout from '@/components/CommandCenterLayout';
import LiquidAgentHeader from '@/components/LiquidAgentHeader';
import LiquidAgentFooter from '@/components/LiquidAgentFooter';

const LiquidAgentPage = () => {
  return (
    <CommandCenterLayout customHeader={<LiquidAgentHeader />} customFooter={<LiquidAgentFooter />}>
      <Helmet>
        <title>Liquid Agent | Celphix</title>
        <meta name="description" content="Performance on demand. Flexible pay-as-you-go AI voice agent at $0.05/min. No contracts, no commitments." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00231f] via-[#008613] to-[#00231f] animate-gradient-shift">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffea00] rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008613] rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tight">
            Performance on Demand
          </h1>
          <p className="text-2xl md:text-4xl text-[#ffea00] mb-8 font-light tracking-wide">
            $0.05 / minute. No contracts. No minimums.
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Flexible pay-as-you-go AI voice agent infrastructure. Scale up instantly, scale down whenever. Pay only for what you use. Perfect for dynamic campaigns, seasonal spikes, or experimental outreach.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="bg-[#ffea00] text-[#008613] hover:bg-white hover:text-[#008613] font-bold text-lg px-10 py-6">
              Start Using Now
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#008613] font-bold text-lg px-10 py-6">
              View API Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2c - Developer Manifesto */}
      <section className="py-24 px-4 bg-[#00231f]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffea00] mb-12">
            Scale Without Friction.
          </h2>
          <div className="text-lg text-white/80 leading-relaxed space-y-6">
            <p>
              The Liquid Agent was built for developers who need raw power without the overhead. No multi-month contracts. No "minimum seat requirements." No sales calls to adjust your plan.
            </p>
            <p>
              You spin up an agent via API. You run your campaign. You get billed only for the minutes used. If you need 10,000 agents tomorrow, you get 10,000 agents. If you need zero next week, you pay zero.
            </p>
            <p className="font-semibold text-[#ffea00] text-xl">
              This is elastic AI infrastructure—designed for speed, precision, and total operational freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3c - Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-white relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #008613 0px, #008613 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #008613 0px, #008613 1px, transparent 1px, transparent 40px)' }}></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#008613] mb-16 text-center">The Liquid Tier</h2>
          
          <div className="bg-white border-4 border-[#008613] rounded-2xl p-12 shadow-2xl">
            <div className="text-center mb-10">
              <div className="text-gray-400 text-2xl line-through mb-2">$0.10 / minute</div>
              <div className="text-7xl font-black text-[#008613] mb-4">
                $0.05<span className="text-3xl text-gray-500"> / min</span>
              </div>
              <div className="inline-block bg-[#ffea00] text-[#008613] font-bold text-sm px-4 py-2 rounded-full uppercase tracking-wider mb-8">
                Live Status: READY
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <DollarSign className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#008613] mb-1">$0.00 Monthly Fee</h4>
                  <p className="text-sm text-gray-600">Only pay for active usage</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Zap className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#008613] mb-1">$0.00 Setup</h4>
                  <p className="text-sm text-gray-600">Instant API access</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Code className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#008613] mb-1">Full REST API</h4>
                  <p className="text-sm text-gray-600">Complete programmatic control</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#008613] mb-1">Infinite Scalability</h4>
                  <p className="text-sm text-gray-600">1 to 100,000 agents instantly</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg md:col-span-2">
                <Activity className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#008613] mb-1">Real-Time Analytics Dashboard</h4>
                  <p className="text-sm text-gray-600">Live call metrics, cost tracking, sentiment analysis</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#008613] text-white hover:bg-[#ffea00] hover:text-[#008613] font-bold text-lg py-6 transition-all">
              Get API Access Now
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4c - Terminal-Style Execution */}
      <section className="py-24 px-4 bg-[#0a1a0a]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Terminal-Style Execution</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Code Editor Window */}
            <div className="bg-[#1a1a1a] border-2 border-[#008613] rounded-xl overflow-hidden">
              <div className="bg-[#008613] px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-white text-sm font-mono">agent_deploy.py</span>
              </div>
              <div className="p-6 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre className="whitespace-pre-wrap">
<span className="text-pink-400">import</span> <span className="text-white">celphix</span>

<span className="text-gray-500"># Initialize Liquid Agent</span>
agent = celphix.<span className="text-[#ffea00]">LiquidAgent</span>(<br />{'  '}api_key=<span className="text-green-400">"YOUR_API_KEY"</span><br />)

<span className="text-gray-500"># Deploy campaign</span>
campaign = agent.<span className="text-[#ffea00]">create_campaign</span>(<br />{'  '}leads=<span className="text-green-400">"./leads.csv"</span>,<br />{'  '}script=<span className="text-green-400">"sales_pitch_v2"</span>,<br />{'  '}concurrent_calls=<span className="text-blue-400">500</span><br />)

<span className="text-pink-400">print</span>(<span className="text-green-400">f"Campaign live: </span>{'{'}campaign.id{'}'}<span className="text-green-400">"</span>)
                </pre>
              </div>
            </div>

            {/* Status Monitor Window */}
            <div className="bg-[#1a1a1a] border-2 border-[#ffea00] rounded-xl overflow-hidden">
              <div className="bg-[#ffea00] px-4 py-2 flex items-center">
                <Activity className="w-4 h-4 text-[#008613] mr-2 animate-pulse" />
                <span className="text-[#008613] text-sm font-mono font-bold">LIVE STATUS MONITOR</span>
              </div>
              <div className="p-6 font-mono text-sm text-white space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Agents:</span>
                  <span className="text-[#ffea00] font-bold">487</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Calls Completed:</span>
                  <span className="text-[#ffea00] font-bold">12,384</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Duration:</span>
                  <span className="text-[#ffea00] font-bold">3m 42s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost (Today):</span>
                  <span className="text-[#ffea00] font-bold">$2,297.12</span>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-500 mb-2">SENTIMENT ANALYSIS</div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-4/5"></div>
                  </div>
                  <div className="text-xs text-[#008613] mt-1">82% Positive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Execution Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#008613] rounded-full flex items-center justify-center text-white font-bold text-2xl">1</div>
              <h3 className="text-white font-bold mb-2">API Call</h3>
              <p className="text-gray-400 text-sm">Single endpoint triggers deployment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#008613] rounded-full flex items-center justify-center text-white font-bold text-2xl">2</div>
              <h3 className="text-white font-bold mb-2">Instant Scaling</h3>
              <p className="text-gray-400 text-sm">Agents spin up in milliseconds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#008613] rounded-full flex items-center justify-center text-white font-bold text-2xl">3</div>
              <h3 className="text-white font-bold mb-2">Live Execution</h3>
              <p className="text-gray-400 text-sm">Real-time call processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#008613] rounded-full flex items-center justify-center text-white font-bold text-2xl">4</div>
              <h3 className="text-white font-bold mb-2">Auto Billing</h3>
              <p className="text-gray-400 text-sm">Charged only for active minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5c - Use Case Gallery */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#008613] mb-16 text-center">Use Case Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-[#008613] rounded-xl p-8 hover-glow-card relative bg-white shadow-xl">
              <div className="absolute -top-4 left-6 bg-[#ffea00] text-[#008613] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                API-Driven
              </div>
              <Smartphone className="w-12 h-12 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-[#008613] mb-4">Flash Sales Campaigns</h3>
              <p className="text-gray-700 leading-relaxed">
                Launch a 10,000-call outbound blitz for a limited-time offer. Scale up instantly, execute in hours, scale back down when the sale ends. Zero waste.
              </p>
            </div>

            <div className="border-4 border-[#008613] rounded-xl p-8 hover-glow-card relative bg-white shadow-xl">
              <div className="absolute -top-4 left-6 bg-[#ffea00] text-[#008613] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                API-Driven
              </div>
              <Code className="w-12 h-12 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-[#008613] mb-4">Developer Experimentation</h3>
              <p className="text-gray-700 leading-relaxed">
                Test new scripts, voice tones, or lead qualification logic without committing to a monthly plan. Run 100 test calls for $5 and iterate instantly.
              </p>
            </div>

            <div className="border-4 border-[#008613] rounded-xl p-8 hover-glow-card relative bg-white shadow-xl">
              <div className="absolute -top-4 left-6 bg-[#ffea00] text-[#008613] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                API-Driven
              </div>
              <TrendingUp className="w-12 h-12 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-[#008613] mb-4">Seasonal Overflow</h3>
              <p className="text-gray-700 leading-relaxed">
                Handle Black Friday, tax season, or holiday spikes without hiring temporary staff. Pay only for the surge, then return to baseline effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </CommandCenterLayout>
  );
};

export default LiquidAgentPage;