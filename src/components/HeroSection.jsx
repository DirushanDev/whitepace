import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon

const HeroSection = () => {
  return (
    <div className="bg-primary text-white h-90 flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          Your work, everywhere<span className="bg-gradient-to-t from-blue-500 from-20% to-transparent to-20%"> you are</span>
        </h1>

        <p className="text-sm md:text-sm text-gray-200 mb-8">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitespace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition">
          Try Taskey <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
