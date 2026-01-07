
import React from 'react';
import { Target, Eye, Shield, Award, Users, BarChart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header with improved typography */}
      <section className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-black mb-8 animate-fade-up">نماء: ريادة توريد المستقبل</h1>
          <p className="text-lg sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-up delay-100">
            نحن القوة المحركة خلف سلاسل التوريد لأكبر المشروعات القومية المصرية، نجمع بين الإرث الصناعي والابتكار اللوجستي.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 h-full border-white/5 border-l">
            {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/5 h-full"></div>)}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-8 leading-tight">مسيرتنا في بناء غدٍ أفضل</h2>
            <div className="space-y-6 text-slate-600 text-lg sm:text-xl leading-loose font-medium">
              <p>تأسست شركة نماء برؤية ثاقبة تهدف إلى إعادة صياغة معايير توريد مواد البناء في السوق المصري، مع التركيز التام على الجودة الفنية والالتزام بالمواعيد.</p>
              <p>على مدار سنوات من التفوق، استطعنا نسج شبكة من الشراكات الاستراتيجية مع عمالقة الصناعة مثل لافارج والسويس للأسمنت وحديد عز، مما مكننا من توفير حلول متكاملة للمقاولين وشركات التطوير العقاري.</p>
              <p>نؤمن في نماء أن كل مشروع نقوم بتوريده هو لبنة في بناء مستقبل مصر، لذا نتعامل مع كل طلب توريد بمسؤولية وطنية وهندسية كاملة.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative opacity-0 animate-scale-in">
            <div className="absolute -inset-4 bg-emerald-600/10 rounded-3xl -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200" 
              alt="Nama Logistics Construction" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[400px] sm:h-[600px] object-cover" 
            />
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 sm:p-12 rounded-2xl z-20 shadow-2xl animate-fade-up delay-300">
              <div className="text-5xl sm:text-6xl font-black text-emerald-500 mb-2">100%</div>
              <div className="font-extrabold text-sm sm:text-base text-slate-400 uppercase tracking-widest">توريد مطابق للمواصفات</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with responsive grid */}
      <section className="bg-slate-50 py-24 sm:py-32 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: <Target className="w-12 h-12" />, title: 'رسالتنا', desc: 'تمكين قطاع الإنشاءات عبر توفير حلول توريد مبتكرة تضمن استدامة نمو المشروعات العمرانية القومية.', color: 'border-emerald-600' },
              { icon: <Eye className="w-12 h-12" />, title: 'رؤيتنا', desc: 'أن نكون الاسم الأكثر ثقة والعمود الفقري لسلاسل توريد مواد البناء في منطقة الشرق الأوسط.', color: 'border-slate-800' },
              { icon: <Shield className="w-12 h-12" />, title: 'قيمنا', desc: 'النزاهة المهنية، الشفافية الفنية، التفاني في خدمة العميل، والابتكار المستمر في الحلول اللوجستية.', color: 'border-emerald-600' }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-10 sm:p-12 rounded-2xl shadow-sm border-t-8 ${item.color} hover-lift opacity-0 animate-scale-in delay-${i*100}`}>
                <div className="text-slate-800 mb-8">{item.icon}</div>
                <h3 className="text-2xl font-black text-slate-800 mb-6">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
