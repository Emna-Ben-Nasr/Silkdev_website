"use client"
import React from "react";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const successStories = [
    {
      company: "FoodTech Startup",
      headline: "AI-powered food detection app funded in 6 weeks",
      description: "A team of 5 professionals from different backgrounds came together to build an innovative food safety solution.",
      stats: "Funded $500K",
      image: "/api/placeholder/300/200"
    },
    {
      company: "HealthTech Innovation",
      headline: "Remote patient monitoring platform launched in 3 months",
      description: "Healthcare professionals and tech developers collaborated to create a breakthrough monitoring system.",
      stats: "10K+ Users",
      image: "/api/placeholder/300/200"
    },
    {
      company: "GreenTech Solution",
      headline: "Sustainable energy optimization tool",
      description: "Environmental scientists and software engineers built a solution that reduces energy consumption by 40%.",
      stats: "40% Efficiency",
      image: "/api/placeholder/300/200"
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our community is building the future together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl overflow-hidden hover:border-[#00aac7]/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[#01737d] to-[#3be8b0] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                    🚀
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <span className="px-3 py-1 bg-[#01737d]/20 text-[#3be8b0] text-sm font-semibold rounded-full">
                      {story.stats}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#00aac7] mb-3">
                    {story.headline}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {story.description}
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

export default SuccessStories; 