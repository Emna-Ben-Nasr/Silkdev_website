import Image from "next/image";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services Section/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import PartnersBanner from "@/components/PartnersBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <NavBar />
      <Hero />
      <PartnersBanner />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
