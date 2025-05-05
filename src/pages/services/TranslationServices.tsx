import React from 'react';
import { Helmet } from 'react-helmet-async';

const TranslationServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Translation Services | Your Company Name</title>
        <meta name="description" content="Professional translation services for all your needs. We offer certified, legal, technical, and medical translation services." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Translation Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Professional translation services tailored to your specific needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Certified Translation</h2>
            <p className="text-gray-600">
              Official translations certified for legal and official use, accepted by government agencies and institutions worldwide.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Translation</h2>
            <p className="text-gray-600">
              Precise translation of legal documents, contracts, and court papers by specialized legal translators.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Translation</h2>
            <p className="text-gray-600">
              Accurate translation of technical documents, manuals, and specifications by subject matter experts.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medical Translation</h2>
            <p className="text-gray-600">
              Specialized translation of medical documents, research papers, and healthcare materials.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Translation Services?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Translators</h3>
              <p className="text-gray-600">
                Native speakers with subject matter expertise in their respective fields.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control process ensuring accurate and reliable translations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Quick delivery without compromising on quality and accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationServices;