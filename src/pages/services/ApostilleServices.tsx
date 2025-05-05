import React from 'react';
import { Helmet } from 'react-helmet-async';
import QuickEnquiryForm from '../../components/QuickEnquiryForm';

const ApostilleServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Apostille Services - Document Attestation & Translation</title>
        <meta name="description" content="Professional apostille services for your documents. Fast, reliable, and secure document authentication services." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Apostille Services</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive apostille services ensure your documents are properly authenticated for international use. We handle the entire process with precision and care.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Apostille Services Include:</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>Document verification and preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>Apostille certification for all eligible documents</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>Express processing options available</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>International document legalization</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Choose Our Apostille Services?</h2>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Fast Processing</h3>
                      <p className="mt-2 text-gray-600">Quick turnaround times to meet your deadlines</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Secure Handling</h3>
                      <p className="mt-2 text-gray-600">Your documents are handled with utmost security and confidentiality</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <QuickEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApostilleServices;