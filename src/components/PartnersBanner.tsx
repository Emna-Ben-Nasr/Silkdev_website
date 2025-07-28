"use client";

import Image from "next/image";
import creacom from "@/assets/creacom.avif";
import iphone from "@/assets/iphone.png";
import luca from "@/assets/luca.avif";
import wolves from "@/assets/wolves.svg";
import truvado from "@/assets/truvado.svg";
import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "CreaCom", logo: creacom },
  { name: "iphone", logo: iphone },
  { name: "luca", logo: luca },
  { name: "wolves", logo: wolves },
  { name: "truvado", logo: truvado },
];

export default function PartnersBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    // Calculate how many times to repeat the logos to fill at least 2x the viewport width
    if (containerRef.current) {
      const logoSetWidth = containerRef.current.scrollWidth / 2; // since default is 2 sets
      const viewportWidth = window.innerWidth;
      const minWidth = viewportWidth * 2;
      const count = Math.ceil(minWidth / logoSetWidth) * 2; // double for seamlessness
      setRepeatCount(count);
    }
  }, []);

  // Repeat the partners array
  const logos = Array.from({ length: repeatCount }, () => partners).flat();

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] py-10">
      <div className="relative w-full">
        <div
          className="flex animate-scrollBanner min-w-max"
          ref={containerRef}
        >
          {logos.map((partner, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center w-48 h-28 mx-10"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={160}
                height={90}
                className="object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes scrollBanner {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollBanner {
          animation: scrollBanner 30s linear infinite;
        }
      `}</style>
    </div>
  );
}