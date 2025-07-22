import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaChevronDown, FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import headerbg from '../assets/headerBg.png';
import mobilebg from '../assets/mobile-bg.svg';

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind's md breakpoint
    };

    handleResize(); // set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = isDesktop ? `url(${headerbg})` : `url(${mobilebg})`;
  const backgroundPosition = isDesktop ? 'center 14.25rem' : 'center 3rem';

  return (
    <div
      className="min-h-screen text-white scroll-smooth bg-[#043873] bg-no-repeat bg-contain bg-center"
      style={{
        backgroundImage,
        backgroundPosition,
      }}
    >
      {/* Navbar */}
      <nav className="px-6 md:px-20 xl:px-40 py-4 2xl:py-6 border-b border-white/10 relative">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" className="h-8 w-auto" />

          {/* Mobile Hamburger */}
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-sm font-medium ml-auto mr-8 2xl:space-x-10 2xl:text-base">
            <a href="#products" className="hover:text-blue-300 flex items-center gap-1">
              Products <FaChevronDown className="text-xs" />
            </a>
            <a href="#solutions" className="hover:text-blue-300 flex items-center gap-1">
              Solutions <FaChevronDown className="text-xs" />
            </a>
            <a href="#resources" className="hover:text-blue-300 flex items-center gap-1">
              Resources <FaChevronDown className="text-xs" />
            </a>
            <a href="#pricing" className="hover:text-blue-300 flex items-center gap-1">
              Pricing <FaChevronDown className="text-xs" />
            </a>
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
              <a href="#products" className="text-left hover:text-blue-300">Products</a>
              <a href="#solutions" className="text-left hover:text-blue-300">Solutions</a>
              <a href="#resources" className="text-left hover:text-blue-300">Resources</a>
              <a href="#pricing" className="text-left hover:text-blue-300">Pricing</a>
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

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 xl:px-40 py-16 gap-10 2xl:mt-15">
        {/* Left Content */}
        <div className="flex-1 max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-stroke font-inter text-4xl md:text-4xl font-bold leading-tight xl:text-6xl">
            Get More Done with <br />
            <span className="text-white">whitepace</span>
          </h1>
          <p className="text-white/80 text-base">
            Project management software that enables your teams to collaborate, plan,
            analyze and manage everyday tasks
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#4F9CF9] hover:bg-blue-800 text-white font-medium px-6 py-3 rounded shadow flex items-center gap-2 cursor-pointer 2xl:mt-5">
              Try Whitepace free <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Right Graphic (Visible on desktop only) */}
        <div className="hidden md:block flex-1 w-full h-64 md:h-[28rem] bg-blue-200 rounded-lg shadow-inner" />
      </section>

      {/* Mobile-only Graphic Block */}
      <div className="block md:hidden h-64 bg-blue-200 rounded-lg shadow-inner mx-5 mt-15" />
    </div>
  );
};

export default HeaderSection;
