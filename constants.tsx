import React from 'react';
import {Sprout, Trees, Shovel, Ruler, Recycle } from 'lucide-react';
import { Service } from './types';

import lawnlay from './assets/lawnlay.jpg';
// import Lawncare from './assets/lawncare.jpg';
import mulching from './assets/mulching.jpg';
import weeding from './assets/weeding.jpeg';
import lawn2 from './assets/lawn2.jpg';
import lawn3 from './assets/lawn3.jpg';
import pepbles from './assets/pepbles.jpg';
import pebbles1 from './assets/pebbles1.jpg';
import pebbles3 from './assets/pebbles3.jpg';
import triming from './assets/triming.jpg';
import turf from './assets/turf.jpg';
import lawncare from './assets/lawncare.jpg';
export const SERVICES: Service[] = [
  {
    id: 'lawn-turflaying',
    title: 'Lawn & Turf Laying',
    description: 'Create a lush, green lawn with professionally installed turf designed to thrive in Sydney’s climate.',
    image: lawnlay,
    gallery: [lawnlay, lawn3, lawn2],
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
    image: triming,
    gallery: [triming, ],
    details: [
      'Hedge and shrub shaping',
      'Tree and plant pruning',
      'Removal of dead or overgrown branches',
      'Seasonal pruning advice'
    ]
  },
 
  {
    id: 'weeding',
    title: 'Weeding',
    description: 'Restore the beauty of your garden by removing unwanted weeds safely and effectively. Our weeding services help prevent regrowth while keeping your plants and soil healthy.',
    image: weeding,
    gallery: [],
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

    image: mulching,
    gallery: [],
    details: [
      'Selection of suitable mulch types',
      'Garden bed preparation',
      'Even and professional mulch application',
      'Soil moisture and temperature protection'
    ]
  },
  {
    id: 'pebbles',
    title: 'Pebble Landscaping',
    description: 'Add elegance and texture to your garden with premium pebbles and stone features. Perfect for pathways, rock gardens, and decorative beds that enhance the beauty and functionality of your outdoor space.',

    image: pepbles, 
    gallery: [pebbles1, pebbles3, lawn2],
    details: [
      'Stylish pebble pathways and walkways',
      'Decorative rock gardens and borders',
      'Mulch replacement with decorative stones',
      'Durable and low-maintenance landscaping solutions'
    ]
  }
]

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Lawn and Turf Laying',
    category: 'Lawn and Turf',
    image: turf,
    description: 'Get a lush, green lawn with professionally installed turf designed to thrive in Sydney’s climate.',
    summary:
      'We expertly lay turf across the property, with precise soil preparation and attention to detail. We ensure the end result is a resilient, low-maintenance lawn that elevates the home’s curb appeal while providing a perfect space for outdoor activities.',
    gallery: [lawnlay, lawn2, lawn2, lawn3, lawncare],
  },
  {
    id: 'p2',
    title: 'Pebbles & Decorative Stone',
    category: 'Garden Accents',
    image: pebbles1,
    description: 'Clean, polished stone features that define spaces and enhance visual appeal.',
    summary:
      'With uses of a mix of natural pebbles and decorative stones to outline walkways, garden beds, and focal points. These low-maintenance features provide texture, color contrast, and a modern finish that elevates the overall look of the property',
    gallery: [ pepbles, pebbles3
    ]
  },
  {
    id: 'p3',
    title: 'Pruning & Trimming',
    category: 'Garden Care',
    image: triming,
    description: 'We do expert pruning and trimming for neat, healthy shrubs, hedges, and trees.',
    summary:
      'We maintain the health and appearance of plants while promoting balanced growth. The techniques we use include seasonal pruning, shaping, and removing dead branches to ensure long-term garden vitality.',
    gallery: [  ]
  },
  {
    id: 'p4',
    title: 'Weeding & Mulching',
    category: 'Garden Care',
    image: weeding,
    description: 'Restored garden beds with expert weed removal and professionally applied mulch, enhancing both appearance and soil health.',
    summary:
      'This project demonstrates how overgrown and neglected garden beds were transformed into healthy, thriving landscapes. We carefully removed invasive weeds and applied high-quality mulch to suppress regrowth, retain soil moisture, and enrich the soil. The result is a tidy, visually appealing garden that promotes plant health and low-maintenance care, showcasing both functionality and aesthetics in one comprehensive solution.',
    gallery: [  ]
  },
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
