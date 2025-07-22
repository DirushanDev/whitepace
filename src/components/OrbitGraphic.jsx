import React from 'react';
import icon from '../assets/icon.png';

const OrbitGraphic = () => {
  const innerRadius = 140;
  const outerRadius = 230;
  const ballSize = 28;

  const innerAngles = [0, 90, 180, 270];
  const outerAngles = [15, 135, 225, 315, 180];

  const polarToCartesian = (radius, angleDeg) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      x: radius * Math.cos(angleRad),
      y: radius * Math.sin(angleRad),
    };
  };

  return (
    <div className="relative w-[460px] h-[460px] mx-auto xl:-mt-20">
      {/* Outer Circle */}
      <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] rounded-full border-2 border-dashed border-gray-300 transform -translate-x-1/2 -translate-y-1/2" />

      {/* Inner Circle */}
      <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] rounded-full border-2 border-dashed border-gray-300 transform -translate-x-1/2 -translate-y-1/2" />

      {/* Center Icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded shadow-lg border border-gray-100">
        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
          <img src={icon} alt="icon" className="w-6 h-6" />
        </div>
      </div>

      {/* Inner Circle Balls */}
      {innerAngles.map((angle, i) => {
        const { x, y } = polarToCartesian(innerRadius, angle);
        const colors = ['bg-blue-400', 'bg-orange-400', 'bg-blue-400', 'bg-green-500'];
        return (
          <div
            key={`inner-${i}`}
            className={`absolute w-8 h-8 ${colors[i % colors.length]} rounded-full shadow-md`}
            style={{
              left: `calc(50% + ${x}px - ${ballSize / 2}px)`,
              top: `calc(50% + ${y}px - ${ballSize / 2}px)`,
            }}
          />
        );
      })}

      {/* Outer Circle Balls */}
      {outerAngles.map((angle, i) => {
        const { x, y } = polarToCartesian(outerRadius, angle);
        const colors = ['bg-green-500', 'bg-orange-400', 'bg-yellow-400', 'bg-blue-400', 'bg-red-500'];
        return (
          <div
            key={`outer-${i}`}
            className={`absolute w-8 h-8 ${colors[i % colors.length]} rounded-full shadow-md`}
            style={{
              left: `calc(50% + ${x}px - ${ballSize / 2}px)`,
              top: `calc(50% + ${y}px - ${ballSize / 2}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default OrbitGraphic;
