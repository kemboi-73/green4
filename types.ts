
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Sustainability';
  imageUrl: string;
  videoUrl?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
