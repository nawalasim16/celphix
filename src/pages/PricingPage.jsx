import React from 'react';
import { Helmet } from 'react-helmet';
import CommandCenterLayout from '@/components/CommandCenterLayout';

const PricingPage = () => {
  const plans = [
    { title: "Tier 01", old: "$249", new: "$199", desc: "Strategic Opener" },
    { title: "Tier 02", old: "$349", new: "$249", desc: "Executive Closer", popular: true },
    { title: "Tier 03", old: "$399", new: "$299", desc: "CSR Specialist" },
    { title: "Tier 04", old: "$499", new: "$399", desc: "Technical Architect" }
  ];

  return (
    <CommandCenterLayout>
      <Helmet>
        <title>Pricing - Command Center | Celphix</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex flex-col py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-black text-center text-[#008613] mb-16 uppercase tracking-tight">Command Center Pricing</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-white p-8 rounded-2xl shadow-lg border-2 hover-glow-card relative ${plan.popular ? 'border-[#ffea00] scale-105 z-10' : 'border-transparent'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ffea00] text-[#008613] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-500 mb-8 font-medium">{plan.desc}</p>
                <div className="text-xl text-gray-400 line-through mb-1">{plan.old}</div>
                <div className="text-5xl font-black text-[#008613]">{plan.new}<span className="text-lg font-normal text-gray-500">/mo</span></div>
                <button className={`w-full mt-8 py-3 rounded-lg font-bold transition-all ${plan.popular ? 'bg-[#ffea00] text-[#008613] hover:bg-[#008613] hover:text-[#ffea00]' : 'bg-gray-100 text-gray-800 hover:bg-[#008613] hover:text-white'}`}>
                  Select Tier
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-xl hover-glow-card overflow-x-auto border border-gray-100">
            <h2 className="text-3xl font-bold text-[#008613] mb-8 text-center">Technical Comparison</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200 text-gray-900">
                  <th className="py-4 font-bold text-lg">Feature</th>
                  <th className="py-4 font-bold text-lg text-center">Tier 01</th>
                  <th className="py-4 font-bold text-lg text-center">Tier 02</th>
                  <th className="py-4 font-bold text-lg text-center">Tier 03</th>
                  <th className="py-4 font-bold text-lg text-center">Tier 04</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 font-medium">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-5">CRM Synchronization</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center text-[#008613] font-bold">Full API</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-5">Round-Trip Latency</td>
                  <td className="text-center">900ms</td>
                  <td className="text-center">800ms</td>
                  <td className="text-center">800ms</td>
                  <td className="text-center text-[#008613] font-bold">600ms</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-5">Context Window</td>
                  <td className="text-center">Standard</td>
                  <td className="text-center">Extended</td>
                  <td className="text-center">Extended</td>
                  <td className="text-center text-[#008613] font-bold">Maximum</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-5">Dedicated Shift</td>
                  <td className="text-center">9 Hours</td>
                  <td className="text-center">9 Hours</td>
                  <td className="text-center">9 Hours</td>
                  <td className="text-center text-[#008613] font-bold">Custom/24-7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CommandCenterLayout>
  );
};

export default PricingPage;