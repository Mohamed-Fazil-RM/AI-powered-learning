import React from 'react';

const TrustStrip: React.FC = () => {
  const logos = [
    'Microsoft', 'Google', 'Amazon', 'Stanford', 'MIT', 'Harvard'
  ];

  return (
    <div className="py-12 px-6 border-y border-gray-100 bg-gray-50/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          Trusted by learners from top innovators
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl font-black font-display tracking-tighter text-gray-900">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;