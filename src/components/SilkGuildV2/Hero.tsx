"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] py-24">
      {/* Decorative shapes */}
      <motion.div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[#00aac7]/10 blur-3xl" animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#3BE8B0]/10 blur-3xl" animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Turn Learning Into Your Greatest Quest
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Join a guild, complete real-world bounties, and level up your skills in an epic e-learning adventure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href="#final-cta" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#01737d] to-[#3BE8B0] shadow-lg hover:shadow-xl hover:scale-[1.02] transition">
              Join a Guild Now
            </Link>
            <Link href="#how" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-[#00aac7] font-semibold bg-white/10 border border-[#00aac7]/30 hover:bg-white/15 transition">
              See How It Works
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-300/90">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">100k+ quests completed</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Trusted by 500+ mentors worldwide</span>
          </motion.div>

          {/* Animated XP bar */}
          <motion.div className="mt-12 max-w-xl mx-auto">
            <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00aac7] to-[#3BE8B0]"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>XP</span>
              <span>Leveling up...</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
