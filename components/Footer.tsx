
import React from 'react';
import { Hammer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-orange-600">
               <Hammer className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter">
              MV <span className="text-orange-600">FINISAJE</span>
            </span>
          </div>

          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} MV Finisaje Oradea. Toate drepturile rezervate.</p>
            <p className="mt-1">Creat cu pasiune pentru construcții de calitate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
