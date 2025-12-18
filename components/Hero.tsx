
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Eleganță și Calitate în <br />
          <span className="text-orange-500">Fiecare Detaliu</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-slate-200 max-w-2xl mx-auto font-light">
          MV Finisaje aduce profesionalismul și experiența în locuința ta. Suntem o echipă din Oradea dedicată finisajelor de top.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#servicii" 
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 group"
          >
            Vezi Servicii
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-full transition-all border border-white/30"
          >
            Cere Ofertă
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
