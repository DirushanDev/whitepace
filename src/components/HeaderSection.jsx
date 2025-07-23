import React, { useState } from 'react';
import { FaArrowRight, FaChevronDown, FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import blueimage from '../assets/blue-image.png';
import headerbg from '../assets/headerBg.png';
import mobilebg from '../assets/mobile-bg.svg';

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="scroll-smooth text-white">
      {/* Navbar */}
      <nav className="px-6 md:px-20 xl:px-40 py-4 2xl:py-6 border-b border-white/10 relative bg-[#043873]">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-sm font-medium ml-auto mr-8 2xl:space-x-10 2xl:text-base">
            {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-300 flex items-center gap-1" key={item}>
                {item} <FaChevronDown className="text-xs" />
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm bg-[#FFE492] text-black rounded hover:bg-yellow-300 2xl:px-6 2xl:py-3">
              Login
            </button>
            <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-900 cursor-pointer flex items-center gap-2 2xl:px-5 2xl:py-3">
              Try Whitepace free <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 bg-primary flex flex-col space-y-4 p-6 md:hidden z-10">
            <div className="flex flex-col space-y-2 text-sm font-medium">
              {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-left hover:text-blue-300">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <button className="px-4 py-2 text-sm bg-[#FFE492] text-black rounded hover:bg-yellow-300">
                Login
              </button>
              <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-400 flex items-center gap-2 justify-center">
                Try Whitepace free <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ✅ MOBILE HERO VIEW */}
      <section
        className="block md:hidden w-full px-6 py-16 bg-[#043873] text-white bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${mobilebg})`,
          
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {/* ✅ Text First */}
          <div className="max-w-xl text-center space-y-6 mt-10 md:mt-0">
            <h1 className="text-stroke font-inter text-4xl font-bold leading-tight">
              Get More Done with <br />
              <span className="text-white">whitepace</span>
            </h1>
            <p className="text-white/80 text-base">
              Project management software that enables your teams to collaborate, plan,
              analyze and manage everyday tasks
            </p>
            <button className="bg-[#4F9CF9] hover:bg-blue-800 text-white font-medium px-6 py-3 rounded shadow flex items-center gap-2 mx-auto mt-20 md:mt-0">
              Try Whitepace free <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* 🔵 Image Second */}
          <img
            src={blueimage}
            alt="Mobile Visual"
            className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-xl shadow-lg border border-gray-200 mt-10 md:mt-0 mb-10 md:mb-0"
          />
        </div>
      </section>

      {/* ✅ DESKTOP HERO VIEW */}
      <section
        className="hidden md:flex px-20 xl:px-40 py-16 gap-10 items-center justify-between bg-[#043873] text-white bg-no-repeat bg-contain bg-center 2xl:pb-30"
        style={{
          backgroundImage: `url(${headerbg})`,
         
        }}
      >
        {/* ✅ Left Text Content */}
        <div className="flex-1 max-w-xl space-y-6 text-left">
          <h1 className="text-stroke font-inter text-4xl xl:text-6xl font-bold leading-tight">
            Get More Done with <br />
            <span className="text-white">whitepace</span>
          </h1>
          <p className="text-white/80 text-base">
            Project management software that enables your teams to collaborate, plan,
            analyze and manage everyday tasks
          </p>
          <button className="bg-[#4F9CF9] hover:bg-blue-800 text-white font-medium px-6 py-3 rounded shadow flex items-center gap-2">
            Try Whitepace free <FaArrowRight className="text-sm" />
          </button>
        </div>

        {/* ✅ Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={blueimage}
            alt="Desktop Visual"
            className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </section>
    </div>
  );
};

export default HeaderSection;
