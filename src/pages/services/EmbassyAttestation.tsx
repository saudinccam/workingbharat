import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, Clock, Globe, Building2, Shield, Users } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const EmbassyAttestation: React.FC = () => {
  const documents = [
    'Educational Certificates',
    'Commercial Documents',
    'Personal Documents',
    'Marriage Certificates',
    'Birth Certificates',
    'Experience Certificates',
    'Medical Certificates',
    'Power of Attorney'
  ];

  const embassies = [
    'UAE Embassy',
    'Saudi Embassy',
    'Qatar Embassy',
    'Kuwait Embassy',
    'Bahrain Embassy',
    'Oman Embassy',
    'Malaysia Embassy',
    'Singapore Embassy'
  ];

  const features = [
    {
      title: 'Complete Processing',
      description: 'End-to-end attestation including HRD, MEA, and Embassy attestation'
    },
    {
      title: 'Fast Turnaround',
      description: 'Express processing with 5-7 working days completion'
    },
    {
      title: 'Multiple Embassies',
      description: 'Attestation services for all major embassy attestations'
    },
    {
      title: 'Document Security',
      description: 'Secure handling and processing of your valuable documents'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Embassy Attestation Services in India | Document Authentication | WorkingBharat.com</title>
        <meta name="description" content="Professional embassy attestation services for all types of documents. MEA licensed attestation service with fast processing for UAE, Saudi Arabia, Qatar & other countries." />
        <meta name="keywords" content="embassy attestation, document attestation, certificate attestation, UAE embassy attestation, Saudi embassy attestation, Qatar attestation, Kuwait attestation" />
        <link rel="canonical" href="https://workingbharat.com/services/embassy-attestation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Embassy Attestation Services in India</h1>
              <p className="text-xl text-gray-200">Professional embassy attestation services for all types of documents</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">What is Embassy Attestation?</h2>
                  <p className="text-gray-700 mb-4">
                    Embassy attestation is the process of getting your documents authenticated by the embassy of the country 
                    where you plan to use them. This attestation is mandatory for using your documents abroad for employment, 
                    education, or immigration purposes.
                  </p>
                  <p className="text-gray-700">
                    At AR International, we provide comprehensive embassy attestation services for all types of documents, 
                    ensuring they meet the requirements of foreign embassies and are accepted internationally.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-navy-600">
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
                        <FileCheck className="text-navy-600 mr-2" size={18} />
                        <span className="text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Embassy Attestation Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Verification</h4>
                        <p className="text-gray-600">Initial verification of documents and requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">HRD Attestation</h4>
                        <p className="text-gray-600">Attestation from state HRD department (for educational documents)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">MEA Attestation</h4>
                        <p className="text-gray-600">Authentication from Ministry of External Affairs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Embassy Attestation</h4>
                        <p className="text-gray-600">Final attestation from respective embassy</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Embassies We Cover</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {embassies.map((embassy, index) => (
                      <div key={index} className="flex items-center">
                        <Building2 className="text-navy-600 mr-2" size={18} />
                        <span className="text-gray-700">{embassy}</span>
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

export default EmbassyAttestation;