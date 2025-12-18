
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Vă mulțumim! Mesajul dvs. a fost trimis. Echipa MV Finisaje vă va contacta în curând.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ești gata să <br/><span className="text-orange-500">Începem Proiectul?</span></h2>
            <p className="text-slate-400 text-lg mb-12">
              Contactează-ne pentru o evaluare gratuită la fața locului în Oradea și împrejurimi. Suntem aici să îți oferim cele mai bune soluții pentru bugetul tău.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="bg-orange-600/20 p-4 rounded-xl text-orange-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Sună-ne</p>
                  <p className="text-xl font-bold">+40 7XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-orange-600/20 p-4 rounded-xl text-orange-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-bold">contact@mvfinisaje.ro</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-orange-600/20 p-4 rounded-xl text-orange-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Locație</p>
                  <p className="text-xl font-bold">Oradea, Bihor, România</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8">Trimite-ne un mesaj</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nume Complet</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                    placeholder="Ion Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                    placeholder="07xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                  placeholder="ion@exemplu.ro"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Mesajul Tău</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all resize-none"
                  placeholder="Detalii despre proiectul tău..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all"
              >
                Trimite Solicitarea
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
