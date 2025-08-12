"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "120k+", label: "Quests Completed" },
  { value: "$500k+", label: "Earned via Bounties" },
  { value: "95%", label: "Learner Satisfaction" },
];

const partners = ["Truvado", "Wolves", "Nexus", "Silkdev", "Labs"];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 className="text-3xl md:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Trusted by Learners and Mentors Worldwide
            </motion.h2>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <motion.div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-gray-300 mb-4">Partner companies hiring from SILKGUILD</div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#163C53] to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#163C53] to-transparent pointer-events-none" />
              <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
                {partners.map((p, i) => (
                  <motion.div key={p} className="min-w-[140px] h-20 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                    {p}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
