import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <footer className="bg-[#274e13] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-[#008613]">CEL</span>
              <span className="text-[#ffea00]">PHIX</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffea00] transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffea00] transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffea00] transition-colors"><Video className="w-6 h-6" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffea00] transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffea00] transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-[#ffea00] transition-colors text-left">Home</button></li>
                <li><button onClick={() => scrollToSection('comparison')} className="text-white hover:text-[#ffea00] transition-colors text-left">Efficiency Gap</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-white hover:text-[#ffea00] transition-colors text-left">Functionality</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="text-white hover:text-[#ffea00] transition-colors text-left">Industries</button></li>
                <li><button onClick={() => scrollToSection('technical')} className="text-white hover:text-[#ffea00] transition-colors text-left">Agent Specialties</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-white hover:text-[#ffea00] transition-colors">Blog</Link></li>
                <li><Link to="/resources-documentation" className="text-white hover:text-[#ffea00] transition-colors">Knowledge Base</Link></li>
                <li><Link to="/resources-documentation" className="text-white hover:text-[#ffea00] transition-colors">API Documentation</Link></li>
                <li><Link to="/resources-documentation" className="text-white hover:text-[#ffea00] transition-colors">System Status</Link></li>
                <li><Link to="/resources-documentation" className="text-white hover:text-[#ffea00] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <a href="mailto:solutions@celphix.com" className="text-white hover:text-[#ffea00] transition-colors flex items-center underline decoration-[#ffea00]">
              <Mail className="w-5 h-5 mr-2" />
              solutions@celphix.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-white text-center text-sm">© 2025 Celphix. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;