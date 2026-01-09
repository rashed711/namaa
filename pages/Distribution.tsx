
import React from 'react';
import { Truck, MapPin, Package, Clock, Factory } from 'lucide-react';
import Reveal from '../components/Reveal';

const Distribution: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header Section with Top Padding for Fixed Navbar */}
      <section className="bg-emerald-900 text-white pt-32 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-right">
          <Reveal animation="right">
            <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest mb-6 border border-white/10">
              التميز اللوجستي
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter">
              القدرات <br className="hidden md:block" />
              <span className="text-emerald-400">التشغيلية</span> واللوجستية
            </h1>
            <p className="text-lg md:text-2xl text-emerald-100 max-w-3xl font-medium leading-relaxed opacity-90">
              نمتلك أسطولاً وشبكة توزيع تضمن وصول توريداتكم لأي بقعة في مصر في الوقت المحدد، مع أنظمة تتبع ذكية على مدار الساعة.
            </p>
          </Reveal>
        </div>
        {/* Decorative elements */}
        <Truck className="absolute -bottom-10 -left-20 w-64 h-64 md:w-96 md:h-96 text-white/5 pointer-events-none rotate-12" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-[120px]"></div>
      </section>

      <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
          <Reveal animation="right">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 md:mb-10 leading-tight">أسطول نماء <span className="text-emerald-600 italic">الذكي</span></h2>
              <p className="text-lg md:text-xl text-slate-600 leading-loose mb-10 font-medium">
                نمتلك وندير أسطولاً ضخماً من شاحنات النقل الثقيل المجهزة بأحدث تقنيات التتبع GPS، مما يتيح لنا مراقبة مسار الشحنات وضمان أمان وصولها وتفريغها في مواقع العمل الإنشائية الأكثر تعقيداً.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-emerald-500/30 transition-all">
                  <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-2">50+</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">شاحنة نقل ثقيل</div>
                </div>
                <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all">
                  <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2">24/7</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest text-slate-400">متابعة لوجستية</div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal animation="left" delay={200}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-600/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <img 
                src="https://www.alyaum.com/uploads/images/2024/07/03/2350155.jpg" 
                alt="Truck Fleet" 
                className="relative rounded-[2.5rem] shadow-2xl w-full h-[400px] md:h-[600px] object-cover group-hover:scale-[1.02] transition-transform duration-700" 
              />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { icon: <Clock className="w-10 h-10" />, title: 'الالتزام بالمواعيد', desc: 'ندرك أن تأخير التوريد يعني توقف العمل، لذا نلتزم بجداول زمنية صارمة للتسليم.' },
            { icon: <Package className="w-10 h-10" />, title: 'أمان الشحنات', desc: 'نتبع معايير دقيقة في تعبئة وتحميل المواد لضمان عدم تعرضها للرطوبة أو التلف.' },
            { icon: <MapPin className="w-10 h-10" />, title: 'تغطية شاملة', desc: 'تغطي شبكتنا كافة المحافظات، مع تركيز خاص على المدن العمرانية الجديدة.' }
          ].map((item, i) => (
            <Reveal key={i} animation="up" delay={i * 150}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all h-full group">
                <div className="text-emerald-600 mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Distribution Centers Area */}
      <section className="bg-slate-950 py-24 md:py-40 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <Reveal animation="right">
                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">مراكز التوزيع <br /><span className="text-emerald-500">الاستراتيجية</span></h2>
                <ul className="space-y-10">
                  {[
                    { title: 'منطقة القاهرة والدلتا', desc: 'مراكز تخزين استراتيجية لتوريد الأسمنت المعبأ والصب.' },
                    { title: 'محور قناة السويس وسيناء', desc: 'نقطة انطلاق لوجستية لخدمة مشروعات بورسعيد والإسماعيلية.' },
                    { title: 'صعيد مصر', desc: 'تغطية كاملة للمحافظات من المنيا وحتى أسوان.' }
                  ].map((loc, i) => (
                    <li key={i} className="flex items-start gap-6 group">
                      <div className="bg-emerald-600/20 p-4 rounded-2xl text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <Factory className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-xl md:text-2xl mb-2">{loc.title}</h4>
                        <p className="text-slate-400 text-lg">{loc.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
           </div>
           <Reveal animation="left" delay={300}>
             <div className="bg-emerald-600 p-12 md:p-20 rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-emerald-600/20">
                <div className="relative z-10 text-center lg:text-right">
                  <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">هل تبحث عن حل لوجستي؟</h3>
                  <p className="text-xl mb-12 opacity-90 leading-relaxed font-medium">يمكننا تخصيص أسطول خاص لخدمة مشروعكم العملاق لضمان تدفق المواد بشكل يومي دون انقطاع.</p>
                  <button className="w-full sm:w-auto bg-white text-emerald-600 px-12 py-6 rounded-2xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all shadow-2xl">
                    تواصل مع القطاع اللوجستي
                  </button>
                </div>
                <MapPin className="absolute -top-10 -right-10 w-64 h-64 text-white/10 group-hover:scale-110 transition-transform pointer-events-none" />
             </div>
           </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Distribution;
