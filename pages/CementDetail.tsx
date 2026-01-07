
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CEMENT_PRODUCTS } from '../constants';
import { FileText, ChevronRight, CheckCircle2, Factory, Truck } from 'lucide-react';

const CementDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = CEMENT_PRODUCTS.find(p => p.id === id);

  if (!product) return <div className="py-20 text-center">المنتج غير موجود</div>;

  return (
    <div className="pb-20">
      <div className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 space-x-reverse text-sm mb-6 text-slate-400">
            <Link to="/" className="hover:text-emerald-500">الرئيسية</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products/cement" className="hover:text-emerald-500">الأسمنت</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{product.name}</span>
          </nav>
          <h1 className="text-3xl font-black">{product.name}</h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <img src={product.imageUrl} alt={product.name} className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-10" />
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-r-4 border-emerald-600 pr-4">الوصف التقني</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">{product.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="bg-white p-8 border border-gray-200">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center">
                  <FileText className="w-5 h-5 text-emerald-600 ml-2" /> المواصفات القياسية
                </h3>
                <ul className="space-y-4">
                  {product.specifications?.map((spec, i) => (
                    <li key={i} className="flex items-start space-x-3 space-x-reverse text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 border border-gray-200">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center">
                  <Factory className="w-5 h-5 text-emerald-600 ml-2" /> مجالات الاستخدام
                </h3>
                <ul className="space-y-4">
                  {product.applications?.map((app, i) => (
                    <li key={i} className="flex items-start space-x-3 space-x-reverse text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0"></div>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6">طلب توريد</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">للحصول على عرض سعر فني ومالي لهذا المنتج، يرجى تعبئة بيانات المشروع أو التواصل معنا مباشرة.</p>
              <Link to="/contact" className="block w-full bg-emerald-600 text-white text-center py-4 rounded font-bold hover:bg-emerald-700 transition-all">
                اطلب عرض سعر
              </Link>
            </div>

            <div className="bg-emerald-50 p-8 border border-emerald-100 rounded-xl">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <Truck className="w-6 h-6 text-emerald-600" />
                <h4 className="font-bold text-emerald-800">التوصيل اللوجستي</h4>
              </div>
              <p className="text-sm text-emerald-700">نوفر خدمة الشحن المباشر من المصنع إلى موقع مشروعكم في غضون 24-48 ساعة.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CementDetail;
