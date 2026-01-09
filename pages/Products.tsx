
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CEMENT_PRODUCTS, STEEL_PRODUCTS, GYPSUM_PRODUCTS } from '../constants';
import { ArrowLeft, CheckCircle, Package, Hammer, Ruler } from 'lucide-react';
import Reveal from '../components/Reveal';

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
      {/* Header with Background and Safe Spacing */}
      <section className="bg-slate-950 text-white pt-32 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal animation="right">
            <nav className="text-xs md:text-sm mb-10 flex items-center space-x-3 space-x-reverse text-emerald-500 font-black uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <span className="text-slate-700">/</span>
              <span className="text-white">المنتجات</span>
            </nav>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">{title}</h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-slate-400 max-w-3xl leading-relaxed font-medium">{description}</p>
          </Reveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-16 relative z-20">
        <Reveal animation="up" delay={300}>
          <div className="bg-white/80 backdrop-blur-2xl p-4 md:p-6 rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-white/50 flex flex-wrap gap-4 md:gap-6">
            {[
              { id: 'all', name: 'الكل', path: '/products/all', icon: <Package className="w-5 h-5" /> },
              { id: 'cement', name: 'الأسمنت', path: '/products/cement', icon: <Hammer className="w-5 h-5" /> },
              { id: 'steel', name: 'الحديد', path: '/products/steel', icon: <Ruler className="w-5 h-5" /> },
              { id: 'gypsum', name: 'الجبس', path: '/products/gypsum', icon: <Package className="w-5 h-5" /> }
            ].map((tab) => (
              <Link 
                key={tab.id}
                to={tab.path}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm md:text-lg transition-all ${
                  (category === tab.id || (!category && tab.id === 'all'))
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' 
                  : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                {tab.icon}
                {tab.name}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>

      <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {displayProducts.map((product, index) => (
            <Reveal key={product.id} animation="up" delay={(index % 3) * 150}>
              <div 
                className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden flex flex-col h-full group hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] transition-all duration-700"
              >
                <div className="h-72 md:h-80 overflow-hidden relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                  />
                  <div className="absolute top-8 left-8 bg-emerald-600 text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-[0.2em] shadow-xl z-10">
                    {product.category === 'cement' ? 'قطاع الأسمنت' : product.category === 'steel' ? 'قطاع الحديد' : 'قطاع الجبس'}
                  </div>
                </div>
                
                <div className="p-10 md:p-14 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                  <p className="text-slate-500 text-lg mb-10 flex-1 leading-relaxed font-medium">{product.description}</p>
                  
                  {product.specifications && (
                    <div className="mb-10 space-y-4 bg-slate-50 p-6 md:p-8 rounded-[2rem]">
                      {product.specifications.slice(0, 2).map((spec, i) => (
                        <div key={i} className="flex items-start gap-4 text-[13px] md:text-sm text-slate-600 font-bold leading-relaxed">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link 
                    to={product.category === 'cement' ? `/products/cement/${product.id}` : '/contact'} 
                    className="mt-auto bg-slate-950 text-white text-center py-5 md:py-6 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all flex items-center justify-center group/btn shadow-xl active:scale-95"
                  >
                    <span>{product.category === 'cement' ? 'المواصفات الفنية الكاملة' : 'طلب عرض سعر مباشر'}</span>
                    <ArrowLeft className="mr-4 w-6 h-6 transition-transform group-hover/btn:-translate-x-2" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Corporate Support Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <Reveal animation="scale">
          <div className="bg-emerald-600 rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-white flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
            <div className="mb-12 lg:mb-0 relative z-10 max-w-2xl text-center lg:text-right">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">دعم فني ولوجستي للمشروعات القومية</h2>
              <p className="text-emerald-100 text-xl md:text-2xl font-medium opacity-90">نوفر ميزات حصرية لشركات المقاولات الكبرى تشمل تسهيلات سداد وجدولة توريد ذكية تتناسب مع حجم الأعمال.</p>
            </div>
            <Link to="/contact" className="bg-slate-950 text-white px-12 py-6 md:px-16 md:py-8 rounded-3xl font-black text-xl hover:bg-white hover:text-emerald-600 transition-all shadow-2xl relative z-10 active:scale-95">
              تواصل مع قطاع المشروعات
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Products;
