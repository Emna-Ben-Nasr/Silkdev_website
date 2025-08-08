import React from 'react';

const FOMOSection: React.FC = () => {
  return (
    <section id="fomo" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ⏳ Limited Slots Open This Month!
        </h2>
        <p className="text-lg text-gray-300 mb-6">Early users get:</p>
        <ul className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <li className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-xl px-6 py-3 text-white font-semibold">
            🏅 "Founding Member" badge
          </li>
          <li className="bg-gradient-to-br from-[#1D1F34]/80 to-[#3BE8B0]/20 rounded-xl px-6 py-3 text-white font-semibold">
            💎 3 exclusive bounties unlocked
          </li>
          <li className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-xl px-6 py-3 text-white font-semibold">
            🆓 1-month pro access
          </li>
        </ul>
        {/* TODO: Countdown timer */}
        <div className="text-2xl text-[#00aac7] font-bold mb-6">[Countdown Timer]</div>
        <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">
          Claim Your Spot Now
        </button>
      </div>
    </section>
  );
};

export default FOMOSection; 