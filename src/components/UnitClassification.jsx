import React from 'react';
import { Zap, HeartHandshake as Handshake, Headphones as Headset, Wrench } from 'lucide-react';

const UnitClassification = () => {
  const tiers = [
    {
      icon: Zap,
      title: "Tier 01: The Strategic Opener",
      focus: "High-volume cold outreach & Lead qualification",
      trait: "Aggressive persistence and high-speed objection handling",
      rate: "$249 / Agent"
    },
    {
      icon: Handshake,
      title: "Tier 02: The Executive Closer",
      focus: "Appointment setting & High-stakes inbound closing",
      trait: "Persuasive authority, deep-logic processing, and negotiation",
      rate: "$349 / Agent",
      popular: true
    },
    {
      icon: Headset,
      title: "Tier 03: The CSR Specialist",
      focus: "Customer Service & Inbound triage",
      trait: "Infinite patience, empathetic tone, and CRM data accuracy",
      rate: "$399 / Agent"
    },
    {
      icon: Wrench,
      title: "Tier 04: The Technical Architect",
      focus: "Complex troubleshooting & Product support",
      trait: "Deep-knowledge retrieval, step-by-step logic, and API-syncing",
      rate: "$499 / Agent"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center tracking-tight">Unit Classification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div key={idx} className={`relative bg-gray-50 p-8 rounded-xl hover-glow-card transition-all border-2 ${tier.popular ? 'border-[#ffea00] shadow-[0_0_15px_rgba(255,234,0,0.3)]' : 'border-[#008613]'}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#ffea00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <Icon className="w-12 h-12 text-[#ffea00] mb-6" />
                <h3 className="text-xl font-bold text-black mb-6 h-14">{tier.title}</h3>
                <div className="mb-5">
                  <span className="text-[#008613] text-sm font-bold uppercase tracking-wider block mb-2">Focus</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{tier.focus}</p>
                </div>
                <div className="mb-8">
                  <span className="text-[#008613] text-sm font-bold uppercase tracking-wider block mb-2">Trait</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{tier.trait}</p>
                </div>
                <div className="text-3xl font-bold text-black pt-6 border-t border-gray-200">
                  {tier.rate}
                </div>
              </div>
            );
          })}
        </div>
        <div className="max-w-3xl mx-auto border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 font-mono text-sm">
            [NOTE] All Command Center agents are live for a dedicated 9-working-hour shift. Custom 24/7 shifts available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnitClassification;