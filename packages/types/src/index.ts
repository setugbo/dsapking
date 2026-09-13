export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface TrainingProgramme {
  id: string;
  title: string;
  shortName: string;
  slug: string;
  category: 'functional' | 'technical';
  shortDescription: string;
  overview: string;
  whatYouWillLearn: string[];
  practicalExperience: string[];
  audience: string[];
  learningOutcomes: string[];
  careerRelevance: string;
  featured: boolean;
}

export interface ConsultingService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  overview: string;
  businessChallenge: string;
  approach: string[];
  typicalActivities: string[];
  businessValue: string[];
}

export interface PracticalStep {
  number: string;
  title: string;
  description: string;
}

export interface CareerService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  url: string;
  downloadable: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TrustItem {
  label: string;
  description: string;
  icon: string;
}

export interface CorporateTrainingOption {
  id: string;
  title: string;
  description: string;
  audience: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  enquiryType: string;
  subject: string;
  message: string;
}

export interface EnquiryType {
  value: string;
  label: string;
}