import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, FileCheck, Clock, Globe } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const Families: React.FC = () => {
  const services = [
    {
      title: 'Marriage Certificate Attestation',
      description: 'Complete attestation service for marriage certificates for family visa and immigration.',
      processingTime: '5-7 working days',
      features: [
        'MEA Attestation',
        'Embassy Attestation',
        'Document Translation',
        'Express Processing'
      ]
    },
    {
      title: 'Birth Certificate Apostille',
      description: 'Birth certificate apostille and attestation services for international use.',
      processingTime: '3-5 working days',
      features: [
        'MEA Apostille',
        'Embassy Attestation',
        'Translation Services',
        'Fast Processing'
      ]
    },
    {
      title: 'Family Visa Documentation',
      description: 'Complete documentation assistance for family/dependent visas.',
      processingTime: '7-10 working days',
      features: [
        'Document Verification',
        'Visa Application Support',
        'Translation Services',
        'Status Tracking'
      ]
    }
  ];

  const countries = [
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'USA', 'UK',
    'Canada', 'Australia', 'New Zealand', 'Germany'
  ];

  return (
    <>
      <Helmet>
        <title>Family Documentation Services | WorkingBharat.com</title>
        <meta name="description" content="Complete documentation services for families including marriage certificate attestation, birth certificate apostille, and family visa processing." />
        <meta name="keywords" content="family visa, marriage certificate, birth certificate, document attestation, family immigration, dependent visa" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Family Documentation Services</h1>
              <p className="text-xl text-gray-200">Complete documentation solutions for family immigration and reunion</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Family Documentation Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Clock size={16} className="text-red-600 mr-2" />
                        Processing Time: {service.processingTime}
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <FileCheck size={16} className="text-red-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Countries We Cover</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {countries.map((country, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <Globe size={16} className="text-red-600" />
                        <span>{country}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Required Documents</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Marriage Certificate
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Birth Certificates
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Passport Copies
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Sponsor Documents
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Relationship Proof
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Financial Documents
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
                <h3 className="text-xl font-semibold text-navy-900 mb-6">Get Free Quote</h3>
                <QuickEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Families;