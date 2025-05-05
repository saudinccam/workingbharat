import React from 'react';
import { Phone, Mail, MapPin, Globe, MessageSquare } from 'lucide-react';
import QuickEnquiryForm from './QuickEnquiryForm';

const ContactSection: React.FC = () => {
  const branches = [
    {
      city: 'New Delhi (Head Office)',
      address: '1st & 2nd Floor, 30 Kilokri, Ring Road, New Delhi - 110014'
    },
    {
      city: 'Mumbai',
      address: 'Keytech Park, 101 A-Wing, Opp. Oshiwara Furniture Market, SV Road, Jogeshwari West, Mumbai - 400102'
    },
    {
      city: 'Thrissur',
      address: 'Opp. Lamiya Silks, P.O. Nattika, Thriprayar, Thrissur, Kerala – 680566'
    },
    {
      city: 'Bhopal',
      address: '21, SBI Colony, Zone-II, MP Nagar, Bhopal, MP – 462011'
    },
    {
      city: 'Surat',
      address: 'Shreeji Arcade, Anand Mahal Road, Above Reliance Digital, Opp. Mahan Terrace, Adajan, Surat – 395009'
    },
    {
      city: 'Aligarh',
      address: 'B3, Regency Plaza, Medical Road, Opp. PNM Medical College, Dodhpur, Aligarh, UP'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-3">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our document experts for fast assistance with your needs.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 bg-gray-50 p-6 md:p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-saffron bg-opacity-10 p-3 rounded-lg mr-4">
                  <Phone className="text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">
                    <a href="tel:+919560731774" className="hover:text-navy-700">+91-9560731774</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-saffron bg-opacity-10 p-3 rounded-lg mr-4">
                  <MessageSquare className="text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">WhatsApp</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <a href="https://wa.me/919220161774" target="_blank" rel="noopener noreferrer" className="hover:text-navy-700">
                        +91-9220161774
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="https://wa.me/919211461774" target="_blank" rel="noopener noreferrer" className="hover:text-navy-700">
                        +91-9211461774
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-saffron bg-opacity-10 p-3 rounded-lg mr-4">
                  <Mail className="text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:contact@thearinternationals.com" className="hover:text-navy-700">
                      contact@thearinternationals.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-navy-900 mb-4">Our Branches</h4>
              <div className="space-y-4">
                {branches.map((branch, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin className="text-saffron mt-1 mr-2 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-navy-900">{branch.city}</p>
                      <p className="text-gray-600 text-sm">{branch.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-navy-900 mb-2">Business Hours</h4>
              <ul className="text-gray-600">
                <li>Monday to Saturday: 9:30 AM - 6:30 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-md">
            <QuickEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;