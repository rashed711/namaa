
import React from 'react';
import { Product, Agency } from './types';
import { HardHat, Factory, Truck, ShieldCheck, Building2, Package } from 'lucide-react';

export const COLORS = {
  primary: '#059669', // Emerald 600
  secondary: '#064e3b',
  dark: '#1e293b',
  light: '#f8fafc',
};

export const CEMENT_PRODUCTS: Product[] = [
  {
    id: 'cem-1-42-5-n',
    name: 'أسمنت بورتلاندي عادي (CEM I 42.5 N)',
    category: 'cement',
    description: 'أسمنت عالي الجودة مخصص للأعمال الإنشائية التي تتطلب مقاومة ضغط عالية وسرعة في التنفيذ.',
    specifications: [
      'مطابق للمواصفات القياسية المصرية ES 4756-1',
      'مقاومة ضغط لا تقل عن 42.5 ميجا باسكال بعد 28 يوم',
      'زمن الشك الابتدائي مثالي لعمليات الصب الكبيرة'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    applications: ['الخرسانة المسلحة لكافة المنشآت', 'الكباري والأنفاق', 'أعمدة ومباني الأبراج']
  },
  {
    id: 'cem-2-32-5-n',
    name: 'أسمنت التشطيبات (CEM II 32.5 N)',
    category: 'cement',
    description: 'حل مثالي لأعمال المحارة والتشطيبات والمباني غير الإنشائية التي تتطلب سهولة في التشغيل.',
    specifications: [
      'قابلية تشغيل عالية وتقليل الفاقد',
      'نعومة فائقة تمنع حدوث تشققات في اللياسة',
      'مقاومة جيدة للعوامل الجوية'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    applications: ['أعمال اللياسة والمحارة', 'بناء الطوب والبلوك', 'صب الأرضيات غير المسلحة']
  },
  {
    id: 'src-sulfate',
    name: 'أسمنت مقاوم للكبريتات (SRC)',
    category: 'cement',
    description: 'مصمم خصيصاً للاستخدام في التربة ذات المحتوى العالي من الكبريتات والمناطق الساحلية.',
    specifications: [
      'محتوى منخفض من ألومينات ثلاثي الكالسيوم (C3A)',
      'حماية فائقة لحديد التسليح من تآكل كيميائي',
      'ديمومة عالية في البيئات العدوانية'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    applications: ['أساسات المباني في التربة الكبريتية', 'محطات معالجة الصرف الصحي', 'المنشآت البحرية']
  }
];

export const STEEL_PRODUCTS: Product[] = [
  {
    id: 'rebar-steel',
    name: 'حديد التسليح عالي المقاومة',
    category: 'steel',
    description: 'نورد حديد التسليح من كبرى المصانع المصرية (عز، السويس، بشاي) بمختلف الأقطار.',
    specifications: ['أقطار تبدأ من 8 مم إلى 32 مم', 'مطابق لمواصفات Grade 60 / B500B-R', 'اختبارات شد معتمدة لكل شحنة'],
    imageUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800'
  }
];

export const GYPSUM_PRODUCTS: Product[] = [
  {
    id: 'industrial-gypsum',
    name: 'جبس إنشائي معبأ',
    category: 'gypsum',
    description: 'جبس فائق البياض ونقي يستخدم في أعمال الديكور والتشطيبات الداخلية والصب الفني.',
    imageUrl: 'https://images.unsplash.com/photo-1585713181935-d5f622cc2415?auto=format&fit=crop&q=80&w=800'
  }
];

export const AGENCIES: Agency[] = [
  { 
    id: '1', 
    name: 'لافارج للأسمنت', 
    logo: 'https://media.almalnews.com/2021/4//large/%D9%84%D8%A7%D9%81%D8%A7%D8%B1%D8%AC.jpg', 
    imageUrl: 'https://www.lafarge.com.eg/sites/egypt/files/styles/teaser_3cols/public/2022-08/momtaz-src.png.webp?h=8f74817f&itok=qOwls_Q9',
    description: 'نحن الوكيل المعتمد لتوزيع منتجات لافارج العالمية، الرائدة في حلول البناء المستدامة والأسمنت عالي الأداء للمشاريع القومية.' 
  },
  { 
    id: '2', 
    name: 'السويس للأسمنت', 
    logo: 'https://forasna-images.wuzzuf-data.net/uploads/logos/clogo_2019-02-05-13-24-16_OKIsaM4kueaUA9eJ0X3hPAXX.png', 
    imageUrl: 'https://khamato-b2b.hel1.your-objectstorage.com/product/4051/kKssyq1Jt5eDsfrHknyIKnqissCxw3gnpfNzAR1d-1000x1000.jpg?v=-1',
    description: 'شراكة استراتيجية ممتدة لتوريد منتجات السويس للأسمنت، المتميزة بمقاومتها العالية للعوامل الجوية والكبريتات في التربة المصرية.' 
  },
  { 
    id: '3', 
    name: 'حديد عز', 
    logo: 'https://media.almalnews.com/2015/3//large/944088ae-6adc-4a73-bae5-edf2b2308d9d.jpg', 
    imageUrl: 'https://vid.alarabiya.net/images/2023/03/23/d27724bd-213b-40ac-9f5d-d66401c4ea78/d27724bd-213b-40ac-9f5d-d66401c4ea78_16x9_1200x676.jpg?width=555&format=jpg',
    description: 'الموزع المعتمد لحديد عز، القلعة الصناعية الكبرى في الشرق الأوسط، لتوفير حديد التسليح بمختلف الأقطار والمواصفات العالمية.' 
  },
  { 
    id: '4', 
    name: 'أسمنت سيناء', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUln_efg9jN4uFOrutjTeAxf1AFiguKO77Q&s', 
    imageUrl: 'https://bnaia.com/storage/product-images/file-18.jpg',
    description: 'نؤمن احتياجات المشاريع الكبرى في شرق القناة وسيناء عبر توريد أسمنت سيناء المشهود له بالجودة والصلابة الفائقة.' 
  }
];

export const SERVICES = [
  { title: 'توريد لوجستي', icon: <Truck className="w-8 h-8" />, desc: 'أسطول نقل ثقيل يضمن الوصول لمواقع العمل في المواعيد المحددة.' },
  { title: 'جودة معتمدة', icon: <ShieldCheck className="w-8 h-8" />, desc: 'شهادات اختبار فنية لكل توريدة تضمن مطابقة المواصفات القياسية.' },
  { title: 'استشارات فنية', icon: <Factory className="w-8 h-8" />, desc: 'فريق متخصص لمساعدتكم في اختيار نوع الخام الأمثل لمشروعكم.' }
];
