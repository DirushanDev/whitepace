import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon
import brushUnderline from '../assets/underline.png';
const CustomizeSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 xl:px-35 py-16 gap-10 bg-white">
  {/* Left Preview Box */}
  <div className="flex-1 flex ">
    <div className="w-84 md:w-[38rem] h-64 md:h-80 bg-blue-200 rounded-lg shadow-inner" />
  </div>

  {/* Right Content */}
  <div className="flex-1 max-w-xl space-y-4 text-center md:text-left">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
      Customise it to <br />
      <span
        className="relative inline-block"
        style={{
          backgroundImage: `url(${brushUnderline})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 0.7em',
          backgroundPosition: '0 90%',
          paddingBottom: '0.2em',
        }}
      >
        your needs
      </span>
    </h2>
    <p className="text-gray-600 text-sm md:text-base">
      Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). 
      Or create your own scripts and plugins using the Extension API.
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow">
        Let's Go →
      </button>
    </div>
  </div>
</section>
  );
};

export default CustomizeSection;