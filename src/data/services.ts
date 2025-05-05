import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Embassy Attestation',
    description: 'Professional embassy attestation services for all types of documents. We handle attestation from various embassies for work permits, business setup, and immigration purposes.',
    icon: 'building',
    features: [
      'Embassy attestation for all documents',
      'HRD attestation',
      'MEA attestation',
      'Chamber of Commerce attestation',
      'Sub-attestation services'
    ],
    documents: [
      'Educational Certificates',
      'Commercial Documents',
      'Personal Documents',
      'Employment Documents',
      'Medical Certificates'
    ],
    countries: [
      'UAE', 'Qatar', 'Kuwait', 'Saudi Arabia', 'Bahrain', 'Oman', 
      'Libya', 'Malaysia', 'China', 'Thailand', 'Vietnam'
    ],
    processingTime: '5-7 working days'
  },
  {
    id: 2,
    title: 'HRD Attestation',
    description: 'Expert Human Resource Development (HRD) attestation services for educational documents. We handle attestation from state HRD departments across India.',
    icon: 'file-check',
    features: [
      'State HRD attestation',
      'Document verification',
      'Express processing',
      'Door pickup service',
      'Online tracking'
    ],
    documents: [
      'Degree Certificates',
      'Diploma Certificates',
      'School Certificates',
      'Mark Sheets',
      'Course Certificates'
    ],
    states: [
      'Uttar Pradesh', 'Tamil Nadu', 'Kerala', 'Maharashtra', 
      'Karnataka', 'Telangana', 'Andhra Pradesh', 'Haryana'
    ],
    processingTime: '4-6 working days'
  },
  {
    id: 3,
    title: 'MOFA Attestation',
    description: 'Specialized Ministry of Foreign Affairs (MOFA) attestation services for Gulf countries. We ensure your documents meet all requirements for acceptance in GCC nations.',
    icon: 'file-check',
    features: [
      'MOFA attestation for all documents',
      'Pre-attestation verification',
      'Document tracking service',
      'Express processing available',
      'Door-to-door service'
    ],
    documents: [
      'Educational Certificates',
      'Experience Certificates',
      'Marriage Certificates',
      'Birth Certificates',
      'Medical Reports'
    ],
    countries: ['UAE', 'Kuwait', 'Qatar', 'Saudi Arabia', 'Bahrain', 'Oman'],
    processingTime: '7-10 working days'
  },
  {
    id: 4,
    title: 'Home Department Attestation',
    description: 'Professional Home Department attestation services for various documents requiring state-level authentication.',
    icon: 'home',
    features: [
      'State-level attestation',
      'Document verification',
      'Express processing',
      'Tracking service',
      'Doorstep delivery'
    ],
    documents: [
      'Marriage Certificates',
      'Birth Certificates',
      'Address Proof',
      'Police Clearance Certificates',
      'Residential Documents'
    ],
    states: [
      'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu',
      'Kerala', 'Telangana', 'Gujarat', 'Rajasthan'
    ],
    processingTime: '3-5 working days'
  }
];