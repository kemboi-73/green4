
import React from 'react';
import { Leaf, Sprout, Trees, Shovel, Ruler, Recycle } from 'lucide-react';
import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'residential-landscaping',
    title: 'Residential Landscaping',
    description: 'Transform your backyard into a private sanctuary with our expert design and construction.',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&w=800&q=80',
    details: [
      'Custom garden design',
      'Planting schemes tailored to Sydney soil',
      'Water feature installation',
      'Outdoor lighting design'
    ]
  },
  {
    id: 'garden-maintenance',
    title: 'Garden Maintenance',
    description: 'Keep your outdoor space pristine year-round with our professional maintenance schedules.',
    icon: 'Sprout',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    details: [
      'Pruning and weeding',
      'Soil health management',
      'Pest and disease control',
      'Seasonal planting'
    ]
  },
  {
    id: 'lawn-care',
    title: 'Lawn Care & Turf',
    description: 'Specialized turf installation and care for lush, green lawns that thrive in the Australian climate.',
    icon: 'Recycle',
    image: 'https://images.unsplash.com/photo-1533467686542-6e199d791bd1?auto=format&fit=crop&w=800&q=80',
    details: [
      'Premium turf installation',
      'Aeration and top dressing',
      'Irrigation system setup',
      'Fertilization programs'
    ]
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping & Paving',
    description: 'Durable and beautiful pathways, retaining walls, and outdoor structures built to last.',
    icon: 'Ruler',
    image: 'https://images.unsplash.com/photo-1590059345003-887413a11942?auto=format&fit=crop&w=800&q=80',
    details: [
      'Sandstone and concrete paving',
      'Timber and stone retaining walls',
      'Outdoor decking',
      'Pergola construction'
    ]
  },
  {
    id: 'tree-services',
    title: 'Tree Planting & Pruning',
    description: 'Expert arboriculture services to ensure the health and safety of your trees.',
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    details: [
      'Tree health assessment',
      'Precision pruning',
      'Strategic tree planting',
      'Stump grinding'
    ]
  },
  {
    id: 'sustainable-solutions',
    title: 'Eco-Friendly Solutions',
    description: 'Eco-conscious landscaping using native plants and water-saving technologies.',
    icon: 'Recycle',
    image: 'https://images.unsplash.com/photo-1585914969248-6a3628e83348?auto=format&fit=crop&w=800&q=80',
    details: [
      'Native plant specialist',
      'Rainwater harvesting systems',
      'Permeable paving',
      'Drought-tolerant garden design'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Coastal Paradise',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'A complete overhaul of a beachfront property featuring drought-resistant native plants.'
  },
  {
    id: 'p2',
    title: 'Modern Terrace',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=80',
    description: 'Sleek hardscaping and lighting for a contemporary Sydney terrace house.'
  },
  {
    id: 'p3',
    title: 'Corporate Eco-Garden',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&w=1200&q=80',
    description: 'Sustainable green space for a North Sydney office complex.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Thompson',
    role: 'Homeowner, Bondi',
    content: "GreenSydney transformed our messy backyard into a stunning oasis. Their attention to detail and sustainable practices really impressed us!",
    rating: 5
  },
  {
    id: 't2',
    name: 'Mark Henderson',
    role: 'Property Developer',
    content: "Reliable, professional, and high-quality work. They are my go-to team for all my development landscaping needs.",
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Homeowner, Surry Hills',
    content: "The best landscaping team in Sydney. They understood exactly what I wanted and executed it perfectly within budget.",
    rating: 5
  }
];
