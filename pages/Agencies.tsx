
import React from 'react';
import { AGENCIES } from '../constants';
// Added ArrowLeft to imports
import { Award, ShieldCheck, BadgeCheck, CheckCircle2, Factory, ArrowLeft } from 'lucide-react';
import Reveal from '../components/Reveal';

const Agencies: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="bg-slate-950 text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 scale-110">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="Industrial" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Reveal animation="up">
            <span className="inline-block px-6 py-2 border border-emerald-500/30 rounded-full text-emerald-500 font-black text-xs uppercase tracking-widest mb-8">شبكة التوزيع المعتمدة</span>
            <h1 className="text-6xl md:text-[6.5rem] font-black mb-8 tracking-tighter leading-none">شراكات <span className="text-emerald-500">استراتيجية</span></h1>
            <p className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
              نحن لا نمثل مجرد شركات، نحن نمثل القلاع الصناعية الكبرى في مصر، ونضمن وصول عصب البناء لمواقعكم بكل أمان.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-40 max-w-7xl mx-auto px-6">
        <div className="space-y-48">
          {AGENCIES.map((agency, index) => (
            <div 
              key={agency.id} 
              className={`flex flex-col lg:flex-row items-center gap-24 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <Reveal animation={index % 2 === 0 ? 'right' : 'left'} className="relative group">
                  <div className="absolute -inset-8 bg-emerald-600/10 rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-all duration-1000 blur-xl"></div>
                  <div className="relative h-[600px] overflow-hidden rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-200">
                    <img 
                      src={agency.imageUrl} 
                      alt={agency.name} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-12 right-12 flex flex-col items-end">
                      <span className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-black flex items-center text-lg tracking-widest shadow-2xl animate-float">
                        <BadgeCheck className="w-6 h-6 ml-4" />
                        الوكالة المعتمدة
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="w-full lg:w-1/2">
                <Reveal animation={index % 2 === 0 ? 'left' : 'right'} delay={200} className="space-y-10">
                  <div className="flex items-center gap-10">
                    <div className="w-32 h-32 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100 flex items-center justify-center hover-glow transition-all duration-500">
                      <img src={agency.logo} alt={agency.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        {agency.name}
                      </h3>
                      <div className="h-2 w-24 bg-emerald-600 mt-5 rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                    {agency.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {["توريد لحظي", "شهادات ASTM", "دعم هندسي", "أسعار المصنع"].map((f, i) => (
                      <div key={i} className="flex items-center gap-5 bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <span className="font-black text-xl text-slate-800">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10">
                    <button className="bg-slate-950 text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] flex items-center group">
                      طلب كراسة المواصفات
                      <ArrowLeft className="mr-4 group-hover:-translate-x-2 transition-transform" />
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
