import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { SERVICES, TESTIMONIALS } from '../constants';

import turf from '../assets/turf.jpg';
import lawnlay from '../assets/lawnlay.jpg';
import Lawncare from '../assets/lawncare.jpg';
import Pepbles from '../assets/pepbles.jpg';
import clean from '../assets/clean.jpg';

/* ================= SCROLL ANIMATION HOOK ================= */
const useReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

/* ================= HERO DATA ================= */
const HERO_SLIDES = [
  {
    title: 'Transform Your Outdoor Space',
    subtitle:
      'From lush lawns to vibrant gardens, we bring your dream landscape to life across Sydney.',
    image: clean,
    tag: "Sydney's Premier Landscapers",
  },
  {
    title: 'Expert Lawn & Turf Care',
    subtitle:
      'Professional installation, maintenance, and care to keep your lawn healthy year-round.',
    image: turf,
    tag: 'Eco-Friendly Expertise',
  },
  {
    title: 'Beautiful Gardens Made Simple',
    subtitle:
      'Design, planting, and maintenance for stunning outdoor spaces.',
    image: Lawncare,
    tag: 'Quality Workmanship',
  },
  {
    title: 'Stunning Pebble & Stone Features',
    subtitle:
      'Elegant pathways, stone work, and premium pebble finishes.',
    image: Pepbles,
    tag: 'Landscape Enhancements',
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length),
      7000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
              <div className="max-w-3xl">
                <span className="inline-block mb-6 px-4 py-2 bg-emerald-600 text-white text-xs font-black uppercase tracking-widest rounded-lg">
                  {slide.tag}
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                  {slide.title}
                </h1>

                <p className="text-lg sm:text-xl text-stone-200 mb-10">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-black uppercase text-sm shadow-xl"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    to="/gallery"
                    className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-black uppercase text-sm backdrop-blur"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ================= ABOUT PREVIEW (NOW FIRST) ================= */}
      {(() => {
        const { ref, visible } = useReveal();
        return (
          <section
            ref={ref}
            className={`py-24 bg-stone-100 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src={clean}
                  alt="About GreenSydney"
                  className="rounded-[3rem] shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-emerald-600 p-6 text-white rounded-2xl hidden md:block">
                  <p className="text-xl font-bold italic">
                    “Rooted in Excellence, Growing for Sydney.”
                  </p>
                </div>
              </div>

              <div>
                <span className="text-emerald-600 uppercase tracking-widest text-xs font-black">
                  About Green Sydney landscapes
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Where Nature Meets Artistry
                </h2>
                <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                  We transform outdoor spaces into beautiful, functional, and
                  sustainable landscapes for homes and businesses across Sydney.
                </p>
                <p className="text-stone-600 text-lg mb-10 leading-relaxed">
                  Our experienced team delivers reliable service, premium
                  workmanship, and results that last.
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-emerald-600 transition"
                >
                  Learn More About Us <ArrowRight />
                </Link>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ================= SERVICES ================= */}
      {(() => {
        const { ref, visible } = useReveal();
        return (
          <section
            ref={ref}
            className={`py-24 bg-white transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-emerald-600 uppercase tracking-widest text-xs font-black mb-4">
                  Our Expertise
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold">
                  Comprehensive Solutions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {SERVICES.slice(0, 3).map((service) => (
                  <div
                    key={service.id}
                    className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="p-8">
                      <h4 className="text-2xl font-bold mb-4">
                        {service.title}
                      </h4>
                      <p className="text-stone-600 mb-6">
                        {service.description}
                      </p>
                      <Link
                        to={`/services/${service.id}`}
                        className="text-emerald-600 font-black uppercase text-sm inline-flex items-center gap-2"
                      >
                        Explore Service <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                  
                ))}
              </div>
              <div className="text-center mt-16">
  <Link
    to="/services"
    className="inline-block bg-stone-900 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl"
  >
    Browse All Services
  </Link>
</div>

            </div>
          </section>
        );
      })()}

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold mb-10">
              Why Homeowners Trust Us
            </h3>

            <p className="text-stone-300 mb-10 leading-relaxed">
              Your outdoor space is where memories are made. Homeowners trust us
              because we combine expertise, reliability, and attention to detail
              to deliver landscapes that last.
            </p>

            <div className="space-y-8">
              {[
                ['Experienced Professionals', 'Years of hands-on landscaping expertise.'],
                ['Reliable & Punctual', 'Projects delivered on time and on budget.'],
                ['Tailored Solutions', 'Every garden is designed to suit your space.'],
                ['Customer Satisfaction', 'We’re not finished until you’re happy.'],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-6">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">{title}</h4>
                    <p className="text-stone-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src={lawnlay}
            alt="Why Choose Us"
            className="rounded-[3rem] shadow-2xl"
          />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 uppercase tracking-widest text-xs font-black mb-4">
              Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-stone-900">
              What Our Clients Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-10 rounded-3xl shadow-xl relative hover:-translate-y-1 transition"
              >
                <Quote className="absolute top-6 right-6 text-emerald-600/20" />
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="italic font-medium mb-6">“{t.content}”</p>
                <p className="font-black">{t.name}</p>
                <p className="text-emerald-600 text-sm uppercase">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto bg-emerald-600 text-white rounded-[4rem] p-16 text-center shadow-2xl">
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Garden Journey
          </h3>
          <p className="text-xl mb-10">
            Book a free consultation with Sydney’s trusted landscaping experts.
          </p>
          <Link
            to="/contact"
            className="bg-white text-emerald-700 px-10 py-5 rounded-full font-black uppercase hover:bg-stone-900 hover:text-white transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
