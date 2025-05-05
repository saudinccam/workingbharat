import React, { useState } from 'react';
import { Phone, MessageSquare, ChevronUp, Star, Facebook } from 'lucide-react';

const MobileContactButtons: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {isExpanded && (
        <div className="bg-white border-t border-gray-200 shadow-lg p-4 space-y-4 animate-slide-up">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61571540566820"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 p-3 rounded-lg flex flex-col items-center justify-center space-y-1 hover:bg-blue-100 transition-colors"
            >
              <Facebook size={24} className="text-blue-600" />
              <div className="text-center">
                <div className="text-sm font-medium text-navy-900">Facebook</div>
                <div className="text-xs text-gray-600">1,500+ Likes</div>
              </div>
            </a>
            <a 
              href="https://g.co/kgs/sX4e5DP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-50 p-3 rounded-lg flex flex-col items-center justify-center space-y-1 hover:bg-yellow-100 transition-colors"
            >
              <Star size={24} className="text-yellow-400 fill-yellow-400" />
              <div className="text-center">
                <div className="text-sm font-medium text-navy-900">Google</div>
                <div className="text-xs text-gray-600">4.9/5 (75+ Reviews)</div>
              </div>
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm font-medium text-navy-900">Call Us</div>
              <div className="text-xs text-gray-500">24/7 Support</div>
            </div>
            <a href="tel:+919560731774" className="flex items-center space-x-2 text-navy-900 bg-white p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Phone size={18} className="text-saffron" />
              <span className="font-medium">+91-9560731774</span>
            </a>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm font-medium text-navy-900">WhatsApp</div>
              <div className="text-xs text-gray-500">Quick Response</div>
            </div>
            <div className="space-y-2">
              <a href="https://wa.me/919220161774" className="flex items-center space-x-2 text-navy-900 bg-white p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageSquare size={18} className="text-green-600" />
                <span className="font-medium">+91-9220161774</span>
              </a>
              <a href="https://wa.me/919211461774" className="flex items-center space-x-2 text-navy-900 bg-white p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageSquare size={18} className="text-green-600" />
                <span className="font-medium">+91-9211461774</span>
              </a>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white border-t border-gray-200 p-3 flex items-center justify-between shadow-lg">
        <a 
          href="https://wa.me/919220161774"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
        >
          <MessageSquare size={20} />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1 flex items-center justify-center space-x-2 text-navy-900"
        >
          <ChevronUp size={20} className={`transform transition-transform ${isExpanded ? '' : 'rotate-180'}`} />
          <span className="text-sm font-medium">{isExpanded ? 'Close' : 'Contact'}</span>
        </button>
        
        <a 
          href="tel:+919560731774"
          className="flex-1 flex items-center justify-center space-x-2 text-saffron hover:text-saffron-600 transition-colors"
        >
          <Phone size={20} />
          <span className="text-sm font-medium">Call</span>
        </a>
      </div>
    </div>
  );
};

export default MobileContactButtons;