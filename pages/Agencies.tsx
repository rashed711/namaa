
import React from 'react';
import { AGENCIES } from '../constants';
import { BadgeCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import Reveal from '../components/Reveal';

const Agencies: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="bg-slate-950 text-white py-24 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 scale-110">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="Industrial" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mt-10 md:mt-0">
          <Reveal animation="up">
            <span className="inline-block px-4 md:px-6 py-1.5 md:py-2 border border-emerald-500/30 rounded-full text-emerald-500 font-black text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8">شبكة التوزيع المعتمدة</span>
            <h1 className="text-4xl sm:text-6xl md:text-[6rem] lg:text-[7rem] font-black mb-6 md:mb-8 tracking-tighter leading-[1.1]">شراكات <span className="text-emerald-500 italic">استراتيجية</span></h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
              نحن لا نمثل مجرد شركات، نحن نمثل القلاع الصناعية الكبرى في مصر، ونضمن وصول عصب البناء لمواقعكم بكل أمان.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-40 max-w-7xl mx-auto px-6">
        <div className="space-y-32 md:space-y-56">
          {AGENCIES.map((agency, index) => (
            <div 
              key={agency.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <Reveal animation={index % 2 === 0 ? 'right' : 'left'} className="relative group">
                  <div className="absolute -inset-4 md:-inset-8 bg-emerald-600/10 rounded-[2rem] md:rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-all duration-1000 blur-xl"></div>
                  <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-200">
                    <img 
                      src={agency.imageUrl} 
                      alt={agency.name} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex flex-col items-end">
                      <span className="bg-emerald-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-black flex items-center text-sm md:text-lg tracking-widest shadow-2xl animate-float">
                        <BadgeCheck className="w-5 h-5 md:w-6 h-6 ml-3 md:ml-4" />
                        الوكالة المعتمدة
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="w-full lg:w-1/2">
                <Reveal animation={index % 2 === 0 ? 'left' : 'right'} delay={200} className="space-y-6 md:space-y-10">
                  <div className="flex items-center gap-6 md:gap-10">
                    <div className="w-20 h-20 md:w-32 h-32 bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 flex items-center justify-center hover-glow transition-all duration-500">
                      <img src={agency.logo} alt={agency.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                        {agency.name}
                      </h3>
                      <div className="h-1.5 w-16 md:w-24 bg-emerald-600 mt-3 md:mt-5 rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">
                    {agency.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {["توريد لحظي", "شهادات ASTM", "دعم هندسي", "أسعار المصنع"].map((f, i) => (
                      <div key={i} className="flex items-center gap-4 md:gap-5 bg-white p-5 md:p-7 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 h-12 bg-emerald-50 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-600">
                          <CheckCircle2 className="w-5 h-5 md:w-6 h-6" />
                        </div>
                        <span className="font-black text-base md:text-xl text-slate-800">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 md:pt-10">
                    <button className="w-full sm:w-auto bg-slate-950 text-white px-10 md:px-14 py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center group">
                      طلب كراسة المواصفات
                      <ArrowLeft className="mr-3 md:mr-4 group-hover:-translate-x-2 transition-transform" />
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
