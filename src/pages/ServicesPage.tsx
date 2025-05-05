import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { FileCheck, Clock, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Document Attestation, Apostille & Translation Services | WorkingBharat.com</title>
        <meta name="description" content="Professional document attestation, apostille, translation services for visa, employment, education & immigration. MEA licensed company serving since 1999." />
        <meta name="keywords" content="document attestation, apostille services, embassy attestation, MEA attestation, document translation, visa services, dataflow verification, HRD attestation, MOFA attestation, educational certificate attestation" />
        <link rel="canonical" href="https://workingbharat.com/services" />
        <meta property="og:title" content="Document Attestation, Apostille & Translation Services | WorkingBharat.com" />
        <meta property="og:description" content="Professional document attestation, apostille, translation services for visa, employment, education & immigration. MEA licensed company serving since 1999." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://workingbharat.com/services" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Document Processing Services in India</h1>
              <p className="text-xl text-gray-200">MEA Licensed Professional Services for Attestation, Apostille & Translation</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-saffron"
              >
                <h2 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock size={16} className="text-saffron mr-2" />
                  <span>Processing Time: {service.processingTime}</span>
                </div>

                {service.countries && (
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Globe size={16} className="text-saffron mr-2" />
                      <span className="text-sm font-medium text-navy-700">Countries Covered:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.countries.slice(0, 3).map((country, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {country}
                        </span>
                      ))}
                      {service.countries.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          +{service.countries.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center mb-2">
                    <FileCheck size={16} className="text-saffron mr-2" />
                    <span className="text-sm font-medium text-navy-700">Key Features:</span>
                  </div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-saffron rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 text-saffron text-sm font-medium">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Why Choose AR International for Document Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-navy-900 mb-2">Government Licensed</h3>
                <p className="text-gray-600 text-sm">MEA Licensed company with over 20 years of experience in document processing</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-navy-900 mb-2">Pan India Presence</h3>
                <p className="text-gray-600 text-sm">6 branches across India for convenient document processing services</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-navy-900 mb-2">Fast Processing</h3>
                <p className="text-gray-600 text-sm">Quick turnaround time with express service options available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;