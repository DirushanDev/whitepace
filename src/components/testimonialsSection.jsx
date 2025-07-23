import React from "react";
import girl from "../assets/girl.png";
import man from "../assets/man.png";
import people from "../assets/people.png";
import bluequote from "../assets/blueQuote.png";
import whitequote from "../assets/whiteQuote.png";
import brushUnderline from '../assets/underline.png';

const testimonials = [
  {
    quote:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: girl,
    bgColor: "bg-white",
    textColor: "text-black",
    quoteImage: bluequote,
  },
  {
    quote:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: man,
    bgColor: "bg-blue-500",
    textColor: "text-white",
    quoteImage: whitequote,
  },
  {
    quote:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    avatar: people,
    bgColor: "bg-blue-500",
    textColor: "text-white",
    quoteImage: whitequote,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="solutions" className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="xl:block">
          What Our Clien
          <span
            className="relative inline-block"
            style={{
              backgroundImage: `url(${brushUnderline})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 0.9em',
              backgroundPosition: '0 92%',
              paddingBottom: '0.2em',
            }}
          >
            ts S
          </span>
          ays
        </span>
      </h2>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 ${t.bgColor} ${t.textColor} shadow-lg hover:shadow-xl`}
            >
              {/* Quote Image */}
              <div className="mb-4">
                <img src={t.quoteImage} alt="Quote" className="w-8 h-8" />
              </div>

              {/* Quote Text */}
              <p className="text-sm md:text-base mb-6 leading-relaxed text-left">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-300 my-4" />

              {/* Author */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="text-left">
                  <p className="font-semibold text-sm md:text-base">{t.name}</p>
                  <p className="text-xs md:text-sm opacity-70">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center gap-2">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
          <span className="w-2.5 h-2.5 bg-blue-300 rounded-full" />
          <span className="w-2.5 h-2.5 bg-blue-300 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
