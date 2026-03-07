import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
          This is <span className="font-bold"><span className="animate-cel">Cel</span><span className="animate-phix">phix</span></span>
        </h2>
        <p className="text-lg md:text-xl text-black leading-relaxed">
          <span className="font-bold">Celphix</span> is the elite standard in autonomous voice communication. We replace the 
          inefficiencies of human operation with high-fidelity, zero-latency AI agents 
          engineered for absolute precision. We don't just automate conversations; we fix 
          the cost of doing business.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;