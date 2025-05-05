import React from 'react';
import { Phone, Mail, MapPin, Globe, MessageSquare, Facebook, Star } from 'lucide-react';
import QuickEnquiryForm from '../components/QuickEnquiryForm';

const ContactPage: React.FC = () => {
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
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0 bg-navy-900 opacity-90"></div>
        <div className="relative pt-32 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Contact AR International</h1>
            <p className="text-xl text-gray-200">Get in touch with India's most trusted document processing company</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
              <QuickEnquiryForm />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Social Proof</h3>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-navy-700 hover:text-navy-900"
                  >
                    <Facebook className="text-blue-600" />
                    <span>1,500+ Facebook Likes</span>
                  </a>
                  <a 
                    href="https://g.page/r/Cbl9FPRKDhPeEBM/review" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-navy-700 hover:text-navy-900"
                  >
                    <Star className="text-yellow-400" />
                    <span>4.9/5 from 75+ Google Reviews</span>
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+919560731774" 
                    className="flex items-center space-x-2 text-navy-700 hover:text-navy-900"
                  >
                    <Phone className="text-saffron" />
                    <span>+91-9560731774</span>
                  </a>
                  <div className="flex items-center space-x-2 text-navy-700">
                    <MessageSquare className="text-green-600" />
                    <div className="flex flex-col">
                      <a href="https://wa.me/919220161774" className="hover:text-navy-900">+91-9220161774</a>
                      <a href="https://wa.me/919211461774" className="hover:text-navy-900">+91-9211461774</a>
                    </div>
                  </div>
                  <a 
                    href="mailto:contact@thearinternationals.com" 
                    className="flex items-center space-x-2 text-navy-700 hover:text-navy-900"
                  >
                    <Mail className="text-saffron" />
                    <span>contact@thearinternationals.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Branches</h3>
              <div className="space-y-4">
                {branches.map((branch, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-medium text-navy-900">{branch.city}</h4>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-navy-900 mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-navy-900">Weekdays</h4>
                <p className="text-gray-600">Monday to Saturday: 9:30 AM - 6:30 PM</p>
              </div>
              <div>
                <h4 className="font-medium text-navy-900">Weekend</h4>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;