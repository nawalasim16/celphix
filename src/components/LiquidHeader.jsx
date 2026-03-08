
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LiquidHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/liquid/home' },
    { name: 'SERVICES', path: '/liquid/services' },
    { name: 'PRICING', path: '/liquid/pricing' },
    { name: 'DOCUMENTATION', path: '/liquid/docs' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#274e13] border-b border-white/20 transition-all">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold tracking-tight flex items-baseline">
              <span className="text-[#008613]">CEL</span>
              <span className="text-[#ffea00]">PHIX</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-mono text-sm tracking-widest transition-colors ${
                  location.pathname === link.path 
                    ? 'text-[#ffea00]' 
                    : 'text-white hover:text-[#008613]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signup">
              <button className="bg-[#008613] text-white hover:bg-[#ffea00] hover:text-black font-mono font-bold text-sm tracking-wider px-6 py-2.5 rounded-none transition-colors duration-300">
                GET STARTED
              </button>
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono text-sm tracking-widest ${
                    location.pathname === link.path 
                      ? 'text-[#ffea00]' 
                      : 'text-white hover:text-[#008613]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-[#008613] text-white hover:bg-[#ffea00] hover:text-black font-mono font-bold text-sm tracking-wider px-6 py-3 rounded-none transition-colors mt-2">
                  GET STARTED
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LiquidHeader;
