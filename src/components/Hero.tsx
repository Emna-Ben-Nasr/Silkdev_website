"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMotionValue, useSpring } from 'framer-motion';
import PartnersBanner from './PartnersBanner';

interface StatBoxProps {
    endValue: number;
    label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ endValue, label }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (inView) {
            const animation = animate(0, endValue, {
                duration: 2,
                onUpdate: (latest) => {
                    setCount(Math.round(latest));
                },
                ease: "easeOut",
            });

            controls.start({
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4,
                },
            });

            return () => animation.stop();
        }
    }, [controls, inView, endValue]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={controls}
            className="flex flex-col items-center p-4"
        >
            <motion.span className="text-4xl font-bold text-[#F8F8F9] flex items-center">
                <span className="mr-1">+</span>{count}
            </motion.span>
            <motion.span className="mt-2 text-[#F8F8F9]/80">{label}</motion.span>
        </motion.div>
    );
};

const Hero = () => {
    return (
        
        <section className="pt-28 min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] relative overflow-hidden">
            <div className="relative py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12 z-10 -mt-20">
                <motion.a
                    href="#"
                    className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-10 text-sm text-[#F8F8F9] bg-[#1D1F34]/50 rounded-full hover:bg-[#163C53]/50 transition-all duration-300"
                    role="alert"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="text-xs bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-[#F8F8F9] px-4 py-1.5 mr-3">
                        Limited Offer
                    </span>
                    <span className="text-sm font-medium">Get 25% OFF - Only for the first 10 subscribers!</span>
                    <svg
                        className="ml-2 w-5 h-5 animate-bounce"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                        <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </motion.a>
                <motion.h1
                    className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-[#F8F8F9] md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Unified ecosystem of smart services designed to simplify your life
                </motion.h1>
                <motion.p
                    className="mb-12 text-lg font-normal text-[#F8F8F9]/80 lg:text-xl sm:px-16 xl:px-48"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Bet you will find what you need here!
                </motion.p>
                {/* <motion.div
                    className="flex flex-col mb-4 lg:mb-6 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <button
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-[#F8F8F9] bg-gradient-to-r from-[#3be8b0]/20 to-[#01737d]/20 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        type="button"
                    >
                        <span className="relative z-10 flex items-center ">
                            Get to know us
                            <svg
                                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-[#163C53]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </button>
                </motion.div> */}
                <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="group relative px-8 py-4 bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#3be8b0]/20 to-[#01737d]/20"
                
              />
              <span className="relative z-10">Join the Hub</span>
              <motion.svg 
                className="w-5 h-5 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 border-2 border-[#01737d] text-[#01737d] hover:bg-[#01737d] hover:text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore the Platform</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.button>
          </motion.div>
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <div className="flex flex-wrap justify-center items-center gap-8 sm:justify-between">
                        <StatBox endValue={30} label="Years Combined Experience" />
                        <StatBox endValue={15} label="Projects Delivered" />
                        <StatBox endValue={10} label="Satisfied Clients" />
                    </div>
                </div>
            </div>
        </section>
      
    );
};

export default Hero;