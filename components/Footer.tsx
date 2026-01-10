
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold tracking-tight">GreenSydney</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Premium landscaping and garden design services across Sydney. We specialize in sustainable, beautiful outdoor environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-stone-400 hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-stone-400 hover:text-emerald-500 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-stone-400 hover:text-emerald-500 transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-stone-400">Residential Design</li>
              <li className="text-stone-400">Lawn Maintenance</li>
              <li className="text-stone-400">Hardscaping</li>
              <li className="text-stone-400">Eco-Friendly Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-stone-400">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>02 8765 4321</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-400">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>hello@greensydney.com.au</span>
              </li>
              <li className="flex items-start space-x-3 text-stone-400">
                <MapPin className="w-5 h-5 text-emerald-500 mt-1" />
                <span>123 Gardenia Ave,<br />North Sydney, NSW 2060</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} GreenSydney Landscapes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-500">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
