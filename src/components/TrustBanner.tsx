import React, { useState, useEffect } from 'react';
import { Shield, Star, Award, Users } from 'lucide-react';

const TrustBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-[60px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg animate-slide-up z-30">
      <div className="flex overflow-x-auto p-3 space-x-4">
        <div className="flex-none flex flex-col items-center bg-blue-50 p-3 rounded-lg min-w-[120px]">
          <Shield className="text-navy-600 mb-1" size={20} />
          <span className="text-xs font-medium text-navy-900">MEA Licensed</span>
          <span className="text-[10px] text-gray-600">Since 1999</span>
        </div>
        
        <div className="flex-none flex flex-col items-center bg-yellow-50 p-3 rounded-lg min-w-[120px]">
          <Star className="text-yellow-400 fill-yellow-400 mb-1" size={20} />
          <span className="text-xs font-medium text-navy-900">4.9/5 Rating</span>
          <span className="text-[10px] text-gray-600">75+ Reviews</span>
        </div>
        
        <div className="flex-none flex flex-col items-center bg-green-50 p-3 rounded-lg min-w-[120px]">
          <Award className="text-green-600 mb-1" size={20} />
          <span className="text-xs font-medium text-navy-900">Official Partner</span>
          <span className="text-[10px] text-gray-600">Multiple Embassies</span>
        </div>
        
        <div className="flex-none flex flex-col items-center bg-purple-50 p-3 rounded-lg min-w-[120px]">
          <Users className="text-purple-600 mb-1" size={20} />
          <span className="text-xs font-medium text-navy-900">1 Lakh+</span>
          <span className="text-[10px] text-gray-600">Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;