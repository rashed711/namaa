
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Building2, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-2 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* الشركة والتعريف */}
        <div className="col-span-1">
          <div className="flex items-center space-x-2 space-x-reverse mb-6">
            <Building2 className="w-8 h-8 text-emerald-500" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">نماء</span>
              <span className="text-xs text-emerald-500 font-medium">للاستثمار والتوريدات</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            رائدون في توريد مواد البناء للمشروعات القومية والقطاعات الإنشائية الكبرى منذ أكثر من عقد. نجمع بين الخبرة التقنية والتميز اللوجستي لضمان استمرارية مشاريعكم.
          </p>
          <div className="flex space-x-4 space-x-reverse">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>

        {/* الروابط */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-r-4 border-emerald-500 pr-3 uppercase tracking-wider">روابط سريعة</h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            <li><Link to="/about" className="hover:text-emerald-500 transition-colors">عن المؤسسة</Link></li>
            <li><Link to="/products/cement" className="hover:text-emerald-500 transition-colors">منتجات الأسمنت</Link></li>
            <li><Link to="/products/steel" className="hover:text-emerald-500 transition-colors">حديد التسليح</Link></li>
            <li><Link to="/agencies" className="hover:text-emerald-500 transition-colors">شركاء النجاح (الوكالات)</Link></li>
            <li><Link to="/distribution" className="hover:text-emerald-500 transition-colors">التوزيع والشحن</Link></li>
          </ul>
        </div>

        {/* الاتصال */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-r-4 border-emerald-500 pr-3 uppercase tracking-wider">المكتب الرئيسي</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start space-x-3 space-x-reverse">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>المنطقة الصناعية، القاهرة الكبرى، جمهورية مصر العربية</span>
            </li>
            <li className="flex items-center space-x-3 space-x-reverse">
              <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
              <span dir="ltr" className="hover:text-emerald-500 cursor-pointer">+20 123 456 7890</span>
            </li>
            <li className="flex items-center space-x-3 space-x-reverse">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="hover:text-emerald-500 cursor-pointer">info@nama-supplies.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} نماء للاستثمار والتوريدات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
