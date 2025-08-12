"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import tutorialImage from '@/assets/tutorial.png'; // Correct path using relative import
import learning from '@/assets/learning.jpg';
import forum from '@/assets/forum.png'; // Assuming you have a forum threads image

const TutorialHellSVG: React.FC = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-40"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <defs>
      <linearGradient id="tutorialGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1D1F34" />
        <stop offset="100%" stopColor="#163C53" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#tutorialGradient)" />
    <g transform="translate(40, 30)" opacity="0.9">
      <rect width="320" height="200" rx="8" fill="#1D1F34" stroke="#00aac7" strokeWidth="1" />
      <rect x="20" y="40" width="280" height="4" fill="#F8F8F9" opacity="0.6" />
      <rect x="20" y="60" width="200" height="4" fill="#F8F8F9" opacity="0.4" />
      <rect x="20" y="80" width="240" height="4" fill="#F8F8F9" opacity="0.6" />
    </g>
  </motion.svg>
);

const ForumThreadsSVG: React.FC = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-40"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <defs>
      <linearGradient id="forumGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1D1F34" />
        <stop offset="100%" stopColor="#163C53" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#forumGradient)" />
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(20, ${i * 50 + 20})`}>
        <rect width="360" height="40" rx="4" fill="#1D1F34" stroke="#00aac7" strokeWidth="1" opacity={0.8 - i * 0.1} />
        <circle cx="30" cy="20" r="15" fill="#163C53" stroke="#00aac7" strokeWidth="1" />
        <rect x="60" y="15" width="280" height="4" fill="#F8F8F9" opacity={0.6 - i * 0.1} />
        <rect x="60" y="25" width="200" height="4" fill="#F8F8F9" opacity={0.4 - i * 0.1} />
      </g>
    ))}
  </motion.svg>
);

const LearningIsolationSVG: React.FC = () => (
  <motion.svg
    viewBox="0 0 400 300"
    className="w-full h-40"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <defs>
      <linearGradient id="isolationGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1D1F34" />
        <stop offset="100%" stopColor="#163C53" />
      </linearGradient>
      <radialGradient id="spotlightGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00aac7" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#1D1F34" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#isolationGradient)" />
    <circle cx="200" cy="150" r="100" fill="url(#spotlightGradient)" />
    <g transform="translate(150, 100)">
      <rect width="100" height="80" rx="4" fill="#1D1F34" stroke="#00aac7" strokeWidth="1" />
      <rect x="20" y="20" width="60" height="4" fill="#F8F8F9" opacity="0.6" />
      <rect x="20" y="30" width="40" height="4" fill="#F8F8F9" opacity="0.4" />
    </g>
  </motion.svg>
);

const WhySection: React.FC = () => {
  const features = [
    {
      icon: "🏰",
      title: "Guild-Based Learning",
      description: "Imagine learning not alone in your room, but surrounded by fellow adventurers. Join guilds where knowledge flows freely, questions get answered instantly, and friendships form over shared goals.",
      color: "from-[#00aac7]/20 to-[#01737d]/20",
      borderColor: "border-[#00aac7]/30"
    },
    {
      icon: "🎯",
      title: "Bounty System",
      description: "Every skill you want to master becomes a quest. Take on real-world challenges, complete projects that matter, and watch your XP grow as you build something meaningful.",
      color: "from-[#01737d]/20 to-[#00aac7]/20",
      borderColor: "border-[#01737d]/30"
    },
    {
      icon: "🛡️",
      title: "RPG Mechanics",
      description: "Level up like a true hero. Collect badges that prove your expertise, unlock new titles as you progress, and see your learning journey visualized like never before.",
      color: "from-[#00aac7]/20 to-[#01737d]/20",
      borderColor: "border-[#00aac7]/30"
    },
    {
      icon: "🗺️",
      title: "Structured Paths",
      description: "No more wondering what to learn next. Follow carefully crafted roadmaps that guide you from beginner to expert, with each step building on the last.",
      color: "from-[#01737d]/20 to-[#00aac7]/20",
      borderColor: "border-[#01737d]/30"
    },
    {
      icon: "🧠",
      title: "Micro-Challenges",
      description: "Break down complex topics into bite-sized, engaging tasks. Stay motivated with quick wins that keep you coming back for more, day after day.",
      color: "from-[#00aac7]/20 to-[#01737d]/20",
      borderColor: "border-[#00aac7]/30"
    },
    {
      icon: "🌟",
      title: "Achievement System",
      description: "Celebrate every milestone with a comprehensive achievement system. From first quest completion to guild leadership, every accomplishment is recognized and rewarded.",
      color: "from-[#01737d]/20 to-[#00aac7]/20",
      borderColor: "border-[#01737d]/30"
    }
  ];

  // Update your problem cards section
  const problemCards = [
    {
      image: tutorialImage,
      title: "Tutorial Hell",
      description: "You're sitting there, staring at another boring tutorial, wondering if you'll ever actually build something real."
    },
    {
      icon: <ForumThreadsSVG />,
      title: "Lost in Forums",
      description: "You try to ask questions online, but get lost in endless forum threads. Your motivation is fading."
    },
    {
      icon: <LearningIsolationSVG />,
      title: "Learning Alone",
      description: "87% of learners give up because they're learning in isolation, without real projects or community."
    }
  ];

  return (
    <section id="why" className="relative py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-16 h-16 border border-[#00aac7]/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-[#01737d]/10 to-[#00aac7]/10 rounded-lg"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Problem Statement - Enhanced and Conversational */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block mb-4">😩 Hey, I know exactly how you feel...</span>
              <motion.span
                className="block bg-gradient-to-r from-[#ff6b6b] via-[#ff8e8e] to-[#ff6b6b] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 100%",
                  lineHeight: "1.2"
                }}
              >
                Learning Alone Sucks
              </motion.span>
            </motion.h2>

            {/* Expanded Problem Description */}
            {/* <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto bg-gradient-to-br from-[#1D1F34]/80 to-[#163C53]/80 p-6 rounded-lg shadow-lg border border-[#00aac7]/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mb-6">
                You're sitting there, staring at another boring tutorial, wondering if you'll ever actually <span className="text-[#00aac7] font-semibold">build something real</span>.
                The courses promise the world, but you're stuck in tutorial hell.
              </p>

              <p className="mb-6">
                You try to ask questions online, but get lost in endless forum threads. Your motivation is fading, and that project you wanted to build?
                It's still just an idea in your head.
              </p>

              <p className="mb-8">
                Sound familiar? You're not alone. <span className="text-[#3BE8B0] font-semibold">87% of learners give up</span> because they're learning in isolation,
                without real projects, without community, without that spark that keeps you going.
              </p>
            </motion.div> */}

            {/* Divided Problem Points with Images */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Point 1 */}
              <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#163C53]/80 p-6 rounded-lg shadow-lg border border-[#00aac7]/30 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Tutorial Hell</h3>
                <Image src={tutorialImage} alt="Tutorial Hell" className="w-full h-40 object-cover rounded-md mb-4" />
                <p className="text-gray-300">
                  You're sitting there, staring at another boring tutorial, wondering if you'll ever actually <span className="text-[#00aac7] font-semibold">build something real</span>. The courses promise the world, but you're stuck in tutorial hell.
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#163C53]/80 p-6 rounded-lg shadow-lg border border-[#00aac7]/30 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Lost in Forums</h3>
                <Image src={forum} alt="Lost in Forums" className="w-full h-40 object-cover rounded-md mb-4" />
                <p className="text-gray-300">
                  You try to ask questions online, but get lost in endless forum threads. Your motivation is fading, and that project you wanted to build? It's still just an idea in your head.
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-gradient-to-br from-[#1D1F34]/80 to-[#163C53]/80 p-6 rounded-lg shadow-lg border border-[#00aac7]/30 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Learning in Isolation</h3>
                <Image src={learning} alt="Learning in Isolation" className="w-full h-40 object-cover rounded-md mb-4" />
                <p className="text-gray-300">
                  Sound familiar? You're not alone. <span className="text-[#3BE8B0] font-semibold">87% of learners give up</span> because they're learning in isolation, without real projects, without community, without that spark that keeps you going.
                </p>
              </div>
            </motion.div>

            {/* Transition to Solution */}
            <motion.div
              className="bg-gradient-to-r from-[#00aac7]/10 to-[#3BE8B0]/10 border border-[#00aac7]/20 rounded-2xl p-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                className="text-[#3BE8B0] font-bold text-2xl mb-4"
                animate={{
                  scale: [1, 1.02, 1],
                  textShadow: ["0 0 0px rgba(59, 232, 176, 0)", "0 0 20px rgba(59, 232, 176, 0.3)", "0 0 0px rgba(59, 232, 176, 0)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀 But what if learning could be... <span className="text-white">FUN?</span>
              </motion.div>
              <p className="text-xl text-gray-300">
                What if you could learn with friends, build real projects, and actually see your progress?
                That's exactly what <span className="font-bold text-[#00aac7]">SILKGUILD</span> is all about.
              </p>
            </motion.div>
          </motion.div>

          {/* Solution Introduction */}
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Here's How We're <span className="text-[#3BE8B0]">Revolutionizing</span> Learning:
          </motion.h3>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -5
                }}
              >
                {/* Storytelling background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1D1F34]/90 via-[#163C53]/80 to-[#00aac7]/30 border border-[#00aac7]/20 hover:border-[#00aac7]/50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Icon - Static, no animation */}
                  <div className="text-4xl mb-4 opacity-80">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#00aac7] transition-colors duration-300">
                    {feature.title}
                  </h4>

                  {/* Storytelling Description */}
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle hover effect border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "#00aac7",
                    opacity: 0.2
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Storytelling accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00aac7] to-[#01737d]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof - Storytelling Style */}
          <motion.div
            className="bg-gradient-to-r from-[#00aac7]/10 to-[#01737d]/10 border border-[#00aac7]/20 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <motion.div
              className="text-[#00e396] font-semibold text-lg md:text-xl"
              animate={{
                scale: [1, 1.02, 1],
                textShadow: ["0 0 0px rgba(0, 227, 150, 0)", "0 0 20px rgba(0, 227, 150, 0.3)", "0 0 0px rgba(0, 227, 150, 0)"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🚀 Be among the <span className="font-bold text-2xl">first adventurers</span> to experience the future of learning.
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <motion.div
        className="absolute top-20 left-1/4 w-2 h-2 bg-[#00aac7] rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-[#01737d] rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: 2
        }}
      />
    </section>
  );
};

export default WhySection;