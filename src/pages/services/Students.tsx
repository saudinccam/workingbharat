import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, FileCheck, Clock, Globe } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const Students: React.FC = () => {
  const services = [
    {
      title: 'Apostille Services',
      description: 'Document authentication for educational certificates through MEA for acceptance in Hague Convention countries.',
      processingTime: '3-5 working days',
      features: [
        'Degree Certificate Apostille',
        'Mark Sheet Apostille',
        'Diploma Certificate Apostille',
        'Express Processing Available'
      ]
    },
    {
      title: 'Educational Certificate Attestation',
      description: 'Complete attestation service for academic documents from various authorities.',
      processingTime: '5-7 working days',
      features: [
        'HRD Attestation',
        'MEA Attestation',
        'Embassy Attestation',
        'Sub-attestation Services'
      ]
    },
    {
      title: 'Certified Translations',
      description: 'Professional translation services for academic documents in multiple languages.',
      processingTime: '2-3 working days',
      features: [
        'Degree Certificate Translation',
        'Mark Sheet Translation',
        'Course Syllabus Translation',
        'Notarized Translations'
      ]
    }
  ];

  const countries = [
    'USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 
    'Ireland', 'New Zealand', 'Netherlands', 'Sweden'
  ];

  return (
    <>
      <Helmet>
        <title>Student Documentation Services for Study Abroad | WorkingBharat.com</title>
        <meta name="description" content="Complete documentation services for students planning to study abroad including apostille, attestation, and certified translations of educational documents." />
        <meta name="keywords" content="student documentation, study abroad, apostille services, educational certificate attestation, document translation, WES evaluation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Documentation Services for Students</h1>
              <p className="text-xl text-gray-200">Complete documentation solutions for Indian students planning to study abroad</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Student Documentation Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Clock size={16} className="text-green-600 mr-2" />
                        Processing Time: {service.processingTime}
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <FileCheck size={16} className="text-green-600 mr-2" />
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
                        <Globe size={16} className="text-green-600" />
                        <span>{country}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Required Documents</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Degree/Diploma Certificates
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Mark Sheets (All Semesters)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Provisional Certificate
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Course Completion Certificate
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Passport Copy
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Admission Letter (if available)
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

export default Students;