import React from 'react';
import StorySection from '../components/StorySection';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../app/globals.css';
import Mission from '../components/Mission';
import ValuesSection from '../components/ValuesSection';
import Team from '../components/Team';
import Services from '../components/Services Section/Services';
import PartnersBanner from '../components/PartnersBanner';
import Contact from '../components/Contact';
import Decision from '../components/Decision';

const AboutUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <NavBar />
      <StorySection />
      <Mission />
      <ValuesSection />
      <Team />
      <Services/>
      <PartnersBanner/>
      <Decision/>
      <Footer />
    </main>
  );
};

export default AboutUs;
