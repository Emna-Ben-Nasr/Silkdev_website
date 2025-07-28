import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined' && gsap && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const StorySection: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.from('.animate-heading', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
    gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section className="story-section bg-white min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-heading">
          A Service Company That Creates Products
        </h2>
        <div className="space-y-16">
          {/* Timeline Item 1 */}
          <div className="timeline-item flex items-center space-x-6">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">The Beginning</h3>
              <p className="text-lg text-gray-600">
                We started as a service company, crafting custom software and solving problems. But we noticed a pattern: businesses failed not because of bad ideas, but because of poor execution.
              </p>
            </div>
          </div>
          {/* Timeline Item 2 */}
          <div className="timeline-item flex items-center space-x-6">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">The Shift</h3>
              <p className="text-lg text-gray-600">
                We stopped just building what was asked. We started asking: <em>What’s missing?</em> The answer was clear—products that should already exist. So, we began creating them.
              </p>
            </div>
          </div>
          {/* Timeline Item 3 */}
          <div className="timeline-item flex items-center space-x-6">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Today</h3>
              <p className="text-lg text-gray-600">
                Now, we’re SILKDEV—a team of builders creating tools that fix what’s broken in industries. We don’t chase trends. We build what people need, sector by sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
