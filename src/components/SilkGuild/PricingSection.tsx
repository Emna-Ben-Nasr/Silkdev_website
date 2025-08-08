import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          🎁 Start Free. Upgrade Anytime.
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/10 rounded-2xl shadow-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 text-lg text-white font-bold">Plan</th>
                <th className="py-4 px-6 text-lg text-white font-bold">Features</th>
                <th className="py-4 px-6 text-lg text-white font-bold">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 text-2xl">🎮 Free</td>
                <td className="py-4 px-6 text-white">Access guilds, basic bounties, XP & badges</td>
                <td className="py-4 px-6 text-[#00e396] font-bold text-xl">$0</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-2xl">⚔️ Pro</td>
                <td className="py-4 px-6 text-white">Advanced quests, leaderboards, mentorship, pro badges</td>
                <td className="py-4 px-6 text-[#3BE8B0] font-bold text-xl">$9/month</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-2xl">🏰 Guild Leader</td>
                <td className="py-4 px-6 text-white">Create guilds, manage bounties, community tools</td>
                <td className="py-4 px-6 text-[#00aac7] font-bold text-xl">Free with application</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <button className="bg-[#00e396] hover:bg-[#00aac7] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">
            Try Free
          </button>
          <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">
            Go Pro
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 