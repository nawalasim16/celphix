import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
const ComparisonSection = () => {
  const humanLimits = ['High Salary + Benefits', '8-Hour Limit', 'Inconsistent Pitch', 'High Turnover', 'Sick Leaves/Holidays'];
  const celphixAdvantages = ['90% Cost Reduction', '24/7/365 Availability', 'Precise Brand Voice', 'Zero Training Time', 'Instant Scalability'];
  return <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Part 1: Workforce Audit */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#008613] text-center mb-12">
            Workforce Audit
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Human Opener Card */}
            <div className="bg-white border-2 border-[#008613] rounded-xl shadow-lg hover-glow-card p-8">
              <h3 className="text-2xl font-bold text-[#008613] mb-6 text-center">
                Human Opener
              </h3>
              <ul className="space-y-4">
                {humanLimits.map((item, index) => <li key={index} className="flex items-start text-[#008613]">
                    <XCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>)}
              </ul>
            </div>

            {/* Celphix Agent Card */}
            <div className="bg-[#008613] border-2 border-transparent rounded-xl shadow-lg hover-glow-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="celphix-glow">Celphix</span> Agent
              </h3>
              <ul className="space-y-4">
                {celphixAdvantages.map((item, index) => <li key={index} className="flex items-start text-white">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Part 2: Profit Optimizer */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#008613] text-center mb-12">
            Maximize Your Margin
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option A */}
            <div className="bg-white border-2 border-[#008613] rounded-xl shadow-lg hover-glow-card hover:bg-[#ffea00] hover:text-[#008613] transition-all duration-300 p-8 group">
              <h3 className="text-3xl font-bold text-[#008613] mb-4 group-hover:text-[#008613]">
                $0.05 Per Minute
              </h3>
              <p className="text-gray-700 text-lg group-hover:text-[#008613]">
                Best for low volume or individual testing
              </p>
            </div>

            {/* Option B */}
            <div className="bg-white border-2 border-[#008613] rounded-xl shadow-lg hover-glow-card hover:bg-[#ffea00] transition-all duration-300 p-8 relative group">
              <div className="absolute -top-4 right-4 bg-[#ffea00] text-[#008613] font-bold px-4 py-2 rounded-full text-sm group-hover:bg-[#008613] group-hover:text-[#ffea00]">
                Best Value
              </div>
              <h3 className="text-3xl font-bold text-[#008613] mb-4 group-hover:text-[#008613]">$249 / Month</h3>
              <p className="text-gray-700 text-lg mb-2 group-hover:text-[#008613]">
                9 Hours a Day | All Weekdays
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ComparisonSection;