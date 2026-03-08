import React from 'react';
import { Helmet } from 'react-helmet';
import DigitalReceptionistLayout from '@/components/DigitalReceptionistLayout';
import { Link, useLocation } from 'react-router-dom';
import { Network, CalendarCheck, ShieldCheck, Mail, Zap, Server, Activity, Database, Briefcase as BriefcaseMedical, Wrench, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalReceptionistServicesPage = () => {
  const location = useLocation();

  return (
    <DigitalReceptionistLayout>
      <Helmet>
        <title>Services | Digital Receptionist</title>
        <meta name="description" content="Discover the comprehensive capabilities of the Celphix Digital Receptionist." />
      </Helmet>

      {/* Executive Greeting Section */}
      <section className="bg-white py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tight">
            The First Impression, <span className="text-[#008613]">Scientifically Perfected</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Eliminate friction at the front desk. Our Digital Receptionist manages concurrent inbound call volume with perfect empathy, strict routing logic, and zero operational downtime.
          </p>
        </div>
      </section>

      {/* Core Service Pillar Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#008613]">Core Service Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#008613]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-[#008613]/5">
              <Network className="w-12 h-12 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Intelligent Inbound Triage</h3>
              <p className="text-gray-700 leading-relaxed">
                Automatically categorizes callers based on conversational intent. Distinguishes high-urgency emergency calls from routine informational queries, routing them to the appropriate department or managing them autonomously.
              </p>
            </div>
            
            <div className="bg-white border border-[#008613]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-[#008613]/5">
              <CalendarCheck className="w-12 h-12 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Autonomous Appointment Orchestration</h3>
              <p className="text-gray-700 leading-relaxed">
                Bi-directional calendar integration (Google, Outlook, Calendly) ensures agents only book open slots. Confirms appointments, sends out automated calendar invites, and handles rescheduling requests mid-call.
              </p>
            </div>

            <div className="bg-white border border-[#008613]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-[#008613]/5">
              <ShieldCheck className="w-12 h-12 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Lead Capture & CRM Enrichment</h3>
              <p className="text-gray-700 leading-relaxed">
                Pulls names, phone numbers, email addresses, and key problem descriptions directly from the verbal conversation. Pushes structured JSON data perfectly into Salesforce, HubSpot, or custom databases instantly.
              </p>
            </div>

            <div className="bg-white border border-[#008613]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-[#008613]/5">
              <Mail className="w-12 h-12 text-[#008613] mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Multi-Channel Follow-Up Continuity</h3>
              <p className="text-gray-700 leading-relaxed">
                Triggers immediate post-call SMS and email notifications. Can send intake forms, pricing sheets, or direct payment links to the caller's mobile device the moment they hang up the phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Always-On Technical Specs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Always-On Technical Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl">
              <Zap className="w-8 h-8 text-[#008613]" />
              <div>
                <h4 className="font-bold text-black">Sub-700ms TRTL</h4>
                <p className="text-sm text-gray-600">Immediate response speed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl">
              <Server className="w-8 h-8 text-[#008613]" />
              <div>
                <h4 className="font-bold text-black">Infinite Concurrency</h4>
                <p className="text-sm text-gray-600">Never drops a concurrent call</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl">
              <Activity className="w-8 h-8 text-[#008613]" />
              <div>
                <h4 className="font-bold text-black">VAD Handling</h4>
                <p className="text-sm text-gray-600">Perfect interruption logic</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl">
              <Database className="w-8 h-8 text-[#008613]" />
              <div>
                <h4 className="font-bold text-black">Real-Time Sync</h4>
                <p className="text-sm text-gray-600">Instant webhook execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Deployment Archive */}
      <section className="py-20 px-4 bg-[#0a1a0a] border-y border-[#008613]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Industry Deployment Archive</h2>
              <p className="text-white/70">Pre-configured operational templates ready for immediate live execution.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-[#008613]/40 p-6 rounded-xl relative">
               <div className="absolute top-4 right-4 bg-[#ffea00] text-black text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5 animate-pulse"></span>
                Live Template
              </div>
              <BriefcaseMedical className="w-10 h-10 text-[#008613] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Medical/Clinic Framework</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Handles patient intake, verifies insurance basic queries, reschedules appointments, and routes emergencies directly to physician on-call lines.
              </p>
            </div>

            <div className="bg-white/5 border border-[#008613]/40 p-6 rounded-xl relative">
               <div className="absolute top-4 right-4 bg-[#ffea00] text-black text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5 animate-pulse"></span>
                Live Template
              </div>
              <Wrench className="w-10 h-10 text-[#008613] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Skilled Trades Dispatch</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Triage HVAC/Plumbing issues, captures address and symptoms, books dispatch windows, and triggers automated follow-up texts with ETA links.
              </p>
            </div>

            <div className="bg-white/5 border border-[#008613]/40 p-6 rounded-xl relative">
               <div className="absolute top-4 right-4 bg-[#ffea00] text-black text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5 animate-pulse"></span>
                Live Template
              </div>
              <Scale className="w-10 h-10 text-[#008613] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Legal/Professional Intake</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Conducts preliminary case vetting, blocks solicitation calls, schedules initial consultations, and logs all case details securely into legal CRM databases.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-black mb-6">Stop missing the calls that matter.</h2>
          <p className="text-xl text-gray-700 mb-10">
            A flawless front desk is no longer a luxury. It is a technical guarantee.
          </p>
          <Link
            to="/signup"
            state={{
              from: `${location.pathname}${location.search}${location.hash}`,
            }}
          >
            <Button size="lg" className="bg-[#008613] text-white hover:bg-[#ffea00] hover:text-black font-bold text-lg px-12 py-6 h-auto transition-colors duration-300">
              Deploy My Receptionist
            </Button>
          </Link>
        </div>
      </section>
    </DigitalReceptionistLayout>
  );
};

export default DigitalReceptionistServicesPage;