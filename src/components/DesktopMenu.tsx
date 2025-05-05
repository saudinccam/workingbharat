import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, Briefcase, Heart, Building2, FileCheck, Languages, Stamp, Home } from 'lucide-react';

const DesktopMenu: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl border-t border-gray-100 animate-slide-up">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Who We Help</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/healthcare-professionals" className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-blue-50 p-2 rounded-lg mr-3">
                  <Users className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 group-hover:text-saffron transition-colors">Healthcare Professionals</h4>
                  <p className="text-sm text-gray-600">DataFlow, HRD Attestation, Medical Licensing</p>
                </div>
              </Link>

              <Link to="/students" className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-green-50 p-2 rounded-lg mr-3">
                  <GraduationCap className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 group-hover:text-saffron transition-colors">Students</h4>
                  <p className="text-sm text-gray-600">Apostille, Translations, WES Evaluation</p>
                </div>
              </Link>

              <Link to="/working-professionals" className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-purple-50 p-2 rounded-lg mr-3">
                  <Briefcase className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 group-hover:text-saffron transition-colors">Working Professionals</h4>
                  <p className="text-sm text-gray-600">Employment Documents, Visa Processing</p>
                </div>
              </Link>

              <Link to="/families" className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-red-50 p-2 rounded-lg mr-3">
                  <Heart className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 group-hover:text-saffron transition-colors">Families</h4>
                  <p className="text-sm text-gray-600">Marriage, Birth Certificates, Dependent Visas</p>
                </div>
              </Link>

              <Link to="/businesses-legal" className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-navy-50 p-2 rounded-lg mr-3">
                  <Building2 className="text-navy-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 group-hover:text-saffron transition-colors">Businesses & Legal</h4>
                  <p className="text-sm text-gray-600">Commercial Documents, Legal Translations</p>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Our Services</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <FileCheck className="text-saffron" size={20} />
                  <h4 className="font-medium text-navy-900">Document Attestation</h4>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/embassy-attestation" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Embassy Attestation
                    </Link>
                  </li>
                  <li>
                    <Link to="/hrd-attestation" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      HRD Attestation
                    </Link>
                  </li>
                  <li>
                    <Link to="/mofa-attestation" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      MOFA Attestation
                    </Link>
                  </li>
                  <li>
                    <Link to="/home-department" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Home Department
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Languages className="text-green-600" size={20} />
                  <h4 className="font-medium text-navy-900">Translation Services</h4>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/certified-translation" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Certified Translation
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal-translation" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Legal Translation
                    </Link>
                  </li>
                  <li>
                    <Link to="/technical-translation" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Technical Translation
                    </Link>
                  </li>
                  <li>
                    <Link to="/medical-translation" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Medical Translation
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Stamp className="text-blue-600" size={20} />
                  <h4 className="font-medium text-navy-900">Apostille Services</h4>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/apostille-services" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Apostille Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/educational-documents" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Educational Documents
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal-documents" className="text-sm text-gray-600 hover:text-saffron transition-colors block py-1">
                      Legal Documents
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;