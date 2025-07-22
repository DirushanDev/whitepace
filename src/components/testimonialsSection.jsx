import React from "react";
import girl from "../assets/girl.png";
import man from "../assets/man.png";
import people from "../assets/people.png";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: girl,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    quote:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: man,
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    quote:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: people,
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="solutions" className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="block xl:hidden">
          See what our <span className="bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">trusted</span> users Say
        </span>
        <span className="hidden xl:block">
          What Our Clien<span className="bg-gradient-to-t from-yellow-400 from-20% to-transparent to-20%">ts S</span>ays
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md p-6 ${t.bgColor} ${t.textColor}`}
          >
            <div className="text-5xl mb-4"><FaQuoteLeft /></div>
            <p className="mb-6 text-sm md:text-base text-left">{t.quote}</p>
            <hr className="border-t my-4" />
            <div className="flex items-center gap-4 mt-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-sm md:text-base">{t.name}</p>
                <p className="text-xs md:text-sm opacity-70">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-center space-x-1">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
          <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 