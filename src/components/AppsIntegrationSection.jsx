import React from "react";
import circle from "../assets/circle.png";
import { FaArrowRight } from "react-icons/fa";
import bgWave from '../assets/headerBg.png'; // wavy background
import appsImage from '../assets/apps-network.png'; // left image (circle of apps)
const AppsIntegrationSection = () => {
  return (
    <section
  className="bg-no-repeat bg-cover bg-center text-white py-20 px-6 md:px-16 bg-[#043873]"
  style={{
    backgroundImage: `url(${bgWave})`,
  }}
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Left: Circle App Icons Image */}
    <div className="flex-1 flex justify-center">
      <img
        src={appsImage}
        alt="App Integration Icons"
        className="w-[300px] md:w-[420px] h-auto object-contain"
      />
    </div>

    {/* Right: Text Content */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
        Work with Your <br />
        Favorite Apps Using <br />
        <span className="text-blue-200">whitepace</span>
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
