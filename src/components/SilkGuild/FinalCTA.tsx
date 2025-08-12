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
          {/* Animated Skill Tree/Progress Map */}
          <div className="w-full flex justify-center items-center min-h-[400px] mb-12">
            <motion.div 
              className="relative w-full max-w-5xl h-96 bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/20 rounded-3xl border border-[#00aac7]/30 shadow-2xl backdrop-blur-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 1000 400">
                  <defs>
                    <pattern id="skillGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00aac7" strokeWidth="1" opacity="0.3"/>
                    </pattern>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3BE8B0" stopOpacity="0.8"/>
                      <stop offset="70%" stopColor="#3BE8B0" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#3BE8B0" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="pathGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00aac7" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#00aac7" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#skillGrid)"/>
                </svg>
              </div>

              {/* Central Start Node */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#3BE8B0] to-[#00aac7] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white/20">
                  🚀
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold">
                  Start Here
                </div>
              </motion.div>

              {/* Skill Paths */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400">
                {/* Path to Frontend */}
                <motion.path
                  d="M 500 200 Q 300 150 200 100"
                  fill="none"
                  stroke="url(#pathGlow)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                
                {/* Path to Backend */}
                <motion.path
                  d="M 500 200 Q 700 150 800 100"
                  fill="none"
                  stroke="url(#pathGlow)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
                
                {/* Path to AI/ML */}
                <motion.path
                  d="M 500 200 Q 400 50 500 50"
                  fill="none"
                  stroke="url(#pathGlow)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.4 }}
                />
                
                {/* Path to Design */}
                <motion.path
                  d="M 500 200 Q 600 50 700 50"
                  fill="none"
                  stroke="url(#pathGlow)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.6 }}
                />
              </svg>

              {/* Skill Nodes */}
              {[
                { x: 200, y: 100, icon: "⚛️", name: "Frontend", color: "from-[#61DAFB] to-[#00aac7]" },
                { x: 800, y: 100, icon: "⚙️", name: "Backend", color: "from-[#339933] to-[#3BE8B0]" },
                { x: 500, y: 50, icon: "🤖", name: "AI/ML", color: "from-[#FF6B6B] to-[#FF8E8E]" },
                { x: 700, y: 50, icon: "🎨", name: "Design", color: "from-[#B8A1FF] to-[#9B7EDE]" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="absolute"
                  style={{ left: `${skill.x}px`, top: `${skill.y}px`, transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg border-4 border-white/20 cursor-pointer`}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 232, 176, 0.5)" }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(59, 232, 176, 0)",
                        "0 0 20px rgba(59, 232, 176, 0.5)",
                        "0 0 0px rgba(59, 232, 176, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 3 + index * 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium text-center">
                    {skill.name}
                  </div>
                </motion.div>
              ))}

              {/* Floating Achievement Particles */}
              {[
                { x: 150, y: 80, color: "#61DAFB" },
                { x: 750, y: 80, color: "#3BE8B0" },
                { x: 450, y: 30, color: "#FF6B6B" },
                { x: 650, y: 30, color: "#B8A1FF" }
              ].map((particle, index) => (
                <motion.div
                  key={index}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ 
                    left: `${particle.x}px`, 
                    top: `${particle.y}px`,
                    backgroundColor: particle.color
                  }}
                  animate={{ 
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 4 + index * 0.5 
                  }}
                />
              ))}

              {/* Progress Indicators */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5 }}
              >
                <div className="text-white text-lg font-bold mb-2">Choose Your Path</div>
                <div className="text-gray-300 text-sm">Click on any skill to start your journey</div>
              </motion.div>
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