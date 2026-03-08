
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, MessageSquare, CheckCircle2, Award, Zap, Clock, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DigitalReceptionistLayout from '@/components/DigitalReceptionistLayout';

const DIGITAL_RECEPTIONIST_HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1684369176170-463e84248b70?auto=format&fit=crop&w=2000&q=72';

const DigitalReceptionistPage = () => {
  const location = useLocation();

  return (
    <DigitalReceptionistLayout>
      <Helmet>
        <title>Digital Receptionist | Celphix</title>
        <meta name="description" content="Your front desk, re-engineered. Professional AI receptionist that never misses a call." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <img
          src={DIGITAL_RECEPTIONIST_HERO_IMAGE_URL}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.85, transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tight">
            Digital Receptionist
          </h1>
          
          <div className="border-2 border-[#ffea00] bg-black/60 backdrop-blur-md p-8 max-w-4xl mx-auto text-left rounded-lg shadow-[0_0_30px_rgba(255,234,0,0.15)] mt-12">
            <p className="text-white text-lg font-mono leading-relaxed">
              <span className="text-[#ffea00] font-bold mr-3">[Notice]</span>
              Account Activation Required. While the <span className="text-[#008613] font-bold celphix-glow">Celphix</span> interface is open for exploration, Digital Receptionist packages require manual verification and approval. Deployments are activated only after a direct consultation with our engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* New Tagline Section */}
      <section className="py-20 px-4 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-3xl md:text-5xl text-[#0a1a0a] mb-8 font-light tracking-wide">
            Your Front Desk. <span className="text-[#008613] font-bold">Re-Engineered.</span>
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans">
            A fully autonomous AI receptionist that answers every call, books appointments, and updates your CRM in real-time. No voicemail. No missed opportunities. Just flawless execution, 24/7.
          </p>
        </div>
      </section>

      {/* Section 2b - Narrative */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#008613] mb-12">
            The End of the Voicemail Era.
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Every missed call is a lost customer. Every voicemail is a delay in closing the deal. The Digital Receptionist eliminates both.
            </p>
            <p>
              It doesn't take breaks. It doesn't forget to follow up. It doesn't put people on hold for 10 minutes. It answers every call with the precision of a seasoned professional, captures the lead's details, books the appointment directly into your calendar, and logs everything into your CRM before the call even ends.
            </p>
            <p className="font-semibold text-[#008613] text-xl">
              This is not a chatbot. This is your front desk—perfected.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3b - Pricing Card */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white border-4 border-[#008613] rounded-2xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#ffea00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center shadow-sm">
               <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
               Live Deploy
            </div>
            <h3 className="text-3xl font-bold text-[#008613] mb-8 text-center">Full Deployment Package</h3>
            
            <div className="text-center mb-10">
              <div className="text-gray-400 text-2xl line-through mb-2">$199 / Month</div>
              <div className="text-6xl font-black text-[#008613] mb-2">$149</div>
              <div className="text-gray-600">per month</div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Unlimited Inbound Calls:</strong> No per-minute charges, no hidden fees</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Instant Calendar Integration:</strong> Google, Outlook, Calendly—synced in real-time</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>CRM Auto-Logging:</strong> Every detail captured and written instantly</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Custom Script Training:</strong> Tailored to your business voice and workflows</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#008613] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>24/7 Operational Uptime:</strong> Never miss a call, day or night</span>
              </div>
            </div>

            <Link
              to="/signup"
              state={{
                from: `${location.pathname}${location.search}${location.hash}`,
              }}
              className="block w-full"
            >
              <Button className="w-full bg-[#008613] text-white hover:bg-[#ffea00] hover:text-black font-bold text-lg py-6 transition-all">
                Deploy This Agent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4b - Process Flow */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#008613] mb-16 text-center">The Execution Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Lines (hidden on mobile) */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-[#008613]/20" style={{
              width: '75%',
              marginLeft: '12.5%'
            }} />
            
            <div className="text-center relative">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#008613] rounded-full flex items-center justify-center shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#008613] mb-3">01. Call Received</h3>
              <p className="text-gray-600 text-sm">Instant pickup. Zero ring delay. Professional greeting.</p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#008613] rounded-full flex items-center justify-center shadow-lg">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#008613] mb-3">02. Intent Captured</h3>
              <p className="text-gray-600 text-sm">AI understands the caller's need and qualifies instantly.</p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#008613] rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#008613] mb-3">03. Booking Executed</h3>
              <p className="text-gray-600 text-sm">Appointment scheduled directly into your calendar.</p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#008613] rounded-full flex items-center justify-center shadow-lg">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#008613] mb-3">04. CRM Updated</h3>
              <p className="text-gray-600 text-sm">All data logged. Lead scored. Follow-up triggered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom equivalent if needed, replacing normal buttons with /signup */}
    </DigitalReceptionistLayout>
  );
};

export default DigitalReceptionistPage;
