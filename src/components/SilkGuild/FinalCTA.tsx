import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-24 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <div className="w-full flex justify-center items-center min-h-[200px] mb-8">
          {/* Placeholder for epic journey/map visual */}
          <div className="w-64 h-40 bg-gradient-to-br from-[#00aac7]/30 to-[#7c3aed]/30 rounded-2xl flex items-center justify-center text-2xl text-white opacity-60">
            [Epic Map Visual]
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🚀 The Journey to Mastery Starts with a Single Quest.
        </h2>
        <p className="text-lg text-gray-300 mb-8">Stop scrolling. Start leveling up.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">
            Start Learning Now
          </button>
          <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">
            Explore Guilds
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 