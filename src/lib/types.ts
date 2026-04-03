export type Availability = "in-stock" | "low-stock" | "coming-soon";
export type CommerceStatus = "live" | "curated" | "coming-soon";
export type TimeOfDay = "morning" | "midday" | "evening" | "travel";
export type ModuleTone = "light" | "contrast" | "earth";

export interface NavItem {
  href: string;
  label: string;
}

export interface Brand {
  slug: string;
  name: string;
  eyebrow: string;
  strapline: string;
  description: string;
  story: string;
  values: string[];
  collectionLabel: string;
  commerceStatus: CommerceStatus;
  palette: string[];
  featuredGoalSlugs: string[];
  featuredRoutineSlugs: string[];
}

export interface Goal {
  slug: string;
  name: string;
  mood: string;
  introduction: string;
  synopsis: string;
  signals: string[];
  routineSlugs: string[];
  productSlugs: string[];
  accent: string;
}

export interface RoutineStep {
  title: string;
  body: string;
  productSlugs: string[];
}

export interface Routine {
  slug: string;
  name: string;
  timeOfDay: TimeOfDay;
  synopsis: string;
  description: string;
  heroQuote: string;
  pace: string;
  goalSlugs: string[];
  productSlugs: string[];
  steps: RoutineStep[];
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  brandSlug: string;
  subtitle: string;
  description: string;
  whyItLivesHere: string;
  price: number;
  compareAtPrice?: number;
  currency: "ILS";
  availability: Availability;
  format: string;
  size: string;
  image: string;
  glowNote: string;
  ingredients: string[];
  benefits: string[];
  usage: string[];
  goalSlugs: string[];
  routineSlugs: string[];
  pairings: string[];
  faqs: ProductFaq[];
  palette: {
    from: string;
    mid?: string;
    to: string;
    accent: string;
  };
  shopifyVariantId?: string;
}

export interface Bundle {
  slug: string;
  name: string;
  synopsis: string;
  description: string;
  productSlugs: string[];
  benefitBullets: string[];
  price: number;
  compareAtPrice?: number;
  palette: {
    from: string;
    mid?: string;
    to: string;
    accent: string;
  };
}

export interface JournalSection {
  heading: string;
  body: string;
}

export interface JournalEntry {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  relatedGoalSlugs: string[];
  sections: JournalSection[];
}

export interface EditorialModule {
  id: string;
  title: string;
  body: string;
  tone: ModuleTone;
}

export interface SiteSettings {
  name: string;
  descriptor: string;
  tagline: string;
  navigation: NavItem[];
}

export interface CartLine {
  slug: string;
  quantity: number;
}
