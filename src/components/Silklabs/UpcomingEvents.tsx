"use client"
import React from "react";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      title: "Monthly Innovation Lab",
      date: "Next Week",
      description: "Join our monthly innovation workshop with industry experts",
      attendees: "150+ registered"
    },
    {
      title: "AI & Healthcare Summit",
      date: "In 2 Weeks",
      description: "Explore the future of AI in healthcare with leading professionals",
      attendees: "200+ registered"
    },
    {
      title: "Startup Pitch Night",
      date: "Monthly",
      description: "Watch innovative startups pitch to investors and get feedback",
      attendees: "300+ registered"
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
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our community events and connect with fellow innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl p-6 hover:border-[#00aac7]/50 transition-all duration-300 h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-[#01737d]/20 text-[#3be8b0] text-sm font-semibold rounded-full">
                    {event.date}
                  </span>
                  <span className="text-gray-400 text-sm">{event.attendees}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00aac7] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                <motion.button 
                  className="w-full px-4 py-2 border border-[#01737d] text-[#01737d] hover:bg-[#01737d] hover:text-white font-semibold rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents; 