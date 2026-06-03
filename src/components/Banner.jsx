import React from 'react';
import FirstP from '../assets/Commitment-Free.png';
import SecondP from '../assets/FreeQuotes.png';
import ButtomBlue from '../assets/Button.png';
import BannerImg from '../assets/24HAvailabilitys.png'; // Make sure to save the right-side graphic as an asset

const banner = () => {
  return (
    <section className="bg-[#111e42] w-full py-16 lg:py-0 lg:h-[500px] flex items-center overflow-hidden text-white px-6 md:px-12 lg:px-24">
      
      {/* Wrapper Container: Columns on Mobile, Row on Desktop */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-6 h-full">
        
        {/* Left Column: Call to Action Text elements */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left gap-6 justify-center h-full">
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-[54px] font-bold leading-[64px] tracking-tight max-w-xl">
            Already to improve or repair your home? <br />
            Let’s Talk!
          </h2>

          {/* Checkmark Badges (Reusing assets from your Hero) */}
          <div className="flex flex-row items-center gap-6 my-2">
            <div className="flex items-center gap-2">
              <img src={SecondP} alt="Free Quotes" className="h-5 object-contain" />
            </div>
            <div className="flex items-center gap-2">
              <img src={FirstP} alt="100% Commitment-Free" className="h-5 object-contain" />
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
        {/* lg:h-full and items-end forces the graphic to sit flat on the bottom edge just like the design */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end h-full self-end">
          <img 
            src={BannerImg} 
            alt="Home improvement professional pointing to app" 
            className="w-full max-w-[580px] lg:max-w-[640px] h-auto object-contain block align-bottom m-0 p-0"
          />
        </div>

      </div>

    </section>
  );
};

export default banner;