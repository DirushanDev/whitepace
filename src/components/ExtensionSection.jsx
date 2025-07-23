import React from "react";
import { FaArrowRight } from "react-icons/fa";
import brushUnderline from '../assets/underline.png';
import smallBlueImage from '../assets/smallblue.png'; // ✅ Blue image

const ExtensionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 xl:px-40 py-16 gap-10 bg-[#0F3460] text-white">
      
      {/* Left Content */}
      <div className="flex-1 max-w-xl space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold">
          Use as{' '}
          <span
            className="relative inline-block"
            style={{
              backgroundImage: `url(${brushUnderline})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 0.6em',
              backgroundPosition: '0 100%',
              paddingBottom: '0.2em',
            }}
          >
            Extension
          </span>
        </h2>

        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages
          or take screenshots as notes.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow">
            Let’s Go →
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={smallBlueImage}
          alt="Extension Preview"
          className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-xl shadow-lg border border-gray-200"
        />
      </div>
    </section>
  );
};

export default ExtensionSection;
