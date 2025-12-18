
import React from 'react';
import { Paintbrush, LayoutTemplate, Layers, Square, Construction } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Vopsit Lavabil",
    description: "Aplicare vopsea lavabilă de interior cu finisaj impecabil și uniform."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "Gresie și Faianță",
    description: "Montaj ceramic profesional pentru băi, bucătării și pardoseli exterioare."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Gletuire și Șlefuire",
    description: "Pregătirea pereților prin gletuire stratificată și șlefuire mecanică."
  },
  {
    icon: <Construction className="w-8 h-8" />,
    title: "Sisteme Rigips",
    description: "Pereți despărțitori, scafe decorative și tavane suspendate din gips carton."
  },
  {
    icon: <Square className="w-8 h-8" />,
    title: "Montaj Parchet",
    description: "Pardoseli calde - parchet laminat sau stratificat cu atenție la detalii."
  },
  {
    icon: <Construction className="w-8 h-8" />,
    title: "Amenajări Complete",
    description: "Proiecte la cheie, de la stadiul de gri până la mutarea finală."
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Serviciile Noastre</h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Oferim o gamă completă de servicii pentru finisaje interioare, folosind cele mai noi tehnici și materiale.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
