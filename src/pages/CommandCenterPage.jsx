import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CommandCenterLayout from '@/components/CommandCenterLayout';
import CommandCenterHero from '@/components/CommandCenterHero';
import UnitClassification from '@/components/UnitClassification';
import TacticalExecutions from '@/components/TacticalExecutions';
import TechnicalSpecifications from '@/components/TechnicalSpecifications';
import ExtendedInfrastructure from '@/components/ExtendedInfrastructure';

const CommandCenterPage = () => {
  return (
    <CommandCenterLayout>
      <Helmet>
        <title>Command Center | Celphix</title>
        <meta name="description" content="Professional-grade outbound operations by Celphix. View our tier classifications and tactical executions." />
      </Helmet>
      <div className="bg-white">
        <CommandCenterHero />
        <UnitClassification />
        <TechnicalSpecifications />
        <ExtendedInfrastructure />
        <TacticalExecutions />
        
        {/* Additional CTA Section for "Talk to Sales" consistency */}
        <section className="py-24 px-4 bg-[#0a1a0a] text-center border-t border-[#008613]/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Ready to Deploy?</h2>
            <p className="text-xl text-white/80 mb-10 font-mono">Initiate your outbound operations with sub-900ms precision.</p>
            <Link to="/login">
              <Button size="lg" className="bg-[#ffea00] text-black hover:bg-[#008613] hover:text-black font-bold text-lg px-12 py-6 h-auto transition-colors duration-300">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </CommandCenterLayout>
  );
};

export default CommandCenterPage;