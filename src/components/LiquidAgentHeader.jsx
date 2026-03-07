import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LiquidAgentHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#00231f]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight flex items-baseline">
            <span className="text-[#008613]">CEL</span>
            <span className="text-[#ffea00]">PHIX</span>
            <span className="text-[#ffea00] text-xs ml-2 font-thin uppercase tracking-[0.3em]">LIQUID</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className="text-white font-medium transition-colors hover:text-[#008613]">
              Usage Rates
            </a>
            <Link to="/command-center/docs" className="text-white font-medium transition-colors hover:text-[#008613]">
              API Docs
            </Link>
            <a href="#scale" className="text-white font-medium transition-colors hover:text-[#008613]">
              Scale on Demand
            </a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-[#008613] text-white hover:bg-[#008613]/80 font-bold">
              Deploy Instantly
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#pricing" className="text-white font-medium hover:text-[#008613]">Usage Rates</a>
              <Link to="/command-center/docs" className="text-white font-medium hover:text-[#008613]">API Docs</Link>
              <a href="#scale" className="text-white font-medium hover:text-[#008613]">Scale on Demand</a>
              <Button className="bg-[#008613] text-white hover:bg-[#008613]/80 font-bold mt-2">
                Deploy Instantly
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LiquidAgentHeader;