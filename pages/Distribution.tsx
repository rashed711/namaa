
import React from 'react';
import { Truck, MapPin, Package, Clock, ShieldCheck, Factory } from 'lucide-react';

const Distribution: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">القدرات التشغيلية واللوجستية</h1>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto">نمتلك أسطولاً وشبكة توزيع تضمن وصول توريداتكم لأي بقعة في مصر في الوقت المحدد.</p>
        </div>
        <Truck className="absolute -bottom-10 -right-20 w-96 h-96 text-white/5 pointer-events-none" />
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">أسطول نماء الحديث</h2>
            <p className="text-lg text-slate-600 leading-loose mb-8">
              نمتلك وندير أسطولاً ضخماً من شاحنات النقل الثقيل (المقطورات والقلابات) المجهزة بأحدث تقنيات التتبع GPS، مما يتيح لنا مراقبة مسار الشحنات وضمان أمان وصولها وتفريغها في مواقع العمل الإنشائية.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 border-r-4 border-emerald-600 shadow-sm">
                <div className="text-3xl font-black text-slate-800 mb-1">50+</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">شاحنة نقل ثقيل</div>
              </div>
              <div className="bg-white p-6 border-r-4 border-slate-800 shadow-sm">
                <div className="text-3xl font-black text-slate-800 mb-1">24/7</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">متابعة لوجستية</div>
              </div>
            </div>
          </div>
          <img src="https://www.alyaum.com/uploads/images/2024/07/03/2350155.jpg" alt="Truck Fleet" className="rounded-2xl shadow-xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <Clock className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">الالتزام بالمواعيد</h3>
            <p className="text-slate-600 text-sm leading-relaxed">ندرك أن تأخير التوريد يعني توقف العمل، لذا نلتزم بجداول زمنية صارمة للتسليم لضمان سير مشروعكم بسلاسة.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <Package className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">أمان الشحنات</h3>
            <p className="text-slate-600 text-sm leading-relaxed">نتبع معايير دقيقة في تعبئة وتحميل المواد لضمان عدم تعرضها للرطوبة أو التلف أثناء عمليات النقل والتفريغ.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <MapPin className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">تغطية جغرافية شاملة</h3>
            <p className="text-slate-600 text-sm leading-relaxed">تغطي شبكتنا كافة المحافظات، مع تركيز خاص على المدن العمرانية الجديدة والمشروعات القومية الكبرى.</p>
          </div>
        </div>
      </section>

      {/* Distribution Centers Area */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl font-bold mb-8">مراكز التوزيع والمخازن</h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-emerald-600/20 p-2 rounded-lg text-emerald-500 shrink-0"><Factory className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg">منطقة القاهرة والدلتا</h4>
                    <p className="text-slate-400">مراكز تخزين استراتيجية لتوريد الأسمنت المعبأ والصب.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-emerald-600/20 p-2 rounded-lg text-emerald-500 shrink-0"><Factory className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg">محور قناة السويس وسيناء</h4>
                    <p className="text-slate-400">نقطة انطلاق لوجستية لخدمة مشروعات شرق بورسعيد والإسماعيلية.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-emerald-600/20 p-2 rounded-lg text-emerald-500 shrink-0"><Factory className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg">صعيد مصر</h4>
                    <p className="text-slate-400">تغطية كاملة للمحافظات من المنيا وحتى أسوان.</p>
                  </div>
                </li>
              </ul>
           </div>
           <div className="bg-emerald-600 p-12 rounded-3xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">هل تبحث عن حل لوجستي؟</h3>
                <p className="mb-8 opacity-90 leading-relaxed">يمكننا تخصيص أسطول خاص لخدمة مشروعكم العملاق لضمان تدفق المواد بشكل يومي دون انقطاع.</p>
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-black hover:bg-slate-100 transition-all uppercase tracking-widest text-sm">
                  تواصل مع القطاع اللوجستي
                </button>
              </div>
              <MapPin className="absolute -top-10 -right-10 w-64 h-64 text-white/10 group-hover:scale-110 transition-transform" />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Distribution;
