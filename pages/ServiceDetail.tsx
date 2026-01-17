import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowLeft, Phone, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);
  const [showTopBtn, setShowTopBtn] = useState(false);

  if (!service) return <Navigate to="/services" replace />;

  // Back to top logic
  React.useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <Link to="/services" className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-12 transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Services
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=""
          >
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Expert Solutions</span>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">{service.title}</h1>
            <p className="text-xl text-stone-600 leading-relaxed mb-10">
              {service.description} We take pride in delivering top-tier {service.title.toLowerCase()} for both residential and commercial properties throughout Sydney.
            </p>

            {/* Details */}
            <div className="space-y-6 mb-12">
              <h3 className="text-2xl font-bold text-stone-900">What's Included:</h3>
              {service.details.map((detail, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-stone-800 font-medium">{detail}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-stone-900 text-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
              <p className="text-stone-400 mb-8">
                Discuss your {service.title.toLowerCase()} needs with our expert designers. We provide detailed consultations and transparent quotes.
              </p>
              <Link to="/contact" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all">
                <Phone className="w-5 h-5" /> Book a Consultation
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky top-32"
          >
            {/* Main Image */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Gallery Images */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${service.title} ${idx + 1}`}
                  className="rounded-2xl h-40 w-full object-cover"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ServiceDetail;
