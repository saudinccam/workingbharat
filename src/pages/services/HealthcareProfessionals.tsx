import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, FileCheck, Award, Clock } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const HealthcareProfessionals: React.FC = () => {
  const services = [
    {
      title: 'DataFlow Verification',
      description: 'Primary source verification for healthcare professionals working in GCC countries.',
      processingTime: '15-20 working days',
      features: [
        'Educational Qualification Verification',
        'Professional Experience Verification',
        'Professional License Verification',
        'Express Processing Available'
      ]
    },
    {
      title: 'HRD Attestation',
      description: 'Document attestation from state HRD departments for medical professionals.',
      processingTime: '4-6 working days',
      features: [
        'Medical Degree Attestation',
        'Registration Certificate Attestation',
        'Experience Certificate Attestation',
        'Good Standing Certificate Attestation'
      ]
    },
    {
      title: 'HAAD/DHA/MOH Licensing',
      description: 'Licensing assistance for healthcare professionals in UAE.',
      processingTime: '7-10 working days',
      features: [
        'Document Preparation',
        'Application Assistance',
        'License Processing',
        'Status Tracking'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare Professional Documentation Services | WorkingBharat.com</title>
        <meta name="description" content="Complete documentation services for healthcare professionals including DataFlow verification, HRD attestation, and medical licensing for GCC countries." />
        <meta name="keywords" content="dataflow verification, HRD attestation, medical license, healthcare professionals, doctors abroad, nurses abroad, medical documentation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-900 to-navy-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Documentation Services for Healthcare Professionals</h1>
              <p className="text-xl text-gray-200">Complete documentation solutions for medical professionals planning to work in GCC countries</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Why Choose Our Healthcare Documentation Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Clock size={16} className="text-blue-600 mr-2" />
                        Processing Time: {service.processingTime}
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <FileCheck size={16} className="text-blue-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Required Documents</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Medical Degree Certificate
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Registration Certificate
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Experience Certificates
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Good Standing Certificate
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Passport Copy
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Updated CV/Resume
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
                <h3 className="text-xl font-semibold text-navy-900 mb-6">Get Free Consultation</h3>
                <QuickEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthcareProfessionals;