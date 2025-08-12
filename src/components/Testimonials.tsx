"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Lenis from '@studio-freight/lenis';

const Testimonials: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [userInteracted, setUserInteracted] = useState(false);
    const controls = useAnimation();
    const containerRef = useRef(null);

    const testimonials = [
        {
            quote: "Amazing service that transformed our workflow!",
            author: "Jane Doe",
            role: "CTO, TechCorp",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
            company: "TECHCORP",
        },
        {
            quote: "The flexibility is unmatched—highly recommend!",
            author: "John Smith",
            role: "Educator, LearnHub",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
            company: "LEARNHUB",
        },
        {
            quote: "Seamless financial tools saved us hours!",
            author: "Alice Johnson",
            role: "Finance Manager",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            company: "FINANCE INC.",
        },
        {
            quote: "Great collaboration platform for our team!",
            author: "Bob Wilson",
            role: "Project Lead",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587cc9?q=80&w=2070&auto=format&fit=crop",
            company: "TEAMWORKS",
        },
        {
            quote: "Innovative and easy to use—love it!",
            author: "Emma Brown",
            role: "Startup Founder",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
            company: "STARTUP X",
        },
    ];

    const totalSlides = testimonials.length;

    useEffect(() => {
        const lenis = new Lenis();
        const raf = (time: any) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    useEffect(() => {
        if (userInteracted) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalSlides, userInteracted]);

    useEffect(() => {
        controls.start({
            x: `-${currentSlide * 100}%`,
            transition: { duration: 0.7, ease: "easeInOut" },
        });
    }, [currentSlide, controls]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setUserInteracted(true);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setUserInteracted(true);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setUserInteracted(true);
    };

    return (
        <div id="default-carousel" className="relative w-full min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] text-[#F8F8F9] py-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center font-serif tracking-tight">
                What They’re Saying
                <br />
                <span className="block text-base md:text-lg font-normal text-white/70 italic mt-2">(we swear we didn’t pay them)</span>
            </h2>

            <div className="relative w-11/12 mx-auto max-w-7xl overflow-hidden rounded-2xl">
                <motion.div
                    ref={containerRef}
                    className="flex"
                    animate={controls}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-full flex items-center justify-center py-8"
                            data-carousel-item
                        >
                            <motion.div
                                className="w-11/12 md:w-3/4 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-gradient-to-br from-[#1D1F34]/80 via-[#163C53]/70 to-[#00aac7]/30 rounded-2xl shadow-2xl backdrop-blur-lg border border-[#00aac7]/20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {/* Left: Quote and Details */}
                                <div className="w-full md:w-2/3 flex flex-col justify-center space-y-6">
                                    <svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                                        <text x="0" y="60" fontSize="80" fill="#7ED6A7" fontFamily="serif">“</text>
                                    </svg>
                                    <p className="text-xl md:text-2xl font-medium text-white leading-relaxed font-serif">
                                        {testimonial.quote}
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-bold text-white text-lg md:text-xl">
                                            {testimonial.author} <span className="text-white/70 text-base">| {testimonial.role}</span>
                                        </span>
                                        <span className="text-[#7ED6A7] font-extrabold text-lg md:text-xl tracking-widest">
                                            {testimonial.company}
                                        </span>
                                    </div>
                                </div>
                                {/* Right: Person Image */}
                                <div className="w-full md:w-1/3 flex items-center justify-center mt-8 md:mt-0">
                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#00aac7]/50 overflow-hidden shadow-xl hover:shadow-[#00aac7]/50 transition-shadow duration-300">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#00aac7] scale-125" : "bg-[#F8F8F9]/30 hover:bg-[#F8F8F9]/50"}`}
                        aria-current={index === currentSlide}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-1/2 left-4 z-30 flex items-center justify-center h-12 w-12 -translate-y-1/2 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#163C53]/60 backdrop-blur-sm group-hover:bg-[#00aac7]/70 group-focus:ring-4 group-focus:ring-[#00aac7]/30 transition-all duration-300">
                    <svg
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-1/2 right-4 z-30 flex items-center justify-center h-12 w-12 -translate-y-1/2 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#163C53]/60 backdrop-blur-sm group-hover:bg-[#00aac7]/70 group-focus:ring-4 group-focus:ring-[#00aac7]/30 transition-all duration-300">
                    <svg
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Testimonials;