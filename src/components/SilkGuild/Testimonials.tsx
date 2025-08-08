import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          💬 What Our Guild Members Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-white mb-2">
              "I never finished online courses before SILKGUILD. Now I've completed 6 tracks and made 3 friends along the way."
            </p>
            <div className="text-[#00aac7] font-semibold">— Layla, CS student</div>
          </div>
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#3BE8B0]/20 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-white mb-2">
              "It's Duolingo meets World of Warcraft meets LinkedIn."
            </p>
            <div className="text-[#3BE8B0] font-semibold">— Adrian, UX Designer</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-6 shadow-md">
            <div className="text-2xl">🎮</div>
            <div className="font-bold text-white">92% completion rate on quests</div>
          </div>
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#3BE8B0]/20 rounded-2xl p-6 shadow-md">
            <div className="text-2xl">🌐</div>
            <div className="font-bold text-white">10k+ active learners</div>
          </div>
          <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-6 shadow-md">
            <div className="text-2xl">🏆</div>
            <div className="font-bold text-white">87% feel more engaged than with traditional platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 