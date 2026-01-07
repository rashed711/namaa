
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CEMENT_PRODUCTS, STEEL_PRODUCTS, GYPSUM_PRODUCTS } from '../constants';
import { ArrowLeft, CheckCircle, Package, Hammer, Ruler } from 'lucide-react';

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
      title = 'كتالوج نماء الشامل';
      description = 'حلول متكاملة لمشروعك الإنشائي تحت سقف واحد، نضمن لك جودة الخامات وسرعة التوريد.';
  }

  return (
    <div className="pb-20">
      {/* Header with Background */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="text-sm mb-6 flex space-x-2 space-x-reverse text-emerald-500 animate-fade-in">
            <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span className="text-slate-600">/</span>
            <span className="font-bold">المنتجات</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-up">{title}</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>{description}</p>
        </div>
      </section>

      {/* Filter Tabs (Conceptual) */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-wrap gap-4 border border-slate-100">
          {[
            { id: 'all', name: 'الكل', path: '/products/all', icon: <Package className="w-4 h-4" /> },
            { id: 'cement', name: 'الأسمنت', path: '/products/cement', icon: <Hammer className="w-4 h-4" /> },
            { id: 'steel', name: 'الحديد', path: '/products/steel', icon: <Ruler className="w-4 h-4" /> },
            { id: 'gypsum', name: 'الجبس', path: '/products/gypsum', icon: <Package className="w-4 h-4" /> }
          ].map((tab) => (
            <Link 
              key={tab.id}
              to={tab.path}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                (category === tab.id || (!category && tab.id === 'all'))
                ? 'bg-emerald-600 text-white' 
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
                />
                <div className="absolute top-6 left-6 bg-emerald-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg z-10">
                  {product.category === 'cement' ? 'قطاع الأسمنت' : product.category === 'steel' ? 'قطاع الحديد' : 'قطاع الجبس'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                <p className="text-slate-500 text-base mb-8 flex-1 leading-relaxed font-medium">{product.description}</p>
                
                {product.specifications && (
                  <div className="mb-8 space-y-3 bg-slate-50 p-4 rounded-2xl">
                    {product.specifications.slice(0, 2).map((spec, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-slate-600 font-bold">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Link 
                  to={product.category === 'cement' ? `/products/cement/${product.id}` : '/contact'} 
                  className="mt-auto bg-slate-900 text-white text-center py-4 rounded-2xl font-black text-sm hover:bg-emerald-600 transition-all flex items-center justify-center group/btn shadow-lg"
                >
                  {product.category === 'cement' ? 'المواصفات الفنية الكاملة' : 'طلب عرض سعر مباشر'}
                  <ArrowLeft className="mr-3 w-5 h-5 transition-transform group-hover/btn:-translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Support Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
          <div className="mb-12 lg:mb-0 relative z-10 max-w-2xl text-center lg:text-right">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">دعم فني ولوجستي للمشروعات القومية</h2>
            <p className="text-emerald-100 text-xl font-medium">نوفر ميزات حصرية لشركات المقاولات الكبرى تشمل تسهيلات سداد وجدولة توريد ذكية.</p>
          </div>
          <Link to="/contact" className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white hover:text-emerald-600 transition-all whitespace-nowrap shadow-2xl relative z-10">
            تواصل مع قطاع المشروعات
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
