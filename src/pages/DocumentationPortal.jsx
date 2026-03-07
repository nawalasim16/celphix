import React from 'react';
import { Helmet } from 'react-helmet';
import CommandCenterLayout from '@/components/CommandCenterLayout';

const DocumentationPortal = () => {
  return (
    <CommandCenterLayout>
      <Helmet>
        <title>Documentation - Celphix Command Center</title>
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col py-12 px-4">
        <main className="flex-grow flex container mx-auto max-w-7xl">
          <aside className="w-72 pr-8 hidden md:block border-r border-gray-200">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Contents</h3>
              <nav className="space-y-4 font-medium text-gray-600">
                <div className="text-[#008613] font-bold border-l-4 border-[#008613] pl-3 -ml-4">Quick Start Protocol</div>
                <div className="hover:text-[#008613] hover:pl-2 transition-all cursor-pointer">API & Webhook Architecture</div>
                <div className="hover:text-[#008613] hover:pl-2 transition-all cursor-pointer">Knowledge Base Engineering</div>
                <div className="hover:text-[#008613] hover:pl-2 transition-all cursor-pointer">Latency Optimization</div>
              </nav>
            </div>
          </aside>
          
          <div className="flex-grow md:pl-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-black text-[#008613] mb-8 tracking-tight">Quick Start Protocol</h1>
              <div className="prose max-w-none text-gray-700">
                <p className="text-xl mb-10 leading-relaxed text-gray-600 border-l-4 border-[#ffea00] pl-6 py-2">
                  Welcome to the Celphix documentation. Here you will find the architecture to deploy autonomous voice agents via the Command Center interface.
                </p>
                
                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Initializing the Core</h2>
                <p className="mb-6 text-lg">
                  To instantiate a new agent via the API, send a POST request to our provisioning endpoint. Ensure your API key has the correct tier clearance.
                </p>
                
                <div className="bg-[#00231f] text-gray-300 p-6 rounded-xl font-mono text-sm shadow-2xl relative group">
                  <div className="absolute top-0 right-0 p-2 text-xs text-gray-500 font-sans">BASH</div>
                  <pre className="overflow-x-auto whitespace-pre-wrap">
<span className="text-pink-400">curl</span> -X POST https://api.celphix.com/v1/agent \
  -H <span className="text-[#ffea00]">"Authorization: Bearer YOUR_API_KEY"</span> \
  -H <span className="text-[#ffea00]">"Content-Type: application/json"</span> \
  -d <span className="text-green-400">'{'{'}"tier": "02", "campaign": "outbound_sales"{'}'}'</span>
                  </pre>
                </div>

                <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900">Webhook Handshakes</h2>
                <p className="mb-6 text-lg">
                  Agents post real-time updates back to your infrastructure. Configure your webhook receiver to handle standard JSON payloads for call initiation, sentiment shifts, and hangup events.
                </p>
                
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl font-mono text-sm text-gray-800 shadow-inner">
                  <pre className="overflow-x-auto">
{`{
  "event": "call.completed",
  "data": {
    "agent_id": "agt_02_xyz",
    "duration_ms": 142000,
    "sentiment_score": 0.89,
    "crm_synced": true
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </CommandCenterLayout>
  );
};

export default DocumentationPortal;