'use client'
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { withTextSkewAnimation } from "@/animations/TextAnimation";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const serviceLinks = [
  { name: "SILKDEV.IO", href: "/" },
  { name: "SILKNEXUS", href: "/" },
  { name: "SILKGUILD", href: "/" },
  { name: "SILKLABS", href: "/" },
];

// Silkdev heading as a component
const SilkdevHeading: React.FC = () => (
  <p
    className="font-extrabold text-center uppercase drop-shadow-lg"
    style={{
      fontFamily: 'Drystick-Bold, Drystick-Bold Placeholder, sans-serif',
      fontSize: 'clamp(3rem, 18vw, 12rem)',
      letterSpacing: '-8.5px',
      lineHeight: '1.2',
      color: '#fff',
      textShadow: '0 4px 32px #7ED6A7, 0 2px 8px #1D1F34',
    }}
  >
    SILKDEV
  </p>
);

const AnimatedSilkdevHeading = withTextSkewAnimation(SilkdevHeading);

const Footer: React.FC = () => {
  // Parallax/floating effect on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <footer className="w-full bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] pt-16 pb-8 px-4">
      {/* Animated SILKDEV heading */}
      <div className="flex flex-col items-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ y }}
          className="w-full flex flex-col items-center"
        >
          <AnimatedSilkdevHeading />
        </motion.div>
      </div>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto rounded-3xl shadow-2xl bg-[#1D1F34]/80 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 p-8 md:p-12 border border-[#2a2a3a]">
        {/* Contact/Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white mb-2 relative inline-block">
            <span className="pb-1 border-b-4 border-[#7ED6A7]">GET IN TOUCH</span>
          </h3>
          <a
            href="mailto:contact@silkdev.com.tn"
            className="text-base font-semibold text-[#F2F2F2] hover:text-[#7ED6A7] transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@silkdev.com.tn
          </a>
          <span className="text-base font-semibold text-[#F2F2F2]">8AM - 5PM (UTC) Monday - Friday</span>
        </div>
        {/* Company */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white mb-2 relative inline-block">
            <span className="pb-1 border-b-4 border-[#00aac7]">Company</span>
          </h3>
          <ul className="text-sm text-[#F2F2F2] space-y-2">
            {companyLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#00aac7] transition-colors duration-200 font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white mb-2 relative inline-block">
            <span className="pb-1 border-b-4 border-[#9dd5bf]">Services</span>
          </h3>
          <ul className="text-sm text-[#F2F2F2] space-y-2">
            {serviceLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#9dd5bf] transition-colors duration-200 font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom row: copyright, legal, social */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#2a2a3a] pt-6">
        <span className="text-xs text-[#00aac7] font-medium">Copyright © Silkdev LLC. 2025</span>
        <div className="flex gap-4">
          <a href="/privacy-policy" className="text-xs text-gray-400 hover:text-[#7ED6A7] font-medium transition-colors duration-200">Privacy Policy</a>
          <a href="/terms-of-service" className="text-xs text-gray-400 hover:text-[#A993F8] font-medium transition-colors duration-200">Terms of Service</a>
        </div>
        <div className="flex gap-4">
         
          <a href="https://www.facebook.com/silkdevcorp" target="_blank" rel="noopener" className="text-white hover:text-[#7ED6A7] text-xl transition-colors duration-200" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/silkdev" target="_blank" rel="noopener" className="text-white hover:text-[#A993F8] text-xl transition-colors duration-200" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="https://www.instagram.com/silkdev" target="_blank" rel="noopener" className="text-white hover:text-[#9dd5bf] text-xl transition-colors duration-200" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="https://goo.gl/maps/your-location" target="_blank" rel="noopener" className="text-white hover:text-[#00aac7] text-xl transition-colors duration-200" aria-label="Location">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
