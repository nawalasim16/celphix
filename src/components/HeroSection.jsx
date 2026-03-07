import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HOME_HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1684315062163-1246f37fdb02?auto=format&fit=crop&w=2000&q=72';

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const preload = new Image();
    preload.src = HOME_HERO_IMAGE_URL;

    if (preload.complete) {
      setIsImageLoaded(true);
      return undefined;
    }

    const onLoad = () => setIsImageLoaded(true);
    preload.addEventListener('load', onLoad);

    return () => preload.removeEventListener('load', onLoad);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={HOME_HERO_IMAGE_URL}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        sizes="100vw"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsImageLoaded(true)}
        style={{ transform: 'scale(1.05)' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center transition-opacity duration-150 ${isImageLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <h1 className="flex flex-col items-center mb-8 leading-tight">
          <span className="text-4xl md:text-5xl font-bold text-white mb-2">Stop hiring</span>
          <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white">
            Start <span className="font-bold"><span className="animate-cel">Cel</span><span className="animate-phix">phixing</span></span>!
          </span>
        </h1>

        <Button
          onClick={scrollToAbout}
          size="lg"
          className="bg-[#008613] text-white border-2 border-white hover:bg-[#ffea00] hover:text-[#008613] hover:border-[#008613] transition-all duration-300 text-lg px-12 py-6 h-auto font-bold mt-8"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;