import React from 'react';

const IndustryExecutions = () => {
  const blocks = [
    { 
      title: "Logistics & Trucking", 
      subtitle: "The Dispatch Engine", 
      exec: "We have successfully automated massive outbound carrier sales and load-matching.", 
      use: "Celphix agents work through thousands of carrier lists daily, negotiating rates, verifying insurance, and booking loads directly into the TMS. We have eliminated the need for manual 'broker-grind,' allowing human teams to focus only on high-margin logistics strategy." 
    },
    { 
      title: "Real Estate", 
      subtitle: "The Lead Harvest", 
      exec: "Deployed for high-volume cold outreach to 'For Sale By Owner' and distressed property lists.", 
      use: "Our agents execute initial cold touches, handle common 'not interested' objections, and filter for high-intent sellers. The Command Center then triggers an immediate warm transfer to a human Closer or Senior Agent to sign the contract." 
    },
    { 
      title: "Financial Services", 
      subtitle: "The Debt & Recovery Unit", 
      exec: "Integrated into high-volume outbound collections and fraud-prevention alert systems.", 
      use: "Celphix agents handle high-tension payment reminders and verification calls with zero emotional fatigue. They navigate complex regulatory scripts with 100% accuracy, ensuring compliance while maintaining a 40% higher recovery rate than traditional human call centers." 
    },
    { 
      title: "Healthcare", 
      subtitle: "The Patient Intake Protocol", 
      exec: "Full-scale deployment for specialist clinic appointment setting and insurance pre-verification.", 
      use: "We have executed large-scale patient outreach for preventative screenings and follow-ups. Our agents log medical history data directly into HIPAA-compliant systems, ensuring that every specialist's calendar is filled with pre-vetted, high-priority appointments." 
    },
    { 
      title: "SaaS & Solar", 
      subtitle: "The Scalable Opener", 
      exec: "Front-end lead generation for high-ticket software and renewable energy companies.", 
      use: "Celphix agents work through massive 'cold-to-warm' funnels, explaining complex value propositions and booking high-quality Zoom demos. We have replaced entire floors of SDRs (Sales Development Reps), delivering qualified appointments at $0.05 on the dollar compared to human labor." 
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#008613]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Industry Specific Protocols</h2>
        <div className="space-y-8 relative border-l-2 border-[#ffea00] pl-10 ml-4 md:ml-12">
          {blocks.map((block, idx) => (
            <div key={idx} className="relative bg-black/40 p-8 rounded-xl border border-white/10 hover-glow-card hover:border-[#ffea00] transition-all duration-300 group">
              <div className="absolute -left-[45px] top-8 w-6 h-6 bg-[#ffea00] rounded-full border-4 border-[#008613] group-hover:scale-125 transition-transform" />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#ffea00] mb-1">{block.title}</h3>
                  <p className="text-white uppercase tracking-widest text-sm font-bold opacity-90">{block.subtitle}</p>
                </div>
                <div className="text-[#ffea00] border border-[#ffea00] px-3 py-1 text-xs uppercase font-bold tracking-wider bg-[#ffea00]/10">
                  System Verified
                </div>
              </div>
              <div className="font-mono text-sm text-green-300 space-y-4 bg-black/30 p-6 rounded-lg">
                <p className="leading-relaxed"><span className="text-[#ffea00] mr-2">{'>>>'}</span> <strong className="text-white">Execution:</strong> {block.exec}</p>
                <p className="leading-relaxed"><span className="text-[#ffea00] mr-2">{'>>>'}</span> <strong className="text-white">Usecase:</strong> {block.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExecutions;