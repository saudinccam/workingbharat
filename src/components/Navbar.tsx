import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Facebook, Star, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setShowDesktopMenu(false);
  }, [location]);

  const isContactPage = location.pathname === '/contact';
  const isServicePage = location.pathname.startsWith('/services/');
  const shouldUseWhiteBackground = isContactPage || isServicePage || isScrolled;

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${shouldUseWhiteBackground ? 'bg-white shadow-md' : ''}`}>
        <div className={`hidden md:block ${shouldUseWhiteBackground ? 'bg-white border-b border-gray-100' : 'bg-black bg-opacity-20'}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Phone size={14} className={`text-saffron mr-1`} />
                    <a href="tel:+919560731774" className={`${shouldUseWhiteBackground ? 'text-gray-600 hover:text-saffron' : 'text-white hover:text-saffron'} transition-colors`}>+91-9560731774</a>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare size={14} className="text-green-600 mr-1" />
                    <div className="flex space-x-2">
                      <a href="https://wa.me/919220161774" className={`${shouldUseWhiteBackground ? 'text-gray-600 hover:text-saffron' : 'text-white hover:text-saffron'} transition-colors`}>+91-9220161774</a>
                      <span className={shouldUseWhiteBackground ? 'text-gray-600' : 'text-white'}>|</span>
                      <a href="https://wa.me/919211461774" className={`${shouldUseWhiteBackground ? 'text-gray-600 hover:text-saffron' : 'text-white hover:text-saffron'} transition-colors`}>+91-9211461774</a>
                    </div>
                  </div>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61571540566820"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${shouldUseWhiteBackground ? 'text-gray-600 hover:text-saffron' : 'text-white hover:text-saffron'} transition-colors`}
                  >
                    <Facebook size={14} className="mr-1" />
                    <span>1,500+ Likes</span>
                  </a>
                  <a 
                    href="https://g.co/kgs/sX4e5DP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${shouldUseWhiteBackground ? 'text-gray-600 hover:text-saffron' : 'text-white hover:text-saffron'} transition-colors`}
                  >
                    <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                    <span>4.9/5 (75+ Reviews)</span>
                  </a>
                </div>
              </div>
              <div className={shouldUseWhiteBackground ? 'text-gray-600' : 'text-white'}>
                <span className="font-semibold">MEA License: B-0056/DEL/PER/1000+/3/5275/99</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={shouldUseWhiteBackground ? 'bg-white' : 'bg-gradient-to-b from-black/50 to-transparent'}>
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <Link to="/" className="font-bold text-2xl">
                  <span className="text-saffron">Working</span>
                  <span className={shouldUseWhiteBackground ? 'text-navy-900' : 'text-white'}>Bharat</span>
                  <span className="text-green-600">.com</span>
                </Link>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => setShowDesktopMenu(!showDesktopMenu)}
                  onMouseEnter={() => setShowDesktopMenu(true)}
                  className={`font-medium hover:text-saffron transition-colors flex items-center ${shouldUseWhiteBackground ? 'text-navy-900' : 'text-white'}`}
                >
                  Who We Help
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <button 
                  onClick={() => setShowDesktopMenu(!showDesktopMenu)}
                  onMouseEnter={() => setShowDesktopMenu(true)}
                  className={`font-medium hover:text-saffron transition-colors flex items-center ${shouldUseWhiteBackground ? 'text-navy-900' : 'text-white'}`}
                >
                  Services
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <Link 
                  to="/about"
                  className={`font-medium hover:text-saffron transition-colors ${shouldUseWhiteBackground ? 'text-navy-900' : 'text-white'}`}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-saffron text-white px-6 py-2.5 rounded-lg font-medium hover:bg-saffron-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
              
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={24} className={shouldUseWhiteBackground ? 'text-navy-900' : 'text-white'} />
                ) : (
                  <Menu size={24} className={shouldUseWhiteBackground ? 'text-navy-900' : 'text-white'} />
                )}
              </button>
            </nav>
          </div>
        </div>

        <div 
          className="hidden md:block relative"
          onMouseLeave={() => setShowDesktopMenu(false)}
        >
          <DesktopMenu isVisible={showDesktopMenu} />
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;