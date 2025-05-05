import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, Clock, Globe, Languages } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const TechnicalTranslation: React.FC = () => {
  const documents = [
    'Engineering Documents',
    'Technical Manuals',
    'Product Specifications',
    'Research Papers',
    'Patents & IPR Documents',
    'Technical Drawings',
    'Safety Guidelines',
    'Technical Certificates'
  ];

  const languages = [
    'Arabic',
    'English',
    'German',
    'French',
    'Japanese',
    'Chinese',
    'Korean',
    'Russian'
  ];

  const features = [
    {
      title: 'Technical Expertise',
      description: 'Translations by subject matter experts in various technical fields'
    },
    {
      title: 'Certified Translation',
      description: 'Official translations accepted by international organizations'
    },
    {
      title: 'Multiple Industries',
      description: 'Coverage across engineering, IT, manufacturing, and more'
    },
    {
      title: 'Quality Assurance',
      description: 'Multi-step review process for technical accuracy'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Technical Translation Services in India | Engineering & Technical Document Translation | WorkingBharat.com</title>
        <meta name="description" content="Professional technical document translation services in India. Expert translations for engineering documents, technical manuals, patents & specifications in multiple languages." />
        <meta name="keywords" content="technical translation, engineering document translation, technical manual translation, patent translation, technical specifications translation" />
        <link rel="canonical" href="https://workingbharat.com/services/technical-translation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Technical Translation Services</h1>
              <p className="text-xl text-gray-200">Expert technical document translation services by industry specialists</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Technical Translation Services</h2>
                  <p className="text-gray-700 mb-4">
                    Our technical translation service provides accurate and precise translations of technical documents, 
                    ensuring that complex technical terminology and concepts are correctly conveyed in the target language.
                  </p>
                  <p className="text-gray-700">
                    With our team of specialized technical translators, we ensure that your technical documentation 
                    maintains its accuracy and clarity across different languages and cultures.
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Documents We Translate</h2>
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Translation Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <span className="text-blue-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Technical Analysis</h4>
                        <p className="text-gray-600">Initial review and understanding of technical content</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <span className="text-blue-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Expert Translation</h4>
                        <p className="text-gray-600">Translation by technical subject matter experts</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <span className="text-blue-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Technical Review</h4>
                        <p className="text-gray-600">Quality check by industry specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <span className="text-blue-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Final Verification</h4>
                        <p className="text-gray-600">Final review and certification</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Languages Available</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {languages.map((language, index) => (
                      <div key={index} className="flex items-center">
                        <Languages className="text-blue-600 mr-2" size={18} />
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

export default TechnicalTranslation;