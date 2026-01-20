
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import logo from "../assets/logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
            <img
      src={logo}
      alt="GreenSydney Logo"
      className="h-12 md:h-16 object-contain"
    />
              <span className="text-2xl font-bold tracking-tight">Green Sydney</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Green Sydney landscapes transforms outdoor spaces into beautiful, functional, and sustainable landscapes. From lawn care to full garden makeovers, we deliver exceptional results for homes and businesses across Sydney.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/share/1AS6Wsj1JB/" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Facebook className="w-5 h-5" /></a>
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
              <li><Link to="services/lawn-turflaying" className="text-stone-400 hover:text-emerald-500 transition-colors">Lawn and Turf laying</Link></li>
              <li><Link to="/services/pruning-trim" className="text-stone-400 hover:text-emerald-500 transition-colors">Pruning and Trimming</Link></li>
              <li><Link to="/services/weeding" className="text-stone-400 hover:text-emerald-500 transition-colors">Weeding</Link></li>
              <li><Link to="/services/mulching" className="text-stone-400 hover:text-emerald-500 transition-colors">Mulching</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-stone-400">
            <Phone className="w-5 h-5 text-emerald-500" />
            <a href="tel:+61416801250" className="hover:underline">
            04 1680 1250
            </a>
          </li>

          <li className="flex items-center space-x-3 text-stone-400 break-all">
  <Mail className="w-5 h-5 text-emerald-500" />
  <a href="mailto:info@greensydneylandscapes.com.au" className="break-words hover:underline">
    info@greensydneylandscapes.com.au
  </a>
</li>






              <li className="flex items-start space-x-3 text-stone-400">
                <MapPin className="w-5 h-5 text-emerald-500 mt-1" />
                <span>123 Gardenia Ave,<br />North Sydney, NSW 2060</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-stone-500">
  <p className="text-center">
    © {new Date().getFullYear()} GreenSydney Landscapes. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
