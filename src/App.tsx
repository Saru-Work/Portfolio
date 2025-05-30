import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ResumeSection from './components/sections/ResumeSection';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(40,40,40,0.15),transparent_50%)] pointer-events-none"></div>
      <CursorEffect />
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;