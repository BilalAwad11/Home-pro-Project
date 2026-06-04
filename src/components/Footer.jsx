import React from 'react';
import Logo from '../assets/ExampleLogo.png';
import tweitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import mail from '../assets/mail.png';
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'


const Footer = () => {
  return (
    
    <footer className="bg-[#00a3ff] w-full text-white pt-12 pb-6 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        
        <div className="w-full bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border border-white/20 shadow-lg">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight">Stay Connected with Our Newsletter</h3>
            <p className="text-white/80 text-sm md:text-base">Subscribe to our newsletter to get more news, promo, or news services</p>
          </div>
          
         
          <div className="w-full lg:w-auto flex flex-row bg-white rounded-full p-2 items-center max-w-md lg:min-w-[400px] shadow-inner">
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="w-full pl-4 pr-2 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm md:text-base"
            />
            <button className="bg-[#00a3ff] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-md text-sm md:text-base flex-shrink-0 hover:bg-blue-200">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pt-6">
          
          
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-2 text-3xl font-bold tracking-wider">
             
              <img src={Logo} alt="" />
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Home Pro is your premier destination for top-notch smart home service and repair.
            </p>
            
            <div className="flex flex-row items-center gap-5 text-xl opacity-90">
              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-youtube"><img src={instagram}  /></i></a>
              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-instagram"><img src={mail} /></i></a>
              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-facebook"><img src={facebook} /></i></a>
              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-twitter"><img src={youtube} /></i></a>
              <a href="#" className="hover:scale-110 transition-transform"><i className="fas fa-envelope"><img src={tweitter} /></i></a>
            </div>
          </div>

          
          <div className="flex flex-row gap-16 md:gap-24">
           
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold tracking-wide">Company</h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold tracking-wide">Legal</h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright*/}
        <div className="w-full text-center text-sm text-white/60 pt-6 border-t border-white/10 mt-6">
          ©2023 HomePro . All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;