"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Create Your Character", desc: "Build your profile and choose your starting guild.", num: "1" },
  { title: "Embark on Quests", desc: "Learn skills, complete challenges, earn XP.", num: "2" },
  { title: "Claim Your Rewards", desc: "Unlock badges, level up, and land bounties.", num: "3" },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center text-3xl md:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          How It Works
        </motion.h2>
        <motion.p className="text-center text-gray-300 max-w-3xl mx-auto mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Start your journey in three simple steps.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, index) => (
            <motion.div
              key={s.title}
              className="relative bg-gradient-to-br from-[#0e1824]/90 via-[#112033]/80 to-[#0e1824]/90 border border-[#00aac7]/20 rounded-2xl p-8 hover:border-[#00aac7]/50 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#01737d] to-[#3BE8B0] text-white font-bold flex items-center justify-center border border-white/20">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
