import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logosilkdev from '../assets/logosilkdev.png';

const timelineData = [
  {
    year: 1986,
    title: "The Freelance Spark",
    subtitle: "Humble Beginnings",
    description: "SILKDEV began as a small freelance operation, taking on diverse, random projects. We honed our craft by solving unique challenges, learning the art of custom software development with a focus on creativity and adaptability.",
    achievements: ["First freelance gigs", "Team of 2 developers", "Projects across industries"],
    icon: "M12 2l3 7h7l-3 7-7-3-7 3-3-7h7z",
    image: "/images/freelancer-coding.jpg",
    imageAlt: "Freelancer coding on laptop",
  },
  {
    year: 1995,
    title: "Building SILKDEV",
    subtitle: "Customer-Driven Solutions",
    description: "From freelancing, we formalized SILKDEV, focusing on building services tailored to customer needs. We listened closely, delivering custom tools and systems that empowered businesses to thrive through precise, reliable execution.",
    achievements: ["50+ client projects", "Team grew to 12", "First office in Tunis"],
    icon: "M9 5l7 7-7 7",
    image: "/images/team-collaborating.jpg",
    imageAlt: "Team collaborating in office",
  },
  {
    year: 2005,
    title: "Creating What's Missing",
    subtitle: "One-Stop Innovation",
    description: "Today, SILKDEV is a visionary force, identifying gaps in industries and building what’s missing. We’re your one-stop destination for innovative products and solutions, designed to simplify, connect, and transform.",
    achievements: ["150+ transformative projects", "Global client base", "Industry innovation awards"],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    image: logosilkdev,
    imageAlt: "SILKDEV Today",
  },
];

const StorySection = () => (
  <section className="py-32 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] min-h-screen">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-5xl font-extrabold text-[#F8F8F9] text-center mb-16 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        From Pixels to Progress: Our Story
      </motion.h2>
      <div className="relative">
        {/* Vertical Timeline Connector */}
        <div className="absolute left-1/2 w-1 bg-gradient-to-b from-[#00aac7] to-[#163C53] h-full transform -translate-x-1/2 hidden lg:block"></div>

        {timelineData.map((story, index) => (
          <div
            key={story.year}
            className={`relative flex items-center justify-center py-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            <motion.div
              className="relative w-full lg:w-1/2 bg-gradient-to-br from-[#1D1F34]/95 via-[#163C53]/85 to-[#00aac7]/35 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border-2 border-[#00aac7]/50 hover:border-[#00aac7] hover:shadow-[0_0_20px_0_#00aac7] transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <svg
                    className="w-10 h-10 text-[#00aac7] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={story.icon} />
                  </svg>
                  <div>
                    <h3 className="text-3xl font-bold text-[#F8F8F9]">{story.title}</h3>
                    <p className="text-lg text-[#F8F8F9]/80">{story.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-[#F8F8F9]/90 leading-relaxed">{story.description}</p>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:mx-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            >
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg border-2 border-[#00aac7]/50">
                {typeof story.image === 'string' ? (
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      width={180}
                      height={180}
                      quality={100}
                      className="object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1F34]/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StorySection;