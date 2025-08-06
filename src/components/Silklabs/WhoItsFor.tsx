"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const WhoItsFor = () => {
  const [activePersona, setActivePersona] = useState("professionals");

  const personas = [
    {
      id: "professionals",
      title: "Professionals",
      icon: "👨‍💼",
      description: "Build your network and skills",
      benefits: ["Connect with industry experts", "Gain new skills", "Build your portfolio", "Find mentorship"],
      cta: "Join as Professional"
    },
    {
      id: "companies",
      title: "Companies",
      icon: "🏢",
      description: "Accelerate R&D with external talent",
      benefits: ["Access global talent pool", "Reduce R&D costs", "Faster time to market", "Innovation partnerships"],
      cta: "Partner with Us"
    },
    {
      id: "investors",
      title: "Investors",
      icon: "💰",
      description: "Discover and support high-potential innovations",
      benefits: ["Early access to innovations", "Diversified portfolio", "Direct founder connections", "Due diligence support"],
      cta: "Explore Opportunities"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] overflow-hidden">
      {/* Soft floating background shapes */}
      {/* <motion.div
        className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-[#3be8b0]/20 to-[#01737d]/10 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4], x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      {/* <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-[#01737d]/20 to-[#3be8b0]/10 rounded-full blur-3xl z-0"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.7, 0.5], x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      /> */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who It's For
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a professional, company, or investor, SILKLABS has something valuable for you.
          </p>
        </motion.div>

        {/* Persona Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#1D1F34]/50 rounded-lg p-1 border border-[#00aac7]/20">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setActivePersona(persona.id)}
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  activePersona === persona.id
                    ? 'bg-gradient-to-r from-[#01737d] to-[#3be8b0] text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {persona.icon} {persona.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Persona Content Card */}
        <motion.div
          key={activePersona}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {personas.map((persona) => (
            persona.id === activePersona && (
              <motion.div 
                key={persona.id} 
                className="relative bg-gradient-to-br from-[#1D1F34]/95 via-[#163C53]/90 to-[#00aac7]/20 border border-[#00aac7]/20 rounded-2xl p-10 shadow-2xl backdrop-blur-lg overflow-hidden group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ boxShadow: "0 0 0 4px #00aac7, 0 10px 40px #3be8b0aa" }}
              >
                {/* Animated gradient border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-[#00aac7] transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="text-center relative z-10">
                  {/* Floating animated icon */}
                  <motion.div
                    className="text-6xl mb-6 inline-block"
                
                  >
                    {persona.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">{persona.title}</h3>
                  <p className="text-xl text-gray-300 mb-8">{persona.description}</p>
                  {/* Symmetrical Benefits Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 max-w-2xl mx-auto">
                    {persona.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center text-left bg-white/5 rounded-lg px-4 py-3 hover:bg-[#00aac7]/10 transition-all duration-300 shadow-sm"
                        whileHover={{ scale: 1.04, boxShadow: "0 4px 20px #00aac733" }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                      >
                        <div className="w-2 h-2 bg-[#3be8b0] rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-200 text-sm font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button 
                    className="px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-[#00aac7]/30 focus:outline-none relative"
                    whileHover={{ scale: 1.07, boxShadow: "0 0 16px 4px #00aac7, 0 10px 40px #3be8b0aa" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {persona.cta}
                    <span className="absolute -inset-1 rounded-lg pointer-events-none animate-pulse bg-gradient-to-r from-[#00aac7]/20 to-[#3be8b0]/10 opacity-40 z-0" />
                  </motion.button>
                </div>
              </motion.div>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor; 