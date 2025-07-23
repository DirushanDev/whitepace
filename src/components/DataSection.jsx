import React from "react";
import google from "../assets/google.png";
import slack from "../assets/slack.png";
import microsoft from "../assets/microsoft.png";
import apple from "../assets/apple.png";
import image from "../assets/image.png";
import { FaArrowRight } from "react-icons/fa";
import brushUnderline from '../assets/underline.png'; // yellow brush for 'your data'
import dataGraphic from '../assets/dataGraphic.png'; // replace with your uploaded image
const DataSection = () => {
  return (
    <section id="resources" className="py-16 px-4 sm:px-8 md:px-20 bg-white text-gray-900 -mt-15 md:mt-0">
     
         <section className="flex flex-col-reverse  md:flex-row items-center justify-between px-6 md:px-20 xl:px-20 py-16 gap-10 bg-white">
  {/* Left Content */}
  <div className="flex-1 max-w-xl space-y-4 text-center md:text-left">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
      100%{' '}
      <span
        className="inline-block relative"
        style={{
          backgroundImage: `url(${brushUnderline})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 0.6em',
          backgroundPosition: '0 90%',
          paddingBottom: '0.2em',
        }}
      >
        your data
      </span>
    </h2>
    <p className="text-gray-600 text-sm md:text-base">
      The app is open source and your notes are saved to an open format, so you'll always have access to them.
      Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow text-sm">
        Read more →
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex-1 flex justify-center">
    <img
      src={dataGraphic}
      alt="Data Protection Graphic"
      className="w-full max-w-[28rem] h-auto object-contai"
    />
  </div>
</section>
  

     {/* Sponsors Section */}
<div className="mt-20 text-center px-6">
<h2 className="text-4xl sm:text-5xl font-extrabold mb-10">
  Our{' '}
  <span
    className="relative inline-block"
    style={{
      backgroundImage: `url(${brushUnderline})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 0.7em', // increased from 0.5em
      backgroundPosition: '0 90%',   // slightly lower
      paddingBottom: '0.2em',        // more spacing below text
    }}
  >
    sponsors
  </span>
</h2>


  {/* Sponsor Logos: Responsive Layout */}
   <div className="flex flex-col md:flex-row justify-center items-center gap-16 2xl:gap-42">
    <img src={apple} alt="Apple" className="h-16 md:h-16" />
    <img src={microsoft} alt="Microsoft" className="h-16 md:h-14" />
    <img src={slack} alt="Slack" className="h-16 md:h-14" />
    <img src={google} alt="Google" className="h-16 md:h-14" />
  </div>
</div>
    </section>
  );
};

export default DataSection;
