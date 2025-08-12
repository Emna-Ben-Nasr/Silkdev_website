"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { icon: "🛡", title: "Guilds & Community", short: "Learn and grow with like-minded peers.", long: "Join active guilds where collaboration, mentorship, and accountability keep you moving forward every day." },
  { icon: "🎯", title: "Bounties That Matter", short: "Real paid opportunities aligned to your skills.", long: "Work on meaningful challenges. Earn rewards, build portfolio pieces, and connect with companies and creators." },
  { icon: "📜", title: "Structured Learning Paths", short: "Level up through tailored quests.", long: "Follow curated roadmaps from beginner to advanced, split into quests with clear objectives and outcomes." },
  { icon: "🏆", title: "Progress Tracking & Rewards", short: "Earn XP, badges, and unlock new challenges.", long: "See your growth visualized. Unlock rare titles and special guild roles as your skills progress." },
];

const ValueProps: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center text-3xl md:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Why SILKGUILD?
        </motion.h2>
        <motion.p className="text-center text-gray-300 max-w-3xl mx-auto mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          The platform that turns learning into an adventure and opportunity into reality.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((card, index) => (
            <motion.button
              key={card.title}
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="group text-left bg-gradient-to-br from-[#0e1824]/90 via-[#112033]/80 to-[#0e1824]/90 border border-[#00aac7]/20 rounded-2xl p-6 hover:border-[#00aac7]/50 transition focus:outline-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="text-3xl mb-3 opacity-90">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.short}</p>
              <AnimatePresence initial={false}>
                {expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="h-3" />
                    <p className="text-gray-300/90 text-sm leading-relaxed">
                      {card.long}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-4 text-sm text-[#3BE8B0] font-semibold opacity-90">Tap to {expanded === index ? "collapse" : "learn more"} →</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
