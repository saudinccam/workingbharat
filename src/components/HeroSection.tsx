import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import QuickEnquiryForm from './QuickEnquiryForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-900 opacity-70 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Indians working abroad" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-20 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Your <span className="text-saffron">Trusted Partner</span> for Global Dreams
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-100">
                Helping Indians work, study, and settle abroad with professional document attestation, apostille, legalization & visa stamping services since 1999.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white border-opacity-20">
                  <p className="text-saffron font-medium">MEA Licensed</p>
                  <p className="text-white text-sm">B-0056/DEL/PER/1000+/3/5275/99</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white border-opacity-20">
                  <p className="text-saffron font-medium">Trusted By</p>
                  <p className="text-white text-sm">1 Lakh+ Indians Since 1999</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+919560731774" 
                  className="flex items-center bg-saffron text-white px-5 py-3 rounded-lg font-medium hover:bg-saffron-600 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919220161774" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center bg-green-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  <MessageSquare size={18} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto">
              <QuickEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;