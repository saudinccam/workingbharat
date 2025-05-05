export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  documents: string[];
  countries?: string[];
  languages?: string[];
  states?: string[];
  professions?: string[];
  processingTime: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  service: string;
  rating: number;
  imageUrl: string;
}