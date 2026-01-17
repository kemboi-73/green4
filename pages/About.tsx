
import React from 'react';
import { Target, Users, ShieldCheck, Heart } from 'lucide-react';
import clean from '../assets/clean.jpg';
const About: React.FC = () => {
  return (
    <div className="py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
          <img
                src={clean}
                alt="Quality Workmanship"
                className="w-full h-full object-cover"
              />

            <div className="absolute -bottom-6 -right-6 w-1/2 aspect-video bg-emerald-600 p-8 rounded-2xl text-white shadow-xl hidden md:block">
              <p className="text-2xl font-bold italic">"Rooted in Excellence, Growing for Sydney."</p>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-stone-900 mb-8">GreenSydney: Where Nature Meets Artistry</h1>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
            At Greensydneylandscapes, we are passionate about transforming outdoor spaces into beautiful, functional, and sustainable landscapes. Based in Sydney, we specialize in landscaping, lawn care, garden maintenance, and outdoor enhancements for both residential and commercial properties.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            With years of experience and a team of skilled professionals, we pride ourselves on delivering exceptional results, personalized solutions, and reliable service. From creating lush lawns to installing stunning gardens and maintaining them year-round, we are committed to helping homeowners and businesses enjoy their outdoor spaces to the fullest.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-emerald-600">100+</h4>
                <p className="text-stone-500 font-medium uppercase text-xs tracking-wider">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-emerald-600">12</h4>
                <p className="text-stone-500 font-medium uppercase text-xs tracking-wider">Expert Staff</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-stone-100 rounded-[3rem] p-12 md:p-20 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Our Core Values</h2>
            <p className="text-stone-600">The principles that drive every project we touch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Target className="w-10 h-10" />, title: 'Quality', text: 'We use premium materials, proven techniques, and pay attention to every detail to deliver results that last.' },
              { icon: <Heart className="w-10 h-10" />, title: 'Reliability', text: 'We respect your time and your property, completing projects efficiently and on schedule' },
              { icon: <ShieldCheck className="w-10 h-10" />, title: 'Customer Focus', text: 'Your satisfaction is our priority. We listen, understand your vision, and tailor solutions to meet your needs.' },
              { icon: <Users className="w-10 h-10" />, title: 'Sustainability', text: 'We incorporate eco-friendly practices that support soil health, water efficiency, and long-term garden wellness.' }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white w-20 h-20 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
