import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const LiquidAgentFooter = () => {
  return (
    <footer className="bg-[#00231f] pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Section */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-baseline">
              <span className="text-[#008613]">CEL</span>
              <span className="text-[#ffea00]">PHIX</span>
              <span className="text-[#ffea00] text-xs ml-2 font-thin uppercase tracking-[0.3em] border border-[#ffea00] px-2 py-1">LIQUID</span>
            </div>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-white hover:text-[#ffea00] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#ffea00] transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#ffea00] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/" className="hover:text-[#ffea00] transition-colors">Home</Link></li>
                <li><Link to="/liquid-agent" className="hover:text-[#ffea00] transition-colors">Liquid Agent</Link></li>
                <li><Link to="/command-center/pricing" className="hover:text-[#ffea00] transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Developer Resources</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/command-center/docs" className="hover:text-[#ffea00] transition-colors">API Documentation</Link></li>
                <li><a href="#" className="hover:text-[#ffea00] transition-colors">SDKs & Libraries</a></li>
                <li><a href="#" className="hover:text-[#ffea00] transition-colors">Webhooks Guide</a></li>
                <li><a href="#" className="hover:text-[#ffea00] transition-colors">Rate Limits</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-[#ffea00] font-bold mb-4">API Access</h3>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Start building with Liquid Agent. Get your API key and begin scaling immediately.
            </p>
            <Button className="w-full bg-transparent text-white border-2 border-white hover:bg-transparent hover:text-[#ffea00] hover:border-[#ffea00] font-bold transition-colors">
              Get API Key
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/60 text-sm text-center">
            © 2025 Celphix.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LiquidAgentFooter;