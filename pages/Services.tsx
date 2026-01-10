
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-8 leading-tight">Professional Services</h1>
          <p className="text-xl text-stone-700 leading-relaxed font-medium">
            We provide a comprehensive range of landscaping and gardening services across Sydney. Whether you need a simple lawn refresh or a full-scale architectural garden transformation, our expert team is ready to deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 border border-stone-100 group">
              <div className="h-72 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 bg-emerald-600 text-white p-4 rounded-2xl shadow-xl">
                  <Leaf className="w-6 h-6" />
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-5 text-stone-900 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                <p className="text-stone-700 mb-10 leading-relaxed font-medium text-base">{service.description}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  {service.details.slice(0, 4).map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-sm font-bold text-stone-600">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm"></div>
                      {detail}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="w-full text-center block bg-stone-950 hover:bg-emerald-600 text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-lg uppercase tracking-widest text-xs"
                >
                  View Service Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
