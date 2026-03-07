import React from 'react';

const TacticalExecutions = () => {
  const blocks = [
    { 
      num: "01", 
      title: "Total Operator Control", 
      body: "For high-value targets, the Command Center allows for manual intervention. Operators can trigger specific calls directly from the dashboard, allowing the AI to execute a 'one-off' elite pitch with zero setup time." 
    },
    { 
      num: "02", 
      title: "CSV & CRM Synchronization", 
      body: "Upload massive lead lists via CSV or sync directly with your CRM. Celphix agents will work through the queue with machine-like efficiency, maintaining a perfect pitch from the first call to the thousandth." 
    },
    { 
      num: "03", 
      title: "Instant Data Enrichment", 
      body: "As the call happens, the agent is writing. Every objection, sentiment shift, and lead detail is updated in your CRM the millisecond the call ends. No manual notes. No data gaps." 
    },
    { 
      num: "04", 
      title: "The Warm Hand-Off", 
      body: "When a lead is primed, Celphix executes a seamless transfer. This can be to an AI Executive Closer for immediate conversion or to a Human Manager for specialized closing. The receiver gets a live brief of the conversation before they even pick up the phone." 
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#008613] mb-20 text-center">Tactical Executions</h2>
        <div className="space-y-24">
          {blocks.map((block, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 group hover-glow-card p-8 rounded-3xl border-2 border-transparent hover:border-[#ffea00] transition-all duration-300`}>
              <div className="w-full md:w-1/2 flex gap-8 items-start">
                <div className="text-7xl font-black text-[#ffea00] drop-shadow-sm leading-none">{block.num}</div>
                <div>
                  <h3 className="text-3xl font-bold text-[#008613] mb-6">{block.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{block.body}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-50 h-80 rounded-2xl border-2 border-gray-100 shadow-inner flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
                <div className="text-gray-400 font-mono text-sm z-10 flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-full mb-4 animate-[spin_10s_linear_infinite]"></div>
                  [Interface Screenshot {block.num}]
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TacticalExecutions;