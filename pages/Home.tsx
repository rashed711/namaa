
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import Reveal from '../components/Reveal';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000"
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Zoom Effect */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-950">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
              index === currentSlide ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <img 
              src={img} 
              alt="Nama Industrial"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 text-white text-right">
          <div className="max-w-4xl">
            <Reveal animation="right">
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tighter">
                سيادة <span className="text-emerald-500">الجودة</span><br />
                في كل <span className="text-slate-400">توريدة</span>
              </h1>
            </Reveal>
            <Reveal animation="right" delay={200}>
              <p className="text-xl sm:text-3xl text-slate-300 mb-12 leading-relaxed font-medium max-w-2xl">
                نماء: المحرك اللوجستي الموثوق للمشاريع الإنشائية العملاقة في مصر، نضع بين أيديكم خبرة 15 عاماً من التميز.
              </p>
            </Reveal>
            <Reveal animation="up" delay={400}>
              <div className="flex flex-wrap gap-6">
                <Link to="/products/cement" className="group bg-emerald-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-500 transition-all flex items-center shadow-2xl shadow-emerald-900/20">
                  منتجاتنا الفنية
                  <ArrowLeft className="mr-4 w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-slate-950 transition-all">
                  طلب عرض سعر
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Enhanced Stats Grid */}
      <section className="relative z-20 -mt-20 mx-4 md:mx-auto max-w-7xl">
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { value: '500K+', label: 'طن توريدات سنوياً', color: 'text-emerald-600' },
            { value: '120+', label: 'مشروع قومي منفذ', color: 'text-slate-800' },
            { value: '50+', label: 'أسطول نقل ذكي', color: 'text-emerald-600' },
            { value: '15', label: 'عاماً من الخبرة', color: 'text-slate-800' }
          ].map((stat, i) => (
            <Reveal key={i} animation="scale" delay={i * 100} className="text-center group">
              <div className={`text-6xl md:text-7xl font-black mb-3 tracking-tighter transition-transform group-hover:scale-110 duration-500 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm font-black uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Core Services with Hover Depth */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">قدراتنا اللوجستية</h2>
            <div className="h-2 w-32 bg-emerald-600 mx-auto rounded-full"></div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <Reveal key={index} animation="up" delay={index * 150}>
                <div className="bg-white p-12 rounded-3xl border border-slate-200 hover-industrial group h-full">
                  <div className="bg-emerald-50 w-24 h-24 flex items-center justify-center rounded-2xl text-emerald-600 mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-700">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-12 h-12" })}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-loose text-lg font-medium">
                    {service.desc}
                  </p>
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
