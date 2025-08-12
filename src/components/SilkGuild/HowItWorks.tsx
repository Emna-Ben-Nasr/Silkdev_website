"use client"
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const howItWorks = [
    {
      step: 1,
      title: "Choose Your Guild",
      description: "Join a community focused on Web Dev, AI, Design, Marketing, or any skill you want to master.",
      icon: "🏰"
    },
    {
      step: 2,
      title: "Accept Learning Bounties",
      description: "Complete bite-sized challenges or long-term projects. Earn XP and build your portfolio.",
      icon: "🎯"
    },
    {
      step: 3,
      title: "Level Up & Earn Rewards",
      description: "Track your progress, rise in ranks, and get verified skill badges that prove your expertise.",
      icon: "🏆"
    }
  ];

  return (
    <section id="how" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn Like It's a Quest
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Embark on your learning journey with our RPG-style progression system.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#01737d] via-[#3be8b0] to-[#00aac7]/30 rounded-full z-0" style={{ transform: 'translateX(-50%)' }} />
          <div className="flex flex-col gap-16 relative z-10">
            {howItWorks.map((step, idx) => {
              // Left-right-left pattern
              const isLeft = idx % 2 === 0;
              return (
                <div key={step.step} className="flex flex-col md:flex-row items-center md:items-stretch w-full">
                  {/* Left Side */}
                  <div className={`md:w-1/2 flex ${isLeft ? 'justify-end' : 'justify-center'} md:pr-8`}>
                    {isLeft && (
                      <motion.div
                        className="relative bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl p-8 text-center shadow-xl hover:border-[#00aac7]/50 transition-all duration-300 w-full max-w-md"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#01737d] to-[#3be8b0] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                          {step.step}
                        </div>
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </motion.div>
                    )}
                  </div>
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center md:w-0 md:px-0 px-0">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#01737d] to-[#3be8b0] border-4 border-[#1D1F34] flex items-center justify-center z-20 shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                      <span className="block w-2 h-2 bg-white rounded-full"></span>
                    </motion.div>
                    {/* Vertical connector except last */}
                    {idx < howItWorks.length - 1 && (
                      <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-[#01737d] via-[#3be8b0] to-[#00aac7]/30 mx-auto"></div>
                    )}
                  </div>
                  {/* Right Side */}
                  <div className={`md:w-1/2 flex ${!isLeft ? 'justify-start' : 'justify-center'} md:pl-8 mt-8 md:mt-0`}>
                    {!isLeft && (
                      <motion.div
                        className="relative bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl p-8 text-center shadow-xl hover:border-[#00aac7]/50 transition-all duration-300 w-full max-w-md"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#01737d] to-[#3be8b0] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                          {step.step}
                        </div>
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* CTA Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Leveling Up
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 