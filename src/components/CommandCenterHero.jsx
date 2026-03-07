import React from 'react';

const COMMAND_CENTER_HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=72';

const CommandCenterHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      <img
        src={COMMAND_CENTER_HERO_IMAGE_URL}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.85, transform: 'scale(1.05)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tight">
          The Command Center
        </h1>
        <p className="text-2xl md:text-4xl text-white mb-16 font-light tracking-wide">
          Professional-grade outbound operations.
        </p>

        <div className="border-2 border-[#ffea00] bg-black/60 backdrop-blur-md p-8 max-w-4xl mx-auto text-left rounded-lg shadow-[0_0_30px_rgba(255,234,0,0.15)]">
          <p className="text-white text-lg font-mono leading-relaxed">
            <span className="text-[#ffea00] font-bold mr-3">[Notice]</span>
            Account Activation Required. While the <span className="text-[#008613] font-bold celphix-glow">Celphix</span> interface is open for exploration, Command Center packages require manual verification and approval. Deployments are activated only after a direct consultation with our engineering team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommandCenterHero;