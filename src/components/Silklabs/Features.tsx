"use client"
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: "🧭",
      title: "Smart Project Matching",
      description: "AI-powered algorithm connects you with the perfect collaborators and projects"
    },
    {
      icon: "📅",
      title: "Built-in Scheduling & Collaboration Tools",
      description: "Seamless coordination with integrated calendars, video calls, and project management"
    },
    {
      icon: "🧾",
      title: "Investor Portal & Reporting",
      description: "Transparent reporting and direct access to investor networks and funding opportunities"
    },
    // {
    //   icon: "🔐",
    //   title: "Secure IP Management",
    //   description: "Protect your intellectual property with enterprise-grade security and legal frameworks"
    // },
    // {
    //   icon: "📊",
    //   title: "Advanced Metrics & Growth Dashboard",
    //   description: "Track your progress, impact, and growth with comprehensive analytics and insights"
    // }
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
            Platform Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to collaborate, innovate, and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl p-6 hover:border-[#00aac7]/50 transition-all duration-300 h-full">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00aac7] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 