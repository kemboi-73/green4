
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-8">Get In Touch</h1>
          <p className="text-xl text-stone-700 max-w-2xl mx-auto font-medium">
            Ready to transform your outdoor space? Fill out the form below or reach out to us directly for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-10">Contact Details</h2>
              <div className="space-y-10">
                {[
                  { icon: <Phone className="w-7 h-7" />, label: 'Phone', val: '02 8765 4321', desc: 'Mon-Fri: 8am – 5pm' },
                  { icon: <Mail className="w-7 h-7" />, label: 'Email', val: 'hello@greensydney.com.au', desc: 'Fast response within 24h' },
                  { icon: <MapPin className="w-7 h-7" />, label: 'Office', val: '123 Gardenia Ave, North Sydney', desc: 'Visit our design studio' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="bg-emerald-600 text-white p-5 rounded-2xl h-fit shadow-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">{item.label}</p>
                      <p className="text-2xl font-bold text-stone-900 mb-1">{item.val}</p>
                      <p className="text-stone-600 font-bold text-sm uppercase tracking-wide opacity-80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-950 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <h3 className="text-3xl font-bold mb-8">Service Areas</h3>
              <div className="grid grid-cols-2 gap-6 text-stone-300 font-bold text-sm">
                <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-emerald-500" /> Sydney CBD</div>
                <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-emerald-500" /> Eastern Suburbs</div>
                <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-emerald-500" /> North Shore</div>
                <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-emerald-500" /> Inner West</div>
                <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-emerald-500" /> Northern Beaches</div>
                <div className="flex items-center gap-3"><Globe className="w-4 h-4 text-emerald-500" /> Sutherland Shire</div>
              </div>
              <div className="mt-10 pt-10 border-t border-stone-800 flex items-center gap-4 text-stone-400 font-medium">
                <Clock className="w-6 h-6 text-emerald-500" />
                <span>Open: Mon - Sat: 7am - 6pm</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-stone-100">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <Send className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-bold text-stone-900 mb-6">Inquiry Sent!</h3>
                  <p className="text-stone-700 text-xl leading-relaxed font-medium">Thank you for your interest. One of our lead designers will contact you within one business day.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-10 bg-stone-900 text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-emerald-600 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-stone-900 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all font-bold text-stone-900"
                        placeholder="e.g. Michael Smith"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-stone-900 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all font-bold text-stone-900"
                        placeholder="mike@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-stone-900 uppercase tracking-widest ml-1">Mobile Number</label>
                      <input
                        type="tel"
                        className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all font-bold text-stone-900"
                        placeholder="0412 345 678"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-stone-900 uppercase tracking-widest ml-1">Service Type</label>
                      <select
                        className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all font-bold text-stone-900 appearance-none"
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                      >
                        <option value="residential">Residential Landscaping</option>
                        <option value="maintenance">Maintenance & Care</option>
                        <option value="turf">Lawn & Turf Services</option>
                        <option value="hardscaping">Hardscaping & Paving</option>
                        <option value="commercial">Commercial/Strata</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-stone-900 uppercase tracking-widest ml-1">Project Description</label>
                    <textarea
                      rows={6}
                      className="w-full bg-stone-50 border-2 border-stone-100 rounded-[2rem] px-8 py-6 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all font-bold text-stone-900"
                      placeholder="Tell us about your garden goals and any specific features you'd like..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-stone-900 text-white py-6 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(5,150,105,0.3)] hover:shadow-2xl transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4 uppercase tracking-[0.1em]"
                  >
                    Request Free Consultation <Send className="w-6 h-6" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="mt-24">
          <div className="bg-white rounded-[4rem] overflow-hidden h-[600px] shadow-2xl relative border-8 border-white p-1">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106037.13528254091!2d151.0967332247547!3d-33.84687593679165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1716298544922!5m2!1sen!2sau" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl max-w-xs border border-white/50">
              <h4 className="font-black text-stone-900 mb-3 text-lg">Our Design Studio</h4>
              <p className="text-stone-700 text-sm font-bold mb-6">123 Gardenia Ave, North Sydney, NSW 2060</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-stone-900 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
