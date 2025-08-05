"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SubCompaniesScroll = () => {
  const companies = [
    {
      name: "SILKDEV.IO",
      description: "Resource-based development services with flexible credits",
      color: "from-[#01737d] to-[#3be8b0]",
      gradient: "from-[#01737d]/20 via-[#3be8b0]/10 to-[#00aac7]/20",
      icon: "💻",
      link: "/silkdevio",
      features: ["Flexible Credits", "No Long-term Contracts", "Resource-based Approach"]
    },
    {
      name: "NEXUS",
      description: "Connect and collaborate with industry professionals",
      color: "from-[#3be8b0] to-[#01737d]",
      gradient: "from-[#3be8b0]/20 via-[#01737d]/10 to-[#00aac7]/20",
      icon: "🔗",
      link: "#",
      features: ["Professional Network", "Industry Connections", "Collaboration Platform"]
    },
    {
      name: "LABS",
      description: "Innovation hub for ideation and breakthrough solutions",
      color: "from-[#00aac7] to-[#3be8b0]",
      gradient: "from-[#00aac7]/20 via-[#3be8b0]/10 to-[#01737d]/20",
      icon: "🧪",
      link: "/silklabs",
      features: ["Innovation Hub", "Ideation Platform", "Breakthrough Solutions"]
    },
    {
      name: "GUILD",
      description: "Exclusive community of top-tier professionals",
      color: "from-[#01737d] to-[#00aac7]",
      gradient: "from-[#01737d]/20 via-[#00aac7]/10 to-[#3be8b0]/20",
      icon: "⚔️",
      link: "#",
      features: ["Exclusive Community", "Top-tier Professionals", "Premium Network"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Ecosystem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of services designed to meet every aspect of your digital journey.
          </p>
        </motion.div>

        {/* Scrolling List Container */}
        <div className="relative">
          {/* Scroll Indicators */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <div className="w-1 h-16 bg-gradient-to-b from-[#01737d] to-[#3be8b0] rounded-full opacity-60"></div>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <div className="w-1 h-16 bg-gradient-to-b from-[#3be8b0] to-[#01737d] rounded-full opacity-60"></div>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={company.link}>
                  <div className="bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl overflow-hidden hover:border-[#00aac7]/50 transition-all duration-300 h-full group-hover:scale-105">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Icon and Title */}
                      <div className="text-center mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {company.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00aac7] transition-colors duration-300">
                          {company.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {company.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="flex-grow">
                        <ul className="space-y-2">
                          {company.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-[#3be8b0] rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6">
                        <div className={`w-full py-2 px-4 bg-gradient-to-r ${company.color} hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 text-center text-sm group-hover:scale-105`}>
                          Explore {company.name}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-2xl`}></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex space-x-2">
              {companies.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-[#00aac7]/30 rounded-full"
                ></div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            Ready to explore our ecosystem?
          </p>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SubCompaniesScroll; 