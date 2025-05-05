import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileCheck, Clock, Globe, Languages } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const MedicalTranslation: React.FC = () => {
  const documents = [
    'Medical Reports',
    'Hospital Records',
    'Medical Certificates',
    'Prescriptions',
    'Clinical Trial Documents',
    'Medical Research Papers',
    'Healthcare Guidelines',
    'Patient Records'
  ];

  const languages = [
    'Arabic',
    'English',
    'German',
    'French',
    'Spanish',
    'Russian',
    'Chinese',
    'Japanese'
  ];

  const features = [
    {
      title: 'Medical Expertise',
      description: 'Translations by healthcare language specialists'
    },
    {
      title: 'Certified Translation',
      description: 'Official translations accepted by medical authorities'
    },
    {
      title: 'Multiple Languages',
      description: 'Translation services in major world languages'
    },
    {
      title: 'Fast Processing',
      description: 'Quick turnaround for urgent medical requirements'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Translation Services in India | Healthcare Document Translation | WorkingBharat.com</title>
        <meta name="description" content="Professional medical document translation services in India. Expert translations for medical reports, certificates, research papers & healthcare documents in multiple languages." />
        <meta name="keywords" content="medical translation, healthcare document translation, medical report translation, medical certificate translation, hospital record translation" />
        <link rel="canonical" href="https://workingbharat.com/services/medical-translation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Medical Translation Services</h1>
              <p className="text-xl text-gray-200">Professional medical document translation services by healthcare specialists</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Medical Translation Services</h2>
                  <p className="text-gray-700 mb-4">
                    Our medical translation service provides accurate and precise translations of medical documents, 
                    ensuring that complex medical terminology and healthcare information are correctly conveyed in 
                    the target language.
                  </p>
                  <p className="text-gray-700">
                    With our team of specialized medical translators, we ensure that your healthcare documentation 
                    maintains its accuracy and clarity while meeting international medical standards.
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Documents We Translate</h2>
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Translation Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <span className="text-green-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Medical Analysis</h4>
                        <p className="text-gray-600">Initial review and understanding of medical content</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <span className="text-green-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Expert Translation</h4>
                        <p className="text-gray-600">Translation by medical language specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <span className="text-green-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Medical Review</h4>
                        <p className="text-gray-600">Quality check by healthcare professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <span className="text-green-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">Final Certification</h4>
                        <p className="text-gray-600">Final review and official certification</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Languages Available</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {languages.map((language, index) => (
                      <div key={index} className="flex items-center">
                        <Languages className="text-green-600 mr-2" size={18} />
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

export default MedicalTranslation;