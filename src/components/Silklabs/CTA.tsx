"use client"
import React from "react";
import { motion } from "framer-motion";

interface CTAProps {
  primaryText?: string;
  secondaryText?: string;

  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  primaryText = "Join the Hub",
  secondaryText = "Explore the Platform",

  className = ""
}) => {
  return (
    <motion.div
      className={`flex flex-col sm:flex-row gap-6 justify-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.button
        className="group relative px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#3be8b0]/20 to-[#01737d]/20"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <span className="relative z-10">{primaryText}</span>
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
        <span>{secondaryText}</span>
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
  );
};

export default CTA; 