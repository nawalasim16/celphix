import React from 'react';

const IndustriesSection = () => {
  const industries = [
    { title: 'Real Estate', bg: 'https://images.unsplash.com/photo-1507955378777-934d1d6635af' },
    { title: 'Healthcare', bg: 'https://images.unsplash.com/photo-1580281657702-257584239a55' },
    { title: 'Logistics & Trucking', bg: 'https://images.unsplash.com/photo-1565891741441-64926e441838' },
    { title: 'E-commerce', bg: 'https://images.unsplash.com/photo-1601598851547-4302969d0614' },
    { title: 'Financial Services', bg: 'https://images.unsplash.com/photo-1649486116188-b464d7f864a9' },
    { title: 'SaaS & Tech', bg: 'https://images.unsplash.com/photo-1507146815454-9faa99d579aa' },
    { title: 'Legal Services', bg: 'https://images.unsplash.com/photo-1508188599535-e398480e4228' },
    { title: 'Hospitality', bg: 'https://images.unsplash.com/photo-1527354312291-96b897435a47' },
    { title: 'Education', bg: 'https://images.unsplash.com/photo-1687600154329-150952c73169' },
    { title: 'Automotive', bg: 'https://images.unsplash.com/photo-1554832028-d645f5bd412f' },
    { title: 'Home Services', bg: 'https://images.unsplash.com/photo-1658351354155-e854d19233e0' },
    { title: 'Insurance', bg: 'https://images.unsplash.com/photo-1658660003963-f6c94bc78eac' },
  ];

  return (
    <section className="py-20 px-4 bg-[#008613]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Universal Compatibility
          </h2>
          <p className="text-lg md:text-xl text-white">
            <span className="celphix-glow">Celphix</span> is engineered to replace human communication friction across every major sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative h-48 border-2 border-white rounded-lg overflow-hidden hover-glow-card transition-all duration-300 cursor-pointer flex items-center justify-center group"
              style={{
                backgroundImage: `url(${industry.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <h3 className="relative z-10 text-2xl font-bold text-white text-center px-4 drop-shadow-md">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;