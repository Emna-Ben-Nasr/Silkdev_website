"use client"
import React from "react";
import { motion } from "framer-motion";

const ValueProposition = () => {
  const valueProps = [
    {
      icon: "🔗",
      title: "Connect across industries",
      description: "Break down silos and collaborate with professionals from diverse backgrounds"
    },
    {
      icon: "💡",
      title: "Co-create innovative projects",
      description: "Join forces to build groundbreaking solutions that solve real-world problems"
    },
    {
      icon: "📈",
      title: "Attract funding & visibility",
      description: "Get noticed by investors and gain exposure for your innovative ideas"
    },
    {
      icon: "🤝",
      title: "Collaborate with trusted partners",
      description: "Work with vetted professionals and companies in a secure environment"
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
            Why Choose SILKLABS?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the world's first collaborative innovation ecosystem designed for rapid growth and breakthrough solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl p-6 hover:border-[#00aac7]/50 transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00aac7] transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 