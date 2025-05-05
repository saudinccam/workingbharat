import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Star } from 'lucide-react';
import { services } from '../data/services';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-saffron">Working</span>
              Bharat<span className="text-green-500">.com</span>
            </h3>
            <p className="text-gray-300 mb-4">
              India's trusted brand helping citizens go abroad for work, study, or family reunion since 1999.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a 
                href="https://g.co/kgs/sX4e5DP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-white bg-opacity-5 px-3 py-2 rounded-lg hover:bg-opacity-10 transition-all"
              >
                <Star className="text-yellow-400 fill-yellow-400 mr-2" size={16} />
                <span className="text-sm">4.9/5 (75+ Reviews)</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61571540566820" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/1" className="text-gray-300 hover:text-saffron transition-colors">Our Services</Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-saffron transition-colors">About Us</a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-saffron transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-gray-300 hover:text-saffron transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-saffron mr-2 mt-1" />
                <span className="text-gray-300">30 Kilokri, 2nd Floor, Ring Road, New Delhi – 110014</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-saffron mr-2" />
                <a href="tel:+919560731774" className="text-gray-300 hover:text-white transition-colors">+91-9560731774</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-saffron mr-2" />
                <a href="mailto:contact@thearinternationals.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@thearinternationals.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                <span className="font-semibold text-white">MEA License No:</span> B-0056/DEL/PER/1000+/3/5275/99
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} WorkingBharat.com - AR International. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;