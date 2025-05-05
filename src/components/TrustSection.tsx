import React from 'react';
import { Check, Star, Facebook } from 'lucide-react';

const TrustSection: React.FC = () => {
  const trustPoints = [
    "MEA Licensed Company (B-0056/DEL/PER/1000+/3/5275/99)",
    "Over 100,000 satisfied clients since 1999",
    "Authorized agent for Saudi, Kuwait & Libya visa stamping",
    "Experts in document attestation for all countries",
    "Professional translations in multiple languages",
    "Fast turnaround times & regular status updates",
    "Dedicated customer support team"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Why <span className="text-saffron">Indians Trust</span> AR International?</h2>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://g.co/kgs/sX4e5DP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all"
              >
                <div className="mr-3">
                  <Star className="text-yellow-400 fill-yellow-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold">4.9/5 Rating</div>
                  <div className="text-sm text-gray-300">75+ Google Reviews</div>
                </div>
              </a>

              <a 
                href="https://www.facebook.com/profile.php?id=61571540566820" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all"
              >
                <div className="mr-3">
                  <Facebook className="text-blue-500" size={24} />
                </div>
                <div>
                  <div className="font-semibold">1,500+ Likes</div>
                  <div className="text-sm text-gray-300">Facebook Community</div>
                </div>
              </a>
            </div>
            
            <ul className="space-y-3">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-saffron p-1 rounded-full mr-3 mt-1">
                    <Check size={14} className="text-white" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="bg-saffron hover:bg-saffron-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                Contact Us Today
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Document with apostille stamp" 
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Document translation" 
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Embassy building" 
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Visa document" 
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;