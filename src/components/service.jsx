import React from 'react'
import ServicePc from '../assets/Image55.png'
import frirstd from '../assets/TitleDescription.png'
import first2 from '../assets/Services.png'
const services = () => {
  return (
    <section className="bg-white w-full py-16 px-6 md:px-20 lg:px-32">
      {/* Container: Row on Desktop, Column on Mobile */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-[#1a202c]">
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-md">
            Professional for your home services
          </h2>
          
          {/* Subtitle Description */}
          <p className="text-[#5a6578] text-base md:text-lg leading-relaxed max-w-xl">
            You need help for home care? We are home care professionals 
            focused in the US region. We provide several services that 
            support home services.
          </p>
          
          {/* Checkmark Features List Box */}
          <div className="my-2">
            <img 
              src={first2} 
              alt="Our Services List" 
              className="w-full max-w-[450px] object-contain" 
            />
          </div>
          
          {/* Contact Info Banner */}
          <div className="bg-[#00a3ff] text-white rounded-2xl p-5 max-w-sm shadow-md mt-2">
            <p className="text-sm font-medium opacity-90">
              We already 24 hours fast services to help you.
            </p>
            <p className="text-base font-bold mt-1">
              You can contact us at{' '}
              <a href="tel:8886175894" className="underline hover:text-blue-100">
                (888) 617–5894
              </a>
            </p>
          </div>

        </div>

        {/* Right Column: Big Shaped Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={ServicePc} 
            alt="Professional roofers working" 
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default services 
