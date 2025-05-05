import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, ShieldCheck, Clock, MapPin, Building2, Globe, Star, Facebook } from 'lucide-react';

const AboutPage: React.FC = () => {
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
    <>
      <Helmet>
        <title>About AR International | WorkingBharat.com</title>
        <meta name="description" content="Learn about AR International - India's trusted partner for document attestation, apostille, and translation services since 1999." />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">About AR International</h1>
              <p className="text-xl text-gray-200">Your trusted partner for global documentation since 1999</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  AR International (Group of Companies) has been a pioneer in document attestation and apostille services since 1999. 
                  With over two decades of experience, we've helped more than 100,000 Indians achieve their dreams of working, 
                  studying, and settling abroad.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href="https://g.co/kgs/sX4e5DP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <Star className="text-yellow-400 fill-yellow-400 mr-3" size={24} />
                    <div>
                      <div className="font-semibold text-navy-900">4.9/5 Rating</div>
                      <div className="text-sm text-gray-600">75+ Google Reviews</div>
                    </div>
                  </a>

                  <a 
                    href="https://www.facebook.com/profile.php?id=61571540566820" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <Facebook className="text-blue-600 mr-3" size={24} />
                    <div>
                      <div className="font-semibold text-navy-900">1,500+ Likes</div>
                      <div className="text-sm text-gray-600">Facebook Community</div>
                    </div>
                  </a>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-saffron bg-opacity-10 p-2 rounded-lg mr-4">
                      <Award className="text-saffron" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Government Approvals</h3>
                      <p className="text-gray-600 text-sm">MEA License: B-0056/DEL/PER/1000+/3/5275/99</p>
                      <p className="text-gray-600 text-sm">Regd. No.: 2013001967 (NCT Delhi)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-saffron bg-opacity-10 p-2 rounded-lg mr-4">
                      <ShieldCheck className="text-saffron" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Official Partner</h3>
                      <p className="text-gray-600 text-sm">Royal Embassy of Saudi Arabia, Kuwait, Libya & Iraq</p>
                      <p className="text-gray-600 text-sm">DataFlow Group</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-saffron bg-opacity-10 p-2 rounded-lg mr-4">
                      <Building2 className="text-saffron" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Our Brands</h3>
                      <p className="text-gray-600 text-sm">AR International, ApostilleAttest.com, AttestApostille.com, AR MultiLingual Translators Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AR International Office" 
                  className="rounded-lg shadow-lg mb-8"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
                  <p className="text-saffron font-bold text-xl">Since 1999</p>
                  <p className="text-gray-700">Trusted by 1 Lakh+ Indians</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Pan India Presence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {branches.map((branch, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-navy-900">{branch.city}</h4>
                      <p className="text-gray-600 text-sm">{branch.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;