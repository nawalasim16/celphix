import React from 'react';
import { Bot, Zap, Clock, Shield, BarChart3, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call or lead again. Our AI agents operate round the clock without breaks or fatigue."
    },
    {
      icon: Zap,
      title: "Sub-Second Latency",
      description: "Experience human-parity response times. Advanced neural processing ensures fluid, natural conversations."
    },
    {
      icon: Bot,
      title: "Autonomous Resolution",
      description: "Agents don't just talk—they solve. Capable of handling complex multi-step workflows without human intervention."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, PII redaction, and strict compliance standards protect every interaction."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Instant JSON data extraction and CRM logging. Track sentiment, conversion rates, and call outcomes."
    },
    {
      icon: Globe,
      title: "Multi-Lingual Processing",
      description: "Instantly switch between 50+ languages during live calls to accommodate global customer bases."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white" id="features">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight">Core Functionality</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">The technological foundation driving our autonomous workforce.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all group">
                <Icon className="w-12 h-12 text-[#008613] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;