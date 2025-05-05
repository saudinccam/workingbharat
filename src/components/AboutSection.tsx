import React from 'react';
import { Award, ShieldCheck, Clock, MapPin, Building2, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative max-w-md mx-auto md:mr-0 md:ml-auto">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AR International Office" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
                <p className="text-saffron font-bold text-xl">Since 1999</p>
                <p className="text-gray-700">Trusted by 1 Lakh+ Indians</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">About AR International</h2>
            <p className="text-gray-600 mb-6">
              AR International (Group of Companies) is India's trusted brand helping citizens go abroad for work, study, or family reunion since 1999. 
              With MEA licensing and a commitment to excellence, we've helped over 100,000 Indians achieve their global dreams.
            </p>
            
            <div className="space-y-4 mb-8">
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

            <div className="mb-8">
              <h3 className="font-semibold text-navy-900 mb-4">Our Pan India Presence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {branches.map((branch, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-navy-900">{branch.city}</h4>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-navy-900 mb-2">Our Websites:</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.attestapostille.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm bg-gray-100 text-navy-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  attestapostille.com
                </a>
                <a 
                  href="https://apostilleattest.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm bg-gray-100 text-navy-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  apostilleattest.com
                </a>
                <a 
                  href="https://thearinternationals.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm bg-gray-100 text-navy-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  thearinternationals.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;