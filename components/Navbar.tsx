
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن الشركة', path: '/about' },
    { name: 'المنتجات', path: '/products/all' },
    { name: 'الوكالات', path: '/agencies' },
    { name: 'التوزيع', path: '/distribution' }
  ];

  const isActive = (path: string) => {
    if (path === '/products/all' && location.pathname.startsWith('/products')) return true;
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
      scrolled ? 'bg-white/95 shadow-xl backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 space-x-reverse group">
          <div className="bg-emerald-600 p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>نماء</span>
            <span className="text-[9px] text-emerald-500 font-black uppercase tracking-[0.2em]">للاستثمار والتوريدات</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-sm font-bold transition-all hover:text-emerald-500 px-2 py-1 relative group/link ${
                isActive(link.path) 
                ? 'text-emerald-600' 
                : (scrolled ? 'text-slate-600' : 'text-slate-600 lg:text-slate-200')
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 right-0 h-0.5 bg-emerald-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
            </Link>
          ))}
          <Link to="/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
            اتصل بنا
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-slate-900 lg:text-white hover:bg-white/10'}`}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[999] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-10 flex flex-col h-full bg-slate-50">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Building2 className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-black text-slate-900">نماء</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400"><X className="w-8 h-8" /></button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-black transition-colors ${isActive(link.path) ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-900'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-emerald-600 text-white text-center py-6 rounded-2xl text-xl font-black shadow-2xl">
              اطلب توريد الآن
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
