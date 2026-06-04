import React from 'react';
import FirstP from '../assets/Commitment-Free.png';
import SecondP from '../assets/FreeQuotes.png';
import ButtomBlue from '../assets/Button.png';
import BannerImg from '../assets/24HAvailabilitys.png'; 
import shape from '../assets/shape.png';

const banner = () => {
  return (
    <section className="bg-[#111e42] w-full py-16 lg:py-0 lg:h-[655px] flex items-center overflow-hidden text-white px-6 md:px-12 lg:pl-32 lg:pr-0 relative">
      
      {/* --- TOP WHITE NOTCH SHAPE --- */}
      {/* Matches the exact location and span from Screenshot 2026-06-04 200542.png */}
      <div className="absolute top-0 left-0 lg:left-[110px] z-20 pointer-events-none select-none">
        <img 
          src={shape} 
          alt="" 
          className="w-[280px] sm:w-[380px] lg:w-[581px] h-auto object-contain block"
        />
      </div>
      
      {/* Layout Wrapper */}
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between h-full relative z-10">
        
        {/* Left Column: Call to Action Text elements */}
        {/* max-w-[662px] locks the text bounding box exactly like your Figma Hug constraints */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left gap-6 justify-center h-full pt-12 lg:pt-0 max-w-[662px]">
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-[54px] font-bold leading-[64px] tracking-tight w-full">
            Already to improve or repair your home? <br />
            Let’s Talk!
          </h2>

          {/* Checkmark Badges */}
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

          {/* Call Us Now Button */}
          <div className="mt-2">
            <button className="hover:scale-105 transition-transform duration-200 focus:outline-none">
              <img src={ButtomBlue} alt="Call Us Now" className="h-[56px] object-contain" />
            </button>
          </div>

        </div>

        {/* Right Column: Worker and App Graphic */}
        {/* Absolute positioning on desktop stops the wide 966px image from squeezing or stepping over your text */}
        <div className="w-full lg:w-auto lg:absolute lg:right-0 lg:top-0 lg:bottom-0 flex justify-center lg:justify-end items-center h-full z-0">
          <img 
            src={BannerImg} 
            alt="Home improvement professional pointing to app" 
            className="w-full max-w-[580px] lg:max-w-none lg:w-[966px] lg:h-[655px] object-cover block m-0 p-0"
          />
        </div>

      </div>

    </section>
  );
};

export default banner;