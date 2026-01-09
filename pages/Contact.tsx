
import React from 'react';
import { Mail, Phone, MapPin, Clock, Building2, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Header Section with Safe Area Spacing */}
      <section className="bg-slate-950 text-white pt-32 pb-20 md:pt-56 md:pb-40 border-b-4 border-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-600/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Reveal animation="up">
            <h1 className="text-4xl md:text-7xl lg:text-[6.5rem] font-black mb-10 tracking-tighter leading-tight">تواصل مع <br /><span className="text-emerald-500">قطاع التعاقدات</span></h1>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              نحن ندرك قيمة الوقت في المشروعات الكبرى. فريقنا الفني والمالي جاهز لاستقبال طلباتكم عبر القنوات الرسمية المباشرة.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* المقر الرئيسي */}
          <Reveal animation="up" delay={0}>
            <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col group">
              <div className="bg-emerald-50 w-20 h-20 flex items-center justify-center rounded-3xl mb-10 group-hover:bg-emerald-600 transition-colors">
                <MapPin className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">المقر الرئيسي</h3>
              <p className="text-xl text-slate-500 leading-relaxed mb-10 flex-grow font-medium">
                المنطقة الصناعية، التجمع الخامس، القاهرة<br />
                جمهورية مصر العربية
              </p>
              <div className="pt-8 border-t border-slate-50">
                <a href="#" className="text-emerald-600 font-black text-lg flex items-center group/link">
                  عرض الموقع على الخريطة 
                  <ExternalLink className="mr-3 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* الهواتف */}
          <Reveal animation="up" delay={150}>
            <div className="bg-slate-950 p-10 md:p-14 rounded-[3rem] shadow-2xl h-full flex flex-col group text-white">
              <div className="bg-emerald-600 w-20 h-20 flex items-center justify-center rounded-3xl mb-10">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">المبيعات والتعاقدات</h3>
              <div className="space-y-6 flex-grow">
                <p dir="ltr" className="text-3xl font-black text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer">+20 123 456 7890</p>
                <p dir="ltr" className="text-3xl font-black text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer">+20 123 456 7891</p>
              </div>
              <p className="mt-10 text-xs text-slate-400 font-black uppercase tracking-[0.2em]">* متاح واتساب لاستقبال كراسات الشروط</p>
            </div>
          </Reveal>

          {/* البريد الإلكتروني */}
          <Reveal animation="up" delay={300}>
            <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col group">
              <div className="bg-emerald-50 w-20 h-20 flex items-center justify-center rounded-3xl mb-10 group-hover:bg-emerald-600 transition-colors">
                <Mail className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">المراسلات الرسمية</h3>
              <div className="space-y-4 flex-grow">
                <p className="text-2xl font-black text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer">info@nama-supplies.com</p>
                <p className="text-2xl font-black text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer">sales@nama-supplies.com</p>
              </div>
              <p className="mt-10 text-xs text-slate-400 font-black uppercase tracking-widest">المراسلات الرسمية الموثقة</p>
            </div>
          </Reveal>
        </div>

        {/* ساعات العمل والدعم */}
        <Reveal animation="up" delay={450}>
          <div className="mt-24 bg-slate-50 border border-slate-100 rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col md:flex-row items-center text-center md:text-right gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-emerald-600">
                <Clock className="w-12 h-12" />
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">ساعات العمل الرسمية</h4>
                <p className="text-lg md:text-xl text-slate-500 font-medium">نستقبل اتصالاتكم من السبت إلى الخميس: 9:00 صباحاً - 5:00 مساءً</p>
              </div>
            </div>
            <div className="bg-white px-10 py-6 rounded-3xl border border-slate-200 text-center shadow-sm">
              <p className="text-xs text-slate-400 font-black mb-2 uppercase tracking-widest">وقت الاستجابة المقدر</p>
              <p className="text-emerald-600 font-black text-2xl md:text-3xl">أقل من 120 دقيقة</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <Reveal animation="scale">
          <div className="bg-emerald-600 rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl shadow-emerald-600/30">
            <Building2 className="absolute -top-10 -right-10 w-64 h-64 text-white/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">هل ترغب في جدولة توريد <br />شحنات ضخمة؟</h2>
              <p className="text-xl md:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto font-medium opacity-90">نحن متخصصون في إدارة سلاسل التوريد المعقدة للمشروعات القومية. تواصل معنا لتعيين مدير حسابات خاص بمشروعكم.</p>
              <a href="mailto:sales@nama-supplies.com" className="inline-block bg-slate-950 text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-emerald-600 transition-all shadow-2xl">
                اطلب اجتماع فني مباشر
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Contact;
