
import React from 'react';
import { CheckCircle, ShieldCheck, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581291417004-6e739845cfc7?q=80&w=2070&auto=format&fit=crop" 
              alt="Work in progress" 
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-orange-100 rounded-full -z-0 opacity-50 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 p-6 rounded-xl shadow-lg z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-orange-600 p-3 rounded-lg text-white">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-2xl">10+ Ani</p>
                  <p className="text-sm text-slate-500 font-medium">Experiență în domeniu</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" />
              Bazat în Oradea
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Transformăm Spațiile Tale în <span className="text-orange-600">Acasă</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              La <strong>MV Finisaje</strong>, ne mândrim cu atenția la detalii și calitatea execuției. Fie că este vorba de un apartament nou sau de renovarea unei case vechi, echipa noastră din Oradea este pregătită să îți ofere rezultate peste așteptări.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Materiale de cea mai înaltă calitate",
                "Respectarea strictă a termenelor de execuție",
                "Echipă profesionistă și ordonată",
                "Consultanță gratuită în alegerea soluțiilor"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-6 h-6 text-orange-500 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Află mai multe despre noi <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { ChevronRight } from 'lucide-react';
export default About;
