export type ProductCategory = 'colors' | 'goodies' | 'moments';

export type ColorsSubcategory = 
  | 'Tableware Colors' 
  | 'Decorative Pieces' 
  | 'Gift Sets' 
  | 'Kids & Family Kits'
  | 'Kids & Animals'
  | string;

export type GoodiesSubcategory = 
  | 'Family Cakes' 
  | 'Cookies & Biscuits' 
  | 'Occasion Treats' 
  | 'Celebration Treats'
  | 'Kids-Friendly Options'
  | string;

export type MomentsSubcategory = 
  | 'Anniversary Moments' 
  | 'Family Celebrations' 
  | 'Holiday Souvenirs'
  | 'Heirloom Tableware'
  | 'Celebration Gifts'
  | 'Couples & Duos'
  | 'Holiday & Seasonal'
  | string;

export type DietaryTag = 
  | 'Gluten-Free' 
  | 'Nut-Free' 
  | 'Contains Nuts' 
  | 'Vegetarian' 
  | 'Dairy-Free' 
  | 'Egg-Free' 
  | 'Organic'
  | 'Low Sugar'
  | 'Refined Sugar-Free'
  | string;

export interface BaseProduct {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
  tags: string[];
  materials?: string[];
}

export interface ColorProduct extends BaseProduct {
  category: 'colors';
  subcategory: ColorsSubcategory;
  dimensions: string;
  materials: string[];
  careInstructions: string[];
  safetyInfo: string;
  recommendedAge: string;
  familyMomentTip: string;
  glazeCount: number;
  brushCount: number;
  difficulty: 'Beginner' | 'All Ages' | 'Intermediate' | 'Easy' | 'Family Project' | string;
}

export interface GoodiesProduct extends BaseProduct {
  category: 'goodies';
  subcategory: GoodiesSubcategory;
  flavorProfile: string;
  portionSize: string;
  servings: number;
  dietaryTags: DietaryTag[];
  ingredients: string[];
  allergenWarning: string;
  storageInstructions: string;
  servingTemperature: string;
}

export interface PersonalisationItem extends BaseProduct {
  category: 'moments';
  subcategory: MomentsSubcategory;
  baseItemType?: 'ceramic_plate' | 'ceramic_mug' | 'cookie_crate' | 'wooden_plaque' | 'anniversary_set' | string;
  charLimit: number;
  materials?: string[];
  turnaroundDays?: number;
  leadTimeDays?: number;
  personalisationFields?: string[];
  sampleStories: {
    title: string;
    family: string;
    quote: string;
    occasion?: string;
  }[];
  customizationSteps: string[];
}

export type Product = ColorProduct | GoodiesProduct | PersonalisationItem;

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  personalisation?: {
    familyOrName: string;
    occasion: string;
    customMessage: string;
    colorTheme?: string;
    giftWrap?: boolean;
  };
  customGlazes?: string[];
  boxItems?: GoodiesProduct[];
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'warning' | 'dietary';
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface UserAccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  reducedMotion: boolean;
}
