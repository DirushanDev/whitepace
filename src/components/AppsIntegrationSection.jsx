import React from "react";
import circle from "../assets/circle.png";
import { FaArrowRight } from "react-icons/fa";

const AppsIntegrationSection = () => {
  return (
    <section className="bg-primary text-white py-16 overflow-hidden">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center md:items-start gap-10 md:gap-0 px-6 md:px-20">
        {/* Right side with text */}
        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work with Your <br className="hidden md:inline" /> Favorite Apps Using <br className="hidden md:inline" />
            <span> whitepace</span>
          </h2>
          <p className="text-sm md:text-base text-blue-200 mb-6 max-w-md">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to
            have all the tools you need for your project success.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition flex items-center gap-2 mt-4 md:mt-0">
            Read more <FaArrowRight />
          </button>
        </div>

        {/* Left side with image */}
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <img
              src={circle}
              alt="App Integration Icons"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsIntegrationSection;
