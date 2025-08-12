"use client";
import React from "react";
import { motion } from "framer-motion";

const feed = [
  { user: "Lina", action: "completed", item: "UI Design Quest", xp: "+120 XP" },
  { user: "Omar", action: "joined", item: "Frontend Guild", xp: "+50 XP" },
  { user: "Sami", action: "earned", item: "Rare Badge: Architect", xp: "+300 XP" },
];

const testimonials = [
  { quote: "SILKGUILD turned my learning into a fun game – and I got my first freelance gig!", author: "Lina, Student" },
  { quote: "The bounty system kept me motivated and the community is fantastic.", author: "Yassine, Professional" },
  { quote: "Mentoring here is rewarding and impactful.", author: "Noura, Mentor" },
];

const Community: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center text-3xl md:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Community & Guild Life
        </motion.h2>
        <motion.p className="text-center text-gray-300 max-w-3xl mx-auto mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Learn together, celebrate wins, and rise through the ranks.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Feed */}
          <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-white font-bold mb-4">Live Feed</h3>
            <div className="space-y-3">
              {feed.map((f, i) => (
                <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-gray-200"><span className="text-white font-semibold">{f.user}</span> {f.action} <span className="text-white">{f.item}</span></div>
                  <div className="text-[#3BE8B0] font-semibold text-sm">{f.xp}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-white font-bold mb-4">Guild Leaderboard</h3>
            <ol className="space-y-3 text-gray-200">
              <li className="flex items-center justify-between"><span>⚔️ Frontend Guild</span><span className="text-[#3BE8B0] font-semibold">12,540 XP</span></li>
              <li className="flex items-center justify-between"><span>🛡 Backend Guild</span><span className="text-[#3BE8B0] font-semibold">10,980 XP</span></li>
              <li className="flex items-center justify-between"><span>🧙 Design Guild</span><span className="text-[#3BE8B0] font-semibold">9,120 XP</span></li>
            </ol>
          </motion.div>

          {/* Testimonials */}
          <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-white font-bold mb-4">What Adventurers Say</h3>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <blockquote key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-200">
                  <p className="mb-2">“{t.quote}”</p>
                  <cite className="text-gray-400 text-sm">— {t.author}</cite>
                </blockquote>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
