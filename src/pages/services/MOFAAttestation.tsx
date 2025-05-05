import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, Clock, Globe, Building2 } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const MOFAAttestation: React.FC = () => {
  const documents = [
    'Educational Certificates',
    'Commercial Documents',
    'Personal Documents',
    'Marriage Certificates',
    'Birth Certificates',
    'Experience Certificates',
    'Medical Certificates',
    'Employment Contracts'
  ];

  const countries = [
    'Saudi Arabia',
    'UAE',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman'
  ];

  const features = [
    {
      title: 'Complete Processing',
      description: 'End-to-end attestation including HRD, MEA, and MOFA attestation'
    },
    {
      title: 'Fast Turnaround',
      description: 'Express processing with 7-10 working days completion'
    },
    {
      title: 'GCC Coverage',
      description: 'Attestation services for all GCC countries'
    },
    {
      title: 'Document Security',
      description: 'Secure handling and processing of your valuable documents'
    }
  ];

  return (
    <>
      <Helmet>
        <title>MOFA Attestation Services in India | GCC Document Authentication | WorkingBharat.com</title>
        <meta name="description" content="Professional MOFA attestation services for GCC countries. MEA licensed attestation service with fast processing for Saudi Arabia, UAE, Qatar & other Gulf nations." />
        <meta name="keywords" content="mofa attestation, ministry of foreign affairs attestation, gcc attestation, saudi attestation, uae attestation, qatar attestation, kuwait attestation" />
        <link rel="canonical" href="https://workingbharat.com/services/mofa-attestation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">MOFA Attestation Services</h1>
              <p className="text-xl text-gray-200">Professional MOFA attestation services for GCC countries</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">What is MOFA Attestation?</h2>
                  <p className="text-gray-700 mb-4">
                    MOFA (Ministry of Foreign Affairs) attestation is a crucial process required for documents to be used in 
                    GCC countries. This attestation validates your documents for use in Saudi Arabia, UAE, Qatar, and other 
                    Gulf nations.
                  </p>
                  <p className="text-gray-700">
                    At AR International, we provide comprehensive MOFA attestation services, ensuring your documents meet all 
                    requirements for acceptance in GCC countries.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Documents We Handle</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.map((document, index) => (
                      <div key={index} className="flex items-center">
                        <FileCheck className="text-green-600 mr-2" size={18} />
                        <span className="text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">MOFA Attestation Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <span className="text-green-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Verification</h4>
                        <p className="text-gray-600">Initial verification of documents and requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <span className="text-green-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">HRD Attestation</h4>
                        <p className="text-gray-600">Attestation from state HRD department (for educational documents)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <span className="text-green-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">MEA Attestation</h4>
                        <p className="text-gray-600">Authentication from Ministry of External Affairs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <span className="text-green-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">MOFA Attestation</h4>
                        <p className="text-gray-600">Final attestation from Ministry of Foreign Affairs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Countries We Cover</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {countries.map((country, index) => (
                      <div key={index} className="flex items-center">
                        <Globe className="text-green-600 mr-2" size={18} />
                        <span className="text-gray-700">{country}</span>
                      </div>
                    ))}
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

export default MOFAAttestation;