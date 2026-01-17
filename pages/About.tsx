import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Heart } from 'lucide-react';
import clean from '../assets/clean.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const About: React.FC = () => {
  return (
    <div className="py-20 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HERO / INTRO ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={clean}
                alt="GreenSydney Landscaping Work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Quote */}
            <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-xl font-bold italic leading-snug">
                “Rooted in Excellence, Growing for Sydney.”
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="inline-block mb-4 text-xs font-black tracking-widest uppercase text-emerald-600">
              About GreenSydney
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Where Nature Meets Artistry
            </h1>

            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Green Sydney landscapes is a Sydney-based landscaping company dedicated
              to transforming outdoor spaces into beautiful, functional, and
              sustainable environments.
            </p>

            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              From residential gardens to commercial landscapes, our experienced
              team delivers thoughtful design, premium workmanship, and reliable
              maintenance that stands the test of time.
            </p>

            {/* Stats */}
            <div className="flex gap-14">
              <div>
                <p className="text-4xl font-bold text-emerald-600">100+</p>
                <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-emerald-600">12+</p>
                <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                  Expert Staff
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== VALUES SECTION ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="bg-stone-100 rounded-[3rem] p-12 md:p-20"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              The principles that guide every project, every client, and every
              outdoor space we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Target className="w-9 h-9" />,
                title: 'Quality',
                text: 'Premium materials, proven techniques, and attention to detail in every project.'
              },
              {
                icon: <Heart className="w-9 h-9" />,
                title: 'Reliability',
                text: 'We respect your time and property, delivering on schedule with care.'
              },
              {
                icon: <ShieldCheck className="w-9 h-9" />,
                title: 'Customer Focus',
                text: 'Your vision matters. We listen closely and tailor every solution.'
              },
              {
                icon: <Users className="w-9 h-9" />,
                title: 'Sustainability',
                text: 'Eco-friendly practices that support soil health and water efficiency.'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-stone-900">
                  {value.title}
                </h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
