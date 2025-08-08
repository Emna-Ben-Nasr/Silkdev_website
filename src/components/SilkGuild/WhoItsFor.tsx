import React from 'react';

const WhoItsFor: React.FC = () => {
  return (
    <section id="who" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          👥 For Learners at Every Stage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="text-3xl mb-2">👩‍🎓 Students</div>
            <ul className="text-gray-300 text-left mb-4">
              <li>• Build portfolio while learning</li>
              <li>• Join beginner-friendly guilds</li>
              <li>• Peer-to-peer support</li>
            </ul>
            <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">
              See Student Success Stories
            </button>
          </div>
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#3BE8B0]/20 rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="text-3xl mb-2">🧑‍💼 Professionals</div>
            <ul className="text-gray-300 text-left mb-4">
              <li>• Upskill without burnout</li>
              <li>• Get ranked in advanced paths</li>
              <li>• Industry-grade challenges</li>
            </ul>
            <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">
              See Professional Tracks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor; 