
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const LiquidFooter = () => {
  return (
    <footer className="bg-[#008613] border-t border-[#0a1a0a] text-white font-mono pt-16 pb-8 px-4 relative z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4 flex items-baseline">
              <span className="text-white">CELPHIX</span>
              <span className="text-white text-xs ml-2 font-mono uppercase tracking-widest border border-white px-2 py-1">LIQUID</span>
            </div>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              Pay for seconds, scale for millions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#0a1a0a] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-[#0a1a0a] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-[#0a1a0a] transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2A */}
          <div>
            <h3 className="text-[#ffea00] font-bold mb-6 tracking-widest text-sm">DIVISION</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/liquid/home" className="text-white hover:text-[#0a1a0a] transition-colors">Home</Link></li>
              <li><Link to="/liquid/services" className="text-white hover:text-[#0a1a0a] transition-colors">Services</Link></li>
              <li><Link to="/liquid/pricing" className="text-white hover:text-[#0a1a0a] transition-colors">Pricing</Link></li>
              <li><Link to="/liquid/docs" className="text-white hover:text-[#0a1a0a] transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Column 2B */}
          <div>
            <h3 className="text-[#ffea00] font-bold mb-6 tracking-widest text-sm">UTILITIES</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/liquid/docs/status" className="text-white hover:text-[#0a1a0a] transition-colors">API Status</Link></li>
              <li><Link to="/liquid/docs/changelog" className="text-white hover:text-[#0a1a0a] transition-colors">System Changelog</Link></li>
              <li><Link to="/liquid/support" className="text-white hover:text-[#0a1a0a] transition-colors">Support Ticket</Link></li>
              <li><Link to="/liquid/discord" className="text-white hover:text-[#0a1a0a] transition-colors">Developer Community</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:col-span-1">
            <h3 className="text-[#0a1a0a] font-black mb-4 tracking-widest text-sm uppercase">Scale Now</h3>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              No monthly fees. No commitment. Activate your usage-based account instantly.
            </p>
            <Link to="/signup" className="block w-full">
              <button className="w-full bg-transparent text-white border-2 border-[#0a1a0a] hover:bg-[#0a1a0a] hover:text-[#008613] font-bold py-3 text-sm tracking-wider transition-colors rounded-none">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-[#0a1a0a]/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-white/80 mb-4 md:mb-0">
            © 2025 Celphix Liquid. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">SOC2 Whitepaper</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LiquidFooter;
