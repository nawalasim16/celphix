import React from 'react';
import { Database, FolderSync as CalendarSync, Workflow, BarChart3, PhoneForwarded } from 'lucide-react';

const ExtendedInfrastructure = () => {
  const blocks = [
    { 
      title: "Celphix Native CRM", 
      icon: Database,
      tag: "Feature Highlights",
      solution: "A dedicated transport layer for conversational data",
      det: "We don't just 'integrate'—we provide a high-performance CRM built specifically for AI-led sales. It features real-time lead scoring, sentiment tracking, and automated pipeline movement based on call outcomes. Every word spoken is searchable and indexed." 
    },
    { 
      title: "Autonomous Calendar Engine", 
      icon: CalendarSync,
      tag: "Feature Highlights",
      solution: "Zero-Friction Appointment Logistics",
      det: "A multi-layered scheduling system that syncs across Outlook, Google, and other. Our agents have 'Full-Context Visibility' of your team's availability, allowing them to handle complex rescheduling and multi-person invites without human intervention." 
    },
    { 
      title: "Workflow Automation Suite", 
      icon: Workflow,
      tag: "Feature Highlights",
      solution: "Trigger-Based Post-Call Logic",
      det: "Build complex 'If-This-Then-That' workflows. If an agent secures a 'Hot Lead,' Celphix can automatically send a specialized PDF via email, trigger a Slack notification for the manager, and schedule a follow-up SMS—all within 2 seconds of the hang-up." 
    },
    { 
      title: "Live Intelligence Dashboard (Reporting)", 
      icon: BarChart3,
      tag: "Feature Highlights",
      solution: "Real-Time Operational Audit",
      det: "A visual command center for the business owner. Monitor live call volume, cost-per-conversion, average latency, and agent sentiment across your entire fleet. Data is refreshed every 300ms, providing true 'Live' insight." 
    },
    { 
      title: "Hybrid Transfer Gateways", 
      icon: PhoneForwarded,
      tag: "Feature Highlights",
      solution: "Seamless AI-to-Human Handover",
      det: "A specialized telephony layer that allows for 'Warm Transfers.' The human receiver gets an instant screen-pop with the AI's call summary and the lead's current emotional state, ensuring the human closer starts the call with a 100% advantage." 
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#008613] mb-20 text-center">Extended Infrastructure</h2>
        <div className="space-y-12">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div key={idx} className={`flex flex-col md:flex-row items-stretch rounded-2xl shadow-xl hover-glow-card overflow-hidden bg-white border-2 border-gray-100 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Tech Component Side */}
                <div className="w-full md:w-2/5 bg-gray-50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200 border-dashed relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 text-gray-900 pointer-events-none">
                    <Icon className="w-48 h-48 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <Icon className="w-16 h-16 text-[#008613] mb-6 relative z-10" />
                  <h3 className="text-2xl font-bold text-[#008613] relative z-10">{block.title}</h3>
                </div>

                {/* Details Side */}
                <div className="w-full md:w-3/5 p-8 md:p-12">
                  <div className="inline-block bg-[#ffea00]/20 text-[#008613] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded mb-4">
                    {block.tag}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{block.solution}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">{block.det}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtendedInfrastructure;