import React from 'react';
import StorySection from '../components/StorySection';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../app/globals.css';
import Mission from '../components/Mission';
import ValuesSection from '../components/ValuesSection';

const AboutUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <NavBar />
      <StorySection />
      <Mission />
      <ValuesSection />
      <Footer />
    </main>
  );
};

export default AboutUs;
