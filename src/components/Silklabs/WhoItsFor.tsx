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
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-4">
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
                    ? 'bg-gradient-to-r from-[#01737d] to-[#3be8b0] text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {persona.icon} {persona.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Persona Content */}
        <motion.div
          key={activePersona}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {personas.map((persona) => (
            persona.id === activePersona && (
              <div key={persona.id} className="text-center">
                <div className="text-6xl mb-6">{persona.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-4">{persona.title}</h3>
                <p className="text-xl text-gray-300 mb-8">{persona.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {persona.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-left">
                      <div className="w-2 h-2 bg-[#3be8b0] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {persona.cta}
                </motion.button>
              </div>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor; 