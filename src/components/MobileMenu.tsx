import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, GraduationCap, Briefcase, Heart, Building2, FileCheck, Languages, Stamp, Home } from 'lucide-react';

interface Category {
  title: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
  path: string;
}

const userCategories: Category[] = [
  {
    title: 'Healthcare Professionals',
    icon: <Users className="text-blue-600" />,
    description: 'Complete documentation for medical professionals',
    services: [
      'DataFlow Verification',
      'HRD Attestation',
      'HAAD/DHA/MOH Licensing',
      'Prometric Exam Registration',
      'Medical License Translations'
    ],
    path: '/healthcare-professionals'
  },
  {
    title: 'Students',
    icon: <GraduationCap className="text-green-600" />,
    description: 'Document services for studying abroad',
    services: [
      'Apostille Services',
      'Educational Certificate Attestation',
      'Certified Translations',
      'WES Evaluation Documents'
    ],
    path: '/students'
  },
  {
    title: 'Working Professionals',
    icon: <Briefcase className="text-purple-600" />,
    description: 'Employment document processing',
    services: [
      'PCC Apostille',
      'Experience Certificate Attestation',
      'Degree Certificate Attestation',
      'Employment Visa Documents'
    ],
    path: '/working-professionals'
  },
  {
    title: 'Families',
    icon: <Heart className="text-red-600" />,
    description: 'Family documentation services',
    services: [
      'Marriage Certificate Attestation',
      'Birth Certificate Apostille',
      'Power of Attorney',
      'Dependent Visa Processing'
    ],
    path: '/families'
  },
  {
    title: 'Businesses & Legal',
    icon: <Building2 className="text-navy-600" />,
    description: 'Corporate document services',
    services: [
      'Commercial Documents Attestation',
      'Board Resolution Authentication',
      'Legal Document Translation',
      'Contract Apostille'
    ],
    path: '/businesses-legal'
  }
];

const serviceCategories = [
  {
    title: 'Document Attestation',
    icon: <FileCheck className="text-saffron" />,
    services: [
      { name: 'Embassy Attestation', path: '/embassy-attestation' },
      { name: 'HRD Attestation', path: '/hrd-attestation' },
      { name: 'MOFA Attestation', path: '/mofa-attestation' },
      { name: 'Home Department', path: '/home-department' }
    ]
  },
  {
    title: 'Translation Services',
    icon: <Languages className="text-green-600" />,
    services: [
      { name: 'Certified Translation', path: '/certified-translation' },
      { name: 'Legal Translation', path: '/legal-translation' },
      { name: 'Technical Translation', path: '/technical-translation' },
      { name: 'Medical Translation', path: '/medical-translation' }
    ]
  },
  {
    title: 'Apostille Services',
    icon: <Stamp className="text-blue-600" />,
    services: [
      { name: 'Apostille Services', path: '/apostille-services' },
      { name: 'Educational Documents', path: '/educational-documents' },
      { name: 'Legal Documents', path: '/legal-documents' }
    ]
  }
];

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'usecase' | 'services'>('usecase');

  return (
    <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full pb-[140px]">
        <div className="border-b border-gray-100 p-4">
          <div className="flex space-x-4">
            <button
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'usecase' ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setActiveTab('usecase')}
            >
              Who We Help
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'services' ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setActiveTab('services')}
            >
              Our Services
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'usecase' ? (
            <div className="p-4 space-y-4">
              {userCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                >
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-3">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-navy-900">{category.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                      <div className="text-xs text-gray-500">
                        {category.services.slice(0, 2).join(' • ')}
                        {category.services.length > 2 && ' • ...'}
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 space-y-6">
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center space-x-2 mb-3">
                    {category.icon}
                    <h3 className="font-medium text-navy-900">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.path}
                        className="block bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                        onClick={onClose}
                      >
                        <span className="text-sm text-gray-700">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 p-4 bg-white">
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/contact"
              className="bg-saffron text-white text-center py-3 rounded-lg font-medium"
              onClick={onClose}
            >
              Contact Us
            </Link>
            <button
              onClick={onClose}
              className="bg-gray-100 text-gray-700 py-3 rounded-lg font-medium"
            >
              Close Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;