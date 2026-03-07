import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    {
      title: "LIQUID",
      tagline: "Pay-As-You-Go",
      explanation: "Use this if you only have occasional calls and don't want a monthly bill. You only pay for the exact number of minutes the AI spends talking to people.",
      price: "Starting from $0.05/min",
      route: "/liquid-agent"
    },
    {
      title: "RECEPTIONIST",
      tagline: "Automated Inbound",
      explanation: "Pick this if you want an AI to answer every phone call, book appointments, and transfer customers to the right person. You get unlimited minutes for a flat monthly fee.",
      price: "Starting from $149",
      route: "/digital-receptionist"
    },
    {
      title: "COMMAND CENTER",
      tagline: "High-Volume Outbound",
      explanation: "Best for businesses that need to make thousands of sales or marketing calls automatically. This plan includes 10,000 minutes and CRM tools for large outreach teams.",
      price: "Starting from $249",
      route: "/command-center"
    }
  ];

  return (
    <div 
      className="relative py-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-white font-medium transition-colors hover:text-[#ffea00] flex items-center outline-none">
        What we do
        <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-[900px] z-50 bg-transparent animate-in fade-in duration-200">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl flex flex-col font-sans overflow-hidden">
            {products.map((product, idx) => (
              <Link
                key={idx}
                to={product.route}
                className="flex flex-row items-center py-8 px-10 hover:bg-[#008613]/5 transition-colors cursor-pointer group"
              >
                {/* Title & Tagline */}
                <div className="w-1/4 pr-6">
                  <h3 className="font-bold text-xl text-[#008613] mb-1 group-hover:text-[#008613]/80 transition-colors tracking-tight">
                    {product.title}
                  </h3>
                  <p className="font-bold text-gray-900 text-sm">
                    {product.tagline}
                  </p>
                </div>

                {/* Explanation */}
                <div className="w-1/2 px-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.explanation}
                  </p>
                </div>

                {/* Price */}
                <div className="w-1/4 text-right pl-6">
                  <span className="font-bold text-black text-lg">
                    {product.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;