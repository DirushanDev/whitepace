import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon
import brushUnderline from '../assets/brush-blue.png'; // replace with your uploaded brush imag
import bgPattern from '../assets/topo-lines.png'; // your background pattern
const HeroSection = () => {
  return (
    <section className="relative bg-[#0F3460] text-white py-16 px-6 md:px-20 xl:px-40 text-center overflow-hidden">
  {/* Background pattern image on left */}
  <div
    className="absolute left-0 top-0 w-64 h-full bg-no-repeat bg-left bg-contain z-0 opacity-30"
    style={{
      backgroundImage: `url(${bgPattern})`,
    }}
  />

  {/* Main Content */}
  <div className="relative z-10">
    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
      Your work, everywhere{' '}
      <span
        className="inline-block relative"
        style={{
          backgroundImage: `url(${brushUnderline})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 0.6em',
          backgroundPosition: '0 88%',
          paddingBottom: '0.2em',
        }}
      >
        you are
      </span>
    </h2>

    <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
      Access your notes from your computer, phone or tablet by synchronizing with various services,
      including whitespace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android
      and iOS. A terminal app is also available!
    </p>

    <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded shadow text-sm font-medium">
      Try Taskey →
    </button>
  </div>
</section>
  );
};

export default HeroSection;
