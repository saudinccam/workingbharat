import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import { Phone, MessageSquare, FileCheck, Clock, Globe } from 'lucide-react';
import QuickEnquiryForm from './QuickEnquiryForm';

const ServicePage: React.FC = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id.toString() === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  const metaKeywords = `${service.title.toLowerCase()}, ${service.features.join(', ').toLowerCase()}, document attestation, apostille services, document translation, visa services, india`;

  return (
    <>
      <Helmet>
        <title>{`${service.title} Services in India | WorkingBharat.com`}</title>
        <meta name="description" content={`Professional ${service.title.toLowerCase()} services in India. ${service.description} Fast processing with MEA licensed attestation services.`} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://workingbharat.com/services/${serviceId}`} />
        <meta property="og:title" content={`${service.title} Services in India | WorkingBharat.com`} />
        <meta property="og:description" content={`Professional ${service.title.toLowerCase()} services in India. ${service.description}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://workingbharat.com/services/${serviceId}`} />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">{service.title} Services in India</h1>
              <p className="text-xl text-gray-200">{service.description}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Key Features of Our {service.title} Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <FileCheck className="text-saffron mt-1 mr-2" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.countries && (
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 mb-4">Countries We Cover</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {service.countries.map((country, index) => (
                        <div key={index} className="flex items-center">
                          <Globe className="text-saffron mr-2" size={18} />
                          <span className="text-gray-700">{country}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Required Documents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.documents.map((document, index) => (
                      <div key={index} className="flex items-start">
                        <FileCheck className="text-saffron mt-1 mr-2" size={18} />
                        <span className="text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center text-lg text-gray-700 mb-4">
                    <Clock className="text-saffron mr-2" size={20} />
                    <span>Processing Time: {service.processingTime}</span>
                  </div>
                  <p className="text-gray-600">
                    Note: Processing time may vary depending on the complexity of the documents and embassy requirements.
                    Express processing is available for urgent cases.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Why Choose AR International?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-saffron p-1 rounded-full mr-3 mt-1">
                        <FileCheck size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">MEA Licensed Company (B-0056/DEL/PER/1000+/3/5275/99)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-saffron p-1 rounded-full mr-3 mt-1">
                        <FileCheck size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">20+ Years of Experience in Document Processing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-saffron p-1 rounded-full mr-3 mt-1">
                        <FileCheck size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">100,000+ Satisfied Clients Since 1999</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-saffron p-1 rounded-full mr-3 mt-1">
                        <FileCheck size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">Pan India Presence with 6 Branches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
                <h3 className="text-xl font-semibold text-navy-900 mb-6">Get Free Quote</h3>
                <QuickEnquiryForm />

                <div className="mt-6 space-y-4">
                  <a 
                    href="https://wa.me/919220161774"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors w-full"
                  >
                    <MessageSquare size={18} className="mr-2" />
                    WhatsApp Now
                  </a>
                  <a 
                    href="tel:+919560731774"
                    className="flex items-center justify-center bg-saffron text-white px-4 py-3 rounded-lg hover:bg-saffron-600 transition-colors w-full"
                  >
                    <Phone size={18} className="mr-2" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;