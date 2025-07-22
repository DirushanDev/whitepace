import React from 'react';
import OrbitGraphic from './OrbitGraphic';
import { FaArrowRight } from 'react-icons/fa';
import bgPattern from '../assets/topo-lines.png'; // Replace with your actual file
import brushUnderline from '../assets/underline.png'; // your uploaded brush image
import orbitImage from '../assets/Orbit.png'; // Replace with your actual image path
const FeaturesSection = () => {
  return (
    <div className="bg-white text-gray-900 px-4 md:px-20 py-15 space-y-20">
       
<section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 xl:px-20 py-16 gap-10 bg-white">
  {/* Text Content with Background */}
  <div
    className="flex-1 max-w-xl space-y-4 text-center md:text-left bg-no-repeat bg-left bg-contain"
    style={{ backgroundImage: `url(${bgPattern})` }}
  >
    {/* <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
      Project <span className="underline decoration-yellow-400">Management</span>
    </h2> */}
  <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
  Project{' '}
  <span
    className="relative inline-block"
    style={{
      backgroundImage: `url(${brushUnderline})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 1em', // ↑ Increased height
      backgroundPosition: '0 100%', // ↓ Pushes it lower under the text
      paddingBottom: '0.2em', // creates spacing so image doesn't clip
    }}
  >
    Management
  </span>
</h2>

    <p className="text-gray-600 text-base">
      Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. 
      Take photos with the mobile app and save them to a note.
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow flex items-center gap-2">
        Get Started →
      </button>
    </div>
  </div>

  {/* Right Box / Image Placeholder */}
  <div className="flex-1 w-full h-80 md:h-[28rem] bg-blue-200 rounded-lg shadow-inner" />
</section>

 <div className="block md:hidden h-64 bg-blue-200 rounded-lg shadow-inner mx-5 -mt-30" />

      
      {/* Work Together Section */}
     <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 xl:px-30  bg-white">
  {/* Left Image */}
  <div className="flex-1 flex ">
    <img
      src={orbitImage}
      alt="Orbit graphic"
      className="w-72 md:w-[28rem] object-contain "
    />
  </div>

  {/* Right Text Content */}
  <div className="flex-1 max-w-xl space-y-4 text-center md:text-left 2xl:pe-30">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
      Work <span className="relative inline-block" style={{
        backgroundImage: `url(${brushUnderline})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 0.6em',
        backgroundPosition: '0 100%',
        paddingBottom: '0.2em',
      }}>together</span>
    </h2>
    <p className="text-gray-600 text-base">
      With whitespace, share your notes with your colleagues and collaborate on them.
      You can also publish a note to the internet and share the URL with others.
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow">
        Try it now →
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default FeaturesSection;