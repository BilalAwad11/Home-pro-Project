import React from 'react';
import GuaranteeIcon from '../assets/fetured/Ic_Guarantee-Filled.png';
import QuotesIcon from '../assets/fetured/Ic_Quotes-Filled.png';
import LocalIcon from '../assets/fetured/Ic_Local-Filled.png'; // Double check if this path needs to be updated to an actual Local icon later!
import ServiceIcon from '../assets/fetured/Ic_24H-Filled.png';
import AppointmentsIcon from '../assets/fetured/Ic_Calendar-Filled.png'; // Double check if this path needs to be updated to an actual Calendar icon later!
import CommitmentIcon from '../assets/fetured/Ic_Commitment-Filled.png';

const featuresList = [
  {
    id: 1,
    title: 'Satisfaction Guarantee',
    desc: "you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results",
    iconSource: GuaranteeIcon
  },
  {
    id: 2,
    title: 'Free Quotes',
    desc: 'Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our service.',
    iconSource: QuotesIcon
  },
  {
    id: 3,
    title: 'Local Professionals',
    desc: 'Our services cover the Nationwide, US area, including urban, suburban, and rural locations for both long and short term maintenance',
    iconSource: LocalIcon
  },
  {
    id: 4,
    title: 'Fast 24-Hour Service',
    desc: 'need fast handling for repairs to drains, leaks or something else? Our experts are available anytime to help you solve the problem',
    iconSource: ServiceIcon
  },
  {
    id: 5,
    title: 'Flexible Appointments',
    desc: 'We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.',
    iconSource: AppointmentsIcon
  },
  {
    id: 6,
    title: '100% Commitment-Free',
    desc: 'You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease',
    iconSource: CommitmentIcon
  }
];

const Featured = () => {
  return (
    <section className="bg-white w-full py-16 px-4 xl:px-8">
      <div 
        className="w-full bg-[#111e42] text-white rounded-[40px] p-8 md:p-16 lg:p-20 relative max-w-[1800px] mx-auto"
        style={{ 
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 16%, 98.8% 19%, 98.8% 81%, 100% 84%, 100% 100%, 0% 100%, 0% 84%, 1.2% 81%, 1.2% 19%, 0% 16%)' 
        }}
      >
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-6 lg:gap-x-[60px] pb-12 border-b border-white/10">
          
          {/* Left Title */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-xl shrink-0">
            Fast, Friendly, and <br className="hidden md:inline" />
            Satisfaction Guarantee
          </h2>
          
          {/* Right Text Description */}
          <p className="text-[#9ea3b5] text-sm md:text-base max-w-xl leading-relaxed">
            No matter how big or small your work is, whether it's for the interior or 
            exterior of your home, we are ready to serve and help you solve your 
            home problems.
          </p>
        </div>

        {/* Bottom Feature Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[60px] pt-12">
          {featuresList.map((feature) => (
            <div key={feature.id} className="flex flex-row items-start gap-5">
              
              {/* Feature Icon container rendering your asset images perfectly */}
              <div className="w-[100px] h-[100px] flex-shrink-0 flex items-center justify-center overflow-hidden rounded-none">
                <img 
                  src={feature.iconSource} 
                  alt={`${feature.title} Icon`} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Feature Text Info */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[#9ea3b5] text-sm leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Featured;