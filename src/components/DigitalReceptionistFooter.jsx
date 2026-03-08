import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const DigitalReceptionistFooter = () => {
  const location = useLocation();

  return (
    <footer className="bg-[#0a1a0a] border-t border-[#008613] pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Section */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-baseline">
              <span className="text-[#008613]">CEL</span>
              <span className="text-[#ffea00]">PHIX</span>
              <span className="text-[#008613] text-xs ml-2 font-mono uppercase tracking-widest border border-[#008613] px-2 py-1">RECEPTIONIST</span>
            </div>
            <p className="text-white/80 text-sm mb-6 italic">The First Impression. Perfected.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-[#008613] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#008613] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#008613] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#008613] font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/" className="hover:text-[#008613] transition-colors">Home</Link></li>
                <li><Link to="/digital-receptionist" className="hover:text-[#008613] transition-colors">Home</Link></li>
                <li><Link to="/digital-receptionist/services" className="hover:text-[#008613] transition-colors">Services</Link></li>
                <li><Link to="/digital-receptionist/pricing" className="hover:text-[#008613] transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#008613] font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/digital-receptionist/documentation" className="hover:text-[#008613] transition-colors">Knowledge Base</Link></li>
                <li><Link to="/digital-receptionist/documentation" className="hover:text-[#008613] transition-colors">Script Templates</Link></li>
                <li><Link to="/digital-receptionist/documentation" className="hover:text-[#008613] transition-colors">Calendar Integration Guide</Link></li>
                <li><Link to="/digital-receptionist/documentation" className="hover:text-[#008613] transition-colors">System Status</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-[#008613] font-bold mb-4">Immediate Deployment</h3>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Get your digital receptionist live in under 10 minutes. No contracts, no commitments.
            </p>
            <Link
              to="/signup"
              state={{
                from: `${location.pathname}${location.search}${location.hash}`,
              }}
              className="block"
            >
              <Button className="w-full bg-transparent text-white border-2 border-white hover:bg-[#008613] hover:text-white hover:border-[#008613] font-bold transition-colors">
                Deploy My Receptionist
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#008613]/30 pt-6">
          <p className="text-white/60 text-sm text-center">
            © 2025 Celphix. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DigitalReceptionistFooter;