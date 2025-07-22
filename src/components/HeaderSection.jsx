import React, { useState } from 'react';
import { FaArrowRight, FaChevronDown, FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import headerbg from '../assets/headerBg.png';

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen text-white scroll-smooth bg-cover bg-center"
      style={{ backgroundImage: `url(${headerbg})` }}
    >
      {/* Navbar */}
      <nav className="px-6 md:px-20 xl:px-40 py-4 border-b border-white/10 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8 w-auto" />

          {/* Hamburger Icon - Only on small screens */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-sm font-medium ml-auto mr-8">
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

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm bg-[#FFE492] text-black rounded hover:bg-yellow-300">
              Login
            </button>
            <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-900 cursor-pointer flex items-center gap-2">
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
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 xl:px-40 py-16 gap-10">
        {/* Left Content */}
        <div className="flex-1 max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
            Get More Done with <br />
            <span className="text-white">whitepace</span>
          </h1>
          <p className="text-white/80 text-base">
            Project management software that enables your teams to collaborate, plan,
            analyze and manage everyday tasks
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded shadow flex items-center gap-2 cursor-pointer">
              Try Whitepace free <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="flex-1 w-full h-64 md:h-96 bg-blue-200 rounded-lg shadow-inner" />
      </section>
    </div>
  );
};

export default HeaderSection;
