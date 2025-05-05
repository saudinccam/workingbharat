import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, FileCheck, Clock, Globe } from 'lucide-react';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const WorkingProfessionals: React.FC = () => {
  const services = [
    {
      title: 'Employment Document Attestation',
      description: 'Complete attestation service for employment documents required for work visas and permits.',
      processingTime: '5-7 working days',
      features: [
        'Experience Certificate Attestation',
        'Employment Contract Attestation',
        'Salary Certificate Attestation',
        'Professional Qualification Attestation'
      ]
    },
    {
      title: 'PCC Apostille',
      description: 'Police Clearance Certificate apostille service for international employment.',
      processingTime: '3-5 working days',
      features: [
        'MEA Apostille',
        'Embassy Attestation',
        'Document Translation',
        'Express Processing'
      ]
    },
    {
      title: 'Visa Document Processing',
      description: 'Complete documentation assistance for work visa applications.',
      processingTime: '7-10 working days',
      features: [
        'Document Verification',
        'Embassy Submission',
        'Visa Application Support',
        'Status Tracking'
      ]
    }
  ];

  const countries = [
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
    'Singapore', 'Malaysia', 'Canada', 'Australia'
  ];

  return (
    <>
      <Helmet>
        <title>Working Professional Documentation Services | WorkingBharat.com</title>
        <meta name="description" content="Complete documentation services for working professionals including employment document attestation, PCC apostille, and visa processing services." />
        <meta name="keywords" content="employment documents, work visa, PCC apostille, document attestation, work abroad, professional documentation" />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Documentation for Working Professionals</h1>
              <p className="text-xl text-gray-200">Complete documentation solutions for professionals planning to work abroad</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Professional Documentation Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Clock size={16} className="text-purple-600 mr-2" />
                        Processing Time: {service.processingTime}
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <FileCheck size={16} className="text-purple-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Popular Work Destinations</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {countries.map((country, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <Globe size={16} className="text-purple-600" />
                        <span>{country}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Required Documents</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Educational Certificates
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Experience Certificates
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Police Clearance Certificate
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Passport Copy
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Employment Contract
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Professional Qualifications
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

export default WorkingProfessionals;