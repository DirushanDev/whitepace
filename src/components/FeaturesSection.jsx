import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import bgPattern from '../assets/topo-lines.png';
import brushUnderline from '../assets/underline.png';
import orbitImage from '../assets/Orbit.png';
import smallBlueImage from '../assets/smallblue.png';

const FeaturesSection = () => {
  return (
    <>
      {/* Section 1: Project Management */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-20 py-20 bg-white text-gray-900 xl:mx-15 2xl:mx-20">
        {/* Left: Text */}
        <div
          className="flex-1 space-y-6 text-center md:text-left bg-no-repeat bg-left bg-contain"
          style={{ backgroundImage: `url(${bgPattern})` }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Project <br />
            <span
              className="relative inline-block"
              style={{
                backgroundImage: `url(${brushUnderline})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 1em',
                backgroundPosition: '0 100%',
                paddingBottom: '0.2em',
              }}
            >
              Management
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. 
            Take photos with the mobile app and save them to a note.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow flex items-center gap-2">
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={smallBlueImage}
            alt="Project Visual"
            className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </section>

      {/* Section 2: Work Together */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-20 py-20 bg-white text-gray-900 xl:-mx-10  -mt-15 md:mt-0">
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={orbitImage}
            alt="Orbit graphic"
            className="w-full max-w-md md:max-w-lg h-auto object-contain"
          />
        </div>

        {/* Left: Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Work{' '}
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
              together
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            With whitespace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow flex items-center gap-2">
              Try it now <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
