
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Play, ArrowRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Sustainability'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories: ('All' | 'Residential' | 'Commercial' | 'Sustainability')[] = ['All', 'Residential', 'Commercial', 'Sustainability'];

  return (
    <div className="py-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-8">Our Portfolio</h1>
          <p className="text-xl text-stone-700 max-w-2xl mx-auto font-medium leading-relaxed">
            A showcase of our recent landscape transformations across Sydney's iconic suburbs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-4 rounded-full font-black transition-all text-sm uppercase tracking-widest ${
                filter === cat 
                  ? 'bg-emerald-600 text-white shadow-xl scale-105' 
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Desktop-only Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Desktop-only Hover Info */}
                <div className="hidden md:flex absolute inset-0 p-10 flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="inline-block w-fit px-4 py-1 bg-emerald-600 text-white text-[10px] font-black rounded-lg mb-4 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase text-xs tracking-widest">
                    Project Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {project.videoUrl && (
                  <div className="absolute top-6 right-6">
                     <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                       <Play className="w-6 h-6 fill-current" />
                     </div>
                  </div>
                )}
              </div>

              {/* Mobile and Tablet visible persistent info */}
              <div className="md:hidden p-8 bg-white border-t border-stone-50">
                <span className="inline-block text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">{project.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="text-emerald-600 font-black uppercase text-xs tracking-widest flex items-center gap-2">
                  View Project <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}

          {/* Video Placeholder */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-stone-950 aspect-[4/5] flex items-center justify-center p-12 text-center cursor-pointer shadow-2xl">
             <div className="relative z-10">
               <div className="w-24 h-24 bg-emerald-600/20 backdrop-blur-xl rounded-full flex items-center justify-center text-emerald-500 border border-emerald-500/30 mx-auto mb-8 transition-transform group-hover:scale-110">
                 <Play className="w-12 h-12 fill-current" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Video Highlights</h3>
               <p className="text-stone-400 text-base font-medium leading-relaxed">Experience our transformations in motion. New walkthroughs added weekly.</p>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1590059345003-887413a11942?auto=format&fit=crop&w=800&q=40" 
               className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity group-hover:opacity-40"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
