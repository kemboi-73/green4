import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <Navigate to="/gallery" replace />;

  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
              {project.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-8">
              {project.title}
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed mb-10">
              {project.description}
            </p>

            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
            <p className="text-stone-700 font-medium">
                {project.summary}
            </p>
            </div>

          </motion.div>

          {/* Images */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  className="rounded-2xl h-48 w-full object-cover"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
