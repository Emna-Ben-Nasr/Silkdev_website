import React from 'react';
import { motion } from 'framer-motion';
import mission from '../assets/mission.webp';
import Image from 'next/image';

const Mission: React.FC = () => (
  <section className="py-32 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] flex items-center justify-center min-h-screen">
    <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-[#F8F8F9] mb-6 tracking-tight">
            Our Mission
          </h2>
          <p className="text-xl text-[#F8F8F9]/90 leading-relaxed mb-4">
            We craft innovative solutions to bridge gaps, empower progress, and shape a future where possibilities are limitless.
          </p>
          <p className="text-lg text-[#F8F8F9]/80 leading-relaxed">
            At the heart of our work is a commitment to building what’s missing—tools, ideas, and systems that drive meaningful change and unlock new opportunities for everyone.
          </p>
        </div>

        {/* Image Content */}
        <motion.div
          className="relative w-full h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#00aac7]/50"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        >
          <Image
            src={mission}
            alt="Mission Illustration"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1F34]/60 to-transparent"></div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Mission;