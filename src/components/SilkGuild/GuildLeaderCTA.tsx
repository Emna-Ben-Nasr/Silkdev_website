"use client"
import React from 'react';
import { motion } from 'framer-motion';

const GuildLeaderCTA: React.FC = () => {
  return (
    <section id="guild-leader" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Full-width horizontal card with clearer background */}
          <div className="relative bg-gradient-to-br from-[#00aac7]/20 via-[#3BE8B0]/15 to-[#B8A1FF]/10 border border-[#00aac7]/30 rounded-2xl p-8 shadow-2xl backdrop-blur-lg overflow-hidden group">
            {/* Border accent - now visible initially */}
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
                  🧙‍♂️
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Want to Lead a Guild?
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-300 mb-6 max-w-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Passionate about a topic? Create a learning guild, design quests, and mentor others on their journey to mastery.
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
                    { icon: "🎯", text: "Design Quests" },
                    { icon: "👥", text: "Mentor Others" },
                    { icon: "🏆", text: "Build Community" }
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

              {/* Right side - CTA Button */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-[#3BE8B0] to-[#00aac7] hover:from-[#2dd4a0] hover:to-[#01737d] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-[#00aac7]/30 focus:outline-none"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 25px #3be8b0, 0 8px 30px #00aac7aa"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Become a Guild Leader
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuildLeaderCTA; 