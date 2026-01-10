
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';




const HERO_SLIDES = [
  {
    title: "Crafting Outdoor Excellence",
  subtitle: "Professional, eco-friendly landscaping and garden design tailored to your Sydney lifestyle.",
  image: "/assets/land1.jpg",
  tag: "Sydney's Premier Landscapers",
  },
  {
    title: "Sustainable Garden Design",
    subtitle: "Transforming urban spaces into living ecosystems with native plants and water-wise solutions.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80",
    tag: "Eco-Friendly Expertise"
  },
  {
    title: "Premium Hardscaping",
    subtitle: "Durable sandstone pathways, retaining walls, and outdoor structures built for the Australian climate.",
    image: "https://images.unsplash.com/photo-1590059345003-887413a11942?auto=format&fit=crop&w=1920&q=80",
    tag: "Quality Workmanship"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Dynamic Hero Slider */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-[10000ms] ease-linear scale-100"
              style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)' }}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl pt-20">
                <span className={`inline-block px-4 py-2 mb-6 text-xs font-black tracking-widest uppercase bg-emerald-600 text-white rounded-lg shadow-xl transform transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.tag}
                </span>
                <h1 className={`text-5xl md:text-8xl font-bold mb-8 text-white leading-[1.1] drop-shadow-2xl transition-all duration-700 delay-500 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.title.split(' ').map((word, i) => 
                    word.toLowerCase() === 'excellence' || word.toLowerCase() === 'design' || word.toLowerCase() === 'hardscaping'
                    ? <span key={i} className="text-emerald-400">{word} </span> 
                    : word + ' '
                  )}
                </h1>
                <p className={`text-lg md:text-2xl mb-12 text-stone-100 max-w-xl leading-relaxed font-medium drop-shadow-lg transition-all duration-700 delay-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.subtitle}
                </p>
                <div className={`flex flex-col sm:flex-row gap-5 transition-all duration-700 delay-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Link
                    to="/contact"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
                  >
                    Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/gallery"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white border border-white/40 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all text-center shadow-2xl"
                  >
                    View Our Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute z-20 bottom-12 right-4 sm:right-12 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-white/10 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-white/10 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Slider Dots */}
        <div className="absolute z-20 bottom-16 left-4 sm:left-12 flex items-center gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-emerald-500' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8">Comprehensive Solutions</h3>
            <p className="text-stone-700 max-w-2xl mx-auto text-lg md:text-xl font-medium">
              From initial conceptual design to ongoing maintenance, we offer a full suite of services to transform your outdoor living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col">
                <div className="h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <h4 className="text-2xl font-bold mb-4 text-stone-900">{service.title}</h4>
                  <p className="text-stone-700 mb-8 line-clamp-3 leading-relaxed font-medium">{service.description}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-emerald-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-sm tracking-wider"
                  >
                    Explore Service <ArrowRight className="w-4 h-4" />
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

      {/* Why Choose Us */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-emerald-500 font-black tracking-widest uppercase text-xs mb-4">The GreenSydney Difference</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Why Homeowners Trust Us</h3>
              <div className="space-y-8">
                {[
                  { title: 'Eco-Friendly Practices', desc: 'We prioritize sustainable materials and native plant species to support local biodiversity.' },
                  { title: 'Experienced Team', desc: 'Over 10 years of experience designing and maintaining Sydney’s most iconic gardens.' },
                  { title: 'Customized Designs', desc: 'No two gardens are the same. We tailor every project to your lifestyle and property.' },
                  { title: 'Reliable Service', desc: 'Punctual, professional, and dedicated to achieving the highest quality finish.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-emerald-900/50 p-3 rounded-xl border border-emerald-500/30">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-stone-400 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80"
                  alt="Quality Workmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-emerald-600 p-10 rounded-3xl shadow-2xl hidden md:block border-4 border-stone-950">
                <p className="text-5xl font-black mb-1 text-white">10+</p>
                <p className="text-sm font-black uppercase tracking-widest text-emerald-100">Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-stone-900">What Our Clients Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-stone-200 flex flex-col justify-between relative group">
                <Quote className="absolute top-8 right-8 w-14 h-14 text-emerald-600/10 group-hover:text-emerald-600/20 transition-colors" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-900 italic mb-10 text-xl leading-relaxed font-bold">"{t.content}"</p>
                </div>
                <div className="pt-8 border-t-2 border-emerald-50">
                  <p className="font-black text-stone-900 text-lg uppercase tracking-tight">{t.name}</p>
                  <p className="text-sm text-emerald-600 font-black uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_35px_60px_-15px_rgba(5,150,105,0.3)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-tight">Start Your Garden Journey</h3>
              <p className="text-emerald-50 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">
                Join hundreds of happy homeowners across Sydney. Book a free consultation with our experts today.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-emerald-700 px-12 py-6 rounded-full font-black text-lg hover:bg-stone-900 hover:text-white transition-all transform hover:scale-105 shadow-2xl"
              >
                Request Your Quote Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
