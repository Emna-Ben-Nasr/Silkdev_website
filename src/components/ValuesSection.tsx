"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const values = [
  { title: "Credibility", description: "We work on your projects as if it's our own" },
  { title: "Collaboration", description: "It's more than a collaboration it's an engagement" },
  { title: "Communication", description: "Communication is the key to success" },
  { title: "Excellence", description: "Good is not good enough" },
];

const ValuesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Divide scroll progress into equal segments for each card
  const segmentLength = 1 / values.length; // 0.25 for 4 cards

  // Create transform hooks for each card
  const cardTransforms = values.map((_, idx) => {
    const segmentStart = idx * segmentLength;
    const segmentEnd = (idx + 1) * segmentLength;

    // Opacity: Full for active card, dim for others
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(segmentStart - segmentLength * 0.5, 0), // Fade in slightly before
        segmentStart,
        segmentEnd,
        segmentEnd + segmentLength * 0.5, // Fade out slightly after
      ],
      [0.3, 1, 1, 0.3]
    );

    // Scale: Larger for active card, smaller for others
    const scale = useTransform(
      scrollYProgress,
      [
        Math.max(segmentStart - segmentLength * 0.5, 0),
        segmentStart,
        segmentEnd,
        segmentEnd + segmentLength * 0.5,
      ],
      [0.8, 1.1, 1.1, 0.8]
    );

    // X position: Center active card, offset others
    const x = useTransform(
      scrollYProgress,
      [
        Math.max(segmentStart - segmentLength * 0.5, 0),
        segmentStart,
        segmentEnd,
        segmentEnd + segmentLength * 0.5,
      ],
      [300, 0, 0, -300]
    );

    // Z-index: Active card on top
    const zIndex = useTransform(
      scrollYProgress,
      [segmentStart, segmentEnd],
      [1, 10]
    );

    return { opacity, scale, x, zIndex };
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] text-[#F8F8F9]"
    >
      {/* Sticky container for the content */}
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{
          top: useTransform(scrollYProgress, [0, 1], [0, 0]),
        }}
      >
        {/* Fluid SVG Shape Divider */}
        <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none z-10">
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-40">
            <path
              d="M0,96 C360,180 1080,0 1440,96 L1440,0 L0,0 Z"
              fill="url(#gradient)"
              fillOpacity="1"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1D1F34" />
                <stop offset="0.5" stopColor="#163C53" />
                <stop offset="1" stopColor="#00aac7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-extrabold mb-20 text-center tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>

          <div className="relative w-full h-96 flex items-center justify-center">
            {values.map((value, idx) => {
              const { opacity, scale, x, zIndex } = cardTransforms[idx];

              return (
                <motion.div
                  key={value.title}
                  className="absolute bg-gradient-to-br from-[#1D1F34]/95 via-[#163C53]/85 to-[#00aac7]/35 backdrop-blur-xl rounded-2xl shadow-2xl p-8 flex flex-col items-center border-2 border-[#00aac7]/50 hover:border-[#00aac7] transition-all duration-300 w-80"
                  style={{
                    opacity,
                    scale,
                    x,
                    zIndex,
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 20px 40px rgba(0, 170, 199, 0.3)",
                    borderColor: "#00aac7",
                  }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#00aac7] to-[#3be8b0] rounded-full flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <span className="text-white text-2xl font-bold">{value.title.charAt(0)}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-[#00aac7] text-center">{value.title}</h3>
                  <p className="text-base text-[#F8F8F9]/90 text-center leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;