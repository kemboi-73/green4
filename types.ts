
export interface Service {
  id: string;
  title: string;
  description: string;
  // icon: string;
  image: string;
  details: string[];
  gallery?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Lawn and Turf' | 'Garden care' | 'Garden Accents';
  imageUrl: string;
  videoUrl?: string;
  description: string;
  gallery: string[];
  summary: string; 
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
