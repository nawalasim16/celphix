import React from 'react';
import { Zap, Brain, Volume2, Database } from 'lucide-react';

const TechnicalSection = () => {
  const specs = [
    {
      icon: Zap,
      title: 'Sub-900ms Latency',
      description: 'The "AI Lag" is dead. Celphix agents respond in real-time, maintaining the natural rhythm and interruptions of a human conversation.',
    },
    {
      icon: Brain,
      title: 'Contextual Intelligence (LLM)',
      description: 'Our agents don\'t follow rigid scripts. They understand intent, navigate complex objections, and stay on-mission until the objective is met.',
    },
    {
      icon: Volume2,
      title: 'Dynamic Pitch & Tone',
      description: 'Zero robotic artifacts. High-fidelity audio that mirrors human emotion, authority, and persuasion to ensure your brand\'s pitch is never compromised.',
    },
    {
      icon: Database,
      title: 'Context Memory',
      description: 'Every interaction is logged and remembered. Celphix agents recall past data mid-call to provide a personalized, high-stakes experience for every contact.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#00231f]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineered Superiority
          </h2>
          <p className="text-lg md:text-xl text-white">
            We didn't just build a voice; we engineered a conversational powerhouse.
          </p>
        </div>

        {/* Central Visual */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-32 h-32 bg-[#ffea00] rounded-full animate-pulse flex items-center justify-center">
              <Volume2 className="w-16 h-16 text-[#00231f]" />
            </div>
            <div className="absolute inset-0 w-32 h-32 bg-[#ffea00] rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-transparent border border-[#008613] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,134,19,0.5)] transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-[#ffea00] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {spec.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {spec.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;