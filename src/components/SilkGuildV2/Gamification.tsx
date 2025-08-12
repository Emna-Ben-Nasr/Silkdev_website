"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "🎮", title: "Level progression system" },
  { icon: "🏅", title: "Achievements & rare badges" },
  { icon: "🗺", title: "Unlockable guild territories" },
  { icon: "📊", title: "Personal progress dashboard" },
];

const Gamification: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center text-3xl md:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Gamification Features
        </motion.h2>
        <motion.p className="text-center text-gray-300 max-w-3xl mx-auto mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Learning that feels like a game, with rewards that fuel your growth.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="text-white font-semibold">{f.title}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-gray-300 text-sm mb-2">
            <span>Progress Preview</span>
            <span>20% complete</span>
          </div>
          <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden border border-white/10">
            <motion.div className="h-full bg-gradient-to-r from-[#00aac7] to-[#3BE8B0]" initial={{ width: 0 }} whileInView={{ width: "20%" }} viewport={{ once: true }} transition={{ duration: 1 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;
