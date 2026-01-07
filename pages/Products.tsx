
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CEMENT_PRODUCTS, STEEL_PRODUCTS, GYPSUM_PRODUCTS } from '../constants';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Products: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  let displayProducts = [];
  let title = '';
  let description = '';

  switch (category) {
    case 'cement':
      displayProducts = CEMENT_PRODUCTS;
      title = 'حلول الأسمنت الإنشائية';
      description = 'نقدم مجموعة متنوعة من منتجات الأسمنت التي تغطي كافة الاحتياجات من التأسيس إلى التشطيب.';
      break;
    case 'steel':
      displayProducts = STEEL_PRODUCTS;
      title = 'حديد التسليح والصلب';
      description = 'توريد حديد التسليح عالي المقاومة من كبرى المصانع المعتمدة بأقطار مطابقة للمواصفات.';
      break;
    case 'gypsum':
      displayProducts = GYPSUM_PRODUCTS;
      title = 'الجبس والمنتجات الجبسية';
      description = 'جبس فائق النقاء لأعمال الديكور والتشطيبات الفاخرة.';
      break;
    default:
      displayProducts = [...CEMENT_PRODUCTS, ...STEEL_PRODUCTS, ...GYPSUM_PRODUCTS];
      title = 'كافة منتجاتنا';
      description = 'حلول متكاملة لمشروعك الإنشائي تحت سقف واحد.';
  }

  return (
    <div className="pb-20">
      <section className="bg-gray-100 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4 flex space-x-2 space-x-reverse text-slate-400 opacity-0 animate-fade-in">
            <Link to="/" className="hover:text-emerald-600 transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold">{title}</span>
          </nav>
          <h1 className="text-4xl font-black text-slate-800 mb-4 opacity-0 animate-fade-up">{title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl opacity-0 animate-fade-up delay-100">{description}</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white border border-gray-200 overflow-hidden flex flex-col group hover-lift opacity-0 animate-scale-in delay-${(index % 6) * 100}`}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-image" 
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-tighter shadow-lg">
                  {product.category === 'cement' ? 'منتج فني' : 'توريد أساسي'}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">{product.description}</p>
                
                {product.specifications && (
                  <div className="mb-6 space-y-2">
                    {product.specifications.slice(0, 2).map((spec, i) => (
                      <div key={i} className="flex items-start space-x-2 space-x-reverse text-xs text-slate-500">
                        <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Link 
                  to={product.category === 'cement' ? `/products/cement/${product.id}` : '/contact'} 
                  className="mt-auto bg-slate-100 text-slate-800 text-center py-3 rounded font-bold text-sm hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center btn-active-press"
                >
                  {product.category === 'cement' ? 'المواصفات الفنية' : 'اطلب عرض سعر'}
                  <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 animate-fade-up delay-300">
        <div className="bg-slate-900 rounded-2xl p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="mb-8 md:mb-0 relative z-10">
            <h2 className="text-3xl font-black mb-4">هل لديك مشروع ضخم؟</h2>
            <p className="text-slate-400">تواصل مع قطاع مبيعات المشروعات للحصول على خصومات الكميات وجدولة التوريد.</p>
          </div>
          <Link to="/contact" className="bg-emerald-600 px-10 py-5 rounded-lg font-black hover:bg-emerald-700 transition-all whitespace-nowrap btn-active-press relative z-10 shadow-xl">
            اتصل بمدير مبيعات المشروعات
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
