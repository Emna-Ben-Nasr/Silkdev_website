"use client"
import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-br from-[#1D1F34]/50 via-[#163C53]/30 to-[#00aac7]/20 border border-[#00aac7]/20 rounded-2xl p-8 backdrop-blur-sm text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Get insights from leading innovators
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Receive monthly updates on innovation trends, success stories, and exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-[#00aac7]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00aac7] transition-colors duration-300"
            />
            <motion.button 
              className="px-6 py-3 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter; 