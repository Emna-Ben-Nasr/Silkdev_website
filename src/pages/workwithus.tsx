import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../app/globals.css';

const WorkWithUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      {/* NavBar with branding */}
      <NavBar brandName="WORK WITH US" showNavigation={true} ctaText="View Open Roles" ctaLink="#roles" />

      {/* 1. Hero/Intro Section */}
      <section id="hero" className="py-24 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Join Our Mission. Build the Future.</h1>
            <h2 className="text-2xl md:text-3xl text-[#3BE8B0] mb-10 font-semibold">We're looking for passionate, creative people to help us shape the next generation of digital products and services.</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-10">
              <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#00aac7]">See Open Roles</button>
              <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#3BE8B0]">Apply Now</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center min-h-[320px]">
            {/* TODO: Add a team/office illustration or photo here */}
            <div className="w-80 h-64 bg-gradient-to-br from-[#3BE8B0]/20 to-[#00aac7]/20 rounded-3xl flex items-center justify-center text-2xl text-white opacity-80 shadow-2xl border-4 border-[#3BE8B0]/20">[Team Illustration]</div>
          </div>
        </div>
      </section>

      {/* 2. Why Join Us Section */}
      <section id="why" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🌱</div>
              <div className="font-bold text-white mb-2">Growth & Learning</div>
              <div className="text-gray-300">Access to courses, mentorship, and career development.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🤝</div>
              <div className="font-bold text-white mb-2">Collaborative Culture</div>
              <div className="text-gray-300">Work with talented, supportive teammates in a flat structure.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🌍</div>
              <div className="font-bold text-white mb-2">Remote Flexibility</div>
              <div className="text-gray-300">Work from anywhere, with flexible hours and generous PTO.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Open Roles Section */}
      <section id="roles" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Open Roles</h2>
          {/* TODO: Replace with dynamic job listing or connect to ATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-lg font-bold text-white mb-2">Frontend Developer</div>
              <div className="text-gray-300 mb-4">React, Next.js, Tailwind CSS</div>
              <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">Apply</button>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-lg font-bold text-white mb-2">Backend Developer</div>
              <div className="text-gray-300 mb-4">Node.js, PostgreSQL, API Design</div>
              <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">Apply</button>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-lg font-bold text-white mb-2">UI/UX Designer</div>
              <div className="text-gray-300 mb-4">Figma, Prototyping, User Research</div>
              <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">Apply</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Life at Company Section */}
      <section id="life" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Life at Silkdev</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20">
              <p className="text-lg text-white mb-2">“I love the flexibility and the team spirit here. Every day is a new challenge!”</p>
              <div className="text-[#3BE8B0] font-semibold">— Lina, Product Manager</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20">
              <p className="text-lg text-white mb-2">“The learning opportunities and mentorship are amazing. I’ve grown so much.”</p>
              <div className="text-[#00aac7] font-semibold">— Ahmed, Software Engineer</div>
            </div>
          </div>
          {/* TODO: Add a photo/illustration gallery here */}
          <div className="w-full flex justify-center items-center min-h-[200px]">
            <div className="w-64 h-40 bg-gradient-to-br from-[#3BE8B0]/20 to-[#00aac7]/20 rounded-2xl flex items-center justify-center text-2xl text-white opacity-60">[Gallery Placeholder]</div>
          </div>
        </div>
      </section>

      {/* 5. How We Hire Section */}
      <section id="process" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">How We Hire</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 flex flex-col items-center">
              <div className="text-4xl mb-3 text-[#3BE8B0]">📝</div>
              <div className="font-bold text-white mb-2">1. Apply Online</div>
              <div className="text-gray-300">Send your CV and portfolio for the role you want.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 flex flex-col items-center">
              <div className="text-4xl mb-3 text-[#3BE8B0]">💬</div>
              <div className="font-bold text-white mb-2">2. Meet the Team</div>
              <div className="text-gray-300">Intro call and culture fit interview with our team.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 flex flex-col items-center">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🧑‍💻</div>
              <div className="font-bold text-white mb-2">3. Technical Challenge</div>
              <div className="text-gray-300">Show us your skills with a real-world task.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 flex flex-col items-center">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🎉</div>
              <div className="font-bold text-white mb-2">4. Offer & Onboarding</div>
              <div className="text-gray-300">Welcome to the team! We’ll help you get started.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section id="final-cta" className="py-24 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build something amazing together?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all">Apply Now</button>
            <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default WorkWithUs;
