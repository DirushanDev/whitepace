import React from "react";
import { SiTicktick } from "react-icons/si";
import brushUnderline from '../assets/underline.png'; // your uploaded brush image
const plans = [
  {
    title: "Free",
    price: "$0",
    head: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    title: "Personal",
    price: "$11.99",
    head: "Keep home and family on track",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    title: "Organization",
    price: "$49.99",
    head: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
];

const PricingPlans = () => {
  return (
    <section id="pricing" className="py-16 px-2 sm:px-4 bg-white text-gray-900">
     <div className="max-w-7xl mx-auto text-center">
  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
    Choose Your{' '}
    <span
      className="inline-block relative"
      style={{
        backgroundImage: `url(${brushUnderline})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 0.65em',
        backgroundPosition: '0 90%',
        paddingBottom: '0.2em',
      }}
    >
      Plan
    </span>
  </h2>
  <p className="text-gray-600 mb-12 max-w-xl mx-auto">
    Whether you want to get organized, keep your personal life on track,
    or boost workplace productivity, Evernote has the right plan for you.
  </p>
</div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] md:w-[280px] lg:w-[320px] xl:w-[380px]
                       flex flex-col justify-between border border-amber-300 
                       rounded-lg p-6 text-left transition-all duration-300 
                       group hover:-translate-y-2 hover:shadow-xl 
                       hover:bg-blue-900 hover:text-white"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              {plan.title}
            </h3>
            <p className="text-3xl font-bold mb-4 group-hover:text-amber-300 transition-colors duration-300">
              {plan.price}
            </p>
            <p className="text-base font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              {plan.head}
            </p>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 group-hover:text-white transition-colors duration-300"
                >
                  <SiTicktick className="w-4 h-4 mt-1 group-hover:text-amber-300 transition-colors duration-300 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className="
    mt-6
    py-2
    px-6                
    rounded
    bg-white
    border border-amber-300
    group-hover:border-0
    group-hover:bg-blue-500
    group-hover:transition-colors
    duration-300
    block               
    mx-auto 
    mr-200            
    text-center         
    min-w-[150px]       
  "
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
