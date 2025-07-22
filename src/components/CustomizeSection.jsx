import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon

const CustomizeSection = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side Image Placeholder - Shows first on mobile, left on desktop */}
        <div className="md:w-1/2 bg-blue-200 h-64 w-full rounded-lg shadow-md order-1 md:order-1"></div>

        {/* Right Side Content - Shows second on mobile, right on desktop */}
        <div className="md:w-1/2 order-2 md:order-2 text-center md:text-left">
          <h2 className="text-lg min-[360px]:text-xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            <span className="md:hidden">Customise it to <span className="bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">your needs</span></span>
            <span className="hidden md:block">
              Customise it to <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">your needs</span>
              </span>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded transition flex items-center gap-2 mx-auto md:mx-0">
            Let's Go <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;