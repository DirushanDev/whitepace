import React from "react";
import {
  FaApple,
  FaWindows,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight,
  FaRegCopyright,
  FaChevronDown,
} from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";
import logo from "../assets/logo.png";
import { BsGlobe2 } from "react-icons/bs";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 md:px-20">
      {/* Top CTA Section */}
      <div className="mb-16 text-left md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Try Whitepace</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">today</h2>
        <p className="text-gray-300">Get started for free.</p>
        <p className="text-gray-300">Add your whole team as your needs grow.</p>
        <div className="flex justify-start md:justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 mt-8 rounded-md flex items-center gap-2 transition">
            Try Taskey free <FaArrowRight />
          </button>
        </div>
        <p className="text-base text-gray-300 mt-6">On a big team? Contact sales</p>
        <div className="flex justify-start md:justify-center gap-6 text-4xl mt-4">
          <FaApple />
          <FaWindows />
          <TfiAndroid />
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid md:grid-cols-5 gap-8 pt-10 text-left">
        <div className="md:col-span-1">
          <img src={logo} alt="logo" className="font-bold text-lg mb-2" />
          <p className="text-sm text-gray-300">
            Whitepace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="text-sm space-y-2 text-gray-300 cursor-pointer">
            <li className="hover:text-amber-300">Overview</li>
            <li className="hover:text-amber-300">Pricing</li>
            <li className="hover:text-amber-300">Customer stories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="text-sm space-y-2 text-gray-300 cursor-pointer">
            <li className="hover:text-amber-300">Blog</li>
            <li className="hover:text-amber-300">Guides & tutorials</li>
            <li className="hover:text-amber-300">Help center</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="text-sm space-y-2 text-gray-300 cursor-pointer">
            <li className="hover:text-amber-300">About us</li>
            <li className="hover:text-amber-300">Careers</li>
            <li className="hover:text-amber-300">Media kit</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Try It Today</h4>
          <p className="text-sm text-gray-300 mb-4">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition">
            Start today <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mt-10 border-t border-gray-200 pt-6 text-sm text-gray-200 gap-4">
        {/* Language + Terms */}
        <div className="flex flex-wrap items-center gap-x-6">
          <div className="flex items-center space-x-1">
            <BsGlobe2 />
            <span>English</span>
            <FaChevronDown />
          </div>
          <span>Terms & privacy</span>
          <span>Security</span>
          <span>Status</span>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-1">
          <FaRegCopyright className="text-base" />
          <span>2021 Whitepace LLC.</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-white">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
