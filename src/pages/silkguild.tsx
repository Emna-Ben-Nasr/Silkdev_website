import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {
  HeroSection,
  WhySection,
  HowItWorks,
  WhoItsFor,
  Testimonials,
  GuildLeaderCTA,
  FOMOSection,
  PricingSection,
  FinalCTA
} from '../components/SilkGuild';
import '../app/globals.css';

const silkguild: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      {/* NavBar with SILKGUILD branding */}
      <NavBar brandName="SILKGUILD" showNavigation={true} ctaText="Start Your Journey" ctaLink="#" />

      {/* SilkGuild Sections */}
      <HeroSection />
      <WhySection />
      <WhoItsFor />
      <GuildLeaderCTA />
      <HowItWorks />
      {/* <Testimonials /> */}
      {/* <FOMOSection /> */}
      <PricingSection />
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default silkguild;