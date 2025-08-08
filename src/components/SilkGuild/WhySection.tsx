import React from 'react';

const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          😩 Tired of Boring Courses?
        </h2>
        <h3 className="text-xl text-[#00aac7] mb-8">
          🎯 Here's What Makes SILKGUILD Different:
        </h3>
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-6">
          {/* TODO: Replace with icons/illustrations */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🏰</div>
            <div className="font-semibold text-white">Guild-Based Learning</div>
            <div className="text-gray-300 text-sm">Learn in communities, not isolation.</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="font-semibold text-white">Bounty System</div>
            <div className="text-gray-300 text-sm">Take on real-world challenges, earn XP and rewards.</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🛡️</div>
            <div className="font-semibold text-white">RPG Mechanics</div>
            <div className="text-gray-300 text-sm">Level up, collect badges, unlock titles.</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🗺️</div>
            <div className="font-semibold text-white">Structured Paths</div>
            <div className="text-gray-300 text-sm">Follow curated roadmaps for your goals.</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🧠</div>
            <div className="font-semibold text-white">Micro-Challenges</div>
            <div className="text-gray-300 text-sm">Short, engaging tasks to keep you motivated.</div>
          </div>
        </div>
        <div className="text-[#00e396] font-semibold text-lg mt-4">
          ✅ Join 10,000+ learners who've already turned study-time into play-time.
        </div>
      </div>
    </section>
  );
};

export default WhySection; 