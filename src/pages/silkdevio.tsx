import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../app/globals.css';
import HeroSection from '../components/Silkdevio/HeroSection';
import Services from '../components/Silkdevio/Services';
import Technologies from '../components/Silkdevio/Technologies';
import Projects from '../components/Silkdevio/Projects';
import Offers from '../components/Silkdevio/Offers';
import Gurantee from '../components/Silkdevio/Gurantee';

const Silkdevio: React.FC = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <NavBar 
        brandName="SILKDEV.IO"
        showNavigation={true}
        ctaText="Get Started"
        ctaLink="#"
      />
      <HeroSection/>
      <Services/>
      <Projects/>
      <Technologies/>
      <Offers/>
      <Gurantee/>
      <Footer />
    </main>
  );
};

export default Silkdevio;
