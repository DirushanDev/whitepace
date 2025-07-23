import React from "react";
import appsImage from '../assets/apps-network.png';
import bgWave from '../assets/headerBgnew.png';     // Desktop background
import mobilebg from '../assets/mobile-bg.svg';     // Mobile background
import { FaArrowRight } from "react-icons/fa";

const AppsIntegrationSection = () => {
  return (
    <section className="relative bg-[#043873] text-white overflow-hidden">
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 block md:hidden"
        style={{ backgroundImage: `url(${mobilebg})` }}
      />

      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 hidden md:block"
        style={{ backgroundImage: `url(${bgWave})` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-60 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={appsImage}
            alt="App Integration Icons"
            className="w-full max-w-md md:max-w-lg h-auto object-contain"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            Work with Your <br />
            Favorite Apps Using <br />
            <span className="text-white">whitepace</span>
          </h2>
          <p className="text-white/90 max-w-md mb-6 mx-auto md:mx-0">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps
            with Zapier to have all the tools you need for your project success.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded shadow">
            Read more →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppsIntegrationSection;
