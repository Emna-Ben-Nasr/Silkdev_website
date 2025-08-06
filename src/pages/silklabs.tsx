"use client"
import React from "react";
import '../app/globals.css';
import NavBar from "../components/NavBar";
import HeroSection from "../components/Silklabs/HeroSection";
import ValueProposition from "../components/Silklabs/ValueProposition";
import WhoItsFor from "../components/Silklabs/WhoItsFor";
import HowItWorks from "../components/Silklabs/HowItWorks";
import SuccessStories from "../components/Silklabs/SuccessStories";
import Features from "../components/Silklabs/Features";
import CTABanner from "../components/Silklabs/CTABanner";
import UpcomingEvents from "../components/Silklabs/UpcomingEvents";
import Newsletter from "../components/Silklabs/Newsletter";
import SocialProof from "../components/Silklabs/SocialProof";
import Footer from "../components/Footer";
import Guarantee from "@/components/Silklabs/Gurantee";
const SilkLabs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      {/* Flexible NavBar */}
      <NavBar 
        brandName="LABS"
        showNavigation={true}
        ctaText="Join the Hub"
        ctaLink="#"
      />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* Who It's For Section */}
      <WhoItsFor />

      {/* CTA Banner */}
      <CTABanner />  
        
      {/* Features Section */}
      <Features />

      {/* Guarantee Section */}
      <Guarantee/>

      {/* CTA Banner */}
      <CTABanner />  

      {/* How It Works Section */}
      <HowItWorks />


      {/* Success Stories Section */}
      {/* <SuccessStories /> */}


   

      {/* Upcoming Events Section */}
      {/* <UpcomingEvents /> */}

      {/* Newsletter Section */}
      <Newsletter />

      {/* Social Proof Section */}
      {/* <SocialProof /> */}
      <Footer />
    </div>
  );
};

export default SilkLabs;
