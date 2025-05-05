import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, Clock, Globe, Home } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const HomeDepartment: React.FC = () => {
  const documents = [
    'Marriage Certificates',
    'Birth Certificates',
    'Death Certificates',
    'Address Proof Documents',
    'Police Clearance Certificates',
    'Residential Documents',
    'Affidavits',
    'Power of Attorney'
  ];

  const states = [
    'Delhi',
    'Maharashtra',
    'Karnataka',
    'Tamil Nadu',
    'Kerala',
    'Telangana',
    'Gujarat',
    'Rajasthan'
  ];

  const features = [
    {
      title: 'State-level Authentication',
      description: 'Official authentication from state Home Department'
    },
    {
      title: 'Fast Processing',
      description: 'Quick processing within 3-5 working days'
    },
    {
      title: 'Pan India Service',
      description: 'Services across all major states'
    },
    {
      title: 'Document Security',
      description: 'Secure handling of sensitive documents'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Home Department Attestation Services in India | Document Authentication | WorkingBharat.com</title>
        <meta name="description" content="Professional Home Department attestation services for marriage certificates, birth certificates, and other personal documents. Fast processing across all Indian states." />
        <meta name="keywords" content="home department attestation, marriage certificate attestation, birth certificate attestation, document attestation, state attestation" />
        <link rel="canonical" href="https://workingbharat.com/services/home-department" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Home Department Attestation Services</h1>
              <p className="text-xl text-gray-200">Professional state-level document attestation services across India</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Home Department Attestation</h2>
                  <p className="text-gray-700 mb-4">
                    Home Department attestation is a crucial process for authenticating personal documents at the state level. 
                    This attestation is often required for various purposes including marriage registration, visa applications, 
                    and legal proceedings.
                  </p>
                  <p className="text-gray-700">
                    At AR International, we provide comprehensive Home Department attestation services across all major 
                    states in India, ensuring your documents meet all legal requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
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
                        <FileCheck className="text-purple-600 mr-2" size={18} />
                        <span className="text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <span className="text-purple-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Submission</h4>
                        <p className="text-gray-600">Submit your original documents with necessary copies</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <span className="text-purple-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Verification</h4>
                        <p className="text-gray-600">Document verification by state authorities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <span className="text-purple-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Attestation</h4>
                        <p className="text-gray-600">Official attestation by Home Department</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <span className="text-purple-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Delivery</h4>
                        <p className="text-gray-600">Secure delivery of attested documents</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">States We Cover</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {states.map((state, index) => (
                      <div key={index} className="flex items-center">
                        <Globe className="text-purple-600 mr-2" size={18} />
                        <span className="text-gray-700">{state}</span>
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

export default HomeDepartment;