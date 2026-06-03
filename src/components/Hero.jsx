import React from 'react';
import FirstP from '../assets/Commitment-Free.png';
import SecondP from '../assets/FreeQuotes.png';
import ButtomBlue from '../assets/Button.png';
import FirstbigP from '../assets/Image1.png';
import SecondbigP from '../assets/Image2.png';

const Hero = () => {
  return (
    <section 
      className="bg-primary w-full flex flex-col justify-between text-white overflow-hidden relative"
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 83% 92%, 80% 100%, 20% 100%, 17% 92%, 0% 92%)',
        minHeight: '977px'
      }}
    >
  
      <div className="flex flex-col lg:flex-row items-end justify-between w-full px-4 lg:px-12 flex-grow pb-16 pt-8 max-w-[1800px] mx-auto z-10">
        
        {/* Left Side Big Picture (Door Worker) */}
        <div className="w-full lg:w-[28%] hidden lg:block self-end">
          <img 
            src={FirstbigP} 
            alt="Door repair worker" 
            className="w-full object-contain rounded-t-[32px] h-auto shadow-2xl"
          />
        </div>

        {/* Middle Main Content */}
        <div className="w-full lg:w-[44%] flex flex-col items-center text-center px-4 justify-center pb-24 gap-8">
          
          {/* Subtext Tagline */}
          <div className="text-[#9EA3B5] text-sm lg:text-base font-medium tracking-wide">
            Maintenances &nbsp;&bull;&nbsp; Repairs &nbsp;&bull;&nbsp; Improvements
          </div>
          
          {/* Main Hero Header */}
          <h1 className="text-4xl lg:text-[60px] font-bold leading-[1.15] tracking-tight max-w-2xl">
            Need improvement<br/> or repair your home? <br />
            <span className="text-white">we can help!</span>
          </h1>
          
          {/* Commitment and Quote Badges Row */}
          <div className="flex flex-row items-center justify-center gap-6 my-1">
            <img src={SecondP} alt="Free Quotes" className="h-5 object-contain" />
            <img src={FirstP} alt="100% Commitment-Free" className="h-5 object-contain" />
          </div>
          
          {/* Call Action Button */}
          <div className="mt-2">
            <button className="hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none">
              <img src={ButtomBlue} alt="Call Us Now" className="h-[58px] object-contain" />
            </button>
          </div>

        </div>

        {/* Right Side Big Picture (Plumber) */}
        <div className="w-full lg:w-[28%] hidden lg:block self-end">
          <img 
            src={SecondbigP} 
            alt="Plumber worker" 
            className="w-full object-contain rounded-t-[32px] h-auto shadow-2xl"
          />
        </div>
        
      </div>

      {/* Bottom Bar Features Row Layer */}
      <div className="w-full bg-primary border-t border-white/5 py-5 z-20 absolute bottom-0 left-0 right-0">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-6 lg:gap-4">
          
          {/* Badge 1: Satisfaction Guarantee */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-3 flex-1 justify-center">
            <div className="w-10 h-10 rounded-full bg-[#1c2c5b] flex items-center justify-center text-sky-400 shrink-0">
              <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-semibold max-w-[125px] leading-tight text-slate-200">Satisfaction Guarantee</span>
          </div>

          {/* Divider 1 */}
          <div className="hidden lg:block h-7 w-px bg-white/10"></div>

          {/* Badge 2: 24H Availability */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-3 flex-1 justify-center">
            <div className="w-10 h-10 rounded-full bg-[#1c2c5b] flex items-center justify-center text-sky-400 shrink-0">
              <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-semibold max-w-[125px] leading-tight text-slate-200">24H Availability</span>
          </div>

          {/* Divider 2 */}
          <div className="hidden lg:block h-7 w-px bg-white/10"></div>

          {/* Badge 3: Local US Professional */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-3 flex-1 justify-center">
            <div className="w-10 h-10 rounded-full bg-[#1c2c5b] flex items-center justify-center text-sky-400 shrink-0">
              <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-semibold max-w-[125px] leading-tight text-slate-200">Local US Professional</span>
          </div>

          {/* Divider 3 */}
          <div className="hidden lg:block h-7 w-px bg-white/10"></div>

          {/* Badge 4: Flexible Appointments */}
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-3 flex-1 justify-center">
            <div className="w-10 h-10 rounded-full bg-[#1c2c5b] flex items-center justify-center text-sky-400 shrink-0">
              <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-semibold max-w-[125px] leading-tight text-slate-200">Flexible Appointments</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;