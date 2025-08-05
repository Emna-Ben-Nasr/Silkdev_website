import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import shadcn from "@/assets/shadcn.png";
import typescript from "@/assets/typescript.svg";
import nextjs from "@/assets/nextjs.png";
import tailwindcss from "@/assets/tailwindcss.png";
import nodejs from "@/assets/nodejs.png";


const Technologies = () => {
  const technologies = [
    {
      id: 1,
      name: "Next js",
      description: "React framework for production",
      image: nextjs,
      category: "Frontend",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "React js",
      description: "JavaScript library for building user interfaces",
      icon: "⚛️",
      category: "Frontend",
      color: "from-cyan-400 to-blue-500"
    },
    // {
    //   id: 3,
    //   name: "TypeScript",
    //   description: "Typed JavaScript at scale",
    //   image: typescript,
    //   category: "Language",
    //   color: "from-blue-600 to-blue-800"
    // },
    {
      id: 4,
      name: "PostgreSQL",
      description: "Advanced open source database",
      icon: "🐘",
      category: "Database",
      color: "from-blue-400 to-indigo-600"
    },
    {
      id: 5,
      name: "shadcn/ui",
      description: "Beautifully designed components",
      image: shadcn,
      category: "UI Library",
      color: "from-gray-600 to-gray-800"
    },
    // {
    //   id: 6,
    //   name: "Tailwind CSS",
    //   description: "Utility-first CSS framework",
    //   image: tailwindcss,
    //   category: "Styling",
    //   color: "from-cyan-400 to-blue-500"
    // },
    {
      id: 7,
      name: "Node.js",
      description: "JavaScript runtime environment",
      image: nodejs,
      category: "Backend",
      color: "from-green-500 to-green-700"
    },
    {
      id: 8,
      name: "Docker",
      description: "Containerization platform",
      icon: "🐳",
      category: "DevOps",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(3);

  useEffect(() => {
    // Calculate how many times to repeat the technologies to fill at least 2x the viewport width
    if (containerRef.current) {
      const techSetWidth = containerRef.current.scrollWidth / 3; // since default is 3 sets
      const viewportWidth = window.innerWidth;
      const minWidth = viewportWidth * 2;
      const count = Math.ceil(minWidth / techSetWidth) * 3; // triple for seamlessness
      setRepeatCount(count);
    }
  }, []);

  // Repeat the technologies array
  const techItems = Array.from({ length: repeatCount }, () => technologies).flat();

  return (
    <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Tech Stack
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We use cutting-edge technologies to build modern, scalable, and performant applications. 
            Our expertise spans the entire development stack.
          </motion.p>
        </div>
      </div>

      {/* Full Width Scrolling Technologies Banner */}
      <div className="w-full overflow-hidden relative">
        {/* Left Gradient Fade - matches background gradient */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#163C53] via-[#163C53]/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Gradient Fade - matches background gradient */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#163C53] via-[#163C53]/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="relative w-full">
          <div
            className="flex animate-scrollTechBanner min-w-max"
            ref={containerRef}
          >
            {techItems.map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center mx-8"
              >
                {/* Tech Icon/Image Only - No Background */}
                <div className="flex flex-col items-center justify-center group">
                  <div className="flex items-center justify-center text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.image ? (
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    ) : (
                      tech.icon
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#00aac7] transition-colors duration-300 text-center">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We stay up-to-date with the latest technologies and best practices to ensure 
            we deliver the most innovative solutions for our clients.
          </p>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes scrollTechBanner {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scrollTechBanner {
          animation: scrollTechBanner 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Technologies;
