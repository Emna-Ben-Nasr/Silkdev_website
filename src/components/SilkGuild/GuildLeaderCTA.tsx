import React from 'react';

const GuildLeaderCTA: React.FC = () => {
  return (
    <section id="guild-leader" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🧙‍♂️ Want to Lead a Guild?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Passionate about a topic? Create a learning guild, design quests, and mentor others.
        </p>
        <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">
          Become a Guild Leader
        </button>
      </div>
    </section>
  );
};

export default GuildLeaderCTA; 