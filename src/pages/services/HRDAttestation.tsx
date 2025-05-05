import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, Clock, Globe, Award, Shield, Users } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const HRDAttestation: React.FC = () => {
  const documents = [
    'Degree Certificates',
    'Diploma Certificates',
    'Engineering Certificates',
    'Medical Certificates',
    'Nursing Certificates',
    'School Certificates',
    'Transfer Certificates',
    'Experience Certificates'
  ];

  const states = [
    'Delhi HRD',
    'Maharashtra HRD',
    'Kerala HRD',
    'Karnataka HRD',
    'Tamil Nadu HRD',
    'Telangana HRD',
    'Andhra Pradesh HRD',
    'Gujarat HRD'
  ];

  const features = [
    {
      title: 'Fast Processing',
      description: 'Get your HRD attestation completed within 4-6 working days'
    },
    {
      title: 'Pan India Service',
      description: 'HRD attestation services across all major states in India'
    },
    {
      title: 'Document Security',
      description: 'Safe handling and secure processing of your valuable documents'
    },
    {
      title: 'Expert Assistance',
      description: 'Guidance from experienced documentation professionals'
    }
  ];

  return (
    <>
      <Helmet>
        <title>HRD Attestation Services in India | State HRD Authentication | WorkingBharat.com</title>
        <meta name="description" content="Professional HRD attestation services for educational certificates across all Indian states. MEA licensed attestation with fast processing for abroad studies and jobs." />
        <meta name="keywords" content="hrd attestation, state hrd attestation, educational certificate attestation, degree certificate attestation, diploma attestation, medical certificate attestation, nursing certificate attestation" />
        <link rel="canonical" href="https://workingbharat.com/services/hrd-attestation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">HRD Attestation Services in India</h1>
              <p className="text-xl text-gray-200">Professional State HRD attestation services for educational certificates with fast processing</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">What is HRD Attestation?</h2>
                  <p className="text-gray-700 mb-4">
                    HRD (Human Resource Development) attestation is a crucial process of authenticating educational documents 
                    from the state's education department. This attestation is mandatory for using your educational documents 
                    abroad for higher studies, employment, or immigration purposes.
                  </p>
                  <p className="text-gray-700">
                    At AR International, we provide comprehensive HRD attestation services across all major states in India, 
                    ensuring your documents meet international requirements and standards.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
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
                        <FileCheck className="text-blue-600 mr-2" size={18} />
                        <span className="text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">HRD Attestation Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <span className="text-blue-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Submission</h4>
                        <p className="text-gray-600">Submit your original educational documents along with copies</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <span className="text-blue-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Verification</h4>
                        <p className="text-gray-600">Verification of documents from respective educational institutions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <span className="text-blue-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">HRD Department Processing</h4>
                        <p className="text-gray-600">Processing and attestation by state HRD department</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <span className="text-blue-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Delivery</h4>
                        <p className="text-gray-600">Safe delivery of attested documents</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">States We Cover</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {states.map((state, index) => (
                      <div key={index} className="flex items-center">
                        <Globe className="text-blue-600 mr-2" size={18} />
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

export default HRDAttestation;