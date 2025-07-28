import React from 'react';
import StorySection from '../components/StorySection';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../app/globals.css';

const AboutUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <NavBar />
      <StorySection />
      <Footer />
    </main>
  );
};

export default AboutUs;
