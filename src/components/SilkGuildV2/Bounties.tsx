"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const samples = [
  { company: "Truvado", title: "Frontend Guild Apprentice", reward: "$450", level: "Beginner", tags: ["React", "UI"], deadline: "6d" },
  { company: "Wolves", title: "UI Design Quest", reward: "$600", level: "Intermediate", tags: ["Figma", "Design"], deadline: "4d" },
  { company: "Silkdev", title: "AI Chatbot Sprint", reward: "$900", level: "Advanced", tags: ["Node", "AI"], deadline: "10d" },
  { company: "Nexus", title: "Dashboard Refactor", reward: "$700", level: "Intermediate", tags: ["Typescript", "Next.js"], deadline: "7d" },
  { company: "GuildCo", title: "Mobile UI Kit", reward: "$550", level: "Intermediate", tags: ["React Native", "UX"], deadline: "5d" },
  { company: "Labs", title: "Landing Page A/B", reward: "$380", level: "Beginner", tags: ["CRO", "Tailwind"], deadline: "3d" },
];

const Bounties: React.FC = () => {
  return (
    <section id="bounties" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center text-3xl md:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Bounties & Opportunities
        </motion.h2>
        <motion.p className="text-center text-gray-300 max-w-3xl mx-auto mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Real challenges with real rewards. Preview a few quests below.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samples.map((b, index) => (
            <motion.div
              key={`${b.company}-${index}`}
              className="group bg-gradient-to-br from-[#0e1824]/90 via-[#112033]/80 to-[#0e1824]/90 border border-[#00aac7]/20 rounded-2xl p-6 hover:border-[#00aac7]/50 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{b.title}</h3>
                <span className="text-[#3BE8B0] font-semibold">{b.reward}</span>
              </div>
              <div className="mt-1 text-sm text-gray-400">{b.company} • {b.level} • {b.deadline} left</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {b.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-gray-400 text-xs">Members see full details</div>
                <button className="px-3 py-1.5 rounded-md text-white text-sm bg-gradient-to-r from-[#01737d] to-[#3BE8B0]">Apply</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="#final-cta" className="inline-flex items-center px-6 py-3 rounded-xl text-white font-semibold bg-white/5 border border-[#00aac7]/30 hover:bg-white/10 transition">
            Browse All Bounties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bounties;
