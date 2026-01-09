
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Truck, ShieldCheck, Factory, Building2 } from 'lucide-react';
import { SERVICES } from '../constants';
import Reveal from '../components/Reveal';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000", // موقع بناء ضخم
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000", // مصنع أسمنت
  "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=2000", // حديد تسليح
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"  // أسطول لوجستي
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-slate-50">
      {/* Hero Slider Section */}
      <section className="relative h-[90vh] md:screen flex items-center bg-slate-950 overflow-hidden">
        {HERO_IMAGES.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-40' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              className={`w-full h-full object-cover transition-transform duration-[5s] ease-linear ${idx === currentSlide ? 'scale-110' : 'scale-100'}`}
              alt={`Nama Slide ${idx}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-[1]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-12">
          <div className="max-w-4xl">
            <Reveal animation="right">
              <span className="inline-block bg-emerald-600 text-white px-4 py-1 rounded-md text-xs font-black uppercase tracking-[0.3em] mb-6">
                شريككم الاستراتيجي في البناء والتعمير
              </span>
            </Reveal>
            <Reveal animation="right" delay={100}>
              <h1 className="text-5xl md:text-[7rem] font-black text-white leading-[1.1] md:leading-[1.05] mb-8 tracking-tighter">
                نبني <span className="text-emerald-500">مستقبل</span><br />
                الوطن <span className="text-slate-400">بصلابة</span>
              </h1>
            </Reveal>
            <Reveal animation="right" delay={200}>
              <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium">
                نماء هي الواجهة الموثوقة لتوريد الأسمنت والحديد والجبس لكبرى المشروعات القومية المصرية، نضمن لك الجودة والالتزام في كل توريدة.
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-4">
              <Reveal animation="up" delay={400}>
                <Link to="/products/all" className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-2xl shadow-emerald-900/20 flex items-center group">
                  استكشف المنتجات
                  <ArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </Reveal>
              <Reveal animation="up" delay={500}>
                <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-black text-lg transition-all">
                  اطلب عرض سعر
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3 space-x-reverse">
          {HERO_IMAGES.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-emerald-500' : 'w-3 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
          {[
            { n: '500K+', l: 'طن سنوياً', icon: <Truck />, color: 'text-emerald-600' },
            { n: '15+', l: 'عام خبرة', icon: <ShieldCheck />, color: 'text-blue-600' },
            { n: '120+', l: 'مشروع قومي', icon: <Factory />, color: 'text-slate-800' },
            { n: '100%', l: 'جودة معتمدة', icon: <CheckCircle2 />, color: 'text-amber-600' }
          ].map((stat, i) => (
            <div key={i} className="p-8 md:p-12 text-center border-l border-slate-50 last:border-l-0 hover:bg-slate-50 transition-colors">
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {React.cloneElement(stat.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
              </div>
              <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{stat.n}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <Reveal animation="up">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
                قوة <span className="text-emerald-600">اللوجستيات</span> المتكاملة
              </h2>
              <div className="h-1.5 w-24 bg-emerald-600 mx-auto rounded-full mb-8"></div>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                نحن لا نكتفي ببيع المواد، بل ندير لك سلاسل التوريد لضمان عدم توقف موقعك الإنشائي تحت أي ظرف.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <Reveal key={i} animation="up" delay={i * 150}>
                <div className="group bg-white p-10 rounded-3xl border border-slate-100 hover:border-emerald-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                  <div className="mb-8 p-5 bg-slate-50 rounded-2xl w-fit group-hover:bg-emerald-50 transition-colors">
                    {React.cloneElement(s.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10 text-slate-700 group-hover:text-emerald-600 transition-colors" })}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
