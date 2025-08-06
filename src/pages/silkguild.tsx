import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../app/globals.css';

const silkguild: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      {/* NavBar with SILKGUILD branding */}
      <NavBar brandName="SILKGUILD" showNavigation={true} ctaText="Start Your Journey" ctaLink="#" />

      {/* 1. Hero Section */}
      <section id="hero" className="py-24 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Headline, subheadline, CTA buttons, RPG animation/visual */}
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Learning, But Actually Engaging.</h1>
          <h2 className="text-xl md:text-2xl text-[#00aac7] mb-8">🎮 Education meets RPG. Progress through quests. Join guilds. Earn rewards.<br/>Whether you're a student or a pro — learning is now a game worth playing.</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Start Your Learning Journey</button>
            <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Watch Demo</button>
          </div>
          {/* TODO: RPG-style animation/visual here */}
          <div className="w-full flex justify-center items-center min-h-[200px]">
            {/* Placeholder for RPG animation/illustration */}
            <div className="w-64 h-40 bg-gradient-to-br from-[#00aac7]/30 to-[#7c3aed]/30 rounded-2xl flex items-center justify-center text-2xl text-white opacity-60">[RPG Animation]</div>
          </div>
        </div>
      </section>

      {/* 2. Why SILKGUILD? (Painkiller) Section */}
      <section id="why" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Title, features with icons, CRO boost */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">😩 Tired of Boring Courses?</h2>
          <h3 className="text-xl text-[#00aac7] mb-8">🎯 Here’s What Makes SILKGUILD Different:</h3>
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
          <div className="text-[#00e396] font-semibold text-lg mt-4">✅ Join 10,000+ learners who’ve already turned study-time into play-time.</div>
        </div>
      </section>

      {/* 3. How It Works – In 3 Steps */}
      <section id="how" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Title, 3 steps, CTA */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">📚 Learn Like It’s a Quest</h2>
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
            <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Start Leveling Up</button>
          </div>
        </div>
      </section>

      {/* 4. Who It's For – Student or Pro? */}
      <section id="who" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Title, comparison grid, micro-CTAs */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">👥 For Learners at Every Stage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-8 shadow-lg flex flex-col items-center">
              <div className="text-3xl mb-2">👩‍🎓 Students</div>
              <ul className="text-gray-300 text-left mb-4">
                <li>• Build portfolio while learning</li>
                <li>• Join beginner-friendly guilds</li>
                <li>• Peer-to-peer support</li>
              </ul>
              <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">See Student Success Stories</button>
            </div>
            <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#3BE8B0]/20 rounded-2xl p-8 shadow-lg flex flex-col items-center">
              <div className="text-3xl mb-2">🧑‍💼 Professionals</div>
              <ul className="text-gray-300 text-left mb-4">
                <li>• Upskill without burnout</li>
                <li>• Get ranked in advanced paths</li>
                <li>• Industry-grade challenges</li>
              </ul>
              <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">See Professional Tracks</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof – Testimonials & Stats */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Title, testimonials, stats grid */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">💬 What Our Guild Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-white mb-2">“I never finished online courses before SILKGUILD. Now I’ve completed 6 tracks and made 3 friends along the way.”</p>
              <div className="text-[#00aac7] font-semibold">— Layla, CS student</div>
            </div>
            <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#3BE8B0]/20 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-white mb-2">“It’s Duolingo meets World of Warcraft meets LinkedIn.”</p>
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

      {/* 6. Guild Leader Call-to-Action */}
      <section id="guild-leader" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Title, copy, CTA */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🧙‍♂️ Want to Lead a Guild?</h2>
          <p className="text-lg text-gray-300 mb-8">Passionate about a topic? Create a learning guild, design quests, and mentor others.</p>
          <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Become a Guild Leader</button>
        </div>
      </section>

      {/* 7. FOMO / Limited-Time Offer Section */}
      <section id="fomo" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Title, offer, timer, CTA */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">⏳ Limited Slots Open This Month!</h2>
          <p className="text-lg text-gray-300 mb-6">Early users get:</p>
          <ul className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <li className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-xl px-6 py-3 text-white font-semibold">🏅 “Founding Member” badge</li>
            <li className="bg-gradient-to-br from-[#1D1F34]/80 to-[#3BE8B0]/20 rounded-xl px-6 py-3 text-white font-semibold">💎 3 exclusive bounties unlocked</li>
            <li className="bg-gradient-to-br from-[#1D1F34]/80 to-[#00aac7]/20 rounded-xl px-6 py-3 text-white font-semibold">🆓 1-month pro access</li>
          </ul>
          {/* TODO: Countdown timer */}
          <div className="text-2xl text-[#00aac7] font-bold mb-6">[Countdown Timer]</div>
          <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Claim Your Spot Now</button>
        </div>
      </section>

      {/* 8. Pricing (Freemium Optimized) */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Title, pricing table, CTAs */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">🎁 Start Free. Upgrade Anytime.</h2>
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
            <button className="bg-[#00e396] hover:bg-[#00aac7] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Try Free</button>
            <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Go Pro</button>
          </div>
        </div>
      </section>

      {/* 9. Final CRO-Optimized CTA */}
      <section id="final-cta" className="py-24 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        {/* TODO: Epic journey visual, motivational line, CTA */}
        <div className="container mx-auto text-center">
          <div className="w-full flex justify-center items-center min-h-[200px] mb-8">
            {/* Placeholder for epic journey/map visual */}
            <div className="w-64 h-40 bg-gradient-to-br from-[#00aac7]/30 to-[#7c3aed]/30 rounded-2xl flex items-center justify-center text-2xl text-white opacity-60">[Epic Map Visual]</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🚀 The Journey to Mastery Starts with a Single Quest.</h2>
          <p className="text-lg text-gray-300 mb-8">Stop scrolling. Start leveling up.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#00aac7] hover:bg-[#01737d] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Start Learning Now</button>
            <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Explore Guilds</button>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <Footer />
    </main>
  );
};

export default silkguild;