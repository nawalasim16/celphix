import React from 'react';
import { Activity } from 'lucide-react';

const TechnicalSpecifications = () => {
  const specs = [
    { 
      title: "Velocity: Sub-900ms Execution", 
      metric: "Total Round-Trip Latency (TRTL) under 0.9 seconds", 
      det: "We have eliminated the 'AI Pause.' Using dedicated GPU clusters and edge-computing, Command Center agents process, reason, and respond in under 900ms. This ensures the agent maintains the natural 'ping-pong' rhythm of a human conversation, allowing for natural interruptions and zero awkward silences." 
    },
    { 
      title: "Intelligence: Adaptive Neural Persistence", 
      metric: "Dynamic Long-Context Window", 
      det: "Our agents don't follow 'If/Then' trees. They are powered by custom-trained LLMs that understand Sentiment, Intent, and Subtext. If a lead tries to 'throw off' the agent with a complex objection, the agent cross-references its 1,000+ hour training library to pivot the conversation back to the closing goal instantly." 
    },
    { 
      title: "Audio: High-Fidelity Persuasion", 
      metric: "44.1kHz Natural Voice Synthesis", 
      det: "We use proprietary voice-cloning technology that removes all 'robotic artifacts.' Our agents breathe, vary their pitch based on the lead's energy, and utilize 'verbal mirrors' (matching the lead's pace) to build instant psychological rapport. To the lead, it isn't an AI; it's an expert." 
    },
    { 
      title: "Reliability: Zero-Downtime Infrastructure", 
      metric: "99.99% Operational Uptime", 
      det: "Command Center agents run on an 'Infinite Scalability' framework. Unlike human staff, Celphix agents never get tired, never have 'bad days,' and never drop calls. We utilize a fail-safe multi-region deployment—if one server cluster goes down, the agent migrates to another in milliseconds without dropping the live conversation." 
    }
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-20 text-center">Technical Specifications</h2>
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-64 h-64 flex items-center justify-center opacity-30 pointer-events-none mb-12 lg:mb-0">
            <div className="absolute w-full h-full border-2 border-dashed border-[#008613] rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-48 h-48 border-2 border-[#ffea00] rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="w-32 h-32 bg-[#008613] rounded-full blur-[40px] animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-96 w-full z-10 relative">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-gray-50 p-8 border-l-4 border-[#008613] hover-glow-card group transition-all relative overflow-hidden rounded-r-lg shadow-sm">
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#008613]/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out flex items-center justify-end pr-4">
                  <Activity className="w-12 h-12 text-[#008613] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 pr-8">{spec.title}</h3>
                <div className="mb-4 text-[#008613] font-mono text-sm uppercase tracking-widest border border-[#008613]/30 inline-block px-3 py-1 bg-white">
                  {spec.metric}
                </div>
                <p className="text-gray-700 font-mono text-sm leading-relaxed mt-4 relative z-10">
                  {spec.det}
                </p>
                
                <div className="h-1.5 w-full bg-gray-200 mt-6 rounded overflow-hidden">
                  <div className="h-full bg-[#008613] w-0 group-hover:w-full transition-all duration-[1500ms] ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;