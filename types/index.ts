// Your existing product interface from data/products.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  images: string[];
  businessType: string[];
  countryOfOrigin: string;
  form: string;
  type: string;
  material: string;
  application: string;
  additionalInfo: string;
  description: string;
  collagenTypes?: {
    type: string;
    description: string;
    icon: string;
  }[];
  otherComponents?: string;
  features: string[];
  benefits: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  documents?: {
    name: string;
    url: string;
    type: 'pdf' | 'doc' | 'excel';
  }[];
  // Add price for e-commerce functionality
  price?: number;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  total: number;
}

export interface WishlistItem extends Product {
  addedAt: Date;
}

export interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}