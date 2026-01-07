
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 space-x-reverse group">
              <div className="bg-emerald-600 p-2.5 rounded-xl shadow-lg group-hover:rotate-6 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 leading-none tracking-tighter">نماء</span>
                <span className="text-[10px] sm:text-xs text-emerald-600 font-extrabold tracking-[0.2em] uppercase mt-1">للاستثمار والتوريدات</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10 space-x-reverse">
            <Link to="/" className={`text-base font-extrabold transition-colors ${isActive('/') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>الرئيسية</Link>
            <Link to="/about" className={`text-base font-extrabold transition-colors ${isActive('/about') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>عن الشركة</Link>
            
            <div className="relative" onMouseEnter={() => setShowProducts(true)} onMouseLeave={() => setShowProducts(false)}>
              <button className={`flex items-center text-base font-extrabold transition-colors ${location.pathname.startsWith('/products') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>
                المنتجات <ChevronDown className="mr-2 w-4 h-4" />
              </button>
              {showProducts && (
                <div className="absolute right-0 w-56 bg-white shadow-2xl border border-slate-100 rounded-xl py-3 mt-1 animate-scale-in">
                  <Link to="/products/cement" className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">قطاع الأسمنت</Link>
                  <Link to="/products/steel" className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">حديد التسليح</Link>
                  <Link to="/products/gypsum" className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">الجبس الإنشائي</Link>
                </div>
              )}
            </div>

            <Link to="/agencies" className={`text-base font-extrabold transition-colors ${isActive('/agencies') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>الوكالات</Link>
            <Link to="/distribution" className={`text-base font-extrabold transition-colors ${isActive('/distribution') ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>التوزيع</Link>
            <Link to="/contact" className="bg-slate-900 text-white px-8 py-3.5 rounded-xl text-base font-black hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-200 btn-active-press">اطلب توريد</Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 bg-slate-50 rounded-lg" aria-label="Toggle Menu">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ top: scrolled ? '72px' : '88px' }}>
        <div className="p-8 space-y-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900 border-b border-slate-50 pb-4">الرئيسية</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900 border-b border-slate-50 pb-4">عن الشركة</Link>
          <div className="space-y-4">
            <p className="text-emerald-600 font-black uppercase tracking-widest text-sm">المنتجات الفنية</p>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/products/cement" onClick={() => setIsOpen(false)} className="bg-slate-50 p-4 rounded-xl font-bold text-slate-800">قطاع الأسمنت</Link>
              <Link to="/products/steel" onClick={() => setIsOpen(false)} className="bg-slate-50 p-4 rounded-xl font-bold text-slate-800">حديد التسليح</Link>
              <Link to="/products/gypsum" onClick={() => setIsOpen(false)} className="bg-slate-50 p-4 rounded-xl font-bold text-slate-800">الجبس الإنشائي</Link>
            </div>
          </div>
          <Link to="/agencies" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900 border-b border-slate-50 pb-4">الوكالات</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-emerald-600 text-white text-center py-5 rounded-2xl text-xl font-black shadow-xl">تواصل معنا الآن</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
