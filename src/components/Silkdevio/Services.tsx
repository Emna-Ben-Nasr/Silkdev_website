import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import webDevelopment from "@/assets/web-development.svg";
import mobileDev from "@/assets/mobile-dev.svg";
import uiUxDesign from "@/assets/ui-ux-design.svg";
import consulting from "@/assets/consulting.svg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      image: webDevelopment,
      features: [
        "Responsive Design",
        "Custom CMS Development",
        "E-commerce Solutions",
        "API Integration",
        "Performance Optimization",
        "SEO Implementation"
      ],
      color: "from-[#01737d] to-[#3be8b0]"
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      image: mobileDev,
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Apps",
        "App Store Optimization",
        "Push Notifications"
      ],
      color: "from-[#3be8b0] to-[#01737d]"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      image: uiUxDesign,
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems"
      ],
      color: "from-[#01737d] to-[#3be8b0]"
    },
    {
      id: 4,
      title: "Consulting",
      description: "Strategic technology consulting to help you make informed decisions.",
      image: consulting,
      features: [
        "Technology Assessment",
        "Architecture Planning",
        "Security Audits",
        "Performance Reviews",
        "Migration Strategies",
        "Team Training"
      ],
      color: "from-[#3be8b0] to-[#01737d]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] relative overflow-hidden">
      {/* 3D Background Elements */}
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
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We offer comprehensive web development and digital solutions to help your business 
            thrive in the digital landscape. From concept to deployment, we've got you covered.
          </motion.p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="max-w-sm bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 backdrop-blur-lg flex flex-col h-full">
                <a href="#">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </a>
                <div className="p-5 flex flex-col flex-grow">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-[#00aac7] transition-colors duration-300">
                      {service.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-300 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          className="flex items-center text-gray-300 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        >
                          <div className="w-2 h-2 bg-[#00aac7] rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-[#01737d] to-[#3be8b0] rounded-lg hover:from-[#015a63] hover:to-[#2dd4a0] focus:ring-4 focus:outline-none focus:ring-[#00aac7]/30 transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00aac7]/20 to-[#3be8b0]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-[#01737d]/20 to-[#00aac7]/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#3be8b0]/10 to-[#01737d]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Main CTA Container */}
          <div className="relative bg-gradient-to-br from-[#1D1F34]/80 via-[#163C53]/60 to-[#00aac7]/20 backdrop-blur-lg rounded-3xl p-12 border border-[#00aac7]/20 shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00aac7] rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#3be8b0] rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#01737d] rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#00aac7] rounded-br-lg"></div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-[#00aac7] to-[#3be8b0] bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h3>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Let's discuss how we can help bring your vision to life. Our team is ready to 
                create something amazing for your business.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {/* Primary CTA Button */}
                <motion.button 
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-[#00aac7]/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Start a Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00aac7] to-[#3be8b0] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg className="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>

                {/* Secondary CTA Button */}
                <motion.button 
                  className="group px-8 py-5 border-2 border-[#00aac7] text-[#00aac7] hover:bg-[#00aac7] hover:text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  <span className="relative z-10">View Our Portfolio</span>
                  <svg className="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00aac7] rounded-full"></div>
                  <span>Proven Track Record</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3be8b0] rounded-full"></div>
                  <span>Free Project Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#01737d] rounded-full"></div>
                  <span>Available Support</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
