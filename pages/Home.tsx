
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Truck, ShieldCheck, Factory, Building2 } from 'lucide-react';
import { SERVICES } from '../constants';
import Reveal from '../components/Reveal';

const HERO_IMAGES = [
  "https://media.almalnews.com/2019/7/large/%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3-%D9%84%D9%84%D8%A3%D8%B3%D9%85%D9%86%D8%AA.jpg",
  "https://assets.asharqbusiness.com/images/articles/original/16-9/SElMPp8mQm_1725698429.jpg",
  "https://felesteen.news/thumb/w920/uploads/images/1/6BKAYKKGW7S3ft6ABfLGzTtq4oDNb4-S.jpg",
  "https://safa.ps/uploads//images/8b468157be7d2cce26cc8ac102632e81.jpg"
];

const StatCounter: React.FC<{ end: number, suffix: string, duration?: number }> = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <div ref={countRef}>{count}{suffix}</div>;
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-slate-50">
      {/* Hero Slider Section */}
      <section className="relative h-[95vh] flex items-center bg-slate-950 overflow-hidden">
        {HERO_IMAGES.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-40' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              className={`w-full h-full object-cover transition-transform duration-[6s] ease-linear ${idx === currentSlide ? 'scale-110' : 'scale-100'}`}
              alt={`Nama Slide ${idx}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-[1]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-12">
          <div className="max-w-5xl">
            <Reveal animation="right">
              <span className="inline-block bg-emerald-600/90 backdrop-blur-md text-white px-5 py-2 rounded-lg text-sm font-black uppercase tracking-[0.2em] mb-8 border border-emerald-400/30">
                القوة التي ترتكز عليها نهضة مصر
              </span>
            </Reveal>
            <Reveal animation="right" delay={150}>
              <h1 className="text-6xl md:text-[8.5rem] font-black text-white leading-[1.1] md:leading-[1.0] mb-10 tracking-tighter">
                نبني <span className="shimmer-text">مستقبل</span><br />
                <span className="text-slate-200">الوطن</span> <span className="text-emerald-500 italic">بصلابة</span>
              </h1>
            </Reveal>
            <Reveal animation="right" delay={300}>
              <p className="text-xl md:text-3xl text-slate-300 mb-14 max-w-3xl leading-relaxed font-medium">
                نماء هي الواجهة الموثوقة لتوريد الأسمنت والحديد والجبس لكبرى المشروعات القومية المصرية، نضمن لك الجودة والالتزام في كل توريدة.
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-6">
              <Reveal animation="up" delay={450}>
                <Link to="/products/all" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-600/30 flex items-center group relative overflow-hidden">
                  <span className="relative z-10">استكشف الكتالوج</span>
                  <ArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
              </Reveal>
              <Reveal animation="up" delay={600}>
                <Link to="/contact" className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-12 py-6 rounded-2xl font-black text-xl transition-all hover:border-emerald-500/50">
                  اطلب عرض سعر
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-4 space-x-reverse">
          {HERO_IMAGES.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all duration-700 rounded-full shadow-lg ${i === currentSlide ? 'w-16 bg-emerald-500' : 'w-4 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="relative z-20 -mt-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white/40 overflow-hidden divide-x divide-x-reverse divide-slate-100">
          {[
            { n: 500, suffix: 'K+', l: 'طن سنوياً', icon: <Truck />, color: 'text-emerald-600' },
            { n: 15, suffix: '+', l: 'عام خبرة', icon: <ShieldCheck />, color: 'text-blue-600' },
            { n: 120, suffix: '+', l: 'مشروع قومي', icon: <Factory />, color: 'text-slate-800' },
            { n: 100, suffix: '%', l: 'جودة معتمدة', icon: <CheckCircle2 />, color: 'text-amber-600' }
          ].map((stat, i) => (
            <div key={i} className="p-10 md:p-16 text-center group hover:bg-slate-50 transition-all duration-500">
              <div className={`${stat.color} mb-6 flex justify-center group-hover:scale-125 transition-transform duration-500`}>
                {React.cloneElement(stat.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
              </div>
              <div className="text-4xl md:text-6xl font-black text-slate-900 mb-2 tracking-tight">
                <StatCounter end={stat.n} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid with Visual Enhancements */}
      <section className="py-40 industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <Reveal animation="up">
              <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4 block">قدراتنا اللوجستية</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">
                نحن لا نبيع المواد، <span className="text-emerald-600 italic">نورد الثقة</span>
              </h2>
              <div className="h-2 w-32 bg-emerald-600 mx-auto rounded-full mb-10"></div>
              <p className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
                ندير لك سلاسل التوريد الأكثر تعقيداً لضمان عدم توقف نبض العمل في موقعك الإنشائي تحت أي ظرف من الظروف.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <Reveal key={i} animation="up" delay={i * 200}>
                <div className="group relative glass-card p-12 rounded-[3rem] border border-slate-100 hover:border-emerald-500/30 transition-all duration-700 shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(5,150,105,0.15)] hover:-translate-y-4 overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-600/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="mb-10 p-6 bg-slate-950 rounded-2xl w-fit group-hover:bg-emerald-600 transition-all duration-500 group-hover:rotate-6 shadow-xl">
                      {React.cloneElement(s.icon as React.ReactElement<{ className?: string }>, { className: "w-12 h-12 text-emerald-500 group-hover:text-white transition-colors" })}
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-emerald-600 transition-colors">{s.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">{s.desc}</p>
                    <div className="mt-10 h-1 w-12 bg-slate-200 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-700"></div>
                  </div>
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
