"use client"
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-24 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Epic Map Visual */}
          <div className="w-full flex justify-center items-center min-h-[300px] mb-12">
            <motion.div 
              className="relative w-full max-w-4xl h-80 bg-gradient-to-br from-[#1D1F34]/80 via-[#163C53]/60 to-[#00aac7]/20 rounded-3xl border border-[#00aac7]/30 shadow-2xl backdrop-blur-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 800 400">
                  {/* Grid Pattern */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00aac7" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                    <radialGradient id="guildGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3BE8B0" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#3BE8B0" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"/>
                  
                  {/* Mountain Ranges */}
                  <motion.path
                    d="M 0 300 Q 200 250 400 280 Q 600 320 800 290 L 800 400 L 0 400 Z"
                    fill="#163C53"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  
                  {/* Quest Paths */}
                  <motion.path
                    d="M 100 350 Q 300 200 500 250 Q 700 300 750 180"
                    fill="none"
                    stroke="#00aac7"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 1 }}
                  />
                  
                  {/* Guild Locations */}
                  <motion.circle
                    cx="150"
                    cy="320"
                    r="8"
                    fill="url(#guildGlow)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  />
                  <motion.circle
                    cx="400"
                    cy="280"
                    r="8"
                    fill="url(#guildGlow)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                  />
                  <motion.circle
                    cx="650"
                    cy="200"
                    r="8"
                    fill="url(#guildGlow)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.8, delay: 1.9 }}
                  />
                  
                  {/* Floating Particles */}
                  <motion.circle
                    cx="200"
                    cy="150"
                    r="2"
                    fill="#3BE8B0"
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                  />
                  <motion.circle
                    cx="500"
                    cy="100"
                    r="2"
                    fill="#00aac7"
                    animate={{ 
                      y: [0, -15, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  />
                  <motion.circle
                    cx="700"
                    cy="120"
                    r="2"
                    fill="#B8A1FF"
                    animate={{ 
                      y: [0, -25, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
                  />
                </svg>
              </div>
              
              {/* Map Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <div className="text-2xl font-bold mb-2">🗺️ Your Learning Journey Awaits</div>
                  <div className="text-sm opacity-80">Join guilds, complete quests, level up</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* CTA Card - Same style as GuildLeaderCTA */}
          <div className="relative bg-gradient-to-br from-[#00aac7]/20 via-[#3BE8B0]/15 to-[#B8A1FF]/10 border border-[#00aac7]/30 rounded-2xl p-8 shadow-2xl backdrop-blur-lg overflow-hidden group">
            {/* Border accent */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-[#00aac7] transition-all duration-300"
              aria-hidden
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left side - Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  className="text-4xl mb-4 md:mb-6"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  🚀
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  The Journey to Mastery Starts with a Single Quest
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-300 mb-6 max-w-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Stop scrolling. Start leveling up. Join thousands of learners who are already on their path to mastery.
                </motion.p>

                {/* Benefits row */}
                <motion.div 
                  className="flex flex-wrap gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {[
                    { icon: "⚡", text: "Start Free" },
                    { icon: "🎯", text: "Join Guilds" },
                    { icon: "🏆", text: "Level Up" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center bg-white/10 rounded-lg px-3 py-2 hover:bg-[#00aac7]/20 transition-all duration-300"
                      whileHover={{ scale: 1.05, boxShadow: "0 4px 15px #00aac733" }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      <span className="text-lg mr-2">{item.icon}</span>
                      <span className="text-gray-200 font-medium text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right side - CTA Buttons */}
              <motion.div 
                className="flex-shrink-0 flex flex-col gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-[#00aac7] to-[#01737d] hover:from-[#01737d] hover:to-[#00aac7] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-[#00aac7]/30 focus:outline-none"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 25px #00aac7, 0 8px 30px #01737daa"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start Learning Now
                </motion.button>
                {/* <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-[#3BE8B0] to-[#179e7e] hover:from-[#179e7e] hover:to-[#3BE8B0] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-[#3BE8B0]/30 focus:outline-none"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 25px #3BE8B0, 0 8px 30px #179e7eaa"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Guilds
                </motion.button> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA; 