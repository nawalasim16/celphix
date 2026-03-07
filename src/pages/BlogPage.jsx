import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Celphix</title>
        <meta name="description" content="Insights and technical deep-dives into autonomous voice communication." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-[#008613] mb-16 text-center">Engineering the Future of Conversation</h1>
          
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" alt="Latency" className="w-full h-80 object-cover" />
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black mb-4">The Death of the 2-Second Latency</h2>
              <div className="text-gray-500 mb-6 font-semibold">February 15, 2026 • 5 min read</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                For years, AI voice agents have struggled with a critical flaw: the awkward pause. When a human speaks, they expect an immediate response. A 2-second delay completely shatters the illusion of natural conversation, leading to immediate hang-ups and lost leads. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Celphix, we engineered our infrastructure to operate at sub-900ms latency. By optimizing the entire stack—from speech-to-text transcription to LLM inference and text-to-speech generation—we've reached true human-parity. In this deep dive, we explore the architectural decisions that made this possible and why anything slower is obsolete.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9" alt="Analytics" className="w-full h-80 object-cover" />
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black mb-4">The ROI of 24/7 Openers</h2>
              <div className="text-gray-500 mb-6 font-semibold">January 28, 2026 • 7 min read</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Business doesn't stop when your SDRs go home. A recent analysis of over 500 B2B campaigns revealed that up to 40% of inbound leads submit their information outside of standard business hours. When those leads aren't contacted within 5 minutes, conversion rates drop by a staggering 80%.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We deployed Celphix Openers to handle the "night shift" for 50 enterprise clients. The results were immediate: perfectly qualified leads, zero missed calls, and appointments booked directly into AE calendars while they slept. Here is the data on how automated openers are transforming unit economics.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;