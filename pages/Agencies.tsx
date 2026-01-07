
import React from 'react';
import { AGENCIES } from '../constants';
import { Award, ShieldCheck, BadgeCheck, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';

const Agencies: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-110">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Industrial" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Reveal animation="up">
            <h1 className="text-5xl md:text-7xl font-black mb-8">شركاء النجاح الصناعي</h1>
            <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-medium">
              نحن نمثل النخبة الصناعية في مصر، ونضمن وصول منتجاتهم بمواصفاتها الأصلية لمواقعكم.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="space-y-40">
          {AGENCIES.map((agency, index) => (
            <div 
              key={agency.id} 
              className={`flex flex-col lg:flex-row items-center gap-20 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <Reveal animation={index % 2 === 0 ? 'right' : 'left'} className="relative group">
                  <div className="absolute -inset-6 bg-emerald-600/10 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-all duration-700"></div>
                  <div className="relative h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img 
                      src={agency.imageUrl} 
                      alt={agency.name} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 right-10">
                      <span className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-black flex items-center text-sm tracking-widest">
                        <BadgeCheck className="w-5 h-5 ml-3" />
                        وكيل رسمي
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="w-full lg:w-1/2">
                <Reveal animation={index % 2 === 0 ? 'left' : 'right'} delay={200} className="space-y-8">
                  <div className="flex items-center gap-8">
                    <div className="w-24 h-24 bg-white p-4 rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center">
                      <img src={agency.logo} alt={agency.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter">
                        {agency.name}
                      </h3>
                      <div className="h-1.5 w-16 bg-emerald-600 mt-3"></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    {agency.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["توريد لحظي", "شهادات ASTM", "دعم هندسي", "أسعار المصنع"].map((f, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border-r-4 border-emerald-600">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        <span className="font-bold text-slate-800">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-xl hover:shadow-emerald-200">
                      طلب كراسة المواصفات
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Agencies;
