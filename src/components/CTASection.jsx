import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-[#008613]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Fix Your Cost of Doing Business?
        </h2>
        <p className="text-lg md:text-xl text-white mb-10 leading-relaxed">
          Stop paying for human inefficiency. Start Celphixing today and watch your margins expand.
        </p>
        <Link to="/signup">
          <Button
            size="lg"
            className="bg-white text-[#008613] hover:bg-[#ffea00] hover:text-[#008613] transition-all duration-300 text-lg px-12 py-6 h-auto font-bold"
          >
            Get Started Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;