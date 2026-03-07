import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: 'The Death of the 2-Second Latency',
      snippet: 'Why 900ms is the new benchmark for AI human-parity and how we achieved it.',
      image: 'https://images.unsplash.com/photo-1504983875-d3b163aba9e6',
      alt: 'Technical diagram showing latency improvements in AI voice systems',
    },
    {
      title: 'The ROI of 24/7 Openers',
      snippet: 'A data-driven look at how BPOs are reclaiming 40% of their lost revenue by automating night shifts.',
      image: 'https://images.unsplash.com/photo-1686061593213-98dad7c599b9',
      alt: 'Business analytics dashboard showing ROI metrics',
    },
    {
      title: 'Training LLMs for Objection Handling',
      snippet: 'How we engineered Celphix agents to navigate "No" and turn it into a scheduled appointment.',
      image: 'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d',
      alt: 'AI training interface for conversational objection handling',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#008613] mb-4">
            Blog
          </h2>
          <p className="text-lg text-gray-700">
            Engineering the future of conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white border-2 border-transparent rounded-xl shadow-lg hover-glow-card overflow-hidden group cursor-pointer transform hover:scale-105"
              onClick={() => navigate('/blog')}
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#008613] mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {post.snippet}
                </p>
                <div className="flex items-center text-[#008613] font-semibold group-hover:text-[#ffea00] transition-colors">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate('/blog')}
            size="lg"
            className="bg-[#008613] text-white hover:bg-[#ffea00] hover:text-[#008613] transition-all duration-300 text-lg px-12 py-6 h-auto font-bold"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;