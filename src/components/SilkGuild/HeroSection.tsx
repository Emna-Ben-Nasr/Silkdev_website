"use client"
import React from "react";
import { motion } from "framer-motion";
import eLearningApp from "../../assets/e-learning_app.jpg";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-[#00aac7]/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#00aac7]/10 to-[#01737d]/10 rounded-lg"
        animate={{
          y: [0, 40, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 border-2 border-[#01737d]/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00aac7]/20 to-[#01737d]/20 border border-[#00aac7]/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-2 h-2 bg-[#00aac7] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[#00aac7] font-medium text-sm">🎮 Level Up Your Learning Journey</span>
          </motion.div>

          {/* Main Headline with Animated Words */}
          <div className="mb-12">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block mb-2">Learning, But</span>
              <motion.span 
                className="block bg-gradient-to-r from-[#00aac7] via-[#01737d] to-[#00aac7] bg-clip-text text-transparent leading-relaxed pb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 100%",
                  lineHeight: "1.2",
                  paddingBottom: "0.5rem"
                }}
              >
                Actually Engaging
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Animated Description */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🎮 Education meets RPG. Progress through quests. Join guilds. Earn rewards.<br/>
            Whether you're a student or a pro — learning is now a game worth playing.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="group relative px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#00aac7] hover:from-[#015a63] hover:to-[#01737d] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00aac7]/20 to-[#01737d]/20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Start Your Learning Journey</span>
              <motion.svg 
                className="w-5 h-5 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 border-2 border-[#01737d] text-[#01737d] hover:bg-[#01737d] hover:text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore More</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* E-Learning App Image */}
          <motion.div
            className="relative w-full flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-full max-w-4xl">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={eLearningApp}
                  alt="E-Learning App Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                  priority
                  quality={90}
                />
              </motion.div>
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1F34]/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>

          <div>
            {/* Floating Particles */}
            <motion.div
              className="absolute top-4 left-6 w-3 h-3 bg-[#00aac7] rounded-full"
              animate={{
                y: [0, -25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0
              }}
            />
            <motion.div
              className="absolute top-6 right-8 w-2 h-2 bg-[#01737d] rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 1.5
              }}
            />
            <motion.div
              className="absolute bottom-4 left-10 w-2.5 h-2.5 bg-[#00aac7] rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                delay: 3
              }}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection; 