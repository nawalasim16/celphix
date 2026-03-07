import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ComparisonSection from '@/components/ComparisonSection';
import FeaturesSection from '@/components/FeaturesSection';
import IndustriesHoverSection from '@/components/IndustriesHoverSection';
import TechnicalSection from '@/components/TechnicalSection';
import WorkforceSection from '@/components/WorkforceSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const HOME_HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1684315062163-1246f37fdb02?auto=format&fit=crop&w=2000&q=72';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Celphix - Elite Autonomous Voice Communication | Stop Hiring. Start Celphixing.</title>
        <meta 
          name="description" 
          content="Celphix is the elite standard in autonomous voice communication. Replace human inefficiencies with high-fidelity, zero-latency AI agents engineered for absolute precision. 90% cost reduction, 24/7 availability, and instant scalability." 
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" as="image" href={HOME_HERO_IMAGE_URL} />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <div className="defer-render">
          <AboutSection />
        </div>
        <div id="comparison" className="defer-render">
          <ComparisonSection />
        </div>
        <div className="defer-render">
          <FeaturesSection />
        </div>
        <div id="industries" className="defer-render">
          <IndustriesHoverSection />
        </div>
        <div id="technical" className="defer-render">
          <TechnicalSection />
        </div>
        <div className="defer-render">
          <WorkforceSection />
        </div>
        <div id="blog" className="defer-render">
          <BlogSection />
        </div>
        <div className="defer-render">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;