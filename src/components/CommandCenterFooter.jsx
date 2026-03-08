import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const CommandCenterFooter = () => {
  return (
    <footer className="bg-[#0a1a0a] border-t border-[#008613] pt-16 pb-8 px-4 relative z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Section */}
          <div>
            <div className="text-2xl font-bold mb-6 flex items-baseline">
              <span className="text-[#008613]">CEL</span>
              <span className="text-[#ffea00]">PHIX</span>
              <span className="text-[#ffea00] text-sm ml-2 font-mono uppercase tracking-widest border border-[#ffea00] px-1 py-0.5">COMMAND</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffea00] hover:drop-shadow-[0_0_8px_#ffea00] transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffea00] hover:drop-shadow-[0_0_8px_#ffea00] transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffea00] hover:drop-shadow-[0_0_8px_#ffea00] transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#ffea00] font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white">
                <li><Link to="/" className="hover:text-[#ffea00] transition-colors">Home</Link></li>
                <li><Link to="/command-center/services" className="hover:text-[#ffea00] transition-colors">Services</Link></li>
                <li><Link to="/command-center/pricing" className="hover:text-[#ffea00] transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#ffea00] font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-white">
                <li><Link to="/command-center/documentation" className="hover:text-[#ffea00] transition-colors">API Documentation</Link></li>
                <li><Link to="/command-center/documentation" className="hover:text-[#ffea00] transition-colors">Integration Guides</Link></li>
                <li><Link to="/command-center/documentation" className="hover:text-[#ffea00] transition-colors">System Status</Link></li>
                <li><Link to="/command-center/documentation" className="hover:text-[#ffea00] transition-colors">Security Whitepaper</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-[#ffea00] font-bold mb-4">Contact Sales</h3>
            <a href="mailto:solutions@celphix.com" className="text-white text-lg font-bold hover:text-[#ffea00] flex items-center mb-6 transition-colors">
              solutions@celphix.com
            </a>
            <a href="mailto:solutions@celphix.com?subject=Audit%20Request%20-%20Command%20Center&body=Hello%20Celphix%20team,%0A%0AI%20would%20like%20to%20request%20an%20audit%20for%20Command%20Center.%0A%0AThank%20you." className="block w-full">
              <Button className="w-full bg-transparent text-white border-2 border-white hover:bg-transparent hover:text-[#ffea00] hover:border-[#ffea00] font-bold transition-colors">
                Request Audit
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#008613] pt-6">
          <p className="text-white/60 text-sm text-center">© 2025 Celphix. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default CommandCenterFooter;