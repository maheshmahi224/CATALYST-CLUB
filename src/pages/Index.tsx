
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ShaderHero from '@/components/ShaderHero';
import About from '@/components/About';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import ClubIntroduction from '@/components/ClubIntroduction';
import Collaboration from '@/components/Collaboration';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { DockNav } from '@/components/DockNav';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Check if URL has hash and scroll to that section
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <ShaderHero />
        <About />
        <Collaboration />
        <ClubIntroduction />
        <Events />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
      <DockNav />
    </div>
  );
};

export default Index;
