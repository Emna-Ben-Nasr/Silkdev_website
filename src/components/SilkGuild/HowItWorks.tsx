import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          📚 Learn Like It's a Quest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="text-4xl mb-4">1️⃣</div>
            <div className="font-bold text-white mb-2">Choose Your Guild</div>
            <div className="text-gray-300">Join a community focused on Web Dev, AI, Design, Marketing, etc.</div>
          </div>
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="text-4xl mb-4">2️⃣</div>
            <div className="font-bold text-white mb-2">Accept Learning Bounties</div>
            <div className="text-gray-300">Complete bite-sized challenges or long-term projects. Earn XP.</div>
          </div>
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="text-4xl mb-4">3️⃣</div>
            <div className="font-bold text-white mb-2">Level Up & Earn Rewards</div>
            <div className="text-gray-300">Track your progress, rise in ranks, get verified skill badges.</div>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">
            Start Leveling Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 