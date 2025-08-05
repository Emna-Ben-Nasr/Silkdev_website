"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import silkdevio from "@/assets/silkdevio.jpg";
import silkguild from "@/assets/silkguild.jpg";
import silknexus from "@/assets/silknexus.jpg";
import silklabs from "@/assets/silklabs.jpg";
import { useInView } from "react-intersection-observer";

const servicesData = [
  {
    title: "SILKDEV.IO",
    description: "A resource-based approach to development services with flexible credits and no long-term contracts.",
    image: silkdevio,
    url: "https://silkdev.io",
  },
  {
    title: "SILKGUILD",
    description: "Education with RPG mechanics, offering guilds and bounties for structured learning progress.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    url: "https://silkguild.com",
  },
  {
    title: "SILKNEXUS",
    description: "Seamless financial management with real-time access and a built-in store feature.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    url: "https://silknexus.com",
  },
  {
    title: "SILKLABS",
    description: "A hub for professionals, companies, and investors to collaborate and innovate.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    url: "https://silklabs.com",
  },
];

const ServiceCardScrollFade = ({ service, direction = 'row' }: { service: any, direction?: 'row' | 'row-reverse' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2 });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Combine refs for scroll and inView
  const combinedRef = (node: any) => {
    ref.current = node;
    inViewRef(node);
  };

  return (
    <div
      ref={combinedRef}
      className={`w-full flex flex-col ${direction === 'row' ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[60vh] gap-8 md:gap-16 justify-center items-center`}
    >
      {/* Image - smaller, with border, shadow, and hover effect */}
      <div className="relative w-full md:w-2/6 h-56 md:h-[340px] flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #00aac7' }}
          className="w-full h-full rounded-2xl border-4 border-[#00aac7]/30 shadow-xl overflow-hidden bg-white/10"
          style={{ zIndex: 1 }}
        >
          {typeof service.image === 'string' ? (
            <motion.img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full rounded-2xl"
              style={{ y: imageY }}
              initial={{ scale: 1.05, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          ) : (
            <motion.div
              className="object-cover w-full h-full rounded-2xl"
              style={{ y: imageY }}
              initial={{ scale: 1.05, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Image src={service.image} alt={service.title} fill className="object-cover rounded-2xl" priority />
            </motion.div>
          )}
        </motion.div>
      </div>
      {/* Card - larger, with glass/gradient effect and more padding */}
      <motion.div
        className="relative max-w-2xl w-full md:w-3/5 bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col border-2 border-transparent hover:border-[#00aac7] hover:shadow-[0_0_32px_0_#00aac7] transition-all duration-300 "
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold mb-4 text-[#F8F8F9] text-left">{service.title}</h2>
        <p className="mb-8 text-lg text-[#F8F8F9]/80 text-left">{service.description}</p>
        <motion.a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-between mt-2 px-6 py-3 bg-gradient-to-r from-[#00aac7] to-[#3be8b0] rounded-lg text-white font-semibold shadow-md transition-all duration-300 gap-3 hover:bg-[#3be8b0] hover:from-[#3be8b0] hover:to-[#3be8b0]"
        >
          <span>Visit Website</span>
          <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Services: React.FC = () => {
  const container = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const lenis = new (require('lenis')).default();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main
      ref={container}
      className="relative min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]"
    >
      <div className="flex flex-col gap-24 items-center justify-center min-h-screen py-24">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold text-center text-[#F8F8F9] mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
Our Bag of Digital Tricks

</motion.h2>
        {servicesData.map((service, idx) => (
          <ServiceCardScrollFade key={service.title} service={service} direction={idx % 2 === 0 ? 'row' : 'row-reverse'} />
        ))}
      </div>
    </main>
  );
};

export default Services;