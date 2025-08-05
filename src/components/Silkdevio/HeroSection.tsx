import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pic2 from "@/assets/helloword.avif";

const HeroSection = () => {
  const words = ["How", "to", "transform", "your", "projects", "from"];
  const highlightWords = ["idea", "into", "reality"];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Tagline */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center lg:text-left">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="inline-block mr-2"
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#01737d] to-[#3be8b0]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    {highlightWords.map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        className="inline-block mr-2"
                      >
                        {word}{" "}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  We bridge the gap between vision and execution. From concept to deployment, 
                  we turn your innovative ideas into powerful, scalable solutions that drive real results.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <motion.button 
                    className="px-8 py-4 bg-[#01737d] hover:bg-[#015a63] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(1, 115, 125, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Start Your Project
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div 
                className="relative"
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <motion.div 
                  className="w-[600px] h-[400px] shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-500 pr-0 border-2 border-[#00aac7] border-opacity-50 shadow-[0_0_32px_0_#00aac7]"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(0, 170, 199, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={pic2}
                    alt="Transform your ideas into reality"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover border-2 rounded-lg border-[#00aac7]"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 