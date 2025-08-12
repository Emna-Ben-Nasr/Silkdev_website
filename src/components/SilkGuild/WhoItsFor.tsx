"use client"
import React from 'react';
import { motion } from 'framer-motion';

const WhoItsFor: React.FC = () => {
  const personas = [
    {
      title: 'Students',
      icon: '👩‍🎓',
      benefits: [
        'Build portfolio while learning',
        'Join beginner-friendly guilds',
        'Peer-to-peer support',
        'Structured learning paths'
      ],
      cta: 'See Student Success Stories'
    },
    {
      title: 'Professionals',
      icon: '🧑‍💼',
      benefits: [
        'Upskill without burnout',
        'Get ranked in advanced paths',
        'Industry-grade challenges',
        'Expert mentorship'
      ],
      cta: 'See Professional Tracks'
    }
  ];

  return (
    <section id="who" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">For Learners at Every Stage</h2>
        <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
          Whether you’re getting started or advancing your craft, SILKGUILD gives you community, real challenges, and mentorship to grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {personas.map((persona, idx) => (
            <motion.div
              key={persona.title}
              className="relative bg-gradient-to-br from-[#1D1F34]/95 via-[#163C53]/90 to-[#00aac7]/20 border border-[#00aac7]/20 rounded-2xl p-10 shadow-2xl backdrop-blur-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ boxShadow: '0 0 0 3px #00aac7, 0 10px 40px #3be8b0aa' }}
            >
              {/* Removed extra hover border overlay to avoid double borders */}

              <div className="relative z-10 text-center">
                {/* Centered Icon and Title */}
                <div className="text-4xl mb-4">{persona.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-6">{persona.title}</h3>

                {/* Benefits styled like Silklabs pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {persona.benefits.map((benefit) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center bg-white/5 rounded-lg px-4 py-3 hover:bg-[#00aac7]/10 transition-all duration-300 shadow-sm"
                      whileHover={{ scale: 1.03, boxShadow: '0 4px 20px #00aac733' }}
                    >
                      <div className="w-2 h-2 bg-[#3be8b0] rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-200 text-sm font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Centered CTA Button */}
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-[#00aac7]/30 focus:outline-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {persona.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor; 