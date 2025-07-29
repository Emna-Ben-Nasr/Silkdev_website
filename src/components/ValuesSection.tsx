import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Innovation',
    description: 'We challenge the status quo and embrace creative solutions.'
  },
  {
    title: 'Integrity',
    description: 'We act with honesty, transparency, and respect.'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and shared success.'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.'
  }
];

const ValuesSection = () => (
  <section className="relative bg-[#f8fafc] text-[#1e293b] py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
    {/* Fluid SVG Shape Divider */}
    <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none z-10">
      <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-40">
        <path
          d="M0,96 C360,180 1080,0 1440,96 L1440,0 L0,0 Z"
          fill="url(#gradient)"
          fillOpacity="1"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D1F34" />
            <stop offset="0.5" stopColor="#163C53" />
            <stop offset="1" stopColor="#00aac7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <motion.div
      className="relative z-20 max-w-6xl mx-auto flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {values.map((value, idx) => (
          <motion.div
            key={value.title}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-[#00aac7]/20 hover:border-[#00aac7] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-2 text-[#00aac7]">{value.title}</h3>
            <p className="text-base text-gray-700 text-center">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ValuesSection; 