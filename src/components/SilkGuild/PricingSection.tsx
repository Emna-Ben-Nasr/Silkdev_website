"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      icon: '🎮',
      price: '$0',
      period: 'forever',
      features: [
        'Access guilds',
        'Basic bounties',
        'XP & badges'
      ],
      cta: 'Start Free',
      accent: 'from-[#00e396] to-[#3BE8B0]'
    },
    {
      name: 'Pro',
      icon: '⚔️',
      price: '$9',
      period: 'per month',
      features: [
        'Advanced quests',
        'Leaderboards',
        'Mentorship access',
        'Pro badges'
      ],
      cta: 'Go Pro',
      accent: 'from-[#01737d] to-[#00aac7]'
    },
    {
      name: 'Guild Leader',
      icon: '🏰',
      price: 'Free',
      period: 'with application',
      features: [
        'Create guilds',
        'Manage bounties',
        'Community tools',
        'Priority support'
      ],
      cta: 'Apply Now',
      accent: 'from-[#3BE8B0] to-[#00aac7]'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Free. Upgrade Anytime.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your journey. You can always switch or cancel later.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/20 border border-[#00aac7]/30 rounded-2xl p-8 shadow-2xl backdrop-blur-lg overflow-hidden h-full">
                {/* Accent border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-[#00aac7] transition-all duration-300"
                />

                <div className="relative z-10 flex flex-col h-full text-center">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                  <div className="flex items-end justify-center gap-2 mb-6">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>

                  <ul className="text-gray-300 text-left mx-auto space-y-3 mb-8 w-full max-w-xs">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3BE8B0] to-[#00aac7] mr-3"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button 
                    className={`mt-auto px-6 py-3 bg-gradient-to-r ${plan.accent} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-[#00aac7]/30 focus:outline-none`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 