
export interface Product {
  id: string;
  name: string;
  category: 'cement' | 'steel' | 'gypsum';
  description: string;
  specifications?: string[];
  imageUrl: string;
  applications?: string[];
}

export interface Agency {
  id: string;
  name: string;
  logo: string;
  imageUrl: string; // الحقل الجديد للصور الصناعية
  description: string;
}

export interface DistributionRegion {
  name: string;
  capacity: string;
  facilities: string[];
}
