import React from 'react';
import OrbitGraphic from './OrbitGraphic';
import { FaArrowRight } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <div className="bg-white text-gray-900 px-4 md:px-20 py-15 space-y-20">
       
      {/* Project Management Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left text */}
        <div className="flex-1 max-w-md space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            Project <br /> <span className="text-gray-800 bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">Management</span>
          </h2>
          <p className="text-gray-600 text-base">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. 
            Take photos with the mobile app and save them to a note.
          </p>
          <button className="mt-8 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 text-sm font-medium flex items-center justify-center md:justify-start gap-2 mx-auto md:mx-0">
            Get Started <FaArrowRight />
          </button>
        </div>
        
        {/* Right placeholder image - Fixed for mobile */}
        <div className="w-full md:flex-1 md:max-w-xl h-56 bg-blue-200 rounded-lg shadow-inner md:mr-20 mt-6 md:mt-0" />
      </div>
      
      {/* Work Together Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <OrbitGraphic />
        
        {/* Right text */}
        <div className="flex-1 max-w-md space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-gray-800  bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">together</span>
          </h2>
          <p className="text-gray-600 text-base">
            With whitepace, share your notes with your colleagues and collaborate on them. 
            You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-medium flex items-center justify-center md:justify-start gap-2 mx-auto md:mx-0">
            Try it now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;