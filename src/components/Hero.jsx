import React from 'react';
import FirstP from '../assets/Commitment-Free.png';
import SecondP from '../assets/FreeQuotes.png';
import ButtomBlue from '../assets/Button.png';
import FirstbigP from '../assets/Image1.png';
import SecondbigP from '../assets/Image2.png';
import rightBolenganze from '../assets/Decoration1.png';
import leftBolenganze from '../assets/Decoration.png';
import Icon from '../assets/icons/icon.png';
import Icon1 from '../assets/icons/icon.png'
import Icon2 from '../assets/icons/icon.png'
import Icon3 from '../assets/icons/icon.png'

const Hero = () => {
  return (
    <section className="bg-primary w-full text-white overflow-hidden relative pt-0 min-h-0 lg:min-h-[865px] flex items-center justify-center">
      
      {/* --- LEFT SIDE BACKGROUND WORKER (Door Worker) --- */}
      <div className="hidden lg:block absolute left-0 top-0 w-[24%] max-w-[380px] z-0 select-none pointer-events-none">
        <img 
          src={FirstbigP} 
          alt="Door repair worker" 
          className="w-full object-contain rounded-tr-[32px] h-full block alignment-bottom"
        />
      </div>

      {/* --- RIGHT SIDE BACKGROUND WORKER (Plumber) --- */}
      <div className="hidden lg:block absolute right-0 top-0 w-[24%] max-w-[380px] z-0 select-none pointer-events-none">
        <img 
          src={SecondbigP} 
          alt="Plumber worker" 
          className="w-full object-contain rounded-tl-[32px] h-full block alignment-bottom"
        />
      </div>

      {/* Main Container Layout Layer (Centered content window) */}
      <div className="w-full px-4 lg:px-12 pt-4 lg:pt-20 pb-16 lg:pb-[48px] max-w-[1800px] mx-auto z-10 relative flex justify-center">

        {/* Middle Content Block */}
        <div className="w-full lg:w-[55%] flex flex-col items-center text-center px-2 justify-center gap-5 lg:gap-8 lg:mb-4 z-20">

          {/* Subtext Tagline */}
          <div className="text-[#9EA3B5] text-xs lg:text-[15px] font-semibold tracking-widest uppercase mt-2">
            Maintenances &nbsp;&bull;&nbsp; Repairs &nbsp;&bull;&nbsp; Improvements
          </div>
          
          {/* Main Hero Header */}
          <h1 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight max-w-xl">
            Need improvement<br className="hidden sm:inline"/> or repair your home? <br />
            <span className="text-white">we can help!</span>
          </h1>
          
          {/* Commitment and Quote Badges Row */}
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 text-[#15B2F5] text-lg sm:text-[18px] font-medium">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Free Quotes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>100% Commitment-Free</span>
            </div>
          </div>
          
          {/* Call Action Button */}
          <div className="mt-1">
            <button className="hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none">
              <img src={ButtomBlue} alt="Call Us Now" className="h-[48px] sm:h-[56px] object-contain" />
            </button>
          </div>
          
          
          <div></div>
          <div></div>

          {/* --- FEATURES RIBBON COMPONENT --- */}
          <div className="w-full mt-4 lg:mt-10 lg:w-[750px] lg:max-w-none">
            <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-0 lg:gap-2">
              
              {/* Badge 1: Satisfaction Guarantee */}
              <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-2.5 py-6 px-2 justify-center border-b border-r border-slate-700/50 lg:border-none flex-1">
                <img src={Icon} alt="" />
                <span className="text-[11px] lg:text-[18px] font-medium max-w-[125px] lg:max-w-[120px] leading-tight text-slate-200">Satisfaction Guarantee</span>
              </div>

              {/* Desktop Vertical Divider 1 */}
              <div className="hidden lg:block h-5 w-px bg-white/10"></div>

              {/* Badge 2: 24H Availability */}
              <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-2.5 py-6 px-2 justify-center border-b border-slate-700/50 lg:border-none flex-1">
                <img src={Icon1} alt="" />
                <span className="text-[11px] lg:text-[18px] font-medium max-w-[125px] lg:max-w-[120px] leading-tight text-slate-200">24H Availability</span>
              </div>

              {/* Desktop Vertical Divider 2 */}
              <div className="hidden lg:block h-5 w-px bg-white/10"></div>

              {/* Badge 3: Local US Professional */}
              <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-2.5 py-6 px-2 justify-center border-r border-slate-700/50 lg:border-none flex-1">
                <img src={Icon2} alt="" />
                <span className="text-[11px] lg:text-[18px] font-medium max-w-[125px] lg:max-w-[120px] leading-tight text-slate-200">Local US Professional</span>
              </div>

              {/* Desktop Vertical Divider 3 */}
              <div className="hidden lg:block h-5 w-px bg-white/10"></div>

              {/* Badge 4: Flexible Appointments */}
              <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-2.5 py-6 px-2 justify-center lg:border-none flex-1">
                <img src={Icon3} alt="" />
                <span className="text-[11px] lg:text-[18px] font-medium max-w-[125px] lg:max-w-[120px] leading-tight text-slate-200">Flexible Appointments</span>
              </div>

            </div>
          </div>

        </div>
        
      </div>

      {/* --- Absolute White Corner Pieces Layer --- */}
      {/* Left Corner Graphic */}
      <div className="lg:block absolute bottom-0 left-0 z-5 pointer-events-none select-none w-[25%] max-w-[450px]">
        <img 
          src={rightBolenganze} 
          alt="" 
          className="w-full h-auto object-contain object-left-bottom"
        />
      </div>

      {/* Right Corner Graphic */}
      <div className="lg:block absolute bottom-0 right-0 z-5 pointer-events-none select-none w-[25%] max-w-[450px]">
        <img 
          src={leftBolenganze} 
          alt="" 
          className="w-full h-auto object-contain object-right-bottom"
        />
      </div>

    </section>
  );
};

export default Hero;