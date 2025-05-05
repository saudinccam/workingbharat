import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, Clock, Globe, Building2 } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const LegalDocuments: React.FC = () => {
  const documents = [
    'Power of Attorney',
    'Affidavits',
    'Court Documents',
    'Legal Contracts',
    'Company Registration',
    'Board Resolutions',
    'Legal Agreements',
    'Notarized Documents'
  ];

  const countries = [
    'USA',
    'UK',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'UAE',
    'Saudi Arabia'
  ];

  const features = [
    {
      title: 'Complete Processing',
      description: 'End-to-end attestation including notarization, apostille, and embassy attestation'
    },
    {
      title: 'Legal Expertise',
      description: 'Handled by legal documentation specialists'
    },
    {
      title: 'Multiple Countries',
      description: 'Services for all major countries worldwide'
    },
    {
      title: 'Document Security',
      description: 'Secure handling of confidential legal documents'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Legal Document Attestation Services | Document Authentication | WorkingBharat.com</title>
        <meta name="description" content="Professional legal document attestation services for international use. Expert handling of power of attorney, affidavits, contracts & legal agreements." />
        <meta name="keywords" content="legal document attestation, power of attorney attestation, affidavit attestation, contract attestation, legal agreement attestation" />
        <link rel="canonical" href="https://workingbharat.com/services/legal-documents" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Legal Document Attestation Services</h1>
              <p className="text-xl text-gray-200">Professional attestation services for all types of legal documents</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Legal Document Attestation</h2>
                  <p className="text-gray-700 mb-4">
                    Our legal document attestation service ensures your legal documents are properly authenticated for 
                    international use. We handle all types of legal documents with utmost confidentiality and precision.
                  </p>
                  <p className="text-gray-700">
                    With our team of legal documentation experts, we ensure that your documents meet all requirements 
                    for international acceptance and legal validity.
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Review</h4>
                        <p className="text-gray-600">Initial verification and requirement analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Notarization</h4>
                        <p className="text-gray-600">Document notarization if required</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Attestation</h4>
                        <p className="text-gray-600">MEA/Embassy attestation process</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-navy-100 p-2 rounded-full mr-3">
                        <span className="text-navy-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Delivery</h4>
                        <p className="text-gray-600">Secure delivery of attested documents</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Countries We Cover</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {countries.map((country, index) => (
                      <div key={index} className="flex items-center">
                        <Globe className="text-navy-600 mr-2" size={18} />
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

export default LegalDocuments;