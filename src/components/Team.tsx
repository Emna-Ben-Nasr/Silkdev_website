"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Jesser from "@/assets/jesser.avif";

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Description */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center lg:text-left">
                <h2 className="mb-6 text-4xl font-extrabold leading-tight text-[#F8F8F9] sm:text-5xl md:text-[48px] tracking-tight">
                  Meet Our CEO
                </h2>
                <p className="mb-8 text-lg text-[#F8F8F9]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I know what it’s like to be stuck. To have an idea that’s worth something but no clear way to bring it to life. To see gaps in the industry that everyone knows exist, but no one is willing to fix.
                  <br /><br />
                  That’s why I started SILKDEV. Not just to build software, but to take on the kind of problems that keep people up at night. If you’re here, reading this, you’re probably in the middle of one of those problems. You’re not looking for another software company. You’re looking for people who can actually execute.
                  <br /><br />
                  That’s what we do. We’re not here to tell you why we’re the best. We’re here to see if your idea deserves a shot. And if it does, we’ll fight for it like it’s our own.
                </p>
                {/* Key Highlights */}
                {/* <div className="space-y-4">
                  <motion.div
                    className="flex items-center text-[#F8F8F9]/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="w-3 h-3 bg-[#00aac7] rounded-full mr-4"></div>
                    <span className="text-lg">10+ years in software development</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-[#F8F8F9]/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="w-3 h-3 bg-[#00aac7] rounded-full mr-4"></div>
                    <span className="text-lg">Led 50+ successful projects</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-[#F8F8F9]/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="w-3 h-3 bg-[#00aac7] rounded-full mr-4"></div>
                    <span className="text-lg">Expert in business strategy & innovation</span>
                  </motion.div>
                </div> */}
              </div>
            </motion.div>

            {/* Right Side - CEO Card */}
            <motion.div
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <TeamCard
                name="Jesser Bedoui"
                profession="Chief Executive Officer"
                imageSrc={Jesser.src}
                linkedinUrl="https://linkedin.com/in/johnsmith"
                portfolioUrl="https://portfolio.com/johnsmith"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ imageSrc, name, profession, linkedinUrl, portfolioUrl }) => {
  return (
    <motion.div
      className="w-full max-w-[400px] relative"
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 170, 199, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1D1F34]/95 via-[#163C53]/85 to-[#00aac7]/35 backdrop-blur-xl border-2 border-[#00aac7]/50">
        <img src={imageSrc} alt={name} className="w-full h-[500px] object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-6 text-center">
          <div className="relative bg-gradient-to-br from-[#1D1F34]/90 to-[#163C53]/80 rounded-lg px-6 py-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#F8F8F9] mb-1">{name}</h3>
            <p className="text-sm text-[#F8F8F9]/80 mb-4">{profession}</p>
            <div className="flex justify-center items-center gap-4">
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-[#00aac7] hover:bg-[#01737d] text-[#F8F8F9] text-sm font-semibold rounded-lg transition-colors duration-200">
                  Portfolio
                </button>
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-[#F8F8F9] hover:text-[#00aac7] transition-colors duration-200">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/>
                </svg>
              </a>
            </div>
            {/* Decorative SVG Shapes */}
            <span className="absolute bottom-0 left-0 opacity-30">
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="45" r="45" fill="#00aac7" fillOpacity="0.2" />
              </svg>
            </span>
            <span className="absolute right-0 top-0 opacity-30">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="5" fill="#00aac7" fillOpacity="0.3" />
                <circle cx="30" cy="30" r="5" fill="#00aac7" fillOpacity="0.3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;