import React ,{ useState } from 'react';
import logo from '../assets/Logo.png';
import logo2 from '../assets/Service.png'
import Xicon from '../assets/X.png'
import Menu from '../assets/menu.png'
const navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex bg-primary items-center justify-between px-6 md:px-40 py-6 shadow-sm relative w-full">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="HomePro Logo" className="h-8" />
      </div>

      {/*Desktop Menu*/}
      <div className="hidden md:flex">
        <ul className="flex gap-8 text-white font-medium pt-5">
          <li><a href="#" className="hover:text-cyan-400 transition">About Us</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition">Services</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition">Our Blog</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </div>

      {/* logo2*/}
      <div className="hidden md:block">
        <img src={logo2} alt="24 Hour Services" className="h-6 object-contain" />
      </div>

      {/* buttom X*/}
      <div className="md:hidden flex items-center z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? (
            <img src={Xicon} alt="Close Menu" className="w-6 h-6" />
          ) : (
            <img src={Menu} alt="Open Menu" className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer*/}
      <div className={`fixed top-0 right-0 h-screen w-3/4 bg-[#0d1b3e] text-white z-40 transform p-10 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
      <div>
        <div className="flex items-center justify-between  border-b border-white/10 w-full">
          <img src={logo} alt="24 Hour Services" className="pr-4 pb-6" />
        </div>
        
        <div className="flex-grow flex flex-col justify-center items-center px-6 py-10 ">
  <ul className="flex flex-col gap-12 text-center font-semibold text-lg tracking-wide w-full">
    <li><a href="#" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition block">About Us</a></li>
    <li><a href="#" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition block">Services</a></li>
    <li><a href="#" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition block">Our Blog</a></li>
    <li><a href="#" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition block">Contact</a></li>
  </ul>
</div>
</div>
        <div className="flex justify-start border-t border-gray-700/50 pt-6 pl-4">
          <img src={logo2} alt="24 Hour Services" className="h-6 object-contain" />
        </div>

      </div>

    </nav>
  );
};


export default navbar