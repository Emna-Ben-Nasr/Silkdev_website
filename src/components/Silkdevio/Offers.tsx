import React from "react";
import { motion } from "framer-motion";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Free First Consultation",
      description: "Get a comprehensive 60-minute strategy session to discuss your project requirements, goals, and technical needs.",
      icon: "🎯",
      originalPrice: 299,
      features: [
        "60-minute strategy session",
        "Project roadmap planning",
        "Technical requirements analysis",
        "Budget optimization tips"
      ],
      color: "from-[#01737d] to-[#3be8b0]",
      gradient: "from-[#01737d]/20 via-[#3be8b0]/10 to-[#00aac7]/20"
    },
    {
      id: 2,
      title: "SEO Checklist & Audit",
      description: "Complete SEO audit with actionable recommendations to improve your website's search engine performance.",
      icon: "📊",
      originalPrice: 199,
      features: [
        "Technical SEO audit",
        "On-page optimization review",
        "Keyword analysis report",
        "Competitor analysis"
      ],
      color: "from-[#3be8b0] to-[#01737d]",
      gradient: "from-[#3be8b0]/20 via-[#01737d]/10 to-[#00aac7]/20"
    },
    {
      id: 3,
      title: "Offer Enhancement Tool",
      description: "Custom tool to optimize your business offers and increase conversion rates with data-driven insights.",
      icon: "🚀",
      originalPrice: 399,
      features: [
        "Conversion rate optimization",
        "A/B testing framework",
        "Customer journey mapping",
        "Performance analytics"
      ],
      color: "from-[#01737d] to-[#3be8b0]",
      gradient: "from-[#01737d]/20 via-[#3be8b0]/10 to-[#00aac7]/20"
    }
  ];

  const totalValue = offers.reduce((sum, offer) => sum + offer.originalPrice, 0);

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
            Exclusive Free Bonuses
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            When you choose us for your project, you get these valuable bonuses absolutely FREE. 
            These are services that normally cost hundreds of dollars.
          </motion.p>
        </div>

        {/* Total Value Banner */}
        <motion.div 
          className="bg-gradient-to-r from-[#01737d] to-[#3be8b0] rounded-2xl p-8 mb-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-x-8 translate-y-8"></div>
          
          <h3 className="text-3xl font-bold text-white mb-2 relative z-10">
            Total Value: ${totalValue.toLocaleString()}
          </h3>
          <p className="text-white/90 text-lg relative z-10">
            All included FREE with your project
          </p>
        </motion.div>

        {/* Creative Offers Layout */}
        <div className="space-y-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Main Offer Card */}
              <div className="bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Left Side - Icon & Price */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Icon Container */}
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {offer.icon}
                        </div>
                        
                        {/* FREE Badge */}
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                          FREE
                        </div>
                        
                        {/* Original Price */}
                        <div className="text-center">
                          <span className="text-gray-400 text-sm line-through">${offer.originalPrice}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00aac7] transition-colors duration-300">
                        {offer.title}
                      </h3>
                      
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">
                        {offer.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {offer.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-200 text-sm">
                            <div className="w-2 h-2 bg-[#3be8b0] rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Value Badge */}
                      <div className="inline-flex items-center gap-2">
                        <span className="px-4 py-2 bg-[#01737d]/20 text-[#3be8b0] text-sm font-semibold rounded-lg border border-[#3be8b0]/30">
                          Value: ${offer.originalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00aac7]/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#1D1F34]/50 via-[#163C53]/30 to-[#00aac7]/20 border border-[#00aac7]/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Claim Your Free Bonuses?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Start your project today and receive <span className="text-[#3be8b0] font-semibold">${totalValue.toLocaleString()}</span> worth of valuable services absolutely FREE. 
              No hidden fees, no catch - just incredible value for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-[#01737d] text-[#01737d] hover:bg-[#01737d] hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
