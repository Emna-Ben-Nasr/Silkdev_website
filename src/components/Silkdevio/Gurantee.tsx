import React from "react";
import { motion } from "framer-motion";

const Guarantee = () => {
  const guarantees = [
    {
      id: 1,
      title: "No Upfront Payment",
      description: "We only get paid after your first consultation, ensuring you're completely satisfied before any financial commitment.",
      icon: "💳",
      color: "from-[#01737d] to-[#3be8b0]",
      gradient: "from-[#01737d]/20 via-[#3be8b0]/10 to-[#00aac7]/20"
    },
    {
      id: 2,
      title: "Risk-Free Consultation",
      description: "Your first consultation is completely free with no obligation. We want you to feel confident in your decision.",
      icon: "🛡️",
      color: "from-[#3be8b0] to-[#01737d]",
      gradient: "from-[#3be8b0]/20 via-[#01737d]/10 to-[#00aac7]/20"
    },
    {
      id: 3,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied after our first consultation, you owe us nothing. Your satisfaction is our priority.",
      icon: "✅",
      color: "from-[#01737d] to-[#3be8b0]",
      gradient: "from-[#01737d]/20 via-[#3be8b0]/10 to-[#00aac7]/20"
    },
    {
      id: 4,
      title: "Transparent Process",
      description: "Clear communication throughout the entire process. You'll know exactly what to expect at every step.",
      icon: "🔍",
      color: "from-[#3be8b0] to-[#01737d]",
      gradient: "from-[#3be8b0]/20 via-[#01737d]/10 to-[#00aac7]/20"
    }
  ];

  const timelineSteps = [
    {
      id: 1,
      title: "Free Consultation",
      description: "Schedule your free consultation with our experts to discuss your project needs and goals.",
      image: "🎯",
      details: "We'll analyze your requirements, understand your business objectives, and provide initial recommendations."
    },
    {
      id: 2,
      title: "Resource Purchase",
      description: "Buy flexible resources that you can use for any of our services whenever you need them.",
      image: "💎",
      details: "Our resource system gives you complete flexibility - use your credits for web development, mobile apps, SEO, or any other service. No expiration dates, no pressure to use them immediately."
    },
    {
      id: 3,
      title: "Project Execution",
      description: "We start working on your project using your purchased resources, with full transparency.",
      image: "🚀",
      details: "Track progress in real-time, receive regular updates, and see your resources being utilized efficiently for maximum value."
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
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Guarantee
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe in building trust through transparency. That's why we only get paid after your first consultation, 
            ensuring you have zero risk when choosing our services.
          </motion.p>
        </div>

        {/* Creative Main Guarantee Banner */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-[#01737d] to-[#3be8b0] rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="text-6xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                💰
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">
                We Only Get Paid After Your First Consultation
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                No upfront fees, no hidden costs, no pressure. We're confident in our ability to deliver value, 
                so we only ask for payment after you've experienced our expertise firsthand.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Creative Guarantee Cards - Hexagonal Layout */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl overflow-hidden shadow-2xl relative h-full">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${guarantee.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon Container */}
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${guarantee.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {guarantee.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00aac7] transition-colors duration-300 text-center">
                        {guarantee.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed text-center">
                        {guarantee.description}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#01737d] to-[#3be8b0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-2xl"></div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00aac7]/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Creative Timeline - How It Works */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            How It Works
          </h3>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Creative Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#01737d] via-[#3be8b0] to-[#00aac7] rounded-full"></div>
            
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Creative Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#01737d] to-[#3be8b0] rounded-full border-4 border-[#1D1F34] z-10 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                {/* Content Card */}
                <div className={`bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl p-6 hover:border-[#00aac7]/50 transition-all duration-300 group ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  {/* Step Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#01737d] to-[#3be8b0] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 shadow-lg">
                      {step.id}
                    </div>
                    <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                  </div>
                  
                  {/* Step Image */}
                  <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {step.image}
                  </div>
                  
                  {/* Step Description */}
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step Details */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Creative Resource System Explanation */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-[#01737d] to-[#3be8b0] rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="text-center mb-8">
              <motion.div 
                className="text-5xl mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                💎
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Flexible Resource System
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our unique resource system gives you complete control and flexibility over your investment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🔄", title: "Use Any Service", desc: "Apply your resources to web development, mobile apps, SEO, or any other service we offer." },
                { icon: "⏰", title: "No Expiration", desc: "Your resources never expire. Use them whenever you're ready, with no pressure or time limits." },
                { icon: "📊", title: "Track Usage", desc: "Monitor your resource usage in real-time and see exactly how your investment is being utilized." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#1D1F34]/50 via-[#163C53]/30 to-[#00aac7]/20 border border-[#00aac7]/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Start Risk-Free?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Book your free consultation today. No payment required, no obligation, 
              just a conversation about how we can help your business grow.
            </p>
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book Free Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
