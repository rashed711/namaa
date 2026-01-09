
import React from 'react';
import { Target, Eye, Shield, Award, Users, BarChart, Briefcase, Globe, CheckCircle } from 'lucide-react';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header Section */}
      <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Nama About" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal animation="right">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9]">نماء: القصة<br /><span className="text-emerald-500">خلف كل بناء</span></h1>
          </Reveal>
          <Reveal animation="right" delay={100}>
            <p className="text-xl md:text-3xl text-slate-400 max-w-3xl leading-relaxed font-medium">
              نحن لسنا مجرد موردين، نحن العمود الفقري الذي يرتكز عليه حلم النهضة العمرانية في مصر.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CEO Message / Company Intro */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <Reveal animation="right">
            <div className="sticky top-32">
              <h2 className="text-4xl font-black text-slate-900 mb-8 border-r-8 border-emerald-600 pr-6">رؤية قيادية</h2>
              <p className="text-2xl text-slate-600 leading-loose italic font-serif mb-12">
                "منذ اللحظة الأولى لتأسيس نماء، كان الهدف واضحاً: أن نكون الاسم الذي لا يتردد فيه المهندسون والمقاولون عندما يتعلق الأمر بسلامة وجودة المواد الإنشائية."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-black">N</div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">مجلس إدارة نماء</h4>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">للاستثمار والتوريدات</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal animation="left" delay={200}>
            <div className="space-y-10 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                بدأت رحلة نماء كاستجابة طبيعية للنمو الهائل في قطاع التشييد والبناء المصري. لقد أدركنا أن الفجوة الحقيقية ليست في توفر المواد، بل في **موثوقية التوريد والالتزام الفني**.
              </p>
              <p>
                اليوم، نماء تفتخر بكونها شريكاً موثوقاً في مشاريع العاصمة الإدارية الجديدة، وتطوير الموانئ المصرية، وشبكات الطرق والكباري القومية. نحن لا نورد الأسمنت والحديد فحسب؛ نحن نورد "الطمأنينة" للمهندس في موقع العمل.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Briefcase className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="text-lg font-black text-slate-900 mb-2">قطاع الشركات</h4>
                  <p className="text-sm text-slate-500 font-bold">حلول متكاملة لكبار المقاولين والمطورين العقاريين.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Globe className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="text-lg font-black text-slate-900 mb-2">التوسع القومي</h4>
                  <p className="text-sm text-slate-500 font-bold">تغطية لوجستية تصل إلى أبعد النقاط العمرانية في مصر.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values & Standards */}
      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6">ثوابت نماء <span className="text-emerald-500">الجوهرية</span></h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">المعايير التي لا نتنازل عنها في كل توريدة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Shield className="w-12 h-12" />, title: 'الجودة الفنية القصوى', desc: 'نخضع كافة المواد لاختبارات معملية دورية لضمان مطابقتها للمواصفات القياسية المصرية (ES) والعالمية (ASTM).' },
              { icon: <Award className="w-12 h-12" />, title: 'الوكالة الحصرية والمعتمدة', desc: 'نحن الوكيل الرسمي لنخبة المصانع (لافارج، عز، السويس) مما يضمن لك الحصول على المنتج الأصلي بأفضل سعر.' },
              { icon: <Users className="w-12 h-12" />, title: 'الشفافية التعاقدية', desc: 'علاقتنا مع عملائنا تقوم على الوضوح التام في جداول التوريد، الأسعار، وشهادات المنشأ والاختبار.' }
            ].map((v, i) => (
              <Reveal key={i} animation="up" delay={i * 200}>
                <div className="bg-white/5 p-12 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-emerald-500 mb-8">{v.icon}</div>
                  <h3 className="text-2xl font-black mb-6">{v.title}</h3>
                  <p className="text-slate-400 leading-loose text-lg font-medium">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Compliance */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">الالتزام بالاستدامة والمعايير البيئية</h2>
            <div className="space-y-6">
              {[
                "دعم مبادرات البناء الأخضر باستخدام أسمنت منخفض الكربون.",
                "تحسين كفاءة النقل لتقليل الانبعاثات الكربونية لأسطولنا.",
                "التخلص الآمن من مخلفات التعبئة والتغليف الصناعي.",
                "شهادات مطابقة بيئية معتمدة لكافة المنتجات الموردة."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle className="text-emerald-600 w-6 h-6 shrink-0" />
                  <span className="text-lg text-slate-700 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
             <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-600/20 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform"></div>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VL7mqXz0auGngvIXCH0oJ2y8oVMt6u0FFQ&s" 
                  alt="Quality Control" 
                  className="relative z-10 rounded-2xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
