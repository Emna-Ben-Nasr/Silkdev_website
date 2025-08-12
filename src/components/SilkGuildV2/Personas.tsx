"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const personas = [
  { icon: "🎓", title: "Students", desc: "Gain real skills, join your first guild, and work on real projects.", cta: "Find Your First Quest", href: "#bounties" },
  { icon: "💼", title: "Professionals", desc: "Sharpen expertise and earn through bounties.", cta: "See Available Bounties", href: "#bounties" },
  { icon: "🧙", title: "Mentors & Teachers", desc: "Guide adventurers, create quests, and shape careers.", cta: "Become a Mentor", href: "#final-cta" },
];

const Personas: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center text-3xl md:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Who It's For
        </motion.h2>
        <motion.p className="text-center text-gray-300 max-w-3xl mx-auto mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Personalized paths for every adventurer — whether you're just starting or leading the way.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, index) => (
            <motion.div
              key={p.title}
              className="bg-gradient-to-br from-[#0e1824]/90 via-[#112033]/80 to-[#0e1824]/90 border border-[#00aac7]/20 rounded-2xl p-6 hover:border-[#00aac7]/50 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3 opacity-90">{p.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-6">{p.desc}</p>
              <Link href={p.href} className="inline-flex items-center px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#01737d] to-[#3BE8B0] hover:scale-[1.02] transition">
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;
