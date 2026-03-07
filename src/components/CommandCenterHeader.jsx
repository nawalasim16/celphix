import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommandCenterHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a1a0a] shadow-lg border-b border-[#008613]/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-[#008613]">CEL</span>
              <span className="text-[#ffea00]">PHIX</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/command-center" className="text-white font-medium transition-colors hover:text-[#ffea00]">
              Home
            </Link>
            <Link to="/command-center/services" className="text-white font-medium transition-colors hover:text-[#ffea00]">
              Services
            </Link>
            <Link to="/command-center/pricing" className="text-white font-medium transition-colors hover:text-[#ffea00]">
              Pricing
            </Link>
            <Link to="/command-center/documentation" className="text-white font-medium transition-colors hover:text-[#ffea00]">
              Documentation
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button className="bg-[#ffea00] text-black hover:bg-[#008613] hover:text-black font-bold border-none transition-colors duration-300">
                Talk to Sales
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#008613]/30">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/command-center" className="text-white font-medium hover:text-[#ffea00]">Home</Link>
              <Link to="/command-center/services" className="text-white font-medium hover:text-[#ffea00]">Services</Link>
              <Link to="/command-center/pricing" className="text-white font-medium hover:text-[#ffea00]">Pricing</Link>
              <Link to="/command-center/documentation" className="text-white font-medium hover:text-[#ffea00]">Documentation</Link>
              <Link to="/login" className="text-[#ffea00] font-bold">Talk to Sales</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default CommandCenterHeader;