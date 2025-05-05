import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, Clock, Globe, Languages } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const LegalTranslation: React.FC = () => {
  const documents = [
    'Court Documents',
    'Legal Contracts',
    'Power of Attorney',
    'Affidavits',
    'Company Registration',
    'Legal Certificates',
    'Judgments & Orders',
    'Legal Agreements'
  ];

  const languages = [
    'Arabic',
    'English',
    'French',
    'German',
    'Spanish',
    'Chinese',
    'Japanese',
    'Russian'
  ];

  const features = [
    {
      title: 'Certified Translation',
      description: 'Official translations accepted by courts and authorities'
    },
    {
      title: 'Legal Expertise',
      description: 'Translations by legal language specialists'
    },
    {
      title: 'Multiple Languages',
      description: 'Translation services in major world languages'
    },
    {
      title: 'Fast Processing',
      description: 'Quick turnaround for urgent requirements'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Legal Translation Services in India | Certified Legal Document Translation | WorkingBharat.com</title>
        <meta name="description" content="Professional legal document translation services in India. Certified translations for courts, legal documents, contracts & agreements in multiple languages." />
        <meta name="keywords" content="legal translation, legal document translation, certified translation, court document translation, contract translation, legal agreement translation" />
        <link rel="canonical" href="https://workingbharat.com/services/legal-translation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Legal Translation Services</h1>
              <p className="text-xl text-gray-200">Professional legal document translation services by certified translators</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Legal Translation Services</h2>
                  <p className="text-gray-700 mb-4">
                    Our legal translation service provides accurate and certified translations of legal documents, ensuring they 
                    maintain their legal validity while being perfectly understood in the target language.
                  </p>
                  <p className="text-gray-700">
                    With our team of certified legal translators, we ensure that complex legal terminology and concepts are 
                    accurately translated while maintaining the document's legal integrity.
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Documents We Translate</h2>
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Translation Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <span className="text-purple-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Document Analysis</h4>
                        <p className="text-gray-600">Initial review and understanding of legal context</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <span className="text-purple-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Translation</h4>
                        <p className="text-gray-600">Translation by legal language experts</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <span className="text-purple-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Review & Proofreading</h4>
                        <p className="text-gray-600">Quality check by second translator</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <span className="text-purple-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Certification</h4>
                        <p className="text-gray-600">Official certification of translated documents</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Languages Available</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {languages.map((language, index) => (
                      <div key={index} className="flex items-center">
                        <Languages className="text-purple-600 mr-2" size={18} />
                        <span className="text-gray-700">{language}</span>
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

export default LegalTranslation;