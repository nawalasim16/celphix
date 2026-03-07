import React, { useState } from 'react';
import { Database, Calendar, GitBranch, LineChart, Users } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Integrated CRM',
    description: 'Zero manual data entry. Auto logs transcripts.',
    popup: 'Celphix integrates directly with your existing CRM infrastructure, automatically pushing and pulling live data. It perfectly logs call transcripts, extracts key entities, and updates lead statuses without error. Your sales team wakes up to a fully enriched, perfectly organized database without ever touching a keyboard.'
  },
  {
    icon: Calendar,
    title: 'Autonomous Calendars',
    description: 'Directly books & confirms in your calendar.',
    popup: 'Eliminate the exhausting back-and-forth ping pong of manual scheduling and follow-ups. Celphix checks real-time availability and books appointments directly onto your digital calendar seamlessly. It automatically handles time zones, sends invites, and confirms attendance to drastically minimize no-shows.'
  },
  {
    icon: GitBranch,
    title: 'Event-Driven Automation',
    description: 'Trigger workflows the moment a call ends.',
    popup: 'Convert simple conversations into immediate, complex downstream actions across your entire tech stack. Once a call concludes, Celphix triggers custom webhooks and Zapier flows instantly. Whether it is sending a follow-up contract or alerting a manager, the workflow is executed flawlessly.'
  },
  {
    icon: LineChart,
    title: 'Live Reporting',
    description: 'Real-time analytics on conversion & cost.',
    popup: 'Gain complete, transparent visibility into your operations with live telemetry and dashboarding. Track precise call volumes, immediate conversion rates, and exact cost-per-acquisition in real-time. Make critical data-driven decisions instantly rather than waiting for outdated end-of-month performance reports.'
  },
  {
    icon: Users,
    title: 'Smart Transfer',
    description: 'Warm transfer to team with full context.',
    popup: 'When nuanced human intervention is necessary, Celphix executes a warm transfer seamlessly to your available staff. It patches the call to the right department while simultaneously sending the call summary and context to the human agent. The customer experiences zero friction and never has to repeat themselves.'
  },
];

const WorkforceSection = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            More Than a Voice. A Complete Workforce.
          </h2>
          <p className="text-lg md:text-xl text-black">
            Celphix doesn't just talk; it manages your entire business logic in real-time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch relative z-10">
          <div className="lg:w-2/3 flex flex-row flex-wrap gap-4 justify-between">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#008613] border-2 border-[#008613] rounded-lg p-4 transition-all duration-300 flex-1 min-w-[200px] cursor-pointer hover:bg-[#006b0f]"
                  onClick={() => setActiveService(index)}
                >
                  <Icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="lg:w-1/3 rounded-xl overflow-hidden shadow-2xl min-h-[300px] border-2 border-black">
            <img 
              src="https://images.unsplash.com/photo-1678458536113-839133647b4a" 
              alt="Data and dashboard interface"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {activeService !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setActiveService(null)}
        >
          <div className="absolute inset-0 backdrop-blur-sm bg-white/40 transition-all duration-300"></div>
          
          <div 
            className="relative z-10 bg-[#008613] p-8 rounded-xl max-w-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-black hover:text-gray-800 font-bold text-xl"
              onClick={() => setActiveService(null)}
            >
              ✕
            </button>
            <div className="flex items-center mb-4">
              {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-black mr-3" })}
              <h3 className="text-3xl font-bold text-black">
                {services[activeService].title}
              </h3>
            </div>
            <p className="text-black text-lg leading-relaxed">
              {services[activeService].popup}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkforceSection;