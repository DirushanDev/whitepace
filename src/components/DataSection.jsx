import React from "react";
import google from "../assets/google.svg";
import slack from "../assets/slack.png";
import microsoft from "../assets/microsoft.png";
import apple from "../assets/apple.png";
import image from "../assets/image.png";
import { FaArrowRight } from "react-icons/fa";

const DataSection = () => {
  return (
    <section id="resources" className="py-16 px-4 sm:px-8 md:px-20 bg-white text-gray-900">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            100% <span className="text-black bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">your data</span>
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            The app is open source and your notes are saved to an open format,
            so you’ll always have access to them. Uses End-To-End Encryption (E2EE)
            to secure your notes and ensure no one but yourself can access them.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md transition flex items-center gap-2">
              Read more <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Data Security Illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-10 relative inline-block">
          Our <span className="bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">sponsors</span>
          <span className="block h-2 bg-yellow-300 w-full absolute bottom-0 left-0 -z-10 rounded-md"></span>
        </h2>

        {/* Sponsor Logos: stacked vertically on small screens, horizontal on md+ */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <img src={apple} alt="Apple" className="h-12 md:h-16" />
          <img src={microsoft} alt="Microsoft" className="h-12 md:h-16" />
          <img src={slack} alt="Slack" className="h-12 md:h-16" />
          <img src={google} alt="Google" className="h-12 md:h-16" />
        </div>
      </div>
    </section>
  );
};

export default DataSection;
