import React from 'react';
// import {Sprout, Trees, Shovel, Ruler, Recycle } from 'lucide-react';
import { Service } from './types';

import lawnlay from './assets/lawnlay.jpg';
import Lawncare from './assets/lawncare.jpg';

export const SERVICES: Service[] = [
  {
    id: 'lawn-turflaying',
    title: 'Lawn & Turf Laying',
    description: 'Create a lush, green lawn with professionally installed turf designed to thrive in Sydney’s climate.',
    icon: 'Leaf',
    image: lawnlay,
    details: [
      'Premium turf supply and installation',
      'Soil preparation and leveling',
      'Proper lawn establishment techniques',
      'Aftercare and watering guidance'
    ]
  },
  {
    id: 'pruning-trim',
    title: 'Pruning & Trimming',
    description: 'Keep your garden neat and healthy with expert pruning and trimming services.',
    icon: 'Sprout',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    details: [
      'Hedge and shrub shaping',
      'Tree and plant pruning',
      'Removal of dead or overgrown branches',
      'Seasonal pruning advice'
    ]
  },
  {
    id: 'lawn-care',
    title: 'Lawn Care & Turf',
    description: 'Keep your lawn healthy, green, and well-maintained all year round with professional lawn care services.',
    icon: 'Recycle',
    image: Lawncare,
    details: [
      'Regular mowing, trimming, and edging',
      'Fertilization and soil health management',
      'Irrigation system setup',
      'Seasonal care and expert advice'
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
    id: 'weeding',
    title: 'Weeding',
    description: 'Restore the beauty of your garden by removing unwanted weeds safely and effectively. Our weeding services help prevent regrowth while keeping your plants and soil healthy.',
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    details: [
      'Manual and targeted weed removal',
      'Weed control for garden beds and lawns',
      'Prevention strategies to reduce regrowth',
      'Safe practices for plants and soil'
    ]
  },
  {
    id: 'mulching',
    title: 'Mulching',
    description: 'Protect and nourish your garden with professional mulching solutions. Mulch helps retain moisture, improve soil health, suppress weeds, and enhance the overall appearance of your garden.',
    icon: 'Recycle',
    image: 'https://images.unsplash.com/photo-1585914969248-6a3628e83348?auto=format&fit=crop&w=800&q=80',
    details: [
      'Selection of suitable mulch types',
      'Garden bed preparation',
      'Even and professional mulch application',
      'Soil moisture and temperature protection'
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
