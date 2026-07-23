export type BusinessUnit = 'studio' | 'agency' | 'nani' | 'tiling' | 'frame' | 'merchandise';

export interface BusinessUnitInfo {
  id: BusinessUnit;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  color: string;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: BusinessUnit;
  images: string[];
  client: string;
  date: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
  image: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  businessUnit?: BusinessUnit;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  businessUnit: BusinessUnit;
  service: string;
  description: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  type: 'full-time' | 'part-time' | 'contract';
  location: string;
  description: string;
  requirements: string[];
  slug: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}
