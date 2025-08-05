import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pc1 from "@/assets/pc1.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: pc1,
      category: "Web Development",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      features: ["Payment Processing", "Inventory Management", "Admin Dashboard", "Mobile Responsive"],
      link: "#",
      color: "from-[#01737d] to-[#3be8b0]"
    },
    {
      id: 2,
      title: "Food Delivery App",
      description: "Mobile application for food delivery with real-time tracking, payment integration, and restaurant management.",
      image: pc1,
      category: "Mobile Development",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      features: ["Real-time Tracking", "Payment Integration", "Restaurant Dashboard", "Push Notifications"],
      link: "#",
      color: "from-[#3be8b0] to-[#01737d]"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management platform with real-time updates, file sharing, and team communication.",
      image: pc1,
      category: "Web Development",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      features: ["Real-time Updates", "File Sharing", "Team Chat", "Progress Tracking"],
      link: "#",
      color: "from-[#01737d] to-[#3be8b0]"
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      description: "Mobile fitness application with workout tracking, nutrition planning, and social features.",
      image: pc1,
      category: "Mobile Development",
      technologies: ["Flutter", "Firebase", "Google Fit API", "Cloud Functions"],
      features: ["Workout Tracking", "Nutrition Planning", "Social Features", "Progress Analytics"],
      link: "#",
      color: "from-[#3be8b0] to-[#01737d]"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] relative overflow-hidden">
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
            Our Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our latest work and see how we bring innovative ideas to life through 
            cutting-edge technology and creative design solutions.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Outside Cards */}
          <button
            onClick={prevSlide}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Slides */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out gap-6" style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}>
              {projects.map((project, index) => (
                <div key={project.id} className="w-1/3 flex-shrink-0">
                  <motion.div
                    className="group relative bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 rounded-2xl overflow-hidden shadow-2xl h-[400px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Project Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#01737d]/20 via-[#3be8b0]/20 to-[#00aac7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                      {/* Top Section - Always Visible */}
                      <div>
                        <div className="mb-3">
                          <span className="inline-block px-2 py-1 bg-gradient-to-r from-[#01737d] to-[#3be8b0] text-white text-xs font-semibold rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00aac7] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      {/* Bottom Section - Hidden on hover */}
                      <div className="group-hover:opacity-0 transition-opacity duration-300">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-[#00aac7]/20 text-[#00aac7] text-xs rounded backdrop-blur-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Content - Project Details */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1D1F34]/95 via-[#163C53]/90 to-[#00aac7]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6">
                        <div className="text-center">
                          <h4 className="text-lg font-bold text-white mb-4">Project Details</h4>
                          
                          {/* Project Description */}
                          <div className="mb-6">
                            <p className="text-gray-200 text-sm leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          
                          {/* Features */}
                          <div className="mb-6">
                            <h5 className="text-[#00aac7] font-semibold mb-2 text-sm">Key Features</h5>
                            <ul className="space-y-1">
                              {project.features.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-gray-200 text-xs">
                                  <div className="w-1.5 h-1.5 bg-[#3be8b0] rounded-full mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="mb-6">
                            <h5 className="text-[#00aac7] font-semibold mb-2 text-sm">Technologies</h5>
                            <div className="flex flex-wrap justify-center gap-1">
                              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-[#01737d]/30 text-[#3be8b0] text-xs rounded-full border border-[#3be8b0]/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.a
                            href={project.link}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Project
                            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-[#01737d] to-[#3be8b0] scale-125' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
