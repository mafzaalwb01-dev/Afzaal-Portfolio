import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ServicesSection from '../sections/ServicesSection';
import ExperienceSection from '../sections/ExperienceSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';
import FooterSection from '../sections/FooterSection';

const Home = () => {
  return (
    <div className="relative z-10">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Home;
