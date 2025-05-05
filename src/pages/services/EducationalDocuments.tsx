import React from 'react';
import { Helmet } from 'react-helmet-async';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const EducationalDocuments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Educational Documents Attestation Services | Your Company</title>
        <meta name="description" content="Professional attestation services for educational documents including degrees, certificates, and transcripts. Fast and reliable service." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Educational Documents Attestation</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                We provide comprehensive attestation services for all types of educational documents, ensuring they meet the requirements for use in international contexts.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Documents We Handle</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>University Degrees and Diplomas</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>Academic Transcripts</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>School Certificates</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>Professional Certifications</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Process</h2>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-sm mr-3">1</span>
                    <span>Document verification and eligibility check</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-sm mr-3">2</span>
                    <span>HRD/State level attestation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-sm mr-3">3</span>
                    <span>MEA/MOFA attestation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-sm mr-3">4</span>
                    <span>Embassy attestation if required</span>
                  </li>
                </ol>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Fast Processing</h3>
                  <p className="text-gray-600">Quick turnaround time with express service available</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">Professional support throughout the process</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Secure Handling</h3>
                  <p className="text-gray-600">Your documents are treated with utmost care</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">Transparent fees with no hidden charges</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <QuickEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalDocuments;