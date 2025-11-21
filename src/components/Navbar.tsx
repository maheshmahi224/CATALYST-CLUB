
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-white ${
        isScrolled ? 'bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src="/lovable-uploads/e2f7c36a-f301-4db2-a896-4e0433b137a4.png"
                alt="Catalyst Club Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-bold text-white">
                CATALYST<span className="text-catalyst-teal">CLUB</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-catalyst-teal to-catalyst-cyan hover:opacity-90 transition-opacity"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfsHPgxAR_tCcRkTxK27A9m3lt5CFR3eTEKpbZ58nqKAgd0KA/viewform?usp=dialog', '_blank')}
              >
                Join Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-catalyst-teal focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Button 
            className="w-full mt-2 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan hover:opacity-90 transition-opacity"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfsHPgxAR_tCcRkTxK27A9m3lt5CFR3eTEKpbZ58nqKAgd0KA/viewform?usp=dialog', '_blank')}
          >
            Join Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
