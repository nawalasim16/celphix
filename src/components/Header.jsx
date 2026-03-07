import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenu from '@/components/MegaMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#274e13] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-[#008613]">CEL</span>
            <span className="text-[#ffea00]">PHIX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <MegaMenu />
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="bg-[#008613] text-white border-white hover:bg-[#ffea00] hover:text-[#008613] hover:border-[#008613] transition-all duration-300"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="outline"
                className="bg-[#008613] text-white border-white hover:bg-[#ffea00] hover:text-[#008613] hover:border-[#008613] transition-all duration-300"
              >
                Signup
              </Button>
            </Link>
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
              <Link
                to="/command-center"
                className="text-white font-medium transition-colors hover:text-[#ffea00]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Command Center
              </Link>
              <Link
                to="/digital-receptionist"
                className="text-white font-medium transition-colors hover:text-[#ffea00]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Digital Receptionist
              </Link>
              <Link
                to="/liquid-agent"
                className="text-white font-medium transition-colors hover:text-[#ffea00]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Liquid Agent
              </Link>
              <Link
                to="/login"
                className="text-white font-medium transition-colors hover:text-[#ffea00]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white font-medium transition-colors hover:text-[#ffea00]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Signup
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;