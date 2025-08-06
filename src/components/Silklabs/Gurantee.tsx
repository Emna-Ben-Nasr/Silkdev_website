"use client"
import React from "react";
import { motion } from "framer-motion";

const guaranteeCards = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 3L4 6V11C4 16.52 7.58 21.74 12 23C16.42 21.74 20 16.52 20 11V6L12 3Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12L11 14L15 10" stroke="#3be8b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Intermediary Role",
    desc: "SILKLABS acts as a trusted intermediary, ensuring all parties are protected and agreements are clear.",
    gradient: "from-[#01737d] to-[#3be8b0]"
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Everything Tracked",
    desc: "All actions, milestones, and deliveries are transparently tracked on the platform.",
    gradient: "from-[#3be8b0] to-[#01737d]"
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="#3be8b0" strokeWidth="2"/></svg>
    ),
    title: "Money-Back Guarantee",
    desc: "If requirements are not met, your funds are returned—no questions asked.",
    gradient: "from-[#01737d] to-[#3be8b0]"
  }
];

const timelineSteps = [
  {
    id: 1,
    title: "Agreement Initiated",
    desc: "You and your collaborators agree on clear requirements and milestones, all tracked on SILKLABS.",
    icon: "📝"
  },
  {
    id: 2,
    title: "Progress Tracked",
    desc: "Every action, delivery, and update is transparently logged and visible to all parties.",
    icon: "🔍"
  },
  {
    id: 3,
    title: "Guarantee Enforced",
    desc: "If a collaborator fails to meet requirements, your investment is protected and you get your money back.",
    icon: "💸"
  }
];

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header & Main Banner */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="mx-auto mb-8 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#01737d] to-[#3be8b0] shadow-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L4 6V11C4 16.52 7.58 21.74 12 23C16.42 21.74 20 16.52 20 11V6L12 3Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="#3be8b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Collaboration Guarantee</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            <span className="text-[#3be8b0] font-semibold">SILKLABS</span> acts as a trusted intermediary between you and your collaborators. Every step, agreement, and delivery is transparently tracked. If any collaborator fails to meet the agreed requirements, your investment is protected—<span className="text-[#3be8b0] font-semibold">you get your money back</span>.
          </p>
        </motion.div>
        {/* Guarantee Cards - Silkdevio Style */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guaranteeCards.map((card, idx) => (
              <motion.div
                key={card.title}
                className={`group relative bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl overflow-hidden shadow-2xl h-full`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {card.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00aac7] transition-colors duration-300 text-center">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {card.desc}
                    </p>
                  </div>
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#01737d] to-[#3be8b0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-2xl"></div>
                </div>
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00aac7]/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
 
                </motion.div>
              ))}
          </div>
        </div>
        {/* Timeline Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">How the Guarantee Works</h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#01737d] via-[#3be8b0] to-[#00aac7] rounded-full -translate-x-1/2"></div>
            <div className="flex flex-col gap-16 relative z-10">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                >
                  {/* Timeline Dot */}
                  
                  {/* Card */}
                  <div className={`bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 z-10 rounded-2xl p-6 shadow-lg w-full max-w-md ${idx % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#01737d] to-[#3be8b0] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 shadow-lg">
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white flex-1">{step.title}</h4>
                      {/* Step Number Badge on the right */}
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-[#01737d] to-[#3be8b0] rounded-full flex items-center justify-center text-white text-lg font-bold ml-4 shadow-lg border-2 border-[#00aac7]"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        {step.id}
                      </motion.div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;