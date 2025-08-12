"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-6">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-[#00aac7]/20 via-[#3BE8B0]/15 to-transparent border border-[#00aac7]/30 rounded-3xl p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-3xl md:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            The journey begins now. Ready to join your guild?
          </motion.h2>
          <motion.p className="text-gray-300 max-w-2xl mx-auto mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Create your character, find your guild, and start gaining XP today.
          </motion.p>
          <div className="mt-8 flex justify-center">
            <Link href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#01737d] to-[#3BE8B0] shadow-lg hover:shadow-xl hover:scale-[1.02] transition">
              Join the Adventure
            </Link>
          </div>

          {/* subtle glow */}
          <motion.div className="absolute -inset-10 bg-gradient-to-t from-[#00aac7]/10 to-transparent" initial={{ opacity: 0.4 }} animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 6, repeat: Infinity }} />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
