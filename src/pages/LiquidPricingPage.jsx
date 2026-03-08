
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LiquidLayout from '@/components/LiquidLayout';

const LiquidPricingPage = () => {
  const [callsPerDay, setCallsPerDay] = useState(120);
  const [avgDuration, setAvgDuration] = useState(3);

  const CELPHIX_RATE_PER_MIN = 0.05;
  const COMPETITOR_RATE_PER_MIN = 0.15;

  const totalMinutesPerDay = Number(callsPerDay) * Number(avgDuration);
  const celphixCostPerDay = totalMinutesPerDay * CELPHIX_RATE_PER_MIN;
  const competitorCostPerDay = totalMinutesPerDay * COMPETITOR_RATE_PER_MIN;
  const savingsPerDay = competitorCostPerDay - celphixCostPerDay;

  const faqs = [
    { q: "Are there any setup fees?", a: "No. You only pay for the exact minutes consumed by active voice instances." },
    { q: "How is billing calculated?", a: "Billing is strictly per-second after the first 15 seconds. There is no rounding up to the nearest minute." },
    { q: "Do I pay for ringing or voicemails?", a: "No. You are only billed when the agent actively connects and processes audio." },
    { q: "Is volume discounting available?", a: "Yes. For usage exceeding 100,000 minutes per month, enterprise wholesale rates automatically apply." }
  ];

  return (
    <LiquidLayout>
      <Helmet>
        <title>Pricing | Liquid Agent</title>
        <meta name="description" content="Pay for performance. $0.05/minute usage-based billing." />
      </Helmet>

      {/* Section 1: Hero & Pricing */}
      <section className="bg-[#0a1a0a] text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#008613] rounded-full blur-[150px] opacity-20 pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Pay For Performance. <span className="text-[#008613]">Period.</span></h1>
          <p className="text-xl text-gray-400 font-mono mb-16">Zero monthly overhead. Zero wasted capacity. Perfect elasticity.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-[#008613]/30 p-8 backdrop-blur-sm">
              <h3 className="text-[#ffea00] font-mono text-sm tracking-widest uppercase mb-2">Platform Access Fee</h3>
              <div className="text-5xl font-black text-white">$0<span className="text-xl text-gray-500 font-normal">/Month</span></div>
            </div>
            <div className="bg-[#008613] p-8 border border-[#008613] shadow-[0_0_30px_rgba(0,134,19,0.3)]">
              <h3 className="text-black font-mono text-sm tracking-widest uppercase mb-2 font-bold">Active Airtime</h3>
              <div className="text-5xl font-black text-white">$0.05<span className="text-xl text-white/70 font-normal font-mono">/Min</span></div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500 font-mono uppercase tracking-widest">Calculated via strict per-second billing</p>
        </div>
      </section>

      {/* Section 2: Transparency Matrix */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-[#0a1a0a] mb-4 border-b border-[#008613] pb-2 inline-block">What's Included for Free?</h3>
              <ul className="space-y-3 text-sm text-gray-600 mt-6 font-mono">
                <li>✓ API Dashboard Access</li>
                <li>✓ Unlimited Knowledge Bases</li>
                <li>✓ Unlimited Script Templates</li>
                <li>✓ Webhook Configurations</li>
                <li>✓ Dashboard Analytics</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-[#0a1a0a] mb-4 border-b border-[#008613] pb-2 inline-block">When Do You Pay?</h3>
              <ul className="space-y-3 text-sm text-gray-600 mt-6 font-mono">
                <li>✓ Call connected to human</li>
                <li>✓ Call connected to voicemail (if logic triggers)</li>
                <li>✓ Active inbound hold queue</li>
                <li className="text-gray-400 mt-4 pt-4 border-t border-gray-200">✗ Unanswered dials (Free)</li>
                <li className="text-gray-400">✗ Failed connections (Free)</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-8 bg-[#0a1a0a] text-white">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-[#008613] pb-2 inline-block">High-Volume Scaling</h3>
              <p className="text-sm text-gray-400 font-mono mt-6 leading-relaxed">
                Processing over 100,000 minutes per month? Our enterprise tier automatically engages, dropping base rates to $0.035/min. Contact solutions architecture for custom SLAs and wholesale agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Liquid vs. Industry Calculator */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-[#0a1a0a] mb-2 text-center uppercase tracking-tight">Economic Impact Calculator</h2>
          <p className="text-center text-gray-600 mb-12 font-mono">Compare Liquid usage vs. standard seat licenses.</p>

          <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-lg">
            <div className="mb-10">
              <label className="block text-sm font-bold text-[#0a1a0a] mb-4 font-mono">NUMBER OF CALLS PER DAY: <span className="text-[#008613]">{callsPerDay}</span></label>
              <input 
                type="range" 
                min="10" 
                max="2000" 
                step="10"
                value={callsPerDay} 
                onChange={(e) => setCallsPerDay(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#008613]"
              />
            </div>
            <div className="mb-12">
              <label className="block text-sm font-bold text-[#0a1a0a] mb-4 font-mono">AVERAGE DURATION (MINUTES): <span className="text-[#008613]">{avgDuration}</span></label>
              <input 
                type="range" 
                min="1" 
                max="15" 
                value={avgDuration} 
                onChange={(e) => setAvgDuration(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#008613]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0a1a0a] p-6 rounded-lg text-white font-mono">
              <div className="text-center md:text-left">
                <div className="text-xs text-gray-500 mb-1">COMPETITOR COST / DAY</div>
                <div className="text-2xl font-bold text-gray-300">${competitorCostPerDay.toFixed(2)}</div>
              </div>
              <div className="text-center md:border-l md:border-r border-gray-700 md:px-4">
                <div className="text-xs text-[#008613] mb-1 font-bold tracking-wider">CELPHIX COST / DAY</div>
                <div className="text-3xl font-black text-white">${celphixCostPerDay.toFixed(2)}</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-xs text-[#ffea00] mb-1 font-bold tracking-wider">SAVINGS / DAY</div>
                <div className="text-3xl font-black text-[#ffea00]">${savingsPerDay.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Billing & Security FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-[#0a1a0a] mb-12 text-center uppercase tracking-tight">Billing & Logic FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 p-6 hover:border-[#008613]/50 transition-colors bg-gray-50">
                <h4 className="text-lg font-bold text-[#0a1a0a] mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-mono">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#0a1a0a] text-center border-t border-[#008613]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">
            Activate Your Metered Account Now
          </h2>
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

export default LiquidPricingPage;
