import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon

const ExtensionSection = () => {
  return (
    <section id="products" className="bg-primary text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-12">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" >
            <span className="bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">Use as Exte</span>nsion
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded transition flex items-center gap-2 mx-auto md:mx-0">
            Let's Go <FaArrowRight />
          </button>
        </div>

        {/* Placeholder for image or video */}
        <div className="md:w-1/2 w-full h-64 bg-blue-200 rounded-lg shadow-md"></div>
      </div>
    </section>
  );
};

export default ExtensionSection;
