
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Certification from '@/components/Certification';
import ClubIntroduction from '@/components/ClubIntroduction';
import Collaboration from '@/components/Collaboration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certification />
        <ClubIntroduction />
        <Collaboration />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
