import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "../components/SilkGuildV2/Hero";
import ValueProps from "../components/SilkGuildV2/ValueProps";
import Personas from "../components/SilkGuildV2/Personas";
import HowItWorks from "../components/SilkGuildV2/HowItWorks";
import Bounties from "../components/SilkGuildV2/Bounties";
import Community from "../components/SilkGuildV2/Community";
import Gamification from "../components/SilkGuildV2/Gamification";
import SocialProof from "../components/SilkGuildV2/SocialProof";
import FinalCTA from "../components/SilkGuildV2/FinalCTA";
import Footer from "@/components/Footer";
import '../app/globals.css';


const SilkGuildV2Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1420] via-[#101b28] to-[#0f1420]">
      <NavBar brandName="SILKGUILD" showNavigation={true} ctaText="Join a Guild" ctaLink="#final-cta" />
      <main>
        <Hero />
        <ValueProps />
        <Personas />
        <HowItWorks />
        <Bounties />
        <Community />
        <Gamification />
        <SocialProof />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
};

export default SilkGuildV2Page;
