import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, FileCheck, Clock, Globe } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const BusinessesLegal: React.FC = () => {
  const services = [
    {
      title: 'Commercial Document Attestation',
      description: 'Complete attestation service for business and commercial documents.',
      processingTime: '5-7 working days',
      features: [
        'Chamber of Commerce Attestation',
        'MEA Attestation',
        'Embassy Attestation',
        'Express Processing'
      ]
    },
    {
      title: 'Legal Document Translation',
      description: 'Professional translation services for legal and commercial documents.',
      processingTime: '3-5 working days',
      features: [
        'Certified Translation',
        'Notarized Translation',
        'Multiple Language Support',
        'Quality Assurance'
      ]
    },
    {
      title: 'Power of Attorney Services',
      description: 'Complete POA attestation and translation services for business use.',
      processingTime: '7-10 working days',
      features: [
        'Document Preparation',
        'Notarization',
        'Embassy Attestation',
        'Translation Services'
      ]
    }
  ];

  const documents = [
    'Board Resolutions',
    'Commercial Invoices',
    'Certificate of Origin',
    'Articles of Association',
    'Power of Attorney',
    'Trade Licenses',
    'Agency Agreements',
    'Commercial Contracts'
  ];

  return (
    <>
      <Helmet>
        <title>Business & Legal Documentation Services | WorkingBharat.com</title>
        <meta name="description" content="Professional documentation services for businesses including commercial document attestation, legal translations, and power of attorney services." />
        <meta name="keywords" content="business documents, legal translation, commercial attestation, power of attorney, business abroad, legal documentation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Business & Legal Documentation Services</h1>
              <p className="text-xl text-gray-200">Professional documentation solutions for businesses and legal entities</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Business Documentation Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-navy-600">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Clock size={16} className="text-navy-600 mr-2" />
                        Processing Time: {service.processingTime}
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <FileCheck size={16} className="text-navy-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Documents We Handle</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {documents.map((document, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <FileCheck size={16} className="text-navy-600" />
                        <span>{document}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Review</h4>
                        <p className="text-gray-600">Initial assessment of your documents and requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Processing</h4>
                        <p className="text-gray-600">Document attestation, translation, or notarization as required</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Quality Check</h4>
                        <p className="text-gray-600">Thorough verification of processed documents</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Delivery</h4>
                        <p className="text-gray-600">Secure delivery of completed documents</p>
                      </div>
                    </div>
                  </div>
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

export default BusinessesLegal;