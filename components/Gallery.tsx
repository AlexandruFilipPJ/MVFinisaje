
import React, { useState } from 'react';
import { Play, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const items = [
    { type: 'photo', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', title: 'Apartament Modern' },
    { type: 'photo', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop', title: 'Living Minimalist' },
    { type: 'video', url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070&auto=format&fit=crop', title: 'Proces Finisaje Baie' },
    { type: 'photo', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop', title: 'Detalii Rigips' },
    { type: 'photo', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop', title: 'Montaj Gresie' },
    { type: 'video', url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop', title: 'Renovare Completă Oradea' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portofoliu Lucrări</h2>
            <p className="text-slate-600 text-lg">Vedeți calitatea muncii noastre în proiectele finalizate.</p>
          </div>
          
          <div className="flex bg-slate-100 p-1 rounded-full shrink-0">
            {(['all', 'photo', 'video'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === type ? 'bg-orange-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {type === 'all' ? 'Toate' : type === 'photo' ? 'Foto' : 'Video'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-bold text-xl mb-1">{item.title}</p>
                <p className="text-orange-400 text-sm font-medium uppercase tracking-wider">{item.type === 'photo' ? 'Fotografie Proiect' : 'Video Prezentare'}</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {item.type === 'video' ? (
                  <Play className="text-white fill-white w-5 h-5" />
                ) : (
                  <Maximize2 className="text-white w-5 h-5" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-slate-500 italic">... și multe alte proiecte în desfășurare pe străzile din Oradea!</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
