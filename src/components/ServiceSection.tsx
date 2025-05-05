import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { FileCheck, Building, Stamp, Languages, FileCheck2, BadgeCheck, Clock } from 'lucide-react';

const ServiceSection: React.FC = () => {
  const getIcon = (iconName: string, className: string = "") => {
    switch (iconName) {
      case 'file-check':
        return <FileCheck className={className} />;
      case 'building':
        return <Building className={className} />;
      case 'stamp':
        return <Stamp className={className} />;
      case 'languages':
        return <Languages className={className} />;
      case 'file-check-2':
        return <FileCheck2 className={className} />;
      case 'badge-check':
        return <BadgeCheck className={className} />;
      default:
        return <FileCheck className={className} />;
    }
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-3">Our Document Processing Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional document attestation, apostille, and translation services for Indians planning to work, study, or settle abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              to={`/services/${service.id}`}
              key={service.id} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-saffron"
            >
              <div className="flex items-start">
                <div className="bg-saffron bg-opacity-10 p-3 rounded-lg mr-4">
                  {getIcon(service.icon, "text-saffron")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-navy-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-saffron rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={14} className="text-saffron mr-1" />
                    <span>Processing Time: {service.processingTime}</span>
                  </div>
                  
                  {service.countries && service.countries.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-navy-700 mb-1">Countries:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.countries.slice(0, 4).map((country, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {country}
                          </span>
                        ))}
                        {service.countries.length > 4 && (
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            +{service.countries.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {service.languages && service.languages.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-navy-700 mb-1">Languages:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.languages.slice(0, 4).map((language, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {language}
                          </span>
                        ))}
                        {service.languages.length > 4 && (
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            +{service.languages.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-navy-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-900 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;