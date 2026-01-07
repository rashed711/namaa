
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Building2, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="bg-slate-900 text-white py-24 border-b-4 border-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black mb-6">تواصل مباشر مع قطاع التعاقدات</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">نحن ندرك قيمة الوقت في المشروعات الكبرى. فريقنا الفني والمالي جاهز لاستقبال طلباتكم عبر القنوات الرسمية المباشرة.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* المقر الرئيسي */}
          <div className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-lg mb-8">
              <MapPin className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-4">المقر الرئيسي</h3>
            <p className="text-slate-600 leading-relaxed">
              المنطقة الصناعية، التجمع الخامس، القاهرة<br />
              جمهورية مصر العربية
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <a href="#" className="text-emerald-600 font-bold text-sm flex items-center">
                عرض على خرائط جوجل <ExternalLink className="mr-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* الهواتف */}
          <div className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-lg mb-8">
              <Phone className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-4">المبيعات والتعاقدات</h3>
            <div className="space-y-3">
              <p dir="ltr" className="text-lg font-bold text-slate-800">+20 123 456 7890</p>
              <p dir="ltr" className="text-lg font-bold text-slate-800">+20 123 456 7891</p>
            </div>
            <p className="mt-4 text-xs text-slate-400 font-medium tracking-wide">* متاح واتساب للأعمال لاستقبال كراسات الشروط</p>
          </div>

          {/* البريد الإلكتروني */}
          <div className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-lg mb-8">
              <Mail className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-4">المراسلات الرسمية</h3>
            <div className="space-y-2">
              <p className="text-slate-600 font-bold">info@nama-supplies.com</p>
              <p className="text-slate-600 font-bold">sales@nama-supplies.com</p>
            </div>
          </div>
        </div>

        {/* ساعات العمل والدعم */}
        <div className="mt-20 bg-slate-50 border border-gray-200 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-8 md:mb-0">
            <Clock className="w-12 h-12 text-emerald-600 ml-6" />
            <div>
              <h4 className="text-xl font-black text-slate-800 mb-2">ساعات العمل الرسمية</h4>
              <p className="text-slate-600">نستقبل اتصالاتكم من السبت إلى الخميس: 9:00 صباحاً - 5:00 مساءً</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-white px-6 py-4 rounded-xl border border-gray-200 text-center">
              <p className="text-xs text-slate-400 font-bold mb-1 uppercase tracking-tighter">وقت الاستجابة المقدر</p>
              <p className="text-emerald-600 font-black text-lg">أقل من 120 دقيقة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <Building2 className="absolute -top-10 -right-10 w-64 h-64 text-white/10" />
          <h2 className="text-3xl font-black mb-4 relative z-10">هل ترغب في جدولة توريد شحنات ضخمة؟</h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto relative z-10">نحن متخصصون في إدارة سلاسل التوريد المعقدة للمشروعات القومية. تواصل معنا لتعيين مدير حسابات خاص بمشروعكم.</p>
          <a href="mailto:sales@nama-supplies.com" className="inline-block bg-white text-emerald-600 px-12 py-4 rounded-xl font-black hover:bg-slate-100 transition-all relative z-10">
            اطلب اجتماع فني
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
