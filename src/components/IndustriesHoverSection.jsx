import React, { useState } from 'react';

const toOptimizedUnsplashUrl = (url) => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}auto=format&fit=crop&w=640&q=60`;
};

const industries = [
  {
    title: 'Real Estate',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1507955378777-934d1d6635af'),
    desc: "Celphix agents instantly qualify inbound property inquiries 24/7 without fail. They seamlessly schedule property viewings directly into agent calendars, eliminating scheduling ping-pong. Post-viewing follow-ups are fully automated to gauge buyer interest and close deals faster."
  },
  {
    title: 'Healthcare',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1580281657702-257584239a55'),
    desc: "Patient appointment scheduling is completely automated with HIPAA-compliant precision and care. Celphix handles routine inquiries regarding clinic hours, accepted insurance, and services. Follow-up calls for post-treatment care and feedback are executed seamlessly without staff intervention."
  },
  {
    title: 'Logistics & Trucking',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1565891741441-64926e441838'),
    desc: "Automated dispatch updates provide real-time location tracking for anxious clients awaiting shipments. Celphix efficiently coordinates driver schedules, manages inbound freight inquiries, and updates logs. Route changes and delivery confirmations are communicated instantly without manual calling."
  },
  {
    title: 'E-commerce',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1601598851547-4302969d0614'),
    desc: "Customer service inquiries about shipping or product details are resolved instantly, reducing ticket backlogs. Celphix proactively reaches out to abandoned cart prospects with tailored offers to recover sales. Order status, tracking updates, and return processing are handled fully autonomously round-the-clock."
  },
  {
    title: 'Financial Services',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1649486116188-b464d7f864a9'),
    desc: "Lead qualification for complex loans and mortgages is automated with strict regulatory compliance built-in. Client onboarding processes and document collection reminders are executed persistently until complete. Routine account inquiries and balance checks are resolved instantly without tying up human advisors."
  },
  {
    title: 'SaaS & Tech',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1507146815454-9faa99d579aa'),
    desc: "Inbound sales inquiries are captured, vetted, and immediately routed to the right account executives. Celphix conducts automated check-ins and surveys to reduce churn and boost user retention rates. Technical support triaging ensures critical tier-1 issues are prioritized and escalated efficiently."
  },
  {
    title: 'Legal Services',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1508188599535-e398480e4228'),
    desc: "Initial client consultations are vetted and categorized before ever reaching expensive attorneys' desks. Court date reminders, document requests, and basic case updates are handled autonomously. Celphix acts as an elite 24/7 legal receptionist, ensuring no prospective client goes to voicemail."
  },
  {
    title: 'Hospitality',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1527354312291-96b897435a47'),
    desc: "Room reservations and complex booking modifications are processed natively in real-time. Celphix answers common guest questions about local amenities, dining options, and hotel policies. Post-stay feedback calls are automated to instantly improve online reviews and guest satisfaction scores."
  },
  {
    title: 'Education',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1687600154329-150952c73169'),
    desc: "Prospective student inquiries and complex enrollment questions are answered instantly and accurately. Alumni donation drives are scaled effortlessly with thousands of concurrent outbound voice agents. Automated reminders for tuition deadlines and administrative events keep campus operations running smoothly."
  },
  {
    title: 'Automotive',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1554832028-d645f5bd412f'),
    desc: "Service department appointments are booked directly into the dealership's existing scheduling system. Celphix relentlessly follows up on lease expirations and lucrative trade-in opportunities. Routine maintenance reminders are broadcasted automatically to maximize recurring service revenue."
  },
  {
    title: 'Home Services',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1658351354155-e854d19233e0'),
    desc: "Emergency service calls are triaged, categorized, and dispatched to technicians immediately without delay. Routine estimates and job scheduling are fully automated without needing a dedicated dispatcher. Post-job satisfaction surveys are conducted to drive local referrals and secure repeat business."
  },
  {
    title: 'Insurance',
    bg: toOptimizedUnsplashUrl('https://images.unsplash.com/photo-1658660003963-f6c94bc78eac'),
    desc: "Claim status inquiries are updated instantly via an automated, empathetic inbound response system. Policy renewal reminders and targeted cross-selling campaigns run persistently in the background. Lead qualification for new policies operates 24/7 to capture prospects precisely when they have high intent."
  },
];

const IndustriesHoverSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(null);

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Universal Compatibility
          </h2>
          <p className="text-lg md:text-xl text-black">
            Celphix is engineered to replace human communication friction across every major sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative h-48 border-2 border-black rounded-lg overflow-hidden transition-transform duration-200 cursor-pointer flex items-center justify-center group hover:scale-[1.01]"
              style={{ contentVisibility: 'auto', containIntrinsicSize: '192px' }}
              onClick={() => setActiveIndustry(index)}
            >
              <img
                src={industry.bg}
                alt={industry.title}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-200" />
              <h3 className="relative z-10 text-2xl font-bold text-white text-center px-4 drop-shadow-md">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {activeIndustry !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setActiveIndustry(null)}
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/40 transition-all duration-300"></div>
          
          {/* Popup */}
          <div 
            className="relative z-10 bg-[#008613] p-8 rounded-xl max-w-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-black hover:text-gray-800 font-bold text-xl"
              onClick={() => setActiveIndustry(null)}
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold text-black mb-4">
              {industries[activeIndustry].title}
            </h3>
            <p className="text-black text-lg leading-relaxed">
              {industries[activeIndustry].desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustriesHoverSection;